import NavBar from "../components/NavBar.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";

function NotFound() {
  return (
    <>
      <NavBar />
      <Hero first="404" second="not found" />
      <main></main>
      <Footer />
    </>
  );
}
export default NotFound;