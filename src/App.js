import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Bootcamps} from "./bootcamps";

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
    return (
        <div className='app'>
            <input 
                type='text' 
                placeholder='Search...' 
                className='search' 
                onChange={e=> setQuery(e.target.value)}>
            </input>
            <ul className='list'>
                {Bootcamps.filter(bootcamp=>bootcamp.company_name.toLowerCase().includes(query)).map((bootcamp) => (
                    <li 
                        key={bootcamp.company_name}
                        className='listItem'>{bootcamp.company_name}
                    </li>
                ))}
                
            </ul>
        </div>
    )
}

export default App;

