import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


export const Detail = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => alert("error"));
        },[]);
    
      console.log(data);  
    return (
        <div className="container">
        {(!data || data.length === 0) ? (
            <div>Loading</div>
        ) : (
            <div className="date">{data[0].id}
                <div className="title">{data[0].title}
                    <div className="sentence">{data[0].body}</div>
                </div>
            </div>
        )}
    </div>
)
}

export default Detail