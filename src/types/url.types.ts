export interface IUrl {
    _id?: string;
    url: string;
    title: string;
    fakeUrl: string;
    ads: boolean;
    disabled: boolean;
    expiresAt: Date;
    createdAt?: Date;
    updatedAt?: Date;
}