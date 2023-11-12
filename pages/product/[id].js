import React, { useState } from 'react';
import baseUrl from "../../helpers/baseUrl";

export default function Editproduct({ product }) {

    const [productname, setproductname] = useState(product?.productName);
    const [imageUrl, setimageUrl] = useState(product?.productImage);
    console.log(product);
    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch(`/api/product`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: product._id,
                productName: productname,
                productImage: imageUrl
            })
        })
        if (res.status === 200) {
            alert('success')
        } else {
            alert('failed')
        }
    }

    return (
        <>
            <h1>Update Product page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Product name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter product name"
                        value={productname} onChange={(e) => setproductname(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Image url</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter image url"
                        value={imageUrl} onChange={(e) => setimageUrl(e.target.value)} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </>
    )   
}

export async function getServerSideProps(ctx) {
    const { params: { id } } = ctx
    const res = await fetch(`${baseUrl}/api/productapi/${id}`)
    const data = await res.json()
    return {
        props: {
            product: data
        }
    }
}