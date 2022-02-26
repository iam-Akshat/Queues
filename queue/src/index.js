const amqp = require('amqplib/callback_api');
const { readStore, writeStore } = require('./utils');

const queue = 'requests';
let global;
let prev;
const main = async () => {
    global = parseInt(await readStore())
    prev = global
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

            console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

            channel.consume(queue, function (msg) {
                console.log(" [x] Received %s", msg.content.toString());
                global++
            }, {
                noAck: true
            });
        });
    });


    setInterval(()=>{
        if(prev !== global){
            writeStore(global)
            prev = global
        }
       
    },100)
}
// max size can be increased by converting to bigint
main()
