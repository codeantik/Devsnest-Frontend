import { useContext } from "react";
import { logInContext } from './AuthContext'

const About = () => {
    const logIn = useContext(logInContext)
    return ( 
        logIn.log ? (
            <div className='about-container'>
                <h1>About</h1>
                <pre>
                    This website helps to keep track of your client list.
                </pre>
                <button className='log' onClick={ logIn.checkLog }>{ logIn.log ? "Log out" : "Log in" }</button>
            </div>
        ) : (
            <div className='auth'>
                <h1>You're not authorised to acces the page</h1>
                <button className='log' onClick={ logIn.checkLog }>{ logIn.log ? "Log out" : "Log in" }</button>
            </div>
        )
     );
}
 
export default About;