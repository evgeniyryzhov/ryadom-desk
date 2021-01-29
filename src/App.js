import './App.css';


let bitrix = () => {
    window.open('https://azproject.bitrix24.ru/crm/lead/kanban/?current_fieldset=SOCSERV');
}

let remOnline = () => {
    window.open('https://app.remonline.ru/login?_gl=1*1oka5db*_gcl_aw*R0NMLjE2MTE3OTUwNTkuQ2p3S0NBaUF1OFNBQmhBeEVpd0Fzb2RTWkxnRUdfWDlYTmdlc0RHei1ZQm1uTHRuUkpGS1g5M2ZwNXVvSHBVZVROY1BZRGREZmowZkFCb0MtYmtRQXZEX0J3RQ..&_ga=2.124984713.2039059593.1611795059-1241204457.1609350262&_gac=1.188842457.1611795059.CjwKCAiAu8SABhAxEiwAsodSZLgEG_X9XNgesDGz-YBmnLtnRJFKX93fp5uoHpUeTNcPYDdDfj0fABoC-bkQAvD_BwE');
}

let sync = () => {
    window.open('https://sync.azproject.ru/schedule');
}

let price = () => {
    window.open('https://docs.google.com/spreadsheets/d/13SeKLvvcWlK-00qlQ83mOIhQLhi3AOEuS83ywg8antA/edit#gid=1764313225');
}


let mango = () => {
    window.open('https://ccc.mango-office.ru/auth');
}

let telegram = () => {
    window.open('https://web.telegram.org/#/login');
}

let yandexMaps = () => {
    window.open('https://yandex.ru/maps/2/saint-petersburg/?ll=30.315635%2C59.938951&source=wizgeo&utm_medium=maps-desktop&utm_source=serp&z=10');
}

let yandexCalc = () => {
    window.open('https://yandex.ru/search/?lr=2&text=%D0%BA%D0%B0%D0%BB%D1%8C%D0%BA%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80&src=suggest_B');
}

let yooKassa = () => {
    window.open('https://yookassa.ru/yooid/signin/step/login?contextId=UACB_CAC_b9980c66-8e7c-4ba7-af2b-9cb057827cd6');
}

let google = () => {
    window.open('https://www.google.ru/');
}

let kitchenCalc = () => {
    window.open('https://romanradaykinfrontend.github.io/ryadom-calc/');
}

let vkontakte = () => {
    window.open('https://vk.com/ryadom812');
}

function App() {
    return (
        <div className="App">
        <div className='Desk'>

        <div onClick={ bitrix }>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Bitrix24-logo-ru.svg/1280px-Bitrix24-logo-ru.svg.png'></img>
        <br/>
        B24</div>

        <div onClick={ remOnline }>
        <img  src='https://app.remonline.ru/static/dist/images/logo/remonline.svg'></img>
        <br/>
        RemOnline</div>

        <div onClick={ sync }>
        <img src="https://www.flaticon.com/svg/vstatic/svg/42/42446.svg?token=exp=1611857367~hmac=73abf5630c9e133134d544b8d6fe6a18"></img>
        <br/>
        График мастеров</div>

    <div  onClick={ price }>
        <img  src='https://ssl.gstatic.com/docs/common/product/spreadsheets_lockup2.png'></img>
        <br/>
        Прайс</div>

        <div onClick={ mango }>
        <img  src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Mango_Office.svg/1200px-%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Mango_Office.svg.png'></img>
        <br/>
        ccc.Mango</div>

        <div onClick={ telegram }>
        <img src='https://web.telegram.org/img/logo_share.png'></img>
        <br/>
        Telegram Web</div>

    <div onClick={ yandexMaps }>
        <img src='https://upload.wikimedia.org/wikipedia/commons/1/13/%D0%AF%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.%D0%9A%D0%B0%D1%80%D1%82%D1%8B_%D0%BB%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF.png'></img>
        <br/>
        Яндекс Карты</div>

    <div onClick={ yandexCalc }>
        <img src='https://www.svgrepo.com/show/21551/calculator.svg'></img>
        <br/>
        Калькулятор Яндекс</div>

    <div onClick={ yooKassa }>
        <img src='https://yookassa.ru/user-auth-center-front/static/icons/checkout-ru.svg'></img>
        <br/>
        Яндекс Касса </div>

    <div onClick={ google }>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png'></img>
        <br/>
        Google</div>

        <div onClick={kitchenCalc}>
        <img src='https://www.flaticon.com/svg/vstatic/svg/649/649223.svg?token=exp=1611833224~hmac=d1d0f9fe208f2b73ff08c81ccdcc6a21'></img>
        <br/>
        Калькулятор кухни</div>

    <div onClick={vkontakte}>
        <img src='https://pngimg.com/uploads/vkontakte/vkontakte_PNG25.png'></img>
        <br/>
        Группа VK</div>
    </div>
    </div>
);
}

export default App;
