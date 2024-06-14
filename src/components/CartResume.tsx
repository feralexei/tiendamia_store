interface Props {
  total: number;
}

export default function CartResume(props: Props) {
  const { total } = props;
  return (
    <div className="w-[340px] h-[220px] flex flex-col justify-between md:col-start-2 md:row-start-1 rounded-md p-[30px] m-[10px] bg-[#f2f2f2]">
      <div className="flex flex-col flex-grow justify-between">
        <h2 className="flex justify-between text-[20px] font-bold">
          <span>Resumen del pedido</span>
        </h2>
        <div className="flex justify-between items-center">
          <h3>Subtotal</h3>
          <strong>${total}</strong>
        </div>
        <small className="pb-[10px]">
          Incluye impuesto PAIS y percepción AFIP.
        </small>
      </div>
      <button
        className="w-full h-[40px] bg-[#ff3b3c] text-white font-bold border-0 rounded-lg"
        id="buy"
        type="button"
      >
        Finalizar Compra
      </button>
    </div>
  );
}
