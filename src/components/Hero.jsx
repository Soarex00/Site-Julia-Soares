import { ChevronDown } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Section() {
  return (
    // Container centralizado na tela inteira, com flex, posição relativa e overflow escondido

    <section className="relative min-h-screen md:min-h-[110vh] lg:min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 bg-cover bg-center"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-amber-50/80"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-purple-800">
            Júlia Madeira Soares
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg md:text-xl mb-4 text-gray-900">
            Nutricionista Clínica
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl md:text-2xl font-light text-gray-900 max-w-2xl mx-auto leading-relaxed m-6 md:m-10">
            Transforme sua relação com a alimentação e conquiste uma vida mais
            <span className="ml-0.5 text-purple-800 font-semibold">
              {" "}
              saudável{" "}
            </span>{" "}
            e
            <span className="ml-0.5 text-purple-800 font-semibold">
              {" "}
              equilibrada{" "}
            </span>
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex gap-4 md:cursor-pointer bg-green-600 mb-1 mt-5 rounded-xl md:w-[50%] mx-auto px-9 py-4 items-center justify-center cursor-pointer transition">
            <FaWhatsapp className="text-white" size={24} />
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/555391347198?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta.",
                  "_blank"
                )
              }
              className=" text-white md:cursor-pointer font-semibold"
            >
              Agende sua consulta
            </button>
          </div>
        </motion.div>

        {/* seta */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div
            className="absolute left-1/2 transform -translate-x-1/2 animate-bounce mt-25 text-purple-800/60 cursor-pointer"
            onClick={() => window.scrollBy({ top: 300, behavior: "smooth" })}
          >
            <ChevronDown size={40} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
