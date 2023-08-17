import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const fetchInfo = () => {
    fetch("https://isro.vercel.app/api/centres")
      .then((res) => res.json())
      .then((d) => {
        setData(d.centres);
        setLoading(true);
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="App">
      {loading &&
        data.map((dataObj, index) => {
          return (
            <div>
              <p style={{ fontSize: 20, color: "black" }}>{dataObj.name}</p>
            </div>
          );
        })}
    </div>
  );
}
