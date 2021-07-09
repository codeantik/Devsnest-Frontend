
const List = ({ data }) => {
    console.log(data)
        return (
            <>
            { data.map(({ name, cal }, index) => (
                <div key={ index } className='cards' style={ { color: (index % 2 === 1 ? '#000' : '#999')} }>
                    <h2>{ name }</h2>
                    <p>This contains { cal } calories</p>
                </div>
            ))}
            </>
        );
}
 
export default List;