import Link from "next/link";
import Footer from "../components/Footer";

export default function Home({ products }) {
    const pageStyle = {
        background: "#eee",
        minHeight: "100vh",
    };
    const divStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: 20,
        width: "90%",
        margin: "0 auto",
    };

    const boxStyle = {
        display: "flex",
        cursor: "pointer",
        background: "#fff",
        // border: "1px solid black",
        height: 180,
        borderRadius: "5px",
        padding: 10,
        boxShadow: "5px 5px 15px -5px rgba(0,0,0,0.69)",
    };
    return (
        <div style={pageStyle}>
            <div style={divStyle}>
                {products?.map((product) => (
                    <div key={product.id}>
                        <Link href={`products/${product.price}`}>
                            <h1 style={boxStyle}>
                                {product.name} - {product.price}
                            </h1>
                        </Link>
                    </div>
                ))}
                <Footer />
            </div>
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
        revalidate: 5,
    };
};
