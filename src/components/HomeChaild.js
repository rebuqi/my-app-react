import React, { Component } from "react"

export default class HomeChaild extends Component {
  static defaultProps = {
    title: '11',
  }
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentDidMount() {
    console.log(this.props, "-")
  }

  render() {
    return <div>{this.props.title}</div>
  }
}
