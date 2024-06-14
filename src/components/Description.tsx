import ProductProp from "../interfaces/ProductProp";

export default function Description(props: ProductProp) {
  const {product} = props;
  return (
    <section className="w-[340px] p-[10px] m-[10px] flex flex-col">
      <h1 className="text-[28px] font-bold mt-0 text-wrap">{product.title}</h1>
      <form className="mt-[30px]">
        <fieldset className="border-0 p-0 flex flex-col">
          <label className="text-[12px] font-bold sm:text-[14px]" htmlFor="color">
            Color
          </label>
          <select
            className="text-[13px] sm:text-[14px] w-full h-[40px] bg-white rounded-[10px] border-1 border-[#eaeaea] m-0 mt-[10px] p-[10px]"
            id="color"
          >
            {product.color.map((each) => (
              <option key={each} value={each}>
                {each}
              </option>
            ))}
          </select>
        </fieldset>
      </form>
      <div className="mt-[30px]">
        <span className="text-[12px] font-bold sm:text-[14px]">Descripción</span>
        <p className="text-[12px] sm:text-[14px]">{product.description}</p>
      </div>
    </section>
  );
}
