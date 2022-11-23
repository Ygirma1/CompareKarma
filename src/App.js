import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';

const base_url = "http://localhost:8080"


function App() {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);

    const keys = ["company_name", "course_name", "course_type"];
    const search = (data) => {
        return data.filter(
            (item) =>
              keys.some((key)=>item[key].toLowerCase().includes(query))
        );
    }

    useEffect(() => {
        const fetchBootCamps = async() => {
            const res = await axios.get(`${base_url}/query`);
            setData(res.data);
        };
        fetchBootCamps()
    }, []); //no dependencies

    return (
        <div className='app'>
            <input 
                placeholder='Search...' 
                className='search' 
                onChange={e=> setQuery(e.target.value)}>
            </input>
            {<Table data={search(data)}/>}
        </div>
    );
};

export default App;

