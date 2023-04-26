// ....................................................................... class_popup.js

"use strict";


function But_Home_Modal_Clicked(num_but) {

    if (Last_Home_Modal == 'msg_sup') {
        if (num_but == 2) {
            Show_Suporte_Section();
        }
    }

    if (Last_Home_Modal == 'cadastre') {
        if (num_but == 2) {
            Show_Account_Section();
        }
    }

    if (Last_Home_Modal == 'feedback') {
        if (num_but == 2) {
            Show_Feedback();
        }
    }

    if (Last_Home_Modal == 'email') {
        if (num_but == 2) {
            Reenviar_Email();
        }
    }

    if (Last_Home_Modal == 'promo_10' || Last_Home_Modal == 'promo_15' || Last_Home_Modal == 'promo_20' || Last_Home_Modal == 'promo_25' ||
        Last_Home_Modal == 'promo_30' || Last_Home_Modal == 'promo_35' || Last_Home_Modal == 'promo_40') {
        if (num_but == 2) {
            Show_Shopping_Section();
        }
    }

    if (Last_Home_Modal == 'new_version' || Last_Home_Modal == 'review') {
        if (num_but == 2) {
            window.location.href= "https://play.google.com/store/apps/details?id=com.promasterchess.open";
        }
    }

    $("#modal_home").hide();

    Store_Click(CLICK_SHOW_MODAL_HOME, Last_Home_Modal + "-" + num_but);

}


function Get_Popup() {

    var vars    = ["popup"];
    Ajax_Connect(vars);

}



function Show_Popup_Custom(ind) {

    if (Conf_Language == "ENG") {
        var titulo  = Popups[ind].titulo_eng;
        var txt_1   = Popups[ind].txt_1_eng;
        var txt_2   = Popups[ind].txt_2_eng;
        var but_1   = Popups[ind].but_1_eng;
        var but_2   = Popups[ind].but_2_eng;
    }
    if (Conf_Language == "POR") {
        var titulo  = Popups[ind].titulo_por;
        var txt_1   = Popups[ind].txt_1_por;
        var txt_2   = Popups[ind].txt_2_por;
        var but_1   = Popups[ind].but_1_por;
        var but_2   = Popups[ind].but_2_por;
    }
    if (Conf_Language == "SPN") {
        var titulo  = Popups[ind].titulo_spn;
        var txt_1   = Popups[ind].txt_1_spn;
        var txt_2   = Popups[ind].txt_2_spn;
        var but_1   = Popups[ind].but_1_spn;
        var but_2   = Popups[ind].but_2_spn;
    }
    if (Conf_Language == "ITA") {
        var titulo  = Popups[ind].titulo_ita;
        var txt_1   = Popups[ind].txt_1_ita;
        var txt_2   = Popups[ind].txt_2_ita;
        var but_1   = Popups[ind].but_1_ita;
        var but_2   = Popups[ind].but_2_ita;
    }
    if (Conf_Language == "FRA") {
        var titulo  = Popups[ind].titulo_fra;
        var txt_1   = Popups[ind].txt_1_fra;
        var txt_2   = Popups[ind].txt_2_fra;
        var but_1   = Popups[ind].but_1_fra;
        var but_2   = Popups[ind].but_2_fra;
    }
    if (Conf_Language == "GER") {
        var titulo  = Popups[ind].titulo_ger;
        var txt_1   = Popups[ind].txt_1_ger;
        var txt_2   = Popups[ind].txt_2_ger;
        var but_1   = Popups[ind].but_1_ger;
        var but_2   = Popups[ind].but_2_ger;
    }

    Show_Modal_Home(Last_Home_Modal, titulo, txt_1, txt_2, but_1, but_2);

}





function Show_Popup_Quote() {

    var xis = Random(1, 35);

    if (Conf_Language == "ENG") {
        var titulo  = Tab_Quotes_Tit.eng;
        var txt_1   = '"' + Tab_Quotes[xis].eng + '"';
        var txt_2   = Tab_Quotes[xis].aut;
        var but_1   = "";
        var but_2   = "OK";
    }
    if (Conf_Language == "POR") {
        var titulo = Tab_Quotes_Tit.por;
        var txt_1   = '"' + Tab_Quotes[xis].por + '"';
        var txt_2   = Tab_Quotes[xis].aut;
        var but_1   = "";
        var but_2   = "OK";
    }
    if (Conf_Language == "SPN") {
        var titulo = Tab_Quotes_Tit.spn;
        var txt_1   = '"' + Tab_Quotes[xis].spn + '"';
        var txt_2   = Tab_Quotes[xis].aut;
        var but_1   = "";
        var but_2   = "OK";
    }
    if (Conf_Language == "ITA") {
        var titulo = Tab_Quotes_Tit.ita;
        var txt_1   = '"' + Tab_Quotes[xis].ita + '"';
        var txt_2   = Tab_Quotes[xis].aut;
        var but_1   = "";
        var but_2   = "OK";
    }
    if (Conf_Language == "FRA") {
        var titulo = Tab_Quotes_Tit.fra;
        var txt_1   = '"' + Tab_Quotes[xis].fra + '"';
        var txt_2   = Tab_Quotes[xis].aut;
        var but_1   = "";
        var but_2   = "OK";
    }
    if (Conf_Language == "GER") {
        var titulo = Tab_Quotes_Tit.ger;
        var txt_1   = '"' + Tab_Quotes[xis].ger + '"';
        var txt_2   = Tab_Quotes[xis].aut;
        var but_1   = "";
        var but_2   = "OK";
    }

    Show_Modal_Home(Last_Home_Modal, titulo, txt_1, txt_2, but_1, but_2);

}



function Show_Popup_Home(tipo) {

    Last_Home_Modal = tipo;

    if (tipo == "quote") {
        Show_Popup_Quote();
    }

    if (tipo == "msg_sup") {
        Show_Popup_Custom(1);
    }

    if (tipo == "cadastre") {
        Show_Popup_Custom(2);
    }

    if (tipo == "feedback") {
        Show_Popup_Custom(3);
    }

    if (tipo == "new_version") {
        Show_Popup_Custom(4);
    }

    if (tipo == "review") {
        Show_Popup_Custom(5);
    }

    if (tipo == "email") {
        Show_Popup_Custom(6);
    }

    if (tipo == "full_version") {
        Show_Popup_Custom(7);
    }

    if (tipo == "promo_10") {
        Show_Popup_Custom(8);
    }

    if (tipo == "promo_15") {
        Show_Popup_Custom(9);
    }

    if (tipo == "promo_20") {
        Show_Popup_Custom(10);
    }

    if (tipo == "promo_25") {
        Show_Popup_Custom(11);
    }

    if (tipo == "promo_30") {
        Show_Popup_Custom(12);
    }

    if (tipo == "promo_35") {
        Show_Popup_Custom(13);
    }

    if (tipo == "promo_40") {
        Show_Popup_Custom(14);
    }

}


function Save_Promo_Time(tipo_promo, secs_promo) {

    var agora = Get_Agora();

    if (tipo_promo == 'promo_10') {
        var num_promo   = 10;
        var perc        = 10;
    }

    if (tipo_promo == 'promo_15') {
        var num_promo   = 15;
        var perc        = 15;
    }

    if (tipo_promo == 'promo_20') {
        var num_promo   = 20;
        var perc        = 20;
    }

    if (tipo_promo == 'promo_25') {
        var num_promo   = 25;
        var perc        = 25;
    }

    if (tipo_promo == 'promo_30') {
        var num_promo   = 30;
        var perc        = 30;
    }

    if (tipo_promo == 'promo_35') {
        var num_promo   = 35;
        var perc        = 35;
    }

    if (tipo_promo == 'promo_40') {
        var num_promo   = 40;
        var perc        = 40;
    }

    localStorage.setItem('promo_time', num_promo + "~" + perc + "~" + secs_promo + "~" + agora);
    Cloud_Change = true;

}


function Set_HTML_Promo() {

    $("#price_p0_top").html(Price.open_00);
    $("#price_p0_bottom").html(Price.open_00);

    var promo_time  = localStorage.getItem('promo_time');
    if (promo_time === null || promo_time == 0 || promo_time == "") {
        Current_Promo = 0;
        return;
    }

    var arr         = promo_time.split("~");
    Current_Promo   = arr[0];
    var perc        = arr[1];
    var secs_promo  = arr[2];
    var dt_inicio   = arr[3];
    var agora       = Get_Agora();

    var secs_elapsed = Get_Secs_Elapsed(dt_inicio, agora);
    var secs_to_end  = secs_promo - secs_elapsed;

    $("#promo_img_top").attr('src', 'img/' + 'promo_' +  perc + '.png');
    $("#promo_img_bottom").attr('src', 'img/' + 'promo_' +  perc + '.png');

    $("#shop_promo1_regular_price").html(Price.open_00);
    $("#shop_promo2_regular_price").html(Price.open_00);

    if (Current_Promo == 10) {
        $("#shop_promo1_today_price").html(Price.open_10);
        $("#shop_promo2_today_price").html(Price.open_10);
    }
    if (Current_Promo == 15) {
        $("#shop_promo1_today_price").html(Price.open_15);
        $("#shop_promo2_today_price").html(Price.open_15);
    }
    if (Current_Promo == 20) {
        $("#shop_promo1_today_price").html(Price.open_20);
        $("#shop_promo2_today_price").html(Price.open_20);
    }
    if (Current_Promo == 25) {
        $("#shop_promo1_today_price").html(Price.open_25);
        $("#shop_promo2_today_price").html(Price.open_25);
    }
    if (Current_Promo == 30) {
        $("#shop_promo1_today_price").html(Price.open_30);
        $("#shop_promo2_today_price").html(Price.open_30);
    }
    if (Current_Promo == 35) {
        $("#shop_promo1_today_price").html(Price.open_35);
        $("#shop_promo2_today_price").html(Price.open_35);
    }
    if (Current_Promo == 40) {
        $("#shop_promo1_today_price").html(Price.open_40);
        $("#shop_promo2_today_price").html(Price.open_40);
    }

    if (secs_to_end > 0) {
        Promo_Area_On(Current_Promo);
    } else {
        Promo_Area_Off();
    }

}


function Promo_Area_Off() {

    $("#price_area_top_promo").css('display', 'none');
    $("#price_area_bottom_promo").css('display', 'none');
    $("#price_area_top_normal").css('display', 'block');
    $("#price_area_bottom_normal").css('display', 'block');

    $("#home_label").css('display', 'block');
    $("#home_promo").css('display', 'none');

}

function Promo_Area_On(perc) {

    $("#home_promo_perc").html(perc + '% OFF:');

    $("#price_area_top_promo").css('display', 'block');
    $("#price_area_bottom_promo").css('display', 'block');
    $("#price_area_top_normal").css('display', 'none');
    $("#price_area_bottom_normal").css('display', 'none');

    $("#home_label").css('display', 'none');
    $("#home_promo").css('display', 'block');

}


function Set_Promotion() {

    var promo_time = localStorage.getItem('promo_time');

    if (promo_time === null || promo_time == "" || IS_PREMIUM) {
        return;
    }

    Set_Timer_Promo();
    Set_HTML_Promo();

}


function Set_Timer_Trial() {

    if (Tipo_User != 'trial_30d') {
        $("#area_trial").css('display', 'none');
        return;
    }

    var trial_time  = localStorage.getItem('trial_30d');
    var arr         = trial_time.split("~");

    if (trial_time !== null) {
        var secs_trial  = arr[0];
        var dt_inicio   = arr[1];
        if (secs_trial <= 0) {
            $("#area_trial").css('display', 'none');
            return;
        }
    } else {
        $("#area_trial").css('display', 'none');
        return;
    }

    $("#area_trial").css('display', 'block');

    var agora       = Get_Agora();

    var secs_elapsed = Get_Secs_Elapsed(dt_inicio, agora);
    var secs_to_end  = secs_trial - secs_elapsed;

    if (secs_to_end < 0) {
        $("#area_trial").css('display', 'none');
        return;
    }

    var days = parseInt(secs_to_end / 86400, 10);
    if (days > 0) {
        secs_to_end = secs_to_end - (days * 86400);
    }

    var hours = parseInt(secs_to_end / 3600, 10);
    if (hours > 0) {
        secs_to_end = secs_to_end - (hours * 3600);
    }

    var mins = parseInt(secs_to_end / 60, 10);
    if (mins > 0) {
        secs_to_end = secs_to_end - (mins * 60);
    }

    Trial_Timer.days    = days;
    Trial_Timer.hours   = hours;
    Trial_Timer.mins    = mins;
    Trial_Timer.secs    = secs_to_end;

    clearInterval(Timer_Trial);
    Timer_Trial = setInterval(Handle_Timer_Trial, 1000, Trial_Timer);

}




function Set_Timer_Promo() {

    var promo_time  = localStorage.getItem('promo_time');
    if (promo_time === null || promo_time == "") {
        return;
    }

    var arr         = promo_time.split("~");
    var num_promo   = arr[0];
    var perc        = arr[1];
    var secs_promo  = arr[2];
    var dt_inicio   = arr[3];
    var agora       = Get_Agora();

    var secs_elapsed = Get_Secs_Elapsed(dt_inicio, agora);
    var secs_to_end  = secs_promo - secs_elapsed;

    if (secs_to_end < 0) {
        return;
    }

    var days = parseInt(secs_to_end / 86400, 10);
    if (days > 0) {
        secs_to_end = secs_to_end - (days * 86400);
    }

    var hours = parseInt(secs_to_end / 3600, 10);
    if (hours > 0) {
        secs_to_end = secs_to_end - (hours * 3600);
    }

    var mins = parseInt(secs_to_end / 60, 10);
    if (mins > 0) {
        secs_to_end = secs_to_end - (mins * 60);
    }

    Promo_Timer.days    = days;
    Promo_Timer.hours   = hours;
    Promo_Timer.mins    = mins;
    Promo_Timer.secs    = secs_to_end;


    clearInterval(Timer_Promo);
    Timer_Promo = setInterval(Handle_Timer_Promo, 1000, Promo_Timer);

   // $("#cupom_asking").css('display', 'none');

}



function Show_Modal_Home(mod_tipo, mod_titulo, mod_txt_1, mod_txt_2, but_1, but_2) {

    if (mod_tipo == 'msg_sup' || mod_tipo == 'cadastre' || mod_tipo == 'feedback' || mod_tipo == 'new_version' || mod_tipo == 'review' || mod_tipo == 'email' || mod_tipo == 'promo' ) {
        $("#mod_home_msg_2").css('display', 'none');
    } else {
        $("#mod_home_msg_2").css('display', 'block');
    }

    if (mod_tipo == 'full_version') {
        $("#mod_home_msg_2").css('display', 'none');
        $("#mod_home_but_1").css('display', 'none');
    } else {
        $("#mod_home_but_1").css('display', 'block');
    }

    if (mod_tipo == 'quote') {
        $("#mod_home_but_1").css('display', 'none');
    }

    $("#mod_home_titulo").html(mod_titulo);
    $("#mod_home_msg_1").html(mod_txt_1);
    $("#mod_home_msg_2").html(mod_txt_2);
    $("#mod_home_bt1").html(but_1);
    $("#mod_home_bt2").html(but_2);
    $("#show_modal_home").click();

}
