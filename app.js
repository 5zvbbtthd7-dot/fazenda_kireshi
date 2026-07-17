// Helper placeholder
const makeBlackPlaceholder = (text) => {
    return `data:image/svg+xml;utf8,
    <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>
        <rect width='40%' height='60%' fill='%23111317'/>
        <text x='50%' y='50%' font-family='Arial' font-size='20'
        fill='%23555d66' dominant-baseline='middle' text-anchor='middle'>
        ${text}
        </text>
    </svg>`;
};

// SERVICE DATA
const servicesData = {
    complex: {
        title: "Оренда всього комплексу",
        price: "25 000 грн / доба",
        description: "Оренда всього комплексу.",
        mainImage: "images/DSC_3953.JPG",
        sideImage1: "images/DSC_3953.JPG",
        sideImage2: "images/DSC_3953.JPG",
        highlights: [ "2 окремі світлі спальні кімнати з двоспальними ліжками",
             "Затишна вітальня з телевізором, диваном та терасою", 
             "Кухонна зона з необхідною технікою, посудом та приладдям",
              "Безлімітне користування басейном включено у вартість", 
              "Користування альтанками та мангальними зонами на території",
               "Високошвидкісний безкоштовний Wi-Fi в будинку та на вулиці",
                "Автомобільна парковка під відеонаглядом", 
                "Якісна свіжа постіль, банні рушники та засоби гігієни" ], 
        pricingDetails: [ { label: "Вартість проживання", value: "5 000 грн / доба" }, 
                { label: "Мінімальний термін", value: "3 доби" }, 
                { label: "Макс. місткість котеджу", value: "до 4 осіб" }, 
                { label: "Басейн", value: "Безкоштовно (безліміт)" },
                { label: "Альтанки & BBQ", value: "Безкоштовно" } ] },

    cottages: {
        title: "Котеджі",
        price: "5 000 грн / доба",
        description: "Затишні котеджі.",
        mainImage: "images/DSC_3953.JPG",
        sideImage1: "images/DSC_3953.JPG",
        sideImage2: "images/DSC_3953.JPG",
        highlights: [ "Великий відкритий басейн із сучасною системою очищення води",
             "Зручна лаунж-зона з шезлонгами та сонцезахисними парасольками", 
             "Роздягальні, шафки для речей та душові кабіни з гарячою водою", 
             "Можливість орендувати волейбольний майданчик та альтанки",
              "Вільний вхід для дітей віком до 4-х років",
               "Мальовничий панорамний вид на гори Закарпаття" ],
        pricingDetails: [ { label: "1 година (від 4-х років)", value: "200 грн / особа" },
                { label: "Безліміт на весь день", value: "800 грн / особа" },
                { label: "Діти до 4-х років", value: "Безкоштовно" },
                { label: "Шезлонг та парасолька", value: "Входять у вартість" },
                { label: "Рушники", value: "Можна взяти в оренду" } ] },

    pool: {
        title: "Басейн",
        price: "від 200 грн",
        description: "Басейн.",
        mainImage: "images/DSC_3947.JPG",
        sideImage1: "images/DSC_3947.JPG",
        sideImage2: "images/DSC_3947.JPG",
        highlights: [ "Великий відкритий басейн із сучасною системою очищення води",
             "Зручна лаунж-зона з шезлонгами та сонцезахисними парасольками",
              "Роздягальні, шафки для речей та душові кабіни з гарячою водою",
               "Можливість орендувати волейбольний майданчик та альтанки",
                "Вільний вхід для дітей віком до 4-х років", 
                "Мальовничий панорамний вид на гори Закарпаття" ], 
        pricingDetails: [ { label: "1 година (від 4-х років)",value: "200 грн / особа" },
            { label: "Безліміт на весь день", value: "800 грн / особа" }, 
            { label: "Діти до 4-х років", value: "Безкоштовно" },
            { label: "Шезлонг та парасолька", value: "Входять у вартість" },
            { label: "Рушники", value: "Можна взяти в оренду" } ] },

    gazebos: {
        title: "Альтанки",
        price: "від 2 000 грн",
        description: "Альтанки.",
        mainImage: "images/DSC_3960.JPG",
        sideImage1: "images/DSC_3960.JPG",
        sideImage2: "images/DSC_3960.JPG",
        highlights:  [ "Чавунний чан на дровах місткістю до 6-8 осіб", 
            "Традиційна фінська баня (парна на дровах)",
             "Купіль з холодною водою для контрастних процедур",
              "Корисний карпатський трав'яний чай та мед входять у послугу",
               "Простирадла, рушники, тапочки та шапочки надаються",
                "Мальовничий вид на гори та зорі під час вечірнього сеансу" ],
        pricingDetails: [ { label: "Вартість бані та чану",
            value: "За запитом (входить у комплекс)" },
                    { label: "Місткість чану", value: "до 8 осіб одночасно" }, 
                    { label: "Час підготовки", value: "3-4 години (замовляти заздалегідь)" },
                    { label: "Аксесуари для парення", value: "Входять у вартість" },
                    { label: "Карпатський чай", value: "Безкоштовно" } ] } ,

        

    volleyball: {
        title: "Волейбол",
        price: "1000 грн",
        description: "Поле.",
        mainImage: "images/",
        sideImage1:"images/" ,
        sideImage2: "images/",
        highlights: [ "Великі альтанки, що вміщують від 6 до 15 гостей", 
            "Індивідуальна мангальна зона поруч із кожною альтанкою",
             "Сухі дрова, мангал та шампури надаються безкоштовно", 
             "Підведене освітлення та електричні розетки в альтанці",
              "Близькість до басейну та спортивного майданчика",
               "Красиві краєвиди та природа навколо" ], 
        pricingDetails: [ { label: "Перші дві години", value: "2 000 грн (разом)" },
                { label: "Кожна наступна година", value: "500 грн" },
                { label: "Мангал та шампури", value: "Включено у вартість" },
               { label: "Дрова для мангалу", value: "Надаються безкоштовно" }, 
               { label: "Вхід на територію", value: "Входить в оренду" } ] } ,
            
   
    spa: {
        title: "Баня та чан",
        price: "За запитом",
        description: "СПА зона.",
        mainImage: "images/DSC_3950.JPGg",
        sideImage1: "images/DSC_3950.JPG",
        sideImage2: "images/DSC_3950.JPG",
        highlights:  [ "Чавунний чан на дровах місткістю до 6-8 осіб", 
            "Традиційна фінська баня (парна на дровах)",
             "Купіль з холодною водою для контрастних процедур",
              "Корисний карпатський трав'яний чай та мед входять у послугу",
               "Простирадла, рушники, тапочки та шапочки надаються",
                "Мальовничий вид на гори та зорі під час вечірнього сеансу" ],
        pricingDetails: [ { label: "Вартість бані та чану",
            value: "За запитом (входить у комплекс)" },
                    { label: "Місткість чану", value: "до 8 осіб одночасно" }, 
                    { label: "Час підготовки", value: "3-4 години (замовляти заздалегідь)" },
                    { label: "Аксесуари для парення", value: "Входять у вартість" },
                    { label: "Карпатський чай", value: "Безкоштовно" } ] } ,
        }
document.addEventListener('DOMContentLoaded', () => {
    const serviceOverlay = document.getElementById('serviceOverlay');
    const overlayContent = document.querySelector('.overlay-content');
    const serviceCards = document.querySelectorAll('.service-card');

    function openServiceDetail(key) {
        const data = servicesData[key];
        if (!data) return;

        serviceOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';

        overlayContent.innerHTML = "<div class='loader'></div>";
        setTimeout(() => {
            overlayContent.innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.price}</p>

                <div>
                    <img src="${data.mainImage}" style="width:100% ; height:50%">
                </div>

                <p>${data.description}</p>
                <ul>
                ${data.highlights.map(item => `<li>${item}</li>`).join("")}
                </ul>
                <h3>Ціни</h3>
                <ul>
                    ${data.pricingDetails
                        .map(item => `<li>${item.label}: <strong>${item.value}</strong></li>`)
                        .join("")}
                </ul>
            `;
        }, 200);
    }

    serviceCards.forEach(card => {
        const btn = card.querySelector('.open-detail');
        const key = card.dataset.service;

        btn.addEventListener('click', () => openServiceDetail(key));

        card.querySelector('.service-img-wrapper')
            .addEventListener('click', () => openServiceDetail(key));
    });

    document.querySelector('.overlay-close')
        .addEventListener('click', () => {
            serviceOverlay.classList.remove('open');
            document.body.style.overflow = '';
        });

}) 
