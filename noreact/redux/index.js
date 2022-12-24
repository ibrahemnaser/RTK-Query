const { reducer } = require("./reducers/cakeReducer");

const createStore = require("redux").createStore;

const store = createStore(reducer);

exports.store = store;
