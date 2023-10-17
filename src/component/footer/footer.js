import "./footer.css"
import Image from "next/image"
import { firaSansExtraCondensed, poppins } from "@/app/fonts"

export default function Footer(){

    return (
        <footer>
            <div className="footerImg" id="smallScreen">
                <Image src="/images/logo/innovation.png" alt="" width={100} height={100} />
            </div>
            <div className={firaSansExtraCondensed.className} id="address">
                
                <div id="leftText">
                    <div className="boldText">
                        <p>PT. INDOTEK PUSAKA NUSANTARA</p>
                        <p>(Member of Innovation Group)</p>
                        <p>Centennial Tower Lantai 29, Unit D-F</p>
                    </div>
                    <div>
                        <p>JL. Jenderal Gatot Subroto Kavling 24-25</p>
                        <p>Kel. Karet Semanggi, Kec. Setiabudi,</p>
                        <p>Kota Adm. Jakarta Selatan,</p>
                        <p>Prov. DKI Jakarta.</p>
                    </div>
                </div>

                <div className="footerImg" id="largeScreen">
                    <Image src="/images/logo/innovation.png" alt="" width={100} height={100} />
                </div>

                <div id="rightText">
                    <div className="boldText">
                        <p>INNOVATION</p>
                        <p>(Distributor Centre and Service)</p>
                    </div>
                    <div>
                        <p>Mangga Dua Mall Lantai 2 No. 22-A</p>
                        <p>Sawah Besar – Jakarta Pusat</p>
                        <p>Telp : (021) 6231-8828/2268-337</p>
                        <p>Email : admin@innovation-group.co.id</p>
                    </div>
                </div>
            </div>
            <div className={poppins.className} id="copyright">
                Copyright 2018 Innovation Group | All Rights Reserved | Owned by PT. INDOTEK PUSAKA NUSANTARA
            </div>
        </footer>
    )
}