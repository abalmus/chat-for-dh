import React from 'react';
import { Controller, IController, Get, Autowired } from 'odi';
import { ChatPage } from '../pages/ChatPage';
import MessagesService from '../services/messages';
import UserService from '../services/user';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';

@Controller()
export class IndexController extends IController {
    @Autowired()
    messages: MessagesService;

    @Autowired()
    settings: UserService

    @Get index() {
        const userId = this.getCookie('user-id');
        const user = this.settings.getUser(userId);

        if (!userId || !user || !user.userName) {
            return this.redirect('/settings');
        }

        i18n.changeLanguage(user.settings.language);

        return (
            <I18nextProvider i18n={i18n}>
                <ChatPage messages={this.messages.getAll()} user={user} />
            </I18nextProvider>
        );
    }
}
