// ============================================================
// 数据层（预设 40 个不重复的常用网站，分属四个分类）
// ============================================================
const STORAGE_KEY = 'navData';

const DEFAULT_DATA = {
    categories: [
        {
            id: 'cat-1',
            name: '社区资讯',
            sites: [
                { id: 's1', name: 'chiphell', url: 'https://www.chiphell.com', icon: '' },
                { id: 's2', name: '恩山无线论坛', url: 'https://www.right.com.cn', icon: '' },
                { id: 's3', name: '远景论坛', url: 'https://www.pcbeta.com', icon: '' },
                { id: 's4', name: 'GitHub', url: 'https://github.com', icon: '' },
                { id: 's5', name: 'Stack Overflow', url: 'https://stackoverflow.com', icon: '' },
                { id: 's6', name: '知乎', url: 'https://www.zhihu.com', icon: '' },
                { id: 's7', name: '微博', url: 'https://weibo.com', icon: '' },
                { id: 's8', name: '腾讯网', url: 'https://www.qq.com', icon: '' },
                { id: 's9', name: '网易', url: 'https://www.163.com', icon: '' },
                { id: 's10', name: '搜狐', url: 'https://www.sohu.com', icon: '' }
            ]
        },
        {
            id: 'cat-2',
            name: '常用网站',
            sites: [
                { id: 's11', name: 'youtube', url: 'https://www.youtube.com', icon: '' },
                { id: 's12', name: '哔哩哔哩', url: 'https://www.bilibili.com', icon: '' },
                { id: 's13', name: 'deepseek', url: 'https://chat.deepseek.com', icon: '' },
                { id: 's14', name: 'CSDN', url: 'https://www.csdn.net', icon: '' },
                { id: 's15', name: '思否', url: 'https://segmentfault.com', icon: '' },
                { id: 's16', name: '少数派', url: 'https://sspai.com', icon: '' },
                { id: 's17', name: '品玩', url: 'https://www.pingwest.com', icon: '' },
                { id: 's18', name: '虎嗅', url: 'https://www.huxiu.com', icon: '' },
                { id: 's19', name: '36氪', url: 'https://36kr.com', icon: '' },
                { id: 's20', name: 'IT之家', url: 'https://www.ithome.com', icon: '' }
            ]
        },
        {
            id: 'cat-3',
            name: '生活服务',
            sites: [
                { id: 's21', name: '京东商城', url: 'https://www.jd.com', icon: '' },
                { id: 's22', name: '淘宝网', url: 'https://www.taobao.com', icon: '' },
                { id: 's23', name: '携程旅行', url: 'https://www.ctrip.com', icon: '' },
                { id: 's24', name: '建设银行', url: 'https://www.ccb.com', icon: '' },
                { id: 's25', name: '中国银行', url: 'https://www.boc.cn', icon: '' },
                { id: 's26', name: 'Coursera', url: 'https://www.coursera.org', icon: '' },
                { id: 's27', name: 'edX', url: 'https://www.edx.org', icon: '' },
                { id: 's28', name: 'Khan Academy', url: 'https://www.khanacademy.org', icon: '' },
                { id: 's29', name: 'LeetCode', url: 'https://leetcode.cn', icon: '' },
                { id: 's30', name: '牛客网', url: 'https://www.nowcoder.com', icon: '' }
            ]
        },
        {
            id: 'cat-4',
            name: '其他网站',
            sites: [
                { id: 's31', name: '12306', url: 'https://www.12306.cn', icon: '' },
                { id: 's32', name: 'cloudflare', url: 'https://dash.cloudflare.com/', icon: '' },
                { id: 's33', name: 'softoroom', url: 'https://softoroom.org/', icon: '' },
                { id: 's34', name: 'officeplus', url: 'https://www.officeplus.cn', icon: '' },
                { id: 's35', name: '美团', url: 'https://www.meituan.com', icon: '' },
                { id: 's36', name: '饿了么', url: 'https://www.ele.me', icon: '' },
                { id: 's37', name: '携程', url: 'https://www.ctrip.com', icon: '' },
                { id: 's38', name: '马蜂窝', url: 'https://www.mafengwo.cn', icon: '' },
                { id: 's39', name: '抖音', url: 'https://www.douyin.com', icon: '' },
                { id: 's40', name: '小红书', url: 'https://www.xiaohongshu.com', icon: '' }
            ]
        }
    ]
};

let navData = null;
let deleteTarget = null;

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function getSiteIconHTML(site) {
    if (site.icon && site.icon.trim() !== '') {
        return `<span class="site-icon">${site.icon.trim()}</span>`;
    } else {
        try {
            const url = new URL(site.url);
            const domain = url.origin;
            const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
            return `<span class="site-icon"><img src="${faviconUrl}" alt="icon" loading="lazy" onerror="this.style.display='none';this.parentElement.textContent='🌐'" /></span>`;
        } catch {
            return `<span class="site-icon">🌐</span>`;
        }
    }
}

function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            navData = JSON.parse(stored);
            navData.categories.forEach(cat => { if (!cat.sites) cat.sites = []; });
            return;
        } catch (e) {
            console.warn('数据解析失败，使用默认数据');
        }
    }
    navData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData();
}

function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(navData));
}

// ============================================================
// 渲染
// ============================================================
function render() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;

    let html = '';
    navData.categories.forEach(category => {
        const sites = category.sites || [];
        const siteItems = sites.map(site => {
            const iconHtml = getSiteIconHTML(site);
            return `
                <div class="site-item" data-category-id="${category.id}" data-site-id="${site.id}">
                    ${iconHtml}
                    <span class="site-name">${site.name}</span>
                    <div class="site-actions">
                        <button class="btn-edit" data-category-id="${category.id}" data-site-id="${site.id}" title="编辑">
                            <i class="fas fa-pen"></i>
                        </button>
                        <button class="btn-delete" data-category-id="${category.id}" data-site-id="${site.id}" title="删除">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        html += `
            <div class="category-card" data-category-id="${category.id}">
                <div class="category-header">
                    <span class="category-title">
                        <i class="fas fa-folder-open" style="color: #66bb6a;"></i> ${category.name}
                    </span>
                    <div class="category-actions">
                        <button class="btn-add" data-category-id="${category.id}">
                            <i class="fas fa-plus-circle"></i> 添加
                        </button>
                    </div>
                </div>
                <div class="site-list">
                    ${siteItems || '<div class="empty-hint">暂无网站，点击 “添加” 创建</div>'}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    attachEvents();
}

// ============================================================
// 事件绑定（委托）
// ============================================================
function attachEvents() {
    const container = document.getElementById('categoriesContainer');

    container.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;

        if (target.classList.contains('btn-add')) {
            const categoryId = target.dataset.categoryId;
            openAddModal(categoryId);
            return;
        }
        if (target.classList.contains('btn-edit')) {
            const categoryId = target.dataset.categoryId;
            const siteId = target.dataset.siteId;
            openEditModal(categoryId, siteId);
            return;
        }
        if (target.classList.contains('btn-delete')) {
            const categoryId = target.dataset.categoryId;
            const siteId = target.dataset.siteId;
            openDeleteModal(categoryId, siteId);
            return;
        }
    });

    // 点击卡片主体跳转（排除按钮区域）
    container.addEventListener('click', function(e) {
        const item = e.target.closest('.site-item');
        if (!item) return;
        if (e.target.closest('.site-actions')) return;
        const categoryId = item.dataset.categoryId;
        const siteId = item.dataset.siteId;
        const category = navData.categories.find(c => c.id === categoryId);
        if (!category) return;
        const site = category.sites.find(s => s.id === siteId);
        if (site && site.url) {
            window.open(site.url, '_blank');
        }
    });
}

// ============================================================
// 模态框（添加 / 编辑）
// ============================================================
const siteModal = document.getElementById('siteModal');
const modalTitle = document.getElementById('modalTitle');
const siteForm = document.getElementById('siteForm');
const editCategoryId = document.getElementById('editCategoryId');
const editSiteId = document.getElementById('editSiteId');
const siteName = document.getElementById('siteName');
const siteUrl = document.getElementById('siteUrl');
const siteIcon = document.getElementById('siteIcon');
let isEditMode = false;

function openAddModal(categoryId) {
    isEditMode = false;
    modalTitle.innerHTML = '<i class="fas fa-plus-circle"></i> 添加网站';
    editCategoryId.value = categoryId;
    editSiteId.value = '';
    siteForm.reset();
    siteModal.classList.add('active');
}

function openEditModal(categoryId, siteId) {
    isEditMode = true;
    modalTitle.innerHTML = '<i class="fas fa-pen"></i> 编辑网站';
    editCategoryId.value = categoryId;
    editSiteId.value = siteId;

    const category = navData.categories.find(c => c.id === categoryId);
    if (!category) return;
    const site = category.sites.find(s => s.id === siteId);
    if (!site) return;
    siteName.value = site.name || '';
    siteUrl.value = site.url || '';
    siteIcon.value = site.icon || '';
    siteModal.classList.add('active');
}

function closeModal() {
    siteModal.classList.remove('active');
}

siteForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const categoryId = editCategoryId.value;
    const siteId = editSiteId.value;
    const name = siteName.value.trim();
    const url = siteUrl.value.trim();
    const icon = siteIcon.value.trim();

    if (!name || !url) {
        alert('请填写完整信息（名称和网址为必填）');
        return;
    }

    const category = navData.categories.find(c => c.id === categoryId);
    if (!category) return;

    if (isEditMode) {
        const site = category.sites.find(s => s.id === siteId);
        if (site) {
            site.name = name;
            site.url = url;
            site.icon = icon;
        }
    } else {
        if (category.sites.length >= 10) {
            alert('每个分类最多只能添加 10 个网站！');
            return;
        }
        category.sites.push({ id: generateId(), name, url, icon });
    }

    saveData();
    render();
    closeModal();
});

document.getElementById('modalCancel').addEventListener('click', closeModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
siteModal.addEventListener('click', function(e) {
    if (e.target === siteModal) closeModal();
});

// ============================================================
// 删除确认
// ============================================================
const deleteModal = document.getElementById('deleteModal');
const deleteConfirmMsg = document.getElementById('deleteConfirmMsg');

function openDeleteModal(categoryId, siteId) {
    deleteTarget = { categoryId, siteId };
    const category = navData.categories.find(c => c.id === categoryId);
    if (!category) return;
    const site = category.sites.find(s => s.id === siteId);
    if (!site) return;
    deleteConfirmMsg.textContent = `确定要删除网站 “${site.name}” 吗？`;
    deleteModal.classList.add('active');
}

function closeDeleteModal() {
    deleteModal.classList.remove('active');
    deleteTarget = null;
}

document.getElementById('deleteConfirm').addEventListener('click', function() {
    if (!deleteTarget) return;
    const { categoryId, siteId } = deleteTarget;
    const category = navData.categories.find(c => c.id === categoryId);
    if (category) {
        category.sites = category.sites.filter(s => s.id !== siteId);
        saveData();
        render();
    }
    closeDeleteModal();
});

document.getElementById('deleteCancel').addEventListener('click', closeDeleteModal);
document.getElementById('deleteModalClose').addEventListener('click', closeDeleteModal);
deleteModal.addEventListener('click', function(e) {
    if (e.target === deleteModal) closeDeleteModal();
});

// ============================================================
// 搜索引擎
// ============================================================
document.getElementById('baiduBtn').addEventListener('click', function() {
    const query = document.getElementById('baiduInput').value.trim();
    if (query) window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(query)}`, '_blank');
});
document.getElementById('baiduInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('baiduBtn').click();
});

document.getElementById('googleBtn').addEventListener('click', function() {
    const query = document.getElementById('googleInput').value.trim();
    if (query) window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
});
document.getElementById('googleInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('googleBtn').click();
});

// ============================================================
// 启动
// ============================================================
loadData();
render();
