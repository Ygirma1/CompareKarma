import { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import Columns from './Columns';
import { useNavigate } from 'react-router-dom';
import BusinessPost from '../businessPost/businessPost';
import StarRatings from 'react-star-ratings';

const base_url = "http://localhost:8080"

const Home = () => {
  var id = sessionStorage.getItem('business_id');
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
      {!! companyName && (
        <div className="dashboard-rightcolumn">
          <div>
            <button className='dashboard-post-bootcamp-button' onClick={() => {setOpenModal(true)}}>Add Course</button>
          </div>
          <div className="dashboard-card">
            <h2 className='header2' >Average Course Rating</h2>
            <StarRatings className='stars' rating={4} starRatedColor='gold' starDimension='30px' starSpacing='6px'></StarRatings>
            <br/>
              <p>The average rating for {companyName}'s courses is 4/5 stars meaning this bootcamp provider has an average rating of 4/5 stars across all their bootcamps. </p>
          </div>
        </div>
    )}
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