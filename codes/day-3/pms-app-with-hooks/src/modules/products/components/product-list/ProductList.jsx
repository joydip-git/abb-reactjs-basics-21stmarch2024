import React, { useEffect, useState } from 'react'
import './ProductList.css'
import ProductRow from '../product-row/ProductRow'
import ProductFilter from '../product-filter/ProductFilter'
import { getProducts } from '../../../../services/productservice'

const ProductList = () => {
    const [productRecords, setProductRecords] = useState([])
    const [isRequestComplete, setIsRequestComplete] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const [filterText, setFilterText] = useState('')

    const fetchProducts = async () => {
        try {
            const axiosResponse = await getProducts()
            console.log(axiosResponse.data)
            setProductRecords(axiosResponse.data)
            setErrorMessage('')
            setIsRequestComplete(true)
        } catch (error) {
            setProductRecords([])
            setErrorMessage(error.message)
            setIsRequestComplete(true)
        }
    }
    //componentDidMount
    //will be executed when when the very first time component is rendered
    useEffect(
        () => {
            fetchProducts()
        },
        []
    )

    //will be executed when the value of filtertext changes
    // useEffect(
    //     () => {
    //         fetchProducts()
    //     },
    //     [filterText]
    // )

    //executed every time
    // useEffect(
    //     () => {
    //         fetchProducts()
    //     }
    // )

    const filterProductRecordsHandler = (newText) => {
        const copyRecords = [...productRecords]
        if (newText !== '') {
            const filteredRecords = copyRecords.filter(
                (p) => {
                    return p.productName.toLocaleLowerCase().includes(newText.toLocaleLowerCase());
                })
            setProductRecords(filteredRecords)
        } else {
            setProductRecords([])
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

    let design = ''
    if (!isRequestComplete) {
        design = <span>Loading....</span>
    } else if (errorMessage !== '') {
        design = <span>{errorMessage}</span>
    } else if (productRecords.length === 0) {
        design = <span>No record found</span>
    } else {
        design = (
            <>
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
                            productRecords
                                .map(
                                    (p) => {

                                        const row = <ProductRow productInfo={p} key={p.productId} deleteProductHandlerFn={deleteProductHandler} />
                                        console.log(row)
                                        return row
                                    }
                                )
                        }
                    </tbody>

                </table>
            </>
        )
    }

    return (
        <div>
            {design}
        </div>
    )
}

export default ProductList