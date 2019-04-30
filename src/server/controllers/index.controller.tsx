import React from 'react';
import { Controller, IController, Get } from 'odi';
import { ClientIndex } from '../../client/index';

interface Message {
    time: number,
    username: string;
    text: string
}

@Controller()
export class IndexController extends IController {
    messages: Message[] = [{
        time: Date.now(),
        username: 'root',
        text: 'Hi there, how are you'
    }, {
        time: Date.now(),
        username: 'root',
        text: 'Hi there, how are you'
    }, {
        time: Date.now(),
        username: 'root',
        text: 'Hi there, how are you'
    }];

    @Get index() {
        return <ClientIndex messages={this.messages} />
    }
}
