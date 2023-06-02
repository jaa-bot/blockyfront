export class TokenWeb{
    endpoint: string;
    auth: string;
    p256dh: string;
    userId: number;

    constructor(endpoint: string, auth: string, p256dh: string, userId: number) {
        this.endpoint = endpoint;
        this.auth = auth;
        this.p256dh = p256dh;
        this.userId = userId;
    }
}