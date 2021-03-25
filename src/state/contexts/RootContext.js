import React from 'react';
import CustomersProvider from './CustomersContext';
import GroomersProvider from './GroomersContext';
import UsersContext from './UsersContext';
import APIContext from './APIContext';
import FormContext from './FormContext';
import PetsProvider from './PetsContext';
import AppointmentsProvider from './AppointmentsContext';

export const RootProvider = ({ children }) => {
  return (
    <UsersContext>
      <PetsProvider>
        <GroomersProvider>
          <AppointmentsProvider>
            <CustomersProvider>
              <FormContext>
                <APIContext>{children}</APIContext>
              </FormContext>
            </CustomersProvider>
          </AppointmentsProvider>
        </GroomersProvider>
      </PetsProvider>
    </UsersContext>
  );
};
