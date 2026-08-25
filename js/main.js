// ==================== 网址之家主脚本 ====================

// ---------- 默认网址数据 ----------
const DEFAULT_SITES = [
    // 常用推荐
    { name: 'GitHub', url: 'https://github.com', category: '常用推荐', desc: '全球最大的代码托管平台', custom: false },
    { name: 'B站', url: 'https://www.bilibili.com', category: '常用推荐', desc: '哔哩哔哩视频弹幕网站', custom: false },
    { name: '知乎', url: 'https://www.zhihu.com', category: '常用推荐', desc: '中文互联网问答社区', custom: false },
    { name: '豆瓣', url: 'https://www.douban.com', category: '常用推荐', desc: '发现生活中有趣的事物', custom: false },
    { name: '微博', url: 'https://weibo.com', category: '常用推荐', desc: '社交媒体平台', custom: false },
    { name: '百度', url: 'https://www.baidu.com', category: '常用推荐', desc: '中文搜索引擎', custom: false },
    { name: '淘宝', url: 'https://www.taobao.com', category: '常用推荐', desc: '网购零售平台', custom: false },
    { name: '京东', url: 'https://www.jd.com', category: '常用推荐', desc: '综合网上购物商城', custom: false },
    { name: '网易云音乐', url: 'https://music.163.com', category: '常用推荐', desc: '音乐发现与分享平台', custom: false },
    { name: '少数派', url: 'https://sspai.com', category: '常用推荐', desc: '数字生活指南', custom: false },
    { name: 'V2EX', url: 'https://www.v2ex.com', category: '常用推荐', desc: '创意工作者社区', custom: false },
    { name: '掘金', url: 'https://juejin.cn', category: '常用推荐', desc: '开发者技术社区', custom: false },

    // 搜索引擎
    { name: 'Google', url: 'https://www.google.com', category: '搜索引擎', desc: '全球搜索引擎', custom: false },
    { name: '百度', url: 'https://www.baidu.com', category: '搜索引擎', desc: '中文搜索引擎', custom: false },
    { name: '必应', url: 'https://www.bing.com', category: '搜索引擎', desc: '微软搜索引擎', custom: false },
    { name: '搜狗', url: 'https://www.sogou.com', category: '搜索引擎', desc: '中文搜索服务', custom: false },
    { name: 'DuckDuckGo', url: 'https://duckduckgo.com', category: '搜索引擎', desc: '隐私保护搜索', custom: false },
    { name: 'Yandex', url: 'https://yandex.com', category: '搜索引擎', desc: '俄罗斯搜索引擎', custom: false },

    // 社交网络
    { name: '微信', url: 'https://weixin.qq.com', category: '社交网络', desc: '腾讯即时通讯工具', custom: false },
    { name: '微博', url: 'https://weibo.com', category: '社交网络', desc: '社交媒体平台', custom: false },
    { name: '豆瓣', url: 'https://www.douban.com', category: '社交网络', desc: '兴趣社交社区', custom: false },
    { name: '知乎', url: 'https://www.zhihu.com', category: '社交网络', desc: '问答社区', custom: false },
    { name: 'Reddit', url: 'https://www.reddit.com', category: '社交网络', desc: '国际论坛社区', custom: false },
    { name: 'Twitter', url: 'https://twitter.com', category: '社交网络', desc: '全球社交平台', custom: false },
    { name: 'Telegram', url: 'https://telegram.org', category: '社交网络', desc: '加密即时通讯', custom: false },

    // 视频娱乐
    { name: 'B站', url: 'https://www.bilibili.com', category: '视频娱乐', desc: '哔哩哔哩弹幕视频', custom: false },
    { name: 'YouTube', url: 'https://www.youtube.com', category: '视频娱乐', desc: '全球视频分享平台', custom: false },
    { name: '腾讯视频', url: 'https://v.qq.com', category: '视频娱乐', desc: '在线视频平台', custom: false },
    { name: '爱奇艺', url: 'https://www.iqiyi.com', category: '视频娱乐', desc: '高清视频平台', custom: false },
    { name: '优酷', url: 'https://www.youku.com', category: '视频娱乐', desc: '视频分享平台', custom: false },
    { name: '抖音', url: 'https://www.douyin.com', category: '视频娱乐', desc: '短视频平台', custom: false },
    { name: 'Netflix', url: 'https://www.netflix.com', category: '视频娱乐', desc: '流媒体平台', custom: false },
    { name: 'Pixiv', url: 'https://www.pixiv.net', category: '视频娱乐', desc: '插画创作社区', custom: false },

    // 购物消费
    { name: '淘宝', url: 'https://www.taobao.com', category: '购物消费', desc: '网购零售平台', custom: false },
    { name: '京东', url: 'https://www.jd.com', category: '购物消费', desc: '综合购物商城', custom: false },
    { name: '拼多多', url: 'https://www.pinduoduo.com', category: '购物消费', desc: '新电商平台', custom: false },
    { name: '天猫', url: 'https://www.tmall.com', category: '购物消费', desc: '品牌购物平台', custom: false },
    { name: '苏宁易购', url: 'https://www.suning.com', category: '购物消费', desc: '家电购物平台', custom: false },
    { name: 'Amazon', url: 'https://www.amazon.com', category: '购物消费', desc: '国际电商平台', custom: false },
    { name: '当当', url: 'https://www.dangdang.com', category: '购物消费', desc: '图书购物平台', custom: false },
    { name: '什么值得买', url: 'https://www.smzdm.com', category: '购物消费', desc: '消费决策平台', custom: false },

    // 新闻资讯
    { name: '新浪新闻', url: 'https://news.sina.com.cn', category: '新闻资讯', desc: '新闻门户网站', custom: false },
    { name: '腾讯新闻', url: 'https://news.qq.com', category: '新闻资讯', desc: '新闻资讯平台', custom: false },
    { name: '网易新闻', url: 'https://news.163.com', category: '新闻资讯', desc: '有态度的新闻', custom: false },
    { name: '澎湃新闻', url: 'https://www.thepaper.cn', category: '新闻资讯', desc: '时政思想平台', custom: false },
    { name: '36氪', url: 'https://36kr.com', category: '新闻资讯', desc: '科技创投资讯', custom: false },
    { name: '虎嗅', url: 'https://www.huxiu.com', category: '新闻资讯', desc: '商业科技媒体', custom: false },
    { name: 'BBC', url: 'https://www.bbc.com', category: '新闻资讯', desc: '国际新闻媒体', custom: false },
    { name: '路透社', url: 'https://www.reuters.com', category: '新闻资讯', desc: '国际通讯社', custom: false },

    // 学习教育
    { name: '中国大学MOOC', url: 'https://www.icourse163.org', category: '学习教育', desc: '在线课程平台', custom: false },
    { name: '学堂在线', url: 'https://www.xuetangx.com', category: '学习教育', desc: '精品慕课平台', custom: false },
    { name: 'Coursera', url: 'https://www.coursera.org', category: '学习教育', desc: '国际在线课程', custom: false },
    { name: 'edX', url: 'https://www.edx.org', category: '学习教育', desc: '名校在线课程', custom: false },
    { name: 'Khan Academy', url: 'https://www.khanacademy.org', category: '学习教育', desc: '免费学习资源', custom: false },
    { name: '知网', url: 'https://www.cnki.net', category: '学习教育', desc: '学术文献数据库', custom: false },
    { name: 'Wikipedia', url: 'https://www.wikipedia.org', category: '学习教育', desc: '自由百科全书', custom: false },
    { name: '百度百科', url: 'https://baike.baidu.com', category: '学习教育', desc: '中文百科全书', custom: false },
    { name: 'W3Schools', url: 'https://www.w3schools.com', category: '学习教育', desc: 'Web开发教程', custom: false },
    { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org', category: '学习教育', desc: '免费编程学习', custom: false },
    { name: 'LeetCode', url: 'https://leetcode.cn', category: '学习教育', desc: '算法刷题平台', custom: false },
    { name: 'Codecademy', url: 'https://www.codecademy.com', category: '学习教育', desc: '交互式编程学习', custom: false },

    // 开发工具
    { name: 'GitHub', url: 'https://github.com', category: '开发工具', desc: '代码托管平台', custom: false },
    { name: 'GitLab', url: 'https://gitlab.com', category: '开发工具', desc: 'DevOps平台', custom: false },
    { name: 'Stack Overflow', url: 'https://stackoverflow.com', category: '开发工具', desc: '程序员问答社区', custom: false },
    { name: '掘金', url: 'https://juejin.cn', category: '开发工具', desc: '开发者社区', custom: false },
    { name: 'CSDN', url: 'https://www.csdn.net', category: '开发工具', desc: 'IT技术社区', custom: false },
    { name: 'Gitee', url: 'https://gitee.com', category: '开发工具', desc: '国产代码托管平台', custom: false },
    { name: 'NPM', url: 'https://www.npmjs.com', category: '开发工具', desc: 'Node包管理器', custom: false },
    { name: 'MDN', url: 'https://developer.mozilla.org', category: '开发工具', desc: 'Web开发文档', custom: false },
    { name: 'Docker Hub', url: 'https://hub.docker.com', category: '开发工具', desc: '容器镜像仓库', custom: false },
    { name: 'Postman', url: 'https://www.postman.com', category: '开发工具', desc: 'API调试工具', custom: false },
    { name: 'Vercel', url: 'https://vercel.com', category: '开发工具', desc: '前端部署平台', custom: false },
    { name: 'Netlify', url: 'https://www.netlify.com', category: '开发工具', desc: '静态网站托管', custom: false },
    { name: 'Replit', url: 'https://replit.com', category: '开发工具', desc: '在线编程环境', custom: false },
    { name: 'CodePen', url: 'https://codepen.io', category: '开发工具', desc: '前端代码实验平台', custom: false },

    // 设计资源
    { name: 'Dribbble', url: 'https://dribbble.com', category: '设计资源', desc: '设计作品展示', custom: false },
    { name: 'Behance', url: 'https://www.behance.net', category: '设计资源', desc: '创意设计平台', custom: false },
    { name: 'Figma', url: 'https://www.figma.com', category: '设计资源', desc: '协作设计工具', custom: false },
    { name: 'Canva', url: 'https://www.canva.com', category: '设计资源', desc: '在线设计工具', custom: false },
    { name: 'Unsplash', url: 'https://unsplash.com', category: '设计资源', desc: '免费高清图库', custom: false },
    { name: 'Pexels', url: 'https://www.pexels.com', category: '设计资源', desc: '免费图片视频', custom: false },
    { name: 'Iconfont', url: 'https://www.iconfont.cn', category: '设计资源', desc: '图标字体库', custom: false },
    { name: 'Font Awesome', url: 'https://fontawesome.com', category: '设计资源', desc: '图标库', custom: false },
    { name: 'Google Fonts', url: 'https://fonts.google.com', category: '设计资源', desc: '免费字体库', custom: false },
    { name: 'Color Hunt', url: 'https://colorhunt.co', category: '设计资源', desc: '配色方案灵感', custom: false },
    { name: 'Awwwards', url: 'https://www.awwwards.com', category: '设计资源', desc: '网页设计奖项', custom: false },
    { name: '站酷', url: 'https://www.zcool.com.cn', category: '设计资源', desc: '设计师互动平台', custom: false },

    // 效率工具
    { name: 'Notion', url: 'https://www.notion.so', category: '效率工具', desc: '全能笔记工具', custom: false },
    { name: '语雀', url: 'https://www.yuque.com', category: '效率工具', desc: '知识库工具', custom: false },
    { name: '飞书', url: 'https://www.feishu.cn', category: '效率工具', desc: '协作办公平台', custom: false },
    { name: '钉钉', url: 'https://www.dingtalk.com', category: '效率工具', desc: '企业办公平台', custom: false },
    { name: 'Trello', url: 'https://trello.com', category: '效率工具', desc: '看板任务管理', custom: false },
    { name: 'Todoist', url: 'https://todoist.com', category: '效率工具', desc: '待办事项管理', custom: false },
    { name: 'Google Drive', url: 'https://drive.google.com', category: '效率工具', desc: '云存储服务', custom: false },
    { name: '腾讯文档', url: 'https://docs.qq.com', category: '效率工具', desc: '在线协作文档', custom: false },
    { name: '石墨文档', url: 'https://shimo.im', category: '效率工具', desc: '协作文档工具', custom: false },
    { name: 'ProcessOn', url: 'https://www.processon.com', category: '效率工具', desc: '在线作图工具', custom: false },
    { name: 'XMind', url: 'https://xmind.cn', category: '效率工具', desc: '思维导图工具', custom: false },
    { name: 'Calendly', url: 'https://calendly.com', category: '效率工具', desc: '日程预约工具', custom: false },

    // AI 工具
    { name: 'ChatGPT', url: 'https://chat.openai.com', category: 'AI 工具', desc: 'AI 对话助手', custom: false },
    { name: 'Claude', url: 'https://claude.ai', category: 'AI 工具', desc: 'AI 智能助手', custom: false },
    { name: 'Midjourney', url: 'https://www.midjourney.com', category: 'AI 工具', desc: 'AI 绘画工具', custom: false },
    { name: '文心一言', url: 'https://yiyan.baidu.com', category: 'AI 工具', desc: '百度 AI 助手', custom: false },
    { name: '通义千问', url: 'https://tongyi.aliyun.com', category: 'AI 工具', desc: '阿里 AI 助手', custom: false },
    { name: 'HuggingFace', url: 'https://huggingface.co', category: 'AI 工具', desc: 'AI 模型社区', custom: false },
    { name: 'Perplexity', url: 'https://www.perplexity.ai', category: 'AI 工具', desc: 'AI 搜索问答', custom: false },
    { name: 'DeepL', url: 'https://www.deepl.com', category: 'AI 工具', desc: 'AI 翻译工具', custom: false },
];

// ---------- 状态管理 ----------
const STORAGE_KEY = 'url_home_sites';
const THEME_KEY = 'url_home_theme';
const DEFAULT_CATEGORIES = [
    '常用推荐', '搜索引擎', '社交网络', '视频娱乐', '购物消费',
    '新闻资讯', '学习教育', '开发工具', '设计资源', '效率工具', 'AI 工具'
];

let sites = [];
let currentCategory = '全部';
let searchQuery = '';
let editingIndex = -1;
let deletingIndex = -1;

// ---------- DOM 引用 ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const categoriesNav = $('#categoriesNav');
const sitesGrid = $('#sitesGrid');
const currentCategoryTitle = $('#currentCategoryTitle');
const siteCount = $('#siteCount');
const searchInput = $('#searchInput');
const searchClear = $('#searchClear');
const emptyState = $('#emptyState');
const themeToggle = $('#themeToggle');
const btnAddSite = $('#btnAddSite');
const btnEmptyAdd = $('#btnEmptyAdd');
const modalOverlay = $('#modalOverlay');
const modalClose = $('#modalClose');
const btnCancel = $('#btnCancel');
const siteForm = $('#siteForm');
const editIndexInput = $('#editIndex');
const siteNameInput = $('#siteName');
const siteUrlInput = $('#siteUrl');
const siteCategoryInput = $('#siteCategory');
const siteDescInput = $('#siteDesc');
const modalTitle = $('#modalTitle');
const btnSubmit = $('#btnSubmit');
const deleteOverlay = $('#deleteOverlay');
const deleteClose = $('#deleteClose');
const btnDeleteCancel = $('#btnDeleteCancel');
const btnDeleteConfirm = $('#btnDeleteConfirm');
const deleteSiteName = $('#deleteSiteName');
const toast = $('#toast');
const yearSpan = $('#year');

// ---------- 工具函数 ----------
function loadSites() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed) && parsed.length > 0) {
                sites = parsed;
                return;
            }
        }
    } catch (e) {
        console.warn('加载数据失败，使用默认数据', e);
    }
    sites = [...DEFAULT_SITES];
    saveSites();
}

function saveSites() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sites));
    } catch (e) {
        console.warn('保存数据失败', e);
    }
}

function loadTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
        document.documentElement.setAttribute('data-theme', saved);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }
}

function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
}

function getCategories() {
    const catSet = new Set(DEFAULT_CATEGORIES);
    sites.forEach(site => {
        if (site.category && site.category.trim()) {
            catSet.add(site.category.trim());
        }
    });
    return Array.from(catSet);
}

function getFaviconUrl(url) {
    try {
        const urlObj = new URL(url);
        const domain = urlObj.hostname;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
    } catch (e) {
        return '';
    }
}

function getInitialLetter(name) {
    return name.trim().charAt(0).toUpperCase() || '?';
}

function getIconColor(name) {
    const colors = [
        '#4f6ef7', '#7b5cf0', '#06b6d4', '#10b981', '#f59e0b',
        '#ef4444', '#ec4899', '#8b5cf6', '#14b8a6', '#f97316',
        '#6366f1', '#3b82f6', '#22c55e', '#eab308', '#a855f7'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}

function showToast(message, type = 'info') {
    toast.textContent = message;
    toast.className = `toast ${type}`;
    toast.style.display = 'flex';
    // 强制回流
    void toast.offsetWidth;
    toast.classList.add('show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.style.display = 'none';
        }, 300);
    }, 2500);
}

function isValidUrl(str) {
    try {
        const url = new URL(str);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (e) {
        return false;
    }
}

function normalizeUrl(str) {
    str = str.trim();
    if (!str) return '';
    if (!/^https?:\/\//i.test(str)) {
        str = 'https://' + str;
    }
    return str;
}

// ---------- 渲染函数 ----------
function renderCategories() {
    const categories = ['全部', ...getCategories()];
    categoriesNav.innerHTML = '';
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `category-btn${cat === currentCategory ? ' active' : ''}`;
        btn.textContent = cat;
        btn.setAttribute('data-category', cat);
        btn.addEventListener('click', () => {
            currentCategory = cat;
            renderCategories();
            renderSites();
        });
        categoriesNav.appendChild(btn);
    });
}

function filterSites() {
    let filtered = sites;

    if (currentCategory !== '全部') {
        filtered = filtered.filter(site => site.category === currentCategory);
    }

    if (searchQuery.trim()) {
        const query = searchQuery.trim().toLowerCase();
        filtered = filtered.filter(site => {
            return (
                site.name.toLowerCase().includes(query) ||
                (site.desc && site.desc.toLowerCase().includes(query)) ||
                (site.url && site.url.toLowerCase().includes(query)) ||
                (site.category && site.category.toLowerCase().includes(query))
            );
        });
    }

    return filtered;
}

function renderSites() {
    const filtered = filterSites();
    sitesGrid.innerHTML = '';

    if (filtered.length === 0) {
        sitesGrid.style.display = 'none';
        emptyState.style.display = 'block';
        siteCount.textContent = '0 个网址';
        return;
    }

    sitesGrid.style.display = 'grid';
    emptyState.style.display = 'none';
    siteCount.textContent = `${filtered.length} 个网址`;

    filtered.forEach((site, idx) => {
        const realIndex = sites.indexOf(site);
        const card = createSiteCard(site, realIndex);
        sitesGrid.appendChild(card);
    });
}

function createSiteCard(site, index) {
    const card = document.createElement('div');
    card.className = `site-card${site.custom ? ' custom-site' : ''}`;
    card.setAttribute('data-index', index);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'link');
    card.setAttribute('aria-label', `打开 ${site.name}`);

    const faviconUrl = getFaviconUrl(site.url);
    const letter = getInitialLetter(site.name);
    const iconColor = getIconColor(site.name);

    card.innerHTML = `
        <div class="site-icon" style="background: ${iconColor};">
            <img src="${faviconUrl}" alt="" loading="lazy"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <span class="fallback-letter" style="display:none;">${letter}</span>
        </div>
        <div class="site-info">
            <div class="site-name" title="${escapeHtml(site.name)}">${escapeHtml(site.name)}</div>
            <div class="site-desc" title="${escapeHtml(site.desc || site.url)}">${escapeHtml(site.desc || site.url)}</div>
            <div class="site-meta">
                <span class="category-tag">${escapeHtml(site.category || '未分类')}</span>
                ${site.custom ? '<span class="badge-custom">★ 自定义</span>' : ''}
            </div>
        </div>
        <div class="site-actions" onclick="event.stopPropagation();">
            <button class="site-action-btn edit" data-index="${index}" title="编辑" aria-label="编辑 ${escapeHtml(site.name)}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
            </button>
            <button class="site-action-btn delete" data-index="${index}" title="删除" aria-label="删除 ${escapeHtml(site.name)}">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <line x1="10" y1="11" x2="10" y2="17" />
                    <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
            </button>
        </div>
    `;

    // 点击卡片跳转
    card.addEventListener('click', () => {
        window.open(site.url, '_blank', 'noopener,noreferrer');
    });

    // 键盘支持
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.open(site.url, '_blank', 'noopener,noreferrer');
        }
    });

    // 编辑按钮
    card.querySelector('.edit').addEventListener('click', (e) => {
        e.stopPropagation();
        openEditModal(index);
    });

    // 删除按钮
    card.querySelector('.delete').addEventListener('click', (e) => {
        e.stopPropagation();
        openDeleteDialog(index);
    });

    return card;
}

function escapeHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ---------- 分类下拉框填充 ----------
function populateCategorySelect(selectedCategory = '') {
    const categories = getCategories();
    siteCategoryInput.innerHTML = '';
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        if (cat === selectedCategory) {
            opt.selected = true;
        }
        siteCategoryInput.appendChild(opt);
    });
    // 如果没有匹配的分类，添加一个"自定义"选项
    if (selectedCategory && !categories.includes(selectedCategory)) {
        const opt = document.createElement('option');
        opt.value = selectedCategory;
        opt.textContent = selectedCategory;
        opt.selected = true;
        siteCategoryInput.appendChild(opt);
    }
}

// ---------- 模态框操作 ----------
function openAddModal() {
    editingIndex = -1;
    editIndexInput.value = '-1';
    modalTitle.textContent = '添加网址';
    btnSubmit.textContent = '保存';
    siteForm.reset();
    siteNameInput.value = '';
    siteUrlInput.value = '';
    siteDescInput.value = '';
    populateCategorySelect(currentCategory !== '全部' ? currentCategory : '');
    modalOverlay.style.display = 'flex';
    siteNameInput.focus();
}

function openEditModal(index) {
    const site = sites[index];
    if (!site) return;
    editingIndex = index;
    editIndexInput.value = String(index);
    modalTitle.textContent = '编辑网址';
    btnSubmit.textContent = '更新';
    siteNameInput.value = site.name || '';
    siteUrlInput.value = site.url || '';
    siteDescInput.value = site.desc || '';
    populateCategorySelect(site.category || '');
    modalOverlay.style.display = 'flex';
    siteNameInput.focus();
}

function closeModal() {
    modalOverlay.style.display = 'none';
    siteForm.reset();
    editingIndex = -1;
    editIndexInput.value = '-1';
}

function openDeleteDialog(index) {
    const site = sites[index];
    if (!site) return;
    deletingIndex = index;
    deleteSiteName.textContent = site.name;
    deleteOverlay.style.display = 'flex';
}

function closeDeleteDialog() {
    deleteOverlay.style.display = 'none';
    deletingIndex = -1;
}

// ---------- 事件监听 ----------
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    saveTheme(newTheme);
    showToast(newTheme === 'dark' ? '🌙 已切换到暗色模式' : '☀️ 已切换到亮色模式', 'info');
});

btnAddSite.addEventListener('click', openAddModal);
btnEmptyAdd.addEventListener('click', openAddModal);
modalClose.addEventListener('click', closeModal);
btnCancel.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

deleteClose.addEventListener('click', closeDeleteDialog);
btnDeleteCancel.addEventListener('click', closeDeleteDialog);
deleteOverlay.addEventListener('click', (e) => {
    if (e.target === deleteOverlay) closeDeleteDialog();
});

// 表单提交
siteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = siteNameInput.value.trim();
    const url = normalizeUrl(siteUrlInput.value);
    const category = siteCategoryInput.value.trim() || '未分类';
    const desc = siteDescInput.value.trim();

    if (!name) {
        showToast('请输入网站名称', 'error');
        siteNameInput.focus();
        return;
    }

    if (!isValidUrl(url)) {
        showToast('请输入有效的网址（以 http:// 或 https:// 开头）', 'error');
        siteUrlInput.focus();
        return;
    }

    const siteData = {
        name,
        url,
        category,
        desc: desc || '',
        custom: true,
    };

    if (editingIndex >= 0 && editingIndex < sites.length) {
        // 编辑模式
        sites[editingIndex] = { ...sites[editingIndex], ...siteData };
        showToast(`✅ 已更新「${name}」`, 'success');
    } else {
        // 添加模式
        sites.push(siteData);
        showToast(`✅ 已添加「${name}」`, 'success');
    }

    saveSites();
    closeModal();
    renderCategories();
    renderSites();
});

// 删除确认
btnDeleteConfirm.addEventListener('click', () => {
    if (deletingIndex >= 0 && deletingIndex < sites.length) {
        const siteName = sites[deletingIndex].name;
        sites.splice(deletingIndex, 1);
        saveSites();
        closeDeleteDialog();
        renderCategories();
        renderSites();
        showToast(`🗑️ 已删除「${siteName}」`, 'info');
    }
});

// 搜索
searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    searchClear.style.display = searchQuery ? 'block' : 'none';
    renderSites();
});

searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.style.display = 'none';
    renderSites();
    searchInput.focus();
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // Ctrl+K 或 Cmd+K 聚焦搜索
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
    // Escape 关闭模态框
    if (e.key === 'Escape') {
        if (modalOverlay.style.display === 'flex') {
            closeModal();
        }
        if (deleteOverlay.style.display === 'flex') {
            closeDeleteDialog();
        }
    }
    // 按 '/' 聚焦搜索
    if (e.key === '/' && document.activeElement !== searchInput && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        searchInput.focus();
    }
});

// ---------- 初始化 ----------
function init() {
    loadTheme();
    loadSites();

    // 设置年份
    yearSpan.textContent = new Date().getFullYear();

    // 初始分类为"全部"
    currentCategory = '全部';
    searchQuery = '';
    searchInput.value = '';
    searchClear.style.display = 'none';

    renderCategories();
    renderSites();

    console.log('🏠 网址之家已加载');
    console.log(`📊 共 ${sites.length} 个网址，${getCategories().length} 个分类`);
    console.log('💡 按 Ctrl+K 快速搜索，按 / 聚焦搜索框');
}

// 启动
init();