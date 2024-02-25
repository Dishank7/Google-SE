import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Results from "./Results";


const Routess = () => {

    return (
        <div className="p-4">
           

           <Routes>
        {/* Route for home page, redirecting to '/search' */}
        <Route path="/" element={<Navigate to="/search" />} />

        {/* Routes for '/search', '/images', '/news', and '/videos' */}
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
            
           

            {/* <Route exact path="/">
                   <Redirect to = "/search"/>
                </Route>
                <Route exact path={['/search','/images','/news','/videos']}>
                     <Results/>
                </Route>
             */}
        </div>
    )
}

export default Routess