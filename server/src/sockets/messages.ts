import { Socket, OnEvent, ISocket, Autowired } from 'odi';
import MessagesService from '../services/messages';
import { MessageI } from '../types';

@Socket('app')
export default class MessagesSocket extends ISocket {
    @Autowired()
    messages: MessagesService;

    @OnEvent('massage:push')
    onmessage(message: MessageI) {
        message.time = new Date();

        this.messages.push(message);
        this.emit('message:pushed', message);
    }
}