// Получаем элементы
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

// Обработчик клика по бургеру
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
});




// Функция для генерации случайного числа в диапазоне
function random(min, max) {
    return Math.random() * (max - min) + min;
}

// Анимация объектов
function animateDecorItems() {
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
}

// Запуск анимации
animateDecorItems();

