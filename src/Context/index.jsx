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
    const [filteredItems, setFilteredItems] = useState(null);

    // Get products by title
    const [searchByTitle, setSearchByTitle] = useState('null');
    
    // Get products by category
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, []);

    const filteredItemsByTitle = (items, searchByTitle) => {       
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    }
    
    const filteredItemsByCategory = (items, searchByCategory) => {       
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()));
    }

    const filterBy = (type, items, searchByTitle, searchByCategory) => {
        if (type === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle);
        }

        if (type === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory);
        }
        
        if (type === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
        }

        if (!type ) {
            return items;  
        }
    }

    useEffect(() => {
        if(searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
        if(searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
        if(searchByCategory && !searchByTitle) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory));
        if(!searchByCategory && !searchByTitle) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
    }, [items, searchByTitle, searchByCategory]);

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
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}> 
            { children }
        </ShoppingCartContext.Provider>
    );
};

export { ShoppingCartContext, ShoppingCartProvider}; 