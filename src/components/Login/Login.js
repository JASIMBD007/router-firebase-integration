import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login!</h3>
            <form >
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="submit" value="Login" />
            </form>
            <div style={{ margin: '10px' }}>
                <button onClick={signInWithGoogle}>Sign In with Google</button>
            </div>
        </div>

    );
};

export default Login;