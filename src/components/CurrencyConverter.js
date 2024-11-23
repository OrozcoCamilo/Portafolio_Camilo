// src/components/CurrencyConverter.js
import React, { useState, useEffect } from 'react';
import './CurrencyConverter.css'; // Asegúrate de tener un archivo CSS para los estilos

const CurrencyConverter = () => {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('COP');
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(false);

  // API URL con tu clave de API
  const API_KEY = '79a6835c39e362f9986835f9'; // Reemplaza con tu clave de API
  const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency}`;

  useEffect(() => {
    const fetchExchangeRate = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        if (data.result === 'success') {
          const rate = data.conversion_rates[toCurrency];
          setExchangeRate(rate);
        } else {
          console.error('Error en la API:', data.error);
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
      setLoading(false);
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate) {
      setConvertedAmount(amount * exchangeRate);
    }
  }, [amount, exchangeRate]);

  return (
    <div className="currency-converter">
      <h2>Convertidor de Moneda</h2>
      <div>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          min="1" 
          disabled={loading}
        />
        <select 
          value={fromCurrency} 
          onChange={(e) => setFromCurrency(e.target.value)} 
          disabled={loading}
        >
          <option value="USD">USD</option>
          <option value="COP">COP</option>
          <option value="EUR">EUR</option>
          <option value="MXN">MXN</option>
          <option value="ARS">ARS</option>
          {/* Agrega aquí más monedas si es necesario */}
        </select>
        <span> a </span>
        <select 
          value={toCurrency} 
          onChange={(e) => setToCurrency(e.target.value)} 
          disabled={loading}
        >
          <option value="USD">USD</option>
          <option value="COP">COP</option>
          <option value="EUR">EUR</option>
          <option value="MXN">MXN</option>
          <option value="ARS">ARS</option>
          {/* Agrega aquí más monedas si es necesario */}
        </select>
      </div>
      <div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <h3>Resultado: {convertedAmount ? convertedAmount.toFixed(2) : 'Ingrese un monto'}</h3>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;


