// const btnEl = document.querySelector('button');
// let i = 0;
// btnEl.textContent = i;
// btnEl.addEventListener('click', function (e) {
//     i = i + 3;
//     btnEl.textContent = i;    
// });

// let pass;
// do {
//    pass = +prompt('введите пароль');
// } while (pass !== 1234);

// for (let i = 0; i <= 10; i++) {
//     console.log(i); 
// }

// let pass;

// for (let i = 0; i <= 3; i++) {
//     pass = +prompt('введи пасс');
//     if (!(isNaN(pass))) {
//         if (pass === 123) {
//             console.log('правильно');
//             break;
//         } else if (i >= 2) {
//             console.log('пароль 123');
//         } else {
//             console.log('неправильно');
//         }
//     } else {
//         console.log('ввел не число');
//     }
// }

// const num = +prompt('Введите число');
// for (let i = 1; i <= num; i++) {
//     console.log(i);
//     if (!(i % 3)) {
//         console.log(`Делится на 3 без остатка ${i}`);    
//     }
// }
// btnEl.addEventListener('click', function (e) {
//     i = i + 3;
//     btnEl.textContent = i;    
// });

// let arr = [1,3,5,6,7];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]*2);
// }

// function rndm() {
//     return Math.random()*100;   
// }

// let arr = [];
// let count = +prompt('Колчество повторов')
// for (let i = 0; i < count; i++) {
//     arr.push(rndm());    
// }
// console.log(arr);


// const products = [
//     {
//         name: 'Водолазка',
//         info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, commodi? Minus dolores consectetur perspiciatis esse facere consequatur accusamus veritatis, sapiente ipsam tempora nisi repellendus expedita debitis error ab magnam libero.'
//     },
//     {
//         name: 'Кофта',
//         info: 'Vel veniam nisi, aspernatur fugit, consectetur saepe veritatis tempore pariatur illo similique quia dicta et rem magni sequi itaque, ipsam labore? Delectus perferendis quo aperiam dicta sit. Error, eveniet repellendus!'
//     }
// ]

// const prodBlock = document.querySelector('#app');
// prodBlock.classList.add("block");

// console.log(prodBlock);

// products.forEach(elem => {
//     let prodName = document.createElement('h2');
//     let prodInfo = document.createElement('p');
//     prodName.textContent = elem.name;
//     prodInfo.textContent = elem.info;
//     prodBlock.append(prodName);
//     prodBlock.append(prodInfo);
// });



// class User {
//     constructor(user, tel, email) {
//         this.user = user;
//         this.tel = tel;  
//         this.email = email;
//     }
//     showInfo(){
//         console.log(this);
//     }
// }


// const pers = new User('Бенладен','9-11','asdsad@asdsa.ru');
// pers.showInfo();

// class SU extends User {
//     showInfo(){
//         console.log(this.user, this.tel);
//     }   
// }

// const supa = new SU('Ванга',6465465465,'sdfsdfds@dfsdfsdf.com');
// supa.showInfo();

// const products = [
//     {
//         name: 'Водолазка',
//         info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, commodi? Minus dolores consectetur perspiciatis esse facere consequatur accusamus veritatis, sapiente ipsam tempora nisi repellendus expedita debitis error ab magnam libero.',
//         price: 1000
//     },
//     {
//         name: 'Кофта',
//         info: 'Vel veniam nisi, aspernatur fugit, consectetur saepe veritatis tempore pariatur illo similique quia dicta et rem magni sequi itaque, ipsam labore? Delectus perferendis quo aperiam dicta sit. Error, eveniet repellendus!',
//         price: 2500
//     }
// ]

// const bonusArr = products.map(item => item.price * 0.5);
// const app = document.querySelector('#app');
// for (let i = 0; i < products.length; i++) {
//     const priceP = document.createElement('p');
//     priceP.textContent = `Старая цена ${products[i].price} новая цена ${bonusArr[i]}`;
//     app.append(priceP);
// }

function toSec(hr) {
    return hr * 3600;
}

btnHr.addEventListener('click', function (e) {
    const inp = document.getElementById('inpHr');
    alert(`В ${inp.value} часах, ${toSec(inp.value)} секунд`);
})

function rndmPss(lnght) {
    let pass = '';
    for (let i = 0; i < lnght; i++) {
        pass += Math.floor(Math.random() * 10);
    }
    return pass;
}

rndmPass.addEventListener('click', function (b) {
    const passLenght = +prompt('Введите желаемую длину пароля');
    if (isNaN(passLenght)) {
        alert('Введите число!');
    } else {
        alert(`Ваш пароль: ${rndmPss(passLenght)}`);
    }
})

wages.addEventListener('click', function (b) {
    let wagesArray = [];
    let wagesAfterTaxArray = [];
    let employeCount = undefined;
    do {
        employeCount = +prompt('Введите количество сотрудников');
    } while (isNaN(employeCount));

    for (let i = 0; i < employeCount; i++) {
        wagesArray.push(Math.floor(Math.random() * 100000));
    }
    console.log(wagesArray);

    for (let j = 0; j < wagesArray.length; j++) {
        wagesAfterTaxArray.push(wagesArray[j] * 0.87);
    }
    console.log(`С учетом вычета 13%: ${wagesAfterTaxArray}`);
    alert('Результат в консоли');
})

addTxt.addEventListener('click', function (b) {
    const txtArr = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4'];
    const bodyElem = document.querySelector("#txtDiv");
    console.log(bodyElem);
    for (let i = 0; i < txtArr.length; i++) {
        let pElem = document.createElement('p');
        pElem.innerHTML = txtArr[i];
        bodyElem.append(pElem);
    }
})

const quotes = [
    {
        head: 'Заголовок 1',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam recusandae natus autem, odio facilis cumque ut sed architecto vitae repellendus reprehenderit harum!',
    },
    {
        head: 'Заголовок 2',
        text: 'Accusantium obcaecati corporis soluta nisi dicta unde atque, laboriosam recusandae natus autem, odio facilis cumque ut sed architecto vitae repellendus reprehenderit harum!',
    },
    {
        head: 'Заголовок 3',
        text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non iusto quam praesentium porro soluta quaerat eos reprehenderit officia iste sapiente!',
    }
]

quotesBtn.addEventListener('click', function (e) {
    const app = document.querySelector('#app');
    const quotesDiv = document.createElement('div');
    quotesDiv.classList.add("quotes");
    app.append(quotesDiv);
    quotes.forEach(elem => {
        const quoteDiv = document.createElement('div');
        const quoteHead = document.createElement('h2');
        const quoteText = document.createElement('p');
        quoteDiv.classList.add("quote");
        quotesDiv.append(quoteDiv);
        quoteHead.textContent = elem.head;
        quoteText.textContent = elem.text;
        quoteDiv.append(quoteHead);
        quoteDiv.append(quoteText);
    });
});

filterArrBtn.addEventListener('click', function (e) {
    const arrF = [3, 5, 9, 10, 1];
    const resultArr = arrF.filter((num) => num <= 5);
    console.log(resultArr);
    const app = document.querySelector('#txtDiv');
    const arrP = document.createElement('p');
    arrP.textContent = resultArr;
    app.append(arrP);
});

const user = {
    name: "Alex",
    age: 30,
    email: "alex@example.com",
    address: {
        city: "NewYork",
        zip: "10001"
    }
};

class createuUserInfo {
    constructor(name, city) {
        this.name = name;
        this.city = city;
    }
}

let {
    name: nameUI,
    address: { city: cityUI },
} = user;

let userInfo = new createuUserInfo(nameUI, cityUI);
console.log(userInfo);

class Student {
    #age = 0;
    constructor(name) {
        this.name = name;
    }
    setAge(ageF) {
        this.#age = ageF;
    }
    printInfo() {
        console.log(`Имя: ${this.name}, Возраст: ${this.#age}`);
    }
    haveBirthday() {
        this.#age += 1;
    }
}

const inst = new Student('Leonid');
inst.setAge(31);
inst.printInfo();
inst.haveBirthday();
inst.printInfo();



