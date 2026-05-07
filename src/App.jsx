export default function Portfolio() {
  const projects = [
    {
      title: "Hostel Management System",
      description:
        "A management platform consisting of a website for users and a C# desktop application for administrators powered by a FastAPI backend.",
      tech: ["Python", "FastAPI", "C#", "HTML", "CSS", "JavaScript"],
      features: [
        "Frontend and backend integration",
        "Admin management functionality",
        "Database-driven architecture",
        "REST API backend services",
      ],
    },
    {
      title: "Airsoft Booking Application",
      description:
        "A booking application created as a first-year Computer Science project for managing airsoft reservations and user interactions.",
      tech: ["Python", "HTML", "CSS", "JavaScript"],
      features: [
        "Booking workflow design",
        "User interaction features",
        "Application structure planning",
        "System logic implementation",
      ],
    },
  ];

  const skills = {
    Backend: ["Python", "FastAPI"],
    Frontend: ["HTML", "CSS", "JavaScript"],
    Desktop: ["C#"],
    Embedded_Systems: ["Arduino", "ESP32","{C++/C}"],
    Tools: ["GitHub ", "Supabase ", "VS Code"],
    Creative: ["Video Editing", "3D Modelling"],
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-6">
          <p className="text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase">
            Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Padii Kahindi Gandi
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
            Applied Computing Student & Software Developer
          </h2>

          <p className="max-w-3xl text-lg text-gray-700 leading-relaxed">
            I build backend systems, web applications, and practical
            technology-driven solutions using Python, FastAPI, C#, and modern
            web technologies. I am passionate about software engineering,
            embedded systems, and building real-world projects.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:padiiamamea0@gmail.com"
              className="px-6 py-3 rounded-2xl bg-black text-white font-medium shadow-sm hover:scale-105 transition"
              style={{ marginRight: 15 }}
            >
              Contact Me     
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-2xl border border-gray-300 font-medium hover:bg-gray-100 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-3xl font-bold">About</h3>
          </div>

          <div className="md:col-span-2 space-y-4 text-gray-700 leading-relaxed text-lg">
            <p>
              I am a Computer Science student with experience in software
              development, backend systems, frontend integration, and digital
              creativity. I enjoy building systems that solve real-world
              problems and continuously improving my technical skills.
            </p>

            <p>
              Beyond software development, I have entrepreneurial experience
              running small businesses and creative interests including writing,
              3D modelling, and technology projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-bold">Projects</h3>
          <div className="h-px bg-gray-300 flex-1 ml-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="space-y-5">
                <div>
                  <h4 className="text-2xl font-bold mb-3">
                    {project.title}
                  </h4>

                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Technologies</h5>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-gray-100 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold mb-3">Highlights</h5>

                  <ul className="space-y-2 text-gray-700">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <span>•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-bold">Skills</h3>
          <div className="h-px bg-gray-300 flex-1 ml-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={index}
              className="rounded-3xl border border-gray-200 p-6 bg-gray-50"
            >
              <h4 className="text-xl font-semibold mb-4">{category}</h4>

              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 rounded-xl bg-white border border-gray-200 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl font-bold">Experience & Entrepreneurship</h3>
          <div className="h-px bg-gray-300 flex-1 ml-6" />
        </div>

        <div className="space-y-8">
          <div className="border-l-4 border-black pl-6 space-y-2">
            <h4 className="text-2xl font-semibold">
              Computer Lab Representative
            </h4>
            <p className="text-gray-600">St. Mary’s High School | 2021–2022</p>
            <p className="text-gray-700 leading-relaxed">
              Assisted in managing computer laboratory systems, supported
              practical sessions, and helped maintain proper equipment usage and
              organization.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6 space-y-2">
            <h4 className="text-2xl font-semibold">
              Hotdog Sales Business
            </h4>
            <p className="text-gray-600">2023–Present</p>
            <p className="text-gray-700 leading-relaxed">
              Managed a small-scale food sales business involving customer
              service, inventory handling, and daily business operations.
            </p>
          </div>

          <div className="border-l-4 border-black pl-6 space-y-2">
            <h4 className="text-2xl font-semibold">
              Airsoft Equipment Business
            </h4>
            <p className="text-gray-600">2024–2025</p>
            <p className="text-gray-700 leading-relaxed">
              Managed promotion and sales of airsoft-related equipment while
              engaging with enthusiast communities and customers.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[2rem] bg-black text-white p-10 md:p-14">
          <div className="max-w-3xl space-y-6">
            <h3 className="text-4xl font-bold">Let’s Connect</h3>

            <p className="text-gray-300 text-lg leading-relaxed">
              I am currently looking for internship opportunities, collaborative
              projects, and opportunities to continue growing as a software
              developer.
            </p>

            <div className="space-y-2 text-lg">
              <p>Email: padiiamamea0@gmail.com</p>
              <p>Phone: +254 706 900 903</p>
              <p>Location: Juja Kiambu, Kenya</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
