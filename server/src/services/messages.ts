import { Service } from 'odi';
import { MessageI } from '../types';

@Service()
export default class MessagesService {
    private store: MessageI[] = [];
    
    getAll() {
        return this.store;
    }

    push(message: MessageI) {
        this.store.push(message);
    }
}
