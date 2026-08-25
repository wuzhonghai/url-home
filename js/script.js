(function() {
    'use strict';

    // DOM 元素
    const tabs = document.querySelectorAll('.search-tab');
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    let currentEngine = 'baidu';

    const ENGINES = {
        baidu: {
            name: '百度',
            url: 'https://www.baidu.com/s',
            queryParam: 'wd',
            placeholder: '输入关键词，百度一下'
        },
        google: {
            name: 'Google',
            url: 'https://www.google.com/search',
            queryParam: 'q',
            placeholder: '输入关键词，Google 搜索'
        }
    };

    function switchEngine(engineKey) {
        if (engineKey === currentEngine) return;
        if (!ENGINES[engineKey]) return;

        currentEngine = engineKey;
        const engine = ENGINES[engineKey];

        tabs.forEach(tab => {
            const isActive = tab.dataset.engine === engineKey;
            tab.classList.toggle('active', isActive);
        });

        searchInput.placeholder = engine.placeholder;
    }

    function performSearch(query) {
        const trimmed = query.trim();
        if (!trimmed) {
            searchInput.focus();
            return;
        }

        const engine = ENGINES[currentEngine];
        if (!engine) return;

        const url = new URL(engine.url);
        url.searchParams.set(engine.queryParam, trimmed);
        window.open(url.toString(), '_blank');
    }

    // 标签点击
    tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
            const engine = this.dataset.engine;
            if (engine) switchEngine(engine);
        });
    });

    // 表单提交
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        performSearch(searchInput.value);
    });

    // 热门词点击
    document.querySelectorAll('.search-hint a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.trim();
            if (text) {
                searchInput.value = text;
                performSearch(text);
            }
        });
    });

    // 输入框聚焦选中
    searchInput.addEventListener('focus', function() {
        this.select();
    });

    // 初始化
    switchEngine('baidu');

    console.log('✅ 我的导航已启动！ 当前搜索引擎: ' + ENGINES[currentEngine].name);
})();