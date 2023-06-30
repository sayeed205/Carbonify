import { Context } from 'telegraf';

const startCMD = async (ctx: Context) => {
    const startMsg = `Hello, ${ctx.message?.from.first_name} ${ctx.message?.from.last_name}\\! I'm a bot that can help you with your daily tasks\\.`;

    return await ctx.replyWithMarkdownV2(startMsg, {
        parse_mode: 'MarkdownV2',
    });
};

export { startCMD };
