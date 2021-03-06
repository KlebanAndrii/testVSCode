//****************************************************************************************************************************** */
// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
//********************************************************************************************** */

//     a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
const colMain = document.getElementById('main_header');
colMain.style.color = 'green';
colMain.innerText = 'mon-year';

//     b) робить шириниу елементу ul 400px
const ulPx = document.getElementsByTagName('ul');
for (const ul of ulPx) {
   ul.style.width = '400px'
}

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
const classLink = document.getElementsByClassName('linkList');
for (const classLi of classLink) {
   classLi.style.width = '50%';
}

//     d) отримує текст який зберігається в елементі з класом listElement2
const clasText = document.getElementsByClassName('listElement2')[0].textContent;
console.log(clasText);

//     e) отримує всі елементи li та змінює ім колір фону на сіри
const liCol = document.getElementsByTagName('li');
for (const li of liCol) {
   li.style.backgroundColor = 'grey'
}

//     f) отримує всі елементи 'a' та додає їм клас anchor
const addClas = document.getElementsByTagName('a');
for (const addC of addClas) {
   addC.classList.add('anchor');
}

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
const linkA = document.getElementsByTagName('a');
for (const lin of linkA) {
   if (lin.textContent === 'link3') {
      lin.style.fontSize = '40px'
   }
}

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
const clasA = document.getElementsByTagName('a');
for (const denCla of clasA) {
   denCla.classList.add(`element_${denCla.textContent}`)
}
//*************************************************8 */
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// const elemSub = document.getElementsByClassName('sub-header');
// for (const el of elemSub) {
//    el.style.color = prompt();
// }
//*********************************************************** */
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// const elemCont = document.getElementsByClassName('sub-header');
// for (const cont of elemCont) {
//    if (cont.textContent === 'content 2 segment') {
//       cont.style.color = prompt();
//    }
// }
//***************************************************************** */
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// const doviv = document.getElementsByClassName('content_1');
// for (const tex of doviv) {
//    tex.innerText = prompt();
// }
//***************************************************************** */
//     l) отримати елементи p та змінити їм padding на 20px

const pElem = document.getElementsByTagName('p');
for (const pe of pElem) {
   pe.style.padding = '20px';
}

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

const eleTex = document.getElementsByClassName('text2');
for (const elT of eleTex) {
   elT.innerText = 'mon-year';
}

//***************************************************************************************************************************************** */

let rules = [
   {
      title: 'Первое правило Бойцовского клуба.',
      body: 'Никому не рассказывать о Бойцовском клубе.'
   },
   {
      title: 'Второе правило Бойцовского клуба.',
      body: 'Никогда никому не рассказывать о Бойцовском клубе.'
   },
   {
      title: 'Третье правило Бойцовского клуба.',
      body: 'В схватке участвуют только двое.'
   },
   {
      title: 'Четвертое правило Бойцовского клуба.',
      body: 'Не более одного поединка за один раз.'
   },
   {
      title: 'Пятое правило Бойцовского клуба.',
      body: 'Бойцы сражаются без обуви и голые по пояс.'
   },
   {
      title: 'Шестое правило Бойцовского клуба.',
      body: 'Поединок продолжается столько, сколько потребуется.'
   },
   {
      title: 'Седьмое правило Бойцовского клуба.',
      body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
   },
   {
      title: 'Восьмое и последнее правило Бойцовского клуба.',
      body: 'Новичок обязан принять бой.'
   }
];

// 2) Є масив котрий характеризує правила.
//    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html


for (const block of rules) {
   const rulBlo = document.createElement('div');
   rulBlo.innerHTML = `<h2>${block.title}</h2>
                       <p>${block.body}</p><br>`
                       document.body.appendChild(rulBlo);
}

//********************************************************************************************************************************* */
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];

// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Example:
// let usersWithCities = [
//     {
//         id: 1, // <===
//         name: 'vasya',
//         age: 31,
//         status: false,
//         address: {
//             user_id: 1, // <===
//             country: 'Ukraine',
//             city: 'Ternopil'
//         }
//     },
//     // TO BE CONTINUED .....
// ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (const user of usersWithId) {
for (const city of citiesWithId) {
      if (user.id === city.user_id) {
         usersWithCities.push(Object.assign(user, city))
      }
   }
}
console.log(usersWithCities);




