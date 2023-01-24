import React, { useContext, useEffect }  from 'react';
import { AuthContext } from '../context/auth';
import { AuthRoutes, AppRoutes } from './routes';

export default function Routes() {
    const { isLogged } = useContext(AuthContext);
    const { checkStorage } = useContext(AuthContext);

    useEffect(() => {
        checkStorage();
    }, []);

    return isLogged ? AuthRoutes() : AppRoutes();
}