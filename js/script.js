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

