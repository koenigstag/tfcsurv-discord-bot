import { GatewayIntentBits } from "discord.js";

require('dotenv').config({ path: __dirname + '/../.env.local' });

const { BOT_TOKEN, APP_ID } = process.env;

export const TOKEN = BOT_TOKEN as string;
export const CLIENT_ID = APP_ID as string;

export const botIntents = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildMembers,
  GatewayIntentBits.DirectMessageReactions,
];
