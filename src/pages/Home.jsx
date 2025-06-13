const Home = () => {
    return (
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">Hi, I'm Saloni Jaiswal</h1>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
          A passionate Frontend Developer focused on building beautiful and performant web experiences. 🚀
        </p>
        <div className="mt-10 space-x-4">
          <a href="/projects" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-5 rounded-lg text-lg transition">
            View Projects
          </a>
          <a href="/resume" className="bg-gray-800 hover:bg-gray-700 text-white py-2 px-5 rounded-lg text-lg transition">
            Download Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default Home;
  