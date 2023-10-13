import { Request, Response } from "express";
import { MyEventEmitter } from "../../events";
import admissionServiceClient from ".";

const applyApplicationAdmissionRegistration = (
  request: Request,
  response: Response
) => {
  try {
    const body = request.body;
    MyEventEmitter.emit("apply_admission", {
      form: "admission_registration",
      data: body,
    });
    return response.json("Wait to verify, code send to your email").status(200);
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const applyApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult =
  (request: Request, response: Response) => {
    try {
      const body = request.body;
      MyEventEmitter.emit("apply_admission", {
        form: "admission_consideration_according_to_the_competence_assessment_test_result",
        data: body,
      });
      return response
        .json("Wait to verify, code send to your email")
        .status(200);
    } catch (error) {
      return response.json("Error").status(500);
    }
  };

const applyApplicationForAdmissionWithAHighSchoolScript = (
  request: Request,
  response: Response
) => {
  try {
    const body = request.body;
    MyEventEmitter.emit("apply_admission", {
      form: "admission_with_high_school_script",
      data: body,
    });
    return response.json("Wait to verify, code send to your email").status(200);
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const applyApplicationForStraightAdmissionAndPriorityConsideration = (
  request: Request,
  response: Response
) => {
  try {
    const body = request.body;
    MyEventEmitter.emit("apply_admission", {
      form: "admission_and_priority_consideration",
      data: body,
    });
    return response.json("Wait to verify, code send to your email").status(200);
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const getAllGender = async (_request: Request, response: Response) => {
  try {
    admissionServiceClient.GetAllGender({}, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.genders).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const getAllArea = async (_request: Request, response: Response) => {
  try {
    admissionServiceClient.GetAllArea({}, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.areas).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const getAllPriority = async (_request: Request, response: Response) => {
  try {
    admissionServiceClient.GetAllPriority({}, (err: any, res: any) => {
      if (err) {
        return response.json("Error").status(400);
      }
      return response.json(res.priorities).status(200);
    });
  } catch (error) {
    return response.json("Error").status(500);
  }
};

const admissionController = {
  applyApplicationAdmissionRegistration,
  applyApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult,
  applyApplicationForAdmissionWithAHighSchoolScript,
  applyApplicationForStraightAdmissionAndPriorityConsideration,
  getAllGender,
  getAllArea,
  getAllPriority,
};

export default admissionController;
