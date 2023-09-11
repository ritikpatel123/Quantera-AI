import './NavBar.scss'
import logo from '../Home-Page/image/logo.png'
 function NavBar() {
    return(
        <div className='NavBar'>
            <img src={logo} alt="" />
            <div className='Middle-div'>
                <h1>Investors</h1>
                <h1>Pricing</h1>
            </div>
            <button className='btn'>Login</button>
        </div>
    );
 }
 export default NavBar;