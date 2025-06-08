// Fetch blocks when page loads
window.addEventListener("DOMContentLoaded", () => {
  fetchBlocks();
});

// Handle block form submission
document.getElementById("blockForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;

  const response = await fetch("/api/blocks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from, to, amount }),
  });

  const result = await response.json();

 const msg = document.getElementById("form-message");

if (response.ok) {
  msg.textContent = "✅ Block added successfully!";
  msg.style.color = "green";
  document.getElementById("blockForm").reset();
  fetchBlocks();
} else {
  msg.textContent = "❌ Error: " + result.message;
  msg.style.color = "red";
}

// Hide message after 4 seconds
setTimeout(() => {
  msg.textContent = "";
}, 4000);
});

// Fetch and display all blocks
async function fetchBlocks() {
  const res = await fetch("/api/blocks");
  const blocks = await res.json();

  const blockList = document.getElementById("blockList");
  blockList.innerHTML = "";

  blocks.forEach((block) => {
    const div = document.createElement("div");
    div.className = "block";

    const isGenesis = block.index === 0;

    div.innerHTML = `
      <p><strong>Index:</strong> ${block.index}</p>
      <p><strong>From:</strong> ${isGenesis ? 'N/A' : block.data?.from}</p>
      <p><strong>To:</strong> ${isGenesis ? 'N/A' : block.data?.to}</p>
      <p><strong>Amount:</strong> ${isGenesis ? 'N/A' : block.data?.amount}</p>
      <p><strong>Hash:</strong> ${block.hash}</p>
      <p><strong>Previous:</strong> ${block.previousHash}</p>
      <hr/>
    `;
    blockList.appendChild(div);
  });
}

// Validate the blockchain
async function validateChain() {
  const res = await fetch("/api/blocks/validate");
  const result = await res.json();

  const validationResult = document.getElementById("validation-result");
  if (result.valid) {
    validationResult.textContent = "✅ Blockchain is valid!";
    validationResult.style.color = "green";
  } else {
    validationResult.textContent = "❌ Blockchain is invalid!";
    validationResult.style.color = "red";
  }
}
