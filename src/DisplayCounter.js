import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

const DisplayCounter = ({ count }) => {
    return <p>O contador está em {count}</p>
}

DisplayCounter.propTypes = {
    count: PropTypes.number
}

DisplayCounter.defaultProps = {
    count: 0
}

const mapStateToProps = (state) => {
    return { count: state.count }
}

export default connect(mapStateToProps)(DisplayCounter)