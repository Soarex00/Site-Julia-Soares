import { ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "/public/foto_fundo_branco.png";

export default function Section() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-white p-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <img src={logo} alt="Logo" className="w-150 h-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl"
      >
        <p className=" text-2xl mb-10 md:text-3xl text-gray-900 leading-relaxed">
          Chegou a hora de mudar sua relação com a comida e conquistar o
          <span className="font-semibold text-rose-900"> corpo</span> e a
          <span className="font-semibold text-rose-900"> saúde</span> que você
          merece.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-10"
      >
        <a
          href="https://wa.me/555391347198?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 cursor-pointer bg-green-600 rounded-xl px-9 py-4 text-white font-semibold transition hover:bg-green-700"
        >
          <FaWhatsapp size={24} />
          <span>Agende sua consulta</span>
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => window.scrollBy({ top: 300, behavior: "smooth" })}
      ></motion.div>
    </section>
  );
}
