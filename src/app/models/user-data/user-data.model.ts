export class UserDataModel {
    public userId: string;
    public followed: number;
    public following: number;
    public moments: number;

    constructor(value: any) {
        if (value === undefined || value === null) {
            return;
        }

        this.userId = value.userId;
        this.followed = value.followed;
        this.following = value.following;
    }
}
