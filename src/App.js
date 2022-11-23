import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';
import SearchIcon from '@material-ui/icons/Search';


const base_url = "http://localhost:8080"


function App() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);

    // search by company name, course name, and course type
    const keys = ["company_name", "course_name", "course_type"];
    
    // search and filter while typing
    const search = (data) => {
        return data.filter((item) => {
            if (item.course_type == filterParam) {
                return keys.some((key) => {
                    return (
                        item[key].toLowerCase().includes(query.toLowerCase())
                    )
                })
            } else if (filterParam == "All") {
                return keys.some((key) => {
                    return (
                        item[key].toLowerCase().includes(query.toLowerCase())
                    )
                })
            }
        })
    }

    // getting data from backend
    useEffect(() => {
        const fetchBootCamps = async() => {
            const res = await axios.get(`${base_url}/query`);
            setData(res.data);
        };
        fetchBootCamps()
    }, []); //no dependencies


    return (
        <div className='app'>
            <form className='search'>
                <input 
                    placeholder='Search...' 
                    className='search-input' 
                    onChange={e=> setQuery(e.target.value)}>
                </input>
                <button className='search-button'>
                    <SearchIcon/>
                </button>
            </form>
            <select
                onChange={(e) => {
                    setFilterParam(e.target.value);
                }}
                className="custom-select"
                aria-label='Filter by Course Type'>
                    <option value="All">Filter by Course Type</option>
                    <option value="UI/UX">UI/UX</option>
                    <option value="SWE">SWE</option>
            </select>
            {<Table data={search(data)}/>}
        </div>
    );
};

export default App;

