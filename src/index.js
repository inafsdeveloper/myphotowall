
const React = require('react');
// const Component = React.Component;
const ReactDOM = require('react-dom');
// const Main = require('./Compoents/Main');
require('./styles/stylesheet.css');
const Router = require('react-router-dom');
const BrowserRouter = Router.BrowserRouter;
const Redux = require('redux');
const createStore = Redux.createStore;
const applyMiddleware = Redux.applyMiddleware;
const rootReducer = require('./redux/reducer');
const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;
// const reduxLogger = require('redux-logger');
// const logger = reduxLogger.createLogger();
const App = require('./Compoents/App');
const thunkMiddleware = require('redux-thunk');
const database = require('./database/config').database;


const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware.default));


ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'));