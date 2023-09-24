import dotenv from 'dotenv';
import fs from 'fs-extra';

dotenv.config();

const env = process.env.ENV || 'dev';
const configPath = `config/config.${env}.json`;

fs.pathExists(configPath);

export const testConfiguration = fs.readJsonSync(configPath);

