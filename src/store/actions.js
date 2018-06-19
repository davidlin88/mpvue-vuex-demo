import * as types from './mutation-types'
// 进行涉及到多个全局变量的复杂计算

// export const setOpenId = ({ commit }, { id }) => {
//     commit(types.OPEN_ID, id)
// }
export default {
    setOpenId: ({ commit }, { id }) => commit(openId, id)
}