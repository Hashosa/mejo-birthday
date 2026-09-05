// تشغيل/إيقاف الموسيقى
function toggleMusic() {
    const audio = document.getElementById('bgMusic');
    const btn = event.target;
    
    if (audio.paused) {
        audio.play();
        btn.textContent = '🎵 إيقاف الموسيقى';
        btn.style.background = 'linear-gradient(135deg, #23d5ab, #23a6d5)';
    } else {
        audio.pause();
        btn.textContent = '🎵 تشغيل الموسيقى';
        btn.style.background = 'linear-gradient(135deg, #f093fb, #f5576c)';
    }
}

// دالة الكونفيتي (الألعاب الملونة)
function playConfetti() {
    const container = document.getElementById('confetti-container');
    
    // إنشاء 100 قطعة كونفيتي
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // الألوان المختلفة
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#FF8C94', '#A8D8EA', '#FFD3B6', '#FFAAA5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // الأشكال المختلفة
        const shapes = Math.random();
        if (shapes > 0.5) {
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.borderRadius = '50%';
            confetti.style.backgroundColor = randomColor;
        } else {
            confetti.style.width = '8px';
            confetti.style.height = '8px';
            confetti.style.backgroundColor = randomColor;
            confetti.style.transform = 'rotate(45deg)';
        }
        
        // الموضع العشوائي
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        
        // الحركة
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 0.5;
        const xMove = (Math.random() - 0.5) * 300;
        
        confetti.style.animation = `confettiFall ${duration}s linear ${delay}s forwards`;
        
        container.appendChild(confetti);
        
        // حذف العنصر بعد انتهاء الحركة
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
    
    // تشغيل الموسيقى تلقائياً
    const audio = document.getElementById('bgMusic');
    if (audio.paused) {
        audio.play();
    }
}

// إضافة الحركة للكونفيتي في CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// تشغيل احتفال عند تحميل الصفحة
window.addEventListener('load', () => {
    // احتفال بسيط عند التحميل
    setTimeout(() => {
        playConfetti();
    }, 500);
});

// إضافة تأثير موجة عند الضغط على الزرار
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
    });
});

// مؤثرات الفأرة - ظهور النجوم عند الحركة
document.addEventListener('mousemove', (e) => {
    // اختياري: إضافة تأثيرات بصرية إضافية
    if (Math.random() > 0.98) {
        createStar(e.clientX, e.clientY);
    }
});

function createStar(x, y) {
    const star = document.createElement('div');
    star.innerHTML = '✨';
    star.style.position = 'fixed';
    star.style.left = x + 'px';
    star.style.top = y + 'px';
    star.style.pointerEvents = 'none';
    star.style.fontSize = '20px';
    star.style.animation = 'starFade 1s ease-out forwards';
    star.style.zIndex = '3';
    
    document.body.appendChild(star);
    
    setTimeout(() => star.remove(), 1000);
}

// إضافة حركة النجوم
const starStyle = document.createElement('style');
starStyle.textContent = `
    @keyframes starFade {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-30px) scale(0);
        }
    }
`;
document.head.appendChild(starStyle);

// حركات تفاعلية على العناصر الرئيسية
const container = document.querySelector('.container');
document.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const angleX = (e.clientY - centerY) / 100;
    const angleY = (e.clientX - centerX) / 100;
    
    // تأثير طفيف جداً
    container.style.transform = `perspective(1000px) rotateX(${angleX * 0.5}deg) rotateY(${angleY * 0.5}deg)`;
});