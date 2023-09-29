import Announcements from "@modules/home/components/announcements"
import ProductCategories from "@modules/home/components/categories"
import CategoryBrands from "@modules/home/components/category-brands"
import Contact from "@modules/home/components/contact"
import Faq from "@modules/home/components/faq"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import NewProducts from "@modules/home/components/new-products"
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
<<<<<<< HEAD
      <CategoryBrands />
      <Newproducts />
      <ProductCategories/>
=======
      <NewProducts />
      <ProductCategories />
>>>>>>> 94d11fe272f5d311212305d56151a931695116cd
      <Announcements />
      <FeaturedProducts />
      {/* <Faq/>
      <News/> */}
      <NewsLetter />
      {/* <Contact/> */}
    </>
  )
}

export default Home
