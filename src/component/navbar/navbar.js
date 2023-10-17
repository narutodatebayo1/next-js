"use client"

import { useRouter } from 'next/navigation'

import "./navbar.css"
import { usePathname, useParams } from 'next/navigation'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { novaRound, poppins } from '@/app/fonts'



export default function NavBar(props){


    const router = useRouter()
    const pathname = usePathname()
    const params = useParams()
    const searchBar = useRef(null);


    useEffect(() => {
        SetClicked(0)
        if(params.query === undefined){
            SetSearchInput("")
        } else {
            SetSearchInput(params.query.replaceAll("_", " "))
        }
    }, [params.query])



    const [clicked, SetClicked] = useState(0)
    const [searchInput, SetSearchInput] = useState("")

    const hamburgerClicked = () => {
        if(clicked === 0) SetClicked(1)
        else SetClicked(0)
    }

    const lensClick = () => {
        const temp = searchInput.replace(" ", "_")
        if(searchInput !== ""){
            router.push(`/search/${searchInput.replaceAll(" ", "_")}`)
        } 
    }

    const enterPress = (event) => {
        const temp = searchInput.replace(" ", "_")
        if(event.key === "Enter" && searchInput !== ""){
            searchBar.current.blur()
            router.push(`/search/${searchInput.replaceAll(" ", "_")}`)
        } 
    }


    return (
        <div id="nav">
            <nav className={pathname === "/" ? "homeNav" : ""}>
                <div>
                    <div id="hamburger" onClick={hamburgerClicked}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>


                    <Image src="/images/logo/innovation.png" alt="" width={100} height={100} onClick={() => router.push("/")} />

                    {pathname === "/" || pathname === "/about" ? <div className={novaRound.className} id="welcomeTextLargeScreen">Welcome to Innovation</div> : <></>}
                    
                    <div id="searchBar">
                        <div onClick={lensClick}>
                            <Image src="/images/others/lens.png" alt="" width={50} height={50} />
                        </div>
                        <input type="text" placeholder="Search" id="searchInput"
                            value={searchInput}
                            onChange={(event) => SetSearchInput(event.target.value)}
                            onKeyDown={enterPress}
                            ref={searchBar}
                         />
                    </div>

                    <div className={poppins.className} id="links">
                        <Link href="/" className='link'>
                            Home
                            {pathname === "/" ? <div id="samePage"></div> : <div id="differentPage"></div>}
                        </Link>
                        <Link href="/product" className='link'>
                            Product
                            {pathname.substring(0, 8) === "/product" ? <div id="samePage"></div> : <div id="differentPage"></div>}
                        </Link>
                        <Link href="/about" className='link'>
                            About Us
                            {pathname === "/about" ? <div id="samePage"></div> : <div id="differentPage"></div>}
                        </Link>
                        <Link href="/drivers" className='link'>
                            Drivers
                            {pathname.substring(0, 8) === "/drivers" ? <div id="samePage"></div> : <div id="differentPage"></div>}
                        </Link>
                    </div>
            
                </div>

                {pathname === "/" || pathname === "/about" ? 
                    <div className={novaRound.className} id="welcomeTextSmallScreen">Welcome to Innovation</div> :
                    <></>}
                
            </nav>

            <div id="darkBackground" className={clicked ? "backgroundClicked" : "backgroundNotClicked"} onClick={() => SetClicked(0)}></div>
            <div id="popUpNav" className={clicked ? "popUpClicked" : "popUpNotClicked"}>
                <div id="closeButton">
                    <div onClick={hamburgerClicked}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className={poppins.className} id="popUpLinks">
                    <Link href="/" className='link'>Home</Link>
                    <Link href="/product" className='link'>Product</Link>
                    <Link href="/about" className='link'>About Us</Link>
                </div>
            </div>
        </div>
    )
}