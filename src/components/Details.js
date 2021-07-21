import { useParams } from "react-router";
import SingleDetail from "./SingleDetail";
import { useContext } from "react";
import { logInContext } from './AuthContext'

const Details = ({ data }) => {
    let { id } = useParams()
    const logIn = useContext(logInContext)
    return ( 
        logIn.log ? (
            <div className='details-container'>
                <h1>Details</h1>
                {id > 0 ? (
                    <SingleDetail user= { data[id - 1] }/>
                ) : (
                    data.map((user) => (
                        <SingleDetail user= { user } key={ user.id}/>
                    ))
                )}
                <button className='log' onClick={ logIn.checkLog }>Log In</button>
            </div>
        ) : (
            <div className='auth'>
                <h1>You're not authorised to acces the page</h1>
                <button className='log' onClick={ logIn.checkLog }>Log In</button>
            </div>
        )
     );
}
 
export default Details;
