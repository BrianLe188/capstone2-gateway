import { ProtoGrpcType } from "../../generated/admission";
import { ADMISSION_PROTO_PATH } from "../../protos";
import { credentials, loadPackageDefinition } from "@grpc/grpc-js";
import { loadSync } from "@grpc/proto-loader";

const admissionPackageDefinition = loadSync(ADMISSION_PROTO_PATH);
const admissionService = loadPackageDefinition(
  admissionPackageDefinition
) as unknown as ProtoGrpcType;

const admissionServiceClient = new admissionService.admission.Admission(
  process.env.ADMISSION_GRPC as string,
  credentials.createInsecure()
);

export default admissionServiceClient;
