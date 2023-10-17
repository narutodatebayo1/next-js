import "./about.css"

import Image from "next/image"
import { passionOne, radioCanada } from "../fonts"


export default function About(){
    return (
        <>
            <header>
                <Image src="/images/others/aboutHeader.png" alt="" width={500} height={500} priority />
            </header>

            <div className="space"></div>
            
            <section>
                <div className={passionOne.className} id="sectionTitle">ABOUT INNOVATION</div>
                <div className={radioCanada.className} id="sectionText">
                    <p>
                        PT. INDOTEK PUSAKA NUSANTARA mulai di perkenalkan pada tahun 2018. 
                        Kami menawarkan dan menyediakan produk-produk yang inovatif, dapat 
                        diandalkan, berkualitas, juga memiliki kinerja yang baik serta desain 
                        yang inovatif dan elegan.
                    </p>
                    <p>
                        Kami adalah Distributor Resmi dari berbagai macam jenis Brand part 
                        komputer yang cocok digunakan pada setiap PC desktop ataupun Laptop. 
                        Adapun jenis Brand nya yaitu PNY, ICONIX, INNOVATION, KLEVV dan BITFENIX.
                    </p>
                    <p>
                        Kami juga menyediakan produk-produk berkualitas baik dengan layanan purna 
                        jual yang penuh perhatian dan dukungan bagi pelanggan untuk memastikan 
                        komunikasi yang lancar diantara distributor, penjual, dan pelanggan.
                    </p>
                    <p>
                        Dengan sumber daya yang berlimpah, PT. INDOTEK PUSAKA NUSANTARA mampu 
                        memproduksi part-part komputer dengan kuantitas besar dan kualitas 
                        terbaik sehingga semua kalangan dapat memiliki part komputer berkualitas 
                        tinggi dengan harga yang terjangkau.
                    </p>
                </div>
            </section>

            <div className="space"></div>

            <div className={passionOne.className} id="vissionMission">
                <div id="vission">
                    <div className="vissionMissionTitle">
                        <Image src="/images/others/vission.png" alt="" width={100} height={100} />
                        VISI
                    </div>
                    <div className="vissionMissionText">
                        VISI kami adalah menjadi inovasi bagi kehidupan
                        sehari-hari dan juga sebagai aktualisasi kreativitas 
                        yang dapat mengejutkan pengguna.
                    </div>
                </div>
                <div id="mission">
                    <div className="vissionMissionTitle">
                        MISI
                        <Image src="/images/others/mission.png" alt="" width={100} height={100} />
                    </div>
                    <div className="vissionMissionText">
                        MISI kami adalah membantu pelanggan meningkatkan 
                        daya saing mereka dengan menyediakan layanan 
                        berdasarkan akumulasi pengalaman kami dibidang IT.
                    </div>
                </div>
            </div>

            <div className="space"></div>


        </>
    )
}