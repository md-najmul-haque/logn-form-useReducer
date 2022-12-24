import { actionType } from "./actionType"

export const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    education: "",
    quantity: 0,
    feedback: "",
    terms: false,

}

export const reducer = (state, action) => {
    switch (action.type) {
        case actionType.INPUT:
            return { ...state, [action.payload.name]: action.payload.value }

        case actionType.INCREMENT:
            return { ...state, quantity: state.quantity + 1 }

        case actionType.DECREMENT:
            return { ...state, quantity: state.quantity - 1 }

        case actionType.TOGGLE:
            return { ...state, terms: !state.terms }
        default:
            return state;
    }
}