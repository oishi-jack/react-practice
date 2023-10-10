import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Detail'

const FetchData = () => {
    const [data, setData] = useState([]);

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch(() => alert("error"));
    },[]);

  console.log(data);  
  return (
    <div className="container" >
    {data.map((post) => {
      return (
        <Link to={"/home"} className="link">
            <div key={post.id} className="list">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
        </Link>
      );
    })}
  </div>
    
  );
}

export default FetchData
