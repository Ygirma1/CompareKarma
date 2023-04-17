import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Columns from './Columns';
import { useNavigate } from 'react-router-dom';
import BusinessPost from '../businessPost/businessPost';

const base_url = "http://localhost:8080"

const Home = () => {
  const id = localStorage.getItem('business_id');
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [companyName, setCompanyName] = useState('');
  const [newItemAdded, setNewItemAdded] = useState(false);
  const [openModal, setOpenModal] = useState(false)

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
        const res = await axios.get(`${base_url}/getBusinessCourses?` + 'business_id=' + id);
        setData(res.data);
        setNewItemAdded(true);
      } catch (error) {
        setData([])
        setNewItemAdded(true);
      }
    };
    fetchBootCamps()
  }, [newItemAdded]); 


  return (
<body className="index-container">
  {openModal && <div onClick={() => {setOpenModal(false)}} className="businesspost-modal-backdrop"></div>}
  <div className="test">
    <div className="header">
      <h1>{companyName + ' Dashboard'}</h1>
    </div>
    <div className='wrapper'> 
      {<Columns data={data}/>}
    <div className="dashboard-rightcolumn">
      <div>
        <button className='dashboard-post-bootcamp-button' onClick={() => {setOpenModal(true)}}>Add New Course</button>
      </div>
      <div className="dashboard-card">
        <h2 >Total Review</h2>
          <p>Average stars out of five for the entire account.</p>
          <p> Some text about total reviews of all the account's bootcamps</p>
      </div>
    </div>
    </div>
  </div>
  {openModal && <div className="businesspost-modal">
    <BusinessPost closeModal={setOpenModal}/>
  </div>
  }
</body>

  );
};

export default Home;