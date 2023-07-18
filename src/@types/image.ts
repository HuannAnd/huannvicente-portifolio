import { BaseDocument } from "./common";

interface ImageStructure {
  title: string,
  image: string,
  fallback: string
}

export type ImageDocument = BaseDocument & {
  _id: string;
  content: ImageStructure;
  request_id: number

}