import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const AboutHero = () => {
  return (
    <div className="h-[100vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Build With The Best
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
         Reshaping the African skyline
        </p>
        {/* <UnderlineLink href="/store">Explore products</UnderlineLink> */}
      </div>
      <Image
        src="/about.jpg"
        loading="eager"
        priority={true}
        quality={90}
        alt="eastpark"
        className="absolute inset-0 bg-black/20"
        draggable="false"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  )
}

export default AboutHero
