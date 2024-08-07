import React, { createContext, useEffect, useState } from 'react';

export const DashboardContext = createContext();

export const DcontextProvider = ({ children }) => {
    const [state, setState] = useState(false);

    return (
        <DashboardContext.Provider value={{ state, setState }}>
            {children}
        </DashboardContext.Provider>
    );
};
