export const GetData = function (postData: any, result: any) {

    let dataNow: any = new Date

    dataNow = Number(dataNow.getTime());
    // получаю время сейчас и время создания поста, вычитаю 
    dataNow = dataNow - postData

    result = dataNow
    //  если разница(result) меньше чем минута,час,день и Т Д , то я привожу милисекунды к тому виду что мне надо 
    // и выбираю окончания к слову , заметил что единственные исключения это 11 12 13 14 и написал условия с упором на это

    // если разница меньше минуты то:
    if (result < 60000) {
        return ('менее минуты назад')
    }

    // если разница меньше часа то привожу милисекунды в минуты и выбираю окончание
    if (result < 3600000) {
        let num = Math.trunc(result/1000/60)
        if( num % 10 === 1 && num % 10 !== 11){
            return (`${num} минуту назад`)
        }
        if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4 && num % 10 !== 12 && num % 10 !== 13 && num % 10 !== 14){
            return (`${num} минуты назад`)
        }
        else{
            return (`${num} минут назад`)
        }
        
    }
    
    // если разница меньше дня то привожу ее к виду часов и выбираю окончание  и Т Д
    if (result < 86400000 ) {
        let num = Math.trunc(result/1000/60/60)

        if( num % 10 === 1 && num % 10 !== 11){
            return (`${num} час назад`)
        }
        if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4 && num % 10 !== 12 && num % 10 !== 13 && num % 10 !== 14){
            return (`${num} часа назад`)
        }
        else{
            return (`${num} часов назад`)
        }
    }
    if (result < 604800000) {
        let num = Math.trunc(result/1000/60/60/24)

        if( num % 10 === 1 && num % 10 !== 11){
            return (`${num} день назад`)
        }
        if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4 && num % 10 !== 12 && num % 10 !== 13 && num % 10 !== 14){
            return (`${num} дня назад`)
        }
        else{
            return (`${num} дней назад`)
        }
    }
    if (result < 2592000000) {
        let num = Math.trunc(result/1000/60/60/24/7)

        if( num % 10 === 1 ){
            return (`${num} неделю назад`)
        }
        if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4){
            return (`${num} недели назад`)
        }
    }
    if (result < 31104000000) {
        let num = Math.trunc(result/1000/60/60/24/7/4)
        if( num % 10 === 1 && num % 10 !== 11){
            return (`${num} месяц назад`)
        }
        if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4 && num % 10 !== 12 && num % 10 !== 13 && num % 10 !== 14){
            return (`${num} месяца назад`)
        }
        else{
            return (`${num} месяцев назад`)
        }
    }
    else{
        let num = Math.trunc(result/1000/60/60/24/7/4/12)
        if( num % 10 === 1 && num % 10 !== 11){
            return (`${num} год назад`)
        }
        if (num % 10 === 2 || num % 10 === 3 || num % 10 === 4 && num % 10 !== 12 && num % 10 !== 13 && num % 10 !== 14){
            return (`${num} года назад`)
        }
        else{
            return (`${num} лет назад`)
        }
    }

}