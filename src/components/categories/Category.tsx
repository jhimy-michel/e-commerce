import React from 'react';
import { Link } from 'react-router-dom';
import { List, Spinner } from 'reactstrap';
import { useCategoriesControllerFind } from '../../api/endpoints/categories-controller';
import { Category } from '../../api/endpoints/ecommerceApi.schemas';

function Categories() {
  const { data, isLoading, isError, isSuccess } = useCategoriesControllerFind();

  if (isLoading) {
    return <Spinner />;
  }

  const categories = data as Category[];

  return (
    <List>
      {categories.map((cat, index) => {
        const id = cat._id != null ? cat._id : index;
        return (
          <li key={cat._id}>
            <Link to={`/category/${id}`}>{cat.name}</Link>
          </li>
        );
      })}
    </List>
  );
}

export default Categories;
