"use client"

import "./category.css"

import { useParams } from "next/navigation";
import ProductList from "@/component/productList/productList.js";
import { getOneCategory } from "../../product.js";

export default function CategoryType() {

    const params = useParams()

    const oneCategory = getOneCategory(params.category)

    return (
        // <div>{params.category}</div>
        <ProductList oneCategory={oneCategory} category={params.categoryType} />
    )
}