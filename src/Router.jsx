import { Route, Routes } from "react-router-dom";

import { Home, AboutUs, NotFound } from './pages';
import { DefaultLayout } from "./layouts";

const Router = () => {
    
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} /> 
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="*" element={<NotFound />} /> 
            </Route>
        </Routes>
    );
};

export { Router };