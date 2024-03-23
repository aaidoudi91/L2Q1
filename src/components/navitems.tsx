"use client"

const NavItems = ({
    name,
    repo
} : {
    name: string
    repo: string
}) => {
    return (
        <a href={`/${repo}`}>
            <div className="hover:text-sky-800 hover:cursor-pointer flex px h-full justify-center px-1 mx-8 font-normal text-lg">{name}</div>
        </a>
    )
}

export default NavItems