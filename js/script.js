// Получаем элементы
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Обработчик клика по бургеру
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});

// убираем хэштэг из URL при клике на ссылку
document.querySelectorAll(".menu-link").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Отключаем стандартное поведение ссылок

        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            const headerHeight = document.querySelector(".header").offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

            // Убираем хэштэг из URL
            history.replaceState(null, null, window.location.pathname);

            // Закрываем мобильное меню
            const menu = document.querySelector(".menu");
            const burger = document.querySelector(".burger");
            if (menu.classList.contains("active")) {
                menu.classList.remove("active");
                burger.classList.remove("active");
            }
        }
    });
});



//паралакс ефект
window.addEventListener('scroll', () => {
    const section = document.querySelector('.page__our-story');
    const background = document.querySelector('.our-story__background');
    const content = document.querySelector('.our-story__container');

    if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;

        // Перевіряємо, чи користувач прокручує в межах секції
        if (scrollY + window.innerHeight > sectionTop && scrollY < sectionTop + sectionHeight) {
            const scrollPosition = scrollY - sectionTop;

            // Паралакс-ефект: фон рухається повільніше, контент швидше
            background.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            content.style.transform = `translateY(${scrollPosition * 0.1}px)`; // Зменшення швидкості контенту
        }
    }
});

//телепортация кружков
/*function teleportBubbles() {
    const bubbles = document.querySelectorAll(".decor-main__item");

    bubbles.forEach((bubble) => {
        setInterval(() => {
            // Генерируем случайные координаты в пределах экрана
            const randomX = Math.random() * (window.innerWidth - 200);
            const randomY = Math.random() * (window.innerHeight - 200);

            // Убираем прозрачность перед перемещением
            bubble.style.opacity = "0";

            setTimeout(() => {
                // Перемещаем шарик в новое место и делаем его видимым
                bubble.style.top = `${randomY}px`;
                bubble.style.left = `${randomX}px`;
                bubble.style.opacity = "1";
            }, 500); // Задержка перед появлением
        }, 3000 + Math.random() * 2000); // Разный интервал для каждого
    });
}

// Запуск анимации после загрузки страницы
document.addEventListener("DOMContentLoaded", teleportBubbles);*/





// Движение кружков за мышкой (отключаем на мобильных)
if (window.innerWidth > 768) {
    document.addEventListener("mousemove", (event) => {
        const decorItems = document.querySelectorAll(".how-we-work__decor-item");
        const { clientX: mouseX, clientY: mouseY } = event;

        decorItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const itemX = rect.left + rect.width / 2;
            const itemY = rect.top + rect.height / 2;

            const deltaX = mouseX - itemX;
            const deltaY = mouseY - itemY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            const maxMove = 150; 
            const force = Math.max(0, maxMove - distance * 0.2);

            const moveX = (-deltaX / distance) * force;
            const moveY = (-deltaY / distance) * force;

            item.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Когда мышь уходит, кружки возвращаются в исходное положение
document.addEventListener("mouseleave", () => {
    const decorItems = document.querySelectorAll(".how-we-work__decor-item");
    decorItems.forEach((item) => {
        item.style.transform = `translate(0, 0)`;
    });
});






// Анімація появи контенту при прокрутці
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.appear, .our-story__title, .who-we-are__title, .who-we-are__text, .unique__title, .unique p, .how-we-work__title, .how-we-work__action');

    // Добавляем всем элементам класс "hidden" (чтобы они были скрыты изначально)
    elements.forEach((el) => el.classList.add("hidden"));

    // Создаём Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, index * 200); // Задержка для поочерёдного появления
                }
            });
        },
        { threshold: 0.3 } // Элемент считается видимым, когда 30% его площади видно
    );

    // Подключаем observer ко всем элементам
    elements.forEach((el) => observer.observe(el));
});

// Анімація появи контенту при прокрутці 2
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.appear-2');

    // Добавляем всем элементам класс "hidden" (чтобы они были скрыты изначально)
    elements.forEach((el) => el.classList.add("hidden-2"));

    // Создаём Intersection Observer
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show-2");
                    }, index * 200); // Задержка для поочерёдного появления
                }
            });
        },
        { threshold: 0.3 } // Элемент считается видимым, когда 30% его площади видно
    );

    // Подключаем observer ко всем элементам
    elements.forEach((el) => observer.observe(el));
});


/*-------------------------- Анимация линий --------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const firstLine = document.querySelectorAll(".animated-line, .animated-shadow-1");
    const secondLine = document.querySelectorAll(".animated-line-2, .animated-shadow-2");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Запускаем анимацию первой линии сразу
                    firstLine.forEach(line => line.classList.add("start-animation"));

                    // Запускаем анимацию второй линии с задержкой 1.5s
                    setTimeout(() => {
                        secondLine.forEach(line => line.classList.add("start-animation"));
                    }, 1200);

                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.5 }
    );

    // Отслеживаем первую линию (чтобы запустить обе)
    if (firstLine.length > 0) observer.observe(firstLine[0]);
});

/*-------------------------- Анимация блоков how-we-work --------------------------*/
document.addEventListener("DOMContentLoaded", () => {
    const textBlocks = [
        document.querySelector(".how-we-work__step-block--1"),
        document.querySelector(".how-we-work__step-block--2"),
        document.querySelector(".how-we-work__step-block--3")
    ];

    const validBlocks = textBlocks.filter(el => el !== null);

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add("show"); // Добавляем класс для появления
                    }, index * 300); // Задержка между появлением блоков
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    validBlocks.forEach((block) => observer.observe(block));
});


/*-------------------------- Back to top --------------------------*/
document.addEventListener("DOMContentLoaded", function () {
    const backToTopButton = document.getElementById("backToTop");

    function toggleBackToTop() {
        if (window.innerWidth <= 1199.98) {
            backToTopButton.style.display = "none";
        } else {
            if (window.scrollY > 300) {
                backToTopButton.style.display = "flex";
            } else {
                backToTopButton.style.display = "none";
            }
        }
    }

    window.addEventListener("scroll", toggleBackToTop);
    window.addEventListener("resize", toggleBackToTop); // Добавляем проверку при изменении экрана

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    toggleBackToTop(); // Проверяем при загрузке страницы
});



document.addEventListener("DOMContentLoaded", function () {
    function checkAnimations() {
        let elements = document.querySelectorAll(".animate-on-scroll"); // Замените на класс анимации
        let windowHeight = window.innerHeight;

        elements.forEach(el => {
            let position = el.getBoundingClientRect().top;
            if (position < windowHeight * 0.9) {
                el.classList.add("animated"); // Класс, который активирует анимацию
            }
        });
    }

    // Проверяем анимации при загрузке
    checkAnimations();

    // Также продолжаем отслеживать при скролле
    window.addEventListener("scroll", checkAnimations);
});