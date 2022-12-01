function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3 lg:h-[600px]">
      <img
        className="object-cover object-center h-full w-full mb-10 border-gray-400 dark:border-gray-900 border rounded-lg shadow-md"
        alt="hero"
        src="/images/main-image.jpg"
      ></img>
    </div>
  );
}

export { Hero }