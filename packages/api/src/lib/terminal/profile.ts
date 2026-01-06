import { ITerminal } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const terminalProfile: LibraryProfile<ITerminal> = {
  name: 'terminal',
  methods: ['log'],
}
