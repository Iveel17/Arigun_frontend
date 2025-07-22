import React, { useState } from 'react';
import './AuthSection.css';
import ButtonB from '../../../../components/buttons/ButtonB/ButtonB';
import ButtonA from '../../../../components/buttons/ButtonA/ButtonA';
import AuthModal from './AuthModal/AuthModal';

const AuthSection = () => {
    const isLoggedIn = true; // Still simulating login for demonstration

    // State to control the visibility of the profile modal
    const [showProfileModal, setShowProfileModal] = useState(false);

    // Placeholder image URL
    const placeholderProfilePic = 'https://via.placeholder.com/300';

    // Placeholder user data
    const currentUser = {
        name: 'Munkh-irveej Vanchindorj',
        email: 'email@example.com',
        profilePic: 'https://via.placeholder.com/40'
    };

    // Function to toggle modal visibility
    const toggleProfileModal = () => {
        setShowProfileModal(prev => !prev);
    };

    // Function for "Manage account" - placeholder
    const handleManageAccount = () => {
        alert('Navigating to Manage Account...');
        setShowProfileModal(false); // Close modal after action
    };

    // Function for "Sign out" - placeholder
    const handleSignOut = () => {
        alert('Signing out...');
        setShowProfileModal(false); // Close modal after action
    };

    return (
        <div className="auth-section">
            {isLoggedIn ? (
                <div className="profile-section">
                    <img
                        src={currentUser.profilePic || placeholderProfilePic}
                        alt="Profile"
                        className="profile-pic"
                        onClick={toggleProfileModal}
                    />

                    {/* Render AuthModal conditionally */}
                    {showProfileModal && (
                        <AuthModal
                            user={currentUser}
                            onClose={toggleProfileModal}
                            onManageAccount={handleManageAccount}
                            onSignOut={handleSignOut}
                        />
                    )}
                </div>
            ) : (
                <div className="auth-buttons">
                    <ButtonA text="Log In" to='/login'/>
                    <ButtonB text="Join Us" to='/signup'/>
                </div>
            )}
        </div>
    );
}

export default AuthSection;