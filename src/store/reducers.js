/**
 * 1. 该文件是用于创建一个为为Count组件服务的reducer,reducer的本质是一个函数
 * 2. reducer函数会接收到两个参数，分别为：之前的状态（preState），动作对象（action）
 */
import { INCREMENT, DECREMENT } from "./actions"

const intState = 0 //初始化状态
export default function countReducer(preState = intState, action) {
  // 从action对象中获取：type,data
  const { type, data } = action
  // 根据type决定加工数据
  switch (type) {
    // 加
    case INCREMENT:
      return preState + data
    // 减
    case DECREMENT:
      return preState - data
    default:
      return preState
  }
}
