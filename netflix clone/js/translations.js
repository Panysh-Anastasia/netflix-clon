const translations = {
    en: {
        sign: "Sign In",
        unlimited_movies: "Unlimited movies, TV shows, and more",
        starts_at:" Starts at EUR 7.99. Cancel anytime.",
        ready:"Ready to watch? Enter your email to create or restart your membership.",
        email: "Email address",
        join_now: "Join Now",
        trending_now: "Trending Now",
        english: "Movies - English",
        other_ln: "Movies - Other language",
        tv_sh:"TV Shows - English",
        tv_sh_ln:"TV Shows - Other language",
        reasons_join: "More Reasons to Join",
        stor_1:"Stories tailored to your taste",
        stor_2:"Cancel or switch plans anytime",
        stor_3:"A place just for kids",
        stor_4:"For your phone, tablet, laptop and TV",
        as_que:"Frequently Asked Questions",
        what_netflix:"What is Netflix?",
        how_much:"How much does Netflix cost?",
        where:"Where can I watch?",
        how_do:"How do I cancel?",
        what_can:"What can I watch on Netflix?",
        is_nf:"Is Netflix good for kids?",
        why_am:"Why am I seenig this language?",
        join_now_2:"Join Now",
        create:"Create or restart your membership.",
        que_cont:"Questions? Contact us.",
        account:"Account",
        investor:"Investor Relations",
        way:"Ways to Watch",
        privacy:"Privacy",
        corp_inf:"Corporate Information",
        speed:"Speed Test",
        only:"Only on Netflix",
        help:"Help Center",
        media:"Media Center",
        jobs:"Jobs",
        tearms:"Terms of Use",
        cookie:"Cookie Preferences",
        cont_us:"Contact Us",
        notices:"Legal Notices",
    },
    ru: {
        sign: "Войти",
        unlimited_movies: "Неограниченные фильмы, телешоу и многое другое",
        starts_at:"Начинается от 7,99 евро. Отменить в любое время.",
        ready:"Готовы смотреть? Введите свой адрес электронной почты, чтобы создать или возобновить членство.",
        email: "Адрес электронной почты",
        join_now: "Присоединяйтесь сейчас",
        trending_now: "Сейчас в тренде",
        english:"Фильмы – английский",
        other_ln:"Фильмы — Другой язык",
        tv_sh:"Телешоу – английский",
        tv_sh_ln:"Телешоу – другой язык",
        reasons_join:"Больше причин присоединиться",
        stor_1:"Истории на ваш вкус",
        stor_2:"Отменить или сменить план в любое время",
        stor_3:"Место только для детей",
        stor_4:"Для вашего телефона, планшета, ноутбука и телевизора",
        as_que:"Часто задаваемые вопросы",
        what_netflix:"Что такое Нетфликс?",
        how_much:"Сколько стоит Нетфликс?",
        where:"Где я могу посмотреть?",
        how_do:"Как мне отменить?",
        what_can:"Что я могу посмотреть на Нетфликс?",
        is_nf:"Полезен ли Нетфликс для детей?",
        why_am:"Почему я вижу этот язык?",
        join_now_2:"Присоединяйтесь сейчас",
        create:"Создайте или возобновите свое членство.",
        que_cont:"Есть вопросы? Свяжитесь с нами.",
        account:"Счет",
        investor:"Отношения с инвесторами",
        way:"Способы просмотра",
        privacy:"Конфиденциальность",
        corp_inf:"Корпоративная информация",
        speed:"Тест скорости",
        only:"Только на Netflix",
        help:"Центр помощи",
        media:"Медиа-центр",
        jobs:"Работа",
        tearms:"Условия эксплуатации",
        cookie:"Настройки файлов cookie",
        cont_us:"Связаться с нами",
        notices:"Юридические уведомления",
    },
};

// Функция перевода текста на странице
function translatePage(language) {
    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n"); // Получаем ключ перевода
        const translation = translations[language][key]; // Берём перевод из объекта
        if (translation) {
            element.textContent = translation; // Обновляем текст
        }
    });
}

// Слушатель события выбора языка
document.addEventListener("DOMContentLoaded", () => {
    // Устанавливаем начальный язык (по умолчанию - английский)
    const languageSelect = document.querySelector(".language-select");

    languageSelect.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value; // Получаем выбранный язык
        translatePage(selectedLanguage); // Переводим страницу
    });

    // Устанавливаем значение для выпадающего списка
    languageSelect.value = "en"; // Устанавливаем английский по умолчанию
    translatePage("en"); // Переводим страницу на английский
});
