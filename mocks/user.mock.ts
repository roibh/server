export class UserMock {
    static async list(): Promise<any> {
        return [];
    }

    static async get(userId: string): Promise<any> {
        console.log(userId);
        return {};
    }
}
