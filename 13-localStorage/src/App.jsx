import './App.css'

const App = () => {

  // localStorage.setItem('name', 'hadid');
  // localStorage.setItem('age', 21)
  // let n = localStorage.getItem('name')
  // console.log(n);

  // localStorage.removeItem('name');
  // localStorage.clear();

  const users = {
    name: "hadid",
    age: 21,
    id: 20
  }

  localStorage.setItem('user', JSON.stringify(users));
  console.log(JSON.parse(localStorage.getItem('user')));
  

  
  return (
    <div>
      App
    </div>
  )
}

export default App
