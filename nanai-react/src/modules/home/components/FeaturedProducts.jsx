import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../../cart/components/AddToCartButton';
import { getAllKits, formatPrice } from '../../../data/kitsData';

const FeaturedProducts = () => {
  // Obtener solo los primeros 3 kits para destacar
  const featuredProducts = getAllKits().slice(0, 3);

  return (
    <section className="featured-products py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Nuestros Kits Destacados</h2>
        
        <div className="row">
          {featuredProducts.map(product => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="featured-image-container">
                  <img 
                    src={product.imagen} 
                    className="card-img-top featured-image" 
                    alt={product.nombre} 
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.nombre}</h5>
                  <p className="card-text">{product.descripcionBreve}</p>
                  <p className="card-text fw-bold">{formatPrice(product.precio)}</p>
                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/productos/${product.id}`} className="btn btn-outline-primary">
                      Ver Detalles
                    </Link>
                    <AddToCartButton product={product} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/kits" className="btn btn-primary">
            Ver Todos los Kits
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;