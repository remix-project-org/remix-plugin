import { IVScodeExtAPI } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const vscodeExtProfile: LibraryProfile<IVScodeExtAPI> = {
  name: 'vscodeExtAPI',
  methods: ['executeCommand']
}
