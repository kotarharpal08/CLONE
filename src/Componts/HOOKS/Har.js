import React, { useState } from 'react'
// import './ST.css';

const Har = () => {
    const [Num,setMyNum] =useState(10);
  return (
  <>
                <div className="center">
                    <p>{Num}</p>
<button type="button" class="btn btn-outline-primary" onClick={()=>setMyNum(Num+1)}>increment</button>
<button type="button" class="btn btn-outline-danger"onClick={()=>Num > 0 ?setMyNum(Num-1):setMyNum(0)}>decriment</button>
<button type="button" class="btn btn-outline-primary" onClick={()=>setMyNum(Num*Num)}>increment</button>
</div>



  </>
  )
}

export default Har
