const cakeReducer = require("../features/cake/cakeSlice");
const iceReducer = require("../features/iceCream/iceCream");
const userReducer = require("../features/users/user");

const reduxlogger = require("redux-logger");
const logger = reduxlogger.createLogger();

const configureStore = require("@reduxjs/toolkit").configureStore;
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
    user: userReducer,
  },
  // middleware: (defaultMiddleWare) => defaultMiddleWare().concat(logger),
});

module.exports = store;
