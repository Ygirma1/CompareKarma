import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Bootcamps} from "./bootcamps";
import Table from './Table';

const base_url = "http://localhost:8080"


function App() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     var getBootCamps = async() => {
    //         try {
    //             const url = `${base_url}/query`;
    //                 const { data } = await axios.get(url);
    //                 console.log(data);
                    
    //             } catch(err) {
    //                 console.log(err);
    //             }
    //         }
    // })
    const [query, setQuery] = useState("");
    const keys = ["company_name", "course_name", "course_type"];
    const search = (data) => {
        // currently searches for company name only 
        return data.filter(
            (item) =>
                keys.some(key=>item[key].toLowerCase().includes(query))
        );
    };

    return (
        <div className='app'>
            <input 
                type='text' 
                placeholder='Search...' 
                className='search' 
                onChange={e=> setQuery(e.target.value)}>
            </input>
            <Table data={search(Bootcamps)}/>
        </div>
    )
}

export default App;

