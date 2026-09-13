import React from 'react'
import {
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiGithub,
} from 'react-icons/si'
import { FaArrowUp } from 'react-icons/fa'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-[#1a1a1a]

        px-5
        pb-[100px]
        pt-16

        sm:px-8
        md:px-10
        lg:px-14
        xl:px-[10vw]
      "
    >
      {/* BACKGROUND GRID */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-40
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
          bg-[size:14px_24px]
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* MAIN FOOTER CARD */}
        <div
          className="
            rounded-[32px]
            border
            border-white/10
            bg-[#252525]

            p-6

            sm:p-8
            md:p-10
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-10

              md:grid-cols-2
              md:items-end
            "
          >
            {/* LEFT SIDE */}
            <div>
              <p
                className="
                  font-poppins
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-[#f5f378]
                "
              >
                Let&apos;s work together
              </p>

              <h2
                className="
                  mt-4
                  max-w-2xl
                  font-briceRegular
                  text-4xl
                  font-bold
                  leading-[1.05]
                  text-white

                  sm:text-5xl
                  lg:text-6xl
                "
              >
                Have a project
                <br />
                in mind
                <span className="text-[#c588d1]">?</span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  font-poppins
                  text-sm
                  leading-7
                  text-white/45

                  sm:text-base
                "
              >
                I&apos;m open to UI/UX design, front-end development,
                graphic design, and creative collaborations.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                flex
                flex-col
                items-start
                gap-5

                md:items-end
              "
            >
              <a
                href="mailto:johnkennethmacabitas11@gmail.com"
                className="
                  rounded-full
                  bg-[#f5f378]

                  px-6
                  py-3.5

                  font-poppins
                  text-sm
                  font-semibold
                  text-[#1a1a1a]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-[0_0_25px_rgba(245,243,120,0.15)]
                "
              >
                Send me an email
              </a>

              {/* SOCIALS */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/60

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#c588d1]
                    hover:bg-[#c588d1]
                    hover:text-[#1a1a1a]
                  "
                >
                  <SiInstagram />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/60

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#f5f378]
                    hover:bg-[#f5f378]
                    hover:text-[#1a1a1a]
                  "
                >
                  <SiTiktok />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/60

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#c6e58a]
                    hover:bg-[#c6e58a]
                    hover:text-[#1a1a1a]
                  "
                >
                  <SiGithub />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-white/60

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:border-[#c588d1]
                    hover:bg-[#c588d1]
                    hover:text-[#1a1a1a]
                  "
                >
                  <SiFacebook />
                </a>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="my-8 h-px w-full bg-white/10" />

          {/* BOTTOM */}
          <div
            className="
              flex
              flex-col
              gap-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div>
              <h3
                className="
                  font-briceRegular
                  text-xl
                  font-bold
                  text-white
                "
              >
                John Kenneth A. Macabitas
              </h3>

              <p
                className="
                  mt-1
                  font-poppins
                  text-[10px]
                  uppercase
                  tracking-[0.18em]
                  text-white/30
                "
              >
                UI/UX Designer • Developer • Graphic Designer
              </p>
            </div>

            <div className="flex items-center gap-5">
              <p
                className="
                  font-poppins
                  text-xs
                  text-white/30
                "
              >
                © {new Date().getFullYear()} All rights reserved.
              </p>

              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center

                  rounded-full

                  bg-[#c588d1]

                  text-[#1a1a1a]

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:bg-[#d3a0dd]
                "
              >
                <FaArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer