import React from 'react';
import { List, Spinner } from 'reactstrap';
import { useCategoriesControllerFind } from '../../api/endpoints/categories-controller';
import { Category } from '../../api/endpoints/ecommerceApi.schemas';

function Categories() {
  const { data, isLoading, isError, isSuccess } = useCategoriesControllerFind();
  if (isLoading) {
    return <Spinner />;
  }
  console.log(data);
  const categories = data as Category[];
  return (
    <List>
      {categories.map((cat) => {
        return <li key={cat._id}>{cat.name}</li>;
      })}
    </List>
  );
}

export default Categories;
