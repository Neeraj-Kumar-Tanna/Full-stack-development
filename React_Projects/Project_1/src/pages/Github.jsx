import React from 'react'
import MacTemplete from './MacTemplete'
import "./github.scss"


const ProjectsData = 
[
  {
    "imageUrl": "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    "name": "Kanban Board",
    "repositoryLink": "https://github.com/Neeraj-Kumar-Tanna/Kanban",
    "liveDemoLink": "https://kanban-two-tau-21.vercel.app/",
    "tags": ["HTML", "CSS", "JavaScript", "Drag and Drop", "LocalStorage"],
    "description": "A task management application that lets users organize tasks into columns, move cards with drag and drop, and manage tasks interactively."
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "name": "Netflix Clone",
    "repositoryLink": "https://github.com/Neeraj-Kumar-Tanna/Netflix_clone",
    "liveDemoLink": "https://netflix-clone-demo.vercel.app/",
    "tags": ["HTML", "CSS", "JavaScript", "Responsive Design"],
    "description": "A Netflix-inspired streaming interface featuring movie sections, a modern layout, and a responsive user interface."
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    "name": "Smart Campus Management",
    "repositoryLink": "https://github.com/Neeraj-Kumar-Tanna/smart-campus",
    "liveDemoLink": "https://smart-campus-demo.vercel.app/",
    "tags": ["Python", "Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    "description": "A campus issue reporting system where students and faculty submit complaints, administrators assign issues, and workers track resolutions."
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    "name": "BMI Calculator",
    "repositoryLink": "https://github.com/Neeraj-Kumar-Tanna/BMI-Calculator",
    "liveDemoLink": "https://bmi-calculator-demo.vercel.app/",
    "tags": ["HTML", "CSS", "JavaScript", "DOM"],
    "description": "A web application that calculates Body Mass Index using height and weight and displays the resulting BMI."
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "name": "Cuberto Landing Page",
    "repositoryLink": "https://github.com/Neeraj-Kumar-Tanna/Cuberto-clone",
    "liveDemoLink": "https://cuberto-clone-demo.vercel.app/",
    "tags": ["HTML", "CSS", "JavaScript", "Animations", "UI Design"],
    "description": "A creative agency-inspired landing page focused on modern layouts, interactive elements, and smooth animations."
  },
  {
    "imageUrl": "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    "name": "LifeOS Habit Tracker",
    "repositoryLink": "https://github.com/Neeraj-Kumar-Tanna/LifeOS",
    "liveDemoLink": "https://lifeos-demo.vercel.app/",
    "tags": ["React", "TypeScript", "Vite", "LocalStorage"],
    "description": "A productivity dashboard for tracking daily habits, monitoring progress, setting targets, and reviewing study, workout, and meditation activities."
  }
]

const Card = ({data})=>{
    return <div className='card'>
        <div className="image">
          <img src={data.imageUrl} alt="image" />
        </div>
        <h2>{data.name}</h2>
        <p>{data.description}</p>
        <div className='tagnames'>
           {
              data.tags.map((tagname)=>{
                return <p className='tag'>{tagname}</p>
              })
            }
        </div>
        
        <div className='links'>
            <a href={data.repositoryLink}lassName="repo">Reposotry</a>

            <a href={data.liveDemoLink} className="demo">Live Demo</a>
        </div>
    </div>
}

const Github = () => {
  return (
    
    <MacTemplete>
        {ProjectsData.map((data)=>{
            return <Card data={data} />
        })
        }
    </MacTemplete>
  )
}

export default Github