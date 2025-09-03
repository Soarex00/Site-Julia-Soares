export default function Benefits() {
  return (
    <>
      <h2 className="text-2xl flex justify-center text-start sm:text-5xl m-7 font-bold text-gray-900">
        Para você que busca:
      </h2>

      {/* Cards */}
      <div className="">
        <div className="mr-10 ml-10 text-center space-y-4">
          <div className=" bg-white rounded-xl shadow-sm  p-4 md:p-8 max-w-md md:max-w-lg mx-auto border">
            <h3 className="text-lg font-semibold text-gray-800">
              Emagrecimento <span className="text-green-600">Saudável</span>
            </h3>
            <p className="text-sm text-gray-500">Sem dietas restritivas</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm  p-4 md:p-8 max-w-md md:max-w-lg mx-auto border">
            <h3 className="text-lg font-semibold text-gray-800">
              Planos <span className="text-green-600">Personalizados</span>
            </h3>
            <p className="text-sm text-gray-500">
              Nada de dieta genérica, tudo adaptado ao estilo de vida da pessoa.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm  p-4 md:p-8 max-w-md md:max-w-lg mx-auto border">
            <h3 className="text-lg font-semibold text-gray-800">
              Melhora na <span className="text-green-600">Saúde</span>
            </h3>
            <p className="text-sm text-gray-500">
              Mais energia, sono regulado, intestino funcionando bem.
            </p>
          </div>
        </div>
      </div>
      <div
        onClick={() =>
          window.open(
            "https://wa.me/5553991520395?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20consulta.",
            "_blank"
          )
        }
        className="flex mt-5 items-center justify-center"
      >
        <button className=" bg-green-600 text-white mt-5 mb-20 px-9 py-4 rounded-full font-semibold shadow ">
          Agende sua consulta
        </button>
      </div>
    </>
  );
}
