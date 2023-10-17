import "./drivers.css"
import Image from "next/image";
import { passionOne } from "../fonts";
import Link from "next/link";

export default function Drivers(){

    return (
        <div className="outerDiv">
            <div className={passionOne.className}>
                <div id="driversTitle">PRODUCT CATEGORY</div>
                <div id="notFound">Not Found</div>
                <div id="driversCategory">
                    <div>
                        <Link href="/drivers/vga">
                            <div><Image src="/images/drivers/vga/vga1.png" alt="" width={100} height={100} /></div>
                        </Link>
                        VGA
                    </div>
                    <div>
                        <Link href="/drivers/motherboard">
                            <div><Image src="/images/drivers/motherboard/motherboard1.png" alt="" width={100} height={100} /></div>
                        </Link>
                        MOTHERBOARD
                    </div>
                </div>
            </div>
        </div>
    )
}