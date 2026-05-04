import React from 'react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, ShoppingCart, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Adicionado ao carrinho!', {
      description: 'Produto adicionado ao seu carrinho',
    });
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-5 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg text-gray-900">Detalhes do Produto</h1>
        </div>
      </div>

      {/* Product Image */}
      <div className="bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="px-5 py-6">
        {/* Category Badge */}
        <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs mb-3">
          {product.category}
        </div>

        {/* Title and Price */}
        <h1 className="text-2xl text-gray-900 mb-2">{product.name}</h1>
        <div className="flex items-center gap-4 mb-4">
          <p className="text-3xl text-purple-600">${product.price.toFixed(2)}</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-sm text-gray-600 ml-1">(4.8)</span>
          </div>
        </div>

        {/* Coupon Badge */}
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-3 rounded-xl mb-6 flex items-center gap-2">
          <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm opacity-90">Cupom Automático Disponível</p>
            <p className="text-xs opacity-75">Economize 15% no checkout</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg text-gray-900 mb-2">Descrição</h2>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-6">
          <h2 className="text-lg text-gray-900">Principais Características</h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <p className="text-sm text-gray-600">Materiais de qualidade premium</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <p className="text-sm text-gray-600">Garantia de 1 ano incluída</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
              <p className="text-sm text-gray-600">Frete grátis em pedidos acima de R$ 200</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Add to Cart Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-5 py-4 shadow-lg">
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow active:scale-95"
        >
          <ShoppingCart className="w-5 h-5" />
          <span className="text-lg">Adicionar ao Carrinho</span>
        </button>
      </div>
    </div>
  );
}