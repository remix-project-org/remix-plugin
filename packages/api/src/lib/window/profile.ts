import { IWindow } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const windowProfile: LibraryProfile<IWindow> = {
  name: 'window',
  methods: ['prompt', 'confirm', 'alert'],
}