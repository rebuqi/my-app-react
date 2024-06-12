// 定义action类型
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })
