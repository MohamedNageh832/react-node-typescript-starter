import cloudinary from "cloudinary";

const cloud = cloudinary.v2;

class CDNManager {
  cdn: typeof cloudinary.v2;

  constructor() {
    this.cdn = cloud;
    this.#init();
  }

  #init() {
    cloud.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async upload(file: string) {
    try {
      const result = await this.cdn.uploader.upload(file);

      return [null, result];
    } catch (err) {
      return [err, null];
    }
  }

  async get() {
    const result = await this.cdn.api.delete_resources([]); // public_id s
  }
}

export default new CDNManager();
