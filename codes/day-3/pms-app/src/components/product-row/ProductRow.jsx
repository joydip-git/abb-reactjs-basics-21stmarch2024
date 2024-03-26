import React from 'react'
import PropTypes from 'prop-types'
import './ProductRow.css'

//props:{productInfo:{productName:'', productId:1, imageUrl:'', price:100, releaseDate:''. productCode:''. description:'', starRating:0}}

const ProductRow = (props) => {
    const { productInfo, deleteProductHandlerFn } = props
    return (
        <tr>
            <td>
                <img
                    src={productInfo.imageUrl}
                    alt='NA'
                    title={productInfo.productName}
                    className='img-style'
                />
            </td>
            <td>{productInfo.productName}</td>
            <td>{productInfo.price}</td>
            <td>{productInfo.starRating}</td>
            <td>
                <button
                    className='delete-button-style'
                    onClick={
                        () => deleteProductHandlerFn(productInfo.productId)
                    }>
                    Delete
                </button>
            </td>
        </tr>
    )
}
ProductRow.propTypes = {
    productInfo: PropTypes.object.isRequired,
    deleteProductHandlerFn: PropTypes.func.isRequired
}
export default ProductRow