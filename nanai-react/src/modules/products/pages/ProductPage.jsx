import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';
import { getKitById } from '../../../data/kitsData';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      setLoading(true);
      
      setTimeout(() => {
        const foundProduct = getKitById(productId);
        
        if (foundProduct) {
          // Adaptar la estructura para que coincida con lo que espera ProductDetail
          const adaptedProduct = {
            id: foundProduct.id,
            name: foundProduct.nombre,
            description: foundProduct.descripcionBreve,
            longDescription: foundProduct.descripcion,
            image: foundProduct.imagen,
            price: foundProduct.precio,
            nivel: foundProduct.nivelTexto,
            categoria: foundProduct.categoria,
            benefits: [
              foundProduct.perfectoPara,
              'Productos cuidadosamente seleccionados',
              'Guía de uso incluida',
              'Envío gratuito en compras sobre $30.000'
            ],
            includes: foundProduct.incluye
          };
          
          setProduct(adaptedProduct);
          setLoading(false);
        } else {
          setError('Producto no encontrado');
          setLoading(false);
        }
      }, 300);
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div className="product-page-loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p>Cargando información del producto...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="product-page-error">
        <h2>Error</h2>
        <p>{error}</p>
        <button 
          className="btn btn-primary" 
          onClick={() => navigate('/kits')}
        >
          Ver todos los kits
        </button>
      </div>
    );
  }

  return (
    <div className="product-page">
      {product && <ProductDetail product={product} />}
      
      <div className="product-page-decoration">
        <img 
          src="/images/cart-decoration.svg" 
          alt="Decoración" 
          className="decoration-image" 
        />
      </div>
    </div>
  );
};

export default ProductPage;