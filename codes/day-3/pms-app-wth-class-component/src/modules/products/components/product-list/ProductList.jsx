import React from 'react'
//import products from '../../../../data/products'
import './ProductList.css'
import ProductRow from '../product-row/ProductRow'
import ProductFilter from '../product-filter/ProductFilter'
import { getProducts } from '../../../../services/productservice'

class ProductList extends React.Component {
    constructor(props) {
        super(props)
        console.log('ProductList created')
    }

    state = {
        //productRecords: prods
        productRecords: [],
        filterText: '',
        errorMessage: '',
        isRequestComplete: false
    }

    filterProductRecordsHandler = (newText) => {
        const copyRecords = [...this.state.productRecords]
        if (newText !== '') {
            const filteredRecords = copyRecords.filter(
                (p) => {
                    return p.productName.toLocaleLowerCase().includes(newText.toLocaleLowerCase());
                })
            this.setState({ productRecords: filteredRecords })
        } else {
            this.setState({ productRecords: [] })
        }
    }

    filterTextHandler = (newText) => {
        this.setState({ filterText: newText })
        this.filterProductRecordsHandler(newText)
    }

    deleteProductHandler = (pid) => {
        const copyRecords = [...this.state.productRecords]
        const foundIndex = copyRecords
            .findIndex(
                (p) => p.productId === pid
            )
        if (foundIndex >= 0) {
            copyRecords.splice(foundIndex, 1)
        }
        this.setState({ productRecords: copyRecords })
    }

    render() {
        console.log('ProductList rendered')
        //console.log(this.setState({ filterText: '' }))
        //[p1,p2,....]
        //[ProductRow(p1), ProductRow(p2),....]
        let design = ''
        if (!this.state.isRequestComplete) {
            design = <span>Loading...please wait</span>
        } else if (this.state.errorMessage !== '') {
            design = <span>{this.state.errorMessage}</span>
        } else if (this.state.productRecords.length === 0) {
            design = <span>No records found...</span>
        } else {
            design = (
                <>
                    <span>
                        List of Products:
                    </span>
                    <br />
                    <br />
                    <ProductFilter filterTextValue={this.state.filterText} filterTextHandlerFn={this.filterTextHandler} />
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
                                this.state.productRecords
                                    .map(
                                        (p) => {
                                            return <ProductRow productInfo={p} key={p.productId} deleteProductHandlerFn={this.deleteProductHandler} />
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
            </div >
        )
    }

    componentDidMount() {
        console.log('ProductList mounted')
        this.fetchProducts()
    }
    componentWillUnmount() {
        console.log('ProductList unmounted...')
    }

    async fetchProducts() {
        try {
            const axiosResponse = await getProducts()
            this.setState({
                productRecords: axiosResponse.data,
                isRequestComplete: true,
                errorMessage: ''
            })
        } catch (error) {
            this.setState({
                errorMessage: error.message,
                productRecords: [],
                isRequestComplete: true
            })
        }
    }
}

export default ProductList