import React from "react"
import App from "./App"
import Router from "./navigation/Router"
import store from "./store"
import { Provider as ReduxProvider } from "react-redux"
import { NavigationProvider } from "@exponent/ex-navigation"

export default class AppContainer extends React.Component {
  render() {
    return (
      <ReduxProvider store={store}>
        <NavigationProvider router={Router}>
          <App />
        </NavigationProvider>
      </ReduxProvider>
    )
  }
}
