"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send } from "lucide-react";
import { Textarea } from "../ui/textarea";

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
    console.log("Formulario enviado:", formData);
    setFormData({ name: "", email: "", message: "" });
    alert("¡Mensaje enviado! Te contactaremos pronto.");
  };

  return (
    <section className="py-16 bg-brand-main ">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-jakarta text-3xl xl:text-4xl font-bold text-gray-700 mb-4">
            Formulario de contacto
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-2xl mx-auto">
            Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div>
              <label
                htmlFor="message"
                className="block font-jakarta font-semibold text-gray-700 mb-2"
              >
                Mensaje / consulta
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Cuéntanos en qué podemos ayudarte..."
                required
                rows={5}
              />
            </div>

            <div className="text-center">
              <Button type="submit">
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
