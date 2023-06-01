export class TokenWeb{
    userId: number;
    endpoint: string;
    auth: string;
    p256dh: string;

    constructor(userId: number, endpoint: string, auth: string, p256dh: string) {
        this.userId = userId;
        this.endpoint = endpoint;
        this.auth = auth;
        this.p256dh = p256dh;
    }
}