import { createContext, useState, useEffect } from "react";

const ShoppingCartContext = createContext(); 

const ShoppingCartProvider = ({ children }) => {
    // Cart Icon - Increment cuantity
    const [count, setCount] = useState(0); 

    // Product Detail - Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); 
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
   
    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false); 
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Show Products on detail section
    const [productToShow, setProductToShow] = useState({});
    
    // Shopping cart - add products to cart
    const [cartProducts, setCartProducts] = useState([]);
    
    // Shopping cart - Order
    const [order, setOrder] = useState([]);

    // Get products
    const [items, setItems] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState('');
    
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow, 
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder, 
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            { children }
        </ShoppingCartContext.Provider>
    );
};

export { ShoppingCartContext, ShoppingCartProvider}; 