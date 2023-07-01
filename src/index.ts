import { VercelRequest, VercelResponse } from '@vercel/node';
import { config } from 'dotenv';
import { Telegraf } from 'telegraf';
config();

import { aboutCMD, startCMD } from './commands';
import { development, production } from './core';
import { greeting } from './text';

const BOT_TOKEN = process.env.BOT_TOKEN || '';
const ENVIRONMENT = process.env.NODE_ENV || '';

const bot = new Telegraf(BOT_TOKEN);

bot.use(async (ctx, next) => {
    const start = new Date().valueOf();
    await next();
    const ms = new Date().valueOf() - start;
    console.log('Response time: %sms', ms);
});

bot.start(startCMD);
bot.command('about', aboutCMD);
bot.on('message', greeting);

//prod mode (Vercel)
export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
    await production(req, res, bot);
};
//dev mode
ENVIRONMENT !== 'production' && development(bot);
