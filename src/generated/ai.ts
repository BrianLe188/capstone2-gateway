import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AIClient as _ai_AIClient, AIDefinition as _ai_AIDefinition } from './ai/AI';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  ai: {
    AI: SubtypeConstructor<typeof grpc.Client, _ai_AIClient> & { service: _ai_AIDefinition }
    ChatMessage: MessageTypeDefinition
    GreetRequest: MessageTypeDefinition
    GreetResponse: MessageTypeDefinition
  }
}

