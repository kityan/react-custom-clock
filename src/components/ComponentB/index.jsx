import React from 'react'
import * as classes from './styles.scss'
import withLoading from 'hoc/withLoading'


class ComponentB extends React.Component {
  render() {
    return <p>data = {this.props.data}</p>
  }
}

export default withLoading(ComponentB)
