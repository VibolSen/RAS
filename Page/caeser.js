// Caesar Cipher Encryption
function caesarEncrypt(plainText, shift) {
  return plainText
    .split("")
    .map((char) => {
      if (char.match(/[a-z]/i)) {
        const code = char.charCodeAt(0);
        let shiftedCode;

        // Capital letters
        if (code >= 65 && code <= 90) {
          shiftedCode = ((code - 65 + shift) % 26) + 65;
        }
        // Lowercase letters
        else if (code >= 97 && code <= 122) {
          shiftedCode = ((code - 97 + shift) % 26) + 97;
        }
        return String.fromCharCode(shiftedCode);
      }
      return char; // Non-alphabetic characters are not changed
    })
    .join("");
}

// Reset fields
function resetFields() {
  document.getElementById("caesar-input").value = "";
  document.getElementById("encryptionKey").value = "";
  document.getElementById("caesar-output").innerText = "";
}

// Encrypt function
function encryptCaesar() {
  const text = document.getElementById("caesar-input").value;
  const shift = parseInt(document.getElementById("encryptionKey").value, 10);
  const encrypted = caesarEncrypt(text, shift);
  document.getElementById("caesar-output").innerText =
    "Encrypted: " + encrypted;
}
