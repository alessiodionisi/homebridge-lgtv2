# Homebridge LGtv2 [![NPM Version](https://img.shields.io/npm/v/homebridge-lgtv2.svg?style=flat-square)](https://npmjs.org/package/homebridge-lgtv2) [![NPM Downloads](https://img.shields.io/npm/dt/homebridge-lgtv2.svg?style=flat-square)](https://npmjs.org/package/homebridge-lgtv2)
LG webOS 2/3 plugin for Homebridge

## Features
* Live status
* Power on
* Power off

## Enable this in your TV settings
![alt text](https://s14.postimg.org/3p3fb9fgx/IMG_2750.jpg "TV settings")

## Install
```bash
npm install -g homebridge-lgtv2
```

## Example config
```json
{
  "accessories": [
    {
      "accessory": "LGTv2",
      "name": "TV",
      "mac": "E8:F2:E2:09:C2:56",
      "ip": "10.0.1.4",
      "keyFile": "/var/homebridge/lgtv-"
    }
  ]
}
```

### Fields
- "accessory": Must always be "LGTv2" (required).
- "name": Name of your accessory (required).
- "mac": Mac Address of your LG TV (required).
- "ip": IP Address of your LG TV (required).
- "keyFile": Location to store app permission token for your LGTV (optional).  Defaults to the ./node_modules/lgtv2 plug in folder.

## Changelogs
### Version 1.2.1
- New README

### Version 1.2.0
- More fast and stable power up

### Version 1.1.1
- Fixed wake on lan
- Solved getState lag
