import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

import { increment, decrement } from './actions'

const Counter = ({ count, increment, decrement }) => {

    return (
        <div className='keyboardContainer'>
            <p>Contador: {count}</p>
            <div className='keyboard'>
                <button onClick={() => decrement(20)}>-</button>
                <button onClick={() => increment(10)}>+</button>
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
        increment: (value) => dispatch(increment(value)),
        decrement: (value) => dispatch(decrement(value)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter)