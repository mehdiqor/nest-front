import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/authSlice";

export const Nav = () => {
    const auth = useSelector((state: RootState) => state.auth.value);
    const dispatch = useDispatch();

    const signout = async() => {
        await axios.post("auth/signout", {}, {
            withCredentials: true
        });
        
        axios.defaults.headers.common['Authorization'] = '';

        dispatch(setAuth(false));
    }

    let links;

    if (auth) {
        links = <div className="col-md-3 text-end">
            <Link to="/" onClick={signout} className="btn btn-outline-primary me-2">Sign-out</Link>
        </div>
    }else {
        links = <div className="col-md-3 text-end">
            <Link to="auth/signin" className="btn btn-outline-primary me-2">Signin</Link>
            <Link to="auth/signup" className="btn btn-outline-primary me-2">Signup</Link>
        </div>
    }

    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <div>

                        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                            <li><Link to="/" className="nav-link px-2 link-secondary">Home</Link></li>
                        </ul>

                        {links}
                    </div>
                </div>
            </header>
        </div>
    )
}