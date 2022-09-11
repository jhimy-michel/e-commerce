import React, { useState } from 'react';

interface UserListType {
  id: number;
  name: string;
  phone: string;
}

interface CustomerState {
  pageTitle: string;
  customerCount: number;
  userList: UserListType[];
}
const initialState: CustomerState = {
  pageTitle: 'Customer',
  customerCount: 0,
  userList: [
    { id: 1, name: 'testUser1', phone: '123-234' },
    { id: 2, name: 'testUser2', phone: '123-234' },
    { id: 3, name: 'testUser3', phone: '123-234' },
    { id: 4, name: 'testUser4', phone: '123-234' }
  ]
};

const MainContent = (): JSX.Element => {
  const [customerState, setCustomerState] = useState<CustomerState>(initialState);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleRefresh = () => {
    console.log('hola');
    setCustomerState({ ...customerState, customerCount: customerState.customerCount + 1 });
  };

  return (
    <>
      <h4 className="m-1 p-1">
        {customerState.pageTitle}
        <span className="badge bg-secondary m-2">{customerState.customerCount}</span>
        <button className="btn btn-info" onClick={handleRefresh}>
          {' '}
          Refresh
        </button>
      </h4>
      <table className="table">
        <thead>
          <tr>
            <td>#</td>
            <td>name</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>
          {customerState.userList.map((customer: UserListType) => {
            return (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default MainContent;
