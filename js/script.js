// Get the modal
let modal = document.querySelector(".modal");

// console.log(modal);
// Get the button that opens the modal
let btnList = document.querySelectorAll(".share-button");

// console.log(btnList);
// Get the <span> element that closes the modal
let close = document.querySelector(".close");

// When the user clicks the button, open the modal

for (let i = 0; i < btnList.length; i++) {
  btnList[i].addEventListener("click", function (event) {
    // alert("Hello");
    // console.log("TEST");
    // console.log(event.target);
    modal.style.display = "block";
  });
}

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// copy link
function copyLink() {
  // Get the text field
  let copyText = document.getElementById("link");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text");
}

// get-ticket page JS

function calculateTotal() {
  let checkoutBtn = document.querySelector(".checkout-button");
  let grandTotal = 0;
  const ticketTypeElements = document.querySelectorAll(".input-quantity");

  ticketTypeElements.forEach((ticketType) => {
    // console.log(ticketType);

    const quantity = parseInt(ticketType.value);
    // console.log(quantity);
    const price = parseInt(ticketType.getAttribute("data-price"));
    // console.log(price);
    grandTotal += quantity * price;
  });
  //   console.log(grandTotal);
  let total = document.getElementById("total");
  total.innerText = `Rs. ${grandTotal}`;
  checkoutBtn.disabled = grandTotal === 0;
}

document.querySelector(".menu-icon").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

function toggleNavbar() {
  document.querySelector("nav ul").classList.toggle("show");
}
