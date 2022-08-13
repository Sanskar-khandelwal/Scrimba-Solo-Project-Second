import logo from '../assets/logo.png'


export default function Navbar(){
    return (
        <div className="navbar">
          <img src= {logo} alt="Logo of our Travel Journal" />
          <p>My Travel Journal</p>
        </div>
    )
}