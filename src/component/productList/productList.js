import { firaSansExtraCondensed, radioCanada } from "@/app/fonts"
import Link from "next/link"
import Image from "next/image"
import "./productList.css"
import { useState } from "react"
import { usePathname } from "next/navigation"

export default function ProductList(props){

    const oneCategory = props.oneCategory
    const pathname = usePathname()

    const [dummyVar, SetDummyVar] = useState(0)

    let sortedProduct = oneCategory.products

    const radioValueChange = (event) => {

        if(event.target.value === "ascending"){
             
            sortedProduct.sort((a, b) => {
                if (a.name < b.name){
                    return -1;
                }
                if (a.name > b.name){
                    return 1;
                }
                return 0;
            })

        } else if(event.target.value === "descending"){
            
            sortedProduct.sort((a, b) => {
                if (a.name < b.name){
                    return 1;
                }
                if (a.name > b.name){
                    return -1;
                }
                return 0;
            })

        }

        SetDummyVar(!dummyVar)

    }

    return (
        <div className="outerDiv">
            <div>
                <div id="sortProduct">

                    <div className={radioCanada.className} id="sort">
                        <div id="sortTitle">Sort By</div>
                        <div id="sortDefault">Sort by default</div>
                        <div id="sortList">
                            <div>
                                <input type="radio" name="sort_type" 
                                id="ascending" value="ascending" 
                                onChange={radioValueChange}/>
                                <label htmlFor="ascending">Ascending</label>
                            </div>
                            <div>
                                <input type="radio" name="sort_type" 
                                id="descending" value="descending" 
                                onChange={radioValueChange}/>
                                <label htmlFor="descending">Descending</label>
                            </div>
                            <div>
                                <input type="radio" name="sort_type" 
                                id="latest" value="latest" 
                                onChange={radioValueChange}/>
                                <label htmlFor="latest">Latest</label>
                            </div>
                            <div>
                                <input type="radio" name="sort_type" 
                                id="oldest" value="oldest" 
                                onChange={radioValueChange}/>
                                <label htmlFor="oldest">Oldest</label>
                            </div>
                            <div>
                                <input type="radio" name="sort_type" 
                                id="available" value="available" 
                                onChange={radioValueChange}/>
                                <label htmlFor="available">Available</label>
                            </div>
                        </div>
                    </div>

                    <div id="product">

                        <div id="productTitle">Menampilkan {oneCategory.total_product} produk dengan {pathname.substring(0, 7) === "/search" ? "nama" : "kategori"} &quot;{oneCategory.title}&quot;</div>

                        <div className={firaSansExtraCondensed.className} id="productList">
                            {sortedProduct.map((product, id) => {
                                return (
                                    <div key={id}>
                                        <Link href={`/product/${product.category[0]}/${product.id}`} className="link">
                                            <div className="productLogo"><Image src={product.logo} alt="" width={100} height={100} /></div>
                                            <div className="productImage"><Image src={product.image} alt="" width={100} height={100} /></div>
                                            <div className="productName">{product.name}</div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}