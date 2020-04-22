import stocks from '../../data/stocks'

export default{
    state:{
        stocks:[]
    },
    mutations: {
        setStocks(state, stocks){
            state.stocks = stocks
        },
        randomizeStocks(state){

        }
    },
    actions:{
        buyStock({commit}, order){
            commit('buyStock', order)
        },
        initStocks({commit}){
            commit('setStocks', stocks)
        },
        randomizeStocks({commit}){
            commit('randomizeStocks')
        }
    }, 
    getters: {
        stocks(state){
            return state.stocks
        }
    }
}