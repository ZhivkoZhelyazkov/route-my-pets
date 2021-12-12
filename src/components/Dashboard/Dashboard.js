import { useState, useEffect } from 'react';
import * as petService from '../../services/petService';

import PetList from '../PetList';
import './Dashboard.css';

// import logo from '../../logo.svg';
// import { ReactComponent as Logo } from '../../logo.svg';


const Dashboard = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        petService.getAll()
            .then(result => {
                setPets(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <section>
                <PetList pets={pets} />
            </section>

            {/* <img src={logo} alt='logo' /> */}
            {/* <Logo className='logo' /> */}
        </section>
    );
};

export default Dashboard;