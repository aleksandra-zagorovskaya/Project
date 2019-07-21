
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

    //Проверка фамилии
     var lastName=$("input[name=contacl]");
        if (lastName.val()=="") {
            $("#hidden_contacl").show();
            lastName.addClass("error");
            result=false;
        }
		
		
    //Проверка имени
    var name=$("input[name=contacf]");
    if (name.val()=="") { //проверка на пустоту  val
        $("#hidden_contacf").show();
        name.addClass("error");
        result=false;
    }

    //Проверка даты
    var birth=$("input[name=bDay]");
    if (birth.val()=="") {
        $("#hidden_bDay").show();
        birth.addClass("error");
        result=false;
    }

    //Проверка email
    var email=$("input[name=email]");
    var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (email.val()=="") {
        $("#hidden_email").show().html("Введите email");
        email.addClass("error");
        result=false;
    } else {
        if(pattern.test(email.val())==false){ //с каким шаблоном сравниваем.
            $("#hidden_email").show().html("Заполните поле email по шаблону");
            email.addClass("error");
            result=false;
        }
    }
	 //Проверка паспорта
     var passport1=$("input[name=passport1]");
        if (passport1.val()=="") {
            $("#hidden_passport1").show();
            passport1.addClass("error");
            result=false;
        }
		//проверка идентифик №
	var personalnmbr=$("input[name=personalnmbr]");
		if (personalnmbr.is(":visible")){// проверяем наличие элемента на странице поле ID паспорта при смене страны
		if (personalnmbr.val()=="") { 
			$("#hidden_personalnmbr").show();
			personalnmbr.addClass("error");
			result=false;
	}	
	}
	//проверка индекса
	var postcode2=$("input[name=postcode2]");
	if (postcode2.is(":visible")){
    if (postcode2.val()=="") { 
        $("#hidden_postcode2").show();
        postcode2.addClass("error");
        result=false;
	}	
	}	
	//проверка на пустоту населенного пункта
     var city=$("input[name=city]");
        if (city.val()=="") {
            $("#hidden_city").show();
            city.addClass("error");
            result=false;
        }
	//проверка на пустоту телефона
     var postmob=$("input[name=postmob]");
        if (postmob.val()=="") {
            $("#hidden_postmob").show();
            postmob.addClass("error");
            result=false;
        }
		
	    if (result==false) {
        $('html, body').animate({scrollTop: 0},1500);// поднятие страницы вверх animate
    }
    return result;
}
	
	
//2
function selectCitizen() {
var citizen=$('select[name=r_country_private]');
if (citizen.val()!='BY') {
	$("#tr_passport2").hide();
} else {
	$("#tr_passport2").show();	
	}
}


//4 скрыть индекс если стана не РБ исли рб показать. //3 Если страна РБ прописать Минск в строке
function selectCity() {
var city=$('select[name=r_country]');
if (city.val()!='BY') {
	$("#tr_index").hide();
	$("input[name=city]").val("");
} else {
	
	$("input[name=city]").removeClass("error");
	$("#hidden_city").hide();	
	$("#tr_index").show();	
	$("input[name=city]").val("Минск");
	}
}
function changeCheck(){
var contract=$ ("input[name=contractAgree]");
}

