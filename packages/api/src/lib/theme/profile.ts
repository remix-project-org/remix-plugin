import { ITheme } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const themeProfile: LibraryProfile<ITheme> = {
  name: 'theme',
  methods: ['currentTheme'],
  events: ['themeChanged']
}