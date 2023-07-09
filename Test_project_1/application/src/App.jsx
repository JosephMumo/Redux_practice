import React from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, sign_up } from './actions'

const App = () => {
    const counter = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)

    const dispatch = useDispatch()
    return(
        <div className='app'>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>

            { isLogged && ( <h5>This is some classified infomation!!</h5>)}
            <button onClick={() => dispatch(sign_up())}>
                {isLogged ? 'Log-Out ' : 'Log-In'}
            </button>
        </div>
    )
}
export default App;