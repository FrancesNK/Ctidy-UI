import { UserInfoService } from './../../services/user-info/user-info.service';
import { UserInfoModel } from './../../models/user-info/user-info.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctidy-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})

export class UserComponent implements OnInit {

    public userInfo: UserInfoModel;
    public userInfoPromise: Promise<any>;
    public username: string;
    public followed: number;
    public moments: number;
    public following: number;
    public usercity: Array<string> = [];

    constructor(
        private userInfoService: UserInfoService
    ) {}

    public async ngOnInit() {
        await this.getUserConfig();
        this.getUsername();
        this.setBackground();
        this.setAvatar();
    }

    private async getUserConfig(): Promise <any> {
        await Promise.all([
             this.userInfoService.getUserInfo()
        ]).then(async (results: any[]) => {
            if (!Array.isArray(results) || results.length !== 1) {
                return;
            }

            if (Array.isArray(results[0])) {
                results[0].forEach(userInfo => {
                    this.userInfo = new UserInfoModel (userInfo);
                });
            }
        });
    }

    public getUsername() {
        this.username = 'FrancesNK';
        this.usercity = ['江苏省', '南京市'];
        this.followed = 2;
        this.following = 10;
        this.moments = 119;
    }

    public setBackground() {
        const element = document.getElementsByClassName('user-top');
        const element1 = document.getElementById('user-top');
        const profilePicUrl = this.userInfo.background;
        const style = `background-image: url(${profilePicUrl})`;
        if (element.length) {
            element[0].setAttribute('style', style);
        }
    }

    public setAvatar() {
        const element = document.getElementsByClassName('user-avatar');
        const profilePicUrl = this.userInfo.avatar;
        const style = `background-image: url(${profilePicUrl})`;
        if (element.length) {
            element[0].setAttribute('style', style);
        }
    }
}
