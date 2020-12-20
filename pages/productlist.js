import Link from "next/link";

export default function Home({ products }) {
    return (
        <div>
            {products?.map((product) => (
                <Link href={`products/${product.price}`}>
                    <h1
                        key={product.id}
                        style={{
                            cursor: "pointer",
                            borderBottom: "1px solid black",
                        }}
                    >
                        {product.name} - {product.price} !
                    </h1>
                </Link>
            ))}
        </div>
    );
}

export const getStaticProps = async () => {
    const response = await fetch("https://backendtalkai.tech/products");
    const { data } = await response.json();

    return {
        props: {
            products: data,
        },
        revalidate: 60,
    };
};
