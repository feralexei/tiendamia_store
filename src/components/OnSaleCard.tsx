import { Link } from "react-router-dom";

export default function OnSaleCard(props) {
  const { id, title, price, image, discount } = props;
  return (
    <Link
      className="w-[250px] bg-[#f0f0f0] text-[#383838] rounded-2xl m-[15px] no-underline"
      to={"/details/" + id}
    >
      <img
        className="w-full h-[250px] object-cover object-center rounded-t-2xl"
        src={image}
        alt={title}
      />
      <div className="h-[180px] p-[20px]">
        <span className="text-[20px] font-bold leading-6 block">{title}</span>
        <span className="text-[16px] font-semibold my-[5px] text-[#6e6e6e]">Antes </span>
        <span className="text-[16px] font-semibold my-[5px] text-[#6e6e6e] line-through">USD ${price}</span>
        <div className="flex justify-between items-center">
          <span className="text-[20px] font-bold">
            USD ${price - (price * discount) / 100}
          </span>
          <span className="text-[14px] font-bold text-[#428f13]">{discount}% Off</span>
        </div>
        <div className="text-[13px] font-semibold text-[#428f13] pt-[15px]">
          ¡Compra con créditos sin intereses!
        </div>
      </div>
    </Link>
  );
}
