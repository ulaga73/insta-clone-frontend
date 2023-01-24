import Header from "../Header/Header";
import "../../Styles/Form.css";
import { useState } from "react";

const Form = () => {
    const [author, setAuthor] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState("");
    const uploadData = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("author", author);
        formData.append("location", location);
        formData.append("description", description);
        formData.append("imageFile", imageFile);
        console.log(formData);
        console.log(author, location, description, imageFile);
        fetch("https://insta-clone-sx8n.onrender.com/postview", {
            method:"POST",
            body: formData
        })
    }
    return(
        <div>
        <Header/>
        <div className="form">
            <form>
                <input type="file" onChange={(e) => {setImageFile(e.target.files[0])}}/>
                <input type="text" placeholder="Author" onChange={(e) => {setAuthor(e.target.value)}} value={author} />
                <input type="text" placeholder="Location" onChange={(e) => {setLocation(e.target.value)}} value={location} />
                <textarea cols="30" rows="2" placeholder="Description" onChange={(e) => {setDescription(e.target.value)}} value={description} />
                <button className="btn" onClick={uploadData}>Post</button>
            </form>
        </div>
        </div>
    )
}

export default Form;