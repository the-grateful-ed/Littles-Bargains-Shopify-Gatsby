import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProductCard from "../components/ProductCard"

const Products = ({ data }) => {
	const { nodes } = data.allShopifyProduct

	return (
    <Layout>
			<div className="bg-white">
				<div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 className="text-2xl font-extrabold tracking-tight text-gray-900">Customers also purchased</h2>
					<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
								{nodes?.map((product, index) => (
									<ProductCard key={index} product={product} />
						))}
					</div>
				</div>
			</div>
		</Layout>
  )
}



export default Products

export const query = graphql`
	{
		allShopifyProduct {
			nodes {
				title
				handle
				variants {
        	shopifyId
      	}
				priceRangeV2 {
					maxVariantPrice {
						amount
					}
				}
				description
				images {
					src
				}
			}
		}
	}
`

const Wrapper = styled.div`
	display: grid;
	margin: 40px;
	grid-template-columns: repeat(3, auto);
	justify-content: left;
	gap:40px;
	max-width: 1234px;
`