import {FormGroup, FormControl, Validators} from "@angular/forms";
import {LoginModel} from "./login.model";
export class LoginForm extends FormGroup {

    constructor(loginModel:LoginModel) {
        super({});
        this.addControl('username',new FormControl(loginModel.username,[Validators.required]));
        this.addControl('password',new FormControl(loginModel.password,[Validators.required]));
    }

    getObject()
    {
        return new LoginModel(this.controls['username'].value,this.controls['password'].value);
    }

}