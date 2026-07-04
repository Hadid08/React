import { useNavigate } from "react-router-dom"

const Navbar2 = () => {

  let navigate = useNavigate();

  return (
    <div className="bg-blue-950">
      <button onClick={() => {
        navigate('/');
      }} 
      className="bg-amber-700 px-4 py-2 my-5 mx-2 rounded active:scale-95 cursor-pointer">Return to Home Page
      </button>
      <button onClick={() => {
        navigate(-1);
      }} 
      className="bg-amber-700 px-4 py-2 my-5 mx-2 rounded active:scale-95 cursor-pointer">Back
      </button>
      <button onClick={() => {
        navigate(+1);
      }} 
      className="bg-amber-700 px-4 py-2 my-5 mx-2 rounded active:scale-95 cursor-pointer">Next
      </button>
    </div>
  )
}

export default Navbar2
