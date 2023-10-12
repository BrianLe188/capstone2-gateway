import { Request, Response } from "express";
import coreServiceClient from ".";
import { MyEventEmitter } from "../../events";

const getAllModule = async (_request: Request, response: Response) => {
  try {
    coreServiceClient.GetAllModule({}, (err: any, res: any) => {
      if (err) {
        return response.json(res?.error).status(400);
      }
      return response.json(res.modules).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const createModule = async (request: Request, response: Response) => {
  try {
    coreServiceClient.CreateModule(request.body, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.module).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const updateModule = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.UpdateModule(
      { id, body: request.body },
      (err: any, res: any) => {
        if (err) {
          return response.json("Error").status(400);
        }
        return response.json(res.module).status(200);
      }
    );
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const deleteModule = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.DeleteModule({ id }, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.message).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const getAllMemberSchool = async (_request: Request, response: Response) => {
  try {
    coreServiceClient.GetAllMemberSchool({}, (err: any, res: any) => {
      if (err) {
        return response.json(res?.error).status(400);
      }
      return response.json(res.schools).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const createMemberSchool = async (request: Request, response: Response) => {
  try {
    coreServiceClient.CreateMemberSchool(request.body, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.school).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const updateMemberSchool = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.UpdateMemberSchool(
      { id, body: request.body },
      (err: any, res: any) => {
        if (err) {
          return response.json("Error").status(400);
        }
        return response.json(res.school).status(200);
      }
    );
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const deleteMemberSchool = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.DeleteMemberSchool({ id }, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.message).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const createMajor = async (request: Request, response: Response) => {
  try {
    coreServiceClient.CreateMajor(request.body, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.major).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const updateMajor = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.UpdateMajor(
      { id, body: request.body },
      (err: any, res: any) => {
        if (err) {
          return response.json("Error").status(400);
        }
        return response.json(res.major).status(200);
      }
    );
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const deleteMajor = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.DeleteMajor({ id }, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.message).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const getAllSubject = async (_request: Request, response: Response) => {
  try {
    coreServiceClient.GetAllSubject({}, (err: any, res: any) => {
      if (err) {
        return response.json(res?.error).status(400);
      }
      return response.json(res.subjects).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const createSubject = async (request: Request, response: Response) => {
  try {
    coreServiceClient.CreateSubject(request.body, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.subject).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const updateSubject = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.UpdateSubject(
      { id, body: request.body },
      (err: any, res: any) => {
        if (err) {
          return response.json("Error").status(400);
        }
        return response.json(res.subject).status(200);
      }
    );
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const deleteSubject = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.DeleteSubject({ id }, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.message).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const importSubject = async (request: Request, response: Response) => {
  try {
    coreServiceClient.ImportSubject(request.body, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.message).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const createSubjectBlock = async (request: Request, response: Response) => {
  try {
    coreServiceClient.CreateSubjectBlock(request.body, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.block).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const updateSubjectBlock = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.UpdateSubjectBlock(
      { id, body: request.body },
      (err: any, res: any) => {
        if (err) {
          return response.json("Error").status(400);
        }
        return response.json(res.block).status(200);
      }
    );
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const deleteSubjectBlock = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.DeleteSubjectBlock({ id }, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.message).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const getAllSubjectBlock = async (_request: Request, response: Response) => {
  try {
    coreServiceClient.GetAllSubjectBlock({}, (err: any, res: any) => {
      if (err) {
        return response.json(res?.error).status(400);
      }
      return response.json(res.blocks).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const importSubjectBlock = async (request: Request, response: Response) => {
  try {
    coreServiceClient.ImportSubjectBlock(request.body, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.message).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const getAllFile = async (_request: Request, response: Response) => {
  try {
    coreServiceClient.GetAllFiles({}, (err: any, res: any) => {
      if (err) {
        return response.json(res?.error).status(400);
      }
      return response.json(res.files).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const createFile = async (request: Request, response: Response) => {
  try {
    const { name, extension } = request.body;
    const file = request.file;
    MyEventEmitter.emit("upload_file", file);
    const path: string = await new Promise((resolve, _reject) => {
      MyEventEmitter.on("return_path", ({ path }) => {
        if (path) {
          resolve(path);
        }
      });
    });
    coreServiceClient.CreateFile(
      { name, extension, path },
      (err: any, res: any) => {
        if (err) {
          return response.json("Error").status(400);
        }
        return response.json(res.file).status(200);
      }
    );
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const updateFile = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { name, extension } = request.body;
    const file = request.file;
    if (file) {
      MyEventEmitter.emit("upload_file", file);
    }
    const path: string = await new Promise((resolve, _reject) => {
      MyEventEmitter.on("return_path", ({ path }) => {
        if (path) {
          resolve(path);
        }
      });
    });
    coreServiceClient.UpdateFile(
      { id, body: { name, extension, path } },
      (err: any, res: any) => {
        if (err) {
          return response.json("Error").status(400);
        }
        return response.json(res.file).status(200);
      }
    );
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const deleteFile = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    coreServiceClient.DeleteFile({ id }, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.message).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const coreController = {
  getAllModule,
  createModule,
  updateModule,
  deleteModule,
  createMemberSchool,
  updateMemberSchool,
  deleteMemberSchool,
  createMajor,
  updateMajor,
  deleteMajor,
  createSubject,
  updateSubject,
  deleteSubject,
  createSubjectBlock,
  updateSubjectBlock,
  deleteSubjectBlock,
  getAllMemberSchool,
  getAllSubject,
  getAllSubjectBlock,
  importSubjectBlock,
  importSubject,
  getAllFile,
  createFile,
  updateFile,
  deleteFile,
};

export default coreController;
