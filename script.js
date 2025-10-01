// Милые интерактивные эффекты для персонажей
function initCuteCharacterInteractions() {
    const characters = document.querySelectorAll('.character');
    
    characters.forEach(character => {
        character.addEventListener('click', function() {
            // Создаем милый эффект при клике на персонажа
            const emoji = this.textContent;
            const message = document.createElement('div');
            message.textContent = getCharacterMessage(emoji);
            message.style.cssText = `
                position: fixed;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.95);
                padding: 20px 30px;
                border-radius: 20px;
                font-size: 1.2rem;
                font-weight: 600;
                color: #333;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 10000;
                animation: messagePop 0.5s ease-out;
                border: 3px solid rgba(255, 107, 107, 0.3);
            `;
            
            document.body.appendChild(message);
            
            // Создаем взрыв сердечек вокруг персонажа
            createHeartExplosion(this);
            
            setTimeout(() => {
                message.style.animation = 'messageFadeOut 0.3s ease-out';
                setTimeout(() => {
                    message.remove();
                }, 300);
            }, 2000);
        });
    });
}

// Сообщения для персонажей
function getCharacterMessage(emoji) {
    const messages = {
        '🐰': '🐰 Кролик говорит: "Ты самая милая!" 🐰',
        '🐱': '🐱 Котик мурлычет: "Ты особенная!" 🐱',
        '🐶': '🐶 Собачка лает: "Ты лучшая!" 🐶',
        '🐻': '🐻 Медвежонок обнимает: "Люблю тебя!" 🐻',
        '🦄': '🦄 Единорог машет: "Мечтай смело!" 🦄'
    };
    return messages[emoji] || '💕 Ты особенная! 💕';
}

// Взрыв сердечек вокруг персонажа
function createHeartExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 12; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💝', '💘', '💞'][Math.floor(Math.random() * 6)];
        heart.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            font-size: ${Math.random() * 15 + 10}px;
            pointer-events: none;
            z-index: 2000;
            animation: heartExplode ${Math.random() * 1 + 1}s ease-out forwards;
        `;
        
        document.body.appendChild(heart);
        
        const angle = (Math.PI * 2 * i) / 12;
        const distance = 80 + Math.random() * 40;
        
        heart.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 1000 + Math.random() * 500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            heart.remove();
        };
    }
}

// Милые эффекты для звездочек
function initStarInteractions() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            // Создаем эффект "загадывания желания"
            const wishMessage = document.createElement('div');
            wishMessage.textContent = '✨ Загадай желание! ✨';
            wishMessage.style.cssText = `
                position: fixed;
                left: 50%;
                top: 30%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, #ff6b6b, #feca57);
                color: white;
                padding: 15px 25px;
                border-radius: 25px;
                font-size: 1.1rem;
                font-weight: 600;
                z-index: 10000;
                animation: wishPop 0.6s ease-out;
                box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
            `;
            
            document.body.appendChild(wishMessage);
            
            // Создаем эффект мерцания
            this.style.animation = 'starWish 1s ease-in-out';
            
            setTimeout(() => {
                wishMessage.style.animation = 'messageFadeOut 0.3s ease-out';
                setTimeout(() => {
                    wishMessage.remove();
                }, 300);
            }, 2000);
        });
    });
}

// Милые эффекты для цветочков
function initFlowerInteractions() {
    const flowers = document.querySelectorAll('.flower');
    
    flowers.forEach(flower => {
        flower.addEventListener('click', function() {
            // Создаем эффект "цветочного дождя"
            const flowerRain = document.createElement('div');
            flowerRain.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 2000;
            `;
            
            document.body.appendChild(flowerRain);
            
            for (let i = 0; i < 15; i++) {
                const newFlower = document.createElement('div');
                newFlower.innerHTML = ['🌸', '🌺', '🌻', '🌷', '🌹', '🌼'][Math.floor(Math.random() * 6)];
                newFlower.style.cssText = `
                    position: absolute;
                    left: ${Math.random() * 100}%;
                    top: -50px;
                    font-size: ${Math.random() * 20 + 15}px;
                    animation: flowerRain ${Math.random() * 2 + 3}s linear forwards;
                `;
                
                flowerRain.appendChild(newFlower);
                
                setTimeout(() => {
                    newFlower.remove();
                }, 5000);
            }
            
            setTimeout(() => {
                flowerRain.remove();
            }, 5000);
        });
    });
}

// Милые звуковые эффекты (визуальные) для всех элементов
function addCuteSoundEffectsToAll() {
    const interactiveElements = document.querySelectorAll('.wish-card, .timeline-content, .photo-item, .age-badge');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function() {
            // Создаем милый звуковой эффект
            const soundWaves = document.createElement('div');
            soundWaves.style.cssText = `
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 0;
                height: 0;
                border: 2px solid rgba(255, 107, 107, 0.6);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                animation: soundWave 0.8s ease-out;
            `;
            
            this.style.position = 'relative';
            this.appendChild(soundWaves);
            
            setTimeout(() => {
                soundWaves.remove();
            }, 800);
        });
    });
}

// Милые эффекты при скролле
function addCuteScrollEffects() {
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        
        // Создаем милые частицы при скролле
        if (Math.random() < 0.1) {
            createScrollParticles(scrollDirection);
        }
        
        lastScrollY = currentScrollY;
    });
}

// Создание частиц при скролле
function createScrollParticles(direction) {
    const particle = document.createElement('div');
    particle.innerHTML = ['✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 4)];
    particle.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}%;
        top: ${direction === 'down' ? '0' : '100vh'};
        font-size: ${Math.random() * 15 + 10}px;
        pointer-events: none;
        z-index: 1000;
        animation: scrollParticle ${Math.random() * 2 + 2}s linear forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 4000);
}

// Милые эффекты при загрузке страницы
function addCuteLoadingEffects() {
    // Создаем милое приветствие
    setTimeout(() => {
        const welcomeMessage = document.createElement('div');
        welcomeMessage.innerHTML = '🎉 Добро пожаловать! 🎉';
        welcomeMessage.style.cssText = `
            position: fixed;
            left: 50%;
            top: 20%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #ff6b6b, #feca57);
            color: white;
            padding: 20px 40px;
            border-radius: 30px;
            font-size: 1.5rem;
            font-weight: 700;
            z-index: 10000;
            animation: welcomePop 1s ease-out;
            box-shadow: 0 15px 40px rgba(255, 107, 107, 0.4);
        `;
        
        document.body.appendChild(welcomeMessage);
        
        setTimeout(() => {
            welcomeMessage.style.animation = 'messageFadeOut 0.5s ease-out';
            setTimeout(() => {
                welcomeMessage.remove();
            }, 500);
        }, 3000);
    }, 1000);
}

// Эффект смайлика на весь экран при клике на подарок
function initGiftClickEffect() {
    const giftBox = document.querySelector('.gift-box');
    if (!giftBox) return;
    
    giftBox.addEventListener('click', function() {
        // Создаем элемент для смайлика на весь экран
        const smileyOverlay = document.createElement('div');
        smileyOverlay.className = 'fullscreen-smiley';
        smileyOverlay.innerHTML = '<div class="smiley">😛</div>';
        
        // Добавляем на страницу
        document.body.appendChild(smileyOverlay);
        
        // Показываем с анимацией
        setTimeout(() => {
            smileyOverlay.classList.add('show');
        }, 10);
        
        // Добавляем эффект взрыва частиц
        createParticleExplosion(this);
        
        // Создаем дождь из сердечек
        createHeartRain();
        
        // Скрываем через 3 секунды или при клике
        const hideSmiley = () => {
            smileyOverlay.classList.add('hide');
            setTimeout(() => {
                smileyOverlay.remove();
            }, 300);
        };
        
        // Клик по смайлику для закрытия
        smileyOverlay.addEventListener('click', hideSmiley);
        
        // Автоматическое закрытие через 3 секунды
        setTimeout(hideSmiley, 3000);
        
        // Добавляем звуковой эффект (визуальный)
        const soundEffect = document.createElement('div');
        soundEffect.style.cssText = `
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 0;
            height: 0;
            border: 5px solid rgba(255, 107, 107, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10001;
            animation: soundPulse 1s ease-out;
        `;
        
        document.body.appendChild(soundEffect);
        
        setTimeout(() => {
            soundEffect.remove();
        }, 1000);
    });
}

// Дополнительные милые эффекты при клике на подарок
function addGiftSpecialEffects() {
    const giftBox = document.querySelector('.gift-box');
    if (!giftBox) return;
    
    // Добавляем пульсацию при наведении
    giftBox.addEventListener('mouseenter', function() {
        this.style.animation = 'pulseGlow 1s ease-in-out infinite';
    });
    
    giftBox.addEventListener('mouseleave', function() {
        this.style.animation = 'wiggle 1s ease-in-out infinite';
    });
    
    // Добавляем милое сообщение при наведении
    giftBox.addEventListener('mouseenter', function() {
        const message = document.createElement('div');
        message.textContent = '🎁 Кликни на меня! 🎁';
        message.style.cssText = `
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(255, 107, 107, 0.9);
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 600;
            z-index: 1000;
            pointer-events: none;
            animation: tooltipFade 0.3s ease;
            white-space: nowrap;
        `;
        
        this.style.position = 'relative';
        this.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    });
}

// Милые эффекты и анимации
function createFloatingHearts() {
    const heartContainer = document.querySelector('.floating-hearts');
    if (!heartContainer) return;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💝', '💘', '💞'][Math.floor(Math.random() * 6)];
        heart.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: 100%;
            font-size: ${Math.random() * 20 + 15}px;
            animation: heartFloat ${Math.random() * 3 + 4}s linear forwards;
            pointer-events: none;
            z-index: 1000;
        `;
        
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }, 2000);
}

// Анимация сердечек
function addHeartAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartFloat {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Эффект дождя из сердечек при клике
function createHeartRain() {
    const heartContainer = document.createElement('div');
    heartContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 2000;
    `;
    document.body.appendChild(heartContainer);
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = ['💖', '💕', '💗', '💝'][Math.floor(Math.random() * 4)];
        heart.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: -50px;
            font-size: ${Math.random() * 15 + 10}px;
            animation: heartRain ${Math.random() * 2 + 3}s linear forwards;
        `;
        
        heartContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
    
    setTimeout(() => {
        heartContainer.remove();
    }, 5000);
}

// Добавляем CSS для дождя сердечек
function addHeartRainAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes heartRain {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(180deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Милые сообщения при наведении на элементы
function addCuteMessages() {
    const messages = [
        "💕 Люблю тебя!",
        "🌟 Ты особенная!",
        "🎂 С Днем Рождения!",
        "💖 Горжусь тобой!",
        "😊 Ты лучшая!",
        "🎁 Для тебя!",
        "💝 С любовью!",
        "🌈 Мечтай смело!"
    ];
    
    const elements = document.querySelectorAll('.photo-item, .wish-card, .timeline-content');
    
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const message = messages[Math.floor(Math.random() * messages.length)];
            const tooltip = document.createElement('div');
            tooltip.textContent = message;
            tooltip.style.cssText = `
                position: absolute;
                top: -40px;
                left: 50%;
                transform: translateX(-50%);
                background: rgba(255, 107, 107, 0.9);
                color: white;
                padding: 5px 10px;
                border-radius: 15px;
                font-size: 0.8rem;
                font-weight: 600;
                z-index: 1000;
                pointer-events: none;
                animation: tooltipFade 0.3s ease;
            `;
            
            this.style.position = 'relative';
            this.appendChild(tooltip);
            
            setTimeout(() => {
                tooltip.remove();
            }, 2000);
        });
    });
}

// Добавляем CSS для тултипов
function addTooltipAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes tooltipFade {
            0% {
                opacity: 0;
                transform: translateX(-50%) translateY(10px);
            }
            100% {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Эффект пульсации любви
function addLovePulse() {
    const loveElements = document.querySelectorAll('.apology-icon, .gift-icon');
    
    loveElements.forEach(element => {
        setInterval(() => {
            element.style.transform = 'scale(1.2)';
            element.style.filter = 'brightness(1.3)';
            
            setTimeout(() => {
                element.style.transform = 'scale(1)';
                element.style.filter = 'brightness(1)';
            }, 300);
        }, 3000);
    });
}

// Милые звуковые эффекты (визуальные)
function addCuteSoundEffects() {
    const clickableElements = document.querySelectorAll('.photo-item, .wish-card, .age-badge');
    
    clickableElements.forEach(element => {
        element.addEventListener('click', function() {
            // Создаем визуальный "звук" - пульсирующие круги
            const soundEffect = document.createElement('div');
            soundEffect.style.cssText = `
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%, -50%);
                width: 0;
                height: 0;
                border: 3px solid rgba(255, 107, 107, 0.8);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                animation: soundPulse 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.appendChild(soundEffect);
            
            setTimeout(() => {
                soundEffect.remove();
            }, 600);
        });
    });
}

// Добавляем CSS для звуковых эффектов
function addSoundEffectAnimation() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes soundPulse {
            0% {
                width: 0;
                height: 0;
                opacity: 1;
            }
            100% {
                width: 100px;
                height: 100px;
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Прогресс-бар прокрутки
function updateScrollProgress() {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
    }
}

// Индикатор секций
function updateSectionIndicator() {
    const sections = document.querySelectorAll('section');
    const indicators = document.querySelectorAll('.indicator-dot');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.className;
        }
    });
    
    indicators.forEach(indicator => {
        indicator.classList.remove('active');
        if (indicator.dataset.section === currentSection) {
            indicator.classList.add('active');
        }
    });
}

// Плавная прокрутка к секциям
function initSectionNavigation() {
    const indicators = document.querySelectorAll('.indicator-dot');
    
    indicators.forEach(indicator => {
        indicator.addEventListener('click', function() {
            const targetSection = document.querySelector(`.${this.dataset.section}`);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Параллакс эффект для фона
function updateParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Анимация появления элементов при скролле (улучшенная)
function animateOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .wish-card, .photo-item, .section-title');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0) scale(1)';
            
            // Добавляем случайные анимации
            const animations = ['animate-scale-in', 'animate-slide-in-left', 'animate-slide-in-right', 'animate-rotate-in', 'animate-flip-in'];
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            
            setTimeout(() => {
                element.classList.add(randomAnimation);
            }, index * 100);
        }
    });
}

// Эффект печатания с улучшениями
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            
            // Добавляем случайные задержки для более естественного эффекта
            const randomDelay = speed + Math.random() * 50;
            setTimeout(type, randomDelay);
        } else {
            // Добавляем курсор мигания
            element.innerHTML += '<span class="cursor">|</span>';
        }
    }
    
    type();
}

// Интерактивные эффекты для фотографий (улучшенные)
function addAdvancedPhotoEffects() {
    const photos = document.querySelectorAll('.photo-item img');
    
    photos.forEach((photo, index) => {
        // Задержка для последовательного появления эффектов
        setTimeout(() => {
            photo.addEventListener('mouseenter', function() {
                this.style.filter = 'brightness(1.2) saturate(1.3) contrast(1.1)';
                this.style.transform = 'scale(1.1) rotate(2deg)';
                this.parentElement.style.zIndex = '10';
                
                // Добавляем свечение
                this.parentElement.style.boxShadow = '0 20px 40px rgba(255, 107, 107, 0.4)';
            });
            
            photo.addEventListener('mouseleave', function() {
                this.style.filter = 'brightness(1) saturate(1) contrast(1)';
                this.style.transform = 'scale(1) rotate(0deg)';
                this.parentElement.style.zIndex = '1';
                this.parentElement.style.boxShadow = '';
            });
            
            photo.addEventListener('click', function() {
                // Эффект взрыва частиц при клике
                createParticleExplosion(this);
                
                // Создаем модальное окно для просмотра фото
                const modal = document.createElement('div');
                modal.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.9);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 2000;
                    cursor: pointer;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                `;
                
                const img = document.createElement('img');
                img.src = this.src;
                img.style.cssText = `
                    max-width: 90%;
                    max-height: 90%;
                    border-radius: 15px;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                    transform: scale(0.5);
                    transition: transform 0.3s ease;
                `;
                
                modal.appendChild(img);
                document.body.appendChild(modal);
                
                // Анимация появления
                setTimeout(() => {
                    modal.style.opacity = '1';
                    img.style.transform = 'scale(1)';
                }, 10);
                
                modal.addEventListener('click', () => {
                    modal.style.opacity = '0';
                    img.style.transform = 'scale(0.5)';
                    setTimeout(() => {
                        modal.remove();
                    }, 300);
                });
            });
        }, index * 50);
    });
}

// Эффект взрыва частиц
function createParticleExplosion(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            left: ${centerX}px;
            top: ${centerY}px;
            width: 6px;
            height: 6px;
            background: ${['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3'][Math.floor(Math.random() * 4)]};
            border-radius: 50%;
            pointer-events: none;
            z-index: 2000;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 15;
        const velocity = 100 + Math.random() * 100;
        const lifetime = 1000 + Math.random() * 500;
        
        particle.animate([
            {
                transform: 'translate(0, 0) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: lifetime,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Эффект следования курсора
function initCursorEffects() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255,107,107,0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Эффект при наведении на интерактивные элементы
    const interactiveElements = document.querySelectorAll('a, button, .photo-item, .wish-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
        });
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
        });
    });
}

// Эффект магнитного притяжения для элементов
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.age-badge, .wish-card');
    
    magneticElements.forEach(element => {
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });
}

// Эффект волны при клике
function initRippleEffect() {
    document.addEventListener('click', function(e) {
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: fixed;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(ripple);
        
        ripple.animate([
            {
                width: '0px',
                height: '0px',
                opacity: 1
            },
            {
                width: '200px',
                height: '200px',
                opacity: 0
            }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => {
            ripple.remove();
        };
    });
}

function toggleMusic() {
    if (!audio) {
        // Создаем простую мелодию "С Днем Рождения" с помощью Web Audio API
        audio = createBirthdayMelody();
    }
    
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        document.querySelector('.play-button').textContent = '🎵';
    } else {
        audio.play();
        isPlaying = true;
        document.querySelector('.play-button').textContent = '⏸️';
    }
}

function createBirthdayMelody() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const melody = [
        { note: 'C4', duration: 0.5 },
        { note: 'C4', duration: 0.5 },
        { note: 'D4', duration: 1 },
        { note: 'C4', duration: 1 },
        { note: 'F4', duration: 1 },
        { note: 'E4', duration: 2 },
        
        { note: 'C4', duration: 0.5 },
        { note: 'C4', duration: 0.5 },
        { note: 'D4', duration: 1 },
        { note: 'C4', duration: 1 },
        { note: 'G4', duration: 1 },
        { note: 'F4', duration: 2 },
        
        { note: 'C4', duration: 0.5 },
        { note: 'C4', duration: 0.5 },
        { note: 'C5', duration: 1 },
        { note: 'A4', duration: 1 },
        { note: 'F4', duration: 1 },
        { note: 'E4', duration: 1 },
        { note: 'D4', duration: 2 },
        
        { note: 'A#4', duration: 0.5 },
        { note: 'A#4', duration: 0.5 },
        { note: 'A4', duration: 1 },
        { note: 'F4', duration: 1 },
        { note: 'G4', duration: 1 },
        { note: 'F4', duration: 2 }
    ];
    
    const noteFreqs = {
        'C4': 261.63, 'D4': 293.66, 'E4': 329.63, 'F4': 349.23,
        'G4': 392.00, 'A4': 440.00, 'A#4': 466.16, 'C5': 523.25
    };
    
    let currentTime = audioContext.currentTime;
    
    melody.forEach((noteData, index) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(noteFreqs[noteData.note], currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, currentTime + noteData.duration);
        
        oscillator.start(currentTime);
        oscillator.stop(currentTime + noteData.duration);
        
        currentTime += noteData.duration;
    });
    
    return {
        play: () => {
            if (audioContext.state === 'suspended') {
                audioContext.resume();
            }
        },
        pause: () => {
            // Простая реализация паузы
        }
    };
}

// Конфетти анимация
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#6c5ce7'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confettiContainer.appendChild(confetti);
        
        // Удаляем конфетти после анимации
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Параллакс эффект для плавающих сердечек
function updateFloatingHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = (window.scrollY * speed) % window.innerHeight;
        heart.style.transform = `translateY(${yPos}px) rotate(${window.scrollY * 0.1}deg)`;
    });
}

// Анимация появления элементов при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .wish-card, .photo-item');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Инициализация анимаций
function initAnimations() {
    // Устанавливаем начальные стили для анимируемых элементов
    const animatedElements = document.querySelectorAll('.timeline-item, .wish-card, .photo-item');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
}

// Эффект печатания для заголовка
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Создание снежинок для зимнего эффекта
function createSnowflakes() {
    const snowContainer = document.createElement('div');
    snowContainer.className = 'snow-container';
    snowContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
    `;
    
    document.body.appendChild(snowContainer);
    
    for (let i = 0; i < 30; i++) {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄️';
        snowflake.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: -10px;
            font-size: ${Math.random() * 20 + 10}px;
            animation: snow-fall ${Math.random() * 3 + 2}s linear infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        snowContainer.appendChild(snowflake);
    }
    
    // Добавляем CSS для анимации снежинок
    const style = document.createElement('style');
    style.textContent = `
        @keyframes snow-fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Интерактивные эффекты для фотографий
function addPhotoEffects() {
    const photos = document.querySelectorAll('.photo-item img');
    
    photos.forEach(photo => {
        photo.addEventListener('mouseenter', function() {
            this.style.filter = 'brightness(1.1) saturate(1.2)';
        });
        
        photo.addEventListener('mouseleave', function() {
            this.style.filter = 'brightness(1) saturate(1)';
        });
        
        photo.addEventListener('click', function() {
            // Создаем модальное окно для просмотра фото
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 2000;
                cursor: pointer;
            `;
            
            const img = document.createElement('img');
            img.src = this.src;
            img.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 15px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
            `;
            
            modal.appendChild(img);
            document.body.appendChild(modal);
            
            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });
}

// Эффект пульсации для кнопки возраста
function addPulseEffect() {
    const ageBadge = document.querySelector('.age-badge');
    
    setInterval(() => {
        ageBadge.style.transform = 'scale(1.05)';
        setTimeout(() => {
            ageBadge.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

// Скрытие экрана загрузки
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 500);
        }, 2000); // Показываем загрузку 2 секунды
    }
}

// Инициализация всех эффектов
document.addEventListener('DOMContentLoaded', function() {
    // Скрываем экран загрузки
    hideLoadingScreen();
    
    // Инициализируем все новые эффекты
    initSectionNavigation();
    initCursorEffects();
    initMagneticEffect();
    initRippleEffect();
    
    // Инициализируем анимации
    initAnimations();
    
    // Добавляем продвинутые эффекты для фотографий
    addAdvancedPhotoEffects();
    
    // Добавляем эффект пульсации
    addPulseEffect();
    
    // Добавляем милые эффекты
    addHeartAnimation();
    addHeartRainAnimation();
    addTooltipAnimation();
    addSoundEffectAnimation();
    createFloatingHearts();
    addCuteMessages();
    addLovePulse();
    addCuteSoundEffects();
    
    // Добавляем новые милые эффекты
    initCuteCharacterInteractions();
    initStarInteractions();
    initFlowerInteractions();
    addCuteSoundEffectsToAll();
    addCuteScrollEffects();
    addCuteLoadingEffects();
    
    // Добавляем эффект клика на подарок
    initGiftClickEffect();
    addGiftSpecialEffects();
    
    // Создаем конфетти при загрузке
    setTimeout(createConfetti, 1000);
    
    // Создаем дождь из сердечек при загрузке
    setTimeout(createHeartRain, 3000);
    
    // Добавляем обработчики событий
    window.addEventListener('scroll', () => {
        updateScrollProgress();
        updateSectionIndicator();
        updateFloatingHearts();
        updateParallax();
        animateOnScroll();
    });
    
    // Запускаем анимацию появления при загрузке
    setTimeout(animateOnScroll, 500);
    
    // Эффект печатания для главного заголовка
    const mainTitle = document.querySelector('.main-title');
    const originalText = mainTitle.textContent;
    setTimeout(() => {
        typeWriter(mainTitle, originalText, 150);
    }, 1000);
    
    // Добавляем случайные анимации к элементам при загрузке
    setTimeout(() => {
        const elements = document.querySelectorAll('.wish-card, .timeline-content');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('animate-wiggle');
                setTimeout(() => {
                    element.classList.remove('animate-wiggle');
                }, 500);
            }, index * 200);
        });
    }, 2000);
    
    // Создаем периодический дождь из сердечек
    setInterval(createHeartRain, 15000);
});

// Дополнительные интерактивные эффекты
function addInteractiveEffects() {
    // Эффект следования курсора для сердечек
    document.addEventListener('mousemove', function(e) {
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach((heart, index) => {
            const speed = (index + 1) * 0.02;
            const x = e.clientX * speed;
            const y = e.clientY * speed;
            heart.style.transform += ` translate(${x}px, ${y}px)`;
        });
    });
    
    // Эффект наклона для карточек пожеланий
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
}

// Запускаем дополнительные эффекты
setTimeout(addInteractiveEffects, 2000);
