import { useRef } from "react";
import ProductProp from "../interfaces/ProductProp";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/products";
import Product from "../interfaces/Product";

export default function CartCard( { product }: ProductProp ) {
    const { id, title, image, description, price, color, units } = product;
    const quantity = useRef(null);
    const dispatch = useDispatch();
    const manageUnits = () => {
      const productsOnCart = localStorage.getItem("cart");
      let products = [];
      if (productsOnCart) {
        products = JSON.parse(productsOnCart);
      }
      const one = products?.find((each: Product) => each.id === product.id);
      if (one) {
        one.units = Number(quantity.current.value);
        localStorage.setItem("cart", JSON.stringify(products));
        dispatch(calculateTotal({ products }));
      }
    };

    return (
        <article className="w-[340px] lg:w-[680px] md:h-[220px] flex justify-between items-center md:col-start-1 rounded-md p-[30px] py-[15px] lg:py-[30px] m-[10px] bg-[#f2f2f2]">
          <img
            className="w-[100px] h-[100px] rounded-md"
            src={image[0]}
            alt={title}
          ></img>
          <div className="flex flex-col lg:flex-row lg:items-center justify-start flex-grow">
            <div className="lg:h-[120px] flex flex-col justify-between flex-grow p-[10px]">
              <span>
                <strong className="block lg:inline-block text-[16px]">{title}</strong>
                <span className="font-bold block lg:inline-block text-[14px] pl-[5px]">- {color[0]}</span>
              </span>
              <p className="hidden lg:inline-block w-[340px] truncate text-[12px]">{description}</p>
              <input
                className="w-[60px] rounded-lg border-[#eaeaea] p-[5px] pl-[15px] text-[14px]"
                type="number"
                name="units"
                defaultValue={units}
                ref={quantity}
                onChange={manageUnits}
                min="1"
                id={id}
              ></input>
            </div>
            <strong className="text-start lg:text-end text-[14px] px-[10px]">${price}</strong>
          </div>
        </article>
    );
}