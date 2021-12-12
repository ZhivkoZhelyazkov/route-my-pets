import { useState, useEffect } from 'react';
import * as petService from '../../services/petService';

import PetList from '../PetList';
import { useAuthContext } from '../../contexts/AuthContext';


const MyPets = () => {
    const [pets, setPets] = useState([]);
    const { user } = useAuthContext();
    
    useEffect(() => {
        petService.getMyPets(user._id)
            .then(result => {
                setPets(result);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <section id="my-pets-page" className="my-pets">
            <h1>My Pets</h1>

            <PetList pets={pets} />

        </section>
    );
};

export default MyPets;