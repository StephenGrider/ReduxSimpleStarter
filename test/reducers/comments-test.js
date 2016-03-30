import { expect } from '../test_helper'

import commentReducer from '../../src/reducers/comments'

import { SAVE_COMMENT } from '../../src/actions/types'

describe('Comments Reducer', () => {
  it('handles action with unkown type', () => {
    const reducer = commentReducer(undefined, {})
    expect(reducer).to.be.instanceOf(Array)
  })

  it('handles action of type of SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' }
    expect(commentReducer([], action)).to.eql(['new comment'])
  })
})
