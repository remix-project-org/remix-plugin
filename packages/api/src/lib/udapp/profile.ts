import { IUdapp } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const udappProfile: LibraryProfile<IUdapp> = {
  name: 'udapp',
  methods: ['createVMAccount', 'getAccounts', 'sendTransaction', 'getSettings', 'setEnvironmentMode'],
  events: ['newTransaction']
}
