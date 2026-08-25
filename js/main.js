(function() {
    'use strict';

    function updateClock() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('datetime').textContent = `${h}:${m}:${s}`;
    // 更新顶部日期（如果存在）
    const topDate = document.getElementById('topDate');
    if (topDate) {
        const year = now.getFullYear();
        const month = String(now.getMonth()+1).padStart(2,'0');
        const day = String(now.getDate()).padStart(2,'0');
        // 简单格式，您可自行扩展天干地支
        topDate.textContent = `${year}年${month}月${day}日 星期${'日一二三四五六'[now.getDay()]} ${h}:${m}`;
    }
}
    updateClock();
    setInterval(updateClock, 1000);

    document.getElementById('footerYear').textContent = new Date().getFullYear();

    document.getElementById('backTop').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const tabs = document.querySelectorAll('.search-tab');
    const searchInput = document.getElementById('searchInput');
    const searchForm = document.getElementById('searchForm');
    let currentEngine = 'baidu';

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentEngine = this.dataset.engine;
            searchInput.focus();
        });
    });

    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (!query) return;
        let url = '';
        if (currentEngine === 'baidu') {
            url = `https://www.baidu.com/s?wd=${encodeURIComponent(query)}`;
        } else if (currentEngine === 'google') {
            url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
        if (url) window.open(url, '_blank');
    });

    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    console.log('🌿 清新导航已加载');
})();
