// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetEl = document.querySelector(targetId);
        if(targetEl){
            window.scrollTo({
                top: targetEl.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// 简单滚动高亮导航（可选）
const sections = document.querySelectorAll('.section');
const navItems = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', ()=>{
    let current = '';
    sections.forEach(sec=>{
        const secTop = sec.offsetTop;
        const secHeight = sec.clientHeight;
        if(window.scrollY >= secTop - 100){
            current = sec.getAttribute('id');
        }
    })
    navItems.forEach(item=>{
        item.style.color="#444";
        if(item.getAttribute('href') === "#"+current){
            item.style.color="#2c5282";
        }
    })
})
