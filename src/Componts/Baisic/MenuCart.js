import React from 'react'

const MenuCart = ({menuData}) => {
    // console.log(menuData)
  return (
   <>
     <section className="main-card--cointainer">
   {menuData.map((curElem)=>{
    const{id,name,description,image}=curElem
    return(
        <>
      
        <div className=' card-container' key={id}>
        <div className="card">
          <div className="card-body">
            <span className='card-number card-circle subtle'>{id}</span>
            <span className='card-author'>{name}</span>
            <h2 className='card-title'>{name}</h2>
            <div className="card-read">Read</div> 
            <span className='description'>{description}</span>
   
          </div>
          <img src={image} alt="images" className="card-media" />
          <span className='card-tag subtle'>Oder Now</span>
     
        </div>
      </div>
      </>
    )
    })}
     </section>

  </>
  )
}

export default MenuCart
