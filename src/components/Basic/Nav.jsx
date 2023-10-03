import Menu from "./MenuApi"

const Nav = ({filterItem, setMenuData, uniqueCategory}) => {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="btn-group">
            {uniqueCategory.map((category, index)=>{
              return(
                  <button 
                  key={index}
                  className="btn-group__item" 
                  onClick={()=> filterItem(category)}>
                    {category}
                  </button>
              )
            })}
           
            {/* <button className="btn-group__item" onClick={()=>filterItem('lunch')}>Lunch</button>
            <button className="btn-group__item" onClick={()=>filterItem('evening')}>Evening</button>
            <button className="btn-group__item" onClick={()=>filterItem('dinner')}>Dinner</button>
            <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All</button> */}
            
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav