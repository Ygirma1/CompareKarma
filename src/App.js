import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './components/Table';
import SearchIcon from '@material-ui/icons/Search';


const base_url = "http://localhost:8080"


function App() {
    <style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
</style>
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
            {<Table data={search(data)}/>}
        </div>
    );
};

export default App;

