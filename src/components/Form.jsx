import { FaWhatsapp } from "react-icons/fa";
import { Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const numero = "5553991520395"; 
    const texto = `
    Olá, meu nome é: ${form.nome}. 
    Meu email é: ${form.email}. 
    ${form.mensagem}
    `;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank"); 
  }

  return (
    <section className="bg-green-50 py-12">
      <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-5">
        Vamos conversar ?
      </h2>
      <p className="text-gray-500 space-y-3 text-center md:text-2xl">
        Entre em contato e dê o primeiro passo para transformar sua alimentação
      </p>

      <h2 className="text-2xl font-bold text-gray-900 text-center mt-10 mb-5">
        Informações de Contato
      </h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto px-6">
        {/* Coluna esquerda */}
        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-green-200 rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <FaWhatsapp size={24} />
              <h3 className="text-lg pl-2 font-semibold text-gray-800">
                <span className="text-gray-950">WhatsApp</span>
              </h3>
            </div>
            <p className="text-sm pl-8 text-gray-500">
              Resposta rápida e agendamento direto.
            </p>
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/5553991520395?text=Olá,%20gostaria%20de%20mais%20informações.",
                  "_blank"
                )
              }
              className="flex bg-green-600 text-white mt-5 px-9 py-4 rounded-2xl font-semibold shadow hover:bg-green-700"
            >
              Conversar no WhatsApp
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <Mail size={24} />
              <h3 className="text-lg pl-2 font-semibold text-gray-800">
                <span className="text-gray-950">E-mail</span>
              </h3>
            </div>
            <p className="text-sm pl-8 text-gray-500">
              contato@juliasoares.nutri.br
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border">
            <div className="flex items-center">
              <Clock size={24} />
              <h3 className="text-lg pl-2 font-semibold text-gray-800">
                <span className="text-gray-950">Horários</span>
              </h3>
            </div>
            <p className="text-sm pl-8 text-gray-500">
              Segunda a Sexta: 8h às 18h
            </p>
            <p className="text-sm pl-8 text-gray-500">Sábado: 8h às 12h</p>
          </div>
        </div>

        {/* Coluna direita (formulário) */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow p-6 flex-1 border"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Envie sua mensagem
          </h3>
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={form.nome}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            value={form.email}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />
          <textarea
            name="mensagem"
            placeholder="Descreva o que você precisa"
            value={form.mensagem}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold w-full hover:bg-green-700"
          >
            Enviar no WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
