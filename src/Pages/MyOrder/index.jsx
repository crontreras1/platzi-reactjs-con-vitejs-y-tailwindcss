import { useContext } from "react";
import { Link } from 'react-router-dom';
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import Layout from "../../Components/Layout";

function MyOrder () {
    const context = useContext(ShoppingCartContext);

    const currentPath = window.location.pathname;
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length -1;

    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-6">
                <Link to='/my-orders' className="absolute left-0">
                    <ArrowLeftIcon className="h-6 w-6 text-black cursor-pointer"/>
                </Link> 

                <h1>My Order</h1>
            </div>

            <div className='flex flex-col w-80'>
                {
                    context.order?.[index]?.product.map(product => (
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