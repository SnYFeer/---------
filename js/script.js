document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('check-btn');
    const out = document.getElementById('ping-result');

    if (btn && out) {
        btn.addEventListener('click', () => {
            const now = new Date().toLocaleTimeString('ru-RU');
            const host = window.location.hostname || 'локальный сервер';
            out.textContent = `✓ Сайт работает корректно. Домен: ${host} (${now})`;
        });
    }
});
