import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h2>Who is there?</h2>
            <p>I am : {user ? user.displayName : 'voot'}</p>
        </div>
    );
};

export default Products;