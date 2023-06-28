import { Context, Telegraf } from 'telegraf';

import { Update } from 'telegraf/typings/core/types/typegram';


const development = async (bot: Telegraf<Context<Update>>) => {
    const botInfo = (await bot.telegram.getMe()).username;

    console.log('Bot runs in development mode');
    console.log(`${botInfo} deleting webhook`);
    await bot.telegram.deleteWebhook();
    console.log(`${botInfo} starting polling`);

    await bot.launch();

    process.once('SIGINT', () => bot.stop('SIGINT'));
    process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

export { development };
