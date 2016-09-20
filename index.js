var wia = require('wia')('secret key');

wia.stream.on('connect', function() {
    console.log('Stream connected!');

  setTimeout(function() {

    // update this value with data from your temperature sensor
    var t = 21;

    // Sensor publishing the temperature data
    wia.sensors.publish({
      name: "temperature",
      data: t
    },
    function(err, published) {
      if (err)
        console.log(err);
      if (published)
        console.log("Sensor reading published.");
    });
  }, 1500);

});//end on stream connect


wia.stream.on('reconnect', function() {
    console.log('Stream reconnecting!');
});

wia.stream.on('disconnect', function() {
    console.log('Stream disconnected!');
});

wia.stream.on('offline', function() {
    console.log('Stream offline!');
});

wia.stream.on('error', function(error) {
    console.log('Stream error!');
    console.log(error);
});

wia.stream.connect();
