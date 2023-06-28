import { Context } from 'telegraf';

import { author, name, version } from '../../package.json';


const about = () => async (ctx: Context) => {
    const message = `*${name} ${version}*\n${author}`;
    console.log(`Triggered "about" command with message \n${message}`);
    await ctx.replyWithMarkdownV2(message, { parse_mode: 'Markdown' });
};

export { about };
