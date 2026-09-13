import React from 'react'
import aboutmephoto from '../assets/aboutme.png'

import {
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiGithub,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiFigma,
  SiFramer,
} from 'react-icons/si'

import {
  FaGraduationCap,
  FaBriefcase,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAward,
  FaCode,
  FaUser,
  FaLaptopCode,
  FaExternalLinkAlt,
} from 'react-icons/fa'

function Aboutme() {
  const technicalSkills = [
    'UI/UX Design',
    'Figma',
    'Framer',
    'React',
    'JavaScript',
    'Tailwind CSS',
    'Bootstrap',
    'MySQL',
    'Adobe Suite',
    'Hardware Troubleshooting',
    'Software Troubleshooting',
    'Basic System Setup',
  ]

  const professionalSkills = [
    'Strategic Problem Solving',
    'Adaptability',
    'Effective Time Management',
    'Team-Oriented Collaboration',
    'Strong Multitasking Skills',
  ]

  const experiences = [
    {
      role: 'UI/UX Designer',
      company: 'Episoden',
      date: 'March 2025 – May 2026',
      description:
        'Studied how users interact with the app and website, identified pain points, collaborated with developers and product managers, and created intuitive and visually appealing UI designs.',
      website: 'https://episoden.com',
    },
    {
      role: 'Graphic Artist',
      company: 'Main Models Agency',
      date: 'January 2024 – March 2026',
      description:
        'Created social media content, edited model set cards, and organized model photos, videos, and other materials for efficient client access.',
    },
    {
      role: 'Front-End Website Developer',
      company: 'Grace Street',
      date: 'Commission Project',
      description:
        'Designed and developed responsive e-commerce features using HTML, CSS, and JavaScript while improving usability and debugging functionality across different devices.',
    },
  ]

  return (
    <>
      <section
        id="about"
        className="
          relative
          w-full
          overflow-hidden
          bg-[#1a1a1a]

          px-5
          py-16

          sm:px-8

          md:px-10
          md:py-20

          lg:px-14

          xl:px-[10vw]
          xl:py-[10vh]
        "
      >
        {/* BACKGROUND GRID */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-50

            bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
            bg-[size:14px_24px]
          "
        />

        <div
          className="
            relative
            z-10

            mx-auto
            w-full
            max-w-7xl
          "
        >
          {/* ========================================= */}
          {/* TITLE */}
          {/* ========================================= */}

          <div className="w-full">
            <h1
              className="
                font-briceRegular

                text-5xl
                font-bold
                leading-[0.9]

                text-[#f5f378]

                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
              "
            >
              ABOUT
              <br />
              ME
              <span className="text-white">.</span>
            </h1>
          </div>

          {/* ========================================= */}
          {/* MAIN BENTO GRID */}
          {/* ========================================= */}

          <div
            className="
              mt-10

              grid
              grid-cols-1
              gap-4

              md:grid-cols-2

              lg:grid-cols-4
            "
          >
            {/* ========================================= */}
            {/* PHOTO CARD */}
            {/* ========================================= */}

            <div
              className="
                relative
                mx-auto
                w-full
                overflow-hidden

                rounded-[30px]

                bg-[#f5f378]

                md:mx-0
                md:row-span-2

                lg:col-span-1
                lg:row-span-2
              "
            >
              <img
                src={aboutmephoto}
                alt="John Kenneth A. Macabitas"
                className="
                  block

                  h-[320px]
                  w-full

                  object-cover
                  object-[center_20%]

                  sm:h-[400px]
                  sm:object-[center_5%]

                  md:h-full
                  md:min-h-[520px]
                  md:object-top
                "
              />

              {/* IMAGE GRADIENT */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  bg-gradient-to-t
                  from-black/80
                  via-black/10
                  to-transparent
                "
              />

              {/* IMAGE TEXT */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0

                  w-full

                  p-5

                  sm:p-6
                "
              >
                <p
                  className="
                    font-poppins

                    text-[9px]
                    uppercase
                    tracking-[0.22em]

                    text-[#f5f378]

                    sm:text-[10px]
                    sm:tracking-[0.25em]
                  "
                >
                  UI/UX Designer & Developer
                </p>

                <h2
                  className="
                    mt-2

                    font-briceRegular

                    text-xl
                    font-bold
                    leading-tight

                    text-white

                    sm:text-2xl
                  "
                >
                  PINCH
                </h2>
              </div>
            </div>

            {/* ========================================= */}
            {/* ABOUT ME */}
            {/* ========================================= */}

            <div
              className="
                flex
                min-h-[300px]
                flex-col
                justify-between

                rounded-[30px]

                bg-[#252525]

                p-7

                md:col-span-1

                lg:col-span-2
              "
            >
              <div className="flex items-start justify-between">
                <div
                  className="
                    flex
                    h-12
                    w-12

                    items-center
                    justify-center

                    rounded-full

                    bg-[#f5f378]
                  "
                >
                  <FaUser className="text-lg text-[#1a1a1a]" />
                </div>

                <p
                  className="
                    font-poppins
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                  "
                >
                  About Me
                </p>
              </div>

              <div className="mt-10">
                <h2
                  className="
                    font-briceRegular

                    text-3xl
                    font-bold
                    leading-[1.05]

                    text-white

                    sm:text-4xl

                    xl:text-[44px]
                  "
                >
                  Designer / Developer
                </h2>

                <p
                  className="
                    mt-5
                    max-w-3xl

                    font-poppins

                    text-sm
                    leading-7

                    text-white/50

                    sm:text-base
                  "
                >
                  I'm John Kenneth A. Macabitas, an Information Technology
                  graduate with experience in UI/UX design, front-end
                  development, graphic design, and digital products.
                </p>
              </div>
            </div>

            {/* ========================================= */}
            {/* EDUCATION */}
            {/* ========================================= */}

            <div
              className="
                flex
                min-h-[300px]
                flex-col
                justify-between

                rounded-[30px]

                bg-[#c588d1]

                p-7
              "
            >
              <div className="flex items-center justify-between">
                <FaGraduationCap className="text-3xl text-[#1a1a1a]" />

                <p
                  className="
                    font-poppins
                    text-xs
                    text-[#1a1a1a]/50
                  "
                >
                  2021 — 2025
                </p>
              </div>

              <div className="mt-10">
                <p
                  className="
                    font-poppins

                    text-xs
                    uppercase
                    tracking-[0.25em]

                    text-[#1a1a1a]/50
                  "
                >
                  Graduate
                </p>

                <h2
                  className="
                    mt-3

                    font-briceRegular

                    text-2xl
                    font-bold
                    leading-tight

                    text-[#1a1a1a]

                    sm:text-3xl
                  "
                >
                  BS Information Technology
                </h2>

                <p
                  className="
                    mt-4

                    font-poppins
                    text-sm

                    text-[#1a1a1a]/60
                  "
                >
                  Rizal Technological University
                </p>

                <div
                  className="
                    mt-6

                    inline-flex
                    items-center
                    gap-2

                    rounded-full

                    bg-[#1a1a1a]

                    px-4
                    py-2

                    font-poppins
                    text-xs

                    text-[#f5f378]
                  "
                >
                  <FaAward />

                  Cum Laude • GWA 1.43
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* PERSONAL INFORMATION */}
            {/* ========================================= */}

            <div
              className="
                rounded-[30px]

                bg-[#f5f378]

                p-7

                md:col-span-2

                lg:col-span-3
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="
                      font-poppins

                      text-[10px]
                      uppercase
                      tracking-[0.25em]

                      text-[#1a1a1a]/50
                    "
                  >
                    Personal Information
                  </p>

                  <h2
                    className="
                      mt-2

                      font-briceRegular

                      text-3xl
                      font-bold

                      text-[#1a1a1a]
                    "
                  >
                    John Kenneth A. Macabitas
                  </h2>
                </div>

                <FaUser
                  className="
                    hidden

                    text-3xl
                    text-[#1a1a1a]

                    sm:block
                  "
                />
              </div>

              {/* 3 EQUAL INFORMATION COLUMNS */}
              <div
                className="
                  mt-8

                  grid
                  w-full

                  grid-cols-1

                  gap-6

                  sm:grid-cols-3
                "
              >
                {/* EMAIL */}
                <div className="min-w-0">
                  <p
                    className="
                      font-poppins

                      text-[10px]
                      uppercase
                      tracking-[0.2em]

                      text-[#1a1a1a]/40
                    "
                  >
                    Email
                  </p>

                  <a
                    href="mailto:johnkennethmacabitas11@gmail.com"
                    className="
                      mt-2

                      flex
                      items-start
                      gap-2

                      break-all

                      font-poppins

                      text-sm
                      font-medium

                      text-[#1a1a1a]

                      transition-opacity
                      duration-300

                      hover:opacity-50
                    "
                  >
                    <FaEnvelope className="mt-1 flex-shrink-0" />

                    johnkennethmacabitas11@gmail.com
                  </a>
                </div>

                {/* PHONE */}
                <div className="min-w-0">
                  <p
                    className="
                      font-poppins

                      text-[10px]
                      uppercase
                      tracking-[0.2em]

                      text-[#1a1a1a]/40
                    "
                  >
                    Phone
                  </p>

                  <a
                    href="tel:+639156607874"
                    className="
                      mt-2

                      flex
                      items-center
                      gap-2

                      font-poppins

                      text-sm
                      font-medium

                      text-[#1a1a1a]

                      transition-opacity
                      duration-300

                      hover:opacity-50
                    "
                  >
                    <FaPhoneAlt />

                    +63 915 660 7874
                  </a>
                </div>

                {/* LOCATION */}
                <div className="min-w-0">
                  <p
                    className="
                      font-poppins

                      text-[10px]
                      uppercase
                      tracking-[0.2em]

                      text-[#1a1a1a]/40
                    "
                  >
                    Location
                  </p>

                  <div
                    className="
                      mt-2

                      flex
                      items-center
                      gap-2

                      font-poppins

                      text-sm
                      font-medium

                      text-[#1a1a1a]
                    "
                  >
                    <FaMapMarkerAlt />

                    Imus, Cavite, Philippines
                  </div>
                </div>
              </div>
            </div>

            {/* ========================================= */}
            {/* EXPERIENCE */}
            {/* ========================================= */}

            <div
              className="
                rounded-[30px]

                bg-[#252525]

                p-7

                md:col-span-2

                lg:col-span-4
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="
                      font-poppins

                      text-xs
                      uppercase
                      tracking-[0.25em]

                      text-[#c588d1]
                    "
                  >
                    Career
                  </p>

                  <h2
                    className="
                      mt-2

                      font-briceRegular

                      text-3xl
                      font-bold

                      text-white

                      sm:text-4xl
                    "
                  >
                    Experience
                  </h2>
                </div>

                <FaBriefcase className="text-3xl text-[#c588d1]" />
              </div>

              {/* EXPERIENCE CARDS */}
              <div
                className="
                  mt-8

                  grid
                  grid-cols-1

                  gap-4

                  lg:grid-cols-3
                "
              >
                {experiences.map((experience, index) => (
                  <div
                    key={index}
                    className="
                      group

                      flex
                      flex-col

                      rounded-[22px]

                      border
                      border-white/10

                      bg-[#1e1e1e]

                      p-6

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#c588d1]/60
                      hover:bg-[#222222]
                    "
                  >
                    {/* DATE */}
                    <p
                      className="
                        font-poppins

                        text-[10px]
                        uppercase
                        tracking-[0.15em]

                        text-[#f5f378]
                      "
                    >
                      {experience.date}
                    </p>

                    {/* ROLE */}
                    <h3
                      className="
                        mt-5

                        font-briceRegular

                        text-xl
                        font-bold

                        text-white
                      "
                    >
                      {experience.role}
                    </h3>

                    {/* COMPANY */}
                    <p
                      className="
                        mt-1

                        font-poppins

                        text-xs
                        font-semibold

                        text-[#c588d1]
                      "
                    >
                      {experience.company}
                    </p>

                    {/* DESCRIPTION */}
                    <p
                      className="
                        mt-5

                        flex-1

                        font-poppins

                        text-sm
                        leading-6

                        text-white/45
                      "
                    >
                      {experience.description}
                    </p>

                    {/* WEBSITE LINK */}
                    {experience.website && (
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          mt-6

                          inline-flex
                          w-fit
                          items-center
                          gap-2

                          rounded-full

                          border
                          border-[#c588d1]/30

                          bg-[#c588d1]/10

                          px-4
                          py-2.5

                          font-poppins

                          text-xs
                          font-medium

                          text-[#c588d1]

                          transition-all
                          duration-300

                          hover:border-[#c588d1]
                          hover:bg-[#c588d1]
                          hover:text-[#1a1a1a]
                        "
                      >
                        Visit Episoden

                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* ========================================= */}
            {/* TECHNICAL SKILLS */}
            {/* ========================================= */}

            <div
              className="
                rounded-[30px]

                bg-[#c6e58a]

                p-7

                md:col-span-2

                lg:col-span-3
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p
                    className="
                      font-poppins

                      text-[10px]
                      uppercase
                      tracking-[0.25em]

                      text-[#1a1a1a]/50
                    "
                  >
                    Toolkit
                  </p>

                  <h2
                    className="
                      mt-2

                      font-briceRegular

                      text-3xl
                      font-bold

                      text-[#1a1a1a]
                    "
                  >
                    Technical Skills
                  </h2>
                </div>

                <FaCode className="text-3xl text-[#1a1a1a]" />
              </div>

              <div
                className="
                  mt-8

                  flex
                  flex-wrap

                  gap-2
                "
              >
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="
                      rounded-full

                      bg-[#1a1a1a]

                      px-4
                      py-2

                      font-poppins

                      text-[11px]

                      text-white

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:bg-white
                      hover:text-[#1a1a1a]
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* TECHNOLOGY ICONS */}
              <div
                className="
                  mt-10

                  flex
                  flex-wrap

                  gap-5

                  text-2xl
                  text-[#1a1a1a]

                  sm:text-3xl
                "
              >
                <SiFigma />
                <SiFramer />
                <SiReact />
                <SiJavascript />
                <SiTailwindcss />
                <SiBootstrap />
                <SiMysql />
              </div>
            </div>

            {/* ========================================= */}
            {/* FOCUS */}
            {/* ========================================= */}

            <div
              className="
                flex
                flex-col
                justify-between

                rounded-[30px]

                bg-[#f5f378]

                p-7
              "
            >
              <FaLaptopCode className="text-3xl text-[#1a1a1a]" />

              <div className="mt-12">
                <p
                  className="
                    font-poppins

                    text-[10px]
                    uppercase
                    tracking-[0.25em]

                    text-[#1a1a1a]/50
                  "
                >
                  Focus
                </p>

                <h3
                  className="
                    mt-2

                    font-briceRegular

                    text-2xl
                    font-bold
                    leading-tight

                    text-[#1a1a1a]
                  "
                >
                  UI/UX Design
                  <br />
                  & Front-End
                </h3>
              </div>
            </div>

            {/* ========================================= */}
            {/* PROFESSIONAL SKILLS */}
            {/* ========================================= */}

            <div
              className="
                rounded-[30px]

                bg-[#c588d1]

                p-7

                md:col-span-2

                lg:col-span-3
              "
            >
              <p
                className="
                  font-poppins

                  text-[10px]
                  uppercase
                  tracking-[0.25em]

                  text-[#1a1a1a]/50
                "
              >
                Professional Skills
              </p>

              <h2
                className="
                  mt-2

                  font-briceRegular

                  text-3xl
                  font-bold

                  text-[#1a1a1a]
                "
              >
                How I work.
              </h2>

              <div
                className="
                  mt-7

                  flex
                  flex-wrap

                  gap-2
                "
              >
                {professionalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="
                      rounded-full

                      bg-[#1a1a1a]

                      px-4
                      py-2

                      font-poppins

                      text-xs

                      text-white
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* ========================================= */}
            {/* CERTIFICATIONS */}
            {/* ========================================= */}

            <div
              className="
                flex
                flex-col
                justify-between

                rounded-[30px]

                border
                border-white/10

                bg-[#252525]

                p-7
              "
            >
              <FaAward className="text-3xl text-[#f5f378]" />

              <div className="mt-12">
                <p
                  className="
                    font-poppins

                    text-[10px]
                    uppercase
                    tracking-[0.25em]

                    text-white/30
                  "
                >
                  Certifications
                </p>

                <h3
                  className="
                    mt-2

                    font-briceRegular

                    text-2xl
                    font-bold

                    text-white
                  "
                >
                  Coming Soon
                </h3>

                <p
                  className="
                    mt-3

                    font-poppins

                    text-xs
                    leading-5

                    text-white/40
                  "
                >
                  Certifications and additional professional training will be
                  displayed here.
                </p>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* SOCIAL LINKS */}
          {/* ========================================= */}

          <div
            className="
              mt-10

              flex
              w-full
              flex-wrap
              justify-center

              gap-3
            "
          >
            {/* INSTAGRAM */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2

                rounded-full

                border
                border-white/20

                px-5
                py-2.5

                font-poppins
                text-xs

                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#c588d1]
                hover:bg-[#c588d1]
                hover:text-[#1a1a1a]
              "
            >
              <SiInstagram />

              Instagram
            </a>

            {/* TIKTOK */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2

                rounded-full

                border
                border-white/20

                px-5
                py-2.5

                font-poppins
                text-xs

                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#f5f378]
                hover:bg-[#f5f378]
                hover:text-[#1a1a1a]
              "
            >
              <SiTiktok />

              TikTok
            </a>

            {/* GITHUB */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2

                rounded-full

                border
                border-white/20

                px-5
                py-2.5

                font-poppins
                text-xs

                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#c6e58a]
                hover:bg-[#c6e58a]
                hover:text-[#1a1a1a]
              "
            >
              <SiGithub />

              GitHub
            </a>

            {/* FACEBOOK */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-2

                rounded-full

                border
                border-white/20

                px-5
                py-2.5

                font-poppins
                text-xs

                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-[#c588d1]
                hover:bg-[#c588d1]
                hover:text-[#1a1a1a]
              "
            >
              <SiFacebook />

              Facebook
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutme