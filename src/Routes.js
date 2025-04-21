import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
Signup, Login,
PetCareCenterTiles, 
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView
} from "screens";
import Session from "shared/session";

function PrivateRoute({ children }) {
    const loggedin = Session.Retrieve("isAuthenticated", true);
    return loggedin ? children : <Navigate to="/login" />;
}

const Component = (props) => {

    const loggedin = Session.Retrieve("isAuthenticated", true);

    return (
        <Routes>
            

                                                <Route path="/PetcareFE/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
            <Route exact path="/signup" element={<Signup />} />
            { !loggedin && <Route exact path="/login" element={<Login />} /> }
                                                        <Route path="PetCareCenters/view/:id" element={<PrivateRoute><PetCareCenterView {...props} title={'View PetCareCenter'} /></PrivateRoute>} />
                        <Route path="PetCareCenters/edit/:id" element={<PrivateRoute><PetCareCenterEdit {...props} title={'Edit PetCareCenter'} /></PrivateRoute>} />
                        <Route path="PetCareCenters/create" element={<PrivateRoute><PetCareCenterCreate {...props} title={'Create PetCareCenter'} /></PrivateRoute>} />

                <Route path="/products1/tiles" element={<PrivateRoute><PetCareCenterTiles {...props} title={'Tiles'} /></PrivateRoute>} />
        </Routes>
    )

};

export default Component;
