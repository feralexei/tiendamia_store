import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import ProductCard from "../components/ProductCard.tsx";
import Footer from "../components/Footer.tsx";
import Product from "../interfaces/Product.ts";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    axios.get("/products.json")
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
    }, []);
    
  return (
    <>
      <NavBar></NavBar>
      <Hero first="tecnología" second="renovada" />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div
          className="w-[1080px] flex flex-wrap justify-center md:justify-between gap-x-0 md:gap-x-20"
          id="products"
        >
          {products.map((each: Product) => (
            <ProductCard
              key={each.id}
              id={each.id}
              title={each.title}
              price={each.price}
              color={each.color}
              image={each.image}
              onsale={each.onsale}
              discount={each.discount}
            />
          ))}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Home;
