import React from 'react'
import PropTypes from 'prop-types'

const ProductFilter = (props) => {
    return (
        <div>
            <label htmlFor='txtFilter'>
                Filter Product By Name: &nbsp;
            </label>
            <input
                type='text'
                id='txtFilter'
                value={props.filterTextValue}
                onChange={
                    (e) => {
                        const text = e.target.value
                        props.filterTextHandlerFn(text)
                    }
                } />
        </div>
    )
}
ProductFilter.propTypes = {
    filterTextValue: PropTypes.string.isRequired,
    filterTextHandlerFn: PropTypes.func.isRequired
}
export default ProductFilter