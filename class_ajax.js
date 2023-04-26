// ....................................................................... class_ajax.js

"use strict";


function Ajax_Connect(vars) {

    if (ID_App == "") {
        alert(Tab_Lang_151[31]);
        return;
    }

    var action = vars[0];

    $.ajax({
        url: "https://promasterchess.com/open/" + SUB_DIR + "/back/back.php",
        method: "POST",
        data: { version:    VERSION,
                id_app:     ID_App,
                             action:  vars[0],
                                 p1:  vars[1],
                                 p2:  vars[2],
                                 p3:  vars[3],
                                 p4:  vars[4],
                                 p5:  vars[5],
                                 p6:  vars[6],
                                 p7:  vars[7],
                                 p8:  vars[8],
                                 p9:  vars[9],
                                 p10: vars[10],
                                 p11: vars[11],
                                 p12: vars[12],
                                 p13: vars[13],
                                 p14: vars[14],
                                 p15: vars[15] },
        success: (function (result) {
            Handle_Retorno_Ajax(result, vars[0]);
        }),
        fail: (function () {
            if (action == 'new_user' || action == 'new_cadastro' || action == 'survey' || action == 'new_msg_suporte' || action == 'sales' || action == 'reenviar_email' || action == 'trial_30d') {
                alert(Tab_Lang [244]);
            }
            if (action == 'cloud') {
                Cloud_Not_Saved = true;
            }
        })
    });

}



function Checa_Last_Cloud() {

    var vars = ["checa_last_cloud"];
    Ajax_Connect(vars);

}

function Check_New_Messages() {

    var vars = ["check_msg_suporte"];
    Ajax_Connect(vars);

}

function Create_New_Section() {

    var vars = ["new_section", CEL_WIDTH, CEL_APPVERSION, CEL_LANGUAGE];
    Ajax_Connect(vars);

}


function Get_Next_Num_Dispositivo(id_app) {

    var vars = ["get_next_num_disp", id_app];
    Ajax_Connect(vars);

}

function Get_Suporte_One_Msg(id_msg) {

    var vars = ["get_suporte_one_msg", id_msg];
    Ajax_Connect(vars);

}


function Handle_Retorno_Ajax(result, action) {

    if (action == "check_cupom") {
        return Handle_Retorno_Check_Cupom(result);
    }

    if (action == "checa_last_cloud") {
        return Handle_Retorno_Checa_Last_Cloud(result);
    }

    if (action == "check_msg_suporte") {
        return Handle_Retorno_Msg_Suporte(result);
    }

    if (action == "cloud") {
        return Handle_Retorno_Cloud(result);
    }

    if (action == "get_next_num_disp") {
        return Handle_Retorno_Get_Next_Num_Disp(result);
    }

    if (action == "get_suporte_one_msg") {
        return Handle_Retorno_Get_Suporte_One_Msg(result);
    }

    if (action == "get_user_category") {
        return Handle_Retorno_Get_User_Category(result);
    }

    if (action == "new_cadastro") {
        return Handle_Retorno_New_Cadastro(result);
    }

    if (action == "new_msg_suporte") {
        return Handle_Retorno_New_Msg_Suporte(result);
    }

    if (action == "new_section") {
        return Handle_Retorno_New_Section(result);
    }

    if (action == "new_user") {
        return Handle_Retorno_New_User(result);
    }

    if (action == "popup") {
        return Handle_Retorno_Popup(result);
    }

    if (action == "recover") {
        return Handle_Retorno_Recover(result);
    }

    if (action == "reenviar_email") {
        return Handle_Retorno_Reenviar_Email(result);
    }

    if (action == "sales") {
        return Handle_Retorno_Sales(result);
    }

    if (action == "save_clicks") {
        return Handle_Retorno_Save_Clicks(result);
    }

    if (action == "survey") {
        return Feedback.Handle_Retorno_Survey(result);
    }

    if (action == "sync") {
        return Handle_Retorno_Sync(result);
    }

    if (action == "sync_confirm") {
        return Handle_Retorno_Sync_Confirm(result);
    }

    if (action == "sync_reenvio") {
        return Handle_Retorno_Sync_Reenvio(result);
    }

    if (action == "treino_error") {
        return;
    }

    if (action == "trial_30d") {
        return Handle_Retorno_Trial(result);
    }

}


function Handle_Retorno_Checa_Last_Cloud(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        if (arr[1] == "Unique") {
            return;
        }
        var last_cloud_db       = arr[1];
        var last_cloud_local    = localStorage.getItem('last_cloud');
        if (last_cloud_local === null || last_cloud_db > last_cloud_local) {
            Send_Recover_To_Back(ID_App);
        }
        localStorage.setItem('last_cloud', last_cloud_db);
    } else {
        //alert(Tab_Lang [244]);  // erro de conexão
    }

}


function Handle_Retorno_Check_Cupom(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        if (arr[1] > 0) {
            Update_Price_After_Cupom(arr[1]);
        } else {
            $("#cupom_error").css('display', 'block');
        }
    } else {
        alert(Tab_Lang [244]);  // erro de conexão
    }


}

function Handle_Retorno_Cloud(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        Cloud_Not_Saved = false;
        if (arr[1].trim() == "Conflito") {
            Clear_Cron();
            var last_local = Formata_Data(localStorage.getItem('last_cloud'));
            $("#sync_alert_data_db").html(arr[2]);
            $("#sync_alert_data_local").html(last_local);
            $("#show_modal_sync_alert").click();
        } else {
            localStorage.setItem('last_cloud', arr[1]);
        }
    }

}


function Handle_Retorno_Get_Next_Num_Disp(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        localStorage.setItem('num_disp', arr[1]);
    } else {
        alert(Tab_Lang [244]);
    }

}


function Handle_Retorno_Get_Suporte_One_Msg(result) {

    var arr = result.split("^");

    if (arr[0].trim() == "OK") {
        Print_One_Msg_Suporte(arr[1]);
        $("#alert_msg").css('display', 'none');
    } else {
        alert(Tab_Lang [244]);
    }

}


function Handle_Retorno_Get_User_Category(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        Tipo_User       = arr[1];

        if (Tipo_User == 'premium') {
            IS_FREE     = false;
            IS_PREMIUM  = true;
            IS_TRIAL    = false;
        }

        if (Tipo_User == 'trial_30d' ) {
            IS_FREE     = false;
            IS_PREMIUM  = false;
            IS_TRIAL    = true;
            var secs_to_end = arr[2];
            var agora = Get_Agora();
            localStorage.setItem('trial_30d', secs_to_end + "~" + agora);
            Set_Timer_Trial();
        }

        if (Tipo_User == 'free') {
            IS_FREE     = true;
            IS_PREMIUM  = false;
            IS_TRIAL    = false;
        }

        Update_Local_Storage_Tipo_User(arr[1]);

        Print_Area_Shopping();
        Print_Trial_Menu_But();
        But_Menu_Clicked(3);

    }

}


function Handle_Retorno_Msg_Suporte(result) {

    Clear_Old_Messages();

    var arr = result.split("^");

    if (arr[0].trim() == "OK") {
        var arr = arr[1].split("|||");
        for (var i = 0; i < arr.length - 1; i++) {
            localStorage.setItem('supp_subj_' + (i + 1), arr[i]);
        }
        Print_Msgs_Suporte();
    }

}


function Handle_Retorno_New_Cadastro(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        var name         = arr[1];
        var email        = arr[2];
        var sexo         = arr[3];
        var dt_nasc      = arr[4];
        var rating       = arr[5];
        var country      = arr[6];
        var status_email = arr[7];
        var agora        = arr[8];

        var perfil_user = 'cad~' + name + '~' + email + '~' + sexo + '~' + dt_nasc + '~' + rating + '~' + agora + '~' + country + '~';
        localStorage.setItem('perfil_user', perfil_user);
        Cloud_Change = true;

        var newstr = Tab_Lang[102].replace('@user_email', '<span style="color: #0066CC; font-weight: bold;">' + email + '</span>');
        $("#lg_102").html(newstr);

        $("#form_cadastro").css ('display', 'none');
        $("#ret_cadastro").css ('display', 'block');

        document.body.scrollTop = 0;

        Print_Dados_Pessoais();

    } else {
        alert(Tab_Lang [244]);
    }

}


function Handle_Retorno_New_Msg_Suporte(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        Check_New_Messages();
        Show_Msg(LG_SUPORTE_SENT_TIT, LG_SUPORTE_SENT_BODY_1);
    } else {
        alert(Tab_Lang [244]);
    }

}


function Handle_Retorno_New_Section(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        ID_Acesso = arr[1];
        localStorage.setItem('last_section', ID_Acesso + '~' + Get_Agora());
    }

}


function Handle_Retorno_New_User(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        Inicializa_New_User();
    } else {
        alert(Tab_Lang [244]);
    }

}


function Handle_Retorno_Popup(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        Show_Popup_Home(arr[1]);
        if (arr[1] == "promo_10" || arr[1] == "promo_15" || arr[1] == "promo_20" || arr[1] == "promo_25" ||
            arr[1] == "promo_30" || arr[1] == "promo_35" || arr[1] == "promo_40") {
            Save_Promo_Time(arr[1], arr[2]);
            Set_Promotion();
        }
    } else {
        Show_Popup_Home("quote");
    }

}


function Handle_Retorno_Recover(result) {

    var arr = result.split("***");

    if (arr[0].trim() == "OK") {
        if ((arr[1].trim() == "Not found")) {
            alert(Tab_Lang_151[36]);
            return;
        }
        Set_Dados_Recover(arr[1].trim());
        Refresh_After_Recover();
        Clear_Form_Recover();
    } else {
        alert(Tab_Lang [244]);
    }

}


function Handle_Retorno_Reenviar_Email(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        Show_Msg(Tab_Lang_150[61], Tab_Lang_150[62] + "&nbsp;<b>" + arr[1] + "</b>.<br><br>" + Tab_Lang_150[63]);
    } else {
        alert(Tab_Lang [244]);
    }

}


function Handle_Retorno_Sales(result) {

    IS_PREMIUM  = true;
    IS_TRIAL    = false;
    IS_FREE     = false;

    Update_Local_Storage_Tipo_User('premium');

    var titulo  = Tab_Lang [260];
    var txt_msg = Tab_Lang [261];
    Show_Msg(titulo, txt_msg);

    localStorage.removeItem('trial_30d');
    $("#area_trial").css('display', 'none');
    Print_Area_Shopping();
    Print_Trial_Menu_But();
    But_Menu_Clicked(3);

}


function Handle_Retorno_Save_Clicks(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        localStorage.removeItem("clicks");
    } else {
        // not connected
    }

}





function Handle_Retorno_Sync(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        if (arr[1] == 'Not found') {
            alert(Tab_Lang_151[33]);
            return;
        }
        if (arr[1] == 'No email') {
            alert(Tab_Lang_151[34]);
            return;
        }

        $("#email_cod_sync").html(arr[1]);
        $("#area_sync_confirm").css('display', 'block');
        $("#area_sync_main").css('display', 'none');

    } else {
        alert(Tab_Lang [244]);  // erro de conexão
    }

}


function Handle_Retorno_Sync_Confirm(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        if (arr[1] == 'No') {
            alert(Tab_Lang_151[32]);
        } else {
            Get_Next_Num_Dispositivo(ID_App_to_Sync);
            Send_Recover_To_Back(ID_App_to_Sync);
        }
    } else {
        alert(Tab_Lang [244]);  // erro de conexão
    }


}


function Handle_Retorno_Sync_Reenvio(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        if (arr[1] == 'Not found') {
            alert(Tab_Lang_151[33]);
            return;
        }
        alert(Tab_Lang_151[35] + " " + arr[1]);
    } else {
        alert(Tab_Lang [244]);  // erro de conexão
    }

}


function Handle_Retorno_Trial(result) {

    var arr = result.split("~");

    if (arr[0].trim() == "OK") {
        IS_FREE     = false;
        IS_PREMIUM  = false;
        IS_TRIAL    = true;
        Tipo_User   = 'trial_30d';
        Update_Local_Storage_Tipo_User('trial_30d');
        Inicializa_Trial_Eval();
        But_Menu_Clicked(3);
        Show_Msg(LG_POPUP_INICIO_EVAL_TIT, LG_POPUP_INICIO_EVAL_P1 + BREAKLINE + LG_POPUP_INICIO_EVAL_P2 + BREAKLINE + LG_POPUP_INICIO_EVAL_P3);
    } else {
        if (arr[0].trim() == "ERR") {
            alert(Tab_Lang_150[74]);
        } else {
            alert(Tab_Lang [244]);  // erro de conexão
        }
    }

}



function Inicia_Avaliacao() {

    var vars = ["trial_30d"];
    Ajax_Connect(vars);

}


function Inicializa_Trial_Eval() {

    var agora = Get_Agora();
    localStorage.setItem('trial_30d', (30 * 86400) + "~" + agora);

    Set_Timer_Trial();
    Print_Trial_Menu_But();

    Cloud_Change = true;

}


function Reenviar_Cod_To_Sync() {

    var vars = ["sync_reenvio", ID_App_to_Sync];
    Ajax_Connect(vars);

}


function Reenviar_Email() {

    var vars = ["reenviar_email"];
    Ajax_Connect(vars);

}


function Refresh_After_Recover() {

    Set_Tipo_User();

    Load_Config();
    Set_Conf_Lang();
    Check_New_Messages();

    Get_User_Category();

    Populate_Combos();

    Print_Cards_Favoritos();
    Print_Id_App(ID_App);
    Set_Timer_Trial();
    Handle_Lines_Off_Temp();

    Print_Msgs_Suporte();
    Print_Dados_Pessoais();
    Print_Area_Shopping();
    Print_Trial_Menu_But();

    But_Menu_Clicked(3);

}


function Send_Clicks() {

    var clicks = localStorage.getItem('clicks');

    if (clicks != null) {
    	var vars = ["save_clicks", ID_Acesso, clicks];
        Ajax_Connect(vars);
    }

}


function Send_Cloud(force) {

    if (!force) {
        if (!Cloud_Change) {
            if (Cloud_Not_Saved == false) {
                Checa_Last_Cloud();
                return;
            }
        }
    }

    var num_disp        = localStorage.getItem('num_disp');
    var tipo_user       = localStorage.getItem('tipo_user');
    var trial           = localStorage.getItem('trial_30d');
    var promo_time      = localStorage.getItem('promo_time');
    var perfil_user     = localStorage.getItem('perfil_user');
    var config          = localStorage.getItem('config');
    var last_cloud      = localStorage.getItem('last_cloud');

    var all_cards   = "";
    for (var i=1; i < TAB_CARDS.length; i++) {
        var temp = localStorage.getItem('card_' + i);
        all_cards = all_cards + temp + "@";
    }

    var cards_fav   = localStorage.getItem('favoritos');

    var all_games   = "";
    for (var i=1; i < Tab_Games.length; i++) {
        var temp = localStorage.getItem('game_' + i);
        if (temp !== null) {
            all_games = all_games + 'g_' + i + '~' + temp + "@";
        }
    }

    var lines_off   = localStorage.getItem('lines_off');
    var records     = localStorage.getItem('records');

    var vars = ["cloud", num_disp, tipo_user, trial, promo_time, perfil_user, config, all_cards, cards_fav, all_games, lines_off, records, last_cloud, force];
    Ajax_Connect(vars);

    Cloud_Change = false;

}

function Send_Cod_Sync_To_Confirm(cod) {

    var vars = ["sync_confirm", ID_App_to_Sync, cod];
    Ajax_Connect(vars);

}


function Send_Id_App_To_Sync() {

    var vars = ["sync", ID_App_to_Sync];
    Ajax_Connect(vars);

}


function Send_New_Msg_Suporte() {

    var subject = document.getElementById("suporte_new_subj").value;
    var texto   = document.getElementById("suporte_new_texto").value;

    if (Consiste_New_Msg_Suporte(subject, texto)) {
        var vars = ["new_msg_suporte", subject, texto];
        Ajax_Connect(vars);
        Clear_Form_Suporte();
    }

}


function Send_Recover_To_Back(id_app_to_recover) {

    Clear_Cron();
    var vars = ["recover", id_app_to_recover];
    Ajax_Connect(vars);

}


function Send_Treino_Report_Error(who) {

    var id_card     = Exerc.id_card;
    var line        = Exerc.num_line;
    var nivel       = Exerc.nivel;

    var vars = ["treino_error", id_card, line, nivel, who];
    Ajax_Connect(vars);

}


function Set_Dados_Recover(dados) {

    localStorage.clear();

    var arr = dados.split("|");

    var id_app      = arr[0];
    var version     = arr[1];
    var tipo_user   = arr[2];
    var trial       = arr[3];
    var promo_time  = arr[4];
    var perfil_user = arr[5];
    var config      = arr[6];
    var cards       = arr[7];
    var cards_fav   = arr[8];
    var games       = arr[9];
    var lines_off   = arr[10];
    var records     = arr[11];
    var dt_incl     = arr[12];
    var dt_last     = arr[13];

    ID_App = id_app;
    localStorage.setItem('id_app', id_app);

    localStorage.setItem('tipo_user', tipo_user);
    localStorage.setItem('trial_30d', trial);
    localStorage.setItem('promo_time', promo_time);
    localStorage.setItem('perfil_user', perfil_user);

    localStorage.setItem('config', config);
    localStorage.setItem('favoritos', cards_fav);
    localStorage.setItem('lines_off', lines_off);
    localStorage.setItem('records', records);

    localStorage.setItem('last_cloud', dt_last);

    var arr_cards = cards.split("@");
    for (var i=0; i < arr_cards.length; i++) {
        var ind = i + 1;
        localStorage.setItem('card_' + ind, arr_cards[i]);
    }

    if (games != "") {
        var arr_games = games.split("@");
        for (var i=0; i < arr_games.length; i++) {
            var x1 = arr_games[i].split("~");
            var x2 = x1[0].split("_");
            localStorage.setItem('game_' + x2[1], x1[1] + "~" + x1[2] + "~");
        }
    }

    Set_Cron();

}

function Set_Tipo_User() {            // off-line

    Tipo_User = localStorage.getItem('tipo_user');

    if (Tipo_User == 'premium') {
        IS_FREE     = false;
        IS_PREMIUM  = true;
        IS_TRIAL    = false;
    }

    if (Tipo_User == 'trial_30d' ) {
        IS_FREE     = false;
        IS_PREMIUM  = false;
        IS_TRIAL    = true;
        Set_Timer_Trial();
    }

    if (Tipo_User == 'free') {
        IS_FREE     = true;
        IS_PREMIUM  = false;
        IS_TRIAL    = false;
    }

}


function Update_Local_Storage_Tipo_User(new_tipo_user) {

    var old_tipo_user = localStorage.getItem('tipo_user');

    if (old_tipo_user === null || new_tipo_user != old_tipo_user) {
        localStorage.setItem('tipo_user', new_tipo_user);
        Cloud_Change = true;
    }

}
