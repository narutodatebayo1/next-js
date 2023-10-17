import "./page.css"

import Image from "next/image"
import { firaSansExtraCondensed, passionOne } from "@/app/fonts"
import { driversVga } from "../../drivers"

export default function Drivers() {

    return (
        <div className="outerDiv">
            <div>
                <div className={passionOne.className} id="vgaTitle">DRIVERS GRAPHICS CARD</div>
                <div className={passionOne.className} id="vgaNotFound">Not Found</div>
                <div id="vgaContainer">
                    {driversVga.map((vga, id) => {
                        return (
                            <div className="vgaList" key={id}>
                                <div className="vgaImage">
                                    <Image src={vga.image} alt="" width={500} height={500} />
                                </div>
                                <div className="vgaText">
                                    <div className="vgaName"><p className={firaSansExtraCondensed.className}>{vga.name}</p></div>
                                    <div className="vgaLink"><a className={firaSansExtraCondensed.className} href={vga.link} download>Link Download</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}