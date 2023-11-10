import { Request, Response } from "express";
import messageServiceClient from ".";
import { verify } from "../../utils/common";
import { User } from "../../utils/types";

const getMessages = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const token = request.headers.authorization;
    if (!token) {
      return response.status(400).json("not found");
    }
    const _verify = await verify<User>(token);
    if (!_verify) {
      return response.status(301).json("not auth");
    }
    const messages = await new Promise((resolve, reject) => {
      messageServiceClient.GetMessages(
        { target: id, sender: _verify.id },
        (err: any, res: any) => {
          if (err) {
            return response.json("Error").status(500);
          }
          console.log(res.messages);
          resolve(res?.messages);
        }
      );
    });
    return response.status(200).json(messages);
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const messageController = {
  getMessages,
};

export default messageController;
