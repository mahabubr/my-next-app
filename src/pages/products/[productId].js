import { useRouter } from "next/router";

const ProductId = () => {

    const router = useRouter()

    return (
        <div>
            Product Details {router.query.productId}
        </div>
    );
}

export default ProductId