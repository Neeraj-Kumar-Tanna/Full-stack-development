import React from 'react'
import Card from './components/Card';

const App = () => {

  const persons = [
  {
    name: "Emma Johnson",
    imageUrl: "https://randomuser.me/api/portraits/women/1.jpg",
    age: 14,
    gender: "Female"
  },
  {
    name: "Liam Smith",
    imageUrl: "https://randomuser.me/api/portraits/men/2.jpg",
    age: 28,
    gender: "Male"
  },
  {
    name: "Olivia Brown",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
    age: 22,
    gender: "Female"
  },
  {
    name: "Noah Davis",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
    age: 30,
    gender: "Male"
  },
  {
    name: "Sophia Wilson",
    imageUrl: "https://randomuser.me/api/portraits/women/5.jpg",
    age: 26,
    gender: "Female"
  },
  {
    name: "James Miller",
    imageUrl: "https://randomuser.me/api/portraits/men/6.jpg",
    age: 15,
    gender: "Male"
  },
  {
    name: "Ava Moore",
    imageUrl: "https://randomuser.me/api/portraits/women/7.jpg",
    age: 21,
    gender: "Female"
  },
  {
    name: "Benjamin Taylor",
    imageUrl: "https://randomuser.me/api/portraits/men/8.jpg",
    age:9,
    gender: "Male"
  },
  {
    name: "Mia Anderson",
    imageUrl: "https://randomuser.me/api/portraits/women/9.jpg",
    age: 15,
    gender: "Female"
  },
  {
    name: "William Thomas",
    imageUrl: "https://randomuser.me/api/portraits/men/10.jpg",
    age: 32,
    gender: "Male"
  },
  {
    name: "Charlotte Jackson",
    imageUrl: "https://randomuser.me/api/portraits/women/11.jpg",
    age: 27,
    gender: "Female"
  },
  {
    name: "Lucas White",
    imageUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    age: 13,
    gender: "Male"
  },
  {
    name: "Amelia Harris",
    imageUrl: "https://randomuser.me/api/portraits/women/13.jpg",
    age: 3,
    gender: "Female"
  },
  {
    name: "Henry Martin",
    imageUrl: "https://randomuser.me/api/portraits/men/14.jpg",
    age: 34,
    gender: "Male"
  },
  {
    name: "Evelyn Thompson",
    imageUrl: "https://randomuser.me/api/portraits/women/15.jpg",
    age: 20,
    gender: "Female"
  },
  {
    name: "Alexander Garcia",
    imageUrl: "https://randomuser.me/api/portraits/men/16.jpg",
    age: 18,
    gender: "Male"
  },
  {
    name: "Harper Martinez",
    imageUrl: "https://randomuser.me/api/portraits/women/17.jpg",
    age: 24,
    gender: "Female"
  },
  {
    name: "Daniel Robinson",
    imageUrl: "https://randomuser.me/api/portraits/men/18.jpg",
    age: 33,
    gender: "Male"
  },
  {
    name: "Ella Clark",
    imageUrl: "https://randomuser.me/api/portraits/women/19.jpg",
    age: 22,
    gender: "Female"
  },
  {
    name: "Michael Rodriguez",
    imageUrl: "https://randomuser.me/api/portraits/men/20.jpg",
    age: 36,
    gender: "Male"
  }
  ];

  return (
    <div className='flex flex-row flex-wrap gap-3'>
      {
        persons.map((person,ind)=>{
           return <Card img={person.imageUrl} name={person.name} gender={person.gender} id={ind} age={person.age} />
        })
      }
    </div>
  )
}

export default App
