var amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', function(err, conn) {
    conn.createChannel(function(err, ch) {
        var q = 'hello';

        ch.assertQueue(q, {durable: false});
        console.log("[*] waiting for message in %s, to exit press CTRL+C", q);
        ch.consume(q, function(msg) {
            console.log("[x] Received is %s", msg.content.toString());
        }, {noAck: true});
    });
});