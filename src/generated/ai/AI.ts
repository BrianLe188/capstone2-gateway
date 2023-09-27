// Original file: ai/ai.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { ChatMessage as _ai_ChatMessage, ChatMessage__Output as _ai_ChatMessage__Output } from '../ai/ChatMessage';
import type { GreetRequest as _ai_GreetRequest, GreetRequest__Output as _ai_GreetRequest__Output } from '../ai/GreetRequest';
import type { GreetResponse as _ai_GreetResponse, GreetResponse__Output as _ai_GreetResponse__Output } from '../ai/GreetResponse';

export interface AIClient extends grpc.Client {
  ChatGPT(argument: _ai_ChatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_ChatMessage__Output>): grpc.ClientUnaryCall;
  ChatGPT(argument: _ai_ChatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_ChatMessage__Output>): grpc.ClientUnaryCall;
  ChatGPT(argument: _ai_ChatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_ChatMessage__Output>): grpc.ClientUnaryCall;
  ChatGPT(argument: _ai_ChatMessage, callback: grpc.requestCallback<_ai_ChatMessage__Output>): grpc.ClientUnaryCall;
  chatGpt(argument: _ai_ChatMessage, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_ChatMessage__Output>): grpc.ClientUnaryCall;
  chatGpt(argument: _ai_ChatMessage, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_ChatMessage__Output>): grpc.ClientUnaryCall;
  chatGpt(argument: _ai_ChatMessage, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_ChatMessage__Output>): grpc.ClientUnaryCall;
  chatGpt(argument: _ai_ChatMessage, callback: grpc.requestCallback<_ai_ChatMessage__Output>): grpc.ClientUnaryCall;
  
  Default(argument: _ai_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _ai_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _ai_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_GreetResponse__Output>): grpc.ClientUnaryCall;
  Default(argument: _ai_GreetRequest, callback: grpc.requestCallback<_ai_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _ai_GreetRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _ai_GreetRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_ai_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _ai_GreetRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_ai_GreetResponse__Output>): grpc.ClientUnaryCall;
  default(argument: _ai_GreetRequest, callback: grpc.requestCallback<_ai_GreetResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface AIHandlers extends grpc.UntypedServiceImplementation {
  ChatGPT: grpc.handleUnaryCall<_ai_ChatMessage__Output, _ai_ChatMessage>;
  
  Default: grpc.handleUnaryCall<_ai_GreetRequest__Output, _ai_GreetResponse>;
  
}

export interface AIDefinition extends grpc.ServiceDefinition {
  ChatGPT: MethodDefinition<_ai_ChatMessage, _ai_ChatMessage, _ai_ChatMessage__Output, _ai_ChatMessage__Output>
  Default: MethodDefinition<_ai_GreetRequest, _ai_GreetResponse, _ai_GreetRequest__Output, _ai_GreetResponse__Output>
}
