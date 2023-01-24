import LandingPage from "./LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostView from "./PostView/PostView";
import Form from "./Form/Form";


function App(){
    return(
        <div className="app-wrapper">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/postview" element={<PostView/>}/>
                    <Route path="/form" element={<Form/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;