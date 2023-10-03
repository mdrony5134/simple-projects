import { useState } from "react"
import MenuCard from "./MenuCard"
import './css/style.css'
import Menu from './MenuApi.js'
import Nav from "./Nav"

// 
const uniqueCategories = [
  ...new Set(Menu.map((value)=>{
  return value.category
}),  
),
  "All"
]

//  console.log(uniqueCategories)

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu)
  const [uniqueCategory, setUniqueCategory] = useState(uniqueCategories)

  const filterItem = (category) =>{
    if(category === 'All'){
      setMenuData(Menu)
      return;
    }

    const updateList = Menu.filter((currentElement)=>{
      return currentElement.category == category
    })
    setMenuData(updateList)
  }

  return (
    <div>
      <h1 className="heading">Choose Your Best Food</h1>
      <Nav {...{filterItem,   uniqueCategory}}/>
      <MenuCard {...{menuData}}/>
    </div>
  )
}

export default Restaurant