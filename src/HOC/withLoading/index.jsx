import React from 'react'
const withLoading = Component => {
  return class WithLoading extends React.Component {
    render() {
      const { loading, ...props } = this.props
      return loading ? <p>loading</p> : <Component {...props} />
    }
  }
}

export default withLoading
