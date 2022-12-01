function Title() {
  return (
    <div className="container px-2 pt-32 mx-auto lg:px-4 lg:py-4">
      <div className="flex flex-col w-full mb-2 text-left md:text-center ">
        <h1 className="mb-2 text-4xl sm:text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl">
          <span>Leis e Deveres para </span>
          <br className="hidden lg:block"></br>
          Desenvolvedores
        </h1>
        <br></br>
        <p className="mx-auto  text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3">
          Aqui se encontra artigos sobre segurança, privacidade, direitos de propriedade, acesso não autorizado.
        </p>
      </div>
    </div>
  );
}

export { Title }