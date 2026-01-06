import { IUnitTesting } from './api'
import { LibraryProfile } from '@remix-project/plugin-utils'

export const unitTestProfile: LibraryProfile<IUnitTesting> = {
  name: 'unitTest',
  methods: ['testFromPath', 'testFromSource'],
}
