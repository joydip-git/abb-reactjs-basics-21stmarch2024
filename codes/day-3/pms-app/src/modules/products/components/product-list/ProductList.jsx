import React, { useState } from 'react'
import products from '../../../../data/products'
import './ProductList.css'
import ProductRow from '../product-row/ProductRow'
import ProductFilter from '../product-filter/ProductFilter'

const ProductList = () => {
    const [productRecords, setProductRecords] = useState(products)
    const [filterText, setFilterText] = useState('')

    const filterProductRecordsHandler = (newText) => {
        const copyRecords = [...productRecords]
        if (newText !== '') {
            const filteredRecords = copyRecords.filter(
                (p) => {
                    return p.productName.toLocaleLowerCase().includes(newText.toLocaleLowerCase());
                })
            setProductRecords(filteredRecords)
        } else {
            setProductRecords(products)
        }
    }

    const filterTextHandler = (newText) => {
        setFilterText(newText)
        filterProductRecordsHandler(newText)
    }
    const deleteProductHandler = (pid) => {
        const copyRecords = [...productRecords]
        const foundIndex = copyRecords
            .findIndex(
                (p) => p.productId === pid
            )
        if (foundIndex >= 0) {
            copyRecords.splice(foundIndex, 1)
        }
        setProductRecords(copyRecords)
    }

    //[p1,p2,....]
    //[ProductRow(p1), ProductRow(p2),....]
    const productRows =
        productRecords
            .map(
                (p) => {
                    return <ProductRow productInfo={p} key={p.productId} deleteProductHandlerFn={deleteProductHandler} />
                }
            )

    return (
        <div>
            <span>
                List of Products:
            </span>
            <br />
            <br />
            <ProductFilter filterTextValue={filterText} filterTextHandlerFn={filterTextHandler} />
            <br />
            <br />
            <table>
                <thead className='head-style'>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productRows
                    }
                </tbody>

            </table>
        </div>
    )
}

export default ProductList