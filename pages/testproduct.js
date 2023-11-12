import React, { useState } from 'react';

export default function Testproduct({products}) {

    const [productname, setproductname] = useState("");
    const [imageUrl, setimageUrl] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res = await fetch(`/api/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                productName: productname,
                productImage: imageUrl
            })
        })
        if (res.status === 201) {
            alert('success')
        } else {
            alert('failed')
        }
    }
    return (
        <>
            <h1>test page</h1>
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
