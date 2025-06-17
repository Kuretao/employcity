import {atom} from "jotai";


export const userAtom = atom({
    username: 'usernameAtom',
    password: 'password',
    name: 'userAtom',
    surname: 'userAtom--surname',
    isAuth: false,
})