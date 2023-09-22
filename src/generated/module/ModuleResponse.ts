// Original file: src/protos/admission/module.proto

import type { Module as _module_Module, Module__Output as _module_Module__Output } from '../module/Module';

export interface ModuleResponse {
  'module'?: (_module_Module | null);
  'error'?: (string);
}

export interface ModuleResponse__Output {
  'module': (_module_Module__Output | null);
  'error': (string);
}
