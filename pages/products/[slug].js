import { useRouter } from "next/router";
import Footer from "../../components/Footer";

export default function Product({ product }) {
    const router = useRouter();

    return (
        <div>
            <h1>{product?.name}</h1>
            <h5>{product?.price}</h5>
            <span onClick={() => router.back()}>Click here to go back</span>
            <Footer />
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
