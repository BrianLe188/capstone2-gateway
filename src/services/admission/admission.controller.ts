import { Request, Response } from "express";
import admissionServiceClient from ".";

const getAllModule = async (_request: Request, response: Response) => {
  try {
    admissionServiceClient.GetAllModule({}, (err: any, res: any) => {
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
    admissionServiceClient.CreateModule(request.body, (err: any, res: any) => {
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
    admissionServiceClient.UpdateModule(
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
    admissionServiceClient.DeleteModule({ id }, (err: any, res: any) => {
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
    admissionServiceClient.GetAllMemberSchool({}, (err: any, res: any) => {
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
    admissionServiceClient.CreateMemberSchool(
      request.body,
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

const updateMemberSchool = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    admissionServiceClient.UpdateMemberSchool(
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
    admissionServiceClient.DeleteMemberSchool({ id }, (err: any, res: any) => {
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
    admissionServiceClient.CreateMajor(request.body, (err: any, res: any) => {
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
    admissionServiceClient.UpdateMajor(
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
    admissionServiceClient.DeleteMajor({ id }, (err: any, res: any) => {
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
    admissionServiceClient.GetAllSubject({}, (err: any, res: any) => {
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
    admissionServiceClient.CreateSubject(request.body, (err: any, res: any) => {
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
    admissionServiceClient.UpdateSubject(
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
    admissionServiceClient.DeleteSubject({ id }, (err: any, res: any) => {
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
    admissionServiceClient.CreateSubjectBlock(
      request.body,
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

const updateSubjectBlock = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    admissionServiceClient.UpdateSubjectBlock(
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
    admissionServiceClient.DeleteSubject({ id }, (err: any, res: any) => {
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
    admissionServiceClient.GetAllSubjectBlock({}, (err: any, res: any) => {
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
    admissionServiceClient.ImportSubjectBlock(
      request.body,
      (err: any, res: any) => {
        if (err) {
          return response.json("Error").status(400);
        }
        return response.json(res.message).status(200);
      }
    );
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const admissionController = {
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
};

export default admissionController;
