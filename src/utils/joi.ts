import Joi from "joi";

export const applicationAdmissionRegistrationSchema = Joi.object({
  fullName: Joi.string().required(),
  gender: Joi.string().required(),
  birthday: Joi.string().required(),
  cccd: Joi.string().length(12).required(),
  phonenumber: Joi.string().length(10).optional(),
  email: Joi.string().required(),
  addressToReceiveAdmissionNotice: Joi.string().required(),
  area: Joi.string().required(),
  priority: Joi.string().required(),
  highschoolAddress: Joi.string().required(),
  majorId: Joi.string().required(),
  subjectOne: Joi.string().required(),
  subjectOneScore: Joi.number().max(10).required(),
  subjectTwo: Joi.string().required(),
  subjectTwoScore: Joi.number().max(10).required(),
  subjectThree: Joi.string().required(),
  subjectThreeScore: Joi.number().max(10).required(),
  subMajorId: Joi.string().required(),
});
export const applicationForAdmissionConsiderationAccordingToTheCompetenceAssessmentTestResultSchema =
  Joi.object({
    fullName: Joi.string().required(),
    gender: Joi.string().required(),
    birthday: Joi.string().required(),
    birthplace: Joi.string().required(),
    nation: Joi.string().required(),
    permanentResidence: Joi.string().required(),
    cccd: Joi.string().length(12).required(),
    phonenumber: Joi.string().length(10).optional(),
    email: Joi.string().required(),
    area: Joi.string().required(),
    priority: Joi.string().required(),
    highschoolAddress: Joi.string().required(),
    highschoolGraduateYear: Joi.number().required(),
    examRegistrationApplicationCode: Joi.string().required(),
    nameOfTheUniversityOrganizingTheExam: Joi.string().required(),
    resultOfExam: Joi.number().required(),
    majorId: Joi.string().required(),
    subMajorId: Joi.string().required(),
  });
export const applicationForAdmissionWithAHighSchoolScriptSchema = Joi.object({
  fullName: Joi.string().required(),
  gender: Joi.string().required(),
  birthday: Joi.string().required(),
  cccd: Joi.string().length(12).required(),
  phonenumber: Joi.string().length(10).optional(),
  email: Joi.string().required(),
  addressToReceiveAdmissionNotice: Joi.string().required(),
  area: Joi.string().required(),
  priority: Joi.string().required(),
  highschoolAddress: Joi.string().required(),
  majorId: Joi.string().required(),
  subjectOne: Joi.string().required(),
  subjectOneScore: Joi.number().max(10).required(),
  subjectTwo: Joi.string().required(),
  subjectTwoScore: Joi.number().max(10).required(),
  subjectThree: Joi.string().required(),
  subjectThreeScore: Joi.number().max(10).required(),
  subMajorId: Joi.string().required(),
});
export const applicationForStraightAdmissionAndPriorityConsiderationSchema =
  Joi.object({
    fullName: Joi.string().required(),
    gender: Joi.string().required(),
    cccd: Joi.string().length(12).required(),
    birthday: Joi.string().required(),
    phonenumber: Joi.string().length(10).optional(),
    email: Joi.string().required(),
    area: Joi.string().required(),
    priority: Joi.string().required(),
    addressToReceiveAdmissionNotice: Joi.string().required(),
    objectAdmission: Joi.string().required(),
    majorId: Joi.string().required(),
    highschoolAddress: Joi.string().required(),
    subMajorId: Joi.string().required(),
  });

export const login = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
