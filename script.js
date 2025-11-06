// (新) 处理加载动画
// 使用 window.onload 来确保所有资源 (包括图片) 
// 都加载完毕后再隐藏加载动画
window.onload = () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        // 添加 CSS 类以触发淡出动画
        preloader.classList.add('preloader-hidden');
        
        // 在 CSS 过渡 (0.5s) 完成后, 从 DOM 中移除该节点
        // 这样可以防止它在未来干扰页面
        setTimeout(() => {
            if (preloader.parentNode) {
                preloader.parentNode.removeChild(preloader);
            }
        }, 600); // 600ms 略长于 CSS 的 0.5s (500ms) 过渡
    }
};


// 当 DOM 加载完毕后执行
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 数据定义 ---

    // (已修改) 所有 L1 文本已更改
    const originalL1Data = {
        'l1-website':   { 
            icon: 'ri-global-line', 
            img: 'website.png', 
            title: '占位符', 
            desc: '占位符',
            color: '#4a69ff', l2Color: '#f0f2ff' 
        },
        'l1-projects':  { 
            icon: 'ri-folder-chart-line', 
            title: '占位符', 
            desc: '占位符',
            color: '#00bfa6', l2Color: '#ebfffa'
        },
        'l1-shop':      { 
            icon: 'ri-shopping-bag-3-line', 
            title: '占位符', 
            desc: '占位符',
            color: '#ff9f43', l2Color: '#fff5eb'
        },
        'l1-support':   { 
            icon: 'ri-customer-service-2-line', 
            title: '占位符', 
            desc: '占位符',
            color: '#8e44ad', l2Color: '#f4ebf7'
        },
        'l1-docs':      { 
            icon: 'ri-book-open-line', 
            title: '占位符', 
            desc: '占位符',
            color: '#e74c3c', l2Color: '#fdf5f4'
        },
        'l1-data':      { 
            icon: 'ri-bar-chart-2-line', 
            title: '占位符', 
            desc: '占位符',
            color: '#2ecc71', l2Color: '#f0faf4'
        },
        'l1-blog':      { 
            icon: 'ri-article-line', 
            title: '占位符', 
            desc: '占位符',
            color: '#34495e', l2Color: '#f1f3f4'
        },
        'l1-careers':   { 
            icon: 'ri-team-line', 
            title: '占位符', 
            desc: '占位符',
            color: '#e84393', l2Color: '#fdf4f8'
        },
        'l1-community': { 
            icon: 'ri-community-line', 
            title: '占位符', 
            desc: '占位符',
            color: '#f1c40f', l2Color: '#fffbeb'
        }
    };

    // (已修改) L2 链接文本已更改
    const websiteLinks = [
        { icon: 'ri-presentation-line', title: 'Renpy 精翻教程', href: 'https://space.bilibili.com/631729629/lists/3114245?type=season' },
        { icon: 'ri-presentation-fill', title: 'Renpy AI教程', href: 'https://space.bilibili.com/631729629/lists/6538032?type=season' },
        { icon: 'ri-inbox-unarchive-line', title: 'Renpy 打包教程', href: 'https://www.bilibili.com/video/BV1wegbezEoJ/?spm_id_from=333.1387.collection.video_card.click' },
        { icon: 'ri-inbox-unarchive-fill', title: 'Will版Renpy 打包教程', href: 'https://www.bilibili.com/video/BV19dCtYnEGD/?spm_id_from=333.1387.collection.video_card.click' },
        { icon: 'ri-translate-ai', title: '语言补丁包制作', href: 'https://www.bilibili.com/video/BV1hgnHzmEch/?spm_id_from=333.1387.collection.video_card.click' },
        { icon: 'ri-code-box-line', title: 'replace代码讲解', href: 'https://www.bilibili.com/video/BV1nhdpYjEbj/?spm_id_from=333.1387.collection.video_card.click' },
        { icon: 'ri-font-size-2', title: '口口口字体问题', href: 'https://www.bilibili.com/video/BV1jPShYLEVM/?spm_id_from=333.1387.collection.video_card.click' },
        { icon: 'ri-loop-right-line', title: '更新相关问题', href: 'https://www.bilibili.com/video/BV13YAZe7EPT/?spm_id_from=333.1387.collection.video_card.click' }
    ];

    // (已修改) L2 链接文本已更改
    const projectLinks = [
        { icon: 'ri-robot-2-line', title: 'Renpy游戏AI翻译器', href: 'https://renpyaitranslator.maxlee7923.com/' },
        { icon: 'ri-briefcase-5-line', title: 'Renpy工具箱', href: 'https://renpytool.maxlee7923.com/' },
        { icon: 'ri-bar-chart-box-line', title: '占位符', href: '#' },
        { icon: 'ri-team-line', title: '占位符', href: '#' },
        { icon: 'ri-calendar-todo-line', title: '占位符', href: '#' },
        { icon: 'ri-bug-line', title: '占位符', href: '#' },
        { icon: 'ri-file-zip-line', title: '占位符', href: '#' },
        { icon: 'ri-git-repository-line', title: '占位符', href: '#' }
    ];

    // (新) 为 "Renpy课件下载" (l1-shop) 创建链接
    const shopLinks = [
        { icon: 'ri-download-cloud-2-line', title: '课件下载点1', href: '#' },
        { icon: 'ri-download-cloud-2-line', title: '课件下载点2', href: '#' },
        { icon: 'ri-download-cloud-2-line', title: '课件下载点3', href: '#' },
        { icon: 'ri-download-cloud-2-line', title: '课件下载点4', href: '#' },
        { icon: 'ri-download-cloud-2-line', title: '课件下载点5', href: '#' },
        { icon: 'ri-download-cloud-2-line', title: '课件下载点6', href: '#' },
        { icon: 'ri-download-cloud-2-line', title: '课件下载点7', href: '#' },
        { icon: 'ri-download-cloud-2-line', title: '课件下载点8', href: '#' }
    ];

    // (新) 为所有 L1 占位符卡片创建通用的 L2 占位符链接
    const placeholderLinks = [
        { icon: 'ri-close-line', title: '占位符链接 1', href: '#' },
        { icon: 'ri-close-line', title: '占位符链接 2', href: '#' },
        { icon: 'ri-close-line', title: '占位符链接 3', href: '#' },
        { icon: 'ri-close-line', title: '占位符链接 4', href: '#' },
        { icon: 'ri-close-line', title: '占位符链接 5', href: '#' },
        { icon: 'ri-close-line', title: '占位符链接 6', href: '#' },
        { icon: 'ri-close-line', title: '占位符链接 7', href: '#' },
        { icon: 'ri-close-line', title: '占位符链接 8', href: '#' }
    ];

    // (已修改) 修正 menuData 以使用新的数据
    const menuData = {
        'l1-website': websiteLinks,
        'l1-projects': projectLinks,
        'l1-shop': shopLinks,
        'l1-support': placeholderLinks,
        'l1-docs': placeholderLinks,
        'l1-data': placeholderLinks,
        'l1-blog': placeholderLinks,
        'l1-careers': placeholderLinks,
        'l1-community': placeholderLinks
    };

    // --- 2. DOM 引用 ---
    const container = document.querySelector('.container');
    const initialClickableCards = document.querySelectorAll('.hub-card[data-id]');
    
    const originalL1HTML = new Map();

    // --- 3. 核心功能 ---

    function createCardHTML(data) {
        const logoHtml = data.img ? 
            `<img src="${data.img}" alt="${data.title}" class="card-logo-img">` :
            (data.icon ? `<i class="${data.icon} card-logo-icon"></i>` : '');

        const description = (data.isTitle || data.isBack) ? data.desc : (data.desc ? data.desc : '');
        const descriptionHtml = description ? `<p>${description}</p>` : '';

        return `
            ${logoHtml}
            <div class="card-content">
                <h2>${data.title}</h2>
                ${descriptionHtml}
            </div>
        `;
    }

    /**
     * 切换到 L2 视图
     * (已修改: 
     * 1. 自动检测桌面/移动布局来计算涟漪延迟。
     * 2. 动态设置 '--animation-start-y' 变量来控制动画方向。)
     */
    function populateL2(l1_id, clickedIndex) {
        // 1. 获取 L1 数据和颜色
        const l1Data = originalL1Data[l1_id];
        const l2Links = menuData[l1_id];
        const mainColor = l1Data.color;
        const lightColor = l1Data.l2Color;

        // --- 核心修复: 检查当前布局 ---
        // (CSS 媒体查询的断点是 769px)
        const isDesktop = window.innerWidth >= 769;
        const delayPerStep = 50; // 每一格的步进延迟 (毫秒)
        // --- 结束 核心修复 ---

        // 2. 准备新卡片内容
        const backContent = { 
            icon: 'ri-arrow-go-back-line', 
            title: '返回', 
            desc: '返回主菜单',
            isBack: true 
        };
        const backHTML = createCardHTML(backContent);
        
        let finalGridContent = new Array(9);
        let linkCounter = 0;

        // 4. 填充 9 个槽位
        for (let i = 0; i < 9; i++) {
            if (i === clickedIndex) {
                finalGridContent[i] = backContent;
            } else {
                if (linkCounter < l2Links.length) {
                    finalGridContent[i] = l2Links[linkCounter];
                    linkCounter++;
                }
            }
        }

        const currentCards = document.querySelectorAll('.hub-grid > *');
        
        // 5. 将新内容渲染到 DOM
        currentCards.forEach((card, i) => {
            const data = finalGridContent[i]; 

            // --- 核心修复: 布局感知的延迟和方向计算 ---
            let distance = 0;
            let yDirection = 0; // 0 = 无 Y 轴平移 (例如同源或同行)

            if (isDesktop) {
                // 桌面 3x3 布局
                const sourceRow = Math.floor(clickedIndex / 3);
                const sourceCol = clickedIndex % 3;
                const targetRow = Math.floor(i / 3);
                const targetCol = i % 3;
                distance = Math.abs(targetRow - sourceRow) + Math.abs(targetCol - sourceCol);

                // 确定 Y 轴方向
                if (targetRow > sourceRow) yDirection = -10; // 卡片在下方, 从"上"(-10)进入
                else if (targetRow < sourceRow) yDirection = 10; // 卡片在上方, 从"下"(10)进入
                
            } else {
                // 移动 1x9 布局
                distance = Math.abs(i - clickedIndex);

                // 确定 Y 轴方向
                if (i > clickedIndex) yDirection = -10; // 卡片在下方, 从"上"(-10)进入
                else if (i < clickedIndex) yDirection = 10; // 卡片在上方, 从"下"(10)进入
            }
            
            const delay = distance * delayPerStep;
            // --- 结束 核心修复 ---
            
            const newCard = card.cloneNode(false);
            newCard.removeAttribute('style');
            card.parentNode.replaceChild(newCard, card);
            
            let finalCardInDOM = newCard;
            
            if (data && data.isBack) { // "返回" 按钮
                newCard.innerHTML = backHTML;
                newCard.dataset.index = i;
                newCard.dataset.type = 'title'; 
                newCard.style.backgroundColor = 'var(--back-bg)';
                
                newCard.addEventListener('click', () => { window.location.hash = ''; });
                newCard.addEventListener('mouseenter', () => { newCard.style.backgroundColor = 'var(--back-hover-bg)'; });
                newCard.addEventListener('mouseleave', () => { newCard.style.backgroundColor = 'var(--back-bg)'; });

                // "返回"按钮是源头，延迟为 0
                newCard.style.animation = 'fadeInL1 0.3s ease-out forwards'; // 复用 L1 的动画
                newCard.style.animationDelay = `${delay}ms`; // 'delay' 此时为 0
            } 
            else if (data) { // L2 链接
                const isPlaceholder = (data.href === '#');
                const linkCard = isPlaceholder ? document.createElement('div') : document.createElement('a');
    
                linkCard.removeAttribute('style');
                linkCard.className = newCard.className; 
                linkCard.innerHTML = createCardHTML(data);
                linkCard.dataset.index = i;
                linkCard.dataset.type = 'l2-link';
                
                const icon = linkCard.querySelector('.card-logo-icon');
                if (icon) { icon.style.color = mainColor; }
    
                if (isPlaceholder) {
                    linkCard.style.cursor = 'default';
                } else {
                    linkCard.href = data.href;
                    linkCard.target = '_blank';
                    linkCard.addEventListener('mouseenter', () => linkCard.style.backgroundColor = lightColor);
                    linkCard.addEventListener('mouseleave', () => linkCard.style.backgroundColor = 'var(--card-bg)');
                }
                
                newCard.parentNode.replaceChild(linkCard, newCard);
                finalCardInDOM = linkCard;
                
                // --- 核心修复: 应用方向变量和涟漪延迟 ---
                finalCardInDOM.style.setProperty('--animation-start-y', `${yDirection}px`);
                finalCardInDOM.style.animationDelay = `${delay}ms`;
                // --- 结束 核心修复 ---
            }
            else { // L2 空槽位
                newCard.dataset.index = i;
                newCard.dataset.type = 'empty';
                newCard.style.opacity = '0'; 
                newCard.style.pointerEvents = 'none'; 
            }
        });

        // 7. 激活 L2 样式
        container.classList.add('l2-active');
    }

    /**
     * (已修改: 自动检测桌面/移动布局来计算涟漪延迟)
     * 返回 L1 视图
     */
    function populateL1() {
        container.classList.remove('l2-active');
        const currentCards = document.querySelectorAll('.hub-grid > *');

        // --- 核心修复: 检查当前布局 ---
        const isDesktop = window.innerWidth >= 769;
        const delayPerStep = 50; 
        
        // 查找 "返回" 按钮作为涟漪源
        const backButton = document.querySelector('.hub-card[data-type="title"]');
        const sourceIndex = backButton ? parseInt(backButton.dataset.index, 10) : 4; // 找不到就默认 4
        // --- 结束 核心修复 ---

        currentCards.forEach((card, i) => {
            // --- 核心修复: 布局感知的延迟计算 ---
            let distance = 0;
            if (isDesktop) {
                // 桌面 3x3 布局
                const sourceRow = Math.floor(sourceIndex / 3);
                const sourceCol = sourceIndex % 3;
                const targetRow = Math.floor(i / 3);
                const targetCol = i % 3;
                distance = Math.abs(targetRow - sourceRow) + Math.abs(targetCol - sourceCol);
            } else {
                // 移动 1x9 布局
                distance = Math.abs(i - sourceIndex);
            }
            const delay = distance * delayPerStep;
            // --- 结束 核心修复 ---

            const indexStr = i.toString();
            let cardToModify = card;

            if (cardToModify.tagName === 'A') {
                const divCard = document.createElement('div');
                cardToModify.parentNode.replaceChild(divCard, cardToModify);
                cardToModify = divCard;
            }

            const newCard = cardToModify.cloneNode(false);
            cardToModify.parentNode.replaceChild(newCard, cardToModify);

            newCard.removeAttribute('style'); 
            newCard.className = 'hub-card'; 
            newCard.removeAttribute('data-type');
            
            newCard.innerHTML = originalL1HTML.get(indexStr);
            
            newCard.dataset.index = indexStr;
            const originalId = Object.keys(originalL1Data)[i];
            newCard.dataset.id = originalId;


            const l1Data = originalL1Data[originalId];
            const icon = newCard.querySelector('.card-logo-icon');
            if (icon && l1Data.color) {
                icon.style.color = l1Data.color;
            }
            
            newCard.addEventListener('click', onL1Click);

            // 应用 'both' 来防止内容在延迟期间闪烁
            newCard.style.animation = 'fadeInL1 0.3s ease-out both';
            newCard.style.animationDelay = `${delay}ms`;
        });
    }
    // (未修改) 新增: 处理 URL hash 变化，用于 L2 视图的路由
    function handleHashChange() {
        const hash = window.location.hash.substring(1); // e.g., 'l1-website'

        if (hash && originalL1Data[hash]) {
            // Hash 是有效的 L1 ID, 显示 L2
            // 找到这个 ID 对应的索引 (0-8)
            const l1_index = Object.keys(originalL1Data).indexOf(hash);
            if (l1_index > -1) {
                populateL2(hash, l1_index);
            }
        } else {
            // Hash 为空或无效, 显示 L1
            // 仅当当前视图是 L2 时才切换，避免 L1 重复加载
            if (container.classList.contains('l2-active')) {
                populateL1();
            }
        }
    }


    /**
     * (未修改) L1 卡片的点击处理
     */
    function onL1Click(event) {
        const l1_id = event.currentTarget.dataset.id;
        // (未修改) 不再直接调用 populateL2，而是更新 hash
        // hashchange 事件监听器将自动处理视图切换
        window.location.hash = l1_id; 
    }

    // --- 4. 初始化 ---
    initialClickableCards.forEach(card => {
        const l1_id = card.dataset.id;
        if (l1_id && originalL1Data[l1_id]) {
            const l1Data = originalL1Data[l1_id];
            const icon = card.querySelector('.card-logo-icon');
            if (icon && l1Data.color) {
                icon.style.color = l1Data.color;
            }
        }
        card.addEventListener('click', onL1Click);
    });
    
    document.querySelectorAll('.hub-grid > *').forEach((card, i) => {
        originalL1HTML.set(i.toString(), card.innerHTML);
    });

    // --- (未修改) 锚点路由 (Hash Routing) 初始化 ---
    // 监听浏览器前进/后退按钮导致的 hash 变化
    window.addEventListener('hashchange', handleHashChange);
    
    // 页面加载时立即检查一次 hash，以便直接打开 L2 视图
    handleHashChange();


    // --- 5. (已删除) 页面加载后自动刷新一次的代码已被移除 ---

});