import { ContentImport } from './type'
import { StatusEvents } from '@remix-project/plugin-utils'

export interface IContentImport {
  events: {} & StatusEvents
  methods: {
    resolve(path: string): ContentImport
    resolveAndSave (url:string, targetPath: string): string
  }
}
