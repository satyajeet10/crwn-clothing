import { Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';
import {
  selectCategoriesMap,
  selectIsCategoriesIsLoading,
} from '../../store/categories/category.selector';

import './category.styles.scss';

const Category = () => {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='category-container'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
    </Fragment>
  );
};

export default Category;
