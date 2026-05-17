import { Route, Routes } from "react-router-dom";

import { Home, AboutUs } from './pages';
import { DefaultLayout } from "./layouts";

const Router = () => {
    
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
            
                <Route path="/" element={<Home />} /> 
                <Route path="/about-us" element={<AboutUs />} />
            </Route>
        </Routes>
    );
};

export { Router };