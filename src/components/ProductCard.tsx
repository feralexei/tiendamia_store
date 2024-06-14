import { Link } from "react-router-dom";
import Product from "../interfaces/Product";

export default function ProductCard(props: Product) {
  const { id, title, price, color, image, onsale } = props;
  return (
    <Link
      className="w-[250px] bg-[#f0f0f0] text-[#383838] rounded-2xl m-[15px] no-underline"
      to={"/details/" + id}
    >
      <img
        className="w-full h-[250px] object-cover object-center rounded-t-2xl"
        src={image[0]}
        alt={title}
      />
      <div className="p-[20px]">
        <span className="text-[20px] font-bold leading-6 block">{title}</span>
        <span className="text-[12px] text-[#383838] mb-[5px]">{color[0]}</span>
        <div className="flex my-[5px] justify-between items-center">
          <span className="text-[20px] font-bold">${price}</span>
          {onsale > 0 && (<span className="text-[12px] font-bold text-[#428f13]">{onsale}% Off</span>
          )}
        </div>
        <div className="text-[10px] font-light">
          Incluye impuesto País y percepción AFIP
        </div>
      </div>
    </Link>
  );
}
