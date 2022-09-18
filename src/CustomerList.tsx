import React, { useState } from 'react';

interface UserListType {
  id: number;
  name: string;
  img: string;
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
    { id: 1, img: 'https://picsum.photos/id/1010/60', name: 'testUser1', phone: '123-234' },
    { id: 2, img: 'https://picsum.photos/id/1011/60', name: 'testUser2', phone: '123-234' },
    { id: 3, img: 'https://picsum.photos/id/1012/60', name: 'testUser3', phone: '123-234' },
    { id: 4, img: 'https://picsum.photos/id/1013/60', name: 'testUser4', phone: '123-234' }
  ]
};

function CustomerList(){
  const [customerState, setCustomerState] = useState<CustomerState>(initialState);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleRefresh = () => {
    setCustomerState({ ...customerState, customerCount: customerState.customerCount + 1 });
  };

  const updatePicture = (cust: UserListType, index: number): void => {
    console.log(cust);
    const custArray = customerState.userList;
    custArray[index].img = 'https://picsum.photos/id/104/60';

    setCustomerState({ ...customerState, userList: custArray });
  };

  const renderTableBody = (): JSX.Element[] => {
    return customerState.userList.map((customer: UserListType, index: number) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>
            <img src={customer.img} alt="Customer" />
            <div>
              <button className="btn btn-sm btn-secondary" onClick={() => updatePicture(customer, index)}>
                Change Picture
              </button>
            </div>
          </td>
          <td>{customer.name}</td>
          <td>{customer.phone}</td>
        </tr>
      );
    });
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
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <td>#</td>
            <td>photo</td>
            <td>name</td>
            <td>phone</td>
          </tr>
        </thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </>
  );
}

export default CustomerList;
