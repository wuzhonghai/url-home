// ============================================================
// 数据管理
// ============================================================

const STORAGE_KEY = 'navData';

// 默认预设数据（四个分类，每个分类10个网站）
const DEFAULT_DATA = {
    categories: [
        {
            id: 'cat-1',
            name: '常用网站',
            sites: [
                { id: 's1', name: '百度', url: 'https://www.baidu.com', icon: '' },
                { id: 's2', name: 'Google', url: 'https://www.google.com', icon: '' },
                { id: 's3', name: 'Bing', url: 'https://www.bing.com', icon: '' },
                { id: 's4', name: 'GitHub', url: 'https://github.com', icon: '' },
                { id: 's5', name: 'Stack Overflow', url: 'https://stackoverflow.com', icon: '' },
                { id: 's6', name: '知乎', url: 'https://www.zhihu.com', icon: '' },
                { id: 's7', name: '豆瓣', url: 'https://www.douban.com', icon: '' },
                { id: 's8', name: '微博', url: 'https://weibo.com', icon: '' },
                { id: 's9', name: '腾讯网', url: 'https://www.qq.com', icon: '' },
                { id: 's10', name: '网易', url: 'https://www.163.com', icon: '' }
            ]
        },
        {
            id: 'cat-2',
            name: '社区资讯',
            sites: [
                { id: 's11', name: 'Reddit', url: 'https://www.reddit.com', icon: '' },
                { id: 's12', name: 'V2EX', url: 'https://www.v2ex.com', icon: '' },
                { id: 's13', name: '掘金', url: 'https://juejin.cn', icon: '' },
                { id: 's14', name: 'CSDN', url: 'https://www.csdn.net', icon: '' },
                { id: 's15', name: '思否', url: 'https://segmentfault.com', icon: '' },
                { id: 's16', name: '知乎', url: 'https://www.zhihu.com', icon: '' },
                { id: 's17', name: '豆瓣小组', url: 'https://www.douban.com/group', icon: '' },
                { id: 's18', name: '贴吧', url: 'https://tieba.baidu.com', icon: '' },
                { id: 's19', name: '天涯', url: 'https://www.tianya.cn', icon: '' },
                { id: 's20', name: '猫扑', url: 'https://www.mop.com', icon: '' }
            ]
        },
        {
            id: 'cat-3',
            name: '学习教程',
            sites: [
                { id: 's21', name: 'MDN Web Docs', url: 'https://developer.mozilla.org', icon: '' },
                { id: 's22', name: 'W3School', url: 'https://www.w3schools.com', icon: '' },
                { id: 's23', name: '菜鸟教程', url: 'https://www.runoob.com', icon: '' },
                { id: 's24', name: 'B站', url: 'https://www.bilibili.com', icon: '' },
                { id: 's25', name: '网易云课堂', url: 'https://study.163.com', icon: '' },
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
                { id: 's31', name: '淘宝', url: 'https://www.taobao.com', icon: '' },
                { id: 's32', name: '京东', url: 'https://www.jd.com', icon: '' },
                { id: 's33', name: '亚马逊', url: 'https://www.amazon.cn', icon: '' },
                { id: 's34', name: '拼多多', url: 'https://www.pinduoduo.com', icon: '' },
                { id: 's35', name: '美团', url: 'https://www.meituan.com', icon: '' },
                { id: 's36', name: '饿了么', url: 'https://www.ele.me', icon: '' },
                { id: 's37', name: '携程', url: 'https://www.ctrip.com', icon: '' },
                { id: 's38', name: '马蜂窝', url: 'https://www.mafengwo.cn', icon: '' },
                { id: 's39', name: '知乎', url: 'https://www.zhihu.com', icon: '' },
                { id: 's40', name: '豆瓣', url: 'https://www.douban.com', icon: '' }
            ]
        }
    ]
};

// 当前数据
let navData = null;

// 当前删除的目标 { categoryId, siteId }
let deleteTarget = null;

// ============================================================
// 工具函数
// ============================================================

// 生成短 ID
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

// 获取网站的显示图标（如果用户自定义了则用自定义，否则尝试 favicon）
function getSiteIconHTML(site) {
    if (site.icon && site.icon.trim() !== '') {
        // 如果是 emoji 或文字，直接显示
        return `<span class="site-icon">${site.icon.trim()}</span>`;
    } else {
        // 尝试从网址获取 favicon
        const domain = new URL(site.url).origin;
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
        return `<span class="site-icon"><img src="${faviconUrl}" alt="icon" loading="lazy" onerror="this.style.display='none';this.parentElement.textContent='🌐'" /></span>`;
    }
}

// 加载数据（从 localStorage 或默认）
function loadData() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
        try {
            navData = JSON.parse(stored);
            // 确保每个分类有 sites 数组
            navData.categories.forEach(cat => {
                if (!cat.sites) cat.sites = [];
            });
            return;
        } catch (e) {
            console.warn('数据解析失败，使用默认数据');
        }
    }
    // 首次使用，写入默认数据
    navData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData();
}

// 保存数据到 localStorage
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(navData));
}

// ============================================================
// 渲染函数
// ============================================================

function render() {
    const container = document.getElementById('categoriesContainer');
    if (!container) return;

    let html = '';
    navData.categories.forEach((category, catIndex) => {
        const sites = category.sites || [];
        // 限制每个分类最多10个（但用户可编辑，我们不做强制，但UI添加时限制）
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

        const addBtnHtml = `
            <button class="btn-add" data-category-id="${category.id}">
                <i class="fas fa-plus-circle"></i> 添加
            </button>
        `;

        html += `
            <div class="category-card" data-category-id="${category.id}">
                <div class="category-header">
                    <span class="category-title">
                        <i class="fas fa-folder-open" style="color: #66bb6a;"></i> ${category.name}
                    </span>
                    <div class="category-actions">
                        ${addBtnHtml}
                    </div>
                </div>
                <div class="site-list">
                    ${siteItems || '<div class="empty-hint">暂无网站，点击 “添加” 创建</div>'}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // 重新绑定事件（委托方式也可以，但这里直接绑定）
    attachEvents();
}

// ============================================================
// 事件绑定（部分使用委托）
// ============================================================

function attachEvents() {
    const container = document.getElementById('categoriesContainer');

    // 使用事件委托监听 添加、编辑、删除 按钮
    container.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;

        // 添加按钮
        if (target.classList.contains('btn-add')) {
            const categoryId = target.dataset.categoryId;
            openAddModal(categoryId);
            return;
        }

        // 编辑按钮
        if (target.classList.contains('btn-edit')) {
            const categoryId = target.dataset.categoryId;
            const siteId = target.dataset.siteId;
            openEditModal(categoryId, siteId);
            return;
        }

        // 删除按钮
        if (target.classList.contains('btn-delete')) {
            const categoryId = target.dataset.categoryId;
            const siteId = target.dataset.siteId;
            openDeleteModal(categoryId, siteId);
            return;
        }
    });

    // 网站卡片点击跳转（仅点击卡片主体，不包含按钮区域）
    container.addEventListener('click', function(e) {
        const item = e.target.closest('.site-item');
        if (!item) return;
        // 如果点击的是按钮区域，则不跳转
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
// 模态框逻辑（添加 / 编辑）
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
    siteName.value = '';
    siteUrl.value = '';
    siteIcon.value = '';
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

// 提交表单
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
        // 编辑
        const site = category.sites.find(s => s.id === siteId);
        if (site) {
            site.name = name;
            site.url = url;
            site.icon = icon;
        }
    } else {
        // 添加 - 限制每个分类最多10个
        if (category.sites.length >= 10) {
            alert('每个分类最多只能添加 10 个网站！');
            return;
        }
        const newSite = {
            id: generateId(),
            name: name,
            url: url,
            icon: icon
        };
        category.sites.push(newSite);
    }

    saveData();
    render();
    closeModal();
});

// 取消 / 关闭
document.getElementById('modalCancel').addEventListener('click', closeModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
// 点击模态背景关闭
siteModal.addEventListener('click', function(e) {
    if (e.target === siteModal) closeModal();
});

// ============================================================
// 删除确认模态框
// ============================================================

const deleteModal = document.getElementById('deleteModal');
const deleteConfirmMsg = document.getElementById('deleteConfirmMsg');
const deleteConfirmBtn = document.getElementById('deleteConfirm');

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

deleteConfirmBtn.addEventListener('click', function() {
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
// 搜索引擎功能
// ============================================================

document.getElementById('baiduBtn').addEventListener('click', function() {
    const query = document.getElementById('baiduInput').value.trim();
    if (query) {
        window.open(`https://www.baidu.com/s?wd=${encodeURIComponent(query)}`, '_blank');
    }
});
document.getElementById('baiduInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('baiduBtn').click();
});

document.getElementById('googleBtn').addEventListener('click', function() {
    const query = document.getElementById('googleInput').value.trim();
    if (query) {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
});
document.getElementById('googleInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') document.getElementById('googleBtn').click();
});

// ============================================================
// 初始化
// ============================================================

loadData();
render();