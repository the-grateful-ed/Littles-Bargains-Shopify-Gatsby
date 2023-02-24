import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export function MainProduct() {
  return (
    <div className="bg-purple-50">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="mt-4 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="border-2 w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <StaticImage
                  src="../images/bluetooth-led-beanie.jpg"
                  alt="Drawstring top with elastic loop closure and textured interior padding."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                The 20L model has enough space for 370 candy bars, 6 cylinders
                of chips, 1220 standard gumballs, or any combination of
                on-the-go treats that your heart desires. Yes, we did the math.
              </p>
            </div>
            <div>
              <div className="border-2 w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <StaticImage
                  src="../images/led-beanie.bmp"
                  alt="Front zipper pouch with included key ring."
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                Up your snack organization game with multiple compartment
                options. The quick-access stash pouch is ready for even the most
                unexpected snack attacks and sharing needs.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
