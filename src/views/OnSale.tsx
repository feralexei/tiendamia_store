import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";
import Product from "../interfaces/Product.ts";
import OnSaleCard from "../components/OnSaleCard.tsx";
import { useState, useEffect } from "react";
import axios from "axios";

function OnSale() {
  const [onsale, setOnSale] = useState<Product[]>([]);
  useEffect(() => {
    axios("/products.json")
      .then((res) => {     
        const onSaleProducts: Array<Product> = res.data.filter(
          (each) => each.onsale
        );
        onSaleProducts.length > 0 && setOnSale(onSaleProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(3);
  // Funciones para actualizar los estados
  const nextPage = () => {
    if (to < onsale.length) {
      setFrom(from + 3);
      setTo(to + 3);
    }
  };
  const prevPage = () => {
    if (from > 0) {
      setFrom(from - 3);
      setTo(to - 3);
    }
  };
  const visibleProducts = onsale.slice(from, to);
  return (
    <>
      <NavBar />
      <Hero first="ofertas" second="semanales" />
      <main className="w-full flex justify-center items-center p-[20px]">
        <div>
          <div
            className="w-full flex flex-col md:flex-row flex-wrap justify-center md:justify-between gap-x-0 md:gap-x-20"
            id="products"
          >
            {visibleProducts.map((product) => (
              <OnSaleCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                color={product.color[0]}
                image={product.image[0]}
                discount={product.discount}
              />
            ))}
          </div>
          <div className="w-full mt-[20px] flex justify-center items-center">
            <button
              className="mx-[10px] px-[20px] py-[10px] text-[16px] pointer bg-[#f62f4d] text-white rounded-[5px] disabled:bg-[#cccccc] disabled:cursor-not-allowed"
              onClick={prevPage}
              disabled={from === 0}
            >
              {"<"} Anterior
            </button>
            <button
              className="mx-[10px] px-[20px] py-[10px] text-[16px] pointer bg-[#f62f4d] text-white rounded-[5px] disabled:bg-[#cccccc] disabled:cursor-not-allowed"
              onClick={nextPage}
              disabled={to >= onsale.length}
            >
              Siguiente {">"}
            </button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default OnSale;
