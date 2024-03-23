import { Link } from "lucide-react"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Searchbar } from "./searchbar"
import NavItems from "./navitems"
import SvgComponent from "./searchlogo"
import { Button } from "./ui/button"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Roboto_Flex} from "next/font/google";

const Navbar = () => {
    return(
        <div className="sticky z-50 top-0 inset-x-0 border-b border-gray-200">
            <header className="relative">
                <MaxWidthWrapper className="md:px-0 px-0">
                    <div>
                        <div className="flex h-16 2xl:h-[4.2vw] items-center justify-between">
                            <div className="hidden lg:flex ml-4 ">
                                <Link >
                                    <a href="#" className="opacity-100">
                                        {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" fill="black"/></svg>
                                    </a>
                                </Link>
                            </div>
                            
                            <div className="ml-0 lg:ml-[15vw] xl:ml-80 pr-0 flex items-center z-50 px-10">
                                <NavItems name={"PRODUCT"} repo={"product"} />
                                <NavItems name={"ABOUT US"} repo={"about-us"} />
                                <NavItems name={"CONTACT"} repo={"contact"} />
                                
                            </div>
                            <div className="flex pr-0 items-center justify-between">
                                <Searchbar/>
                                <div className="flex h-16 2xl:h-[4.2vw]  border-l border-gray-200 items-center px-3">
                                    <Button type="submit" className="w-[4.5vh] h-[4.4vh] sm:h-11 sm:w-11" size="default">
                                        {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" fill="white"/></svg>
                                    </Button>
                                </div>
                                <div className="flex h-16 2xl:h-[4.2vw]  border-l border-gray-200 items-center pr-3 pl-3">
                                    <Button type="submit" className="w-[4.5vh] h-[4.4vh] sm:h-11 sm:w-11" size="sm">
                                        {/*Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                                        {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill="white"/></svg>*/}  
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M253.3 35.1c6.1-11.8 1.5-26.3-10.2-32.4s-26.3-1.5-32.4 10.2L117.6 192H32c-17.7 0-32 14.3-32 32s14.3 32 32 32L83.9 463.5C91 492 116.6 512 146 512H430c29.4 0 55-20 62.1-48.5L544 256c17.7 0 32-14.3 32-32s-14.3-32-32-32H458.4L365.3 12.9C359.2 1.2 344.7-3.4 332.9 2.7s-16.3 20.6-10.2 32.4L404.3 192H171.7L253.3 35.1zM192 304v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16zm96-16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16zm128 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V304c0-8.8 7.2-16 16-16s16 7.2 16 16z" fill="white"/></svg>  
                                    </Button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}

export default Navbar