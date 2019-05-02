import { MessageI, UserI } from '../types';
import { ReactChildren } from 'react';

export interface ChatPagePropsI {
    messages: MessageI[];
    user: UserI;
}

export interface PageLayoutPropsI {
    children?: any;
    js?: string[];
}

export interface SettingsPagePropsI {
    user: UserI;
}
