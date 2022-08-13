import Navbar from './Components/Navbar'
import Travel from './Components/Travel'
import './App.css'
import data from './Components/data'


function App() {
 const traveldata = data.map(travel => 
            <Travel
             img = {travel.img}
             state = {travel.state}
             city = {travel.city}
             startDate = {travel.startDate}
             endDate = {travel.endDate}
             description = {travel.description}

             /> 
  
  )
  return (
    <div className="container">
     <Navbar />
         {traveldata}
     
    </div>
  )
}

export default App
