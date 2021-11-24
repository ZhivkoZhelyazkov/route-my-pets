import { Navigate } from 'react-router-dom';
import * as authService from '../../services/authService';

const Logout = ({
    onLogout
}) => {
    onLogout();
    authService.logout();

    return <Navigate to='/login' replace={true} />;
};

export default Logout;