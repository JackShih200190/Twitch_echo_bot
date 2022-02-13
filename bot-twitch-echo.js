const tmi = require('tmi.js');

// Which channel to talk
const joinChannel = 'little5555'


// Main account
// Get password from https://twitchapps.com/tmi/
const opts = {
    identity: {
        username: 'TwitchID',
        password: '網頁獲取帳號的token',
    },
    channels: [
        joinChannel
    ]
};



const bots = [
    {
        username: 'TwitchID',
        password: '網頁獲取帳號的token',
    },
    {
        username: 'TwitchID',
        password: '網頁獲取帳號的token',
    }
]

const clientList = [];

const client = new tmi.client(opts);
// Connect to Twitch:
client.connect();
client.on('message', onMessageHandler);

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();
    const username = context.username;

    console.log(`type: ${context['message-type']}, username: ${username}, msg: ${msg}`);

    if (username === opts.identity.username) {

        clientList.forEach((botClient) => {
            botClient.say(joinChannel, msg);
        })
    }

    return;
}

for (let bot of bots) {
    const client = new tmi.client({
        identity: {
            username: bot.username,
            password: bot.password
        },
        channels: [
            joinChannel
        ]
    });

    client.connect();

    clientList.push(client);
}