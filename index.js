/**
 * Created by Nemo on 23.08.2017.
 */

let doc = window.document;


;(function() {
    let addPhoneInput = doc.getElementById('addPhoneInput');
    let addNewTel = doc.getElementById('addNewTel');
    let addNewEmail = doc.getElementById('addNewEmail');
    //let contData = doc.forms['contData'];
    let newMailInput = doc.getElementById('addMailInput');
    let addContact = doc.getElementById('add');
    let createCont = doc.getElementById('newCont');
    let search = doc.getElementById('searchBlock');
    let save = doc.getElementById('save');
    let cancel = doc.getElementById('cancel');
    let tdList = doc.getElementById('tdList');
    let dell = doc.getElementById('delete');
    let redData = doc.getElementById('edit');



    // вивод полей ввола
    let addCont = function () {
        createCont.style.display = 'block';
        search.style.display = 'none';
        tdList.style.display = 'none';
    };
    // возрат поля поиска
    let cancel1 = function () {
        createCont.style.display = 'none';
        search.style.display = 'block';
        tdList.style.display = 'block';
    };


    for (let o = 0; o < localStorage.length; o++) {

        let arrKey = "";
        let str = "";
        arrKey = localStorage.key(o);

        let div = document.createElement("div");
        div.className = localStorage.key(o);
        tdList.appendChild(div);
        str = JSON.parse(localStorage.getItem(localStorage.key(o))) + "";
        let narry = str.split(',');

        console.log(narry);

        div.innerHTML = (
        "<ul><li>" + "<i>Имя:</i>" + " " + narry[0] + "</li>" + " " +
        "<li>" + "<i>E-mail:</i>" + " " + narry[1] + "</li>" + " " +
        "<li>" + "<i>Телефон:</i>" + " " + narry[2] + "</li>" +
        "<li><button id = 'delete' onclick = dell(" + arrKey + ")>Delele</button>" +
        "<button id ='edit' onclick =edit(" + arrKey + ")>Edit</button></li></ul>");

    }

    //запись даних валидация

    let addData = function () {

        let name = doc.getElementById('name');
        let mail = doc.getElementById('mail');
        let tel = doc.getElementById('phone');
        let mail2 = doc.getElementsByClassName('mail');
        //alert(mail2.length);

        let idDate = {
            time: new Date().getTime()
        };
        let idDate1 = [idDate['time']];

        let allInfo = {
            name: name.value,
            tel: tel.value,
            mail: mail.value,
            mail2: mail2.value

        };
        let allinfo1 = [
            allInfo['name'],
            allInfo['tel'],
            allInfo['mail'],
            allInfo['mail2']];

        if (allinfo1[0] == "") {
            alert('Введите имя');
        }

        if (allinfo1[0] != "") {
            if (allInfo.tel != "") {
                alert('Контакт добавлен');
                localStorage.setItem(JSON.stringify(idDate1), JSON.stringify(allinfo1));
                window.location.reload();
            }
            else {
                alert("Введите номер");
            }
        }
    };

    let addNewPhone = function () {

        let div2 = document.createElement('div');
        div2.className = 'tel';
        div2.innerHTML = ("<div><input type='number' placeholder='Number'></div>");
        addPhoneInput.appendChild(div2);
    };

    let addNewMail = function () {
        let div3 = document.createElement('div');
        div3.className = 'mail';
        div3.innerHTML = ("<div><input type='email' placeholder='E-mail'></div>");
        newMailInput.appendChild(div3);
    };


         cancel.addEventListener('click',cancel1);
           save.addEventListener('click', addData);
     addContact.addEventListener('click', addCont);
      addNewTel.addEventListener('click',addNewPhone);
    addNewEmail.addEventListener('click',addNewMail);

})();
/*let d,strI;

 function edit(a) {

     let div4 = document.createElement("div");
         d = a;
         strI = JSON.parse(localStorage.getItem("["+d+"]"));
     let  arry1  = strI[0];
    for(let s = 0; s < arry1.length; s++) {

        //div4.className = localStorage.key("["+d+"]");
        tdList.appendChild(div4);


        //console.log(narry);

        div4.innerHTML = (
          "<ul>" + "<i>Имя:</i>" + " <input value='" +strI[0] + "'></li>" + " " +
          "<li>" + "<i>E-mail:</i>" + " <input value='" + strI[2] + "'></li>" + " " +
          "<li>" + "<i>Телефон:</i>" + "<input value='" + strI[1] + "'></li>" +
         "</ul>"+"<button id='save2' onclick='sav()'>Save</button>");
    }
};
function sav(){
    if(strI !== undefined){
        localStorage.setItem(JSON.stringify(d), JSON.stringify(strI));
    }
}
/!*function save2()  {
    localStorage.setItem(JSON.stringify(d), JSON.stringify(strI));}*!/*/

function dell(a) {
    let q = a;
            localStorage.removeItem("["+q+"]");
            window.location.reload();
    }


