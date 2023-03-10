import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

const base_url = "http://localhost:8080"

const Home = () => {
  // console.log(localStorage.getItem('business_id'));
  const id = localStorage.getItem('business_id');

  const [data, setData] = useState([]);

  // getting data from backend
  useEffect(() => {
    const fetchBootCamps = async() => {
      try {
        console.log(id)
        const res = await axios.get(`${base_url}/getBusinessCourses?` + 'business_id=' + id);
        // console.log(res.data)
        setData(res.data);
      } catch (error) {
        // console.log("ERROR DATA: " + error.response.data)
        setData([])
      }

    };
    fetchBootCamps()
  }, []); //no dependencies

  console.log(data);

  return (
  <body>

<div className="header">
  <h1>CompareKarma</h1>
</div>


<div className="row">
  <div className="leftcolumn">
    <div className="card">
      <h2 >Bootcamp 1</h2>
      <h5 >Post date: February 12, 2023</h5>
      <p>*****(###)<br></br><br></br></p>
      <p >Ipsum morbi nascetur a placerat pretium adipiscing Auctor per cum. Sem, nam aliquet metus dapibus. Cum semper suspendisse diam natoque ipsum at mauris, magnis platea bibendum venenatis massa. Aliquet convallis laoreet imperdiet vitae dui ultricies vehicula, porttitor ac pede consequat.</p>
    </div>
    <div className="card">
      <h2 >Bootcamp 2</h2>
      <h5 >Post date: February 14, 2023</h5>
      <p>*****(###)<br></br><br></br></p>
      <p >Ipsum morbi nascetur a placerat pretium adipiscing Auctor per cum. Sem, nam aliquet metus dapibus. Cum semper suspendisse diam natoque ipsum at mauris, magnis platea bibendum venenatis massa. Aliquet convallis laoreet imperdiet vitae dui ultricies vehicula, porttitor ac pede consequat.</p>
    </div>
  </div>
  <div className="rightcolumn">
    <div className="card">
      <h2 >Total Review</h2>
      <p >Average stars out of five for the entire account.</p>
      <p >Some text about total reviews of all the account's bootcamps</p>
    </div>
  </div>
</div>


</body>
  );
};

export default Home;