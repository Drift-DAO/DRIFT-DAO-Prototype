import React from 'react'
import { useSelector} from 'react-redux'

const MiddleComponent = () => {
  const {leftSide, rightSide} = useSelector((state)=>state.leftRight)
  return (
    <div className="bg-pink-900 mx-2 my-2 rounded-2xl" style={{width:"71vw"}}>
    <div className='text-center my-4'>

      <div>leftside: {leftSide} </div>
      <div>rightside: {rightSide} </div>
    </div>
    </div>
  )
}

export default MiddleComponent