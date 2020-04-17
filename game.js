const Discord = require('discord.js');
const logger = require('winston');
const config = require('./config.json');

//LOGGER

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';

//DISCORD BOT
// Initialize Discord Bot
var bot = new Discord.Client();
bot.login(config.token);
bot.once('ready', () => {
    logger.info('Ready!')
})

const prefixLength = config.prefix.length;


bot.on('message', message => {

    // It will listen for messages that will start with `.`
    if (message.content.startsWith(config.prefix)) {

        msg = message.content.replace(config.prefix, "");

        var args = msg.split(' ');
        var cmd = args[0]
		var ping = Date.now() - message.createdTimestamp + " ms";


        logger.info("the command entered was: " + cmd);
        logger.info("the args entered were: " + args);

		/*if(cmd == "nice" || "Nice" && cmd != "Nice!"){
			message.channel.send("Nice!");
		}*/

        switch (cmd) {
            // [prefix]ping
            case 'bruh':
                logger.info("Ping!");
                message.channel.send("Bruh!");
                break;

			case 'ye':
                logger.info("Ping!");
                message.channel.send("Ye?");
                break;

			case 'Ye':
                logger.info("Ping!");
                message.channel.send("Ye?");
                break;

			case 'XD':
                logger.info("Ping!");
                message.channel.send("EKSDEEE");
                break;

			case 'EKSDEE':
                logger.info("Ping!");
                message.channel.send("XD");
                break;

			case 'yo':
				logger.info("Yo!");
                message.channel.send("Yo!");
                break;

			case 'hey':
				logger.info("Yo!");
                message.channel.send("Hiyaaa");
                break;

			case "hows":
			case "life":
                message.channel.send("Life is good!");
				message.channel.send("And you?");
                break;

			case "not":
			case "bad":
                message.channel.send("thats great to hear!");
                break;

			case "doggo":
                message.channel.send("Woof! Woof!");
                break;

			case "nice":
                message.channel.send("Nice!");
                break;

			case "Nice":
                message.channel.send("Nice!");
                break;

			case 'sup':
                message.channel.send("Sup!");
                break;

			case '?':
                message.channel.send("?");
				message.channel.send("??");
				message.channel.send("???");
				message.channel.send("??");
				message.channel.send("?");
                break;
			
			case 'nigger':
			case 'nigga':
                message.channel.send("WADDUUPPPP NIGGAS IN THA HOUSE!");
                break;

			case "gib":
			case "anime":
			case "recommendation":
                message.channel.send("Go watch hentai, you pervert!");
                break;

			case 'ping':
				message.channel.send("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");
                message.channel.send("Pong!");
                break;

			case 'hippopopotas':
                message.channel.send("Hippopopotas!");
				message.channel.send("Hippopopotas!");
				message.channel.send("Hippopopotas!");
				message.channel.send("Hippopopotas!");
				message.channel.send("Hippopopotas!");
                break;

            default:
                break;
        }
    }
});