// @ts-nocheck
/* eslint-disable */
import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from '../components/Header'

function withLayout(BaseComponent) {
  class App extends React.Component {
    render() {
      return (
        <div>
          <CssBaseline />
          <Header {...this.props} />
          <BaseComponent {...this.props} />
        </div>
      )
    }
  }

  App.getInitialProps = context => {
    if (BaseComponent.getInitialProps) {
      return BaseComponent.getInitialProps(context)
    }

    return {}
  }

  return App
}

export default withLayout
