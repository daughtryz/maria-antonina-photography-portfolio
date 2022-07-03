import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser | undefined
    loginUser(email: string,password: string): any {

        this.currentUser = {
            id: 1,
            email: email,
            firstName: 'Mitko',
            lastName: 'Iliev'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}