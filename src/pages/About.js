import React, { Component } from "react"
import withRouter from "@/hoc/WithRouter"

class About extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    console.log(this.props.router.location.state, "--")
  }

  onBack() {
    this.props.router.navigate("/Home")
  }

  render() {
    return (
      <div>
        <button onClick={() => this.onBack()}>返回</button>
        434341
      </div>
    )
  }
}
export default withRouter(About)
