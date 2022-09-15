import React, { ReactNode, useState } from 'react';
import { Products } from './ShoppingCart';

const Product = ({
  prod,
  children,
  onIncrement,
  onDecrement
}: {
  prod: Products;
  onIncrement: (x: Products) => void;
  onDecrement: (x: Products) => void;
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
          <div className="card-footer text-end me-2">
            <div className="float-left">
              <span className="badge bg-light text-dark"> {prod.quantity}</span>

              <div className="btn-group">
                <button className="btn btn-outline-success" onClick={() => onIncrement(prod)}>
                  +
                </button>
                <button className="btn btn-outline-danger" onClick={() => onDecrement(prod)}>
                  -
                </button>
              </div>
            </div>

            <div className="float-right">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
