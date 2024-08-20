import { defineStore } from "pinia";

export const useNavElementsStore = defineStore("nav-elements", {
    state: () => {
        return {
            elements: [
                {title: 'Преимущества Tele2', link: '#'},
                {title: 'Тарифы', link: '#'},
                {title: 'Акции и спецпредложения', link: '#'},
                {title: 'Промотариф Tele2', link: '#'},
                {title: 'Технология eSIM', link: '#'},
                {title: 'Подключение нового абонента', link: '#'},
            ]
        }
    }
})