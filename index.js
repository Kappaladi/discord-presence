const chalk = require('chalk');
const RPC = require('discord-rpc')
const browser = typeof window !== 'undefined';
const rpc = new RPC.Client({ transport: browser ? 'websocket' : 'ipc' });
const config = require('./config/config.json');



const title = `
______   _______  _______  _______ _________
(  ___ \ (  ____ \(  ___  )(  ____ \\__   __/
| (   ) )| (    \/| (   ) || (    \/   ) (   
| (__/ / | (__    | (___) || (_____    | |   
|  __ (  |  __)   |  ___  |(_____  )   | |   
| (  \ \ | (      | (   ) |      ) |   | |   
| )___) )| (____/\| )   ( |/\____) |   | |   
|/ \___/ (_______/|/     \|\_______)   )_(   
   Discord Rich Presence made easy by Beast                   
                ||DISCLAIMER||      
My version is safe and wont get you banned like others. 
                   Enjoy.   

`



console.log(chalk.greenBright(title))

rpc.on("ready", () => {
    rpc.setActivity({
        details: `${config.details}`,
        state: `${config.state}`,
        startTimestamp: new Date(),
        largeImageKey: `${config.largeImageKey}`,
        largeImageText: `${config.largeImageText}`,
        smallImageKey: `${config.smallImageKey}`,
        smallImageText: `${config.smallImageText}`
})})


rpc.login({
    clientId: `${config.clientID}`,
})




