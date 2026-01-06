import { IContentImport } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const contentImportProfile: LibraryProfile<IContentImport> = {
  name: 'contentImport',
  methods: ['resolve','resolveAndSave'],
}
