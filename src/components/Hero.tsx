export default function Hero({ first, second }) {
  return (
    <>
      <section className="h-[200px] flex bg-hero bg-cover bg-center justify-center">
        <article className="w-[1080px] flex flex-col items-start justify-center pl-[20px]">
          <span className="text-white font-bold text-[20px]">{first}</span>
          <span className="text-white font-bold text-[50px] leading-7">{second}</span>
        </article>
      </section>
    </>
  );
}
