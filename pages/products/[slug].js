export default function Product({ product }) {
    return (
        <div>
            <h1>{product?.name}</h1>
            <h5>{product?.price}</h5>
        </div>
    );
}
export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: "52" } }, // See the "paths" section below
        ],
        fallback: true, // See the "fallback" section below
    };
}

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    const response = await fetch(`https://backendtalkai.tech/products/${slug}`);
    const data = await response.json();
    return {
        props: {
            product: data,
        },
        revalidate: 60,
    };
};
