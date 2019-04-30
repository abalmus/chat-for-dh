import React from 'react';
import { Controller, IController, Get, Autowired } from 'odi';
import { ClientIndex } from '../../client/index';
import MessagesService from '../services/messages';

@Controller()
export class IndexController extends IController {
    @Autowired()
    messages: MessagesService;

    @Get index() {
        return <ClientIndex messages={this.messages.getAll()} />
    }
}
