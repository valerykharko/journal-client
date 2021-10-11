import { Post, Image } from "interfaces";

export default interface Category {
  id: number;
  title: string;
  description: string;
  image: Image;
  big_image: Image;
  posts: Array<Post>;
}
