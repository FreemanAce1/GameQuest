import { useState } from 'react'



function Main() {
    const [count, setCount] = useState(0)
  
    return (
      <>
      <div>
        
      <h1>GameName</h1>
        <h3>GameDesc</h3>
        <btn><h3>FindGame</h3></btn>
        <btn><h3>See More</h3></btn>
      </div>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/016/916/479/original/placeholder-icon-design-free-vector.jpg"/>
      </div>
      
      </>
    )
  }
  
  export default Main