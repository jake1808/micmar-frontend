"use client"
import { useProducts } from "medusa-react"
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

const NewProducts = () => {
  // const { data } = useFeaturedProductsQuery()
  //TODO: REVISIT TO SORT OUT NEW PRODUCTS
  const { products } = useProducts();
   let newProduct= products?.slice(0,4);
  return (
    <div className="py-12   ">
      <div className="content-container py-12">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-base-regular text-gray-600 mb-6">
            Latest products
          </span>
          <p className="text-2xl-regular text-gray-900 max-w-lg mb-4">
            Our new products are ready for you!
          </p>
          <UnderlineLink href="/store">Explore products</UnderlineLink>
        </div>
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {newProduct
            ? newProduct.map((product) => (
              <li key={product.id}>
                <ProductPreview handle={product.handle} id={product.id} thumbnail={'https://plus.unsplash.com/premium_photo-1678283388182-055604c15b00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'} title={product.title} price={product.variants[0].prices[0].amount} />
              </li>
            ))
            : Array.from(Array(4).keys()).map((i) => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default NewProducts
