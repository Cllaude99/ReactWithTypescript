import type {Action} from 'redux'

export type setTodayAction = Action<'setToday'> & {
  today: Date
}

export type Actions = setTodayAction