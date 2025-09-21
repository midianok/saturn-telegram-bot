import { Bot } from "grammy";
import { welcome } from "./operations/welcome.js";

const bot = new Bot("1169135083:AAEB4aWHBo6FHa3F3-qNvMmQczPYhPF2dME");

bot.command("start", welcome);
bot.use((ctx, next) => next());

bot.on("message", (ctx) => {
    ctx.reply(ctx.message.text)
});

bot.start()