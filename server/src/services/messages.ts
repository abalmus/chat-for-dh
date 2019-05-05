import { Service } from 'odi';
import { MessageI } from '../types';

@Service()
export default class MessagesService {
    private store: MessageI[] = getSampleData();
    
    getAll() {
        return this.store;
    }

    push(message: MessageI) {
        this.store.push(message);
    }
}

function getSampleData(): MessageI[] {
    return [{
        time: new Date(),
        userName: 'Andrei Balmus',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
    }, {
        time: new Date(),
        userName: 'Andrei Balmus',
        text: 'Lorem ipsum dolor sit amet'
    }];
}
