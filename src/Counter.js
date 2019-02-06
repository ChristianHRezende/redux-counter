import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import { increment, decrement } from './actions'

const Counter = ({ count, increment, decrement }) => {

    return (
        <div className='keyboardContainer'>
            <p>Contador: {count}</p>
            <div className='keyboard'>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment),
        decrement: () => dispatch(decrement),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)