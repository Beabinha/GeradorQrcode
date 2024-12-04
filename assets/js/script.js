// Função principal para gerar os QR codes
function gerarQRCodes(codes) {
  const qrArea = document.getElementById("qrcode-area");

  codes.forEach((code) => {
    if (isValidCode(code)) {
      // Cria um container para o QR code
      const div = document.createElement("div");
      div.className = "qrcode-container";

      // Adiciona o QRCode dentro da div
      new QRCode(div, {
        text: code,
        width: 128,
        height: 128,
      });

      // Adiciona o container ao HTML
      qrArea.appendChild(div);
    }
  });
}

// Chama a função para gerar os QR codes
gerarQRCodes(internalCodes);