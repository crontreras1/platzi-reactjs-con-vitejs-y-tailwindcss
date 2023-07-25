import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import Layout from "../../Components/Layout";

function MyOrder () {
    const context = useContext(ShoppingCartContext);
    console.log(context.order?.slice(-1)[0]);

    return (
        <Layout>
            My Order

            <div className='flex flex-col w-80'>
                {
                    context.order?.slice(-1)[0].product.map(product => (
                        <OrderCard 
                            key={ product.id }
                            id={ product.id }
                            title={ product.title }
                            images={ product.images }
                            price={ product.price }
                        />
                    ))
                }
            </div>
        </Layout> 
    );
};

export default MyOrder;  