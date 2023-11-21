import { Request, Response } from "express";
import { MyEventEmitter } from "../../events";

const importQATemplate = (request: Request, response: Response) => {
  try {
    const file = request.file;
    MyEventEmitter.emit("upload_file", { data: file, routing: "qa" });
    return response.status(200).json("Done");
  } catch (error) {}
};

const settingController = {
  importQATemplate,
};

export default settingController;
