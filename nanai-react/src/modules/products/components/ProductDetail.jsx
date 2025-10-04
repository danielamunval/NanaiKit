import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../../cart/components/AddToCartButton';
import { getAllKits, formatPrice } from '../../../data/kitsData';

const ProductDetail = ({ product }) => {
  if (!product) return null;

  // Obtener productos relacionados (máximo 3)
  const allKits = getAllKits();
  const relatedProducts = allKits
    .filter(kit => kit.id !== product.id)
    .slice(0, 3);

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-image-container">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image" 
          />
        </div>
        
        <div className="product-info-container">
          <h1 className="product-title">{product.name}</h1>
          
          {product.nivel && (
            <div className="product-level mb-3">
              <span className="badge bg-secondary">{product.nivel}</span>
            </div>
          )}
          
          <p className="product-price">{formatPrice(product.price)}</p>
          
          <div className="product-description">
            <p>{product.longDescription}</p>
          </div>
          
          <div className="product-actions">
            <AddToCartButton product={product} />
            <Link to="/carrito" className="btn btn-outline-primary">
              Ver Carrito
            </Link>
          </div>
          
          <div className="product-details">
            <div className="product-benefits">
              <h3>Beneficios</h3>
              <ul>
                {product.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            
            <div className="product-includes">
              <h3>Incluye</h3>
              <ul>
                {product.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {relatedProducts.length > 0 && (
        <div className="related-products">
          <h2>También te puede interesar</h2>
          <div className="related-products-container">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="related-product">
                <img 
                  src={relatedProduct.imagen} 
                  alt={relatedProduct.nombre} 
                  className="related-product-image" 
                />
                <h3>{relatedProduct.nombre}</h3>
                <p className="related-product-price">
                  {formatPrice(relatedProduct.precio)}
                </p>
                <Link 
                  to={`/productos/${relatedProduct.id}`} 
                  className="btn btn-sm btn-outline-primary"
                >
                  Ver Detalles
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;