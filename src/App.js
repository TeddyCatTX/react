import './index.css';
import Employee from './components/Employee'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState([
    {
      name: 'Doraemon', 
      role: 'CEO', 
      img: 'https://www.nicepng.com/png/detail/991-9916410_png-doraemon-transpa-images-pluspng-doraemon-with-transparent.png',
      alt: 'Doraemon'
    },
    {
      name: 'Rick', 
      role: 'CFO', 
      img: 'https://d3m2ca683sarz5.cloudfront.net/wp-content/uploads/2017/12/06110140/80s-33-e1517916119687.jpg',
      alt: 'Rick'
    },
    {
      name: 'Gudetama', 
      role: 'COO', 
      img: 'https://www.nicepng.com/png/detail/102-1021596_ceremony-party-grad-gudetama.png',
      alt: 'Gudetama'
    },
    {
      name: 'Domo', 
      role: 'Manager', 
      img: 'https://www.nicepng.com/png/detail/146-1466489_drawn-head-roblox-roblox-domos.png',
      alt: 'Domo'
    },
    {
      name: 'Shizuka', 
      role: 'Intern', 
      img: 'https://www.desicomments.com/wp-content/uploads/Charming-Image-Of-Shizuka-Dc102.png',
      alt: 'Shizuka'},
    {
      name: 'Hello Kitty', 
      role: 'Intern', 
      img: 'https://www.nicepng.com/png/detail/396-3969594_hello-kitty-clip-art-images-cartoon-4-wikiclipart.png',
      alt: 'Hello Kitty'  
    },

  ])
  const showEmployees = true
  return (
    <div className="App">
      {showEmployees ?  
        <>
          <input 
            type='text'
            onChange={(e) => {
              console.log(e.target.value)
              setRole(e.target.value)
            }}
          />
          <div className='flex flex-wrap justify-center' >
            {employees.map((employee) => {
              console.log(uuidv4());
              return(
                <Employee 
                  key={uuidv4()}
                  name={employee.name} 
                  role={employee.role} 
                  img={employee.img} 
                  alt={employee.alt}
                />
              )
            })}
          </div>
        </>
        :
        <p>You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
