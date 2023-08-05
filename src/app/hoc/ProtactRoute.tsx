import { redirect, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
// import Loader from '../components/common/Loader';
// import { LOCAL_STORAGE_KEYS } from '../utils/constants';

const withAuth = (WrappedComponent: any) => {
    const WithAuth = (props: any) => {
        const [user, setUser] = useState<boolean>(false);
        const navigate = useNavigate()
        useEffect(() => {
            setUser(localStorage.getItem("user") ? true : false);
            // setLoading(false);
        }, []);

        // if (loading) {
        //     return <Loader title={''} />;
        // }

        if (!user) {
            navigate('/login');
            return null;
        }

        return <WrappedComponent {...props} />;
    };

    return WithAuth;
};

export default withAuth;
