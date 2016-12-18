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

## Configuration example
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

### Configuration fields
- `accessory` [required]
Must always be "LGTv2
- `name` [required]
Name of your accessory
- `mac` [required]
Mac address of your tv
- `ip` [required]
IP address of your tv
- `keyFile` [optional]
Location to store permission token for your tv

## Tv settings
Enable this option in your tv settings
![Tv screen](https://s14.postimg.org/3p3fb9fgx/IMG_2750.jpg "Tv settings")

## Changelogs
### Version 1.3.2
- Temporarily removed the additional characteristics added on 1.3.0 due to compatibility issues
- Volume as percentage

### Version 1.3.1
- Random characteristic UUID

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
