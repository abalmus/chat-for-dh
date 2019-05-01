import React from 'react';
import { Controller, IController, Get, Autowired, Post, Ok, Data, MaxLength, MinLength } from 'odi';
import { SettingsPage } from '../pages/SettingsPage';
import UserService from '../services/user';

@Data()
export class SettingsDTO {
    @MaxLength(10)
    @MinLength(2)
    userName: string;


}

@Controller('settings')
export class SettingsController extends IController {
    @Autowired()
    settings: UserService;

    @Get index() {
        return <SettingsPage  />
    }

    @Post save(payload: SettingsDTO) {
        const userId = this.getCookie('user-id');
        const user = this.settings.update({
            id: userId ? Number(userId) : null,
            settings: {
                interfaceColor: 'light',
                timeFormat: '12',
                submitShortcut: true
            },
            ...payload
        });

        this.setCookie('user-id', user.id.toString(), {
            path: '/'
        });

        return Ok(user);
    }
}
