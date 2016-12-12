# Homebridge LGTv2

[![NPMV](https://img.shields.io/npm/v/homebridge-lgtv2.svg?style=flat-square)](https://npmjs.org/package/homebridge-lgtv2)
[![Travis](https://img.shields.io/travis/alessiodionisi/homebridge-lgtv2.svg?style=flat-square)](https://travis-ci.org/alessiodionisi/homebridge-lgtv2)
[![David](https://img.shields.io/david/alessiodionisi/homebridge-lgtv2.svg?style=flat-square)](https://david-dm.org/alessiodionisi/homebridge-lgtv2)
[![NPML](https://img.shields.io/npm/l/homebridge-lgtv2.svg?style=flat-square)](https://github.com/alessiodionisi/homebridge-lgtv2/blob/master/LICENSE)
[![NPMD](https://img.shields.io/npm/dt/homebridge-lgtv2.svg?style=flat-square)](https://npmjs.org/package/homebridge-lgtv2)

LG webOS 2/3 plugin for Homebridge.

To use all feature of this plugin you need the [Elgato Eve](https://www.elgato.com/en/eve/eve-app) app.

## Features
* Power on/off
* Change volume
* Change channel
* View channel name

## Install
```bash
npm install -g homebridge-lgtv2
```

## Homebridge Configuration
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
- `accessory` Must always be "LGTv2" (required).
- `name` Name of your accessory (required).
- `mac` Mac Address of your LG TV (required).
- `ip` IP Address of your LG TV (required).
- `keyFile` Location to store app permission token for your LGTV (optional). Defaults to the ./node_modules/lgtv2 plug in folder.

## LG TV Settings
Enable this option in your TV settings
![alt text](https://s14.postimg.org/3p3fb9fgx/IMG_2750.jpg "TV settings")

## Changelogs
### Version 1.3.0
- [NEW] Control the volume
- [NEW] Control the channel number
- [NEW] Identify toast
- [NEW] View the channel name

### Version 1.2.2
- [NEW] Config field `keyFile`

### Version 1.2.1
- Readme

### Version 1.2.0
- More fast and stable power up

### Version 1.1.1
- WoL fixed
- GetState fixed
