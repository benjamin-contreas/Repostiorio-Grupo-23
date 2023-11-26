import { createContext, useState, useEffect } from "react";
import { useFetch } from "../useFetch";

export const ProductContext = createContext();

export function ProductContextProvider(props) {
  const { data } = useFetch("https://fakestoreapi.com/products");
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [filteredData, setFilteredData] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState([]);

  function addToCart(product) {
    setCartItems([...cartItems, product]);

    if (!cartItems.some((item) => item.id === product.id)) {
      setTotalPrice([
        ...totalPrice,
        {
          id: product.id,
          price: product.price,
          quantity: 1,
        },
      ]);
    }
  }

  function removeFromCart(id) {
    const nuevoCartItems = cartItems.filter((product) => product.id !== id);
    setCartItems(nuevoCartItems);
  }

  function removeFromTotalPrice(id) {
    const nuevoTotalPrice = totalPrice.filter((item) => item.id !== id);
    setTotalPrice(nuevoTotalPrice);
  }

  function selectCategory(category) {
    setSelectedCategory(category);
  }

  function toggleCart() {
    setIsCartOpen(!isCartOpen);
  }

  useEffect(() => {}, [cartItems]);

  useEffect(() => {
    if (selectedCategory === 0) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, data]);

  useEffect(() => {
    console.log(totalPrice);
  }, [totalPrice]);

  return (
    <ProductContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        selectCategory,
        filteredData,
        isCartOpen,
        toggleCart,
        totalPrice,
        setTotalPrice,
        removeFromTotalPrice,
        data,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
}
