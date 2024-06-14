import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import Footer from "../components/Footer.tsx";
import products from "../assets/products.js";
import Hero from "../components/Hero.tsx";
import OnSaleCard from "../components/OnSaleCard.tsx";
import Thumbs from "../components/Thumbs.tsx";
import Description from "../components/Description.tsx";
import Checkout from "../components/Checkout.tsx";
import Product from "../interfaces/Product.ts";

function Details() {
  const { id } = useParams();
  const product: Product = products.find((each) => each.id === id);
  const onsale: Product[] = products.filter((each) => each.onsale);
  const visibleOnSaleProducts = onsale.slice(0, 3);
  return (
    <>
      <NavBar />
      {!product && <Hero first="Producto" second="no encontrado" />}
      <main className="w-full flex justify-center items-center p-[20px]">
        <div className="w-full flex flex-wrap justify-between">
          {product && (
            <div id="details" className="w-full flex justify-center flex-wrap">
              <Thumbs product={product} />
              <Description product={product} />
              <Checkout product={product} />
            </div>
          )}
          {product && (
            <div className="w-full flex flex-col justify-center items-center pt-[30px]">
              <h2 className="text-[30px] font-bold sm:text-[35px] pb-[20px]">
                Ofertas de la semana
              </h2>
              <div
                id="product-container"
                className="flex flex-col md:flex-row flex-wrap items-center justify-between w-full lg:w-[1024px] gap-x-20"
              >
                {visibleOnSaleProducts.map((each: Product) => (
                  <OnSaleCard
                    key={each.id}
                    id={each.id}
                    title={each.title}
                    price={each.price}
                    color={each.color[0]}
                    image={each.image[0]}
                    onsale={each.onsale}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Details;
