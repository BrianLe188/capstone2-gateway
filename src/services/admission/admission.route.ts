import { Router } from "express";
import { joiValidate } from "../../middlewares/validate";
import admissionController from "./admission.controller";

const router = Router();

router.post(
  "/apply/application-admisison-registration",
  admissionController.applyApplicationAdmissionRegistration
);
router.post(
  "/apply/application-for-admission-consideration-according-to-the-competence-assessment-test-result",
  admissionController.applyApplicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResult
);
router.post(
  "/apply/application-for-admission-with-a-high-school-script",
  admissionController.applyApplicationForAdmissionWithAHighSchoolScript
);
router.post(
  "/apply/application-for-straight-admission-and-priority-consideration",
  admissionController.applyApplicationForStraightAdmissionAndPriorityConsideration
);

router.get("/genders", admissionController.getAllGender);

export default router;
