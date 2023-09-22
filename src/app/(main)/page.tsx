import Announcements from "@modules/home/components/announcements"
import Faq from "@modules/home/components/faq"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Newproducts from "@modules/home/components/new-products"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Micmaronline.",
}

const Home = () => {
  return (
    <>
      <Hero />
      <Newproducts />
      <Announcements />
      <FeaturedProducts />
      <Faq/>
    </>
  )
}

export default Home
