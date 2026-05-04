import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, CreditCard, Wallet, Building2, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { total, discount, subtotal } = useCart();
  const [selectedPayment, setSelectedPayment] = useState('card');

  const paymentMethods = [
    { id: 'card', name: 'Cartão de Crédito/Débito', icon: CreditCard },
    { id: 'wallet', name: 'Carteira Digital', icon: Wallet },
    { id: 'bank', name: 'Transferência Bancária', icon: Building2 },
  ];

  const handlePlaceOrder = () => {
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 px-5 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg text-gray-900">Finalizar Compra</h1>
        </div>
      </div>

      <div className="px-5 py-6 space-y-6">
        {/* Delivery Address */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <MapPin className="w-5 h-5 text-purple-600" />
              </div>
              <h2 className="text-lg text-gray-900">Endereço de Entrega</h2>
            </div>
            <button className="text-sm text-purple-600 hover:text-purple-700">Alterar</button>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-900 mb-1">João Silva</p>
            <p className="text-sm text-gray-600">Rua das Tecnologias, 123, São Paulo</p>
            <p className="text-sm text-gray-600">CEP 01234-567, Brasil</p>
            <p className="text-sm text-gray-600 mt-2">Telefone: (11) 98765-4321</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg text-gray-900 mb-4">Forma de Pagamento</h2>
          <div className="space-y-3">
            {paymentMethods.map((method) => {
              const Icon = method.icon;
              return (
                <button
                  key={method.id}
                  onClick={() => setSelectedPayment(method.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                    selectedPayment === method.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${
                    selectedPayment === method.id ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`flex-1 text-left ${
                    selectedPayment === method.id ? 'text-purple-600' : 'text-gray-900'
                  }`}>
                    {method.name}
                  </span>
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPayment === method.id ? 'border-purple-600' : 'border-gray-300'
                  }`}>
                    {selectedPayment === method.id && (
                      <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {selectedPayment === 'card' && (
            <div className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Número do Cartão"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="MM/AA"
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <h2 className="text-lg text-gray-900 mb-4">Resumo do Pedido</h2>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-900">R$ {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-green-600">Desconto Cupom Inteligente</span>
              <span className="text-green-600">-R$ {discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Frete</span>
              <span className="text-green-600">GRÁTIS</span>
            </div>
            <div className="border-t border-gray-200 pt-3 flex justify-between">
              <span className="text-gray-900">Total</span>
              <span className="text-2xl text-purple-600">R$ {total.toFixed(2)}</span>
            </div>
          </div>

          {discount > 0 && (
            <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800 mb-1">🎉 Você está economizando R$ {discount.toFixed(2)} com cupom automático!</p>
              <p className="text-xs text-green-600">Aplicado automaticamente no checkout</p>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-5 py-5 shadow-2xl">
        <button
          onClick={handlePlaceOrder}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl hover:shadow-lg transition-shadow active:scale-95 text-lg"
        >
          Finalizar Pedido · R$ {total.toFixed(2)}
        </button>
      </div>
    </div>
  );
}