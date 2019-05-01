import { MessageI } from '../types';
import { UserSettingsI } from './User';

export interface ChatPagePropsI {
    messages: MessageI[];
}

export interface SettingsPagePropsI {
    username: string;
    settings: UserSettingsI
}