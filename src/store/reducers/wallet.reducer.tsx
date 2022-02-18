import { handleActions, createActions } from 'redux-actions'
export const actions: any = createActions({
  SET_DATA: [(meta) => meta, (payload) => payload],
})
const defaultState = {
  isRequest: false,
  isSuccess: false,
  isFailure: false,
  render_component: 0,
  message: '',
  image_info: {},
  data: null,
}
const reducers = handleActions(
  {
    [actions.setData]: (state) => {
      return {
        ...state,
      }
    },
  },
  defaultState
)
export default reducers
