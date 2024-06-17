export const ADD_CUSTOMER = 'ADD_CUSTOMER';

export const addCustomer = (customer) => ({
  type: ADD_CUSTOMER,
  payload: customer
});
