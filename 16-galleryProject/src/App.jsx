import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    setData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</h3>
  );
  if (data.length > 0) {
    printUserData = data.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden rounded-xl">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="text-lg font-bold">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="h-screen bg-black text-white overflow-auto p-4">
      <h1 className="fixed text-5xl text-yellow-600">{index}</h1>
      <div className="flex flex-wrap gap-4">{printUserData}</div>

      <div className="flex justify-center items-center gap-6 p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          className="bg-amber-400 text-black px-5 py-2 font-bold rounded m-5 cursor-pointer active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setData([])
            }
          }}
        >
          Prev
        </button>
        <h4>Page {index}</h4>
        <button
          className="bg-amber-400 text-black px-5 py-2 font-bold rounded m-5 cursor-pointer active:scale-95"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
