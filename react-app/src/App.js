import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";
import reducer from "./reducer";
import reduxThunk from "redux-thunk";

import Header from './components/Header'
import Team from './components/Team'
import Players from './components/Players'

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  render(){
  return (
    <Provider store={store}>
    <Router>
        <Header></Header>
      <div>
        <Team></Team>
      <Route path="/" component={Team} />
      <Route path="/players" component={Players} />
      </div>
    </Router>
    </Provider>
  );
  }
}

export default App;
