export class UserInfoService {
    private _ctdBaseUrl: string;

    public getUserInfo(): Promise<any> {
        const url = `$(this._ctxBaseUrl)/UserInfo`;
        return Promise.resolve([{
            userId: 'frances_s',
            gender: 'female',
            email: 'frances@ctidy.com',
            phoneNumber: '11122223333',
            address: '江苏 南京',
            avato: 'http://static1.keepcdn.com/avatar/2017/01/05/12/1beae65b5f1eb2814852ec75a5306d7c5c361781.jpg?imageMogr2/thumbnail/96x',
            background: 'http://static1.keepcdn.com/avatar/2017/11/29/22/79bf33e80c987ffa19cd99b50eb2f8d4d2ca60d5.jpg'
        }]);
    }
}
