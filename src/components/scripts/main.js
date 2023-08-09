export default {
    data() {
        return {
            main_page:'Главная страница',
            title1: 'Генерация номеров дипломов для организаций высшего и послевузовского образования',
            title2: 'Республики Казахстан',
            menu1txt: 'Проверка валидности дипломов организаций ТиПО',
            menu2txt: 'Проверка валидности дипломов вуза',
            menu3txt: 'Генерация данных по дипломам ТиПО',
            menu4txt: 'Генерация данных по дипломам вузов',

        }   
    },
    methods: {
        changeLang(lang) {
            if(lang=='ru') {
               this.main_page='Главная страница';
                this.title1= 'Генерация номеров дипломов для организаций высшего и послевузовского образования';
                this.title2= 'Республики Казахстан';
                this.menu1txt= 'Проверка валидности дипломов организаций ТиПО';
                this.menu2txt= 'Проверка валидности дипломов вуза';
                this.menu3txt= 'Генерация данных по дипломам ТиПО';
                this.menu4txt= 'Генерация данных по дипломам вузов';

            }
            else if(lang == 'en'){
                this.main_page='Main page';
                this.title1= 'Generation of diploma numbers for higher and postgraduate education organizations';
                this.title2= 'Republic of Kazakhstan';
                this.menu1txt= 'Checking the validity of diplomas of TPO organizations';
                this.menu2txt= 'Checking the validity of university diplomas';
                this.menu3txt= 'Generation of data on TPO diplomas';
                this.menu4txt= 'Generation of data on university diplomas';

            }
            else if(lang == 'kz'){
                this.main_page='Басты бет';
                this.title1= 'Жоғары және соңғы оқу орныларының диплом нөмірлерін өндіру';
                this.title2= 'Қазақстан Республикасы';
                this.menu1txt= 'ТиПО ұйымдарының дипломдарының мәнділігін тексеру';
                this.menu2txt= 'Университет дипломдарының мәнділігін тексеру';
                this.menu3txt= 'ТиПО дипломдары туралы деректерді өндіру';
        
            }

    }
},
    computed: {
        
    },
}