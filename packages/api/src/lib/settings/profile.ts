import { ISettings } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const settingsProfile: LibraryProfile<ISettings> = {
  name: 'settings',
  methods: ['getGithubAccessToken'],
}
