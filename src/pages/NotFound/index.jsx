import { NavLink } from 'react-router-dom'

const NotFound = () => {
    return (
        <section>
            <div className="min-h-[80vh] container grid place-items-center">
                <div className='text-center'>
                    <span>Oops! Page not found.</span>
                    <h2 className='text-[50px] font-bold'>404</h2>
                    <p className='mb-[16px]'>We can't find the page you're looking for.</p>
                    <NavLink className="block text-blue-500 mt-[8px] underline" to="/">Go back to Homepage</NavLink>
                </div>
            </div>
        </section>
    )
}

export default NotFound