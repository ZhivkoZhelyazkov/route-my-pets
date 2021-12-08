import PetList from '../PetList';
import './Dashboard.css';

// import logo from '../../logo.svg';
// import { ReactComponent as Logo } from '../../logo.svg';


const Dashboard = () => {
    return (
        <section id="dashboard-page" className="dashboard">
            <h1>Dashboard</h1>
            <section>
                <PetList />
            </section>

            {/* <img src={logo} alt='logo' /> */}
            {/* <Logo className='logo' /> */}

        </section>
    );
};

export default Dashboard;