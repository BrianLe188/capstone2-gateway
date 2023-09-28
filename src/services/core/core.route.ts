import { Router } from "express";
import coreController from "./core.controller";

const router = Router();

// modules
router.get("/modules", coreController.getAllModule);
router.post("/modules", coreController.createModule);
router.put("/modules/:id", coreController.updateModule);
router.delete("/modules/:id", coreController.deleteModule);

// member school
router.get("/member-schools", coreController.getAllMemberSchool);
router.post("/member-schools", coreController.createMemberSchool);
router.put("/member-schools/:id", coreController.updateMemberSchool);
router.delete("/member-schools/:id", coreController.deleteMemberSchool);

// majors
router.post("/majors", coreController.createMajor);
router.put("/majors/:id", coreController.updateMajor);
router.delete("/majors/:id", coreController.deleteMajor);

// subject
router.post("/subjects/import", coreController.importSubject);
router.get("/subjects", coreController.getAllSubject);
router.post("/subjects", coreController.createSubject);
router.put("/subjects/:id", coreController.updateSubject);
router.delete("/subjects/:id", coreController.deleteSubject);

// subject block
router.post("/subject-blocks/import", coreController.importSubjectBlock);
router.get("/subject-blocks", coreController.getAllSubjectBlock);
router.post("/subject-blocks", coreController.createSubjectBlock);
router.put("/subject-blocks/:id", coreController.updateSubjectBlock);
router.delete("/subject-blocks/:id", coreController.deleteSubjectBlock);

export default router;
