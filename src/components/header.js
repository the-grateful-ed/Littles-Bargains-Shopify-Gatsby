import * as React from "react"
import styled from "styled-components"

import PropTypes from "prop-types"
import { Link } from "gatsby"

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { SearchIcon, ShoppingBagIcon } from "@heroicons/react/outline"
import { StaticImage } from "gatsby-plugin-image"
const navigation = {
  categories: [
    {
      name: "Women",
      clothing: [
        [
          { name: "Tops", href: "#" },
          { name: "Dresses", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Denim", href: "#" },
          { name: "Sweaters", href: "#" },
          { name: "T-Shirts", href: "#" },
        ],
        [
          { name: "Jackets", href: "#" },
          { name: "Activewear", href: "#" },
          { name: "Shorts", href: "#" },
          { name: "Swimwear", href: "#" },
          { name: "Browse All", href: "#" },
        ],
      ],
      accessories: [
        { name: "Shoes", href: "#" },
        { name: "Jewelry", href: "#" },
        { name: "Handbags", href: "#" },
        { name: "Socks", href: "#" },
        { name: "Hats", href: "#" },
        { name: "Browse All", href: "#" },
      ],
      categories: [
        { name: "New Arrivals", href: "#" },
        { name: "Sale", href: "#" },
        { name: "Basic Tees", href: "#" },
        { name: "Artwork Tees", href: "#" },
      ],
    },
    {
      name: "Men",
      clothing: [
        [
          { name: "Dress Shirts", href: "#" },
          { name: "Pants", href: "#" },
          { name: "Jackets", href: "#" },
          { name: "T-Shirts", href: "#" },
          { name: "Jeans", href: "#" },
          { name: "Hoodies", href: "#" },
        ],
        [
          { name: "Vests", href: "#" },
          { name: "Kilts", href: "#" },
          { name: "Outdoors", href: "#" },
          { name: "Capes", href: "#" },
          { name: "Browse All", href: "#" },
        ],
      ],
      accessories: [
        { name: "Watches", href: "#" },
        { name: "Boots", href: "#" },
        { name: "Fanny Packs", href: "#" },
        { name: "Sunglasses", href: "#" },
        { name: "Browse All", href: "#" },
      ],
      categories: [
        { name: "Just Added", href: "#" },
        { name: "Clearance", href: "#" },
        { name: "Graphic Tees", href: "#" },
      ],
    },
  ],
  other: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function Header() {
  return (
    <div className="bg-white">
      <header className="relative bg-white">
        <nav aria-label="Top" className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="border-b border-gray-200 px-4 pb-14 sm:px-0 sm:pb-0">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex">
                <a href="#">
                  <span className="sr-only">Little's Bargains</span>
                  <StaticImage
                    width={280}
                    height={150}
                    src="../images/logo.png"
                    alt="Logo"
                    className="my-4"
                  />
                </a>
              </div>
              <div className="flex-1 flex items-center justify-end">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <SearchIcon className="w-6 h-6" aria-hidden="true" />
                </a>
                <div className="ml-4 flow-root lg:ml-8">
                  <a href="#" className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      0
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
