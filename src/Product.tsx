import React, { ReactNode, useState } from 'react';
import { Products } from './ShoppingCart';

const Product = ({
  prod,
  children
}: {
  prod: Products;
  children?: React.PropsWithChildren<ReactNode>;
}): JSX.Element => {
  const [product, setProduct] = useState<Products>(prod);

  return (
    <div className="col-lg-6">
      <div className="card m-2">
        <div className="card-body">
          <div className="text-muted"># {product.id}</div>
          <h5 className="pt-2 border-top">{product.productName}</h5>
          <div>$ {product.price}</div>
          <div className="card-footer text-right">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
