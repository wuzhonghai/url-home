(function() {
    'use strict';

    // 实时时钟
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        document.getElementById('datetime').textContent = `${h}:${m}:${s}`;
    }
    updateClock();
    setInterval(updateClock, 1000);

    // 底部年份
    document.getElementById('footerYear').textContent = new Date().getFullYear();

    // 返回顶部
    document.getElementById('backTop').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 搜索引擎切换
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

    // 搜索提交
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

    // Ctrl+K 聚焦搜索
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    console.log('🌿 清新导航已加载');
})();