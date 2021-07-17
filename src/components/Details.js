import { useParams } from "react-router";
import SingleDetail from "./SingleDetail";

const Details = ({ data }) => {
    let { id } = useParams()
    return ( 
        <div className='details-container'>
            <h1>Details</h1>
            {id > 0 ? (
                <SingleDetail user= { data[id - 1] }/>
            ) : (
                data.map((user) => (
                    <SingleDetail user= { user } key={ user.id}/>
                ))
            )}
        </div>
     );
}
 
export default Details;
