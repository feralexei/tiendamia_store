import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import CartCard from "../components/CartCard.tsx";
import CartResume from "../components/CartResume.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product.ts";

function Cart() {
  const [productsOnCart, setProductsOncart] = useState<Product[]>([]);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const products = JSON.parse(cart)
      setProductsOncart(products);
    }
  }, []);

  // Función para actualizar las unidades de un producto en el carrito
  const updateProductUnits = (id: string, newUnits: number) => {
    // Actualizar el estado local
    const updatedCart = productsOnCart.map((product) => {
      if (product.id === id) {
        return { ...product, units: newUnits };
      }
      return product;
    });
    setProductsOncart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const total = productsOnCart.reduce((sum, each) => sum + each.price * each.units, 0);
      
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="w-full flex flex-col md:flex-row md:grid justify-center items-center p-[20px]">
        {productsOnCart.map((each: Product) => (
          <CartCard key={each.id} product={each} updateProductUnits={updateProductUnits}/>
        ))}
        <CartResume total={total}/> 
      </main>
      <Footer />
    </>
  );
}
export default Cart;
