import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import CartCard from "../components/CartCard.tsx";
import CartResume from "../components/CartResume.tsx";
import Footer from "../components/Footer.tsx";
import { useEffect, useState } from "react";
import Product from "../interfaces/Product.ts";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/products.ts";

function Cart() {
  const dispatch = useDispatch();
  const [productsOnCart, setProductsOncart] = useState<Product[]>([]);
  useEffect(() => {
    const products = localStorage.getItem("cart");
    if (products) {
      setProductsOncart(JSON.parse(products));
      dispatch(calculateTotal({ products: JSON.parse(products) }));
    }
  }, []);
        
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main className="w-full flex flex-col md:flex-row md:grid justify-center items-center p-[20px]">
        {productsOnCart.map((each: Product) => (
          <CartCard key={each.id} product={each}/>
        ))}
        <CartResume/>
      </main>
      <Footer />
    </>
  );
}
export default Cart;
