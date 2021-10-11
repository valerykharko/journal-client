import { Image } from "interfaces";

export default interface Post {
  id: number;
  title: string;
  text: string;
  image: Image;
}
