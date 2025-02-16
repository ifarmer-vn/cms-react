import {Link} from "react-router-dom"
import {Product} from "../models/Product.ts";

export default function ProductDetail() {


    const products: Product[] = [
        {
            id: 1,
            url: "https://example.com/product/1",
            name: "Example Product 1",
            description: "This is an example product description for product 1.",
            title: "Example Product Title 1"
        },
        {
            id: 2,
            url: "https://example.com/product/2",
            name: "Example Product 2",
            description: "This is an example product description for product 2.",
            title: "Example Product Title 2"
        },
        {
            id: 3,
            url: "https://example.com/product/3",
            name: "Example Product 3",
            description: "This is an example product description for product 3.",
            title: "Example Product Title 3"
        }
    ];

    return <div className="p-3">
        <h1 className="font-bold text-4xl">Products</h1>
        <div>

            <table className="w-full table-auto border-collapse mt-4">
                <thead>
                <tr>
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">Name</th>
                    <th className="border px-4 py-2">Description</th>
                    <th className="border px-4 py-2">Title</th>
                    <th className="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product) => (
                    <tr key={product.id}

                        className={`border px-4 py-2 ${product.id % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                    >
                        <td className="border px-4 py-2">{product.id}</td>
                        <td className="border px-4 py-2">{product.name}</td>
                        <td className="border px-4 py-2">{product.description}</td>
                        <td className="border px-4 py-2">{product.title}</td>
                        <td className="border px-4 py-2">
                            <Link to={`/product/${product.id}`} className="text-blue-500 hover:underline mr-2">
                                Edit
                            </Link>
                            <button className="text-red-500 hover:underline"

                                    onClick={() => {
                                        if (window.confirm("Are you sure you want to remove this product?")) {
                                            // Logic for removing the product goes here
                                            console.log(`Product ${product.id} removed`);
                                        }
                                    }}
                            >Remove</button>

                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>;
}