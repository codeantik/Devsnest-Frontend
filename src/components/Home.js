import { Route, Redirect } from 'react-router-dom'
import SingleDetail from './SingleDetail'

const Home = ({ data }) => {

    const handleRedirect = (id) => {
        // <Redirect to={ `/details/${id}`} />
        <Route>
            <SingleDetail />
        </Route>
    }

    return ( 
        <>
            <h1 className='home-title'>List of Users</h1>
            <div className='home-container'>
                {data.length ? (
                    data.map((user) => (
                        <li key={ user.id } onClick={ e => handleRedirect(user.id)} >{ user.name }</li>
                    ))
                ) : (
                    <h3>List is empty</h3>
                )}
            </div>
        </>
     );
}
 
export default Home;