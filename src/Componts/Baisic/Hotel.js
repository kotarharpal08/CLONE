// import { image } from '@nextui-org/react'
import React, { useState } from 'react'
import Menu from './menuApi';
import MenuCart from './MenuCart';
import Navbar from './Navbar';

const uniquelist = [
 ...new Set( Menu.map((curElem)=>{
    return curElem.Categgory
  })
 ),
 "all",
]
const Hotel = () => {
  const[menuData,setMenuData]= useState(Menu);
  const[menulist,setMenulist]= useState(uniquelist);
  const filterItem =(Categgory)=>{

    if(Categgory==='all')
    {
      setMenuData(Menu)
      return
    }
    const Updatedlist = Menu.filter((curElem)=>{
      return curElem.Categgory===Categgory;
    });
    setMenuData(Updatedlist);
    setMenulist(uniquelist)

  }
  return (
    <>
    <Navbar filterItem={filterItem} setMenuData={setMenuData} Menu={Menu} menulist={menulist}/>
     <MenuCart menuData={menuData}/>
 
    </>
  )
}

export default Hotel
