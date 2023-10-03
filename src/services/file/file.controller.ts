import { Request, Response } from "express";
import { MyEventEmitter } from "../../events";

const upload = (request: Request, response: Response) => {
  try {
    const folder = request.params.folder;
    const file = request.file;
    MyEventEmitter.emit("upload_file", {
      file,
      folder,
    });
  } catch (error) {
    console.log(error);
    return response.json("Failed").status(500);
  }
};

const fileController = {
  upload,
};

export default fileController;
