import dotenv from "dotenv";
dotenv.config();
import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";
import { ADMISSION_PROTO_PATH } from "./protos";
import { ProtoGrpcType } from "./generated/admission";
import admissionRequest from "./services/admission";

const admissionPackageDefinition = loadSync(ADMISSION_PROTO_PATH);
const admissionService = loadPackageDefinition(
  admissionPackageDefinition
) as unknown as ProtoGrpcType;

function main() {
  if (process.env.ADMISSION_GRPC) {
    const admissionServiceClient = new admissionService.admission.Admission(
      process.env.ADMISSION_GRPC,
      credentials.createInsecure()
    );
    admissionRequest(admissionServiceClient);
  }
}

main();
