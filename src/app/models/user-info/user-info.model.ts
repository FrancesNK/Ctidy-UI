export class UserInfoModel {
    public userId: string;
    public displayName: string;
    public email: string;
    public phoneNumber: string;
    public gender: Gender;
    public address: UserAddressModel;
    public avatar: URL;
    public background: URL;

    constructor (value: any) {
        if (value === undefined || value === null) {
            return;
        }

        this.userId = value.userId;
        this.displayName = value.displayName || value.userId;
        this.email = value.email;
        this.address = value.address;
        this.avatar = value.avator;
        this.background = value.background;
    }
 }

enum Gender {female, male}

export class UserAddressModel {
    public country: string;
    public province: string;
    public city: string;
    public district: string;

    constructor (value: any) {
        if (!value) {
            return;
        }

        this.country = value.country;
        this.province = value.province;
        this.city = value.city;
        this.district = value.district;
    }
}

