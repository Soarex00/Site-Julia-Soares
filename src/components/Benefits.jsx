import { FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Benefits() {
  return (
    <>
      {/* Cards */}
      <div
        id="services"
        className=" flex flex-col items-center gap-8 md:gap-16"
      >
        <h2 className="text-2xl flex justify-center text-start sm:text-5xl mt-16 font-bold text-gray-900">
          Para você que busca:
        </h2>

        <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-8 justify-items-center items-start  text-center space-y-4">
          <motion.button className="w-[80%]" whileTap={{ scale: 1.1 }}>
            <div
              className=" bg-white  transition-transform duration-300 
                hover:scale-105 
                md:hover:scale-105 rounded-xl shadow-sm flex flex-col gap-2 w-[100%] md:w-[100%]  p-4 md:p-8  border"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                <span className="text-purple-800">Flexibilidade</span> no seu
                atendimento
              </h3>
              <p className="text-sm text-gray-500">
                Escolha online ou presencial
              </p>
            </div>
          </motion.button>
          <motion.button className="w-[80%]" whileTap={{ scale: 1.1 }}>
            <div
              className=" bg-white transition-transform duration-300 
                hover:scale-105 
                md:hover:scale-105 rounded-xl shadow-sm flex flex-col gap-2 w-[100%] md:w-[100%] p-4 md:p-8  border"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Emagrecimento <span className="text-purple-800">Saudável</span>
              </h3>
              <p className="text-sm text-gray-500">Sem dietas restritivas</p>
            </div>
          </motion.button>
          <motion.button className="w-[80%]" whileTap={{ scale: 1.1 }}>
            <div
              className=" bg-white transition-transform duration-300 
                hover:scale-105 
                md:hover:scale-105 rounded-xl shadow-sm flex flex-col gap-2 w-[100%] md:w-[100%]  p-4 md:p-8  border"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Planos <span className="text-purple-800">Personalizados</span>
              </h3>
              <p className="text-sm text-gray-500">
                Nada de dieta genérica, tudo adaptado ao estilo de vida da
                pessoa.
              </p>
            </div>
          </motion.button>
          <motion.button className="w-[80%]" whileTap={{ scale: 1.1 }}>
            <div
              className=" bg-white transition-transform duration-300 
                hover:scale-105 
                md:hover:scale-105 rounded-xl shadow-sm flex flex-col gap-2 w-[100%] md:w-[100%] p-4 md:p-8  border"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                Melhora na <span className="text-purple-800">Saúde</span>
              </h3>
              <p className="text-sm text-gray-500">
                Mais energia, sono regulado, intestino funcionando bem.
              </p>
            </div>
          </motion.button>
        </div>
      </div>
      <div className="flex gap-4 bg-green-600 mb-[20%] mt-[10%] w-[80%] rounded-xl md:w-[30%] mx-auto cursor-pointer px-9 py-4 items-center justify-center">
        <FaWhatsapp className="text-white" size={24} />
        <button
          onClick={() =>
            window.open(
              "https://wa.me/555391347198?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta.",
              "_blank"
            )
          }
          className="bg-green-600 cursor-pointer text-white  font-semibold"
        >
          Agende sua consulta
        </button>
      </div>
    </>
  );
}
