// Получаем элементы
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Обработчик клика по бургеру
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
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





// кружки двигаются за мышкой
document.addEventListener("mousemove", (event) => {
    const decorItems = document.querySelectorAll(".how-we-work__decor-item");
    const { clientX: mouseX, clientY: mouseY } = event;

    decorItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;
        const itemY = rect.top + rect.height / 2;

        // Рассчитываем расстояние от курсора до центра кружка
        const deltaX = mouseX - itemX;
        const deltaY = mouseY - itemY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Чем ближе курсор, тем сильнее кружок "отскакивает"
        const maxMove = 150; // Максимальное смещение
        const force = Math.max(0, maxMove - distance * 0.2); // Чем ближе мышь, тем больше force

        // Направление движения от курсора
        const moveX = (-deltaX / distance) * force;
        const moveY = (-deltaY / distance) * force;

        // Применяем смещение с эффектом "возвращения" через transform
        item.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Когда мышь уходит, кружки возвращаются в исходное положение
document.addEventListener("mouseleave", () => {
    const decorItems = document.querySelectorAll(".how-we-work__decor-item");
    decorItems.forEach((item) => {
        item.style.transform = `translate(0, 0)`;
    });
});






// Анімація появи контенту при прокрутці
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.our-story__title, .who-we-are__title, .who-we-are__text, .unique__title, .unique p, .how-we-work__title, .how-we-work__action');

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
























// кружки двигаются за мышкой (слабо)
/*document.addEventListener("mousemove", (event) => {
    const decorItems = document.querySelectorAll(".how-we-work__decor-item");
    const { clientX: mouseX, clientY: mouseY } = event;

    decorItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemX = rect.left + rect.width / 2;
        const itemY = rect.top + rect.height / 2;

        // Рассчитываем расстояние от мышки до центра элемента
        const deltaX = mouseX - itemX;
        const deltaY = mouseY - itemY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        // Чем ближе мышь, тем сильнее движение (обратная зависимость)
        const maxMove = 50; // Максимальное смещение (можно изменить)
        const moveX = (deltaX / distance) * Math.max(0, maxMove - distance * 0.1);
        const moveY = (deltaY / distance) * Math.max(0, maxMove - distance * 0.1);

        item.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});*/



//эффект паралакса для кружков
/*document.addEventListener("mousemove", (event) => {
    const decorItems = document.querySelectorAll(".how-we-work__decor-item");
    const { clientX: mouseX, clientY: mouseY } = event;

    decorItems.forEach((item, index) => {
        const speed = (index + 1) * 0.02; // Увеличиваем эффект для дальних кружков
        const x = (window.innerWidth / 2 - mouseX) * speed;
        const y = (window.innerHeight / 2 - mouseY) * speed;

        item.style.transform = `translate(${x}px, ${y}px)`;
    });
});*/




// Функция для генерации случайного числа в диапазоне
/*function random(min, max) {
    return Math.random() * (max - min) + min;
}*/

// Анимация объектов
/*function animateDecorItems() {
    const decorItems = document.querySelectorAll('.decor-main__item');

    decorItems.forEach((item) => {
        // Функция смены позиции объекта
        function changePosition() {
            const newTop = random(10, 90); // Новая позиция по Y (в процентах)
            const newLeft = random(10, 90); // Новая позиция по X (в процентах)

            // Меняем позицию элемента
            item.style.top = `${newTop}%`;
            item.style.left = `${newLeft}%`;

            // Повторяем смену позиции через случайное время
            setTimeout(changePosition, random(1000, 5000));
        }

        changePosition();
    });
}*/

// Запуск анимации
/*animateDecorItems();*/

