import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import ProductCard from "../components/ProductCard.tsx";
import Footer from "../components/Footer.tsx";
import products from "../assets/products.js";
import Product from "../interfaces/Product.ts";

function Home() {
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
            />
          ))}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
export default Home;
