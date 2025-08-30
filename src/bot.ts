import { Bot } from "grammy";

const bot = new Bot("1169135083:AAEB4aWHBo6FHa3F3-qNvMmQczPYhPF2dME"); // <-- put your bot token between the ""


bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Got another message!"));

bot.start();