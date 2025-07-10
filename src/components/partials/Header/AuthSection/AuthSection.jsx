import React from 'react';
import './AuthSection.css';
import ButtonB from '../../../buttons/ButtonB/ButtonB';
import ButtonA from '../../../../components/buttons/ButtonA/ButtonA';

const AuthSection = () => {
    return (
        <div className="auth-section">
            <div className="auth-buttons">
                <ButtonA text="Log In" to='/login'/>
                <ButtonB text="Join Us"/>
            </div>
        </div>
    );
}

export default AuthSection;