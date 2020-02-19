const ActionTypes = {
  SET_DATA: 'SET_DATA',
  CHANGE_PERIOD: 'CHANGE_PERIOD',
  CHANGE_FILTER: 'CHANGE_FILTER',
  CHANGE_ISIN: 'CHANGE_ISIN',
}

const initialState = {
  data: {
    isin: "QWERTY123",
    name: "QW COMPANY",
    info: "QW COMPANY Int.",
    price: "5412.12",
    currency: "USD",
    chartData: []
  },
  period: 'week',
  filter: 'price',
}

export const setData = (data, dispatch) => {
  dispatch({ type: ActionTypes.SET_DATA, payload: data })
}

export const changeIsin = (isin, dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_ISIN, payload: isin })
}

export const changePeriod = (period, dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_PERIOD, payload: period })
}

export const changeFilter = (filter, dispatch) => {
  dispatch({ type: ActionTypes.CHANGE_FILTER, payload: filter })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_DATA:
      return { ...state, data: action.payload }
    case ActionTypes.CHANGE_PERIOD:
      return { ...state, period: action.payload }
    case ActionTypes.CHANGE_FILTER:
      return { ...state, filter: action.payload }
    case ActionTypes.CHANGE_ISIN:
      return { ...state, data: {
        ...state.data,
        isin: action.payload,
      }}
    default:
      return state
  }
}

export default reducer
