import React from 'react'
import Cards from './components/Cards'
import google from './assets/google.jpg'
import apple from './assets/apple.jpg'
import amazon from './assets/amazon.jpg'
import netflix from './assets/netflix.jpg'
import abode from './assets/abode.jpg'
import uber from './assets/uber.jpg'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: google,
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mountain View, USA",
  },
  {
    brandLogo: abode,
    companyName: "Abode AI",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Seattle, USA",
  },
  {
    brandLogo: apple,
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: amazon,
    companyName: "Amazon",
    datePosted: "2 weeks ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hr",
    location: "Austin, USA",
  },
  {
    brandLogo: google,
    companyName: "Google",
    datePosted: "4 days ago",
    post: "Frontend Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: netflix,
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: apple,
    companyName: "apple",
    datePosted: "6 days ago",
    post: "Web Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Santa Clara, USA",
  },
  {
    brandLogo: abode,
    companyName: "Abode",
    datePosted: "2 days ago",
    post: "Frontend Intern",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$30/hr",
    location: "San Jose, USA",
  },
  {
    brandLogo: netflix,
    companyName: "netflix",
    datePosted: "3 weeks ago",
    post: "JavaScript Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$52/hr",
    location: "San Francisco, USA",
  },
  {
    brandLogo: uber,
    companyName: "Uber",
    datePosted: "8 days ago",
    post: "Frontend Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "New York, USA",
  },
];

  return (
    // <div className="container">
    <div className='parent'>
        {jobOpenings.map(function(elem, index){
          return (
          <div key={index}>
            <Cards brand={elem.brandLogo} company={elem.companyName} date={elem.datePosted} post={elem.post} timeSlot={elem.tag1} level={elem.tag2} pay={elem.pay} Location={elem.location} />
          </div>
          );
        })
        }
      </div>
      // </div>
  )
}

export default App
