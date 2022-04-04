const intialState = {
    cardData: []
}
export default function cartItem(state=intialState, action) {
    switch (action) {
        case "ADD_TO_CART":
            return {
                ...state,
                cardData: action.data
            }
            break;
        default :
        return state;
    }

}