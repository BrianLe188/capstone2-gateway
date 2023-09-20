import { AdmissionClient } from "@/generated/admission/Admission";

export default (client: AdmissionClient) => {
  client.Default(
    {
      name: "admission",
      languageCode: "language",
    },
    (error, res) => {}
  );
};
