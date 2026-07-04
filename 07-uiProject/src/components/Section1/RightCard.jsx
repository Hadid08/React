import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 overflow-hidden relative w-70 p-3'>
      <img className='h-full w-full object-cover rounded-4xl' src={props.img} alt="This is the Card Image." />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} icon={props.icon} c={props.c}/>
    </div>
  )
}

export default RightCard
