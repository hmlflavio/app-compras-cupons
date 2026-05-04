import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { CheckCircle, Home, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

export default function Success() {
  const navigate = useNavigate();
  const { discount, total, clearCart } = useCart();

  useEffect(() => {
    // Trigger confetti animation
    const duration = 3000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#7C3AED', '#3B82F6', '#10B981'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#7C3AED', '#3B82F6', '#10B981'],
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleBackToHome = () => {
    clearCart();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50 flex flex-col items-center justify-center px-5 py-12">
      {/* Success Icon */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 w-32 h-32 rounded-full flex items-center justify-center shadow-2xl">
          <CheckCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
        </div>
        <div className="absolute -top-2 -right-2">
          <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
        </div>
        <div className="absolute -bottom-2 -left-2">
          <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
        </div>
      </div>

      {/* Success Message */}
      <h1 className="text-3xl text-gray-900 mb-2 text-center">Pedido Confirmado!</h1>
      <p className="text-gray-600 text-center mb-8 max-w-sm">
        Seu pedido foi realizado com sucesso e será entregue em breve.
      </p>

      {/* Savings Card */}
      <div className="w-full max-w-md bg-gradient-to-br from-green-500 to-emerald-600 text-white rounded-3xl p-8 mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <svg className="w-40 h-40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
          </svg>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl">Economia Inteligente Aplicada!</h2>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-baseline">
              <span className="text-green-100">Você economizou com cupom automático:</span>
              <span className="text-4xl">R$ {discount.toFixed(2)}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="flex justify-between mb-2">
                <span className="text-sm text-green-100">Valor Final Pago:</span>
                <span className="text-sm">R$ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-green-100">Código do Cupom:</span>
                <span className="text-sm">ECONOMIZA15</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Info */}
      <div className="w-full max-w-md bg-white rounded-2xl p-6 mb-6 shadow-sm border border-gray-100">
        <h3 className="text-lg text-gray-900 mb-4">Detalhes do Pedido</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Número do Pedido:</span>
            <span className="text-gray-900">#EJ{Math.floor(Math.random() * 1000000)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Entrega Estimada:</span>
            <span className="text-gray-900">3-5 dias úteis</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Rastreamento:</span>
            <span className="text-purple-600">Disponível em breve</span>
          </div>
        </div>
      </div>

      {/* Back to Home Button */}
      <button
        onClick={handleBackToHome}
        className="w-full max-w-md bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 hover:shadow-lg transition-shadow active:scale-95 mb-4"
      >
        <Home className="w-5 h-5" />
        <span className="text-lg">Voltar para a Página Inicial</span>
      </button>

      <p className="text-sm text-gray-500 text-center max-w-sm">
        Um email de confirmação foi enviado para o seu endereço cadastrado.
      </p>
    </div>
  );
}