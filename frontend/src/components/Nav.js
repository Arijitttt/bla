import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Nav() {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate('/signup')
    }
    return (
        <div>
            <img src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm"
             alt="logo"
             className="logo"
             />
            {auth ? <ul className="nav-ul">
                <li><Link to='/'>Products</Link></li>
                <li><Link to='/add'>Add Product</Link></li>
                <li><Link to='/update/:id'>Update Products</Link></li>
                <li><Link to='/profile'>Profile</Link></li>
                <li><Link onClick={logout} to='/signup'>Logout ({JSON.parse(auth).name})</Link></li>


            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li> <Link to='/signup'>SignUp</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;