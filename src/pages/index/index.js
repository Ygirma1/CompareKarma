import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Columns from './Columns';
import { useNavigate } from 'react-router-dom';

const base_url = "http://localhost:8080"

const Home = () => {
  const id = localStorage.getItem('business_id');
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [companyName, setCompanyName] = useState('')

  const handleButtonClick = () => {
    navigate('/post');
  };

  // getting business name
  useEffect(() => {
      const retrieveBusinessInfo = async() => {
        try {
          const res = await axios.get(`${base_url}/getBusinessInformation?` + 'business_id=' + id);
          setCompanyName(res.data[0].business_name);
        } catch (error) {
          setCompanyName('');
        }
      };
      retrieveBusinessInfo()
  }, []); 

  // getting data from backend
  useEffect(() => {
    const fetchBootCamps = async() => {
      try {
        console.log(id)
        const res = await axios.get(`${base_url}/getBusinessCourses?` + 'business_id=' + id);
        setData(res.data);
      } catch (error) {
        setData([])
      }

    };
    fetchBootCamps()
  }, []); //no dependencies

  console.log(data);

  return (

<div> 
    <div className="header">
      <h1>{companyName}</h1>
    </div>

    <div className='wrapper'> 

      {<Columns data={data}/>}

      <div className="rightcolumn">
      <div>
        <button className='button' onClick={handleButtonClick}>Post Bootcamp</button>
      </div>
      <div className="card">
        <h2 >Total Review</h2>
        <p >Average stars out of five for the entire account.</p>
        <p> Some text about total reviews of all the account's bootcamps</p>
      </div>
    </div>
  </div>
  </div>

  );
};

export default Home;