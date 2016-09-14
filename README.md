# Homebridge LGtv2
LG webOS 2 plugin for Homebridge

## NOTE: WIP project!

### Features
* Live status
* Turn on
* Turn off

#### Install
```bash
npm install -g homebridge-lgtv2
```

### Example config
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
