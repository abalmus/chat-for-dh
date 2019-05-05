import {
    MessageI,
    UserI,
    UtilityNavItemI,
    ChooseOptionItemI,
    UserSettingsI,
    LangOptionI
} from '../types';

export interface ChatPagePropsI {
    messages: MessageI[];
    user: UserI;
    t?: any;
}

export interface PageLayoutPropsI {
    children?: any;
    js?: string[];
    settings: UserSettingsI
}

export interface SettingsPagePropsI {
    user: UserI;
}

export interface AvatarPropsI {
    letter: string;
}

export interface UtilityNavPropsI {
    navItems: UtilityNavItemI[];
}

export interface ChatHistoryPropsI {
    user: UserI;
    messages: MessageI[];
}

export interface ChooseOnePropsI {
    title: string;
    name: string;
    options: ChooseOptionItemI[];
    defaultValue: string;
}

export interface UserNamePropsI {
    userName: string;
}

export interface LanguageSelectorPropsI {
    title: string;
    options: LangOptionI[];
    defaultValue: string;
}

export interface ChatControlPropsI {
    
}