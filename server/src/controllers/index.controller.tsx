import React from 'react';
import { Controller, IController, Get, Autowired } from 'odi';
import { ChatPage } from '../pages/ChatPage';
import MessagesService from '../services/messages';
import UserService from '../services/user';

@Controller()
export class IndexController extends IController {
    @Autowired()
    messages: MessagesService;

    @Autowired()
    settings: UserService

    @Get index() {
        const userId = this.getCookie('user-id');

        if (!userId) {
            return this.redirect('/settings');
        }

        return <ChatPage messages={this.messages.getAll()} user={this.settings.getUser(userId)} />
    }
}
