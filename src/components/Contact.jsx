import { FaWhatsapp } from "react-icons/fa";
import { Mail, Clock, Instagram } from "lucide-react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    nome: "",
    mensagem: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const numero = "5553991347198";
    const texto = `Olá, meu nome é ${form.nome}. 
   ${form.mensagem}
    `;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
  }

  return (
    <section id="contact" className="bg-amber-50/80 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-5">
          Vamos conversar ?
        </h2>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.3 }}
      >
        <p className="text-gray-500 space-y-3 text-center md:text-2xl">
          Entre em contato e dê o primeiro passo para transformar sua
          alimentação
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.3 }}
      >
        <h2 className="text-2xl font-bold text-gray-900 text-center mt-10 mb-5">
          Informações de Contato
        </h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 max-w-6xl mx-auto px-6">
        {/* Coluna esquerda */}
        <div className="flex flex-col gap-5 flex-1">
          <motion.div
            className="w-[%]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.3 }}
          >
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="flex items-center">
                <Instagram className="text-[#833AB4]" size={24} />
                <h3 className="text-lg pl-2 font-semibold text-gray-800">
                  <span className="text-gray-950">Instagram</span>
                </h3>
              </div>
              <p className="text-sm pl-8 text-gray-500">
                Resposta rápida e agendamento direto.
              </p>
              <button
                onClick={() =>
                  window.open(
                    "https://instagram.com/nutri.juliamsoares",
                    "_blank"
                  )
                }
                className="flex bg-[#833AB4] text-white mt-5 px-9 py-4 md:cursor-pointer rounded-2xl font-semibold shadow"
              >
                Ir para Instagram
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.3 }}
          >
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="flex items-center">
                <Mail size={24} />
                <h3 className="text-lg pl-2 font-semibold text-gray-800">
                  <span className="text-gray-950">E-mail</span>
                </h3>
              </div>
              <p className="text-sm pl-8 text-gray-500">
                juliamadeirasoares17@gmail.com
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.3 }}
          >
            <div className="bg-white rounded-xl shadow-sm p-6 border">
              <div className="flex items-center">
                <Clock size={24} />
                <h3 className="text-lg pl-2 font-semibold text-gray-800">
                  <span className="text-gray-950">Horários</span>
                </h3>
              </div>
              <p className="text-sm pl-8 text-gray-500">
                Segunda, Quarta e quinta: 8h às 20h
              </p>
            </div>
          </motion.div>
        </div>

        {/* Coluna direita (formulário) */}
        <motion.div
          className="md:w-[55%]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3 }}
        >
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
            <textarea
              name="mensagem"
              placeholder="Descreva o que você precisa"
              value={form.mensagem}
              onChange={handleChange}
              className="w-full mb-4 p-3 border rounded-lg"
              rows="6"
              required
            />
            <div className="flex gap-4 md:cursor-pointer bg-green-600 mb-1 mt-5 rounded-xl md:w-[50%] mx-auto px-9 py-4 items-center justify-center cursor-pointer hover:bg-green-700 transition">
              <FaWhatsapp className="text-white" size={24} />
              <button type="submit" className=" text-white font-semibold">
                Agende sua consulta
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
