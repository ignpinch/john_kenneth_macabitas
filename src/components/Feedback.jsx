import React, { useState } from 'react'
import { BiSolidQuoteLeft } from 'react-icons/bi'
import {
  FaAngleLeft,
  FaAngleRight,
  FaExclamationTriangle,
} from 'react-icons/fa'

const Feedback = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Samantha Reyes',
      position: 'Product Manager',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop',
      feedback:
        'Working with Kenneth was a smooth and enjoyable experience. He understands design direction quickly and is able to transform ideas into clean, functional, and visually engaging interfaces.',
    },
    {
      id: 2,
      name: 'Daniel Cruz',
      position: 'Startup Founder',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop',
      feedback:
        'I really appreciated the attention to detail throughout the project. The final design felt modern, polished, and easy to use while still maintaining the personality of our brand.',
    },
    {
      id: 3,
      name: 'Nicole Santos',
      position: 'Marketing Manager',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop',
      feedback:
        'The overall process was organized and collaborative. Every piece of feedback was carefully considered, and the result was a design that looked great while also solving the actual user experience problems.',
    },
    {
      id: 4,
      name: 'Marcus Lee',
      position: 'Creative Director',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop',
      feedback:
        'Kenneth has a strong eye for visual design and usability. What stood out the most was the ability to balance creative direction with functionality without making the experience feel complicated.',
    },
    {
      id: 5,
      name: 'Angela Flores',
      position: 'Project Coordinator',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop',
      feedback:
        'The communication was clear, revisions were handled efficiently, and the final output exceeded what we initially envisioned. The interface feels professional, simple, and thoughtfully designed.',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState('right')
  const [isAnimating, setIsAnimating] = useState(false)

  const handleNext = () => {
    if (isAnimating) return

    setDirection('right')
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      )

      setIsAnimating(false)
    }, 250)
  }

  const handlePrevious = () => {
    if (isAnimating) return

    setDirection('left')
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      )

      setIsAnimating(false)
    }, 250)
  }

  const currentTestimonial = testimonials[currentIndex]

  const bannerText = Array.from({ length: 14 }, (_, index) => (
    <span
      key={index}
      className="
        mx-6
        inline-block
        whitespace-nowrap
        text-sm
        sm:mx-8
        sm:text-base
      "
    >
      testimonials
    </span>
  ))

  return (
    <>
      <section
        className="
          relative
          w-full
          overflow-hidden
          bg-[#1a1a1a]
          py-16
          sm:py-20
          md:py-24
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

        {/* NOTE */}
        <div
          className="
            absolute
            right-0
            top-[17%]
            z-40

            flex
            items-center
            gap-3

            rounded-l-xl

            bg-[#f5f378]

            px-4
            py-3

            shadow-[0_10px_30px_rgba(0,0,0,0.25)]

            sm:max-w-[520px]
            sm:px-5

            md:top-[18%]

            lg:top-[19%]
          "
        >
          <div
            className="
              flex
              h-8
              w-8
              flex-shrink-0
              items-center
              justify-center

              rounded-full

              bg-[#1a1a1a]
            "
          >
            <FaExclamationTriangle
              className="
                text-[12px]
                text-[#f5f378]
              "
            />
          </div>

          <div
            className="
              flex
              min-w-0
              items-center
              gap-3
            "
          >
            <p
              className="
                flex-shrink-0

                font-poppins

                text-[10px]
                font-bold
                uppercase
                tracking-[0.15em]

                text-[#1a1a1a]

                sm:text-[11px]
              "
            >
              Note
            </p>

            <div
              className="
                h-5
                w-px
                flex-shrink-0

                bg-[#1a1a1a]/30
              "
            />

            <p
              className="
                max-w-[240px]

                font-poppins

                text-[9px]
                font-medium
                leading-4

                text-[#1a1a1a]/70

                sm:max-w-[350px]
                sm:text-[10px]
                sm:leading-5
              "
            >
             The feedback shown here is for demonstration purposes, as some actual client feedback is not yet available.
            </p>
          </div>
        </div>

        {/* TOP BANNERS */}
        <div
          className="
            relative
            z-10
            flex
            h-8
            w-[110%]
            -translate-x-[5%]
            rotate-[3deg]
            items-center
            justify-center
            overflow-hidden
            bg-[#c6e58a]
            font-briceRegular
          "
        >
          <div className="flex min-w-max items-center">
            {bannerText}
          </div>
        </div>

        <div
          className="
            relative
            z-10
            -mt-1
            flex
            h-8
            w-[110%]
            -translate-x-[5%]
            rotate-[-2deg]
            items-center
            justify-center
            overflow-hidden
            bg-[#c6e58a]
            font-briceRegular
          "
        >
          <div className="flex min-w-max items-center">
            {bannerText}
          </div>
        </div>

        {/* TESTIMONIAL CONTENT */}
        <div
          className="
            relative
            z-20
            mx-auto
            flex
            min-h-[550px]
            w-full
            max-w-7xl
            flex-col
            items-center
            justify-center
            px-5
            py-16

            sm:px-8
            sm:py-20

            md:min-h-[600px]
            md:px-12

            lg:px-20

            xl:py-[10vh]
          "
        >
          {/* QUOTE ICON */}
          <BiSolidQuoteLeft
            className="
              mb-8
              h-auto
              w-16
              text-[#c588d1]

              sm:w-20
              md:w-24
            "
          />

          {/* ANIMATED TESTIMONIAL */}
          <div
            className={`
              flex
              w-full
              max-w-5xl
              flex-col
              items-center
              text-center

              transition-all
              duration-300
              ease-out

              ${
                isAnimating && direction === 'right'
                  ? '-translate-x-10 opacity-0'
                  : ''
              }

              ${
                isAnimating && direction === 'left'
                  ? 'translate-x-10 opacity-0'
                  : ''
              }

              ${!isAnimating ? 'translate-x-0 opacity-100' : ''}
            `}
          >
            {/* FEEDBACK */}
            <p
              className="
                font-inter
                text-[22px]
                font-light
                leading-[1.6]
                text-white

                sm:text-2xl
                sm:leading-[1.6]

                md:text-[28px]

                lg:text-[32px]
                lg:leading-[1.55]

                xl:text-[36px]
              "
            >
              “{currentTestimonial.feedback}”
            </p>

            {/* USER */}
            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-4

                sm:flex-row
                sm:gap-0
              "
            >
              <div
                className="
                  flex
                  items-center
                  border-white/30

                  sm:border-r
                  sm:pr-6
                "
              >
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="
                    h-12
                    w-12
                    rounded-full
                    object-cover

                    sm:h-14
                    sm:w-14
                  "
                />

                <div className="ml-4 text-left">
                  <h1
                    className="
                      font-inter
                      text-sm
                      font-semibold
                      text-white

                      sm:text-base
                    "
                  >
                    {currentTestimonial.name}
                  </h1>

                  <p
                    className="
                      mt-1
                      font-inter
                      text-xs
                      text-white/40

                      sm:hidden
                    "
                  >
                    {currentTestimonial.position}
                  </p>
                </div>
              </div>

              <p
                className="
                  hidden
                  font-inter
                  text-sm
                  font-light
                  text-[#8b8b8d]

                  sm:ml-6
                  sm:block

                  md:text-base
                "
              >
                {currentTestimonial.position}
              </p>
            </div>

            {/* NUMBER INDICATOR */}
            <div
              className="
                mt-8
                font-poppins
                text-xs
                tracking-[0.25em]
                text-white/30
              "
            >
              {String(currentIndex + 1).padStart(2, '0')}
              <span className="mx-2">/</span>
              {String(testimonials.length).padStart(2, '0')}
            </div>
          </div>

          {/* NAVIGATION */}
          <div
            className="
              mt-10
              flex
              items-center
              justify-center
              gap-4
            "
          >
            {/* PREVIOUS */}
            <button
              type="button"
              onClick={handlePrevious}
              aria-label="Previous testimonial"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#f5f378]/40
                bg-transparent
                transition-all
                duration-300

                hover:scale-110
                hover:border-[#f5f378]
                hover:bg-[#f5f378]
              "
            >
              <FaAngleLeft
                className="
                  h-auto
                  w-5
                  text-[#f5f378]
                  transition-colors
                  duration-300

                  group-hover:text-[#1a1a1a]
                "
              />
            </button>

            {/* DOTS */}
            <div className="flex items-center gap-2 px-3">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => {
                    if (index === currentIndex) return

                    setDirection(index > currentIndex ? 'right' : 'left')
                    setIsAnimating(true)

                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsAnimating(false)
                    }, 250)
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`
                    h-2
                    rounded-full
                    transition-all
                    duration-300

                    ${
                      index === currentIndex
                        ? 'w-7 bg-[#f5f378]'
                        : 'w-2 bg-white/20 hover:bg-white/50'
                    }
                  `}
                />
              ))}
            </div>

            {/* NEXT */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next testimonial"
              className="
                group
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-[#f5f378]/40
                bg-transparent
                transition-all
                duration-300

                hover:scale-110
                hover:border-[#f5f378]
                hover:bg-[#f5f378]
              "
            >
              <FaAngleRight
                className="
                  h-auto
                  w-5
                  text-[#f5f378]
                  transition-colors
                  duration-300

                  group-hover:text-[#1a1a1a]
                "
              />
            </button>
          </div>
        </div>

        {/* BOTTOM BANNERS */}
        <div
          className="
            relative
            z-10
            flex
            h-8
            w-[110%]
            -translate-x-[5%]
            rotate-[-2deg]
            items-center
            justify-center
            overflow-hidden
            bg-[#c6e58a]
            font-briceRegular
          "
        >
          <div className="flex min-w-max items-center">
            {bannerText}
          </div>
        </div>

        <div
          className="
            relative
            z-10
            -mt-1
            flex
            h-8
            w-[110%]
            -translate-x-[5%]
            rotate-[3deg]
            items-center
            justify-center
            overflow-hidden
            bg-[#c6e58a]
            font-briceRegular
          "
        >
          <div className="flex min-w-max items-center">
            {bannerText}
          </div>
        </div>
      </section>
    </>
  )
}

export default Feedback