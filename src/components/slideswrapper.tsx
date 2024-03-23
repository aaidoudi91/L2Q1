import Image from "next/image";

export default function SlideWrapper(){
    return(
        <div className="relative ml-[19.6vw] mt-[10vh] flex w-[58.7599vw] h-[60vh]  items-center justify-center rounded-lg bg-gradient-to-r from-sky-500/30 from-10% via-lime-400/20 via-35% to-teal-500/30 to-90%">
            <div className="relative h-full w-1/3 items-center justify-center opacity-80 text-center rounded-l-lg overflow-hidden">
                <Image src="/wrap-right.jpg" objectFit="cover"  fill alt="test"/>
            </div>
            <div className="relative h-full w-1/3 items-center justify-center opacity-80 text-center overflow-hidden">
                <Image src="/wrap-middle.jpg" objectFit="cover" fill alt="test"/>
            </div>
            <div className="relative h-full w-1/3 items-center justify-center opacity-80 text-center rounded-r-lg overflow-hidden">
                <Image src="/wrap-left.jpg" objectFit="cover" fill alt="test"/>
            </div>
        </div>
    );
}