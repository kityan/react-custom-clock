import React, { Component } from 'react'
import { ComponentA, ComponentB } from 'components'

// custom-clock
import { CustomClockComponent } from 'custom-clock'
customElements.define('custom-clock', CustomClockComponent)

class App extends Component {
  state = {
    B_isLoading: true
  }
  componentDidMount() {
    setTimeout(() => this.setState(prevState => ({ B_isLoading: false })), 2000)
  }
  render() {
    return (
      <React.Fragment>
        <ComponentA>
          <p>hello</p>
        </ComponentA>
        <ComponentB data={2} loading={this.state.B_isLoading} />
        <ComponentB data={3} loading={this.state.B_isLoading} />
        <custom-clock size="100px" stroke-color="#536dfe"></custom-clock>
      </React.Fragment>
    )
  }

}

export default App
