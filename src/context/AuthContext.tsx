import React, { createContext, useContext, useState, useEffect } from 'react';

interface TableInfo {
    id: string;
    name: string;
}

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string, tables: TableInfo[]) => void;
    logout: () => void;
    token: string | null;
    tables: TableInfo[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    const [tables, setTables] = useState<TableInfo[]>(() => {
        const savedTables = localStorage.getItem('tables');
        return savedTables ? JSON.parse(savedTables) : [];
    });

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
    }, [token]);

    useEffect(() => {
        if (tables.length > 0) {
            localStorage.setItem('tables', JSON.stringify(tables));
        } else {
            localStorage.removeItem('tables');
        }
    }, [tables]);

    const login = (newToken: string, newTables: TableInfo[]) => {
        setToken(newToken);
        setTables(newTables);
    };

    const logout = () => {
        setToken(null);
        setTables([]);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated: !!token, login, logout, token, tables }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
