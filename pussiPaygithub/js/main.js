import './accordion.js';
import './translation.js';

// Функция копирования кошелька
document.getElementById('copyButton').addEventListener('click', function() {
    const walletAddress = document.querySelector('#walletAddress span');
    const textArea = document.createElement('textarea');
    textArea.value = walletAddress.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    // Визуальное подтверждение
    const originalText = walletAddress.textContent;
    walletAddress.textContent = 'Copied!';
    walletAddress.style.color = '#6a0dad';
    
    setTimeout(() => {
        walletAddress.textContent = originalText;
        walletAddress.style.color = '#fff';
    }, 1500);
});

// Клик по всему блоку адреса
document.getElementById('walletAddress').addEventListener('click', function() {
    document.getElementById('copyButton').click();
});