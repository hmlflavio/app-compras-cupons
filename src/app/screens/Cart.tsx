import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Plus, Minus, Trash2, Loader2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, couponSearching, couponApplied, discount, subtotal, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-5 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ArrowLeft className="w-6 h-6 text-gray-900" />
            </button>
            <h1 className="text-lg text-gray-900">Carrinho de Compras</h1>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center px-5 py-20">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-xl text-gray-900 mb-2">Seu carrinho está vazio</h2>
          <p className="text-gray-500 text-center mb-6">Adicione alguns produtos para começar</p>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl hover:shadow-lg transition-shadow"
          >
            Começar a Comprar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-40">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg text-gray-900">Carrinho de Compras</h1>
          <span className="ml-auto text-sm text-gray-500">
            {cart.reduce((sum, item) => sum + item.quantity, 0)} itens
          </span>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-5 py-4 space-y-3">
        <AnimatePresence>
          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100"
            >
              <div className="flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-xl bg-gray-50"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm text-gray-900 mb-1 line-clamp-2">{item.name}</h3>
                  <p className="text-purple-600 mb-2">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Minus className="w-4 h-4 text-gray-600" />
                      </button>
                      <span className="text-sm text-gray-900 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Plus className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Coupon Banner */}
      <div className="px-5 py-4">
        <AnimatePresence mode="wait">
          {couponSearching ? (
            <motion.div
              key="searching"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-5 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-3">
                <Loader2 className="w-6 h-6 animate-spin" />
                <div>
                  <p className="text-base mb-0.5">Procurando o melhor cupom...</p>
                  <p className="text-sm text-purple-100">Encontrando a melhor oferta para você</p>
                </div>
              </div>
            </motion.div>
          ) : couponApplied ? (
            <motion.div
              key="applied"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-5 rounded-2xl shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 opacity-10">
                <Sparkles className="w-32 h-32" />
              </div>
              <div className="relative">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg mb-1">Cupom Inteligente Aplicado!</p>
                    <p className="text-sm text-green-100">Você economizou R$ {discount.toFixed(2)}</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-3">
                  <p className="text-xs text-green-100 mb-1">Código do Cupom: ECONOMIZA15</p>
                  <p className="text-sm">15% de desconto em todo o pedido</p>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* Fixed Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-5 shadow-2xl">
        <div className="space-y-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span className="text-gray-900">R$ {subtotal.toFixed(2)}</span>
          </div>
          {couponApplied && (
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Desconto (15%)</span>
              <span className="text-green-600">-R$ {discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between border-t border-gray-200 pt-3">
            <span className="text-gray-900">Total</span>
            <span className="text-2xl text-purple-600">R$ {total.toFixed(2)}</span>
          </div>
        </div>
        <button
          onClick={() => navigate('/checkout')}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:shadow-lg transition-shadow active:scale-95"
        >
          Ir para o Checkout
        </button>
      </div>
    </div>
  );
}