import "./product.css"

import { passionOne } from "../fonts";
import Link from "next/link";
import Image from "next/image";

export default function Product(){
    return (
        <div className="outerDiv">
            <div className={passionOne.className}>
                <div id="productPageTitle">PRODUCT CATEGORY</div>
                <div id="productPageCategory">
                    <div>
                        <Link href="/product/vga">
                            <div><Image src="/images/kategori/vga.png" alt="" width={100} height={100} /></div>
                        </Link>
                        VGA
                    </div>
                    <div>
                        <Link href="/product/psu">
                            <div><Image src="/images/kategori/psu.png" alt="" width={100} height={100} /></div>
                        </Link>
                        PSU
                    </div>
                    <div>
                        <Link href="/product/mini_pc">
                            <div><Image src="/images/kategori/mini_pc.png" alt="" width={100} height={100} /></div>
                        </Link>
                        MINI - PC
                    </div>
                    <div>
                        <Link href="/product/ram">
                            <div><Image src="/images/kategori/ram.png" alt="" width={100} height={100} /></div>
                        </Link>
                        RAM
                    </div>
                    <div>
                        <Link href="/product/storage">
                            <div><Image src="/images/kategori/storage.png" alt="" width={100} height={100} /></div>
                        </Link>
                        STORAGE
                    </div>
                    <div>
                        <Link href="/product/motherboard">
                            <div><Image src="/images/kategori/motherboard.png" alt="" width={100} height={100} /></div>
                        </Link>
                        MOTHERBOARD
                    </div>
                </div>
                
            </div>
        </div>
    )
}