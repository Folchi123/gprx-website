/* =================================================================
   Greenpoint Pharmacy — Application JavaScript
   4026 Greenpoint Ave, Sunnyside, NY 11104 | gprxpharmacy.com
   ================================================================= */

// ===== PAGE ROUTER =====
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (name === 'shop') renderProducts('all');
  if (name === 'ltc') window.scrollTo({top:0});
  if (name === 'compounding') window.scrollTo({top:0});
  if (name === 'checkout') renderCheckoutSummary();
}