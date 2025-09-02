import { GraduationCap } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="bg-green-50 py-12 ">
        {/* Título centralizado */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-5">
          Sobre Mim
        </h2>

        {/* Container flex só para foto e texto */}
        <div className="flex flex-col md:ml-60 md:flex-row items-center md:items-center gap-10 max-w-6xl md:mx-20 px-6">
          {/* Parte 1 - Foto */}
          <div className="p-5">
            <img
              className="w-100 h-120 md:w-600 md:h-150 rounded-2xl object-cover"
              src="./fotoPerfil.png"
              alt="Foto de perfil"
            />
          </div>

          {/* Parte 2 - Texto */}
          <div className="flex text-base md:text-lg lg:text-xl flex-col justify-center">
            <div className="text-2xl mb-5 flex items-center">
              <GraduationCap className="text-green-600" size={35} />
              <h1 className="text-2xl md:text-4xl pl-4 font-bold">
                Formação & Experiência
              </h1>
            </div>
            <div className="m-3 text-gray-500 space-y-3">
              <p>
                Graduada em Nutrição pela Universidade de Pelotas (UFPel). Atuo
                com foco em emagrecimento, recomposição corporal, mudança de
                hábitos e estilo de vida, saúde e performance.
              </p>
              <p>
                Atendo o público geral a partir de 15 anos, homens e mulheres.
                Através do meu acompanhamento, te ensino o quanto sua
                alimentação pode ser prazerosa, acessível e versátil em busca do
                seu objetivo. Meu principal objetivo é proporcionar saúde,
                qualidade alimentar em prol do seu objetivo.
              </p>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
