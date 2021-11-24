import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import * as authService from './services/authService';

import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Logout from './components/Logout';
import Register from './components/Register/Register';
import MyPets from './components/MyPets/MyPets';
import Create from './components/Create/Create';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';

function App() {
    const [userInfo, setUserInfo] = useState({ isAuthenticated: false, username: '' });

    useEffect(() => {
        let user = authService.getUser();

        setUserInfo({
            isAuthenticated: Boolean(user),
            user
        });
    }, []);

    const onLogin = (username) => {
        setUserInfo({
            isAuthenticated: true,
            user: username
        });
    };

    const onLogout = () => {
        setUserInfo({
            isAuthenticated: false,
            user: null
        });
    };

    return (
        <div id="container">

            <Header {...userInfo} />

            <main id="site-content">
                <Routes>
                    <Route path="/dashboard/*" element={<Dashboard />} />
                    <Route path="/login" element={<Login onLogin={onLogin} />} />
                    <Route path="/logout" element={<Logout onLogout={onLogout} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/my-pets" element={<MyPets />} />
                    <Route path="/create" element={<Create />} />
                    <Route path="/details/:petId" element={<Details />} />

                    {/* <Edit /> */}
                </Routes>
            </main>

            <footer id="site-footer">
                <p>@PetMyPet</p>
            </footer>

        </div>
    );
}

export default App;
