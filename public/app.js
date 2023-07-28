function toggleTextDecoration(checkbox, itemIndex) {
    checkbox.disabled = true; // Disable the checkbox to prevent multiple clicks
    fetch("/check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ itemIndex })
    })
      .then(() => {
        const item = document.getElementById(`item_${itemIndex}`);
        if (checkbox.checked) {
          item.style.textDecoration = 'line-through';
        } else {
          item.style.textDecoration = '';
        }
      })
      .finally(() => {
        checkbox.disabled = false; // Re-enable the checkbox
      });
  }