const intialState = {
    lang: 'ru',
    loginModal: false
}

const settingReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'TOGGLE_LOGIN_MODAL':
            return {
                ...state,
                loginModal: action.payload
            }
        default:
            return state;
    }
}

export default settingReducer