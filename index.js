var Service, Characteristic
var wol = require('wake_on_lan')

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
  this.connected = false

  this.lgtv = require('lgtv2')({
    url: 'ws://' + this.ip + ':3000',
    timeout: 5000,
    reconnect: 3000
  })
  var self = this
  this.lgtv.on('connect', function() {
    self.log('LGTv2 connected')
    self.connected = true
  })
  this.lgtv.on('close', function() {
    self.log('LGTv2 disconnected')
    self.connected = false
  })
  this.lgtv.on('error', function(error) {
    self.log('LGTv2 error %s', error)
    self.connected = false
    //self.lgtv.connect('ws://' + self.ip + ':3000')
  })
  this.lgtv.on('prompt', function() {
    self.log('LGTv2 prompt')
    self.connected = false
  })
  this.lgtv.on('connecting', function() {
    self.log('LGTv2 connecting')
    self.connected = false
  })

  this.service = new Service.Switch(this.name)

  this.service
    .getCharacteristic(Characteristic.On)
    .on('get', this.getState.bind(this))
    .on('set', this.setState.bind(this))
}

LGTv2.prototype.getState = function(callback) {
  return callback(null, this.connected)
}

LGTv2.prototype.checkWakeOnLan = function(callback) {
  if (this.connected) {
    return callback(null, true)
  } else {
    this.lgtv.connect('ws://' + this.ip + ':3000')
    setTimeout(this.checkWakeOnLan.bind(this, callback), 5000)
  }
}

LGTv2.prototype.setState = function(state, callback) {
  if (state) {
    var self = this
    wol.wake(this.mac, function(error) {
      if (error) return callback(new Error('LGTv2 wake on lan error'))
      setTimeout(self.checkWakeOnLan.bind(self, callback), 5000)
    })
  } else {
    if (this.connected) {
      var self = this
      this.lgtv.request('ssap://system/turnOff', function(err, res) {
        if (err) return callback(null, false)
        self.lgtv.disconnect()
        return callback(null, true)
      })
    } else {
      return callback(new Error('LGTv2 is not connected'))
    }
  }
}

LGTv2.prototype.getServices = function() {
  return [
    this.service
  ]
}
