import "./page.css"

import Image from "next/image"
import { firaSansExtraCondensed, passionOne } from "@/app/fonts"
import { driversMotherboard } from "../../drivers"

export default function Drivers() {

    return (
        <div className="outerDiv">
            <div>
                <div className={passionOne.className} id="motherboardTitle">DRIVERS MOTHERBOARD</div>
                <div className={passionOne.className} id="motherboardNotFound">Not Found</div>
                <div id="motherboardContainer">
                    {driversMotherboard.map((motherboard, id) => {
                        return (
                            <div className="motherboardList" key={id}>
                                <div className="motherboardImage">
                                    <Image src={motherboard.image} alt="" width={500} height={500} />
                                </div>
                                <div className="motherboardText">
                                    <div className="motherboardName"><p className={firaSansExtraCondensed.className}>{motherboard.name}</p></div>
                                    <div className="motherboardLink"><a className={firaSansExtraCondensed.className} href={motherboard.link} download>Link Download</a></div>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}