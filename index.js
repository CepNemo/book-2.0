/**
 * Created by Nemo on 23.08.2017.
 */

let doc= window.document;


    let addPhoneInput  = doc.getElementById('addPhoneInput');
    let addNewTel  = doc.getElementById('addNewTel');
    let addNewEmail    = doc.getElementById('addNewEmail');
    let newMailInput   = doc.getElementById('addMailInput');
    let addContact = doc.getElementById('add');
    let createCont = doc.getElementById('newCont');
    let search = doc.getElementById('searchBlock');
    let searchFunc = doc.getElementById('tooSearch');
    let save   = doc.getElementById('save');
    let cancel  = doc.getElementById('cancel');
    let tdList = doc.getElementById('tdList');
    let searchInput = doc.getElementById('search');
    let searchlist = doc.getElementById('searchList');



    // вивод полей ввола
    let addCont = function () {
        createCont.style.display = 'block';
        search.style.display = 'none';
        tdList.style.display = 'none';
        searchList.style.display = 'none';
    };
    // возрат поля поиска
    let cancel1 = function () {
        createCont.style.display = 'none';
        search.style.display = 'block';
        tdList.style.display = 'block';
    };

    //поиск

let str = [];
let re=[];
    let searchF = function () {
        let a = searchInput.value.toLowerCase();
        let a1 = a.length;
        if(a != ""){
        for (let i = 0; i < localStorage.length; i++) {
            tdList.style.display = 'none';
            let str1 = JSON.parse(localStorage.getItem(localStorage.key(i))) + "";

             let str2 = str1.toLowerCase(). substr(0,a1);
            if (!str2.indexOf(a)) {
                re.push(str1);
                console.log(localStorage.key(i));

                let div5 = doc.createElement("div");
                searchlist.appendChild(div5);

       /*         let but = doc.createElement("div");
                but.className = 'dele';
                but.style.display = 'inline-block';
                searchlist.appendChild(but);

                let editB = doc.createElement("div");
                editB.id = "edit";
                editB.style.display = 'inline-block';
                searchlist.appendChild(editB);*/

                div5.innerHTML = ("<p>" + str1 + "</p>"+
                                "<button onclick = edit("+ localStorage.key(i) +")>Edit</button>"+
                                "<button onclick = deleteCont("+ localStorage.key(i) +")>Delete</button>");
            }
        }
        }
        else {
            window.location.reload();
        }
    };

//вивод даних
//
//let str = "";
let nArr =[];

    for (let o = 0; o < localStorage.length; o++) {

        str = JSON.parse(localStorage.getItem(localStorage.key(o)))+"";

        //let d = nArr.splice(0);

        let div = doc.createElement("div");
        div.id = "control1";
        tdList.appendChild(div);


         nArr = str.split(',');


            div.innerHTML = ("<div id='left'>" + nArr[0] +"</div>"+
                            "<div class='positBut'><button  onclick = edit("+localStorage.key(o)+")>Edit</button>"+
                            "<button  onclick = deleteCont("+localStorage.key(o)+")>Delete</button></div>");
           // div6.innerHTML += ("<h5>"+ str +"</h5>");
           // editB.innerHTML =();
           // but.innerHTML = ("<button onclick = deleteCont("+localStorage.key(o)+")>Delete</button>");

    }

    //запись даних валидация
let arr=[];
let arrP=[];
    let addData = function () {
        let tableElem = doc.getElementById('newCont');
        let allInput = tableElem.getElementsByTagName('input');
            for (let i = 0; i < allInput.length;i++){
                let inp = allInput[i];
                let inp1 = inp.value;
                if(inp1 !=""){
                    arrP =  arr.push(inp1);
           }
            }
        let name = doc.getElementById('name');
        let mail = doc.getElementById('mail');
        let tel  = doc.getElementById('phone');

        let idDate = {
            time: new Date().getTime()
        };
        let idDate1 = idDate['time'];

        let allInfo = {
            name: name.value,
            tel: tel.value,
            mail: mail.value
        };

        if (allInfo['name'] == "") {
            alert('Введите имя');
        }

        if (allInfo['name'] != "") {
            if (allInfo['tel'] != "") {
                alert('Контакт добавлен');
                localStorage.setItem(idDate1 , JSON.stringify(arr));
                window.location.reload();
            }
            else {
                alert("Введите номер");
            }
        }
    };
//добавление поля телефона
    let addNewPhone = function () {

        let div2 = document.createElement('div');
        div2.id = 'tel';
        div2.innerHTML = ("<div><input type='number' placeholder='Number'></div>");
        addPhoneInput.appendChild(div2);
    };
//добавление поля E мйл
    let addNewMail = function () {
        let div3 = document.createElement('div');
        div3.id = 'mail';
        div3.innerHTML = ("<div><input type='email' placeholder='E-mail'></div>");
        newMailInput.appendChild(div3);
    };
    //удаление контакта
  let  deleteCont = function(a){
     //let b = a;
      localStorage.removeItem(a);
      window.location.reload();
};

    // вивод поля редактирования даних
    let d,strI;
    let editt = doc.getElementById('editList');
    let div4 = document.createElement("div");

    let edit = function (a) {

        search.style.display = "none";
        tdList.style.display = 'none';

     let div5 = doc.createElement("div");
        editt.appendChild(div5);
         d = a;
         strI = JSON.parse(localStorage.getItem(d));
     let  arry1  = strI;
    for(let s = 0; s < arry1.length; s++) {
        editt.appendChild(div4);
        div4.innerHTML += ("<input  value='"+ arry1[s] +"'> </input><br>");
    }
        div5.innerHTML =("<button onclick='saved()'>Save</button><button onclick='window.location.reload()'>Cancel</button>" +
                         "<button id='addNew' onclick='addNew()'>+</button> ");

    };

    //новое поле в редакторе
    function addNew(){
        let div4 = doc.createElement("div");
        div4.innerHTML = ("<input placeholder='New field'> </input><br>");
        editt.appendChild(div4)
}

    // сохранение редактированих даних
    let arrNewDate=[];
    let arrPush = [];
    function saved(){

        let Elem = doc.getElementById('editList');
        let elemInput = Elem.getElementsByTagName('input');
        for (let i = 0; i < elemInput.length;i++){
            let inp = elemInput[i];
            let inp1 = inp.value;
            if(inp1 != "") {
                 arrPush = arrNewDate.push(inp1);
            }

        localStorage.setItem(JSON.stringify(d), JSON.stringify(arrNewDate));
            window.location.reload();
    }
}


searchFunc.addEventListener('click',searchF);
cancel.addEventListener('click',cancel1);
save.addEventListener('click', addData);
addContact.addEventListener('click', addCont);
addNewTel.addEventListener('click',addNewPhone);
addNewEmail.addEventListener('click',addNewMail);