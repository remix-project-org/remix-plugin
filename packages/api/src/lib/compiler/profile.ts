import { ICompiler } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const compilerProfile: LibraryProfile<ICompiler> = {
  name: 'solidity',
  methods: ['compile', 'getCompilationResult', 'compileWithParameters', 'setCompilerConfig'],
  events: ['compilationFinished']
}
