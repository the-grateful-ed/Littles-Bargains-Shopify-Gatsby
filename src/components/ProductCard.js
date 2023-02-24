import React from "react"
import { navigate } from "gatsby-link"
import styled from "styled-components"
import useStore from "../context/StoreContext"

const ProductCard = ({ product }) => {
  const { addVariantToCart } = useStore()

  return (
    <div key={product.id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={product.images[0]?.src}
          alt={product.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <p
              className="cursor-pointer"
              onClick={() => navigate(`${product.handle}`)}
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 line-clamp-2"
              />
              {product.title}
            </p>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          ${product.priceRangeV2.maxVariantPrice.amount}
        </p>
      </div>
    </div>
  )
}

export default ProductCard
