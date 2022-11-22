import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const base_url = "http://localhost:8080"

function App() {
    const [obj, setObj] = useState({});
    const [sort, setSort] = useState({});
    const [filterType, setFilterType] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const getAllBootCamps = async() => {
            try {
                const url = `${base_url}/query`;
                const { data } = await axios.get(url);
                setObj(data);
                console.log(data);
                
            } catch(err) {
                console.log(err);
            }
        };

        getAllBootCamps();
    }, [sort, filterType, page, search]);

    return <h1>Hello World</h1>;
    
}

export default App;

