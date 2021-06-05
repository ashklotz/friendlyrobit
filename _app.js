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
            console.log(`ping activated by: ${msg.member.user.tag}`)
            const sentMsg = ping(msg)
            msg.channel.send(sentMsg)
        }

        //will says pp, does some replies
        if (msg.content == 'PP'){
            console.log(`PP activated by: ${msg.member.user.tag}`)
            if (msg.member.id == process.env.WILL_ID){
               const msgOrder = ['BIG', 'NAY', '*MASSIVE*', 'NAY', '***HUMONGER***']
                for (let index = 0; index < msgOrder.length; index++) {
                     setTimeout(() => {
                        const element = msgOrder[index];
                        msg.channel.send(element)
                    }, 800 * (index + 1))
                }
            } 
            else if (msg.member.id == process.env.PEYTON_ID || msg.member.id == process.env.CARLEE_ID)
                msg.channel.send('xtra smol')
            else msg.channel.send('smol')
        }

        //na'vi: "Hey! Listen!"
        if (msg.content == "Hey!" || msg.content == "Listen!"){
            if (msg.member.id !== process.env.SELF_ID) 
                console.log(`Na'vi activated by: ${msg.member.user.tag}`)
            setTimeout(() => {
                const r = Math.floor(Math.random() * 100)
                if (r > 40) msg.channel.send("Hey!")
                else if (r > 10) msg.channel.send("Listen!")
            },1100)
        }

    }
})

client.on('typingStart', (channel, user) => {
    console.log(`${user.tag} typing in ${channel.name}`)
    
})
