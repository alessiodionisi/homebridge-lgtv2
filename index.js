var Service, Characteristic
var wol = require('wake_on_lan')
var ping = require('ping')

module.exports = function(homebridge) {
  Service = homebridge.hap.Service
  Characteristic = homebridge.hap.Characteristic
  homebridge.registerAccessory('homebridge-lgtv2', 'LGTv2', LGTv2)
}

function LGTv2(log, config, api) {
  this.log = log
  this.ip = config['ip']
  this.name = config['name']
  this.mac = config['mac']
  this.powered = false

  this.service = new Service.Switch(this.name)

  this.service
    .getCharacteristic(Characteristic.On)
    .on('get', this.getState.bind(this))
    .on('set', this.setState.bind(this))
}

LGTv2.prototype.getState = function(callback) {
  var self = this
  ping.sys.probe(this.ip, function(isAlive) {
    if (!isAlive) {
      self.powered = false
      return callback(null, false)
    } else {
      self.powered = true
      return callback(null, true)
    }
  })
}

LGTv2.prototype.checkInterval = function(callback) {
  var self = this
  ping.sys.probe(this.ip, function(isAlive) {
    if (!isAlive) {
      self.powered = false
      setTimeout(self.checkInterval.bind(self, callback), 5000)
    } else {
      self.powered = true
      return callback(null, true)
    }
  })
}

LGTv2.prototype.setState = function(state, callback) {
  var self = this
  if (state) {
    if (self.powered) {
      return callback(null, true)
    } else {
      wol.wake(this.mac, function(err) {
        setTimeout(self.checkInterval.bind(self, callback), 5000)
      })
    }
  } else {
    if (self.powered) {
      var cb = false
      var lgtv = require('lgtv2')({
        url: 'ws://' + this.ip + ':3000',
        timeout: 4000,
        reconnect: 0
      })
      lgtv.on('error', function() {
        self.powered = false
        if (!cb) {
          cb = true
          return callback(new Error('LGTv2 not connected'))
        }
      })
      lgtv.on('connect', function() {
        self.powered = true
        lgtv.request('ssap://system/turnOff', function(err, res) {
          lgtv.disconnect()
          self.powered = false
          if (!cb) {
            cb = true
            return callback(null, true)
          }
        })
      })
    } else {
      return callback(null, false)
    }
  }
}

LGTv2.prototype.getServices = function() {
  return [
    this.service
  ]
}
