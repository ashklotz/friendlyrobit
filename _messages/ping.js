

const Ping = (msg) => {
    const m = msg.content.toLowerCase()
    const count = (m.match(/ping/g) || []).length
    let sentMsg = ''
    for (let index = 0; index < count; index++) {
        sentMsg = sentMsg.concat('pong ')
    }
    return sentMsg
}

module.exports = Ping