import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from '../components/Title'
import Productitem from "../components/Productitem";

function Collection() {
  const { products } = useContext(ShopContext);
  const [showFilter, setshowFilter] = useState(false);
  const [filterPorduct, setFilterProduct] = useState(products)
  const [category, setCategory] = useState([])
  const [subcategory, setsubCategory] = useState([])
  const [selection, setSelection] = useState([])

  const toogleCategory=(e)=>{
    if(category.includes(e.target.value)){
      setCategory(pre=>pre.filter((pres)=>pres !==e.target.value))
    }else{
      setCategory(prev=>[...prev,e.target.value])
    }
  }
  const toogleSubCategory=(e)=>{
    if(subcategory.includes(e.target.value)){
      setsubCategory(pre=>pre.filter((pres)=>pres !==e.target.value))
    }else{
      setsubCategory(prev=>[...prev,e.target.value])
    }
  }

const apply=()=>{
  let copydata=products.slice()
  if(category.length>0){
      copydata=copydata.filter((item)=>category.includes(item.category))
  }
  if(subcategory.length>0){
    copydata=copydata.filter((item)=>subcategory.includes(item.subCategory))
}

  setFilterProduct(copydata)
}
 const Select=()=>{
  let Slecopy=filterPorduct.slice()
  switch(selection){
    case"Low-High":
    setFilterProduct(Slecopy.sort((a,b)=>a.price-b.price))
    break;
    case"High-Low":
    setFilterProduct(Slecopy.sort((a,b)=>b.price-a.price))
    break;
    default:
      apply()
  }
}
useEffect(()=>{
  Select()
},[selection])

useEffect(()=>{
apply()
},[category,subcategory])
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/*filter option*/}
      <div className="min-w-56">
        <p onClick={()=>setshowFilter(!showFilter)} className="my-2 text-xl flex items-center curser-ponter gap-2">
          Filters
          <img className={`sm:hidden h-3 ${showFilter?'rotate-90':''} `} src={assets.dropdown_icon} alt="" />
        </p>

        {/**category */}
        <div
          className={`border flex-col boder-gray-700 py-3 pl-5 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:flex`}
        >
          <p className="mb-3 text-sm font-medium">Categorys</p>
          <div className="flex flex-col gap-2 text-gray-700 text-sm font-light ">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={toogleCategory} value={"Men"} />
              Men
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={toogleCategory} value={"Women"} />
              Women
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={toogleCategory} value={"Kids"} />
              Kids
            </p>
          </div>
        </div>
        {/**sub-category */}
        <div
          className={`border flex-col boder-gray-700 py-3 pl-5 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:flex`}
        >
          <p className="mb-3 text-sm font-medium">Types</p>
          <div className="flex flex-col gap-2 text-gray-700 text-sm font-light ">
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={toogleSubCategory} value={"Topwear"} />
              Topwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={toogleSubCategory} value={"Bottomwear"} />
              Buttomwear
            </p>
            <p className="flex gap-2">
              <input className="w-3" type="checkbox" onChange={toogleSubCategory} value={"Winterwear"} />
              Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* {right} */}
      <div className="flex-1">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-4">
          <Title tit={'All'} tit2={'Collection'}/>
          {/*selection */}
          <select className="border-2 boder-gray-700 text-sm px-2" onChange={(e)=>setSelection(e.target.value)}>
            <option value="relavent">sort by:Relavent</option>
            <option value="Low-High">sort by:Low To High</option>
            <option value="High-Low">sort by:Hight To Low</option>
          </select>
        </div>
        {/*map product */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {filterPorduct.map((products)=><Productitem key={products._id} products={products}/>)}
        </div>
      </div>
    </div>
  );
}

export default Collection;
