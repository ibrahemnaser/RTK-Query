import { combineReducers } from "redux";

import cakeReducer from "./reducers/cakeReducer";
import iceReducer from "./reducers/iceReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  ice: iceReducer,
});

export default rootReducer;
