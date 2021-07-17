const SingleDetail = ({ user }) => {
    console.log('clicked')
    return ( 
        <div className='single-detail'>
            <h1>{ user.name }</h1>
            <p>{ user.email }</p>
            <p>{ user.address.city }</p>
            <p>{ user.website } </p>
            <p>{ user.company.name }</p>
        </div>
     );
}
 
export default SingleDetail;