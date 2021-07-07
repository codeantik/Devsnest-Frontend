
const List = ({ data }) => {
    console.log(data)
        return (
            <>
            { data.map(({ name, cal }, index) => (
                <div key={ index } className='cards' >
                    <h2>{ name }</h2>
                    <p>This contains { cal } calories</p>
                </div>
            ))}
            </>
        );
}
 
export default List;