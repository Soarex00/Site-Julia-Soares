import { ChevronDown } from "lucide-react";

export default function Section() {
  return (
    //Container centralizado na tela inteira, com flex, posição relativa e overflow escondido
    <section className="relative min-h-screen md:min-h-[110vh] lg:min-h-[120vh] flex items-center justify-center overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/fruta.png')]"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-amber-50/80"></div>

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-green-600">
          Júlia Madeira Soares
        </h2>

        <p className="text-lg md:text-xl mb-4 text-gray-900">
          Nutricionista Clínica
        </p>

        <p className="text-xl md:text-2xl font-light text-gray-900 max-w-2xl mx-auto leading-relaxed m-6 md:m-10">
          Transforme sua relação com a alimentação e conquiste uma vida mais
          <span className="ml-0.5 text-green-600 font-semibold">
            {" "}
            saudável{" "}
          </span>{" "}
          e
          <span className="ml-0.5 text-green-600 font-semibold">
            {" "}
            equilibrada{" "}
          </span>
        </p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/5553991520395?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta.",
              "_blank"
            )
          }
          className="bg-white text-green-600 mt-5 mb-20 px-9 py-4 rounded-full font-semibold shadow"
        >
          Agende sua consulta
        </button>

        {/* seta */}
        <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce text-green-600/60">
          <ChevronDown size={40} />
        </div>
      </div>
    </section>
  );
}
