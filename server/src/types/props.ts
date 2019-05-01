import { MessageI, UserI } from '../types';

export interface ChatPagePropsI {
    messages: MessageI[];
    user: UserI;
}

export interface SettingsPagePropsI {
    user: UserI;
}
