// تشغيل الموسيقى والكونفيتي
const bgMusic = document.getElementById('bgMusic');
let isMusicPlaying = false;

function toggleMusic() {
    if (isMusicPlaying) {
        bgMusic.pause();
        isMusicPlaying = false;
    } else {
        bgMusic.play().catch(err => console.log('خطأ في تشغيل الموسيقى:', err));
        isMusicPlaying = true;
    }
}

// دالة الكونفيتي (قطع الفرح)
function playConfetti() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#FF8C94', '#A8D8EA', '#FFD3B6', '#FFAAA5'];
    
    // إنشاء 100 قطعة كونفيتي
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        
        confettiContainer.appendChild(confetti);
        
        // حركة الكونفيتي
        const duration = Math.random() * 2 + 2;
        const delay = Math.random() * 0.5;
        const xMove = (Math.random() - 0.5) * 400;
        
        confetti.animate([
            {
                opacity: 1,
                transform: `translate(0, 0) rotate(0deg)`
            },
            {
                opacity: 0,
                transform: `translate(${xMove}px, ${window.innerHeight + 100}px) rotate(${Math.random() * 360}deg)`
            }
        ], {
            duration: duration * 1000,
            delay: delay * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        // حذف الكونفيتي بعد انتهاء الحركة
        setTimeout(() => {
            confetti.remove();
        }, (duration + delay) * 1000);
    }
    
    // تشغيل الموسيقى تلقائياً عند الاحتفال
    if (!isMusicPlaying) {
        toggleMusic();
    }
}

// تأثيرات إضافية عند التمرير على الأزرار
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// تأثير النقر على الصورة
document.querySelector('.birthday-image').addEventListener('click', function() {
    playConfetti();
});

// رسالة تحية عند تحميل الصفحة
window.addEventListener('load', function() {
    console.log('🎉 مرحباً بك في صفحة عيد ميلاد ميجو!');
    console.log('❤️ كل سنة وانت طيب يا حبيب قلبي');
    
    // تأثير ترحيبي خفيف
    setTimeout(() => {
        playConfetti();
    }, 1500);
});

// إضافة حركة عند التمرير على الصورة
const image = document.querySelector('.birthday-image');
image.addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.05) rotate(5deg)';
    this.style.filter = 'brightness(1.1)';
});

image.addEventListener('mouseout', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
    this.style.filter = 'brightness(1)';
});

// تأثير الضغط على الصورة
image.addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'float-image 3s ease-in-out infinite';
    }, 10);
});

// إنشاء بالونات إضافية عند التمرير
document.addEventListener('mousemove', function(e) {
    // يمكن إضافة تأثيرات إضافية هنا مستقبلاً
});

// دالة لإرسال الرسائل (إضافة ميزة تفاعلية)
function addMessage(text) {
    const messageBox = document.querySelector('.message-box');
    const newMessage = document.createElement('p');
    newMessage.className = 'message';
    newMessage.textContent = text;
    newMessage.style.animation = 'fadeInUp 0.8s ease-out';
    messageBox.appendChild(newMessage);
}

// تفعيل نمط داكن/فاتح عند الضغط على مفتاح معين
document.addEventListener('keydown', function(e) {
    if (e.key === 'd' || e.key === 'D') {
        document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'invert(0)' : 'invert(1)';
    }
});

// حفظ النقرات وإنشاء تأثيرات خاصة
let clickCount = 0;
document.addEventListener('click', function() {
    clickCount++;
    if (clickCount % 5 === 0) {
        playConfetti();
    }
});

// تشغيل حركة تفاعلية عند الضغط على أي مكان
document.addEventListener('click', function(e) {
    const ripple = document.createElement('div');
    ripple.style.position = 'fixed';
    ripple.style.left = e.clientX + 'px';
    ripple.style.top = e.clientY + 'px';
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.borderRadius = '50%';
    ripple.style.border = '2px solid #FF6B6B';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '1000';
    
    document.body.appendChild(ripple);
    
    ripple.animate([
        {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 1
        },
        {
            transform: 'translate(-50%, -50%) scale(3)',
            opacity: 0
        }
    ], {
        duration: 600,
        easing: 'ease-out'
    });
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// إضافة رسائل شاشة اللمس
if (window.innerWidth <= 768) {
    document.querySelector('.birthday-image').addEventListener('touchstart', function() {
        playConfetti();
    });
}