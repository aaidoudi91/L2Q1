import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/navbar";
import SlideWrapper from "@/components/slideswrapper";
import Image from "next/image";
import Cart from "@/components/cart";

export default function Home() {
  return(
  <MaxWidthWrapper>
    <div className="justify-center items-center m-auto bg-transparent">

      
      <div className="ml-[19.6vw] md:ml-[19.6vw] xl:ml-[20.6vw] 2xl:ml-[18.6vw] absolute text-lg z-50 w-[58.7599vw] h-[60vh] items-center justify-center align-middle  rounded-lg"> {/*bg-gradient-to-r from-sky-500/30 from-10% via-lime-400/20 via-35% to-teal-500/30 to-90%*/}
      {/* Div en position absolute pour pouvoir superposer le texte par dessus le SlideWrapper */}
        <h1 className="absolute z-49 mt-[20vh] text-white sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-center bg-transparent ml-[12.5vw] italic [text-shadow:_0_1.5px_0_rgb(0_0_170_/_80%)]">L'avenir se décide maintenant,</h1>
      </div>
      <SlideWrapper/>

      
      <p className="mt-10 relative ml-[46.5vw] items-center justify-center align-middle">Hello Wordl</p>
      
    </div>
  </MaxWidthWrapper>
  )
}
