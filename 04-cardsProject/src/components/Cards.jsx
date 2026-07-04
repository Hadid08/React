import React from 'react'
import apple from '../assets/apple.jpg'
import save from '../assets/save.jpg'

const Cards = (props) => {
  return (
    <div className='card'>

      <header>
        <img src={props.brand} alt="Apple" className='icon1'/>
        <h4>Save <img src={save} alt="Save" className='icon2'/></h4>
      </header>

      <main>
        <div>
        <span className='first'>{props.company}</span>
        <span className='days'>{props.date}</span>
        </div>
        <br />
        <span>{props.post}</span>
        <div id='tags'>
          <span className='tag1'>{props.timeSlot}</span>
          <span className='tag2'>{props.level}</span>
        </div>
      </main>

      <footer>
          <div>
        <div className='price'>{props.pay}</div>
        <div className='location'>{props.Location}</div>
          </div>
          <button>Apply Now</button>
      </footer>
    </div>
  )
}

export default Cards
