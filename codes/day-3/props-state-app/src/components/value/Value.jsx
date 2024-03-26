import React from 'react'
import PropTypes from 'prop-types'

const Value = (props) => {
    console.log('Value rendered')
    return (
        <div>
            <label>Number Value:&nbsp;</label>
            {props.numValue}
            <br />
            <button onClick={props.numHandlerFn}>
                Increase
            </button>
            {/* <button onClick={() => props.numHandlerFn()}>
                Increase
            </button> */}
        </div>
    )
}
Value.propTypes = {
    numValue: PropTypes.number.isRequired,
    numHandlerFn: PropTypes.func.isRequired
}
export default Value