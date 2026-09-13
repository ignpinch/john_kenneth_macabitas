import React from 'react'

const Loading = () => {
  return (
    <div
      className="
        fixed
        inset-0
        z-[9999]
        flex
        h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#1a1a1a]
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

      {/* LOADING DOTS */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-3
        "
      >
        <span
          className="
            loading-dot
            h-3
            w-3
            rounded-full
            bg-[#f5f378]
          "
        />

        <span
          className="
            loading-dot
            h-3
            w-3
            rounded-full
            bg-[#c588d1]
          "
        />

        <span
          className="
            loading-dot
            h-3
            w-3
            rounded-full
            bg-[#c6e58a]
          "
        />
      </div>

      <style>
        {`
          @keyframes loadingDot {
            0%, 100% {
              opacity: 0.25;
              transform: translateY(0) scale(0.8);
            }

            50% {
              opacity: 1;
              transform: translateY(-8px) scale(1);
            }
          }

          .loading-dot {
            animation: loadingDot 0.8s ease-in-out infinite;
          }

          .loading-dot:nth-child(2) {
            animation-delay: 0.15s;
          }

          .loading-dot:nth-child(3) {
            animation-delay: 0.3s;
          }
        `}
      </style>
    </div>
  )
}

export default Loading