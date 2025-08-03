const textarea = document.getElementById("message");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");
const submitBtn = document.getElementById("submit-btn");

const maxLength = 100;

textarea.addEventListener("input", () => {
  const text = textarea.value;

  // Character count
  const currentLength = text.length;
  charCount.textContent = `Characters: ${currentLength} / ${maxLength}`;

  // Optional warning color
  charCount.style.color = currentLength > 90 ? "red" : "black";

  //  Word count (ignore extra spaces)
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  wordCount.textContent = `Words: ${words.length}`;

  // Button enable/disable
  if (currentLength === 0 || currentLength > maxLength) {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
});
