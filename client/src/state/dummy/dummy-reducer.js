import { DUMMY } from "./dummy-action-creators";
import initialState from "./dummy-initial-state";

export default (state = initialState, action) => {
  var mapActions = {
    [DUMMY]: () => action.payload,
    DEFAULT: () => state
  };
  
  return (mapActions[action.type] || mapActions.DEFAULT)();
};