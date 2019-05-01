import { Service } from 'odi';
import { UserI } from '../types';

@Service()
export default class UserService {
    private incrementId = 0;
    private store: any = {};
    // {
    //     id: Date.now(),
    //     username: '',
    //     settings: {
    //         interfaceColor: 'light',
    //         timeFormat: '12',
    //         submitShortcut: true
    //     }
    // };

    update({ id, ...rest }: UserI) {
        if (id) {
            this.store[id] = {...rest};

            return {
                id,
                ...rest
            }
        } else {
            this.store[++this.incrementId] = {...rest};

            return {
                id: this.incrementId,
                ...rest
            }
        }
    }

    getUser(id: number) {
        return this.store[id];
    }

    getSettings() {
        return this.store.userName;
    }
}
