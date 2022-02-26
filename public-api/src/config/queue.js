var amqp = require('amqplib/callback_api');

let globalChannel;
let pending = []
const queue = 'requests';

amqp.connect('amqp://localhost', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }




        channel.assertQueue(queue, {
            durable: false
        });

        globalChannel = channel
        // channel.sendToQueue(queue, Buffer.from(msg));

        // console.log(" [x] Sent %s", msg);
    });
    // setTimeout(function() {
    //     connection.close();
    //     process.exit(0);
    // }, 500);
});


// very rudimentary/hacky method to reuse a channel
// works 
function qWrap(msg) {
    if(!globalChannel){
        pending.push(msg)
    }else{
        pending.forEach(ms=>{
            globalChannel.sendToQueue(queue, Buffer.from(ms));

            console.log(" [x] Sent %s", ms);
        })
        pending.length = 0
        globalChannel.sendToQueue(queue, Buffer.from(msg));

        console.log(" [x] Sent %s", msg);
    }
  
}

module.exports = qWrap