import React, { Component }  from 'react';
// import "../../App.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../components/Table'
import SearchIcon from '@material-ui/icons/Search';
import './search.css'

const base_url = "http://localhost:8080"

const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [sortParam, setSortParam] = useState(["All"])
    const [filterParamFormat, setFilterParamFormat] = useState(["All"]);

    // search by company name, course name, and course type
    const keys = ["company_name", "course_name", "course_type","course_format"];
    
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

    const searchFormat = (data) => {
        return data.filter((item) => {
            if (item.course_format == filterParamFormat) {
                return keys.some((key) => {
                    return (
                        item[key].toLowerCase().includes(query.toLowerCase())
                    )
                })
            } else if (filterParamFormat == "All") {
                return keys.some((key) => {
                    return (
                        item[key].toLowerCase().includes(query.toLowerCase())
                    )
                })
            }
        })
    }

    // sort by cost
    const sort = (data) => {
        if (sortParam == "Ascending") {
            return data.sort((a,b) => a.cost - b.cost)
        } else if (sortParam == "Descending") {
            return data.sort((a,b) => b.cost - a.cost)
        } else if (sortParam == "Ascending_Length") {
            return data.sort((a,b) => a.length_of_course - b.length_of_course)
        } else if (sortParam == "Descending_Length") {
            return data.sort((a,b) => b.length_of_course - a.length_of_course)
        } else {
            return data
        }
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
    <div className='custom-select-container'>
        <select                     //select  the course type
            onChange={(e) => {
                setFilterParam(e.target.value);
            }}
            className="custom-select">
                <option value="All">Course Type</option>
                <option value="UI/UX">UI/UX</option>
                <option value="SWE">SWE</option>
        </select>
        <select                     //select  the course type
            onChange={(e) => {
                setFilterParamFormat(e.target.value);
            }}
            className="custom-select">
                 <option value="All">Course Format</option>
                <option value="Online">Online</option>
                <option value="Hybrid">Hybrid</option>
                <option value="In-Person">In-Person</option>
        </select>
        <select
            onChange={(e) => {
                setSortParam(e.target.value)
            }}
            className="custom-select">
                <option value="Unsorted">Price</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
        </select>
        <select
            onChange={(e) => {
                setSortParam(e.target.value)
            }}
            className="custom-select">
                <option value="Unsorted">Course Length</option>
                <option value="Ascending_Length">Ascending</option>
                <option value="Descending_Length">Descending</option>
        </select>
    </div>
    {<Table data={searchFormat(search(sort(data)))}/>} 
    </div>
  );
};
// basically the table entry does the parameters by sorting then searches through that
export default Search;

