import amqp from 'amqplib/callback_api';


amqp.connect(process.env.HOST,(error0,connection)=>{
    if(error0){
        throw error0;
    }
    connection.createConfirmChannel((error1,channel)=>{
        if(error1){
            throw error1;
        }
        channel.assertQueue(queue,{ durable: true });
        var queue = 'task_queue1';
        for(var i = 0; i<20 ; i++){
            channel.sendToQueue(queue,Buffer.from(i.toString()),{
                persistent: true
            },(err,ok)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log(ok)
                }
            });
        }
        console.log('[x] sent %s',msg)
    });
})