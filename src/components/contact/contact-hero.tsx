const ContactHero = () => {
  return (
    <section className="bg-gradient-to-br from-brand-quaternary via-brand-secondary to-brand-quinary py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-jakarta text-4xl xl:text-5xl font-bold text-gray-800 mb-6">
          Estamos aquí para{" "}
          <span className="font-pacifico text-5xl xl:text-6xl text-blue">
            ayudarte
          </span>
        </h1>

        <p className="font-lato text-lg xl:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Si tienes dudas, pedidos especiales o quieres saber más sobre nuestros
          insumos, estamos a un mensaje de distancia.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
