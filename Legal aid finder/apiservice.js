const API_URL = 'https://legal-aid-finder-backend.vercel.app/api'; // Replace with your backend URL

//legal-aid-finder-backend.vercel.app

// Register a new user
const registerUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Login a user
const loginUser = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Get user info
const getUserInfo = async (token) => {
    try {
        const response = await fetch(`${API_URL}/users/info`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Update user info
const updateUserInfo = async (userData, token) => {
    try {
        const response = await fetch(`${API_URL}/users/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Reset password
const resetPassword = async (userData) => {
    try {
        const response = await fetch(`${API_URL}/users/reset-password`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Approve a lawyer
const approveLawyer = async (id, token) => {
    try {
        const response = await fetch(`${API_URL}/admin/approve-lawyer/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Delete a user or lawyer
const deleteAccount = async (role, id, token) => {
    try {
        const response = await fetch(`${API_URL}/admin/delete-account/${role}/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// View all complaints
const viewComplaints = async (token) => {
    try {
        const response = await fetch(`${API_URL}/admin/view-complaints`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

// Resolve a complaint
const resolveComplaint = async (id, token) => {
    try {
        const response = await fetch(`${API_URL}/admin/resolve-complaint/${id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export {
    registerUser,
    loginUser,
    getUserInfo,
    updateUserInfo,
    resetPassword,
    approveLawyer,
    deleteAccount,
    viewComplaints,
    resolveComplaint
};