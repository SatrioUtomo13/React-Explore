import { useState } from 'react'
import Header from './components/Header'

function App() {
  const students = ['satrio', 'utomo', 'rasel']

  const [likes, setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }
  return(
      <>
          <Header name="utomo"/>
          <ul>
              {students.map((student) => (
                  <li key={student}>{student}</li>
              ))}    
          </ul>

          <button onClick={handleClick}>Likes ({likes})</button>
      </>
  )
}

export default App
