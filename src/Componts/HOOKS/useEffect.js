import React from 'react'
// import './ST.css';

const useEffect = () => {
    const [Num,setMyNum] =React.useState(10);
  return (
  <>
                <div className="center">
                    <p>{Num}</p>
<button type="button" class="btn btn-outline-primary" onClick={()=>setMyNum(Num+1)}>increment</button>

</div>

  </>
  )
}

export default useEffect
