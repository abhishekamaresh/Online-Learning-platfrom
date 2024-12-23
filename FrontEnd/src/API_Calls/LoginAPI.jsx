export const login = async (email, password, setUser) => {
    const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
        const errorMessage = data.message || 'An error occurred during login.';
        throw new Error(errorMessage);
    }

    localStorage.setItem('Token', data.token);
    localStorage.setItem('user', JSON.stringify({ 
        username: data.username, 
        email: data.email, 
        userId: data.userId 
    }));
    setUser({ 
        username: data.username, 
        email: data.email, 
        userId: data.userId 
    }); 
};