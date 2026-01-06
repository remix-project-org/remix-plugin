import { StatusEvents } from '@remix-project/plugin-utils'

export interface IVScodeExtAPI {
  events: {
  } & StatusEvents
  methods: {
    executeCommand(extension: string, command: string, payload?: any[]): any
  }
}
