import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import pinchImage from '../assets/myprofile.png'
import iconImage from '../assets/wave.png'

function Main() {
  return (
    <>
      <section
        className="
          relative
          flex
          min-h-screen
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#1a1a1a]

          px-5
          py-16

          sm:px-8
          md:px-10
          lg:px-14
          xl:px-[10vw]
        "
      >
        {/* ========================================= */}
        {/* BACKGROUND GRID */}
        {/* ========================================= */}

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

        {/* ========================================= */}
        {/* LARGE BACKGROUND GLOW */}
        {/* ========================================= */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[43%]

            h-[280px]
            w-[280px]

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            bg-[#c588d1]/10
            blur-[120px]

            animate-pulse

            sm:h-[350px]
            sm:w-[350px]

            md:h-[420px]
            md:w-[420px]
          "
        />

        {/* ========================================= */}
        {/* MAIN CONTENT */}
        {/* ========================================= */}

        <div
          className="
            relative
            z-10

            mx-auto

            flex
            w-full
            max-w-6xl
            flex-col

            items-center
            justify-center

            text-center
          "
        >
          {/* ========================================= */}
          {/* INTRO BADGE */}
          {/* ========================================= */}

          <div
            className="
              mb-6

              inline-flex
              items-center
              gap-2

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              px-4
              py-2
            "
          >
            <p
              className="
                font-poppins
                text-[11px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-[#f5f378]

                sm:text-xs
              "
            >
              Hi, it's me Pinch
            </p>

            <img
              src={iconImage}
              alt="Wave"
              className="
                h-4
                w-4
                object-contain
              "
            />
          </div>

          {/* ========================================= */}
          {/* PROFILE IMAGE */}
          {/* ========================================= */}

          <div
            className="
              relative

              mb-7

              flex
              items-center
              justify-center
            "
          >
            {/* OUTER VIOLET GLOW */}
            <div
              className="
                pointer-events-none
                absolute

                h-[210px]
                w-[210px]

                rounded-full

                bg-[#c588d1]/20

                blur-[65px]

                animate-pulse

                sm:h-[260px]
                sm:w-[260px]

                md:h-[290px]
                md:w-[290px]

                lg:h-[320px]
                lg:w-[320px]
              "
            />

            {/* INNER VIOLET GLOW */}
            <div
              className="
                pointer-events-none
                absolute

                h-[150px]
                w-[150px]

                rounded-full

                bg-[#c588d1]/30

                blur-[45px]

                animate-pulse

                sm:h-[190px]
                sm:w-[190px]

                md:h-[220px]
                md:w-[220px]

                lg:h-[240px]
                lg:w-[240px]
              "
            />

            {/* PROFILE PHOTO */}
            <img
              src={pinchImage}
              alt="Pinch"
              className="
                relative
                z-10

                w-[170px]

                object-contain

                drop-shadow-[0_0_25px_rgba(197,136,209,0.15)]

                sm:w-[200px]
                md:w-[225px]
                lg:w-[250px]
              "
            />
          </div>

          {/* ========================================= */}
          {/* ROLE */}
          {/* ========================================= */}

          <p
            className="
              mb-3

              font-poppins

              text-[9px]
              uppercase
              tracking-[0.2em]

              text-white/35

              sm:text-[10px]
              sm:tracking-[0.25em]

              md:text-xs
            "
          >
            UI/UX Designer • Developer • Graphic Designer
          </p>

          {/* ========================================= */}
          {/* MAIN HEADLINE */}
          {/* ========================================= */}

          <h1
            className="
              max-w-5xl

              font-briceRegular

              text-4xl
              font-bold
              leading-[1.05]

              text-white

              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            I design digital experiences
            <span className="text-[#c588d1]">
              {' '}that feel good{' '}
            </span>
            and
            <span className="text-[#f5f378]">
              {' '}work well.
            </span>
          </h1>

          {/* ========================================= */}
          {/* DESCRIPTION */}
          {/* ========================================= */}

          <p
            className="
              mt-6

              max-w-2xl

              px-2

              font-poppins

              text-sm
              font-light
              leading-6

              text-white/50

              sm:px-0
              sm:text-base
              sm:leading-7
            "
          >
            Information Technology graduate specializing in UI/UX design,
            front-end development, and visual design for meaningful digital
            products.
          </p>

          {/* ========================================= */}
          {/* ACTIONS */}
          {/* ========================================= */}

          <div
            className="
              mt-8

              flex
              flex-col

              items-center
              justify-center

              gap-4

              sm:flex-row
            "
          >
            {/* ========================================= */}
            {/* VIEW CV */}
            {/* ========================================= */}

            <a
              href="https://mail-attachment.googleusercontent.com/attachment/u/2/?ui=2&ik=5f78c1fa58&attid=0.1&permmsgid=msg-a:r3157400695838752411&th=1a08e1ef489d82a7&view=att&disp=inline&realattid=1a08e1ebd38f9ae0fed1&zw&saddbat=ANGjdJ9IvXj5_1lkVIXPmpZgfhv_1GGgmHYbZw9wRt1ZxXVcOq84O1Z_c28CCjmc8xive7-fDFfxtUtFxAifJ2yds7dcs0H8QcHbuaqJxnNKwZGJS0-s9_yD0Np9A_swb0-DBCTdTNLRYG8k1HDJfeu8X2XW9WC2eq93f0uBPdKhuxPXFUSsERJWOYi7I-FY1X_arSRg1eqn68j-eC72CrPSw-pNPEyuA0hTgpGncyNKQ0-ZWvaPEKVeN0vWi0yX9qZqZWKFPPACjyW8bXCz3XnmeaRxbAoSuK2rvJGWAA79VyYsem48t115xlw9Fx17xDXjNQDUV15WazrO9hCkDLVCfYhTEO9h7qxChONLKH5p92ZEWiIiFKdUFx_c4tnf1Myt1qCGylpvqCelJ_qhM6TGGMKZkqSfRq8i6szQdVYbfpt9XjV7Rp0DhKDwEKJax6h53FUeo827PXiH3NHT5wsJaoDF-0U3I5oCLxVbbaeXrfqk55KQGjFlyWrZKfsPQqkQUaaXQl6pLbkxd2lu2ZMcAq8Hskj69xbclh13tdwBmB_2r_A1is--Du7qsNCJlDKbGemGmicEQ3HPrnio_yEi0xH3o5KsPHkki9RblnnMCeX4Y2Nb4lHTXIg3LM0olirT5Htu7TgPriyRK5VC0pykXfSfYLOO0Hvt3eaX_KEaBvbAcjNtS5flG6KFxjA9en_P6BVLqY4wPRl29gbkjFSKpCypr9CpTu_erQRy-xMivcKy_LExmrxhZAu3UfXLceGLF_-q4D6wWRnNS63YCL6dD5xr9zMlhrA4zjLB_woq5fLBZSy8rXobkix3PU0UjFnYX5Q2yWHgBd1cLZXHhtDVUrZDIfjKkNHz6bJcWe8BmqSu_Lr6pDI6Q_qpPXGfxWyEOfjQJvkgMmNipEspCon2JsIDYm5zzbiTw0nCdUljWpnEtZzxQkfa6OEgw1N8B0Bxcx_TETpg4_TDOnjyLww9DWUKax5kW_N5Kv9W5gr7hEDU4ixQoggrJtq5xs0P0yf_wskSHLylFldJAZTXjEXoaEhzPLbigOV35cP_xqcrT2KdQ3iiPpnkGPhIlkGu92UTaeNUsJngaEL60M0JeLdGX_O_RfTTDfJQ0Qy9ZtIGMIfAbLDbIquOHAFLko4"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full

                bg-[#c588d1]

                px-7
                py-3.5

                font-poppins
                text-sm
                font-semibold

                text-[#1a1a1a]

                transition-all
                duration-300

                hover:-translate-y-1

                hover:bg-[#d3a0dd]

                hover:shadow-[0_0_30px_rgba(197,136,209,0.30)]
              "
            >
              View CV
            </a>

            {/* ========================================= */}
            {/* EXPLORE WORK */}
            {/* ========================================= */}

            <a
              href="#about"
              className="
                flex
                items-center
                gap-2

                rounded-full

                px-4
                py-3.5

                font-poppins
                text-sm

                text-white/60

                transition-all
                duration-300

                hover:text-white
              "
            >
              Explore my work

              <IoIosArrowDown
                className="
                  text-base
                  transition-transform
                  duration-300

                  group-hover:translate-y-1
                "
              />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main