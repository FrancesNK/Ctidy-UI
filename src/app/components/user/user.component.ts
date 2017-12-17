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

    public ngOnInit() {
        this.getUserInfo();
        this.getUsername();
        this.setBackground();
        this.setAvatar();
    }

    private getUserInfo(): void {
        this.userInfoPromise = Promise.all([
             this.userInfoService.getUserInfo()
        ]).then(async (results: any[]) => {
            if (!Array.isArray(results) || results.length !== 1) {
                return;
            }

            this.userInfo = new UserInfoModel ({});
            this.userInfo.userId = results[0].userId;
            this.userInfo = new UserInfoModel (results[0]);

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
        const profilePicUrl =
            this.userInfo.background ? this.userInfo.background :
                'http://static1.keepcdn.com/avatar/2017/11/29/22/79bf33e80c987ffa19cd99b50eb2f8d4d2ca60d5.jpg';
        const style = `background-image: url(${profilePicUrl})`;
        if (element.length) {
            element[0].setAttribute('style', style);
        }
    }

    public setAvatar() {
        const element = document.getElementsByClassName('user-avatar');
        const profilePicUrl =
            this.userInfo.avatar ? this.userInfo.avatar :
                'http://static1.keepcdn.com/avatar/2017/01/05/12/1beae65b5f1eb2814852ec75a5306d7c5c361781.jpg?imageMogr2/thumbnail/96x';
        const style = `background-image: url(${profilePicUrl})`;
        if (element.length) {
            element[0].setAttribute('style', style);
        }
    }
}
