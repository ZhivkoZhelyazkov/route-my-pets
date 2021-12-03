import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { AuthContext } from './contexts/AuthContext';

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
    const [user, setUser] = useState({
        _id: '',
        email: '',
        accessToken: ''
    });

    const onLogin = (authData) => {
        setUser(authData);
    };

    const onLogout = () => {

    };

    return (
        <AuthContext.Provider value={true}>
            <div id="container">

                <Header email={user.email} />

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
        </AuthContext.Provider>
    );
}

export default App;
