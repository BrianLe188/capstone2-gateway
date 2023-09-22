import { Request, Response } from "express";
import admissionServiceClient from ".";

const createModule = async (request: Request, response: Response) => {
  try {
    admissionServiceClient.CreateModule(request.body, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.module).status(200);
    });
  } catch (error) {
    return error;
  }
};

const updateModule = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    admissionServiceClient.UpdateModule(
      { id, body: request.body },
      (err: any, res: any) => {
        if (res) {
          return response.json("Error").status(400);
        }
        return response.json(res.module).status(200);
      }
    );
  } catch (error) {
    return error;
  }
};

const deleteModule = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    admissionServiceClient.DeleteModule({ id }, (err: any, res: any) => {
      if (res) {
        return response.json("Error").status(400);
      }
      return response.json(res.module).status(200);
    });
  } catch (error) {
    return error;
  }
};

const admissionController = {
  createModule,
  updateModule,
  deleteModule,
};

export default admissionController;
