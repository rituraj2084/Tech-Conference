const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams);
const silverQty = urlParams.get("silver-qty");
const goldQty = urlParams.get("gold-qty");
const fanpitQty = urlParams.get("fanpit-qty");
const goldTableQty = urlParams.get("gold-table-qty");
const diamondTableQty = urlParams.get("diamond-table-qty");

const silverPrice = 999.0;
const goldPrice = 1499.0;
const fanpitPrice = 2499.0;
const goldTablePrice = 50000.0;
const diamondTablePrice = 85000.0;

// console.log(silverQty);
// console.log(goldQty);
// console.log(fanpitQty);
// console.log(goldTableQty);
// console.log(diamondTableQty);

const bookingDetails = document.querySelector(".booking-details");

if (silverQty !== "0") {
  bookingDetails.innerHTML += `<div>
  <p>Phase 1- Silver</p>
  <p>Price: Rs. 1499.00</p>
  <div class="checkout-rupees">
    <p>Qty: ${silverQty}</p>
    <p>Rs. ${silverPrice * silverQty}</p>
  </div>
</div>
<hr />`;
}

if (goldQty !== "0") {
  bookingDetails.innerHTML += `<div>
  <p>Phase 1- Gold</p>
  <p>Price: Rs. 1499.00</p>
  <div class="checkout-rupees">
    <p>Qty: ${goldQty}</p>
    <p>Rs. ${goldPrice * goldQty}</p>
  </div>
</div>
<hr />`;
}

if (fanpitQty !== "0") {
  bookingDetails.innerHTML += `<div>
  <p>PHASE 1-FANPIT</p>
  <p>Price: Rs. 2499.00</p>
  <div class="checkout-rupees">
    <p>Qty: ${fanpitQty}</p>
    <p>Rs. ${fanpitPrice * fanpitQty}</p>
  </div>
</div>
<hr />`;
}

if (goldTableQty !== "0") {
  bookingDetails.innerHTML += `<div>
  <p>GOLD TABLE (4-6PAX)</p>
  <p>Price: Rs. 50000.00</p>
  <div class="checkout-rupees">
    <p>Qty: ${goldTableQty}</p>
    <p>Rs. ${goldTablePrice * goldTableQty}</p>
  </div>
</div>
<hr />`;
}

if (diamondTableQty !== "0") {
  bookingDetails.innerHTML += `<div>
  <p>DIAMOND TABLE (6-8 PAX)</p>
  <p>Price: Rs. 85000.00</p>
  <div class="checkout-rupees">
    <p>Qty: ${diamondTableQty}</p>
    <p>Rs. ${diamondTablePrice * diamondTableQty}</p>
  </div>
</div>
<hr />`;
}

const subtotal =
  silverPrice * silverQty +
  goldPrice * goldQty +
  fanpitPrice * fanpitQty +
  goldTablePrice * goldTableQty +
  diamondTablePrice * diamondTableQty;

bookingDetails.innerHTML += `<div class="checkout-rupees">
<p>Subtotal</p>
<p>Rs. ${subtotal}</p>
</div>`;

bookingDetails.innerHTML += `<div class="checkout-rupees">
<p>Service fee</p>
<p>Rs. 100.00</p>
</div>
<hr />`;

bookingDetails.innerHTML += `<div class="checkout-rupees">
<p>Total</p>
<p>Rs. ${subtotal + 100.0}</p>
</div>`;

function toggleNavbar() {
  document.querySelector("nav ul").classList.toggle("show");
}
