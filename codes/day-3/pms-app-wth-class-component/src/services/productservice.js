import Axios from 'axios'

const baseUrl = 'http://localhost:4000/products'

export const getProducts = () => {
    const promiseOfAxiosresponse = Axios.get(baseUrl)
    return promiseOfAxiosresponse
}
export const getProductById = (pid) => {
    return Axios.get(`${baseUrl}/${pid}`)
}
export const addProduct = (product) => {
    return Axios.post(baseUrl, product)
}
export const updateProduct = (pid, product) => {
    return Axios.put(`${baseUrl}/${pid}`, product)
}
export const deleteProduct = (pid) => {
    return Axios.delete(`${baseUrl}/${pid}`)
}