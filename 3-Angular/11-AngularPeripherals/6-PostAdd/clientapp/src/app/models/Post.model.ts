export interface Post {
    postId: number;
    userId: number;
    postContent: string;
    postDate: Date | string;
    updateDate: Date | string;
}