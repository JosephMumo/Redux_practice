const loggedReducer = ( state = false, actions ) => {
    switch( actions.type) {
        case 'SIGN_UP':
            return !state
        default:
            return  state;
    }
}
export default loggedReducer