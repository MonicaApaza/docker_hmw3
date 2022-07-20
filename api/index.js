const express = require("express");
const moment = require("moment");
const os = require("os");
const app = express();
app.listen(3000, () => {
  console.log("Listening on port 3000....");
});

app.get('/api/host', function (req, res) {

  var interfaces = os.networkInterfaces();
  var addresses = [];
  for (var k in interfaces) {
      for (var k2 in interfaces[k]) {
          var address = interfaces[k][k2];
          if (address.family === 'IPv4' && !address.internal) {
              addresses.push(address.address);
          }
      }
  }

  const hostInfo = { hour: moment().format("HH:mm:ss"), 
                     date: moment().format("MM/DD/YYYY"),
                     timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                     hostName : os.hostname(),
                     ipAddress: addresses}

  res.send(hostInfo);
});