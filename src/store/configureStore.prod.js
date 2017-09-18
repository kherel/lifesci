import {createStore as reduxCreateStore, applyMiddleware} from 'redux';
import reducer from 'rootReducer';
import error from 'store/middleware/error';
import humaniqBackendApi from 'store/middleware/humaniqBackendApi'
import butterCmsApi from 'store/middleware/butterCmsApi'

const enhancer = applyMiddleware(humaniqBackendApi, butterCmsApi, error)

const createStore = (initialState = {}) => reduxCreateStore(
  reducer,
  initialState,
  enhancer
)

export default createStore;