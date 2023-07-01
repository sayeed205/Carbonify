import Graphite from 'graphite-io';
import { Context } from 'telegraf';
import { Message } from 'telegraf/typings/core/types/typegram';

const greeting = async (ctx: Context) => {
    try {
        const msg = ctx.message as Message.TextMessage;
        if (!('text' in msg)) {
            ctx.replyWithMarkdownV2(
                'Please send me a text message or codeblock'
            );
        }

        const text = msg.text;

        const graphite = new Graphite(text, 'javascript', 'one-dark-pro');

        const image = await graphite.png();

        // ctx.replyWithMarkdownV2(escapeMD2(code))
        ctx.replyWithPhoto(
            {
                source: image,
            },
            { caption: 'Hello' }
        );
    } catch (error) {
        console.log(error);
    }

    //    ctx.replyWithPhoto( , { caption: 'Hello' })
};

export { greeting };
