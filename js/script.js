
jQuery(function($) {
    $('#form_private').on('submit', function(event) {
        event.preventDefault(); // отменяем событие по умолчанию
        if ( sendForm()===false ) { // если есть ошибки возвращает false
            return false; // прерываем выполнение скрипта
        }
        else {
            alert("Данные успешно отправлены");
        }
    });

    $(".textfield,.datepicker").on('focus', function() { //выбираем все input
        if ($(this).hasClass("error")) { //если ошибка
            $(this).removeClass("error"); // удалить
            $(this).nextAll(".hidden_err").hide(); // скрывает классы с hidden_err
        }
    });
    $(".datepicker").datepicker({
        dateFormat: "dd.mm.yy"
    });
});

function sendForm() {
    var result=true;

    //Проверка имени
    var name=$("input[name=name]");
    if (name.val()=="") { //проверка на пустоту  val
        $("#hidden_name").show();
        name.addClass("error");
        result=false;
    }

    //Проверка email
    var email=$("input[name=email]");
    var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.val()=="") {
        $("#hidden_email").show().html("Введите email");
        email.addClass("error");
        result=false;
    }

	//проверка на пустоту телефона
     var postmob=$("input[name=phone]");
        if (postmob.val()=="") {
            $("#hidden_phone").show();
            postmob.addClass("error");
            result=false;
        }

    return result;
}

function changeCheck(){
var contract=$ ("input[name=contractAgree]");
}

