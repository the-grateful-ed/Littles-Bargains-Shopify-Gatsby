import React from "react"
import { navigate } from "gatsby-link"
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import { StaticImage } from "gatsby-plugin-image"

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: AnnotationIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatAlt2Icon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
]
const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Example() {
  return (
    <div className="bg-white">
      <main>
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <StaticImage
                    className="h-full w-full object-cover"
                    src="../images/hero-image.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-purple-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-8 lg:py-10 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      Light up the great outdoors with
                    </span>
                    <span className="block text-purple-200">
                      our durable and powerful LED knit caps.
                    </span>
                  </h1>
                  {/* <p className="mt-6 max-w-lg mx-auto text-center text-xl text-purple-200 sm:max-w-3xl">
                    Our LED Beanies and knit caps are the perfect accessory for
                    any winter adventure. With a bright and vibrant LED light
                    built into the cap, and optional Bluetooth headphone
                    connectivity built in, you'll never lose your way in the
                    dark again. Shop now and make a statement with our
                    fashionable and functional LED knit caps.
                  </p> */}
                  {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <button
                        onClick={() => navigate("products")}
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-purple-50 sm:px-8"
                      >
                        Explore our Selection
                      </button>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Live demo
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
