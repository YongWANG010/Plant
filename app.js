const { createApp } = Vue

createApp({
    data() {
        return {
            plantCategories: [
                {
                    id: 1,
                    name: "室内观叶植物",
                    description: "优雅的室内植物，净化空气并为家居增添自然气息",
                    image: "https://picsum.photos/id/106/800/600"
                },
                {
                    id: 2,
                    name: "多肉植物收藏",
                    description: "形态各异的多肉植物，适合忙碌生活的理想选择",
                    image: "https://picsum.photos/id/119/800/600"
                },
                {
                    id: 3,
                    name: "观花植物指南",
                    description: "色彩缤纷的开花植物，为您的空间带来生机与活力",
                    image: "https://picsum.photos/id/142/800/600"
                },
                {
                    id: 4,
                    name: "药用与香草植物",
                    description: "实用的药用和香草植物，可用于烹饪和自然疗法",
                    image: "https://picsum.photos/id/155/800/600"
                }
            ],
            communityPosts: [
                {
                    id: 1,
                    title: "如何拯救我的绿萝",
                    content: "当我发现我的绿萝叶片发黄看起来很萎靡时，我调整了浇水计划并将它移到更明亮的地方。两周内，它就重新焕发了生机！",
                    author: "绿植爱好者"
                },
                {
                    id: 2,
                    title: "我的第一个多肉花园",
                    content: "我刚刚完成了在复古茶杯中的首个多肉植物组合。非常期待看到它们成长！有什么保持它们健康的小贴士吗？",
                    author: "新手植物父母"
                },
                {
                    id: 3,
                    title: "龟背竹繁殖成功！",
                    content: "我想分享一下我繁殖龟背竹的成功经历。现在我已经从原来的母株培育出了3株小植物！",
                    author: "植物繁殖师"
                }
            ],
            fictionStories: [
                {
                    id: 1,
                    title: "绿萝的奇幻旅程",
                    description: "一盆普通的绿萝发现自己拥有了意识，开始了一段探索人类世界的奇妙冒险...",
                    image: "https://picsum.photos/id/106/800/450",
                    chapters: 8,
                    views: 1542
                },
                {
                    id: 2,
                    title: "多肉王国的秘密",
                    description: "在一个被人类遗忘的花园里，多肉植物们建立了自己的王国，守护着一个古老的秘密...",
                    image: "https://picsum.photos/id/119/800/450",
                    chapters: 12,
                    views: 2356
                },
                {
                    id: 3,
                    title: "会说话的龟背竹",
                    description: "一个孤独的老人与一盆会说话的龟背竹成为了朋友，他们互相陪伴，度过了许多温馨的时光...",
                    image: "https://picsum.photos/id/155/800/450",
                    chapters: 6,
                    views: 1879
                }
            ]
        }
    },
    methods: {
        joinCommunity() {
            alert("Thanks for your interest in joining our community! In a full implementation, this would take you to a registration page.");
        },
        viewGuide(category) {
            alert(`In a full implementation, this would open the guide for: ${category.name}`);
        }
    }
}).mount('#app')