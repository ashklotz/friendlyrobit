require("dotenv").config()
const Discord = require("discord.js")
const client = new Discord.Client()
const ping = require('./_messages/ping.js')

client.on('ready', () => {
    console.log('Bot is ready')
})
client.login(process.env.BOT_TOKEN)

client.on('message', msg => {
    if (msg.channel.id === process.env.ROBO_CHANNEL){

        //ping pong
        if (msg.content.toLowerCase().includes('ping')){
            console.log(`${msg.member.user.tag} activated ping`)
            const sentMsg = ping(msg)
            msg.channel.send(sentMsg)
        }

        //will says pp, does some replies
        if (msg.content == 'PP'){
            console.log(`${msg.member.user.tag} activated PP`)
            if (msg.member.id == process.env.WILL_ID){
               const msgOrder = ['BIG', 'NAY', '*MASSIVE*', 'NAY', '***HUMONGER***']
                for (let index = 0; index < msgOrder.length; index++) {
                     setTimeout(() => {
                        const element = msgOrder[index];
                        msg.channel.send(element)
                    }, 800 * (index + 1))
                }
            } else msg.channel.send('smol')
        }


    }
})

client.on('typingStart', (channel, user) => {
    console.log(`${user.tag} typing in ${channel.name}`)
    
})
