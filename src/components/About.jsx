import { GraduationCap } from "lucide-react";
export default function About() {
  return (
    <>
      <section className="bg-green-50">
        <h2 className="text-3xl flex justify-center text-start sm:text-5xl p-6 font-bold text-gray-900">
          Sobre Mim
        </h2>
        <div className="p-5">
          <img
            className="w-95 h-100 md:w-64 md:h-80 rounded-2xl object-cover"
            src="./fotoPerfil.png"
            alt=""
          />
        </div>
        <div className="text-2xl mb-5 flex text-start">
          <GraduationCap className="text-green-600 ml-2" size={35} />
          <h1 className="text-2xl pl-4 font-bold">Formação & Experiência</h1>
        </div>
        <div className="m-3 text-gray-500">
          <p className="pb-3">
            Graduada em Nutrição pela Universidade de Pelotas (UFPel). Atuo com
            foco em emagrecimento, recomposição corporal, mudança de hábitos e
            estilo de vida, saúde e perfomance.
          </p>
          <p>
            Atendo o público geral a partir de 15 anos, homens e mulheres.
            Através do meu acompanhamento, te ensino o quanto sua alimentação
            pode ser prazerosa, acessível e versátil em busca do seu objetivo.
            Meu principal objetivo é proporcionar saúde, qualidade alimentar em
            prol do seu objetivo.
          </p>
        </div>
      </section>
    </>
  );
}
