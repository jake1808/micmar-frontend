import Announcements from "@modules/home/components/announcements"
import ProductCategories from "@modules/home/components/categories"
import Contact from "@modules/home/components/contact"
import Faq from "@modules/home/components/faq"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Newproducts from "@modules/home/components/new-products"
import News from "@modules/home/components/news"
import NewsLetter from "@modules/home/components/news-letter"
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
      <ProductCategories/>
      <Announcements />
      <FeaturedProducts />
      {/* <Faq/>
      <News/> */}
      <NewsLetter/>
      {/* <Contact/> */}
    </>
  )
}

export default Home
