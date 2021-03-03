import React from 'react';
import CustomersProvider from './CustomersContext';
import GroomersProvider from './GroomersContext';
import UsersContext from './UsersContext';
import APIContext from './APIContext';
import FormContext from './FormContext';
import PetsContext, { PetsProvider } from './PetsContext';

export const RootProvider = ({ children }) => {
  return (
    <UsersContext>
      <PetsProvider>
        <GroomersProvider>
          <CustomersProvider>
            <FormContext>
              <APIContext>{children}</APIContext>
            </FormContext>
          </CustomersProvider>
        </GroomersProvider>
      </PetsProvider>
    </UsersContext>
  );
};
