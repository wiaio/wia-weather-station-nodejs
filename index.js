var wia = require('wia')('device secret key');

wia.stream.on('connect', function() {
  console.log('Stream connected!');

  // Assign values to variables t, p, and h that reperesent temperature, pressure and humidity respectively.
  var t = 20;// replace with values from your temperature sensor
  var p = 1020;// replace with values from your pressure sensor
  var h = 60;// replace with values from your humidity sensor

  setInterval(function() {
    // Sensor publishing the temperature data
    wia.sensors.publish({
      name: "temperature",
      data: t
    },
    function(err, published) {
      if (err !== null){
        console.log(err);
      }
      if (published !== null){
        console.log("Temperature sensor reading published.");
      }
    });
  }, 1500);

  setInterval(function() {
    // Sensor publishing the pressure data
    wia.sensors.publish({
      name: "pressure",
      data: p
    },
    function(err, published) {
      if (err !== null) {
        console.log(err);
      }
      if (published !== null) {
        console.log("Pressure sensor reading published.");
      }
    });
  }, 1500);

  setInterval(function() {
    // Sensor publishing the temperature data
    wia.sensors.publish({
      name: "humidity",
      data: h
    },
    function(err, published) {
      if (err !== null) {
        console.log(err);
      }
      if (published !== null) {
        console.log("Humidity sensor reading published.");
      }
    });
  }, 1500);
});//end on stream connect


wia.stream.on('reconnect', function() {
    console.log('Stream reconnecting!');
});

wia.stream.on('disconnect', function() {
    console.log('Stream disconnected!');
    connected = "false";
});

wia.stream.on('offline', function() {
    console.log('Stream offline!');
});

wia.stream.on('error', function(error) {
    console.log('Stream error!');
    console.log(error);
});

wia.stream.connect();
