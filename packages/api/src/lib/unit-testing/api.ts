import { UnitTestResult } from './type'
import { StatusEvents } from '@remix-project/plugin-utils'

export interface IUnitTesting {
  events: {} & StatusEvents
  methods: {
    testFromPath(path: string): UnitTestResult
    testFromSource(sourceCode: string): UnitTestResult
  }
}
