export default function CartEmpty() {
    return (
        <article className="w-[300px] md:w-[500px] lg:w-[750px] h-[220px] flex justify-between rounded-md p-[50px] m-[10px] bg-[#f2f2f2] items-center">
        <div className="flex flex-col justify-between">
          <h2 className="font-bold text-[25px]">¡Carrito vacío!</h2>
          <h1 className="text-[15px]">Actualmente no tienes ningún producto en tu carrito de compras.</h1>
        </div>            
      </article>
    );
  }