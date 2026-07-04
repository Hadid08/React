import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='p-10 py-5 flex justify-between items-center h-[85vh] gap-5'>
      <LeftContent />
      <RightContent  users={props.users}/>
    </div>
  )
}

export default Page1Content
