import { GraduationCap, BadgeCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section id="about" className="bg-amber-50/80 py-12 ">
        {/* Título centralizado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.3 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-5 pb-8">
            Sobre Mim
          </h2>
        </motion.div>

        {/* Container flex só para foto e texto */}
        <div className="flex flex-col  md:flex-row items-center md:justify-center gap-10   px-6">
          {/* Parte 1 - Foto */}
          <div className="p-5 md:w-[40%]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.3 }}
            >
              <img
                className=" h-120  md:h-150 rounded-2xl object-cover"
                src="./fotoPerfil.png"
                alt="Foto de perfil"
              />
            </motion.div>
          </div>

          {/* Parte 2 - Texto */}
          <div className="flex md:w-[60%] text-base md:text-lg lg:text-xl flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.3 }}
            >
              <div className="text-2xl mb-5 flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1.3 }}
                ></motion.div>
                <GraduationCap
                  className="text-purple-800 md:size-13"
                  size={35}
                />
                <h1 className="text-2xl md:text-3xl pl-4 font-bold">
                  Formação & Experiência
                </h1>
              </div>
            </motion.div>
            <div className="m-3 text-gray-500 space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.3 }}
              >
                <p>
                  Graduada em Nutrição pela Universidade de Pelotas (UFPel).
                  Atuo com foco em emagrecimento, recomposição corporal, mudança
                  de hábitos e estilo de vida, saúde e performance.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.3 }}
              >
                <p>
                  Atendo o público geral a partir de 15 anos, homens e mulheres.
                  Através do meu acompanhamento, te ensino o quanto sua
                  alimentação pode ser prazerosa, acessível e versátil em busca
                  do seu objetivo.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.3 }}
              >
                <p>
                  Meu objetivo é proporcionar{" "}
                  <span className="font-bold pr-1">
                    saúde, qualidade alimentar
                  </span>
                  e levar você a conquistar:
                </p>
              </motion.div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-start  gap-4 mt-6 ">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-4 rounded-xl">
                  <BadgeCheck className="text-purple-600 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  <p className=" text-gray-500 md:ml-0 space-y-3">
                    Saúde & Energia
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-4 rounded-xl">
                  <BadgeCheck className="text-purple-600 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  <p className=" text-gray-500 md:ml-0 space-y-3">
                    Controle de Peso
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-4 rounded-xl">
                  <BadgeCheck className="text-purple-600 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
                  <p className=" text-gray-500 md:ml-0 space-y-3">
                    Relação Saudável com a Comida
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center justify-center gap-4 rounded-xl">
                  <BadgeCheck className="text-purple-600 w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />

                  <p className=" text-gray-500 md:ml-0 space-y-3">
                    Estilo de Vida & Resultados a Longo Prazo
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex gap-4 md:cursor-pointer bg-green-600 mt-5 rounded-xl sm:w-[50%] md:w-[50%] mx-auto px-9 py-4 items-center justify-center cursor-pointer transition">
                <FaWhatsapp className="text-white" size={24} />
                <button
                  onClick={() =>
                    window.open(
                      "https://wa.me/555391347198?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta.",
                      "_blank"
                    )
                  }
                  className=" bg-green-600 md:cursor-pointer text-white  font-semibold  "
                >
                  Agende sua consulta
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
