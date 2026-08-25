(function() {
    'use strict';

    // --- 实时时钟 & 日期 ---
    function updateClock() {
        const now = new Date();
        const h = String(now.getHours()).padStart(2, '0');
        const m = String(now.getMinutes()).padStart(2, '0');
        const s = String(now.getSeconds()).padStart(2, '0');
        // 更新右上角时间（如果有 #datetime 元素，但本版无，保留以防兼容）
        const datetimeEl = document.getElementById('datetime');
        if (datetimeEl) datetimeEl.textContent = `${h}:${m}:${s}`;

        // 更新顶部日期栏
        const topDate = document.getElementById('topDate');
        if (topDate) {
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
            const wd = weekdays[now.getDay()];
            topDate.textContent = `${year}年${month}月${day}日 星期${wd} ${h}:${m}`;
        }
    }
    updateClock();
    setInterval(updateClock, 1000);

    // --- 底部年份 ---
    const footerYear = document.getElementById('footerYear');
    if (footerYear) footerYear.textContent = new Date().getFullYear();

    // --- 返回顶部 ---
    const backTop = document.getElementById('backTop');
    if (backTop) {
        backTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- 搜索引擎切换 ---
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

    // --- 搜索提交 ---
    if (searchForm) {
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
    }

    // --- Ctrl+K 聚焦搜索 ---
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) searchInput.focus();
        }
    });

    console.log('🌿 清新导航已加载 (仿hao268)');
})();