import { FaExclamationCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Huh() {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
        <FaExclamationCircle size={100} className='text-danger' />
        <h1 className='text-danger'>404</h1>
        <h2>I don't know how you got here, but there's nothing here man.</h2>
        <Link to='/' className='btn btn-primary'>Get yourself on back, now</Link>
    </div>
  )
}
