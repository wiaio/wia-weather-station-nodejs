// var wia = require('wia')('device secret key');
var wia = require('wia')('d_sk_xnA1YItohlSB7sZq3crsxLH4');

wia.stream.on('connect', function() {
  console.log('Stream connected!');

  /* Assign values to variables t, p, and h that represent temperature, pressure and humidity respectively.*/
  var t = 20;// replace with values from your temperature sensor
  var p = 1020;// replace with values from your pressure sensor
  var h = 60;// replace with values from your humidity sensor

  setInterval(function() {
    // Event publishing the temperature data
    wia.events.publish(
      {
        name: "temperature",
        data: t
      },
      function(err, published) {
        if (err) {
          console.log(err);
        }
        if (published) {
          console.log("Event published.");
        }
      }
    );
  }, 1500);

  setInterval(function() {
    // Event publishing the pressure data
    wia.events.publish(
      {
        name: "pressure",
        data: p
      },
      function(err, published) {
        if (err) {
          console.log(err);
        }
        if (published) {
          console.log("Event published.");
        }
      }
    );
  }, 1500);

  setInterval(function() {
    // Event publishing the humidity data
    wia.events.publish(
      {
        name: "humidity",
        data: h
      },
      function(err, published) {
        if (err) {
          console.log(err);
        }
        if (published) {
          console.log("Event published.");
        }
      }
    );
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
