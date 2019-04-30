import React from 'react';
import { Controller, IController, Get, Autowired } from 'odi';
import { ClientIndex } from '../views';
import MessagesService from '../services/messages';

@Controller()
export class IndexController extends IController {
    @Autowired()
    messages: MessagesService;

    handleMessageSubmit(evnt: any) {
        console.log(evnt);
    }

    @Get index() {
        return <ClientIndex messages={this.messages.getAll()} onSubmitHandler={this.handleMessageSubmit} />
    }
}
