"use client"

import "./search.css"
import { useParams } from "next/navigation"
import { allCategory } from "@/app/product"
import ProductList from "@/component/productList/productList"




export default function Query() {

    const params = useParams()

    let query = params.query.toLowerCase().replaceAll("_", " ")

    const search = (str, search) => {

        const strLowered = str.toLowerCase()
        const searchLength = search.length

        let found = false

        for (let i = 0; i < strLowered.length; i++) {
            if (found === 1) break
            if (strLowered[i] === search[0]) {
                for (let j = 1; j < searchLength; j++) {
                    if (strLowered[i + j] === search[j] && j === searchLength - 1) {
                        found = true;
                        break;
                    } else if (strLowered[i + j] !== search[j]) {
                        break;
                    }
                }
            }
        }

        return found
    }
    let products = []
    let count = 0


    for (let i = 0; i < 6; i++) {

        for (let j = 0; j < allCategory[i].total_product; j++) {
            if (search(allCategory[i].products[j].name, query)) {
                products.push(allCategory[i].products[j])
                count++
            }
        }

    }

    const tempCategory = {
        title: query,
        total_product: count,
        products: products,
    }

    return (
        <ProductList oneCategory={tempCategory} />
    )
}