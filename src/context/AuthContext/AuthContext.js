import { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    
	const [token, setToken] = useState(
		JSON.parse(window.localStorage.getItem('token')),
	);

	useEffect(() => {
		if (token) window.localStorage.setItem('token', JSON.stringify(token));
		else window.localStorage.removeItem('token');
	}, [token]);

	return (
		<AuthContext.Provider value={{ token, setToken }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };