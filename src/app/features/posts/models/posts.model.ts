export interface IPost {
  title: string;
  content: string;
  id?: string;
}

export type ResponseType = {
  [key: string]: IPost;
};
