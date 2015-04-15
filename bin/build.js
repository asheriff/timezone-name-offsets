var zoneinfo = require('zoneinfo');
var TZ = zoneinfo.TZDate;

var zones = {};
zoneinfo.listTimezones().forEach(function (z) {
    var d = new TZ();
    d.setTimezone(z);
    zones[z] = d._utcoffset();
});
console.log(JSON.stringify(zones));
