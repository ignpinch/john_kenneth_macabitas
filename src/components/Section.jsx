import React from 'react'
import project1 from '../assets/NexplayImage.jpg'
import project2 from '../assets/KopiMed.png'
import project3 from '../assets/Paws.png'
import project4 from '../assets/SmartPlug.png'

function Section() {
  return (
    <>
      <div className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]">

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

        {/* UI DESIGN SECTION */}
        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            w-full
            flex-col
            items-center

            px-5
            py-8

            sm:px-8
            sm:py-8

            md:px-10
            md:py-5

            lg:px-12
            lg:py-8

            xl:px-16
            xl:py-8
          "
        >

          {/* SECTION TITLE */}
          <div
            className="
              z-10
              w-full
              max-w-6xl
              text-center

              sm:text-left
            "
          >
            <h1
              className="
                my-5
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
              UI/UX
              <br />

              DESIGNS

              <span
                className="
                  text-6xl
                  text-white

                  sm:text-7xl
                  md:text-8xl
                  lg:text-9xl
                "
              >
                .
              </span>
            </h1>
          </div>

          {/* PROJECT GRID */}
          <div
            className="
              mt-6
              grid
              w-full
              max-w-6xl
              grid-cols-1
              gap-6

              sm:mt-8
              sm:gap-8

              md:grid-cols-2
              md:gap-8

              lg:gap-10

              xl:gap-12
            "
          >

            {/* ================================================= */}
            {/* PROJECT 1 - NEXTPLAY */}
            {/* ================================================= */}

            <div
              className="
                group
                relative
                w-full
                cursor-pointer
                overflow-hidden
                rounded-2xl
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[16/9]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  bg-black
                "
              >
                <img
                  src={project1}
                  alt="Nextplay"
                  className="
                    h-full
                    w-full
                    object-cover

                    brightness-100

                    transition-all
                    duration-500
                    ease-out

                    group-hover:scale-110
                    group-hover:brightness-50
                  "
                />
              </div>

              {/* PROJECT INFORMATION */}
              <div
                className="
                  absolute
                  inset-0

                  flex
                  translate-y-full
                  flex-col
                  justify-end

                  rounded-2xl

                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent

                  px-6
                  pb-6

                  opacity-0

                  transition-all
                  duration-500
                  ease-out

                  group-hover:translate-y-0
                  group-hover:opacity-100

                  sm:px-7
                  sm:pb-7

                  md:px-8
                  md:pb-8
                "
              >
                <h1
                  className="
                    font-poppins
                    text-2xl
                    font-bold
                    text-white

                    sm:text-3xl
                  "
                >
                  NEXTPLAY
                </h1>

                <p
                  className="
                    mt-2
                    max-w-xl
                    font-poppins
                    text-sm
                    leading-relaxed
                    text-white

                    sm:text-base
                  "
                >
                  Nextplay offers a diverse music library catering to all tastes.
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.behance.net/gallery/203902403/NEXTPLAY-Mobile-App"
                  className="
                    relative
                    mt-4
                    w-fit

                    font-briceThin
                    text-sm
                    text-[#c6e58a]

                    transition-all
                    duration-300

                    hover:text-white

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[1px]
                    after:w-0
                    after:bg-[#c6e58a]
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  See Case Study
                </a>
              </div>

            </div>


            {/* ================================================= */}
            {/* PROJECT 2 - KOPIMED */}
            {/* ================================================= */}

            <div
              className="
                group
                relative
                w-full
                cursor-pointer
                overflow-hidden
                rounded-2xl
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[16/9]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  bg-black
                "
              >
                <img
                  src={project2}
                  alt="Kopimed"
                  className="
                    h-full
                    w-full
                    object-cover

                    brightness-100

                    transition-all
                    duration-500
                    ease-out

                    group-hover:scale-110
                    group-hover:brightness-50
                  "
                />
              </div>

              {/* PROJECT INFORMATION */}
              <div
                className="
                  absolute
                  inset-0

                  flex
                  translate-y-full
                  flex-col
                  justify-end

                  rounded-2xl

                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent

                  px-6
                  pb-6

                  opacity-0

                  transition-all
                  duration-500
                  ease-out

                  group-hover:translate-y-0
                  group-hover:opacity-100

                  sm:px-7
                  sm:pb-7

                  md:px-8
                  md:pb-8
                "
              >
                <h1
                  className="
                    font-poppins
                    text-2xl
                    font-bold
                    text-white

                    sm:text-3xl
                  "
                >
                  KOPIMED
                </h1>

                <p
                  className="
                    mt-2
                    max-w-xl
                    font-poppins
                    text-sm
                    leading-relaxed
                    text-white

                    sm:text-base
                  "
                >
                  Kopimed App: Satisfying every coffee craving,
                  one cup at a time.
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.behance.net/gallery/204000809/KOPIMED-Mobile-App"
                  className="
                    relative
                    mt-4
                    w-fit

                    font-briceThin
                    text-sm
                    text-[#c6e58a]

                    transition-all
                    duration-300

                    hover:text-white

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[1px]
                    after:w-0
                    after:bg-[#c6e58a]
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  See Case Study
                </a>
              </div>

            </div>


            {/* ================================================= */}
            {/* PROJECT 3 - PAWS */}
            {/* ================================================= */}

            <div
              className="
                group
                relative
                w-full
                cursor-pointer
                overflow-hidden
                rounded-2xl
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[16/9]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  bg-black
                "
              >
                <img
                  src={project3}
                  alt="Paws Adoption App"
                  className="
                    h-full
                    w-full
                    object-cover

                    brightness-100

                    transition-all
                    duration-500
                    ease-out

                    group-hover:scale-110
                    group-hover:brightness-50
                  "
                />
              </div>

              {/* PROJECT INFORMATION */}
              <div
                className="
                  absolute
                  inset-0

                  flex
                  translate-y-full
                  flex-col
                  justify-end

                  rounded-2xl

                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent

                  px-6
                  pb-6

                  opacity-0

                  transition-all
                  duration-500
                  ease-out

                  group-hover:translate-y-0
                  group-hover:opacity-100

                  sm:px-7
                  sm:pb-7

                  md:px-8
                  md:pb-8
                "
              >
                <h1
                  className="
                    font-poppins
                    text-2xl
                    font-bold
                    leading-tight
                    text-white

                    sm:text-3xl
                  "
                >
                  PAWS : ADOPTION APP
                </h1>

                <p
                  className="
                    mt-2
                    max-w-xl
                    font-poppins
                    text-sm
                    leading-relaxed
                    text-white

                    sm:text-base
                  "
                >
                  Finding furry friends their forever homes, effortlessly.
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.behance.net/gallery/204162473/PAWS-Pet-Adopting-Mobile-App"
                  className="
                    relative
                    mt-4
                    w-fit

                    font-briceThin
                    text-sm
                    text-[#c6e58a]

                    transition-all
                    duration-300

                    hover:text-white

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[1px]
                    after:w-0
                    after:bg-[#c6e58a]
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  See Case Study
                </a>
              </div>

            </div>


            {/* ================================================= */}
            {/* PROJECT 4 - SMARTPLUG */}
            {/* ================================================= */}

            <div
              className="
                group
                relative
                w-full
                cursor-pointer
                overflow-hidden
                rounded-2xl
              "
            >

              {/* IMAGE */}
              <div
                className="
                  relative
                  aspect-[16/9]
                  w-full
                  overflow-hidden
                  rounded-2xl
                  bg-black
                "
              >
                <img
                  src={project4}
                  alt="SmartPlug"
                  className="
                    h-full
                    w-full
                    object-cover

                    brightness-100

                    transition-all
                    duration-500
                    ease-out

                    group-hover:scale-110
                    group-hover:brightness-50
                  "
                />
              </div>

              {/* PROJECT INFORMATION */}
              <div
                className="
                  absolute
                  inset-0

                  flex
                  translate-y-full
                  flex-col
                  justify-end

                  rounded-2xl

                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent

                  px-6
                  pb-6

                  opacity-0

                  transition-all
                  duration-500
                  ease-out

                  group-hover:translate-y-0
                  group-hover:opacity-100

                  sm:px-7
                  sm:pb-7

                  md:px-8
                  md:pb-8
                "
              >
                <h1
                  className="
                    font-poppins
                    text-2xl
                    font-bold
                    text-white

                    sm:text-3xl
                  "
                >
                  SmartPlug
                </h1>

                <p
                  className="
                    mt-2
                    max-w-xl
                    font-poppins
                    text-sm
                    leading-relaxed
                    text-white

                    sm:text-base
                  "
                >
                  The SmartPlug UI is designed to help users easily
                  monitor and control their appliances, track power usage,
                  and manage their bills.
                </p>

                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=326ecdc9cd&attid=0.1&permmsgid=msg-a:r7862206575441358214&th=1991352a31c9d852&view=att&disp=inline&realattid=f_mf4zyw6z0&zw&saddbat=ANGjdJ98Nana_qwRK-MNcRvBbQT6PsRMB-z7XYHy_PHlhwH6L20LrzaUdF6BKZvs17a5tgM7FNhiBecd0fnBgGfmmICoMCAC_-sGXWGb9g7IMpdNc9TcXVYFqr2sffsWr7FsdT-3oy5v4KA4Pu_t_68rxXO_dk3kqVaurp0tLEr8CWlK_gIpziSINp-bJY5XilmalRq7h6F5UOXfZFC2dfzJhQB4aXtKCXtx2USVzgBhvNUEdcDhyN3Z3BxrTs6yEVXxxFa4WD9F9MDw4bJr2EgtyE37VHjSlaWZtfVCDhYrzA0vTFnQqt1dRZLY71jLnSYRHVPK51yRqO5bZ3YowpounXY_94pjLwUZhIuIDuSUdeSP35jukP0_5umC8_vT3Lt8hBf1INOULn3vEnrnOG0CoqCeIczkuSS9mlRTi9pn8XfBdCLsoCuld4mzH-FfKku7KEHPidLoj3vgaHbuIVgOp8tQEP4KCGRgSoxRufFv3-kHhm4GjpJ_y22ilB4puGnKN7QOBz7IeUZP8DNlmCeDbREWuKE-SPqyEGPTHT3jyeFxJZpvYR9vPCZff_82TxKo1R25pRPdyEOR-_CIr_P5UPfVgp27EASwEP0Asy0z-IT__VOE09Yr2co59j15X1a06tWEcV4a-L_GJQUZYPzn3BN-K6PBHwUZABpnJlPMF0k9GLyhV1MrZv-x-NqsU6hXY586DsLXalBsMMQYIWLMmYGMJq6bziWFljZU5mn0wu73jcgcxIzYypjmE7xoWo77Cvzkau-Gk_uh4sSPrOSK_6a71FlJ4x8DBS13-fVbpXvsOlP3cIaTiQp-zD8dJeZ0hCbFTd-nfywSj1iB1iHlGKOCppzUsGA8i0kUYxYKQop43ubbzPRtXMD2HZ-fDtQvDBfjS04JHCsQvVKt0yQj0ZSlh7d5U48mMaUyrqPaeDEUTfAa7qPvF11KbbSbGy1ud0hBgDzaH3epBkPNBBysUbAtgsoiR6TswA5Mzg5pmyfqpqnFTgP8lKvvTkPovZWoYs45HoQ_bbb1e5g7ZIgV772eb82R70JXZ6ew3mBZGW8J4cZCOAa_y9gdySkgOGdNg-NUXjlK7-xgXYi7KEXiNsyTmea2FuKhjKE1sPw1jds2HUwcpvppI1XxHZE"
                  className="
                    relative
                    mt-4
                    w-fit

                    font-briceThin
                    text-sm
                    text-[#c6e58a]

                    transition-all
                    duration-300

                    hover:text-white

                    after:absolute
                    after:bottom-0
                    after:left-0
                    after:h-[1px]
                    after:w-0
                    after:bg-[#c6e58a]
                    after:transition-all
                    after:duration-300

                    hover:after:w-full
                  "
                >
                  See Case Study
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Section