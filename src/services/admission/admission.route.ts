import { Router } from "express";
import admissionController from "./admission.controller";

const router = Router();

// modules
router.get("/modules", admissionController.getAllModule);
router.post("/modules", admissionController.createModule);
router.put("/modules/:id", admissionController.updateModule);
router.delete("/modules/:id", admissionController.deleteModule);

// member school
router.post("/member_schools", admissionController.createMemberSchool);
router.put("/member_schools/:id", admissionController.updateMemberSchool);
router.delete("/member_schools/:id", admissionController.deleteMemberSchool);

// majors
router.post("/majors", admissionController.createMajor);
router.put("/majors/:id", admissionController.updateMajor);
router.delete("/majors/:id", admissionController.deleteMajor);

// subject
router.post("/subjects", admissionController.createSubject);
router.put("/subjects/:id", admissionController.updateSubject);
router.delete("/subjects/:id", admissionController.deleteSubject);

// subject block
router.post("/subject_blocks", admissionController.createSubjectBlock);
router.put("/subject_blocks/:id", admissionController.updateSubjectBlock);
router.delete("/subject_blocks/:id", admissionController.deleteSubjectBlock);

export default router;
