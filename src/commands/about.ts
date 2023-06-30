import { Context } from 'telegraf';

const aboutCMD = async (ctx: Context) => {
    const aboutMsg = `what is up man`;
    return await ctx.replyWithMarkdownV2(aboutMsg, {
        parse_mode: 'MarkdownV2',
    });
};

export { aboutCMD };
