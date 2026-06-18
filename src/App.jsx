function App() {
  return (
    <div className="bg-[#070B14] text-white min-h-screen overflow-hidden relative">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#7C3AED]/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#22D3EE]/20 blur-[150px] rounded-full"></div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 md:px-16 py-6 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <h1 className="text-2xl font-bold text-[#7C3AED]">
          SHASHIKA
        </h1>

        <ul className="hidden md:flex gap-10 text-gray-300">
          <li className="hover:text-[#22D3EE] cursor-pointer transition">
            Home
          </li>
          <li className="hover:text-[#22D3EE] cursor-pointer transition">
            About
          </li>
          <li className="hover:text-[#22D3EE] cursor-pointer transition">
            Projects
          </li>
          <li className="hover:text-[#22D3EE] cursor-pointer transition">
            Skills
          </li>
          <li className="hover:text-[#22D3EE] cursor-pointer transition">
            Contact
          </li>
        </ul>

        <button className="bg-[#7C3AED] hover:bg-[#6D28D9] px-5 py-2 rounded-xl transition">
          Hire Me
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-8 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between">

        <div className="max-w-2xl z-10">
          <p className="text-[#22D3EE] mb-3 text-lg">
            Welcome to my portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Shashika
            <span className="text-[#7C3AED]"> Munasinghe</span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold mt-6 text-[#22D3EE]">
            UI/UX Designer &
            <br />
            Web Developer
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-relaxed">
            Computing Graduate with experience in UI/UX Design,
            React Development, MERN Stack Applications,
            Logo Design, Video Editing and Digital Product Design.
          </p>

          <div className="flex gap-4 mt-10">
            <button className="bg-[#7C3AED] hover:bg-[#6D28D9] px-8 py-3 rounded-xl transition font-semibold">
              View Projects
            </button>

            <button className="border border-white/20 backdrop-blur-lg px-8 py-3 rounded-xl hover:border-[#22D3EE] transition">
              Download CV
            </button>
          </div>
        </div>

        {/* Profile Area */}
        <div className="mt-16 lg:mt-0 z-10">
          <div className="relative">

            <div className="absolute inset-0 bg-[#7C3AED]/30 blur-3xl rounded-full"></div>

            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center relative">
              <span className="text-gray-500 text-xl">
                Add Your Photo
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-5xl mx-auto px-8 md:px-16 pb-20">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-[#7C3AED]">
              5+
            </h3>
            <p className="text-gray-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-[#22D3EE]">
              10+
            </h3>
            <p className="text-gray-400 mt-2">
              UI/UX Designs
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
            <h3 className="text-4xl font-bold text-[#7C3AED]">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Dedication
            </p>
          </div>

        </div>

      </section>

      {/* Projects Preview */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 pb-24">

        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-3">
              eMusic Cloud
            </h3>
            <p className="text-gray-400">
              UI/UX Design for an online music streaming platform.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Predictive Healthcare
            </h3>
            <p className="text-gray-400">
              Big Data & Healthcare Analytics project.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6">
            <h3 className="text-xl font-bold mb-3">
              Weather Monitoring
            </h3>
            <p className="text-gray-400">
              IoT weather monitoring dashboard system.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}

export default App