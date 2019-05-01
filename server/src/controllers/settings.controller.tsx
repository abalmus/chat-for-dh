import React from 'react';
import { Controller, IController, Get, Autowired, Post, Ok, Data, MaxLength, MinLength } from 'odi';
import { SettingsPage } from '../pages/SettingsPage';
import UserService from '../services/user';
import { UserSettingsI } from '../types/User';

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
        return <SettingsPage user={this.settings.getUser(userId)} />
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

        return Ok(user);
    }
}
