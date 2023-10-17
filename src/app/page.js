"use client"

import "./home.css"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { passionOne } from "./fonts"



export default function Home() {




    const router = useRouter()



    return (
        <div>

            <header id="homeHeader">
                <Image src="/images/others/homeHeader.png" alt="" width={2000} height={2000} priority />
            </header>





            <div className="space"></div>

            <div className={passionOne.className}>

                <div id="toko">
                    <div className="tokoPartnerTitle">
                        <div>ONLINE SHOP & SOCIAL MEDIA</div>
                    </div>
                    <div className="temp">
                        <div className="imageContainer">
                            <Link href="https://shope.ee/2AmnoGgdqT" target="_blank" className="link">
                                <Image src="/images/toko_online/shopee.png" alt="" width={1000} height={1000} />
                            </Link>
                            <Link href="https://www.tokopedia.com/innovationidn" target="_blank" className="link">
                                <Image src="/images/toko_online/tokopedia.png" alt="" width={1000} height={1000} />
                            </Link>
                            <Link href="https://www.instagram.com/innovation_jkt/" target="_blank" className="link">
                                <Image src="/images/toko_online/instagram.jpg" alt="" width={1000} height={1000} />
                            </Link>
                            <Link href="https://www.facebook.com/innovationjakarta?mibextid=ZbWKwL" target="_blank" className="link">
                                <Image src="/images/toko_online/facebook.png" alt="" width={1000} height={1000} />
                            </Link>
                            <Link href="https://www.tiktok.com/@pnyindonesiaofficial" target="_blank" className="link">
                                <Image src="/images/toko_online/tiktok.png" alt="" width={1000} height={1000} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div id="partner">
                    <div className="tokoPartnerTitle">
                        <div>PARTNER BRANDS</div>
                    </div>
                    <div className="temp">
                        <div className="imageContainer">
                            <Link href="/" scroll={false}  className="link"><Image src="/images/logo/rapoo.png" alt="" width={1000} height={1000} /></Link>
                            <Link href="/" scroll={false}  className="link"><Image src="/images/logo/manli.png" alt="" width={1000} height={1000} /></Link>
                            <Link href="/" scroll={false}  className="link"><Image src="/images/logo/pny.png" alt="" width={1000} height={1000} /></Link>
                            <Link href="/" scroll={false}  className="link"><Image src="/images/logo/iconix.jpg" alt="" width={1000} height={1000} /></Link>
                            <Link href="/" scroll={false}  className="link"><Image src="/images/logo/innovation.jpg" alt="" width={1000} height={1000} /></Link>
                        </div>
                    </div>
                </div>

                {/* <div id="partner">
                    <div className="partnerTokoTitle">PARTNER BRANDS</div>
                    <div className="partnerTokoImg">
                        <a><Image src="/images/logo/arktek.png" alt="" width={1000} height={1000} /></a>
                        <a><Image src="/images/logo/manli.png" alt="" width={1000} height={1000} /></a>
                        <a><Image src="/images/logo/pny.png" alt="" width={1000} height={1000} /></a>
                        <a><Image src="/images/logo/iconix.jpg" alt="" width={1000} height={1000} /></a>
                    </div>
                </div>
                <div id="toko">
                    <div className="partnerTokoTitle">ONLINE SHOP & SOCIAL MEDIA</div>
                    <div className="partnerTokoImg">
                        <a href="https://shope.ee/2AmnoGgdqT" target="_blank">
                            <Image src="/images/toko_online/shopee.png" alt="" width={100} height={100} />
                        </a>
                        <a href="https://www.tokopedia.com/innovationidn" target="_blank">
                            <Image src="/images/toko_online/tokopedia.png" alt="" width={100} height={100} />
                        </a>
                        <a href="https://www.instagram.com/innovation_jkt/" target="_blank">
                            <Image src="/images/toko_online/instagram.jpg" alt="" width={100} height={100} />
                        </a>
                        <a href="https://www.facebook.com/innovationjakarta?mibextid=ZbWKwL" target="_blank">
                            <Image src="/images/toko_online/facebook.png" alt="" width={100} height={100} />
                        </a>
                    </div>
                </div> */}
            </div>

            <div className="space"></div>

            <div className={passionOne.className}>
                <div id="kategoriTitle">PRODUCT CATEGORY</div>
                {/* <div id="kategoriContent">
                    <div id="leftCategory">
                        <div>
                            <a href="product/vga" className="kategoriImgContainer"><Image src="/images/kategori/vga.png" alt="" width={500} height={500} /></a>
                            GRAPHICS CARD
                        </div>
                        <div>
                            <a href="product/mini_pc" className="kategoriImgContainer"><Image src="/images/kategori/mini_pc.png" alt="" width={500} height={500} /></a>
                            MINI - PC
                        </div>
                        <div>
                            <a href="product/storage" className="kategoriImgContainer"><Image src="/images/kategori/storage.png" alt="" width={500} height={500} /></a>
                            STORAGE
                        </div>
                    </div>
                    <div id="rightCategory">
                        <div>
                            <a href="product/psu" className="kategoriImgContainer"><Image src="/images/kategori/psu.png" alt="" width={500} height={500} /></a>
                            POWER SUPPLY
                        </div>
                        <div>
                            <a href="product/ram" className="kategoriImgContainer"><Image src="/images/kategori/ram.png" alt="" width={500} height={500} /></a>
                            MEMORY
                        </div>
                        <div>
                            <a href="product/motherboard" className="kategoriImgContainer"><Image src="/images/kategori/motherboard.png" alt="" width={500} height={500} /></a>
                            MOTHERBOARD
                        </div>
                    </div>
                </div> */}
                <div id="categoryList">
                    <div id="topCategory">
                        <div>
                            <a href="product/vga" className="kategoriImgContainer"><Image src="/images/kategori/vga.png" alt="" width={500} height={500} /></a>
                            <div>GRAPHICS CARD</div>
                        </div>
                        <div>
                            <a href="product/mini_pc" className="kategoriImgContainer"><Image src="/images/kategori/mini_pc.png" alt="" width={500} height={500} /></a>
                            <div>MINI - PC</div>
                        </div>
                        <div>
                            <a href="product/storage" className="kategoriImgContainer"><Image src="/images/kategori/storage.png" alt="" width={500} height={500} /></a>
                            <div>STORAGE</div>
                        </div>
                    </div>
                    <div id="bottomCategory">
                        <div>
                            <a href="product/psu" className="kategoriImgContainer"><Image src="/images/kategori/psu.png" alt="" width={500} height={500} /></a>
                            <div>POWER SUPPLY</div>
                        </div>
                        <div>
                            <a href="product/ram" className="kategoriImgContainer"><Image src="/images/kategori/ram.png" alt="" width={500} height={500} /></a>
                            <div>MEMORY</div>
                        </div>
                        <div>
                            <a href="product/motherboard" className="kategoriImgContainer"><Image src="/images/kategori/motherboard.png" alt="" width={500} height={500} /></a>
                            <div>MEMORY</div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="space"></div>

            <div className={passionOne.className} id="about">
                <div id="aboutTitle">
                    ABOUT US
                </div>
                <div id="aboutTextAndImg">
                    <div id="aboutText">
                        PT. INDOTEK PUSAKA NUSANTARA mulai di perkenalkan pada tahun 2018.
                        Kami adalah Distributor Resmi dari berbagai macam jenis Brand part
                        komputer yang cocok digunakan pada setiap PC desktop ataupun Laptop.
                        <div>
                            <div><Link href="/about" className="link">Read More</Link></div>
                        </div>
                    </div>
                    <Image src="/images/others/aboutHeader.png" alt="" width={300} height={200} />
                </div>
            </div>

            <div className="space"></div>

        </div>
    )
}