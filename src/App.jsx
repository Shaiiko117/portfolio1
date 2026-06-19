import { useEffect, useRef, useState } from 'react';


const profilePic = './assets/profile.jpeg';


const shopUiPreview = '/assets/1.png';
const recyclingUiPreview = '/assets/2.png';
const fitnessUiPreview = '/assets/3.png';
const taskUiPreview = '/assets/4.png';
const cakeUiPreview = '/assets/5.png';
const alexanderLogoIntro = '/assets/alexander2.mp4';
const brandLogoIntro = '/assets/Football.mp4';
const creativeLogoIntro = '/assets/logointro1.mp4';
const motionLogoIntro = '/assets/orpfu9v4dz1ptfdco2rn.mp4';
const esoft1 = '/assets/esoft_1.mp4';
const esoftFundraiserVideo = '/assets/esoft_2.mp4';
const ice = '/assets/ice.mp4'
const esoftGraduationPhotoOne = '/assets/esoft_grad1.jpeg';
const esoftGraduationPhotoTwo = '/assets/esoft_grad2.jpeg';
const backgroundMe = '/assets/backgroundme.jpeg';
const finalProjectPhotoOne = '/assets/finalproj.jpeg';
const finalProjectPhotoTwo = '/assets/finalproj2.jpeg';
const poster1 = '/assets/poster1.jpg';




const finalDesignGallery = [
  '1 Cover.webp',
  '2 contents.webp',
  '3 info.webp',
  '4 logo.webp',
  '5 typography.webp',
  '6 sizes.webp',
  '7 color.webp',
  '8 letter head.webp',
  '9 business card.webp',
  '10 photography 1.webp',
  '11 photography 2.webp',
  '12 photography 3.webp',
  '13 lets talk.webp',
].map((file) => ({
  src: encodeURI('/assets/FinalOptimized/' + file),
  title: file.replace(/\.[^/.]+$/, '').replace(/^\d+\s*/, ''),
}))


const realLifeHighlights = [
  {
    title: 'Higher National Diploma Graduation',
    period: 'Completed in 2024',
    type: 'Academic milestone',
    description: 'Completed my Higher National Diploma and celebrated this important academic milestone at ESOFT. This achievement reflects my commitment to computing, design, development, and continuous professional growth.',
    impact: ['Higher National Diploma completed', 'Graduated in 2024', 'Academic and personal milestone'],
    video: esoft1,
    previewTime: 8.65,
    images: [esoftGraduationPhotoOne, esoftGraduationPhotoTwo],
  },
  {
    title: 'Technology Awareness Fundraiser',
    period: 'Community project',
    type: 'Education and outreach',
    description: 'Planned and participated in a successful technology outreach and fundraising initiative for an urban school, aimed at educating students about the future of technology, digital careers, and opportunities within the ICT industry. Led the technical and audio management aspects of the event, overseeing equipment setup, presentations, and operational support. The fundraiser achieved approximately 80% of the financial target required for the final project.',
    impact: ['Community education', 'Future tech awareness', 'Career guidance for students', 'Fundraiser'],
    previewTime: 13.5,
    video: esoftFundraiserVideo,
  },
  {
    title: 'HND Final Project',
    period: 'Final project showcase',
    type: 'Academic and community project',
    description: 'Completed my HND final project through a practical technology awareness initiative, combining planning, teamwork, event coordination, and public communication. The project focused on sharing knowledge about technology, digital skills, and future ICT career paths with school students while demonstrating how technical education can create real community value.',
    impact: ['HND final project', 'Tech Fluent initiative', 'Team coordination', 'Student awareness'],
    images: [finalProjectPhotoOne, finalProjectPhotoTwo],
    projectUrl: 'https://www.facebook.com/share/p/1LK3T9D2La/',
    linkLabel: 'View All Project Photos',
  },
]

const projectGroups = [
  {
    title: 'Graphic Design Projects',
    intro: 'Visual identity and digital media work including logos, promotional graphics, editing, and social content.',
    accent: 'text-[#7C3AED]',
    projects: [
      {
        title: 'Poster Design for Marketing',
        type: 'Social Media Poster',
        description: 'A custom poster layout emphasizing typography, composition, and visual hierarchy for a marketing piece.',
        tools: ['Poster Design', 'Typography', 'Layout', 'Visual Branding'],
        image: poster1,
      },
     {
        title: 'Sports High Dynamic Edit ',
        type: 'Sport Clip',
        description: 'A high-energy sports highlight compilation including dynamic pacing, precise beat-matching, advanced color grading, custom transitions, immersive sound design, and animated stat overlays.',
        tools: ['Video Editing', 'Sports', 'Intro'],
        video: brandLogoIntro,
        projectUrl: 'https://your-project-link.com/creative-logo-motion',
      },
      {
        title: 'Alexander Live Logo Intro',
        type: 'Logo intro video',
        description: 'Animated a logo intro with motion, timing, and visual polish for a branded opening sequence.',
        tools: ['Logo Animation', 'Motion', 'Intro Video'],
        video: alexanderLogoIntro,
        projectUrl: 'https://your-project-link.com/alexander-logo-intro',
      },
      {
        title: 'Creative Logo Motion',
        type: 'Logo intro video',
        description: 'Edited a compact logo motion piece with transitions, pacing, and a clean finishing style.',
        tools: ['Video Editing', 'Brand Motion', 'Intro'],
        video: creativeLogoIntro,
        projectUrl: 'https://your-project-link.com/creative-logo-motion',
      },
            {
        title: 'Logo Reveal',
        type: 'Logo intro video',
        description: 'Edited a compact logo motion piece with transitions, pacing, and a clean finishing style.',
        tools: ['Video Editing', 'Brand Motion', 'Intro'],
        video: ice,
        projectUrl: 'https://your-project-link.com/creative-logo-motion',
      },
      {
        title: 'Brand Logo Manual',
        type: 'Brand identity gallery',
        description: 'A full visual identity presentation including cover design, logo work, typography, color system, stationery, business card design, photography, and final contact page.',
        tools: ['Brand Identity', 'Logo Design', 'Typography', 'Print Design'],
        gallery: finalDesignGallery,
      },
    ],
  },
  {
    title: 'UI/UX Projects',
    intro: 'Product screens, flows, and interface systems focused on usability, visual clarity, and responsive layouts.',
    accent: 'text-[#22D3EE]',
    projects: [
      {
        title: 'Computer Store Interface',
        type: 'E-commerce UI',
        description: 'Created a dark product browsing experience for laptops and computer hardware with category navigation and product cards.',
        tools: ['UI Design', 'Product Cards', 'Responsive Layout'],
        image: shopUiPreview,
        projectUrl: 'https://your-project-link.com/computer-store-interface',
      },
      {
        title: 'Recycling Rewards App',
        type: 'Mobile app UI',
        description: 'Designed a clean mobile experience for waste pickup requests, recycling actions, rewards, and service navigation.',
        tools: ['Mobile UI', 'Service Flow', 'Eco Product'],
        image: recyclingUiPreview,
        projectUrl: 'https://www.figma.com/design/IRTdTzwCWIOPT23xMsUy5a/Waste-Management--Community-?t=mTA17GIABuDsoW6L-1',
      },
      {
        title: 'Fitness Tracking App',
        type: 'Mobile dashboard UI',
        description: 'Designed workout, body weight, calorie, and time-under-tension screens with a bold dark fitness interface.',
        tools: ['Dashboard UI', 'Health App', 'Mobile UX'],
        image: fitnessUiPreview,
        projectUrl: 'https://www.figma.com/design/a6Q4wqLMI0FjiRBg7EU7mD/Fitness-tracking-app-for-HND-project-012?node-id=0-1&t=mTA17GIABuDsoW6L-1',
      },
      {
        title: 'Task Organizer App',
        type: 'Productivity app UI',
        description: 'Created task management screens for planning, progress tracking, date selection, and reminder flows.',
        tools: ['Task Flow', 'Mobile UI', 'UX Design'],
        image: taskUiPreview,
        projectUrl: 'https://www.figma.com/design/eGMQYY1Klk8ZejHqbJENO2/Task-Management-App?node-id=5-672&t=mTA17GIABuDsoW6L-1',
      },
      {
        title: 'Sweet Cake Ordering App',
        type: 'Food ordering UI',
        description: 'Designed a cake ordering app with product browsing, details, pricing, and a bright dessert-focused visual style.',
        tools: ['Food App', 'Product UI', 'Mobile UX'],
        image: cakeUiPreview,
        projectUrl: 'https://www.figma.com/design/RJkKwvLAzYqx1NL3psAhne/HND-HOMATHAGAYU-Wireframe?node-id=0-1&t=mTA17GIABuDsoW6L-1',
      },
    ],
  },
  {
    title: 'Development Projects',
    intro: 'Applied academic and technical projects built around research, software development, data, and working prototypes.',
    accent: 'text-[#22D3EE]',
    projects: [
      {
        title: 'Predictive Healthcare',
        type: 'Big data analytics',
        description: 'Worked on a healthcare analytics project using predictive ideas to support better data-driven decisions.',
        tools: ['Analytics', 'Research', 'Healthcare'],
      },
      {
        title: 'IoT Weather Monitoring System',
        type: 'Hardware and software',
        description: 'Built a monitoring concept that connects sensor readings with a dashboard-style interface for weather data.',
        tools: ['IoT', 'Sensors', 'Dashboard'],
      },
      {
        title: 'MERN Application Work',
        type: 'Full-stack development',
        description: 'Developed web application features using React and MERN stack concepts for practical software builds.',
        tools: ['MongoDB', 'Express', 'React', 'Node'],
      },
    ],
  },
]

const projectStats = [
  { value: '15', label: 'Official Projects Completed', color: 'text-[#7C3AED]' },
  { value: '18', label: 'Published UI/UX Designs', color: 'text-[#22D3EE]' },
  { value: '4', label: 'Real-Life Highlights', color: 'text-[#7C3AED]' },
]

function App() {
  const [openGallery, setOpenGallery] = useState(null)
  const projectVideoRefs = useRef(new Map())
  const highlightVideoRefs = useRef(new Map())

  useEffect(() => {
    const players = [
      ...Array.from(projectVideoRefs.current.values()),
      ...Array.from(highlightVideoRefs.current.values()),
    ]
    if (!('IntersectionObserver' in window) || players.length === 0) {
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (!(video instanceof HTMLVideoElement)) {
            return
          }
          if (entry.isIntersecting) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.4 },
    )
    players.forEach((player) => observer.observe(player))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-[#070B14] text-white min-h-screen overflow-hidden relative isolate">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src={backgroundMe}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-[0.18] blur-sm saturate-75 mix-blend-screen [transform:scaleX(-1)]"
          decoding="async"
          loading="lazy"
        />
        <img
          src={backgroundMe}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-contain object-right opacity-[0.34] saturate-90 mix-blend-screen [transform:scaleX(-1)]"
          decoding="async"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#070B14]/58"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(124,58,237,0.24),transparent_34%),radial-gradient(circle_at_78%_28%,rgba(34,211,238,0.18),transparent_32%),linear-gradient(180deg,rgba(7,11,20,0.34),rgba(7,11,20,0.86))]"></div>
      </div>

      <div className="absolute top-0 left-0 z-0 w-96 h-96 bg-[#7C3AED]/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 z-0 w-96 h-96 bg-[#22D3EE]/20 blur-[150px] rounded-full"></div>

      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 md:px-16 py-6 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <a href="#home" className="text-2xl font-bold text-[#7C3AED]">
          SHASHIKA MUNASINGHE
        </a>
        <ul className="hidden md:flex gap-10 text-gray-300" aria-label="Primary">
          <li>
            <a href="#home" className="hover:text-[#22D3EE] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#22D3EE] transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#22D3EE] transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#real-life" className="hover:text-[#22D3EE] transition">
              Real Life
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-[#22D3EE] transition">
              Skills
            </a>
          </li>
        </ul>
      </nav>

      <section id="home" className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-20 flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-2xl z-10">
          <p className="text-[#22D3EE] mb-3 text-lg">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Shashika
            <span className="text-[#7C3AED]"> Munasinghe</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mt-6 text-[#22D3EE]">
            Graphic Designer
            <br />
            & Creative Technologist
          </h2>
          <p className="text-gray-400 mt-8 text-lg leading-relaxed">
            Creative Technologist and Computing Graduate with expertise in software development, IT solutions, graphic design, and digital media. Passionate about building innovative applications, solving complex technical problems, and creating engaging digital experiences that combine technology with creativity.
          </p>
          <div className="flex gap-4 mt-10">
            <a href="#projects" className="bg-[#7C3AED] hover:bg-[#6D28D9] px-8 py-3 rounded-lg transition">
              View Projects
            </a>
            
          </div>
        </div>

        <div className="mt-16 lg:mt-0 z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-[#7C3AED]/30 blur-3xl rounded-full"></div>
            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl relative">
              <img
                src={profilePic}
                alt="Shashika Munasinghe"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="relative z-10 max-w-5xl mx-auto px-8 md:px-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectStats.map((stat) => (
            <div key={stat.label} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-8 text-center">
              <h3 className={`text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24">
        <div className="border border-white/10 bg-white/5 rounded-lg p-8 md:p-10">
          <p className="text-[#22D3EE] mb-3 text-lg">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Design, Development, and Digital Media</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-gray-300">
            {['Video Editing', 'Graphic Design', 'UI/UX Design', 'React Development', 'MERN Stack', 'Logo Design', 'Digital Products', 'Dashboard Design'].map((skill) => (
              <div key={skill} className="border border-white/10 rounded-md px-4 py-3 bg-[#070B14]/60 flex items-center justify-center">
                <p className="text-sm font-medium text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-[#22D3EE] mb-3 text-lg">
              Selected work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Projects Across Design and Development
            </h2>
          </div>
          <p className="text-gray-400 md:max-w-md leading-relaxed">
            A mix of graphic design pieces, UI/UX case work, and practical projects from academic and real-world builds.
          </p>
        </div>

        <div className="space-y-16">
          {projectGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-6">
                <h3 className={`text-2xl md:text-3xl font-bold ${group.accent}`}>
                  {group.title}
                </h3>
                <p className="text-gray-400 mt-3 max-w-3xl leading-relaxed">
                  {group.intro}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {group.projects.map((project) => (
                  <article key={project.title} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden flex flex-col relative">
                    {project.gallery && (
                      <button
                        type="button"
                        onClick={() => setOpenGallery(project)}
                        className="grid grid-cols-2 gap-1 h-56 p-2 bg-[#070B14]/80 border-b border-white/10 group relative overflow-hidden z-0"
                        aria-label={`Open ${project.title} gallery`}
                      >
                        {project.gallery.slice(0, 4).map((image) => (
                          <img
                            key={image.src}
                            src={image.src}
                            alt={image.title}
                            loading="lazy"
                            className="block w-full h-full object-cover rounded-sm opacity-90 group-hover:opacity-100 transition"
                          />
                        ))}
                      </button>
                    )}
                    {project.image && (
                      <button
                        type="button"
                        onClick={() => setOpenGallery({ title: project.title, gallery: [{ src: project.image, title: project.title }], single: true })}
                        aria-label={`View ${project.title}`}
                        className="w-full border-b border-white/10 focus:outline-none"
                      >
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          loading="lazy"
                          className="h-44 w-full object-cover object-left-top"
                        />
                      </button>
                    )}
                    {project.video && (
                      <video
                        ref={(element) => {
                          if (element) {
                            projectVideoRefs.current.set(project.title, element)
                          } else {
                            projectVideoRefs.current.delete(project.title)
                          }
                        }}
                        src={project.video}
                        className="h-44 w-full object-cover border-b border-white/10 bg-black"
                        controls
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        onError={(event) => {
                          console.error('Video failed to load:', project.video, event.currentTarget.error)
                          event.currentTarget.style.background = 'linear-gradient(135deg,#1e293b,#0f172a)'
                        }}
                      />
                    )}
                    <div className="p-6 flex flex-col flex-1 relative z-10">
                      <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-3">
                        {project.type}
                      </p>
                      <h4 className="text-xl font-bold mb-3">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.tools.map((tool) => (
                          <span key={tool} className="text-sm text-gray-300 border border-white/10 rounded-md px-3 py-1 bg-white/5">
                            {tool}
                          </span>
                        ))}
                      </div>
                      {project.gallery && (
                        <button
                          type="button"
                          onClick={() => setOpenGallery(project)}
                          className="mt-6 inline-flex w-fit border border-[#22D3EE]/50 text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#070B14] rounded-md px-4 py-2 transition"
                        >
                          Open Full Gallery
                        </button>
                      )}
                      {group.title === 'UI/UX Projects' && project.projectUrl && (
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-6 inline-flex w-fit border border-[#22D3EE]/50 text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#070B14] rounded-md px-4 py-2 transition"
                        >
                          View Full Project
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="real-life" className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[#22D3EE] mb-3 text-lg">
              Real-life work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Academic Growth and Community Impact
            </h2>
          </div>
          <p className="text-gray-400 md:max-w-md leading-relaxed">
            Milestones and outreach projects that show leadership, communication, and the practical side of my technology journey.
          </p>
        </div>

        <div className="space-y-8">
          {realLifeHighlights.map((highlight, index) => (
            <article key={highlight.title} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch relative">
              <div className={`border border-white/10 bg-white/5 rounded-lg overflow-hidden relative z-0 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                {highlight.video ? (
                  <video
                    ref={(element) => {
                      if (element) {
                        highlightVideoRefs.current.set(highlight.title, element)
                      } else {
                        highlightVideoRefs.current.delete(highlight.title)
                      }
                    }}
                    src={highlight.previewTime ? `${highlight.video}#t=${highlight.previewTime}` : highlight.video}
                    className="w-full h-full min-h-[320px] max-h-[520px] object-cover bg-black"
                    controls
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onError={(event) => {
                      console.error('Highlight video failed to load:', highlight.video, event.currentTarget.error)
                      event.currentTarget.style.background = 'linear-gradient(135deg,#1e293b,#0f172a)'
                    }}
                  />
                ) : (
                  <div className="grid sm:grid-cols-2 gap-3 p-3 h-full min-h-[320px] bg-[#070B14]/70 relative overflow-hidden">
                    {highlight.images.map((image, imageIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${highlight.title} preview ${imageIndex + 1}`}
                        className="h-full min-h-[280px] w-full object-cover rounded-md border border-white/10"
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="border border-white/10 bg-[#0B1220]/80 rounded-lg p-6 md:p-8 flex flex-col justify-between relative z-10">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-3">
                    {highlight.type}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold">
                    {highlight.title}
                  </h3>
                  <p className="text-[#22D3EE] mt-2">
                    {highlight.period}
                  </p>
                  <p className="text-gray-400 leading-relaxed mt-5">
                    {highlight.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {highlight.impact.map((item) => (
                      <span key={item} className="text-sm text-gray-300 border border-white/10 rounded-md px-3 py-1 bg-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                  {highlight.projectUrl && (
                    <a
                      href={highlight.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-fit border border-[#22D3EE]/50 text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#070B14] rounded-md px-4 py-2 transition"
                    >
                      {highlight.linkLabel || 'View Project'}
                    </a>
                  )}
                </div>
                {highlight.images && highlight.video && (
                  <div className="grid grid-cols-2 gap-3 mt-8">
                    {highlight.images.map((image, imageIndex) => (
                      <img
                        key={image}
                        src={image}
                        alt={`${highlight.title} photo ${imageIndex + 1}`}
                        className="h-36 md:h-44 w-full object-cover rounded-md border border-white/10"
                      />
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {openGallery && (
        <div className="fixed inset-0 z-[100] bg-[#02040A]/90 backdrop-blur-xl px-5 py-6 md:px-10 md:py-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="sticky top-0 z-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-[#02040A]/90 backdrop-blur-xl border-b border-white/10 pb-5">
              <div>
                <p className="text-[#22D3EE] text-sm uppercase tracking-[0.18em]">
                  Graphic design gallery
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                  {openGallery.title}
                </h2>
                <p className="text-gray-400 mt-2">
                  {openGallery.gallery.length} portfolio images
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpenGallery(null)}
                className="border border-white/20 text-white hover:border-[#22D3EE] hover:text-[#22D3EE] rounded-md px-5 py-2 transition"
              >
                Close Gallery
              </button>
            </div>

            <div className={`${openGallery.single ? 'grid grid-cols-1' : 'grid sm:grid-cols-2 lg:grid-cols-3'} gap-5 pt-8`}>
              {openGallery.gallery.map((image) => (
                <figure key={image.src} className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    loading="lazy"
                    className={openGallery.single ? 'w-full h-[calc(100vh-240px)] object-contain bg-[#070B14]' : 'w-full h-auto bg-[#070B14]'}
                  />
                  <figcaption className="px-4 py-3 text-sm text-gray-300">
                    {image.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}

      <footer className="relative z-10 border-t border-white/10 bg-gradient-to-b from-transparent to-[#0a0e17]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-12 md:py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Connect with me</h3>
              <p className="text-gray-400 text-sm">Follow my work and connect on social media</p>
            </div>
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/1BPkJpbDiK/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-[#7C3AED] hover:border-[#7C3AED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]"
                aria-label="Visit Facebook profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/shashi_.munasinghe?igsh=NDR6cDd6OTVkZWdo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-[#22D3EE] hover:border-[#22D3EE] transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                aria-label="Visit Instagram profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.798.268-1.59.77-2.207 1.386-.616.617-1.118 1.409-1.386 2.207-.267.788-.468 1.658-.528 2.936C.008 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.528 2.936.268.798.77 1.591 1.386 2.207.617.617 1.409 1.119 2.207 1.387.788.267 1.659.468 2.936.528C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.528.798-.268 1.591-.77 2.207-1.387.617-.617 1.119-1.409 1.387-2.207.267-.788.468-1.659.528-2.936.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.528-2.936-.268-.798-.77-1.591-1.387-2.207a5.971 5.971 0 00-2.207-1.386c-.788-.267-1.659-.468-2.936-.528C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.07 1.171.054 1.805.244 2.227.408.56.217.96.477 1.382.896.419.42.679.822.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.56-.477.96-.896 1.382-.42.419-.822.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.56-.217-.96-.477-1.382-.896-.419-.42-.679-.822-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.56.477-.96.896-1.382.42-.419.822-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2026 Shashika Munasinghe. All rights reserved.</p>
            <p>Designed and built with passion</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
