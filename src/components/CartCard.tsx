import { useRef } from "react";
import ProductProp from "../interfaces/ProductProp";

interface CartCardProps extends ProductProp {
  updateProductUnits: (id: string, newUnits: number) => void;
}

export default function CartCard({product, updateProductUnits}: CartCardProps) {
    const {id, title, image, description, price, color, units} = product;
    const quantity = useRef<HTMLInputElement>(null);

  const manageUnits = () => {
    if (quantity.current) {
      const newUnits = Number(quantity.current.value);
      updateProductUnits(id, newUnits); // Llama a la función de actualización en Cart.tsx
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