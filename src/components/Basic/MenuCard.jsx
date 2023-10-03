/* eslint-disable react/prop-types */

const MenuCard = ({menuData}) => {
  // console.log(menuData)
  return (
   
    <div className="main-div">

        <section className="main-card--container">
              {menuData.map((curE)=>{
                const {id, name, image,  category, description} = curE
            return(
              
            <div className="care-container" key={id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{id}</span>
                <span className="card-author">{category}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description">{description}</span>
                <div className="card-read">Read</div>
              </div>
              <img src={image} alt="images"  className="card-media"/>
              <span className="card-tag subtle">Order Now</span>
            </div>
          </div>
          
            )
          })}

          
        </section>
    </div>
  )
}

export default MenuCard