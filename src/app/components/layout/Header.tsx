import { Link } from "react-router-dom"


const Header = (): JSX.Element => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white py-4 px-6">
      <nav className="flex items-center">
        <div className="mr-4">
          <Link to={''}>About</Link>
        </div>
        <div className="mr-4">
          <Link to={''}>Browse</Link>
        </div>
        <div className="mr-4">
          <Link to={''}>Price</Link>
        </div>
      </nav>
    </header>
  )
}

export default Header