import { SAVE_COMMENT } from '../actions/types'

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload]
  }
  return state
}
