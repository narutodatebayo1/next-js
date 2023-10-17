"use client"

import "./id.css"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { getOneCategory } from "../../../product"

import { firaSansExtraCondensed, passionOne, radioCanada } from "@/app/fonts"

export default function ProductId() {

    const params = useParams()

    const oneCategory = getOneCategory(params.category)

    const productOnPage = oneCategory.products[params.id - 1]

    return (
        <div className="outerDiv">
            <div>

                <div id="productLogoImageName">
                    <div id="productLogoImage">
                        <Image src={productOnPage.logo} id="productLogo"
                            alt="" width={100} height={100} />
                        <Image src={productOnPage.image} id="productImage"
                            alt="" width={100} height={100} />
                    </div>
                    <div id="productName">
                        <p className={firaSansExtraCondensed.className}>{productOnPage.name}</p>
                        <div>
                            <p className={passionOne.className}>Buy Here:</p>
                            <div>
                                <Link href={productOnPage.shopee} target="_blank">
                                    <Image src="/images/toko_online/shopee.png"
                                        alt="" width={100} height={100} />
                                </Link>
                                <Link href={productOnPage.tokopedia} target="_blank">
                                    <Image src="/images/toko_online/tokopedia.png"
                                        alt="" width={100} height={100} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="detailAndRecommend">
                    <p className={firaSansExtraCondensed.className}>Detail Produk</p>
                    <div id="detailList">
                        <p className={firaSansExtraCondensed.className}>Kategori: {productOnPage.category[1]}</p>
                        <p className={firaSansExtraCondensed.className}>Brand: {productOnPage.brand}</p>
                    </div>
                </div>


                <div className="detailAndRecommend">
                    <p className={firaSansExtraCondensed.className}>Rekomendasi Produk</p>
                    <div id="recommendProductContainer">
                        {oneCategory.products.map((product, id) => {
                            if (id + 1 !== parseInt(params.id)) {
                                return (
                                    <div key={id}>
                                        <Link href={`/product/${product.category[0]}/${id + 1}`}
                                            className="link">
                                            <div className="oneCategoryProductImage">
                                                <Image src={product.image} alt=""
                                                    width={100} height={100} />
                                            </div>
                                            <div className="oneCategoryProductName">
                                                <p className={firaSansExtraCondensed.className}>
                                                    {product.name}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}