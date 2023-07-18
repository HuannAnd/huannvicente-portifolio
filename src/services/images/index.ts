import { BaseRepository } from "../repositories/BaseRepository";

import { ImageDocument } from '@/@types/image'

const data = [
  { title: "Mobile warren app", content: { image: "/warren/1/image.png", fallback: "/warren/1/image.png" }, requested_id: 166190 },
  
]

class ImagesRepository extends BaseRepository<ImageDocument> {
  constructor() {
    super('Images')
  }

  async getRequestImage(requestId: number) {
    const data = super.getAll({ request_id: requestId })

    console.log("requested image: ", data)
    return data
  }

  async getTestCollection() {
    const data = await super.getAll();
    console.log("all data in mongodb GET: ", data);

    return data
  }
}

export default new ImagesRepository()