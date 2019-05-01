import { Service } from 'odi';
import { UserI } from '../types';

@Service()
export default class UserService {
    private store: any = {};

    update({ id, ...rest }: UserI) {
        if (id) {
            this.store[id] = {...rest};

            return {
                id,
                ...rest
            }
        } else {
            const uid = makeId(10);
            this.store[uid] = {...rest};

            return {
                id: uid,
                ...rest
            }
        }
    }

    getUser(id: number | string) {
        return this.store[id] || {};
    }

    getSettings() {
        return this.store.userName;
    }
}

function makeId(size: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;

    for ( var i = 0; i < size; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
 }