import { StatusEvents } from '@remix-project/plugin-utils'
import { TerminalMessage } from './type';
export interface ITerminal {
  events: {   
  } & StatusEvents
  methods: {
    log(message: TerminalMessage): void
  }
}
