import React, { createContext, useState } from 'react'

// context (shares provider data to components)
export const PetsContext = createContext({})

// provider (holds the data for context to share)
export const PetsProvider = ({ children }) => {
    const [pets, setPets] = useState()

    return (
        <PetsContext.Provider value={[pets, setPets]}>
            {children}
        </PetsContext.Provider>
    )
}

export default PetsProvider