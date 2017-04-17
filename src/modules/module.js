import { createModule } from 'redux-modules';
import { fromJS, List, Map } from 'immutable';
import store from '../store';

export default module = createModule({
  name: 'Module',
  selector: state => state,
  initialState: fromJS({}),
  transformations: {
    actionName: {
      reducer: (state = fromJS({}), { payload }) => {
        return state;
      }
    },
  },
});