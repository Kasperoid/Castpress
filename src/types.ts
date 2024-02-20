export interface IMenuLinks {
    title: string;
    href: string;
    icon?: boolean;
}
export type CommentType = {
    avatar: string;
    name: string;
    date: string;
    message: string;
    reply: CommentType[];
}
export enum Statuses {
    'pending', 'fulfilled', 'rejected'
}