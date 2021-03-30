import React from 'react';
import CustomersProvider from './CustomersContext';
import GroomersProvider from './GroomersContext';
import UsersContext from './UsersContext';
import APIContext from './APIContext';
import FormContext from './FormContext';
import PetsProvider from './PetsContext';
// import AppointmentsProvider from './AppointmentsContext';

// AppointmentsProvider has been commented out because its not working properly.
// It should be used by the Appointments component and any other components that
// set appointments and render in the calendar (src/pages/Appointments).

export const RootProvider = ({ children }) => {
  return (
    <UsersContext>
      <PetsProvider>
        <GroomersProvider>
          {/* <AppointmentsProvider> */}
          <CustomersProvider>
            <FormContext>
              <APIContext>{children}</APIContext>
            </FormContext>
          </CustomersProvider>
          {/* </AppointmentsProvider> */}
        </GroomersProvider>
      </PetsProvider>
    </UsersContext>
  );
};
