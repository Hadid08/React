import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id="right" className='h-full w-2/3 flex flex-nowrap overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem, index){
        return <RightCard key={index} id={index} img={elem.img} tag={elem.tag} color={elem.color} icon={elem.icon} c={props.c}/>;
      })}
    </div>
  )
}

export default RightContent
