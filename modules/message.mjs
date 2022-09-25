export const message=(tm,en,ru)=>{
    return {
        tm:tm,
        en:en,
        ru:ru
    }
};


export const successMessage=()=>{
    return {
        tm:"Üstünlikli hasaba alyndy",
        en:"Successfully",
        ru:"Успешно"
    }
}

export const errorMessage=()=>{
    return {
        tm:"Ýalňyşlyk ýüze çykdy",
        en:"Something went wrong",
        ru:"Что-то пошло не так"
    }
}