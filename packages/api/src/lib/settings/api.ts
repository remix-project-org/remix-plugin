import { StatusEvents } from '@remix-project/plugin-utils'

export interface ISettings {
  events: {} & StatusEvents
  methods: {
    getGithubAccessToken(): string
  }
}
