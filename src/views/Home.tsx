import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import ProductCard from "../components/ProductCard.tsx";
import Footer from "../components/Footer.tsx";
import Product from "../interfaces/Product.ts";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { stateType } from "../store/index.ts";

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const text = useSelector((store: stateType) => store.products.text);
  
  useEffect(() => {
    axios
      .get("/products.json")
      .then((response) => {
        const filterData = response.data.filter((each) =>
          each.title.toLowerCase().includes(text.toLowerCase())
        );
        setProducts(filterData);
      })
      .catch((error) => console.log(error));
  }, [text]);

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
