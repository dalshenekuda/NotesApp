/** @format */

import React from "react";
import {Route, Routes} from "react-router-dom";
import NotesPage from "../pages/NotesPage";
import AddNotePage from "../pages/AddNotePage";
import EditNotePage from "../pages/EditNotePage";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<NotesPage />} />
            <Route path="/add" element={<AddNotePage />} />
            <Route path="/edit/:id" element={<EditNotePage />} />

        </Routes>
    );
};

export default Routers;
