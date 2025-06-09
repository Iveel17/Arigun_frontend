import React from 'react';
import './AuthSection.css';
import SignupButton from '../../buttons/SignupButton/SignupButton';
import LoginButton from '../../buttons/LoginButton/LoginButton';

const AuthSection = () => {
    return (
        <div className="auth-section">
            <div className="auth-buttons">
                <LoginButton />
                <SignupButton />
            </div>
        </div>
    );
}

export default AuthSection;