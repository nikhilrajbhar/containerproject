import React from 'react';
import baseUrl from '../helpers/baseUrl';
import Link from 'next/link';


export default function Productdisplay({ products }) {
    const productList = products.map((product) => {
        return (
            <div key={product._id}>
                <Link href={`/product/[id]`} as={`/product/${product._id}`}>
                    <img src={product.productImage} alt="img1" />
                </Link>
                <p className="para">{product.productName}</p>
            </div>
        )
    })

    return (
        <>
            <h1>Product Display Page</h1>
            <div className='product-display'>
                {productList}
            </div>

        </>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${baseUrl}/api/product`)
    const data = await res.json()
    return {
        props: {
            products: data
        }
    }
}