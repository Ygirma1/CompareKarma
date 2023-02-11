import React, { Component }  from 'react';
import "../App.css"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import SearchIcon from '@material-ui/icons/Search';

const base_url = "http://localhost:8080"

const Search = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState([]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [sortParam, setSortParam] = useState(["All"])

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

    // sort by cost
    const sort = (data) => {
        if (sortParam == "Ascending") {
            return data.sort((a,b) => a.cost - b.cost)
        } else if (sortParam == "Descending") {
            return data.sort((a,b) => b.cost - a.cost)
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

    console.log("TEST")


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
        className="custom-select">
            <option value="All">Course Type</option>
            <option value="UI/UX">UI/UX</option>
            <option value="SWE">SWE</option>
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
    {<Table data={search(sort(data))}/>}
    </div>
  );
};

export default Search;

