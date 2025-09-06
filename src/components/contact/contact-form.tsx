"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    // Resetear formulario
    setFormData({ name: "", email: "", message: "" });
    alert("¡Mensaje enviado! Te contactaremos pronto.");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-brand-quaternary to-brand-quinary">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-jakarta text-3xl xl:text-4xl font-bold text-gray-800 mb-4">
            Formulario de{" "}
            <span className="font-pacifico text-4xl xl:text-5xl text-blue">
              Contacto
            </span>
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre completo */}
            <div>
              <label
                htmlFor="name"
                className="block font-jakarta font-semibold text-gray-700 mb-2"
              >
                Nombre completo
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Tu nombre completo"
                required
                className="w-full"
              />
            </div>

            {/* Correo electrónico */}
            <div>
              <label
                htmlFor="email"
                className="block font-jakarta font-semibold text-gray-700 mb-2"
              >
                Correo electrónico
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="tu@email.com"
                required
                className="w-full"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor="message"
                className="block font-jakarta font-semibold text-gray-700 mb-2"
              >
                Mensaje / consulta
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos en qué podemos ayudarte..."
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Botón de envío */}
            <div className="text-center">
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar mensaje
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
