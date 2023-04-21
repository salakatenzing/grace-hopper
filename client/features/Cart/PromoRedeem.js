import React from 'react';

export default function PromoRedeem() {
  return (
    <form class="card p-2">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Promo code" />
        <button type="submit" class="btn btn-secondary">
          Redeem
        </button>
      </div>
    </form>
  );
}
