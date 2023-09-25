import { Router } from "express";
import admissionController from "./admission.controller";

const router = Router();

// modules
router.get("/modules", admissionController.getAllModule);
router.post("/modules", admissionController.createModule);
router.put("/modules/:id", admissionController.updateModule);
router.delete("/modules/:id", admissionController.deleteModule);

// member school
router.get("/member-schools", admissionController.getAllMemberSchool);
router.post("/member-schools", admissionController.createMemberSchool);
router.put("/member-schools/:id", admissionController.updateMemberSchool);
router.delete("/member-schools/:id", admissionController.deleteMemberSchool);

// majors
router.post("/majors", admissionController.createMajor);
router.put("/majors/:id", admissionController.updateMajor);
router.delete("/majors/:id", admissionController.deleteMajor);

// subject
router.post("/subjects", admissionController.createSubject);
router.put("/subjects/:id", admissionController.updateSubject);
router.delete("/subjects/:id", admissionController.deleteSubject);

// subject block
router.post("/subject-blocks", admissionController.createSubjectBlock);
router.put("/subject-blocks/:id", admissionController.updateSubjectBlock);
router.delete("/subject-blocks/:id", admissionController.deleteSubjectBlock);

export default router;
