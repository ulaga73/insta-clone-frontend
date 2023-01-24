import Header from "../Header/Header";
import "../../Styles/PostView.css";
import { useEffect } from "react";
import { useState } from "react";

const PostView = () => {
    const [apiData, setApiData] = useState(null);
    const fetchCall =async () => {
        const res = await fetch("https://insta-clone-sx8n.onrender.com/postview");
        setApiData(await res.json());
    }

    useEffect(() => {
        fetchCall()
    }, [])

    return(
        <div className="postview-page">
        <Header/>
        <div>
            {
                apiData === null ? <><h1>Loading content</h1> <h1> please wait...</h1></> : null
            }
        </div>
        <div>
            { apiData &&
                apiData.data.map((data, index) => {
                    return(
                        <ul key={index} className="post-data">
                            <li className="post-author">{data.author}</li>
                            <li className="post-location">{data.location}</li>
                            <li>
                                <img src={`https://insta-clone-sx8n.onrender.com/images/${data.imageFile}`} alt="poster" className="post-image"/>
                            </li>
                            <li className="post-lokes">{data.likes}likes</li>
                            <li className="post-date">{data.date}</li>
                            <li className="post-description">{data.description}</li>
                        </ul>
                    )
                })
            }
        </div>
        </div>
    )
}

export default PostView;    