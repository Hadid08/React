
import "./App.css"

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  return (
    <div>
    <form onSubmit={(e) => {
      submitHandler(e);
    }}>
      <input type="text" placeholder='Enter your name'/>
      <input type="number" placeholder='Enter your age' />
      <input type="submit" value="Submit"/>
    </form>
    </div>
  )
}

export default App
