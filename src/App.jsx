function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-12 py-6">
        <h1 className="text-orange-500 font-bold text-2xl">
          SHASHIKA
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-300">
          <li className="text-orange-500">Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>

        <button className="bg-orange-500 px-6 py-2 rounded-lg font-semibold">
          Hire Me
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-12 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <p className="text-gray-400 mb-2">Hi, I am</p>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Shashika
            <span className="text-orange-500"> Munasinghe</span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-6">
            UI/UX Designer
          </h2>

          <p className="text-gray-400 mb-8">
            Computing Graduate, UI/UX Designer and Web Developer passionate
            about creating beautiful digital experiences and modern web
            applications.
          </p>

          <div className="flex gap-4">
            <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold">
              Hire Me
            </button>

            <button className="border border-gray-500 px-6 py-3 rounded-lg">
              Download CV
            </button>
          </div>
        </div>

        {/* Profile Circle */}
        <div className="mt-12 md:mt-0">
          <div className="w-96 h-96 rounded-full bg-zinc-800 flex items-center justify-center">
            <span className="text-gray-500 text-xl">
              Your Photo Here
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-5xl mx-auto px-12 pb-20">
        <div className="grid grid-cols-3 bg-zinc-900 rounded-xl p-8 text-center">
          <div>
            <h3 className="text-orange-500 text-3xl font-bold">5+</h3>
            <p className="text-gray-400">Projects</p>
          </div>

          <div>
            <h3 className="text-orange-500 text-3xl font-bold">10+</h3>
            <p className="text-gray-400">Designs</p>
          </div>

          <div>
            <h3 className="text-orange-500 text-3xl font-bold">100%</h3>
            <p className="text-gray-400">Dedication</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App