const Contact = () => {
    return ( 
        <div className='contact-container'>
            <h1>Contact</h1>
            <pre>
                <form action="" onSubmit={e => alert('Form submitted successfully')}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' required/>
                    <label htmlFor="phone">Phone No</label>
                    <input type="number" name='phone' required/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" cols="50" rows="8"></textarea>
                    <button type='submit'>Submit</button>
                </form>
            </pre>
        </div>
     );
}
 
export default Contact;
