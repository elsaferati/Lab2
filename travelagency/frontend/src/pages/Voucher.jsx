import React, { useState } from 'react';

export default function VoucherPage() {
  const [amount, setAmount] = useState(25);
  const [quantity, setQuantity] = useState(1);

  const total = amount * quantity;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <h1>Create your own voucher!</h1>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Voucher Preview */}
        <div style={{ flex: 1, minWidth: '300px', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
          <h2 style={{ color: 'magenta' }}>WIZZ AIR GIFT VOUCHER</h2>
          <textarea
            placeholder="Please enter your personal message"
            maxLength={140}
            style={{ width: '100%', height: '100px', marginTop: '1rem' }}
          />
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            To book your flight visit <a href="https://wizzair.com" target="_blank" rel="noreferrer">wizzair.com</a>
          </p>
        </div>

        {/* Controls */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <label>Choose Voucher Amount:</label>
          <div>
            <label>
              <input
                type="radio"
                value={25}
                checked={amount === 25}
                onChange={() => setAmount(25)}
              />
              €25.00
            </label>
            <label style={{ marginLeft: '1rem' }}>
              <input
                type="radio"
                value={50}
                checked={amount === 50}
                onChange={() => setAmount(50)}
              />
              €50.00
            </label>
          </div>

          <div style={{ marginTop: '1rem' }}>
            <label>Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              style={{ width: '60px', marginLeft: '0.5rem' }}
            />
          </div>

          <h3 style={{ marginTop: '1rem' }}>TOTAL: €{total.toFixed(2)}</h3>

          <p style={{ color: 'green', fontWeight: 'bold' }}>✓ Everything looks fine. Please continue!</p>
        </div>
      </div>

      {/* Sign-in prompt */}
      <div style={{ marginTop: '2rem', padding: '1rem', borderTop: '1px solid #ccc' }}>
        <h3>Terms and Conditions</h3>
        <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>You need to sign in to continue.</p>
        <button style={{ backgroundColor: '#c07', color: 'white', padding: '0.5rem 1rem', border: 'none', marginTop: '1rem' }}>
          SIGN IN
        </button>
        <p style={{ marginTop: '0.5rem' }}>
          or <a href="#">Create a new account to continue</a>
        </p>
      </div>
    </div>
  );
}
