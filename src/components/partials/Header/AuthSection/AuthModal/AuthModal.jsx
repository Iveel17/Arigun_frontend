// components/AuthModal/AuthModal.jsx
import React from 'react';
import './AuthModal.css'; // Don't forget to create this CSS file

const AuthModal = ({ user, onClose, onManageAccount, onSignOut }) => {
    // Placeholder image URL - can be passed as prop or derived from user
    const placeholderProfilePic = 'https://via.placeholder.com/40';

    return (
        <div className="profile-modal">
            <div className="modal-header">
                <img src={user.profilePic || placeholderProfilePic} alt="Profile" className="modal-profile-pic" />
                <div className="user-info">
                    <p className="user-name">{user.name || 'User Name'}</p>
                    <p className="user-email">{user.email || 'user@example.com'}</p>
                </div>
            </div>
            <div className="modal-options">
                <button className="modal-option-button" onClick={onManageAccount}>
                    Manage account
                </button>
                <button className="modal-option-button" onClick={onSignOut}>
                    Sign out
                </button>
            </div>
        </div>
    );
};

export default AuthModal;