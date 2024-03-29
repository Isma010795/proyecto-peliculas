import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import {MovieDetails} from "../pages/MovieDetails";


export function MyRoutes({movies}){
    return(
    <Router>
        <Routes>
            <Route exact path="/" element={<LandingPage movies={movies}/>}/>
            <Route exact path="/moviesdetails/:movieId" element={<MovieDetails movies={movies}/>}/>

        </Routes>
    </Router>);
}


export default MyRoutes;


