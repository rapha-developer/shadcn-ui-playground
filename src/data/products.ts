export interface Product {
    id: string
    name: string
    price: number
}

interface GetProductsFilters {
    id: string | null
    name: string | null
}
export async function getProducts({ id, name }: GetProductsFilters) {

    //delay 1s
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    let products = [
        { id: '20001', name: 'Product 1', price: 5000 },
        { id: '33002', name: 'Product 2', price: 3000 },
        { id: '45403', name: 'Product 3', price: 7000 },
        { id: '56204', name: 'Product 4', price: 2500 },
        { id: '69875', name: 'Product 5', price: 4000 },
        { id: '74316', name: 'Product 6', price: 6000 },
        { id: '81207', name: 'Product 7', price: 1500 },
        { id: '99308', name: 'Product 8', price: 8000 },
        { id: '104569', name: 'Product 9', price: 4500 },
        { id: '112710', name: 'Product 10', price: 5500 },
        { id: '1205911', name: 'Product 11', price: 2000 },
        { id: '1368312', name: 'Product 12', price: 9000 }
    ];

    if(id) {
        products = products.filter((product) => product.id.toLowerCase().includes(id.toLowerCase()))
    }
    if(name) {
        products = products.filter((product) => product.name.toLowerCase().includes(name.toLowerCase()))
    }
    return products
}
interface CreateProductRequest {
    name: string
    price: number
}
export async function createProduct(_: CreateProductRequest) {
    //delay de 1s
    await new Promise(resolve => setTimeout(resolve, 1000))

    // console.log(_)
    return 
}