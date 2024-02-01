export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}



// action creator is just a function that dispatches action