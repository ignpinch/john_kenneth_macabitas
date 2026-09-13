import React from 'react'
import project1 from '../assets/KopiWebsite.png'
import project2 from '../assets/SacredHeart.png'
import project3 from '../assets/LibraryManagement.png'
import project4 from '../assets/StudentManagement.png'

function Systems() {
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

        {/* WEBSITE PROJECTS SECTION */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            flex-col
            items-center

            px-5
            pt-8
            pb-20

            sm:px-8
            sm:pt-8
            sm:pb-24

            md:px-10
            md:pt-5
            md:pb-28

            lg:px-12
            lg:pt-5
            lg:pb-32

            xl:px-16
            xl:pt-8
            xl:pb-40
          "
        >

          {/* SECTION TITLE */}
          <div
            className="
              z-10
              w-full
              max-w-6xl
              text-center

              sm:text-right
            "
          >
            <h1
              className="
                my-5
                font-briceRegular
                text-5xl
                font-bold
                leading-[0.9]
                text-[#c588d1]

                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                xl:text-9xl
              "
            >
              WEBSITE
              <br />

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

              PROJECTS
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
            {/* PROJECT 1 - KOPIMED */}
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
                  alt="Kopimed Website"
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

              {/* HOVER OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  flex
                  flex-col
                  justify-end

                  translate-y-full
                  opacity-0

                  rounded-2xl

                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent

                  px-6
                  pb-6

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
              </div>

            </div>


            {/* ================================================= */}
            {/* PROJECT 2 - DATA MANAGEMENT */}
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
                  alt="Student Data Management System"
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

              {/* HOVER OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  flex
                  flex-col
                  justify-end

                  translate-y-full
                  opacity-0

                  rounded-2xl

                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent

                  px-6
                  pb-6

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
                  DATA MANAGEMENT
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
                  It's a Student Data Management System for all
                  the students of Rizal Technological University.
                </p>
              </div>

            </div>


            {/* ================================================= */}
            {/* PROJECT 3 - LIBRARY SYSTEM */}
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
                  alt="Library Management System"
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

              {/* HOVER OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  flex
                  flex-col
                  justify-end

                  translate-y-full
                  opacity-0

                  rounded-2xl

                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent

                  px-6
                  pb-6

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
                  LIBRARY SYSTEM
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
                  ChronoLib: A Library Management System for the
                  students of Rizal Technological University.
                </p>
              </div>

            </div>


            {/* ================================================= */}
            {/* PROJECT 4 - SCHEDULING SYSTEM */}
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
                  alt="Sacred Heart Scheduling System"
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

              {/* HOVER OVERLAY */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0

                  flex
                  flex-col
                  justify-end

                  translate-y-full
                  opacity-0

                  rounded-2xl

                  bg-gradient-to-t
                  from-black/90
                  via-black/40
                  to-transparent

                  px-6
                  pb-6

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
                  SCHEDULING SYSTEM
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
                  It's a Scheduling Management System for the
                  church of Sacred Heart of Jesus.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Systems