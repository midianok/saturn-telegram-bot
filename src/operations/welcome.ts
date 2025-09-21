import { Context } from "grammy";

export const welcome = async (ctx: Context): Promise<void> => {
  await ctx.reply("Welcome! Up and running.");
};