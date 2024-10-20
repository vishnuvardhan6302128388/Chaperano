import React,{useState} from "react"

import EachPlantCard from "../EachPlantCard"

import "./index.css"

const Pagination =props=>{
    const [currentPage,setCurrentPage]=useState(1)
    const [itemsPerPage,setItemsPerPage] =useState(18)
    
    const {plantsImagesList} =props

    const lastItemIndex=currentPage*itemsPerPage
    const firstItemIndex =lastItemIndex-itemsPerPage
    const thisPageItems = plantsImagesList.slice(firstItemIndex,lastItemIndex)

    const pages=[]

    for(let i=1; i< plantsImagesList.length/3 ; i++ ){
        pages.push(i)
    }


    return (
          <div className="pagination-container">
          <ul className="plant-product-container3">
            {
                thisPageItems.map((each,index)=>{
                    return <EachPlantCard key={each.pid} itemDetails={each}/>
                })
            }</ul>
            

            <nav className="nav-con">
                {
                    pages.map((page,index)=>{
                        return (<button key={index} onClick={()=>setCurrentPage(page)} className="active-btn active">{page}</button>
                        )
                    })
                }
            </nav>
            </div>
    )
}

export default Pagination