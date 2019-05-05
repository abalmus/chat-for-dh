import React from 'react';
import { Controller, IController, Get, Autowired, Post, Ok, Data, MaxLength, MinLength } from 'odi';
import { SettingsPage } from '../pages/SettingsPage';
import UserService from '../services/user';
import { UserSettingsI } from '../types/User';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';

@Data()
export class SettingsDTO {
    @MaxLength(10)
    @MinLength(2)
    userName: string;
    settings: UserSettingsI
}

@Controller('settings')
export class SettingsController extends IController {
    @Autowired()
    settings: UserService;

    @Get index() {
        const userId = this.getCookie('user-id');

        return (
            <I18nextProvider i18n={i18n}>
                <SettingsPage user={this.settings.getUser(userId)} />
            </I18nextProvider>
        );
    }

    @Post save(payload: SettingsDTO) {
        const userId = this.getCookie('user-id');
        const user = this.settings.update({
            id: userId ? userId : null,
            ...payload
        });

        this.setCookie('user-id', user.id.toString(), {
            path: '/'
        });

        i18n.changeLanguage(user.settings.language);

        return Ok(user);
    }
}
