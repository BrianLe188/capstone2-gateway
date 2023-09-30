import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { CoreClient as _core_CoreClient, CoreDefinition as _core_CoreDefinition } from './core/Core';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  core: {
    Core: SubtypeConstructor<typeof grpc.Client, _core_CoreClient> & { service: _core_CoreDefinition }
    GreetRequest: MessageTypeDefinition
    GreetResponse: MessageTypeDefinition
    Message: MessageTypeDefinition
    RequestEmpty: MessageTypeDefinition
    Strings: MessageTypeDefinition
    Target: MessageTypeDefinition
  }
  majors: {
    Majors: MessageTypeDefinition
    MajorsResponse: MessageTypeDefinition
    Majorss: MessageTypeDefinition
    MajorssResponse: MessageTypeDefinition
    UpdateMajors: MessageTypeDefinition
  }
  member_school: {
    MemberSchool: MessageTypeDefinition
    MemberSchoolResponse: MessageTypeDefinition
    MemberSchools: MessageTypeDefinition
    MemberSchoolsResponse: MessageTypeDefinition
    UpdateMemberSchool: MessageTypeDefinition
  }
  module: {
    Module: MessageTypeDefinition
    ModuleResponse: MessageTypeDefinition
    Modules: MessageTypeDefinition
    ModulesResponse: MessageTypeDefinition
    UpdateModule: MessageTypeDefinition
  }
  subject: {
    Subject: MessageTypeDefinition
    SubjectResponse: MessageTypeDefinition
    Subjects: MessageTypeDefinition
    SubjectsResponse: MessageTypeDefinition
    UpdateSubject: MessageTypeDefinition
  }
  subject_block: {
    SubjectBlock: MessageTypeDefinition
    SubjectBlockResponse: MessageTypeDefinition
    SubjectBlocks: MessageTypeDefinition
    SubjectBlocksResponse: MessageTypeDefinition
    UpdateSubjectBlock: MessageTypeDefinition
  }
}
