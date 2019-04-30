import { Service } from "odi";
import { MessageI } from '../../types';

@Service()
export default class MessagesService {
    private store: MessageI[] = [{
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
    
    getAll() {
        return this.store;
    }

    push(message: MessageI) {
        this.store.push(message);
    }
}
