import React, { Component } from "react"
import withRouter from "@/hoc/WithRouter"
import HomeChaild from "@/components/HomeChaild"
import { connect } from "react-redux"

// @connect((state, props) => ({
//   config: state.config,
// }))
class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "HomeChaild",
      selectNumber: 1,
      count: 0,
    }
  }

  componentDidMount() {
    this.setState({ count: this.props.count })
  }

  clickJump() {
    this.props.router.navigate(`/About`, { state: { name: "11" } })
  }

  async increment() {
    await this.props.add(1)
    await this.setState({ count: this.props.count })
  }

  async decrement() {
    await this.props.dec(1)
    await this.setState({ count: this.props.count })
  }

  render() {
    return (
      <div>
        <button onClick={() => this.clickJump()}>跳转</button>
        浙江七巧板信息科技股份有限公司
        <HomeChaild title={ this.state.title }></HomeChaild>
        <div>{this.state.count}</div>
        <button onClick={() => this.increment()}>+</button>
        <button onClick={() => this.decrement()}>-</button>
      </div>
    )
  }
}

// redux
const mapStateToProps = (state) => ({ count: state })

const mapDispatchToProps = (dispatch) => ({
  add: (data) => dispatch({ type: 'INCREMENT', data }),
  dec: (data) => dispatch({ type: 'DECREMENT', data }),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home))
