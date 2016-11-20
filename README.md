# Homebridge LGtv2 [![NPM Version](https://img.shields.io/npm/v/homebridge-lgtv2.svg?style=flat-square)](https://npmjs.org/package/homebridge-lgtv2) [![NPM Downloads](https://img.shields.io/npm/dt/homebridge-lgtv2.svg?style=flat-square)](https://npmjs.org/package/homebridge-lgtv2)
LG webOS 2 plugin for Homebridge

#### Features
* Live status
* Turn on
* Turn off

#### Install
```bash
npm install -g homebridge-lgtv2
```

#### Example config
```json
{
  "accessories": [
    {
      "accessory": "LGTv2",
      "name": "TV",
      "mac": "E8:F2:E2:09:C2:56",
      "ip": "10.0.1.4"
    }
  ]
}
```
