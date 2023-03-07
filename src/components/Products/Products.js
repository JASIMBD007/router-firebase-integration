import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h2>Who is there?</h2>
            <p>I am : {user ? user.displayName : 'voot'}</p>
        </div>
    );
};

export default Products;