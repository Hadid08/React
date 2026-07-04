import React from 'react'
import 'remixicon/fonts/remixicon.css';
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2';

const App = () => {

  const users = [
  {
    img: "https://plus.unsplash.com/premium_photo-1670282393309-70fd7f8eb1ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    color: "#1569C7",
    intro: "",
    tag: "Satisfied",
    icon: "white",
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGdpcmxzfGVufDB8fDB8fHww",
    color: "purple",
    intro: "",
    tag: "Underserved",
    icon: "white",
    c: "black"
  },
  {
    img: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    color: "black",
    intro: "",
    tag: "Underbanked",
    icon: "white",
    c: "black"
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1683309563937-5ec089c1ebd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc1fHx3b3JrfGVufDB8fDB8fHww",
    color: "brown",
    intro: "",
    tag: "Work",
    icon: "white",
    c: "black"
  },
  {
    img: "https://images.unsplash.com/photo-1613413561312-e329d024ed65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU3fHx3b3JrfGVufDB8fDB8fHww",
    color: "gray",
    intro: "",
    tag: "Studio",
    icon: "white",
    c: "black"
  }
]

  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App
