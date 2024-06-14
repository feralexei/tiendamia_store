import { useState, useRef, useEffect } from "react";
import ProductProp from "../interfaces/ProductProp";

export default function Checkout(props: ProductProp) {
  const {product} = props;
  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);
  const units = useRef<HTMLInputElement>();
  useEffect(() => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = productsOnCart.find((item) => item.id === product.id);
    if (one) {
      setQuantity(one.units);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
    }
  }, [product.id]);
  const manageCart = () => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart"));
    }
    const one = productsOnCart.find((each) => each.id === product.id);
    if (!one) {
      product.units = Number(units.current.value);
      productsOnCart.push(product);
      setButton(true);
    } else {
      productsOnCart = productsOnCart.filter((each) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  };

  return (
    <section className="w-[340px] p-[10px] m-[10px] flex flex-col">
      <div className="bg-[#ebebeb] p-10 rounded-md">
        <span className="text-[#ff3b3c]">Total:</span>
        <h2 id="price" className="text-[28px] font-bold mt-[10px]">
          ${(product.price * quantity).toLocaleString()}
        </h2>
        <p className="text-wrap leading-5 text-[12px] sm:text-[14px]">
          Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
          haciendo la solicitud en AFIP.
        </p>
        <ul className="p-0 list-none mb-[30px]">
          <li className="flex my-[15px]">
            <span>
              <img src="../truck.png" alt="Truck" className="mr-[15px]"/>
            </span>
            <span className="text-wrap leading-5 text-[10px] sm:text-[12px]">
              Agrega el producto al carrito para conocer los costos de envío
            </span>
          </li>
          <li className="flex my-[15px]">
            <span>
              <img src="../plane.png" alt="Plane" className="mr-[15px]"/>
            </span>
            <span className="text-wrap leading-5 text-[10px] sm:text-[12px]">
              Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
              envío normal
            </span>
          </li>
        </ul>
        <div>
          <div className="flex mb-[10px]">
            <input
              className="h-[40px] rounded-md border-0 w-[60px] mr-[10px] p-[5px] pl-[15px] box-border"
              id="input-quantity"
              type="number"
              min="1"
              value={quantity}
              ref={units}
              onChange={() => setQuantity(Number(units.current.value))}
            />
            <button
              type="button"
              className={button 
                ? "w-full bg-[#202020] hover:bg-[#404040] text-[14px] text-white font-bold border-0 h-[40px] rounded-md" 
                : "w-full bg-[#ff3b3c] hover:bg-[#ff5151] text-[14px] text-white font-bold border-0 h-[40px] rounded-md"
              }
              onClick={manageCart}
            >
              {button ? "Quitar del carrito" : "Añadir al Carrito"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}