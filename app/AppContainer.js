import React from "react"
import App from "./App"
import store from "./store"
import { Provider } from "react-redux"

export default class AppContainer extends React.Component {
 render() {
   return (
     <Provider store={store}>
       <App />
     </Provider>
   )
 }
}
