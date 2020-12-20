import Link from "next/link";

export default function Home({ products }) {
    return (
        <div>
            {products.map((product) => (
                <Link href={`${product.id}`}>
                    <h1 key={product.id}>
                        {product.name} - {product.price}
                    </h1>
                </Link>
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const response = await fetch("http://localhost:8000/products");
    const data = await response.json();
    return {
        props: {
            products: data,
        },
        revalidate: 60,
    };
};
