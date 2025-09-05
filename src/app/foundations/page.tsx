import { Button } from "@/components/ui/button";

const FoundationsPage = () => {
  return (
    <main className="bg-black h-screen w-screen flex justify-center items-center">
      <section className="bg-white w-8/12 h-1/2 flex flex-col justify-between">
        <article className="bg-blue-800 w-full h-20 flex gap-5 items-center px-20">
          <hr className="h-1 bg-black flex-1" />
          <figure className=" h-10 w-10 bg-black rounded-full">
            <a href=""></a>
          </figure>
          <figure className=" h-10 w-10 bg-black rounded-full">
            <a href=""></a>
          </figure>
          <figure className=" h-10 w-10 bg-black rounded-full">
            <a href=""></a>
          </figure>
          <hr className="h-1 bg-black flex-1" />
        </article>
        <article></article>
        <article className="bg-red-800 w-full h-20">
          <Button variant={"text_footer"}>contacto</Button>
        </article>
      </section>
    </main>
  );
};

export default FoundationsPage;
