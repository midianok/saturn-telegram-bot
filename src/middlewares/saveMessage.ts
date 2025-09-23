import { Context, NextFunction } from "grammy";
import { ApiConfig, SaturnClient, SaveMessageDto} from "../httpClients/SaturnClient.js";
import { PrismaClient } from '@prisma/client'


export default async function saveMessage(ctx: Context, next: NextFunction) {
    const client = new SaturnClient<ApiConfig>({
        baseUrl: "http://localhost:5000",
    });
    const prisma = new PrismaClient();

    const t2 = await prisma.users.findFirst();
    const saveMessageDto: SaveMessageDto = {
        messageId: ctx.message?.message_id,
        messageText: ctx.message?.text || null,
        messageDate: ctx.message?.date ? new Date(ctx.message.date * 1000).toISOString() : undefined,
        messageType: 1,
        chatId: ctx.chat?.id,
        chatName: ctx.chat?.title || ctx.chat?.first_name || null,
        chatType: 1,
        stickerFileId: ctx.message?.sticker?.file_id || null,
        fromId: ctx.from?.id,
        fromFirstName: ctx.from?.first_name || null,
        fromLastName: ctx.from?.last_name || null,
        fromUsername: ctx.from?.username || null,
    };
    await client.message.saveMessage(saveMessageDto);
    next();
}