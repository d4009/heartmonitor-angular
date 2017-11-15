export class LoginModel {
    constructor (public username?: string,
                 public password?: string) {
    }

    setObject (obj: {username: string, password: string}){
        for (let key in obj){
            this[key] = obj[key];
        }
    }
}