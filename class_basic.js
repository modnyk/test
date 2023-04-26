/* ********************************************************************** class_basic.js

    Apenas funções independentes que não utilizam variáveis Globais, exceto CONSTANTES



    OBS: Todas as funções podem chamar STORE_CLICK quando necessário

****************************************************************************************/


"use strict";


function Account_Save() {

    var name        = document.getElementById("user_name").value;
    var email       = document.getElementById("user_email").value;
    var country	    = document.getElementById("user_country").value;
    var sexo        = document.getElementById("user_sexo").value;
    var nasc_dd	    = document.getElementById("user_nasc_dd").value;
    var nasc_mm	    = document.getElementById("user_nasc_mm").value;
    var nasc_aa	    = document.getElementById("user_nasc_aa").value;

    var tempo	    = document.getElementById("user_tempo").value;
    var rating	    = document.getElementById("user_rating").value;
    var source	    = document.getElementById("user_source").value;
    var promoter    = document.getElementById("user_promoter").value;

    var email       = email.trim();

    if (Consiste_Cad_User(name, email, country, sexo, nasc_dd, nasc_mm, nasc_aa, tempo, rating, source, promoter)) {
        var vars = ["new_cadastro", name, email, country, sexo, nasc_dd, nasc_mm, nasc_aa, tempo, rating, source, promoter];
        Ajax_Connect(vars);
    }

    Store_Click(CLICK_CREATE_ACCOUNT, "");

}


function Board_Buttons_OFF() {

    But_Board_Left_OFF();
    But_Board_Right_OFF();
    But_Board_Next_OFF();

}


function Build_Sound(_file) {

    var audio_element = document.createElement('audio');

    if (audio_element.canPlayType) {
        for (var i = 0; i < arguments.length; i++) {
            var source_element = document.createElement('source');
            source_element.setAttribute('src', arguments[i]);
            if (arguments[i].match(/\.(\w+)$/i)) {
                source_element.setAttribute('type', AUDIO_TYPES[RegExp.$1]);
                audio_element.appendChild(source_element);
            }
        }

        audio_element.load();
        audio_element.playclip = function () {
                                    /* audio_element.volume = 0.3; */
                                    audio_element.pause();
                                    audio_element.currentTime = 0;
                                    audio_element.play();
                                }

        return audio_element;
    }

}


function But_Board_Left_OFF() {

    $("#but_board_left_on").css('display', 'none');
    $("#but_board_left_off").css('display', 'block');

    $("#but_board_lines_left_on").css('display', 'none');
    $("#but_board_lines_left_off").css('display', 'block');

}


function But_Board_Left_ON() {

    $("#but_board_left_off").css('display', 'none');
    $("#but_board_left_on").css('display', 'block');

    $("#but_board_lines_left_off").css('display', 'none');
    $("#but_board_lines_left_on").css('display', 'block');

}


function But_Board_Next_OFF() {

    $("#but_board_skip_on").css('display', 'none');
    $("#but_board_next_on").css('display', 'none');
    $("#but_board_next_off").css('display', 'block');

}


function But_Board_Next_ON() {

    $("#but_board_skip_on").css('display', 'none');
    $("#but_board_next_off").css('display', 'none');
    $("#but_board_next_on").css('display', 'block');

}


function But_Board_Right_OFF() {

    $("#but_board_right_on").css('display', 'none');
    $("#but_board_right_off").css('display', 'block');

    $("#but_board_lines_right_on").css('display', 'none');
    $("#but_board_lines_right_off").css('display', 'block');

}


function But_Board_Right_ON() {

    $("#but_board_right_off").css('display', 'none');
    $("#but_board_right_on").css('display', 'block');

    $("#but_board_lines_right_off").css('display', 'none');
    $("#but_board_lines_right_on").css('display', 'block');

}


function But_Board_Skip_ON() {

    $("#but_board_next_off").css('display', 'none');
    $("#but_board_next_on").css('display', 'none');
    $("#but_board_skip_on").css('display', 'block');
}


function But_Board_Status_OFF() {

    $("#bt_board_status_on").css('display', 'none');
    $("#bt_board_status_off").css('display', 'block');

}


function But_Board_Status_ON() {

    $("#bt_board_status_off").css('display', 'none');
    $("#bt_board_status_on").css('display', 'block');

}


function Calcula_Idade(data_nasc) {

    var nasc_ano = data_nasc.substr(0, 4);
    var nasc_mes = data_nasc.substr(5, 2);
    var nasc_dia = data_nasc.substr(8, 2);

    var d = new Date;
    var ano_atual = d.getFullYear();
    var mes_atual = d.getMonth() + 1;
    var dia_atual = d.getDate();

    var idade = ano_atual - nasc_ano;

    if (mes_atual < nasc_mes || mes_atual == nasc_mes && dia_atual < nasc_dia) {
        idade--;
    }

    return idade < 0 ? 0 : idade;

}


function Card_Line_OFF(num_line) {

    $("#status_line_" + num_line).html('<img src="img/board_status_off.png">');
    $("#line_bga_" + num_line).css('border-color', '#D3B692');
    $("#line_bga_" + num_line).css('background', '#F0D8BC');
    $("#line_bgb_" + num_line).css('background', '#D3B692');

}


function Card_Line_ON(num_line) {

    $("#status_line_" + num_line).html('<img src="img/board_status_on.png">');
    $("#line_bga_" + num_line).css('border-color', '#3D2D19');
    $("#line_bga_" + num_line).css('background', '#F5E4D1');
    $("#line_bgb_" + num_line).css('background', '#3D2D19');

}


function Carrega_Tab_Cards_Cur(tab_cards_sel) {

    var tab = {
        nivel_1: "",
        nivel_2: "",
        nivel_3: "",
        nivel_4: "",
        nivel_5: "",
        tot_1:    0,
        tot_2:    0,
        tot_3:    0,
        tot_4:    0,
        tot_5:    0,
    }

    tab.nivel_1   = Zip_Lines(tab_cards_sel.nivel_1);
    tab.nivel_2   = Zip_Lines(tab_cards_sel.nivel_2);
    tab.nivel_3   = Zip_Lines(tab_cards_sel.nivel_3);
    tab.nivel_4   = Zip_Lines(tab_cards_sel.nivel_4);
    tab.nivel_5   = Zip_Lines(tab_cards_sel.nivel_5);

    if (tab.nivel_1 == "") {
        tab.tot_1 = 0;
    } else {
        tab.tot_1     = tab.nivel_1.split("-").length;
    }

    if (tab.nivel_2 == "") {
        tab.tot_2 = 0;
    } else {
        tab.tot_2     = tab.nivel_2.split("-").length;
    }

    if (tab.nivel_3 == "") {
        tab.tot_3 = 0;
    } else {
        tab.tot_3     = tab.nivel_3.split("-").length;
    }

    if (tab.nivel_4 == "") {
        tab.tot_4 = 0;
    } else {
        tab.tot_4     = tab.nivel_4.split("-").length;
    }

    if (tab.nivel_5 == "") {
        tab.tot_5 = 0;
    } else {
        tab.tot_5     = tab.nivel_5.split("-").length;
    }

    return tab;

}


function Checa_Se_Card_Eh_Free(tab_cards_sel, id_card) {

    var tipo = tab_cards_sel.type;

    for (var i=0; i < CARDS_FREE[tipo].length; i++) {
        if (CARDS_FREE[tipo][i] == id_card) {
            return true;
        }
    }

    return false;

}


function Checa_Se_Completou_Nivel(tab_cards_sel, nivel, next_exerc) {

    if (nivel == 1 && next_exerc == tab_cards_sel.tot_1) {
        return true;
    }
    if (nivel == 2 && next_exerc == tab_cards_sel.tot_2) {
        return true;
    }
    if (nivel == 3 && next_exerc == tab_cards_sel.tot_3) {
        return true;
    }
    if (nivel == 4 && next_exerc == tab_cards_sel.tot_4) {
        return true;
    }
    if (nivel == 5 && next_exerc == tab_cards_sel.tot_5) {
        return true;
    }

    return false;

}

function Checa_Se_Tem_Nivel_Comecado(id_card, nivel) {

    var xis = localStorage.getItem('card_' + id_card + '_n' + nivel);

    if (xis === null) {
        return false;
    }

    return true;

}


function Clear_Cron() {

    clearInterval(Timer_Section);
    clearInterval(Timer_Clicks);
    clearInterval(Timer_Cloud);
    clearInterval(Timer_Suporte);

}


function Clear_Form_Feedback() {

    $('#form_best1').val('');
    $('#form_best2').val('');
    $('#form_best3').val('');
    $('#form_worst1').val('');
    $('#form_worst2').val('');
    $('#form_worst3').val('');
    $('#form_comments').val('');

    for (var i=1; i < 7; i++) {
        for (var j=1; j < 6; j++) {
            $('#star_' + i + '_' + j).css('color', '#cccccc');
        }
    }

}

function Clear_Form_Recover() {

    $('#rec_id_app_1').val('');
    $('#rec_id_app_2').val('');
    $('#rec_id_app_3').val('');
    $('#rec_id_app_4').val('');

}

function Clear_Form_Suporte() {

    $('#suporte_new_subj').val('');
    $('#suporte_new_texto').val('');

}


function Clear_Old_Messages() {

    for (var i = 1; i < 200; i++) {
        var xis = localStorage.getItem('supp_subj_' + i);
        if (xis === null) {
            return;
        }
        localStorage.removeItem(xis);
    }

}


function Consiste_Cad_User(user_name, user_email, user_country, user_sexo, user_nasc_dd, user_nasc_mm, user_nasc_aa, tempo, rating, source, promoter) {

    var tem_erros = false;

    if (!Consiste_Preenchido(user_name, "user_name")) {
        $('#user_name').addClass('error');
        tem_erros = true;
    }

    if (!Consiste_Email(user_email, "user_email")) {
        tem_erros = true;
    }

    if (user_country == 0) {
        $('#user_country').addClass('error');
        tem_erros = true;
    }

    if (user_sexo == 0) {
        $('#user_sexo').addClass('error');
        tem_erros = true;
    }

    if (user_nasc_dd == 0) {
        $('#user_nasc_dd').addClass('error');
        tem_erros = true;
    }

    if (user_nasc_mm == 0) {
        $('#user_nasc_mm').addClass('error');
        tem_erros = true;
    }

    if (user_nasc_aa == 0) {
        $('#user_nasc_aa').addClass('error');
        tem_erros = true;
    }

    if (tempo == 0) {
        $('#user_tempo').addClass('error');
        tem_erros = true;
    }

    if (rating == 0) {
        $('#user_rating').addClass('error');
        tem_erros = true;
    }

    if (source == 0) {
        $('#user_source').addClass('error');
        tem_erros = true;
    }

    if (source == 9 && promoter == "") {
        $('#user_promoter').addClass('error');
        tem_erros = true;
    }

    if (tem_erros) {
        return false;
    }

    return true;

}


function Consiste_Cod_Sync() {

    var tem_erros = false;

    var xis = document.getElementById("cod_sync_1").value;
    if (!Consiste_Preenchido(xis, "cod_sync_1")) {
        $('#cod_sync_1').addClass('error');
        tem_erros = true;
    }

    var xis = document.getElementById("cod_sync_2").value;
    if (!Consiste_Preenchido(xis, "cod_sync_2")) {
        $('#cod_sync_2').addClass('error');
        tem_erros = true;
    }

    var xis = document.getElementById("cod_sync_3").value;
    if (!Consiste_Preenchido(xis, "cod_sync_3")) {
        $('#cod_sync_3').addClass('error');
        tem_erros = true;
    }

    var xis = document.getElementById("cod_sync_4").value;
    if (!Consiste_Preenchido(xis, "cod_sync_4")) {
        $('#cod_sync_4').addClass('error');
        tem_erros = true;
    }

    if (tem_erros) {
        return false;
    }

    return true;

}


function Consiste_Email(email, tag) {

    if (!Validate_Email(email)) {
        $('#' + tag).addClass('error');
        return false;
    }

    return true;

}


function Consiste_ID_APP(origem) {

    var tem_erros = false;

    if (origem == 'recover') {
        var p1 = document.getElementById("rec_id_app_1").value;
        var p2 = document.getElementById("rec_id_app_2").value;
        var p3 = document.getElementById("rec_id_app_3").value;
        var p4 = document.getElementById("rec_id_app_4").value;

        if (!Consiste_Part_ID_APP(p1, "rec_id_app_1")) {
            tem_erros = true;
        }
        if (!Consiste_Part_ID_APP(p2, "rec_id_app_2")) {
            tem_erros = true;
        }
        if (!Consiste_Part_ID_APP(p3, "rec_id_app_3")) {
            tem_erros = true;
        }
        if (!Consiste_Part_ID_APP(p4, "rec_id_app_4")) {
            tem_erros = true;
        }
    }

    if (origem == 'sync') {
        var p1 = document.getElementById("sync_id_app_1").value;
        var p2 = document.getElementById("sync_id_app_2").value;
        var p3 = document.getElementById("sync_id_app_3").value;
        var p4 = document.getElementById("sync_id_app_4").value;

        if (!Consiste_Part_ID_APP(p1, "sync_id_app_1")) {
            tem_erros = true;
        }
        if (!Consiste_Part_ID_APP(p2, "sync_id_app_2")) {
            tem_erros = true;
        }
        if (!Consiste_Part_ID_APP(p3, "sync_id_app_3")) {
            tem_erros = true;
        }
        if (!Consiste_Part_ID_APP(p4, "sync_id_app_4")) {
            tem_erros = true;
        }
    }

    if (tem_erros) {
        return false;
    }

    return true;

}


function Consiste_New_Msg_Suporte(subject, texto) {

    var tem_erros = false;

    if (!Consiste_Preenchido(subject, "suporte_new_subj")) {
        $('#suporte_new_subj').addClass('error');
        tem_erros = true;
    }

    if(texto.length < 1) {
        $('#suporte_new_texto').addClass('error');
        tem_erros = true;
    }

    if (tem_erros) {
        return false;
    }

    return true;

}


function Consiste_Part_ID_APP(my_var, tag) {

    if (my_var.length != 4) {
        $('#' + tag).addClass('error');
        return false;
    }

    return true;

}


function Consiste_Preenchido(my_var, tag) {

    if (my_var == "") {
        $('#' + tag).addClass('error');
        return false;
    }

    return true;

}


function Consiste_Survey(form_best1, form_best2, form_best3, form_worst1, form_worst2, form_worst3, form_comments) {

    var tem_erros = false;

    if (!Consiste_Preenchido(form_best1, "form_best1")) {
        tem_erros = true;
    }

    if (!Consiste_Preenchido(form_best2, "form_best2")) {
        tem_erros = true;
    }

    if (!Consiste_Preenchido(form_best3, "form_best3")) {
        tem_erros = true;
    }

    if (!Consiste_Preenchido(form_worst1, "form_worst1")) {
        tem_erros = true;
    }

    if (!Consiste_Preenchido(form_worst2, "form_worst2")) {
        tem_erros = true;
    }

    if (!Consiste_Preenchido(form_worst3, "form_worst3")) {
        tem_erros = true;
    }

    if (tem_erros) {
        return false;
    }

    return true;

}


function Create_Id() {

    return 'xxxxxxxxxxxxxxxx'.replace(/x/g,
        function (c) {
            var r = Math.random() * 16 | 0;
            return r.toString(16).toUpperCase();
        }
    );

}


function Create_Local_Storage_Cards() {

    for (var i=1; i < TAB_CARDS.length; i++) {
        localStorage.setItem('card_' + i, i + '~1~0~0000-00-00 00:00:00~');               // id, nivel, ind }
    }

}


function Create_Perfil_User() {

    var tipo_user   = 'guest'
    var name        = '';
    var email       = '';
    var sexo        = '';
    var dt_nasc     = '';
    var rating      = '';
    var since       = '';
    var pais        = '';

    var perfil_user = tipo_user + '~' + name + '~' + email + '~' + sexo + '~' + dt_nasc + '~' + rating + '~' + since + '~' + pais + '~';

    localStorage.setItem('perfil_user', perfil_user);

}


function Desabilita_Flags_Modal() {

    $("#flag_ENG").css('filter', 'opacity(20%)');
    $("#flag_POR").css('filter', 'opacity(20%)');
    $("#flag_SPN").css('filter', 'opacity(20%)');
    $("#flag_ITA").css('filter', 'opacity(20%)');
    $("#flag_FRA").css('filter', 'opacity(20%)');
    $("#flag_GER").css('filter', 'opacity(20%)');

}


function Desliga_Buttons_Rosa() {

    $("#but_nivel_rosa_1").attr('src', 'img/but_rosa_n1_off.png');
    $("#but_nivel_rosa_2").attr('src', 'img/but_rosa_n2_off.png');
    $("#but_nivel_rosa_3").attr('src', 'img/but_rosa_n3_off.png');
    $("#but_nivel_rosa_4").attr('src', 'img/but_rosa_n4_off.png');
    $("#but_nivel_rosa_5").attr('src', 'img/but_rosa_n5_off.png');

}


function Esta_No_Favoritos(id_card) {

    var favoritos = localStorage.getItem('favoritos');

    if (favoritos === null) {
        return false;
    }

    if (favoritos.includes("~" + id_card + "~")) {
        return true;
    } else {
        return false;
    }

}


function Exclui_Favoritos(id_card) {

    var favoritos   = localStorage.getItem('favoritos');

    if (favoritos.includes("~" + id_card + "~")) {
        var new_fav     = favoritos.replace("~" + id_card + "~", "~");
        localStorage.setItem('favoritos', new_fav);
        Cloud_Change = true;
    }

}


function Fill_Modal_Info(param) {

    if (param == 'acertos') {
        $("#modal_info_title").html(LG_POPINFO_ACERTOS_TIT);
        $("#modal_info_body").html(LG_POPINFO_ACERTOS_P1);
    }

    if (param == 'record') {
        $("#modal_info_title").html(LG_POPINFO_RECORDE_TIT);
        $("#modal_info_body").html(LG_POPINFO_RECORDE_P1);
    }

    if (param == 'how_to_train') {
        $("#modal_info_title").html(LG_POPINFO_TRAIN_TIT);
        $("#modal_info_body").html(LG_POPINFO_TRAIN_P1 + LG_POPINFO_TRAIN_P2 + LG_POPINFO_TRAIN_P3 + LG_POPINFO_TRAIN_P4);
    }

    if (param == 'best') {
        $("#modal_info_title").html(LG_POPINFO_BOARD_BEST_TIT);
        $("#modal_info_body").html(LG_POPINFO_BOARD_BEST_P1 + BREAKLINE + LG_POPINFO_BOARD_BEST_P2 + BREAKLINE + LG_POPINFO_BOARD_BEST_P3 + LG_POPINFO_BOARD_BEST_P4);
    }

    if (param == 'score') {
        $("#modal_info_title").html(LG_POPINFO_BOARD_SCORE_TIT);
        $("#modal_info_body").html(LG_POPINFO_BOARD_SCORE_P1 + BREAKLINE + LG_POPINFO_BOARD_SCORE_P2 + BREAKLINE + LG_POPINFO_BOARD_SCORE_P3 + BREAKLINE + LG_POPINFO_BOARD_SCORE_P4);
    }

    if (param == 'acesso_limitado') {
        $("#modal_info_title").html(LG_POPINFO_LIMITED_TIT);
        $("#modal_info_body").html(LG_POPINFO_LIMITED_P1 + BREAKLINE + LG_POPINFO_LIMITED_P2 + BREAKLINE + LG_POPINFO_LIMITED_P3);
    }

    if (param == 'lines_how_to') {
        $("#modal_info_title").html(Tab_Lang_150[75]);
        $("#modal_info_body").html(Tab_Lang_150[76]);
    }

    if (param == 'games') {
        $("#modal_info_title").html(Tab_Lang [229]);
        $("#modal_info_body").html(Tab_Lang [230]);
    }

    if (param == 'browser_lines') {
        $("#modal_info_title").html(LG_POPINFO_BROWSER_TIT);
        $("#modal_info_body").html(LG_POPINFO_BROWSER_P1 + BREAKLINE + LG_POPINFO_BROWSER_P2);
    }

    if (param == 'games_sort') {
        $("#modal_info_title").html(LG_POPINFO_GAMES_SORT_TIT);
        $("#modal_info_body").html(LG_POPINFO_GAMES_SORT_P1 + LG_POPINFO_GAMES_SORT_P2 + LG_POPINFO_GAMES_SORT_P3 + LG_POPINFO_GAMES_SORT_P4 + LG_POPINFO_GAMES_SORT_P5 + LG_POPINFO_GAMES_SORT_P6 + LG_POPINFO_GAMES_SORT_P7 + LG_POPINFO_GAMES_SORT_P8);
    }

    if (param == 'favoritos') {
        $("#modal_info_title").html(LG_POPINFO_HEAD_FAVORITOS_TIT);
        $("#modal_info_body").html(LG_POPINFO_HEAD_FAVORITOS_P1 + BREAKLINE + LG_POPINFO_HEAD_FAVORITOS_P2 + BREAKLINE + LG_POPINFO_HEAD_FAVORITOS_P3);
    }

    if (param == 'id_app') {
        $("#modal_info_title").html(LG_POPINFO_ACC_ID_APP_TIT);
        $("#modal_info_body").html(LG_POPINFO_ACC_ID_APP_P1 + BREAKLINE + LG_POPINFO_ACC_ID_APP_P2 + BREAKLINE + LG_POPINFO_ACC_ID_APP_P3);
    }

    if (param == 'esse_disp') {
        $("#modal_info_title").html(LG_POPINFO_ACC_ESSE_DISP_TIT);
        $("#modal_info_body").html(LG_POPINFO_ACC_ESSE_DISP_P1 + BREAKLINE + LG_POPINFO_ACC_ESSE_DISP_P2 + BREAKLINE + LG_POPINFO_ACC_ESSE_DISP_P3);
    }

    if (param == 'money_back') {
        $("#modal_info_title").html(LG_POPINFO_MONEY_BACK_TIT);
        $("#modal_info_body").html(LG_POPINFO_MONEY_BACK_P1 + BREAKLINE + LG_POPINFO_MONEY_BACK_P2 + BREAKLINE + LG_POPINFO_MONEY_BACK_P3);
    }

    if (param == 'suporte') {
        $("#modal_info_title").html(Tab_Lang [231]);
        $("#modal_info_body").html(Tab_Lang [196] + BREAKLINE + Tab_Lang [232]);
    }

    if (param == 'time_per_move') {
        $("#modal_info_title").html(LG_POPINFO_CONF_TIME_PER_MOVE_TIT);
        $("#modal_info_body").html(LG_POPINFO_CONF_TIME_PER_MOVE_P1);
    }

    if (param == 'time_per_exerc') {
        $("#modal_info_title").html(LG_POPINFO_CONF_TIME_PER_EXERC_TIT);
        $("#modal_info_body").html(LG_POPINFO_CONF_TIME_PER_EXERC_P1);
    }

    if (param == 'show_solution') {
        $("#modal_info_title").html(LG_POPINFO_CONF_SHOW_SOLUTION_TIT);
        $("#modal_info_body").html(LG_POPINFO_CONF_SHOW_SOLUTION_P1);
    }

    if (param == 'board_colors') {
        $("#modal_info_title").html(LG_POPINFO_CONF_BOARD_COLORS_TIT);
        $("#modal_info_body").html(LG_POPINFO_CONF_BOARD_COLORS_P1 + BREAKLINE + LG_POPINFO_CONF_BOARD_COLORS_P2);
    }

    if (param == 'sync_varios') {
        $("#modal_info_title").html(LG_POPINFO_SYNC_VARIOS_DISP_TIT);
        $("#modal_info_body").html(LG_POPINFO_SYNC_VARIOS_DISP_P1 + BREAKLINE + LG_POPINFO_SYNC_VARIOS_DISP_P2);
    }

    if (param == 'sync_cadastro') {
        $("#modal_info_title").html(LG_POPINFO_SYNC_CADASTRO_TIT);
        $("#modal_info_body").html(LG_POPINFO_SYNC_CADASTRO_P1 + BREAKLINE + LG_POPINFO_SYNC_CADASTRO_P2);
    }

    if (param == 'sync_id_disp') {
        $("#modal_info_title").html(LG_POPINFO_SYNC_ID_DISP_TIT);
        $("#modal_info_body").html(LG_POPINFO_SYNC_ID_DISP_P1 + BREAKLINE + LG_POPINFO_SYNC_ID_DISP_P2 + BREAKLINE + LG_POPINFO_SYNC_ID_DISP_P3);
    }

    if (param == 'sync_email') {
        $("#modal_info_title").html(LG_POPINFO_SYNC_SEND_EMAIL_TIT);
        $("#modal_info_body").html(LG_POPINFO_SYNC_SEND_EMAIL_P1 + BREAKLINE + LG_POPINFO_SYNC_SEND_EMAIL_P2 + BREAKLINE + LG_POPINFO_SYNC_SEND_EMAIL_P3 + BREAKLINE + LG_POPINFO_SYNC_SEND_EMAIL_P4);
    }

    if (param == 'play') {
        $("#modal_info_title").html(LG_POPINFO_MODO_PLAY_TIT);
        $("#modal_info_body").html(LG_POPINFO_MODO_PLAY_P1 + BREAKLINE + LG_POPINFO_MODO_PLAY_P2 + BREAKLINE + LG_POPINFO_MODO_PLAY_P3 + BREAKLINE + LG_POPINFO_MODO_PLAY_P4);
    }

    if (param == 'analyse') {
        $("#modal_info_title").html(LG_POPINFO_MODO_ANALYSE_TIT);
        $("#modal_info_body").html(LG_POPINFO_MODO_ANALYSE_P1 + BREAKLINE + LG_POPINFO_MODO_ANALYSE_P2 + BREAKLINE + LG_POPINFO_MODO_ANALYSE_P3);
    }

    if (param == 'eco') {
        $("#modal_info_title").html(LG_POPINFO_ECO_TIT);
        $("#modal_info_body").html(LG_POPINFO_ECO_P1 + BREAKLINE + LG_POPINFO_ECO_P2 + BREAKLINE + LG_POPINFO_ECO_P3);
    }



    if (param == 10) {    // TRAIN
        $("#modal_info_title").html(Tab_Lang [225]);
        $("#modal_info_body").html(Tab_Lang [226]);
    }

    if (param == 'stats') {
        $("#modal_info_title").html(LG_STATS_COMMING_SOON_TIT);
        $("#modal_info_body").html(LG_STATS_COMMING_SOON_BODY);
    }


}


function Form_Origem_Changed(id_tag) {

    var xis	= document.getElementById("user_source").value;

    if (xis == 9) {
        $("#promoter").css('display', 'block');
    } else {
        $("#promoter").css('display', 'none');
    }

    My_Remove_Class(id_tag);

}


function Formata_Data(dt_orig) {                   // 2021-01-01 ou 2021-01-01 12:32:01

    if (dt_orig === undefined) {
        return "??/??/????";
    }

    var mes_descr = ['err', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    var dia = dt_orig.substr(8, 2);
    var mes = parseInt(dt_orig.substr(5, 2), 10);
    var ano = dt_orig.substr(2, 2);

    if (dt_orig.length > 10) {
        var hh = dt_orig.substr(11, 2);
        var mm = dt_orig.substr(14, 2);
        return dia + " " + mes_descr[mes] + " " + ano + " " + hh + ":" + mm;
    }

    return dia + " " + mes_descr[mes] + " " + ano;

}


function Formata_Id_App(id_app) {

    return id_app.substr(0, 4) + "-" + id_app.substr(4, 4) + "-" + id_app.substr(8, 4) + "-" + id_app.substr(12, 4);

}


function Get_Agora() {

    var now     = new Date(Date.now());
    var dia     = Pad(now.getDate(), 2);
    var mes     = Pad(now.getMonth() + 1, 2);
    var ano     = now.getFullYear();
    var hora    = Pad(now.getHours(), 2);
    var min     = Pad(now.getMinutes(), 2);
    var seg     = Pad(now.getSeconds(), 2);

    return ano + "-" + mes + "-" + dia + ' ' +  hora + ":" + min + ":" + seg;

}


function Get_Agora_Short() {

    var now     = new Date(Date.now());
    var hora    = Pad(now.getHours(), 2);
    var min     = Pad(now.getMinutes(), 2);
    var seg     = Pad(now.getSeconds(), 2);

    return hora + ":" + min + ":" + seg;

}



function Get_Card_Cores_Fav(done, nivel) {

    if (done == 0 && nivel == 1) {
        var bd_label        = "#eeeeee";
        var bg_label        = "#eeeeee";
        var bg_progr        = "#dddddd";
        var cor_progr       = "#333333";
        var cor_da_borda    = "#808080";
    } else {
        var bd_label        = "#FFCC00";
        var bg_label        = "#F5E4D1"; // "linear-gradient(180deg, #FFFF99 0%, #FFFFD1 100%);";
        var bg_progr        = "linear-gradient(-90deg, #FFCC00 0%, #FFD52E 100%);";
        var cor_progr       = "#003300";
        var cor_da_borda    = "#F038A3";
    }

    return [bd_label, bg_label, bg_progr, cor_progr, cor_da_borda];

}


function Get_Card_Width_Fav()  {

    if (CEL_WIDTH >= 528) {  return ['148px', '11px', '156px'];  }
    if (CEL_WIDTH >= 515) {  return ['144px', '11px', '152px'];  }
    if (CEL_WIDTH >= 491) {  return ['134px', '10px', '142px'];  }
    if (CEL_WIDTH >= 436) {  return ['118px', '10px', '126px'];  }
    if (CEL_WIDTH >= 424) {  return ['114px', '10px', '122px'];  }
    if (CEL_WIDTH >= 414) {  return ['110px', '10px', '118px'];  }
    if (CEL_WIDTH >= 412) {  return ['110px', '10px', '118px'];  }
    if (CEL_WIDTH >= 411) {  return ['110px', '10px', '118px'];  }
    if (CEL_WIDTH >= 393) {  return ['104px', '10px', '112px'];  }
    if (CEL_WIDTH >= 390) {  return ['104px', '10px', '112px'];  }
    if (CEL_WIDTH >= 384) {  return ['102px', '10px', '110px'];  }
    if (CEL_WIDTH >= 377) {  return ['100px', '10px', '108px'];  }
    if (CEL_WIDTH >= 375) {  return ['100px', '10px', '108px'];  }
    if (CEL_WIDTH >= 360) {  return ['94px',  '9px',  '102px'];  }
    if (CEL_WIDTH >= 320) {  return ['80px',  '8px',  '88px'];   }
    if (CEL_WIDTH >= 281) {  return ['66px',  '6px',  '74px'];   }

    return ['66px',  '6px',  '74px'];

}


function Get_Class_Label_Font() {

    if (CEL_WIDTH >= 528) { return 'label-11px'; }
    if (CEL_WIDTH >= 515) { return 'label-11px'; }
    if (CEL_WIDTH >= 491) { return 'label-10px'; }
    if (CEL_WIDTH >= 436) { return 'label-10px'; }
    if (CEL_WIDTH >= 424) { return 'label-10px'; }
    if (CEL_WIDTH >= 414) { return 'label-10px'; }
    if (CEL_WIDTH >= 412) { return 'label-10px'; }
    if (CEL_WIDTH >= 411) { return 'label-10px'; }
    if (CEL_WIDTH >= 393) { return 'label-10px'; }
    if (CEL_WIDTH >= 390) { return 'label-10px'; }
    if (CEL_WIDTH >= 384) { return 'label-10px'; }
    if (CEL_WIDTH >= 377) { return 'label-10px'; }
    if (CEL_WIDTH >= 375) { return 'label-10px'; }
    if (CEL_WIDTH >= 360) { return 'label-9px'; }
    if (CEL_WIDTH >= 320) { return 'label-8px'; }
    if (CEL_WIDTH >= 281) { return 'label-6px'; }

    return 'label-4px';

}


function Get_Days_Interval(data1, data2)  {

    var start = new Date(data1);
    var end = new Date(data2);
    var diff = Math.round((end- start)/(1000*60*60*24));

    return diff;

}


function Get_Days_Remaining(hoje)  {

    var assinatura      = localStorage.getItem('assinatura');
    var remaining_days  = Get_Days_Interval(hoje, assinatura);

    if (remaining_days < 0) {
        return 0;
    }

    return remaining_days;

}


function Get_Descr_Tab_Eco(tab_eco, eco) {

    for (var i=0; i < tab_eco.length; i++) {
        if (eco == tab_eco[i][0]) {
            return tab_eco[i][1];
        }
    }

    return "Not found";

}


function Get_Done_Nivel(id_card) {

    var xis = localStorage.getItem('card_' + id_card);
    var arr = xis.split("~");

    return parseInt(arr[1]);

}


function Get_Figurine_Label(move, w) {

    var peca    = move[0];
    var casa    = move.substr(1, 99);

    if (peca == "K") {
       return   '<span style="white-space: nowrap;"><img src="img/chesspieces/figurines/wK.png" width="' + w + '" height="' + w +
                '" style="margin: -4px 1px 0px 0px;">' + casa + "</span>";
    }

    if (peca == "Q") {
        return  '<span style="white-space: nowrap;"><img src="img/chesspieces/figurines/wQ.png" width="' + w + '" height="' + w +
                '" style="margin: -4px 1px 0px 0px;">' + casa + "</span>";
    }

    if (peca == "R") {
        return  '<span style="white-space: nowrap;"><img src="img/chesspieces/figurines/wR.png" width="' + w + '" height="' + w +
                '" style="margin: -4px 0px 0px 0px;">' + casa + "</span>";
    }

    if (peca == "N") {
        return  '<span style="white-space: nowrap;"><img src="img/chesspieces/figurines/wN.png" width="' + w + '" height="' + w +
                '" style="margin: -4px 1px 0px 0px;">' + casa + "</span>";
    }

    if (peca == "B") {
        return  '<span style="white-space: nowrap;"><img src="img/chesspieces/figurines/wB.png" width="' + w + '" height="' + w +
                '" style="margin: -4px 0px 0px 0px;">' + casa + "</span>";
    }

    return move;

}


function Get_Img_Nivel(id_card, nivel, done) {

    if (CEL_WIDTH >= 700) {
        var w_ball  = '38px';
        var w_medal = '80px';
        var h_medal = '104px';
    } else {
        if (CEL_WIDTH >= 400) {
            var w_ball  = '24px';
            var w_medal = '40px';
            var h_medal = '52px';
        } else {
            var w_ball  = '24px';
            var w_medal = '40px';
            var h_medal = '52px';
        }
    }


    var img_ball_width  = w_ball;
    var img_ball_height = w_ball;

    if (nivel == 1) {
        if (done == 0) {
            var img_nivel = 'icon_nivel_0.png';
        } else {
            var img_nivel = 'icon_nivel_1.png';
        }
    }

    if (nivel == 2) {
        var img_nivel = 'icon_nivel_2.png';
    }

    if (nivel == 3) {
        var img_nivel = 'icon_nivel_3.png';
    }

    if (nivel == 4) {
        var img_nivel = 'icon_nivel_4.png';
    }

    if (nivel == 5) {
        var img_nivel = 'icon_nivel_5.png';
    }

    if (nivel == 6) {
        var img_nivel = 'medalha.png';
        img_ball_width  = w_medal;
        img_ball_height = h_medal;
    }

    if (IS_FREE) {
        if (!Checa_Se_Card_Eh_Free(TAB_CARDS[id_card], id_card)) {
            var img_nivel = 'cadeado.png';
        }
    }

    return [img_nivel, img_ball_width, img_ball_height];


}


function Get_Last_Done_Exerc(id_card) {

    var xis = localStorage.getItem('card_' + id_card);
    var arr = xis.split("~");

    if (arr[1] == 6) {
        return 0;
    }

    return parseInt(arr[2]);

}


function Get_Last_Done_Exerc_Nivel(id_card, nivel) {

    var xis = localStorage.getItem('card_' + id_card + '_n' + nivel);

    if (xis === null) {
        return 0;
    }

    var arr = xis.split("~");

    return arr[0];

}



function Get_Exerc_Num_Line(tab_cards_cur, nivel, ind_line) {

    if (nivel == 1) {
        var arr = tab_cards_cur.nivel_1.split("-");
    }

    if (nivel == 2) {
        var arr = tab_cards_cur.nivel_2.split("-");
    }

    if (nivel == 3) {
        var arr = tab_cards_cur.nivel_3.split("-");
    }

    if (nivel == 4) {
        var arr = tab_cards_cur.nivel_4.split("-");
    }

    if (nivel == 5) {
        var arr = tab_cards_cur.nivel_5.split("-");
    }

    return arr[ind_line];

}


function Get_Exerc_Num_Line_Lines(id_card) {

    if (Exerc.nivel == 1) {
        var arr = TAB_CARDS[Exerc.id_card].nivel_1.split("-");
    }

    if (Exerc.nivel == 2) {
        var arr = TAB_CARDS[Exerc.id_card].nivel_2.split("-");
    }

    if (Exerc.nivel == 3) {
        var arr = TAB_CARDS[Exerc.id_card].nivel_3.split("-");
    }

    if (Exerc.nivel == 4) {
        var arr = TAB_CARDS[Exerc.id_card].nivel_4.split("-");
    }

    if (Exerc.nivel == 5) {
        var arr = TAB_CARDS[Exerc.id_card].nivel_5.split("-");
    }

    return arr[Exerc.ind_line];

}


function Get_Flag(country) {

    if (country != "??") {
        return '<img src="img/flags2/' + country + '.png" style="width: 80px; height: auto;">';
    }

}




function Get_Help_Body(num) {

    var arr = [];

    if (Conf_Language == "POR") {
        arr[0] = Tab_Help[num].por_sub;
        arr[1] = Tab_Help[num].por_p1;
        arr[2] = Tab_Help[num].por_p2;
        arr[3] = Tab_Help[num].por_p3;
        arr[4] = Tab_Help[num].por_p4;
        arr[5] = Tab_Help[num].por_p5;
        arr[6] = Tab_Help[num].por_p6;
        return arr;
    }

    if (Conf_Language == "ENG") {
        arr[0] = Tab_Help[num].eng_sub;
        arr[1] = Tab_Help[num].eng_p1;
        arr[2] = Tab_Help[num].eng_p2;
        arr[3] = Tab_Help[num].eng_p3;
        arr[4] = Tab_Help[num].eng_p4;
        arr[5] = Tab_Help[num].eng_p5;
        arr[6] = Tab_Help[num].eng_p6;
        return arr;
    }

    if (Conf_Language == "SPN") {
        arr[0] = Tab_Help[num].spn_sub;
        arr[1] = Tab_Help[num].spn_p1;
        arr[2] = Tab_Help[num].spn_p2;
        arr[3] = Tab_Help[num].spn_p3;
        arr[4] = Tab_Help[num].spn_p4;
        arr[5] = Tab_Help[num].spn_p5;
        arr[6] = Tab_Help[num].spn_p6;
        return arr;
    }

    if (Conf_Language == "FRA") {
        arr[0] = Tab_Help[num].fra_sub;
        arr[1] = Tab_Help[num].fra_p1;
        arr[2] = Tab_Help[num].fra_p2;
        arr[3] = Tab_Help[num].fra_p3;
        arr[4] = Tab_Help[num].fra_p4;
        arr[5] = Tab_Help[num].fra_p5;
        arr[6] = Tab_Help[num].fra_p6;
        return arr;
    }

    if (Conf_Language == "ITA") {
        arr[0] = Tab_Help[num].ita_sub;
        arr[1] = Tab_Help[num].ita_p1;
        arr[2] = Tab_Help[num].ita_p2;
        arr[3] = Tab_Help[num].ita_p3;
        arr[4] = Tab_Help[num].ita_p4;
        arr[5] = Tab_Help[num].ita_p5;
        arr[6] = Tab_Help[num].ita_p6;
        return arr;
    }

    if (Conf_Language == "GER") {
        arr[0] = Tab_Help[num].ger_sub;
        arr[1] = Tab_Help[num].ger_p1;
        arr[2] = Tab_Help[num].ger_p2;
        arr[3] = Tab_Help[num].ger_p3;
        arr[4] = Tab_Help[num].ger_p4;
        arr[5] = Tab_Help[num].ger_p5;
        arr[6] = Tab_Help[num].ger_p6;
        return arr;
    }

}

function Get_Help_Header(num) {

    if (Conf_Language == "POR") {
        return Tab_Help[num].por_header;
    }

    if (Conf_Language == "ENG") {
        return Tab_Help[num].eng_header;
    }

    if (Conf_Language == "SPN") {
        return Tab_Help[num].spn_header;
    }

    if (Conf_Language == "FRA") {
        return Tab_Help[num].fra_header;
    }

    if (Conf_Language == "ITA") {
        return Tab_Help[num].ita_header;
    }

    if (Conf_Language == "GER") {
        return Tab_Help[num].ger_header;
    }

}

function Get_Html_Card(id_card) {

    var img_card        = Pad(id_card, 5);
    var nivel           = Get_Done_Nivel(id_card);
    var done            = Get_Last_Done_Exerc(id_card);
    var tot_exercs      = Get_Tot_Lines(TAB_CARDS[id_card], nivel);
    var lines           = Get_String_Lines(TAB_CARDS[id_card], nivel);
    var tot_off         = Get_Tot_Lines_Off(lines);
    var txt_card_label  = TAB_CARDS[id_card].label;
    var txt_variation   = TAB_CARDS[id_card].variation;
    var bg_container    = "#F5F5F5";
    var color_prog      = "#009900";

    var label_font      = Get_Class_Label_Font();

    if (nivel == 1 && done == 0) {
        var card_status = 'off';
    } else {
        var card_status = 'on';
    }

    var label_top_on        = '';
    var label_bottom_on     = '';

    if (card_status == 'off') {
        var txt_label_done = TAB_CARDS[id_card].tot_lines + ' lines';
        var icon_nivel = 'icon_nivel_0.png';
    } else {
        bg_container    = "#F5E4D1";
        if (nivel != 6) {
            var txt_label_done = done + '/' + (tot_exercs - tot_off);
            var icon_nivel      = 'icon_nivel_' + nivel + '.png';
            label_top_on        = 'card_label_top_on';
            label_bottom_on     = 'card_label_bottom_on';
        } else {
            var txt_label_done  = 'OK';
            var icon_nivel      = 'medalha.png';
        }
    }

    if (IS_FREE) {
        var card_is_free = Checa_Se_Card_Eh_Free(TAB_CARDS[id_card], id_card);
        if (!card_is_free) {
            icon_nivel          = 'cadeado.png';
            label_top_on        = '';
            label_bottom_on     = '';
            bg_container        = "#F5F5F5";
            color_prog          = "#cccccc";
        }
    }

    var perc_prog = done / (tot_exercs - tot_off) * 100;
    txt_card_label = txt_card_label.toUpperCase();

    if (txt_variation == "-") {
        txt_variation = "all lines";
    }

    return  '<div class="card_container" style="background: ' + bg_container + '; display: inline-block;" onclick="But_Card_Clicked(' + id_card + ');">' +
            '<img class="card_img" src="cards/' + img_card + '.jpg">' +
            '<img class="card_nivel" src="img/' + icon_nivel + '">' +
            '<div class="card_label">' +
            '<div class="card_label_line1">' +
            txt_card_label +
            '</div>' +
            '<div class="card_label_line2">' +
            txt_variation +
            '</div>' +
            '<div class="progress" style="height: 4px; margin: 0px 4px;">' +
            '<div class="progress-bar" role="progressbar" style="background: ' + color_prog + '; width: ' + perc_prog + '%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">' +
            '</div>' +
            '</div>' +
            '<div class="card_label_done">' +
            txt_label_done +
            '</div>' +
            '</div>' +
            '</div>';

}




function Get_HTML_Card_Favoritos(id_card) {

    var img_1 = Pad(id_card, 5);
    var nivel = Get_Done_Nivel(id_card);

    var done = Get_Last_Done_Exerc(id_card);

    var arr             = Get_Card_Cores_Fav(done, nivel);
    var bd_label        = arr[0];
    var bg_label        = arr[1];
    var bg_progr        = arr[2];
    var cor_progr       = arr[3];
    //var cor_da_borda    = arr[4];

    var arr             = Get_Img_Nivel(id_card, nivel, done);
    var img_nivel       = arr[0];
    var ball_width      = arr[1];
    var ball_height     = arr[2];

    var arr             = Get_Card_Width_Fav();
    var largura         = arr[0];
    var label_font      = arr[1];
    var largura_label   = arr[2];

    var tot_exercs      = Get_Tot_Lines(TAB_CARDS[id_card], nivel);
    var lines           = Get_String_Lines(TAB_CARDS[id_card], nivel);
    var tot_off         = Get_Tot_Lines_Off(lines);

    if (nivel == 1 && done == 0) {
        var label_done = TAB_CARDS[id_card].tot_lines + ' lines';
        bg_label = 'linear-gradient(180deg, #999999 0%, #cccccc 100%)';
    } else {
        var label_done = done + '/' + (tot_exercs - tot_off);
        bg_label = 'linear-gradient(180deg, #FFCC00 0%, #FFCC99 100%)';
    }

    if (nivel == 6) {
        var card_label = 'OK';
    } else {
        var card_label = TAB_CARDS[id_card].label;
    }

    var card_name       = TAB_CARDS[id_card].name;
    var card_eco        = TAB_CARDS[id_card].eco_label;
    var card_variation  = TAB_CARDS[id_card].variation;
    var last_training   = Get_Last_Training(id_card);

    if (card_variation == "-") {
        card_variation = "all lines";
    }

    var perc_prog = done / (tot_exercs - tot_off) * 100;

    return  '<div class="fav_container">' +
            '<div onclick="Icon_Fav_Clicked(' + id_card + ');">' +
            '<img class="fav_fav_icon" id="icon_fav_' + id_card + '" src="img/but_fav_green.png">' +
            '</div>' +
            '<div class="fav_card_label">' +
            card_name +
            '</div>' +
            '<div class="fav_card_variation">' +
            card_variation +
            '</div>' +
            '<div class="progress" style="height: 4px; margin: 10px 20px;">' +
            '<div class="progress-bar" role="progressbar" style="background: #009900; width: ' + perc_prog + '%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">' +
            '</div>' +
            '</div>' +
            '<div class="container_card" onclick="But_Card_Clicked(' + id_card + ');" style="float: left; padding: 4px; ">' +
            '<img class="fav_card_img" src="cards/' + img_1 + '.jpg" >' +
            '<img class="corner_nivel" src="img/' + img_nivel + '" style="width: ' + ball_width + '; height: ' + ball_height + '; margin: -6px 0px 0px -6px;">' +
            '</div>' +
            '<div style="margin: 30px 10px 10px 10px;">' +
            '<button type="button" class="btn btn-info fav_buttons" onclick="Train_Show_Modal_Sel_Colors(' + id_card + ');">' +
            '<span>' + Tab_Lang [245] + '</span>' +
            '</button>' +
            '</div>' +
            '<div>' +
            '<button type="button" class="btn btn-info fav_buttons" onclick="Show_Games_Section_Fav(' + id_card + ');">' +
            '<span>' + Tab_Lang [246] + '</span>' +
            '</button>' +
            '<div style="clear: both;"></div>' +
            '<div class="fav_label_training">' + last_training + '</div>' +
            '</div>' +
            '</div>' +
            '<div style="clear: both;"></div>';

}


function Get_Last_Training(id_card) {

    var xis     = localStorage.getItem('card_' + id_card);
    var arr     = xis.split("~");
    var dt_last = arr[3]

    if (dt_last == "0000-00-00 00:00:00") {
        return "n/a";
    }

    var secs = Get_Secs_Elapsed(dt_last, Get_Agora());

    return Monta_Texto_Last_Training(secs, dt_last);

}


function Get_Long_Notation(lance) {

    var moves   = Game.moves({ verbose: true });
    var len     = moves.length;
    var arr     = [];

    for (var i=0; i < len; i++) {
        if (Stripped_San(lance) == Stripped_San(moves[i].san)) {
            arr[0] = moves[i].from + "-" + moves[i].to + "-" + moves[i].promotion;
            arr[1] = lance;
            return arr;
        }
    }

    // Se o lance informado não corresponde a nenhum lance possível indicado pela engine,
    // tenta fazer o lance no modo sloppy = TRUE (permite anotações tipo Nge2, quando Nc3 está cravado)

    var xis = Game.move(lance, { sloppy: true });

    if (xis) {
        Game.undo();
        arr[0]  = xis.from + "-" + xis.to + "-" + xis.promotion;
        arr[1]  = xis.san;   //Exerc.halfs[Exerc.ind_half] = xis.san;     // armazena o lance "correto" (Ne2) para comparar depois se o usuário acertou
    } else {
        arr[0] = "err";
    }

    return arr;

}


function Get_Next_Tema(tema) {

    if (tema == "army") { return "coffee"; }
    if (tema == "coffee") { return "light_blue"; }
    if (tema == "light_blue") { return "dark_blue"; }
    if (tema == "dark_blue") { return "cinza_claro"; }
    if (tema == "cinza_claro") { return "cinza_escuro"; }
    if (tema == "cinza_escuro") { return "green"; }
    if (tema == "green") { return "dark_green"; }
    if (tema == "dark_green") { return "maroon"; }
    if (tema == "maroon") { return "ocre"; }
    if (tema == "ocre") { return "olive"; }
    if (tema == "olive") { return "orange"; }
    if (tema == "orange") { return "pink"; }
    if (tema == "pink") { return "purple"; }
    if (tema == "purple") { return "teal"; }
    if (tema == "teal") { return "wood"; }
    if (tema == "wood") { return "army"; }

}


function Get_Secs_Elapsed(data1, data2) {

    if (data1 === undefined || data2 === undefined) {
        return 0;
    }

    if (data1.length != 19 || data2.length != 19) {  //  0000-00-00 00:00:00
        return 0;
    }

    var d1 = new Date(data1);
    var d2 = new Date(data2);
    var timeDiff = d2 - d1;
    timeDiff /= 1000;           // elimina microsegundos

    return timeDiff;

}


function Get_Secs_Sem_Treinar(id_card) {

    var xis = localStorage.getItem('card_' + id_card);
    var arr = xis.split("~");

    var last_treino = arr[3];
    if (last_treino == "0000-00-00 00:00:00") {
        return 0;
    }
    var agora       = Get_Agora();

    return Get_Secs_Elapsed(last_treino, agora);

}


function Get_Stars(num_stars) {

    var stars = [];

    stars[0]  = '#6D502C';
    stars[1]  = '#6D502C';
    stars[2]  = '#6D502C';
    stars[3]  = '#6D502C';
    stars[4]  = '#6D502C';

    if (num_stars == 1) {
        stars[0]  = '#FFCC00';
    }

    if (num_stars == 2) {
        stars[0]  = '#FFCC00';
        stars[1]  = '#FFCC00';
    }

    if (num_stars == 3) {
        stars[0]  = '#FFCC00';
        stars[1]  = '#FFCC00';
        stars[2]  = '#FFCC00';
    }

    if (num_stars == 4) {
        stars[0]  = '#FFCC00';
        stars[1]  = '#FFCC00';
        stars[2]  = '#FFCC00';
        stars[3]  = '#FFCC00';
    }

    if (num_stars == 5) {
        stars[0]  = '#FFCC00';
        stars[1]  = '#FFCC00';
        stars[2]  = '#FFCC00';
        stars[3]  = '#FFCC00';
        stars[4]  = '#FFCC00';
    }

    return stars;

}


function Get_String_Lines(tab_card_sel, nivel) {

    if (nivel == 1) {
        return tab_card_sel.nivel_1;
    }
    if (nivel == 2) {
        return tab_card_sel.nivel_2;
    }
    if (nivel == 3) {
        return tab_card_sel.nivel_3;
    }
    if (nivel == 4) {
        return tab_card_sel.nivel_4;
    }
    if (nivel == 5) {
        return tab_card_sel.nivel_5;
    }

    return "";

}


function Get_Suporte_Msgs_Headers() {

    var arr_headers = [];

    for (var i=1; i < 999; i++) {
        var stored = localStorage.getItem('supp_subj_' + i);
        if (stored === null) {
            break;
        }
        arr_headers.push(stored);
    }

     return arr_headers;

}


function Get_Tot_Halfs(halfs, nivel) {

    var tab_max     = [0, 8, 12, 16, 20, 24];
    var tot_halfs   = 0;

    for (var i=0; i < halfs.length; i++) {
        if (halfs[i] === undefined || halfs[i] == "-") {
            break;
        } else {
            tot_halfs++;
        }
    }

    if (tot_halfs >= tab_max[nivel]) {
        return tab_max[nivel];
    }

    return tot_halfs;

}


function Get_Tot_Halfs_Games(moves) {

    var arr = moves.split('~') ;
    var tot_halfs   = 0;

    for (var i=0; i < arr.length; i++) {
        if (arr[i] === undefined || arr[i] == "") {
            return tot_halfs;
        } else {
            tot_halfs++;
        }
    }

    return tot_halfs;

}


function Get_Tot_Lines(tab_cards, nivel) {

    if (nivel == 1) {
        return tab_cards.tot_1;
    }
    if (nivel == 2) {
        return tab_cards.tot_2;
    }
    if (nivel == 3) {
        return tab_cards.tot_3;
    }
    if (nivel == 4) {
        return tab_cards.tot_4;
    }
    if (nivel == 5) {
        return tab_cards.tot_5;
    }

    return 0;

}


function Get_Tot_Lines_Off(lines) {

    var arr = lines.split("-");
    var tot_off = 0;

    for (var i=0; i < arr.length; i++) {
        if (Lines_Off_Check(arr[i])) {
            tot_off++;
        }
    }

    return tot_off;

}


function Get_Tot_Lines_Off_Temp(lines) {

    var arr = lines.split("-");
    var tot_off = 0;

    for (var i=0; i < arr.length; i++) {
        if (Lines_Off_Temp_Check(arr[i])) {
            tot_off++;
        }
    }

    return tot_off;

}

function Handle_Lines_Off_Temp() {

    if (Lines_Off_Temp_Exist()) {
        $("#show_modal_merge").click();
    }

}


function Handle_Timer_Promo(timer) {


    if (timer.secs > 0) {
        timer.secs--;
    } else {
        if (timer.mins > 0) {
            timer.mins--;
            timer.secs = 59;
        } else {
            if (timer.hours > 0) {
                timer.hours--;
                timer.mins = 59;
                timer.secs = 59;
            } else {
                if (timer.days > 0) {
                    timer.days--;
                    timer.hours   = 23;
                    timer.mins    = 59;
                    timer.secs    = 59;
                } else {
                    Set_HTML_Promo();
                    clearInterval(Timer_Promo);
                }
            }
        }
    }

    $("#promo_time_days_top").html(Pad(timer.days, 2));
    $("#promo_time_hours_top").html(Pad(timer.hours, 2));
    $("#promo_time_mins_top").html(Pad(timer.mins, 2));
    $("#promo_time_secs_top").html(Pad(timer.secs, 2));

    $("#promo_time_days_bottom").html(Pad(timer.days, 2));
    $("#promo_time_hours_bottom").html(Pad(timer.hours, 2));
    $("#promo_time_mins_bottom").html(Pad(timer.mins, 2));
    $("#promo_time_secs_bottom").html(Pad(timer.secs, 2));

    $("#promo_home_days").html(Pad(timer.days, 2));
    $("#promo_home_hours").html(Pad(timer.hours, 2));
    $("#promo_home_mins").html(Pad(timer.mins, 2));
    $("#promo_home_secs").html(Pad(timer.secs, 2));

}


function Handle_Timer_Trial(timer) {

    if (timer.secs > 0) {
        timer.secs--;
    } else {
        if (timer.mins > 0) {
            timer.mins--;
            timer.secs = 59;
        } else {
            if (timer.hours > 0) {
                timer.hours--;
                timer.mins = 59;
                timer.secs = 59;
            } else {
                if (timer.days > 0) {
                    timer.days--;
                    timer.hours   = 23;
                    timer.mins    = 59;
                    timer.secs    = 59;
                } else {
                    clearInterval(Timer_Trial);
                    IS_TRIAL    = false;
                    IS_FREE     = true;
                    $("#area_trial").css('display', 'none');
                }
            }
        }
    }

    $("#trial_time_days").html(Pad(timer.days, 2));
    $("#trial_time_hours").html(Pad(timer.hours, 2));
    $("#trial_time_mins").html(Pad(timer.mins, 2));
    $("#trial_time_secs").html(Pad(timer.secs, 2));

}

function Hide_All_Sections() {

    clearInterval(Timer_Teacher);

    $("#modal_msgs").modal('hide');
    $("#modal_config").modal('hide');
    $("#modal_sel_colors").modal('hide');

    $("#sec_home").css('display', 'none');
    $("#sec_help").css('display', 'none');
    $("#sec_menu").css('display', 'none');
    $("#sec_board_area").css('display', 'none');
    $("#sec_sel_card").css('display', 'none');
    $("#sec_favoritos").css('display', 'none');
    $("#sec_lines").css('display', 'none');
    $("#sec_support").css('display', 'none');
    $("#sec_account").css('display', 'none');
    $("#sec_feedback").css('display', 'none');
    $("#sec_shopping").css('display', 'none');
    $("#sec_config").css('display', 'none');
    $("#sec_teoria").css('display', 'none');
    $("#sec_boas_vindas").css('display', 'none');
    $("#sec_games").css('display', 'none');
    $("#sec_help_detail").css('display', 'none');
    $("#sec_recover").css('display', 'none');
    $("#sec_sync").css('display', 'none');
    $("#sec_level").css('display', 'none');

    $("#support_home").css('display', 'none');
    $("#support_msg").css('display', 'none');

    $("#board_header_engine").css("display", "none");
    $("#board_header_games").css("display", "none");
    $("#board_header_play").css("display", "none");
    $("#board_header_train").css("display", "none");

    $("#board_buttons_engine").css("display", "none");
    $("#board_buttons_games").css("display", "none");
    $("#board_buttons_play").css("display", "none");
    $("#board_buttons_train").css("display", "none");
    $("#board_buttons_lines").css("display", "none");
    $("#ret_cadastro").css ('display', 'none');

    $("#box_modal_msg_area").css('display', 'none');
    $("#modal_msg_buttons_train_buy").css('display', 'none');

    $("#cupom_error").css('display', 'none');
    $("#but_more_reviews").css('display', 'block');
    $("#review_lote_2").css('display', 'none');
    $("#review_lote_3").css('display', 'none');
    $("#review_lote_4").css('display', 'none');
    $("#review_lote_5").css('display', 'none');
    $("#review_lote_6").css('display', 'none');
    $("#review_lote_7").css('display', 'none');

    document.body.scrollTop = 0;

}


function Hide_Err_Img() {

    $("#err_img").css('display', 'none');

}


function Hide_Ok_Img() {

    $("#ok_img").css('display', 'none');

}


function Inclui_Favoritos(id_card) {

    var favoritos = localStorage.getItem('favoritos');

    if (favoritos === null || favoritos == "" || favoritos == undefined) {
        var new_fav = "~" + id_card + "~";
    } else {
        if (!favoritos.includes("~" + id_card + "~")) {
            var new_fav = favoritos + id_card + "~";
        }
    }

    localStorage.setItem('favoritos', new_fav);
    Cloud_Change = true;

}


function Ja_Fez_Cadastro() {   /* not used */

   var perfil_user  = localStorage.getItem('perfil_user');
   var arr          = perfil_user.split("~");

   if (arr[0] == "cad") {
       return true;
   } else {
       return false;
   }

}


function Lines_Off_Check(num_line) {

    var lines_off   = localStorage.getItem('lines_off');

    if (lines_off == "" || lines_off === null) {
        return false;
    }

    var arr = lines_off.split("-");

    for (var i=0; i < arr.length; i++) {
        if (num_line == arr[i]) {
            return true;
        }
    }

    return false;

}


function Lines_Off_Delete(num_line) {

    var lines_off   = localStorage.getItem('lines_off');

    if (lines_off === null || lines_off == "") {
        return;
    }

    var arr         = lines_off.split("-");
    var new_str     = "";

    for (var i=0; i < arr.length - 1; i++) {
        if (num_line != arr[i]) {
            new_str = new_str + arr[i] + "-";
        }
    }

    localStorage.setItem('lines_off', new_str);
    Cloud_Change = true;

}


function Lines_Off_Insert(num_line) {

    var lines_off   = localStorage.getItem('lines_off');

    if (lines_off != null) {
        lines_off = lines_off + num_line + "-";
    } else {
        lines_off = num_line + "-";
    }

    localStorage.setItem('lines_off', lines_off);
    Cloud_Change = true;

}


function Lines_Off_Merge() {

    var lines_off_temp  = localStorage.getItem('lines_off_temp');
    var arr             = lines_off_temp.split("-");
    var tab_delete      = [];
    var tab_insert      = [];

    for (var i=0; i < arr.length; i++) {
        if (Lines_Off_Check(arr[i])) {
            tab_delete.push(arr[i]);
        } else {
            tab_insert.push(arr[i]);
        }
    }

    for (var i=0; i < tab_delete.length; i++) {
        Lines_Off_Delete(tab_delete[i]);
    }

    for (var i=0; i < tab_insert.length; i++) {
        Lines_Off_Insert(tab_insert[i]);
    }

    localStorage.removeItem('lines_off_temp');

}


function Lines_Off_Temp_Check(num_line) {

    var lines_off_temp   = localStorage.getItem('lines_off_temp');

    if (lines_off_temp == "" || lines_off_temp === null) {
        return false;
    }

    var arr = lines_off_temp.split("-");

    for (var i=0; i < arr.length; i++) {
        if (num_line == arr[i]) {
            return true;
        }
    }

    return false;

}



function Lines_Off_Temp_Delete(num_line) {

    var lines_off_temp   = localStorage.getItem('lines_off_temp');
    var arr         = lines_off_temp.split("-");
    var new_str     = "";

    for (var i=0; i < arr.length - 1; i++) {
        if (num_line != arr[i]) {
            new_str = new_str + arr[i] + "-";
        }
    }

    localStorage.setItem('lines_off_temp', new_str);

}


function Lines_Off_Temp_Exist() {

    var lines_off_temp   = localStorage.getItem('lines_off_temp');

    if (lines_off_temp == "" || lines_off_temp === null) {
        return false;
    }

    return true;

}


function Lines_Off_Temp_Insert(num_line) {

    var lines_off_temp   = localStorage.getItem('lines_off_temp');

    if (lines_off_temp != null) {
        lines_off_temp = lines_off_temp + num_line + "-";
    } else {
        lines_off_temp = num_line + "-";
    }

    localStorage.setItem('lines_off_temp', lines_off_temp);

}


function Mail_To() {       /* not used */

    var subject = "Promaster Chess - Support";

    window.location.href = "mailto:support@promasterchess.com"+ "?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent("");

}


function Menu_Buttons_Switch(num) {

    $("#menu_img_1").attr('src', 'img/menu1_off.png');
    $("#menu_img_2").attr('src', 'img/menu2_off.png');
    $("#menu_img_3").attr('src', 'img/menu3_off.png');
    $("#menu_img_4").attr('src', 'img/menu4_off.png');
    $("#menu_img_5").attr('src', 'img/menu5_off.png');

    $("#menu_img_" + num).attr('src', 'img/menu' + num +'_on.png');


}


function Monta_Line_Notation(moves_with_commas, nivel) {

    var arr = moves_with_commas.split(",");

    var notation = "";
    var font_w = 14; // em px

    var num_move = 0;
    for (var i=0; i < arr.length; i++) {
        if (nivel == 1 && i == 8 || nivel == 2 && i == 12 || nivel == 3 && i == 16 || nivel == 4 && i == 20) {
            break;
        }

        if ((i+1) % 2 !== 0) {
            num_move++;
            notation = notation + num_move + ". ";
        }
        if (arr[i] != "-") {
            var move = Get_Figurine_Label(arr[i], font_w);
            notation = notation + move + " ";
        } else {
            break;
        }
    }

    if (notation.substr(notation.length - 2) == ". ") {
        notation = notation.substr(0, notation.length - 2);
        var last = notation.lastIndexOf(" ");
        notation = notation.substr(0, last);
    }

    return notation;

}


function Monta_Texto_Last_Training(secs, dt_last) {

    if (secs < 60) {
        return Tab_Lang [250];
    }

    if (secs < 3600) {
        var min = parseInt(secs / 60, 10);
        if (min > 1) {
            var sufixo = Tab_Lang [253];
        } else {
            var sufixo = Tab_Lang [252];
        }
        return Tab_Lang [251] + ' ' + min + ' ' + sufixo;
    }

    if (secs < 86400) {
        var horas = parseInt(secs / 3600, 10);
        if (horas > 1) {
            var sufixo = Tab_Lang [255];
        } else {
            var sufixo = Tab_Lang [254];
        }
        return Tab_Lang [251] + ' ' + horas + ' ' + sufixo;
    }

    if (secs < (86400 * 7)) {
        var dias = parseInt(secs / 86400, 10);
        if (dias > 1) {
            var sufixo = Tab_Lang [257];
        } else {
            var sufixo = Tab_Lang [256];
        }
        return Tab_Lang [251] + ' ' + dias + ' ' + sufixo;
    }

    var semanas = parseInt(secs / (86400 * 7), 10);
    if (semanas > 1) {
        var sufixo = Tab_Lang [259];
    } else {
        var sufixo = Tab_Lang [258];
    }

    return Tab_Lang [251] + ' ' + semanas + ' ' + sufixo;

}


function My_Remove_Class(id_tag) {

    $('#' + id_tag).removeClass('error');

}


function Nenhum_Exerc_Disponivel(nivel, tab_cards_cur) {

    if (nivel == 1 && tab_cards_cur.tot_1 == 0 ||
        nivel == 2 && tab_cards_cur.tot_2 == 0 ||
        nivel == 3 && tab_cards_cur.tot_3 == 0 ||
        nivel == 4 && tab_cards_cur.tot_4 == 0 ||
        nivel == 5 && tab_cards_cur.tot_5 == 0) {
            return true;
    }

    return false;

}


function Number_Format(number, decimals, dec_point, thousands_sep) {      /* not used */

    number = number.toFixed(decimals);

    var nstr = number.toString();
    nstr += '';
    var x = nstr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? dec_point + x[1] : '';
    var rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1))
        x1 = x1.replace(rgx, '$1' + thousands_sep + '$2');

    return x1 + x2;

}


function onDragStart (source, piece, position, orientation) {

    if ((Game.turn() === 'w' && piece.search(/^b/) !== -1) ||
        (Game.turn() === 'b' && piece.search(/^w/) !== -1)) {
        return false;
    }

    return true;

}


function onDrop (source, target) {

    var move = Game.move({
        from: source,
        to: target,
        promotion: 'q' // NOTE: always promote to a queen for example simplicity
    })

    if (move === null) {
        Play_Sound("invalid");
        return 'snapback';
    }

    Ve_Se_Acertou();

}



function onSnapEnd () {

    Play_Sound("click");
    Board.position(Game.fen());

}


function Ordena_Card_Games(key, games) {                      // incluir Stars, Views

        var tab     = [];
        var saida   = "";
        var arr     = games.split("-");

        for (var i=0; i < arr.length; i++) {
                if (Tab_Games[arr[i]].result == '1-0') { var ind_result = 1; }
                if (Tab_Games[arr[i]].result == '0-1') { var ind_result = 2; }
                if (Tab_Games[arr[i]].result == '1/2') { var ind_result = 3; }

                var local = localStorage.getItem('game_' + arr[i]);
                if (local === null) {
                        var views = 0;
                        var stars = 0;
                } else {
                        var xis   = local.split("~");
                        var views = xis[0];
                        var stars = xis[1];
                }

                tab.push({id: arr[i], white: Tab_Games[arr[i]].white, black: Tab_Games[arr[i]].black, date: Tab_Games[arr[i]].date, result: ind_result, num_moves: Tab_Games[arr[i]].num_moves,
                                    views: views, stars: stars});
        }

        tab.sort(Sort_Obj_By_Property(key));

        for (var i=0; i < tab.length; i++) {
                saida = saida + tab[i].id;
                if (i+1 != tab.length) {
                        saida = saida + "-";
                }
        }

        return saida;

}



function Ordena_Games(origem) {

    var id_card     = Last_Card_Selected;
    var tab_arrows  = ['', '<i class="fas fa-long-arrow-alt-down"></i>', '<i class="fas fa-long-arrow-alt-up"></i>'];
    var tab_sorts   = ['DATE', 'DATE', 'MOVES', 'MOVES', 'RESULT', 'PLAYER 1', 'PLAYER 2', 'VIEWS', 'VIEWS', 'STARS', 'STARS'];
    var tab_icons   = [1, 2, 1, 2, 0, 0, 0, 1, 2, 1, 2];

    var tot_lines   = "";

    Ind_Sort++
    if (Ind_Sort >= tab_sorts.length) {
        Ind_Sort = 0;
    }

    if (Ind_Sort == 0)  {  var key = 'date';       }
    if (Ind_Sort == 1)  {  var key = '-date';      }
    if (Ind_Sort == 2)  {  var key = 'num_moves';  }
    if (Ind_Sort == 3)  {  var key = '-num_moves'; }
    if (Ind_Sort == 4)  {  var key = 'result';     }
    if (Ind_Sort == 5)  {  var key = 'white';      }
    if (Ind_Sort == 6)  {  var key = 'black';      }
    if (Ind_Sort == 7)  {  var key = 'views';      }
    if (Ind_Sort == 8)  {  var key = '-views';     }
    if (Ind_Sort == 9)  {  var key = 'stars';      }
    if (Ind_Sort == 10) {  var key = '-stars';     }

    var games       = Ordena_Card_Games(key, TAB_CARDS[id_card].games);
    var arr         = games.split("-");

    for (var i=0; i < arr.length; i++) {
        tot_lines = tot_lines + Print_Line_Card_Games(i+1, arr[i]);
    }

    $("#all_games_area").html(tot_lines);
    $("#descr_sort").html(tab_sorts[Ind_Sort]);
    $("#icon_sort").html(tab_arrows[tab_icons[Ind_Sort]]);

    Store_Click(CLICK_GAMES_SORT, "");

}


function Pad(str, max) {

    str = str.toString();
    return str.length < max ? Pad("0" + str, max) : str;

}


function Play_Sound(tipo) {

    if (tipo == "computer") {
        if (Conf_Sound == 1) {
        	SOUND_CLICK.playclip();
    	}
    }

    if (tipo == "click") {
        if (Conf_Sound == 1) {
        	SOUND_CLICK.playclip();
    	}
    }

    if (tipo == "invalid") {
        if (Conf_Sound == 1) {
            SOUND_INVALID.playclip();
        }
    }

    if (tipo == "wrong") {
        if (Conf_Sound == 1) {
            SOUND_WRONG.playclip();
        }
    }

}

function Populate_Combos() {

    var tab_countries = ["AX~Aland Islands", "AF~Afghanistan", "AL~Albania", "DZ~Algeria", "AS~American Samoa", "AD~Andorra", "AO~Angola",
               "AI~Anguilla", "AQ~Antarctica", "AG~Antigua and Barbuda", "AR~Argentina", "AM~Armenia", "AW~Aruba", "AU~Australia", "AT~Austria", "AZ~Azerbaijan",
               "BS~Bahamas", "BH~Bahrain", "BD~Bangladesh", "BB~Barbados", "BY~Belarus", "BE~Belgium", "BZ~Belize", "BJ~Benin", "BM~Bermuda", "BT~Bhutan",
               "BO~Bolivia", "BA~Bosnia and Herzegovina", "BW~Botswana", "BV~Bouvet Island", "BR~Brazil", "VG~British Virgin Islands", "BN~Brunei", "BG~Bulgaria", "BF~Burkina Faso", "BI~Burundi", "KH~Cambodia",
               "CM~Cameroon", "CA~Canada", "CV~Cape Verde", "KY~Cayman Islands", "CF~Central African Republic",
               "TD~Chad", "CL~Chile", "CN~China", "CX~Christmas Island", "CO~Colombia", "KM~Comoros", "CG~Congo - Brazzaville",
               "CD~Congo - Kinshasa", "CK~Cook Islands", "CR~Costa Rica", "HR~Croatia", "CU~Cuba", "CY~Cyprus", "CZ~Czech Republic", "CI~Côte d’Ivoire",
               "DK~Denmark", "DJ~Djibouti", "DM~Dominica", "DO~Dominican Republic", "EC~Ecuador", "EG~Egypt", "SV~El Salvador",
               "GQ~Equatorial Guinea", "ER~Eritrea", "EE~Estonia", "ET~Ethiopia", "FK~Falkland Islands", "FO~Faroe Islands", "FJ~Fiji", "FI~Finland",
               "FR~France", "GF~French Guiana", "PF~French Polynesia", "FQ~French Southern",
               "GA~Gabon", "GM~Gambia", "GE~Georgia", "DE~Germany", "GH~Ghana", "GI~Gibraltar", "GR~Greece", "GL~Greenland", "GD~Grenada", "GP~Guadeloupe",
               "GU~Guam", "GT~Guatemala", "GG~Guernsey", "GN~Guinea", "GW~Guinea-Bissau", "GY~Guyana", "HT~Haiti",
               "HN~Honduras", "HK~Hong Kong", "HU~Hungary", "IS~Iceland", "IN~India", "ID~Indonesia", "IR~Iran", "IQ~Iraq", "IE~Ireland", "IM~Isle of Man",
               "IL~Israel", "IT~Italy", "JM~Jamaica", "JP~Japan", "JE~Jersey", "JO~Jordan", "KZ~Kazakhstan", "KE~Kenya", "KI~Kiribati",
               "KW~Kuwait", "KG~Kyrgyzstan", "LA~Laos", "LV~Latvia", "LB~Lebanon", "LS~Lesotho", "LR~Liberia", "LY~Libya", "LI~Liechtenstein", "LT~Lithuania",
               "LU~Luxembourg", "MO~Macau", "MK~Macedonia", "MG~Madagascar", "MW~Malawi", "MY~Malaysia", "MV~Maldives", "ML~Mali", "MT~Malta", "MH~Marshall Islands",
               "MQ~Martinique", "MR~Mauritania", "MU~Mauritius", "YT~Mayotte", "MX~Mexico", "FM~Micronesia",
               "MD~Moldova", "MC~Monaco", "MN~Mongolia", "ME~Montenegro", "MS~Montserrat", "MA~Morocco", "MZ~Mozambique", "MM~Myanmar", "NA~Namibia", "NR~Nauru",
               "NP~Nepal", "NL~Netherlands", "AN~Netherlands Antilles", "NC~New Caledonia", "NZ~New Zealand", "NI~Nicaragua", "NE~Niger", "NG~Nigeria", "NU~Niue",
               "NF~Norfolk Island", "KP~North Korea", "NO~Norway", "OM~Oman", "PK~Pakistan", "PW~Palau",
               "PS~Palestinian Territories", "PA~Panama", "PG~Papua New Guinea", "PY~Paraguay", "PE~Peru", "PH~Philippines", "PN~Pitcairn Islands", "PL~Poland",
               "PT~Portugal", "PR~Puerto Rico", "QA~Qatar", "RO~Romania", "RU~Russia", "RW~Rwanda", "RE~Réunion", "BL~Saint Barthélemy", "SH~Saint Helena",
               "LC~Saint Lucia", "MF~Saint Martin", "VC~Saint Vincent",
               "WS~Samoa", "SM~San Marino", "SA~Saudi Arabia", "SN~Senegal", "RS~Serbia", "SC~Seychelles", "SL~Sierra Leone",
               "SG~Singapore", "SK~Slovakia", "SI~Slovenia", "SB~Solomon Islands", "SO~Somalia", "ZA~South Africa", "GS~South Georgia",
               "KR~South Korea", "ES~Spain", "LK~Sri Lanka", "SD~Sudan", "SR~Suriname", "SZ~Swaziland", "SE~Sweden", "CH~Switzerland",
               "SY~Syria", "ST~São Tomé and Príncipe", "TW~Taiwan", "TJ~Tajikistan", "TZ~Tanzania", "TH~Thailand", "TL~Timor-Leste", "TG~Togo", "TK~Tokelau",
               "TO~Tonga", "TT~Trinidad and Tobago", "TN~Tunisia", "TR~Turkey", "TM~Turkmenistan", "TC~Turks and Caicos Islands", "TV~Tuvalu", "VI~U.S. Virgin Islands",
               "UG~Uganda", "UA~Ukraine", "AE~United Arab Emirates", "GB~United Kingdom", "US~United States", "UY~Uruguay", "UZ~Uzbekistan", "VU~Vanuatu",
               "VA~Vatican City", "VE~Venezuela", "VN~Vietnam", "WK~Wake Island", "WF~Wallis and Futuna", "EH~Western Sahara", "YE~Yemen", "ZM~Zambia", "ZW~Zimbabwe"];

    var tab_meses = ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


    $('#user_country').empty();
    $('#user_country').append('<option value="0" selected="selected" disabled="disabled"></option>');
    for (var i=0; i < tab_countries.length; i++) {
        var arr = tab_countries[i].split("~");
        $('#user_country').append('<option value="' + arr[0] + '">' + arr[1] + '</option>');
    }

    $('#user_nasc_dd').empty();
    $('#user_nasc_dd').append('<option value="0" disabled="disabled" selected>-</option>');
    for (var i=1; i < 32; i++) {
        var x = Pad(i, 2);
        $('#user_nasc_dd').append('<option value="' + x + '">' + i + '</option>');
    }

    $('#user_nasc_mm').empty();
    $('#user_nasc_mm').append('<option value="0" disabled="disabled" selected>-</option>');
    for (var i=1; i < 13; i++) {
        var mes = tab_meses[i-1];
        var num = Pad(i, 2);
        $('#user_nasc_mm').append('<option value="' + num + '">' + mes + '</option>');
    }

    $('#user_nasc_aa').empty();
    $('#user_nasc_aa').append('<option value="0" disabled="disabled" selected>-</option>');
    for (var i=2015; i > 1939; i--) {
        $('#user_nasc_aa').append('<option value="' + i + '">' + i + '</option>');
    }


}


function Preenche_Modal_Aval_Game(tab_games_sel, id_game) {

    $("#modal_id_game").html(id_game);
    $("#mod_game_stars_title").html(Tab_Lang [224]);
    $("#mod_game_stars_players").html(tab_games_sel.white + " - " + tab_games_sel.black);
    $("#mod_game_stars_place").html("(" + tab_games_sel.place + ", "  + tab_games_sel.date + ")");
    $("#game_star_1").css('color', '#cccccc');
    $("#game_star_2").css('color', '#cccccc');
    $("#game_star_3").css('color', '#cccccc');
    $("#game_star_4").css('color', '#cccccc');
    $("#game_star_5").css('color', '#cccccc');

}


function Print_App_Version() {

    if (Conf_Language == "ENG") {
        $('#app_version').html(VERSION + "<div class='account_version_date'>(" + VERSION_DATE_ENG + ")</div>");
    }

    if (Conf_Language == "POR") {
        $('#app_version').html(VERSION + "<div class='account_version_date'>(" + VERSION_DATE_POR + ")</div>");
    }

    if (Conf_Language == "SPN") {
        $('#app_version').html(VERSION + "<div class='account_version_date'>(" + VERSION_DATE_SPN + ")</div>");
    }

    if (Conf_Language == "ITA") {
        $('#app_version').html(VERSION + "<div class='account_version_date'>(" + VERSION_DATE_ITA + ")</div>");
    }

    if (Conf_Language == "FRA") {
        $('#app_version').html(VERSION + "<div class='account_version_date'>(" + VERSION_DATE_FRA + ")</div>");
    }

    if (Conf_Language == "GER") {
        $('#app_version').html(VERSION + "<div class='account_version_date'>(" + VERSION_DATE_GER + ")</div>");
    }

}



function Print_Area_Shopping() {

    if (IS_PREMIUM) {
        $("#area_cliente").css ('display', 'block');
        $("#area_to_sell").css ('display', 'none');
        $("#price_area_top").css ('display', 'none');
        $("#price_area_bottom").css ('display', 'none');
    } else {
        $("#area_cliente").css ('display', 'none');
        $("#area_to_sell").css ('display', 'block');
        $("#price_area_top").css ('display', 'block');
        $("#price_area_bottom").css ('display', 'block');
        if (IS_TRIAL) {
            $("#area_trial").css ('display', 'block');
        }
    }

}


function Print_Buts_Engine() {

    var game_hist   = Game.history();
    var tot_halfs   = game_hist.length;

    if (tot_halfs > 0) {
        $("#but_eng_back").attr('src', 'img/but_board_back_on.png');
    } else {
        $("#but_eng_back").attr('src', 'img/but_board_back_off.png');
    }

    var tot_halfs   = Tab_Moves_Buffer.length;

    if (tot_halfs > 0) {
        $("#but_eng_forward").attr('src', 'img/but_board_forward_on.png');
    } else {
        $("#but_eng_forward").attr('src', 'img/but_board_forward_off.png');
    }

}



function Print_Buts_Play() {

    var game_hist   = Game.history();
    var tot_halfs   = game_hist.length;

    if (tot_halfs > 0) {
        $("#but_play_back").attr('src', 'img/but_board_back_on.png');
    } else {
        $("#but_play_back").attr('src', 'img/but_board_back_off.png');
    }

    var tot_halfs   = Tab_Moves_Buffer.length;

    if (tot_halfs > 0) {
        $("#but_play_forward").attr('src', 'img/but_board_forward_on.png');
    } else {
        $("#but_play_forward").attr('src', 'img/but_board_forward_off.png');
    }

}

function Print_Card_Moves(tab) {

    var arr = tab.moves.split(" ");
    var font_w = 14; // em px

    var tudo = "";
    var num_move = 1;
    for (var i=0; i < arr.length; i++) {
        if (i == 0 || i == 3 || i == 6 || i == 9 || i == 12 || i == 15 || i == 18 || i == 21 || i == 24 || i == 27 || i == 30 || i == 33 || i == 36) {
            tudo = tudo + num_move + ". ";
            num_move++;
        } else {
            var move = Get_Figurine_Label(arr[i], font_w);
            tudo = tudo + move + " ";
        }
    }

    $("#card_moves").html(tudo);

}


function Print_Card_Details(this_card, id_card) {

    var eco         = this_card.eco;
    var name        = this_card.name;
    var variation   = this_card.variation;
    var label       = this_card.label;
    var games       = this_card.games;

    $("#sel_card_img").attr('src', "cards/" + Pad(id_card, 5)  + ".jpg" );
    $("#sel_card_img").css('filter', '');

    $("#msg_limit").css('display', 'none');
    $("#sel_card_img_locked").css('display', 'none');

    if (IS_FREE) {
        if (!Checa_Se_Card_Eh_Free(this_card, id_card)) {
            $("#msg_limit").css('display', 'block');
            $("#sel_card_img_locked").css('display', 'block');
        }
    }

    Print_Card_Moves(this_card);
    Print_Card_Tot_Lines(this_card);

    $("#card_sel_opening").html(this_card.name);
    $("#card_sel_eco").html(this_card.eco_label);
    $("#card_sel_variante").html(this_card.variation);


    $("#card_sel_opening_lines").html(this_card.name);
    $("#card_sel_eco_lines").html(this_card.eco_label);

    if (Esta_No_Favoritos(id_card)) {
        $("#icon_fav").attr('src', 'img/but_fav_green.png');
    } else {
        $("#icon_fav").attr('src', 'img/but_fav_off.png');
    }

}





function Print_Card_Games() {

    Ind_Sort--;
    Ordena_Games(1);

    $("#games_open_name").html(TAB_CARDS[Last_Card_Selected].name);

}


function Print_Card_Lines(id_card, nivel) {

    var tot_lines   = Get_Tot_Lines(TAB_CARDS[id_card], nivel);
    var lines       = Get_String_Lines(TAB_CARDS[id_card], nivel);
    var tot_off     = Get_Tot_Lines_Off(lines) + Get_Tot_Lines_Off_Temp(lines);
    var arr         = lines.split("-");
    var all_lines   = "";

    for (var i=0; i < tot_lines; i++) {
        var moves = Monta_Line_Notation(Tab_Linhas[arr[i]][1], nivel);
        all_lines = all_lines + Print_Line_Lines(i+1, arr[i], moves);
    }

    $("#lines_area").html(all_lines);
    $("#label_off").html(tot_off);

    if (Esta_No_Favoritos(id_card)) {
        $("#icon_fav_lines").attr('src', 'img/but_fav_green.png');
    } else {
        $("#icon_fav_lines").attr('src', 'img/but_fav_off.png');
    }

}




function Print_Card_Tot_Lines(tab) {

    var tot_1 = tab.tot_1;
    var tot_2 = tab.tot_2;
    var tot_3 = tab.tot_3;
    var tot_4 = tab.tot_4;
    var tot_5 = tab.tot_5;

    if (tot_1 == 1) {
        $("#sel_card_tot_1").html(tot_1 + " " + Tab_Lang[92]);
    } else {
        $("#sel_card_tot_1").html(tot_1 + " " + Tab_Lang[93]);
    }

    if (tot_2 == 1) {
        $("#sel_card_tot_2").html(tot_2 + " " + Tab_Lang[92]);
    } else {
        $("#sel_card_tot_2").html(tot_2 + " " + Tab_Lang[93]);
    }

    if (tot_3 == 1) {
        $("#sel_card_tot_3").html(tot_3 + " " + Tab_Lang[92]);
    } else {
        $("#sel_card_tot_3").html(tot_3 + " " + Tab_Lang[93]);
    }

    if (tot_4 == 1) {
        $("#sel_card_tot_4").html(tot_4 + " " + Tab_Lang[92]);
    } else {
        $("#sel_card_tot_4").html(tot_4 + " " + Tab_Lang[93]);
    }

    if (tot_5 == 1) {
        $("#sel_card_tot_5").html(tot_5 + " " + Tab_Lang[92]);
    } else {
        $("#sel_card_tot_5").html(tot_5 + " " + Tab_Lang[93]);
    }

}


function Print_Cards_Fav_Sort(arr) {

    var tab = [];

    for (var i=1; i < arr.length - 1; i++) {
        var xis = localStorage.getItem('card_' + arr[i]);

        if (xis != null) {
            var arr2 = xis.split("~");
            tab.push({id: arr2[0], nivel: arr2[1], ind: arr2[2], data: arr2[3]});
        }

    }

    tab.sort(Sort_Obj_By_Property("-data"));

    var arr = [];

    for (var i=0; i < tab.length; i++) {
        arr.push(tab[i].id);
    }

    return arr;

}


function Print_Cards_Favoritos() {

    var all_lines = "";
    var favoritos = localStorage.getItem('favoritos');

    if (favoritos === null || favoritos == "" || favoritos == "~") {
        var div_ini = '<div style="margin: 50px 10px; font-size: 18px; color: #777777; font-weight: bold; border: 1px solid #cccccc; background: #ffffff; padding: 20px 10px; border-radius: 5px;">';
        var div_fim = '</div>'
        $("#fav_cards").html(div_ini + Tab_Lang [247] + div_fim);
        return;
    }

    var arr = favoritos.split("~");

    arr = Print_Cards_Fav_Sort(arr);

    for (var i=0; i < arr.length; i++) {
        all_lines = all_lines + Get_HTML_Card_Favoritos(arr[i]);
    }

    $("#fav_cards").html(all_lines);

}

function Print_Cards_Home(categ) {

    var tab = [];

    for (var i=1; i < TAB_CARDS.length; i++) {
        var xis = localStorage.getItem('card_' + i);
        if (xis != null) {
            var arr = xis.split("~");
            if (TAB_CARDS[i].type == categ) {
                if (IS_FREE && Checa_Se_Card_Eh_Free(TAB_CARDS[i], i)) {
                    tab.push({id: arr[0], nivel: arr[1], ind: arr[2], data: '9' + arr[3]});
                } else {
                    tab.push({id: arr[0], nivel: arr[1], ind: arr[2], data: '8' + arr[3]});
                }
            }
        }
    }

    tab.sort(Sort_Obj_By_Property("-data"));

    var all_rows = '';
    for (var i=0; i < tab.length; i++) {
        all_rows = all_rows  + Get_Html_Card(tab[i].id);
    }

    return all_rows;

}


function Print_Correct_Area_Shopping() {

    var is_Client = localStorage.getItem('is_client');

    if (is_Client === null || is_Client == 0) {
        $("#area_cliente").css ('display', 'none');
        $("#area_to_sell").css ('display', 'block');
    } else {
        $("#area_to_sell").css ('display', 'none');
        $("#area_cliente").css ('display', 'block');
    }

}


function Print_Dados_Pessoais() {

    var perfil_user = localStorage.getItem('perfil_user');
    var arr         = perfil_user.split("~");
    var tipo        = arr[0];
    var nome        = arr[1];
    var email       = arr[2];
    var sexo        = arr[3];
    var data_nasc   = arr[4];
    var rating      = arr[5];
    var dt_incl     = arr[6];
    var country     = arr[7];

    if (tipo == "cad") {
        $("#acc_name").html(nome);
        $("#acc_email").html(email);
        $("#acc_age").html(Calcula_Idade(data_nasc));
        $("#acc_flag").attr('src', 'img/flags2/' + country + '.png');
        $("#acc_area_guest").css ('display', 'none');
        $("#acc_area_dados").css ('display', 'block');
    }  else {
        $("#acc_area_guest").css ('display', 'block');
        $("#acc_area_dados").css ('display', 'none');
    }

    if (tipo == "cad") {
        $("#user_account").css ('display', 'block');
        $("#form_cadastro").css ('display', 'none');
    } else {
        $("#form_cadastro").css ('display', 'block');
        $("#user_account").css ('display', 'none');
    }

}


function Print_Eco_Moves(id_card) {

    var all_lines   = "";
    var tab_ecos    = TAB_CARDS[id_card].eco.split(",");
    var tab_moves   = TAB_CARDS[id_card].eco_moves.split(",");

    for (var i=0; i < tab_ecos.length; i++) {
        all_lines = all_lines + Print_Eco_Moves_Line(tab_ecos[i], tab_moves[i]);
    }

    var ini = '<table width="100%" align="center" border="1" bordercolor="#006600">';
    var fim = '</table>';

    $("#sel_card_eco_lines").html(ini + all_lines + fim);

}


function Print_Eco_Moves_Line(eco, moves) {

    var descr   = Get_Descr_Tab_Eco(Tab_Eco, eco);

    var arr     = descr.split("|");
    var descr   = arr[1].trim();

    return  '<tr style="background: linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%);">' +
            '<td width="20%" align="center" style="font-size: 18px; font-weight: bold; padding: 4px 0px 4px 0px;">' + eco +
            '</td>' +
            '<td width="80%" style="font-size: 12px; padding: 0px 10px;">' +
            '<div style="font-size: 14px; font-weight: bold;">' + descr + '</div>' + moves +
            '</td>' +
            '</tr>';

}

function Print_Game_Header(cur_game) {

    $("#board_game_players").html(cur_game.white + " - " + cur_game.black);
    $("#board_game_place").html(cur_game.place + ", " + cur_game.date);
    $("#board_game_result").html(cur_game.result);

}


function Print_General_Concepts(tab_concepts_sel, lang, titulo) {

    if (lang == 'ENG') {
        var var1 = tab_concepts_sel.eng_1;
        var var2 = tab_concepts_sel.eng_2;
        var var3 = tab_concepts_sel.eng_3;
    }

    if (lang == 'POR') {
        var var1 = tab_concepts_sel.por_1;
        var var2 = tab_concepts_sel.por_2;
        var var3 = tab_concepts_sel.por_3;
    }

    if (lang == 'GER') {
        var var1 = tab_concepts_sel.ger_1;
        var var2 = tab_concepts_sel.ger_2;
        var var3 = tab_concepts_sel.ger_3;
    }

    if (lang == 'FRA') {
        var var1 = tab_concepts_sel.fra_1;
        var var2 = tab_concepts_sel.fra_2;
        var var3 = tab_concepts_sel.fra_3;
    }

    if (lang == 'SPN') {
        var var1 = tab_concepts_sel.spn_1;
        var var2 = tab_concepts_sel.spn_2;
        var var3 = tab_concepts_sel.spn_3;
    }

    if (lang == 'ITA') {
        var var1 = tab_concepts_sel.ita_1;
        var var2 = tab_concepts_sel.ita_2;
        var var3 = tab_concepts_sel.ita_3;
    }

    $("#concepts_1").html("<li>" + var1 + "</li>");

    if (var2 != "") {
        $("#concepts_2").html("<li>" + var2 + "</li>");
    } else {
        $("#concepts_2").html(' ');
    }

    if (var3 != "") {
        $("#concepts_3").html("<li>" + var3 + "</li>");
    } else {
        $("#concepts_3").html(' ');
    }

    $("#concepts_titulo").html(titulo);


}


function Print_Header_Players(user_color) {

    var perfil_user = localStorage.getItem('perfil_user');
    var arr         = perfil_user.split("~");
    var nome        = arr[1];

    if (nome == "") {
        nome = "User";
    }

    if (user_color == "w") {
        $("#white_player").html(nome);
        $("#black_player").html("Stockfish");
    } else {
        $("#white_player").html("Stockfish");
        $("#black_player").html(nome);
    }

}

function Print_Header_Training(id_card, tab_eco, eco, done, meta, nivel) {

    var xis = Get_Descr_Tab_Eco(tab_eco, eco);
    var arr = xis.split('|');
    var opening_descr   = arr[0].trim();
    var opening_variant = TAB_CARDS[id_card].variation;

    var temp        = $(".board_header_progress").css('width');
    var prog_width  = parseInt(temp.replace("px", ""));

    $("#board_progress_bar").css('width', parseInt(done / meta * prog_width) + "px");
    $("#board_progress").html(done + "/" + meta);
    $("#header_board_nivel").attr('src', 'img/icon_nivel_' + nivel + '.png');
    $("#board_opening_train").html("<b>" + eco + "</b> - " + opening_descr);
    $("#board_variant_train").html(opening_variant);

}


function Print_Id_App(id_app) {

    var num_disp = localStorage.getItem('num_disp');

    $('#app_id').html(Formata_Id_App(id_app));
    $('#app_key').html(Formata_Id_App(id_app));

    if (num_disp == 0) {
        $('#num_disp').html(num_disp);
        $('#name_disp').html(Tab_Lang_151[52]);
    } else {
        $('#num_disp').html(num_disp);
        $('#name_disp').html('');
    }

}



function Print_Line_Card_Games(ind, id_game) {

    var eco         = Tab_Games[id_game].eco;
    var white       = Tab_Games[id_game].white;
    var black       = Tab_Games[id_game].black;
    var place       = Tab_Games[id_game].place;
    var date        = Tab_Games[id_game].date;
    var result      = Tab_Games[id_game].result;
    var moves       = Tab_Games[id_game].moves;
    var num_moves   = Tab_Games[id_game].num_moves;

    var local       = localStorage.getItem('game_' + id_game);
    if (local === null) {
        var num_views   = 0;
        var num_stars   = 0;
    } else {
        var arr         = local.split("~");
        var num_views   = arr[0];
        var num_stars   = arr[1];
    }

    var stars = Get_Stars(num_stars);

    return      '<div class="games_list_box">' +
                '<div class="games_list_topo">' +
                '<table width="100%" align="center">' +
                '<tr>' +
                '<td class="games_list_topo_col1">#' + ind + '</td>' +
                '<td class="games_list_topo_col2" >' + num_moves + ' moves</td>' +
                '<td class="games_list_topo_col3" onclick="Game_Aval_Clicked(' + id_game + ')">' +
                '<i class="fas fa-star" style="color: ' + stars[0] + ';"></i>' +
                '<i class="fas fa-star" style="color: ' + stars[1] + ';"></i>' +
                '<i class="fas fa-star" style="color: ' + stars[2] + ';"></i>' +
                '<i class="fas fa-star" style="color: ' + stars[3] + ';"></i>' +
                '<i class="fas fa-star" style="color: ' + stars[4] + ';"></i>' +
                '</td>' +
                '</tr>' +
                '</table>' +
                '</div>' +
                '<div class="games_list_body">' +
                '<span class="games_list_players">' + white + ' - ' + black + '</span> <span class="games_list_result">(' + result + ')</span>' +
                '<div class="games_list_place">' +
                place + ', ' + date +
                '</div>' +
                '</div>' +
                '<div class="games_list_footer">' +
                '<div class="games_list_but_area">' +
                '<button type="button" class="btn btn-outline-info btn-sm games_list_but_go" onclick="But_View_Game(' + id_game + ');">' +
                '<i class="fas fa-chevron-right" class="games_list_but_seta"></i>' +
                '</button>' +
                '</div>' +
                '<div class="games_list_views">' + num_views + ' views</div>' +
                '</div>' +
                '</div>';

}


function Print_Line_Lines(seq, num_line, moves) {

    if (Lines_Off_Check(num_line) || Lines_Off_Temp_Check(num_line)) {     // status = OFF
        var cor1 = '#F0D8BC';
        var cor2 = '#D3B692';
        var cor3 = '#D3B692';
        var bsta = 'board_status_off.png';
    } else {
        var cor1 = '#F5E4D1';
        var cor2 = '#3D2D19';
        var cor3 = '#3D2D19';
        var bsta = 'board_status_on.png';
    }


    return  '<div class="lines_box_line" id="line_bga_' + num_line + '" style="background: ' + cor1 + '; border: 2px solid ' + cor2 + ';">' +
            '<div id="line_bgb_' + num_line + '" style="background: ' + cor3 + ';">' +
            '<table width="100%" align="center">' +
            '<tr>' +
            '<td class="lines_box_line_col1"># ' + seq + '</td>' +
            '<td class="lines_box_line_col2">' +
            '<span onclick="Turn_Line_Off(' + num_line + ');" id="status_line_' + num_line + '"><img  src="img/' + bsta + '"></span>' +
            '</td>' +
            '</tr>' +
            '</table>' +
            '</div>' +
            '<div class="lines_box_line_moves">' +
            moves +
            '</div>' +
            '<div class="lines_box_line_but_area">' +
            '<button type="button" class="btn btn-outline-info btn-sm lines_box_line_but_go" onclick="Show_Line(' + num_line + ', ' + seq + ');">' +
            '<i class="fas fa-chevron-right lines_box_line_but_seta"></i>' +
            '</button>' +
            '</div>' +
            '</div>';
}


function Print_More_Reviews() {

    if ($("#review_lote_2").css('display') == 'none') {
        $("#review_lote_2").css('display', 'block');
        return;
    }

    if ($("#review_lote_3").css('display') == 'none') {
        $("#review_lote_3").css('display', 'block');
        return;
    }

    if ($("#review_lote_4").css('display') == 'none') {
        $("#review_lote_4").css('display', 'block');
        return;
    }

    if ($("#review_lote_5").css('display') == 'none') {
        $("#review_lote_5").css('display', 'block');
        return;
    }

    if ($("#review_lote_6").css('display') == 'none') {
        $("#review_lote_6").css('display', 'block');
        return;
    }

    if ($("#review_lote_7").css('display') == 'none') {
        $("#review_lote_7").css('display', 'block');
        $("#but_more_reviews").css('display', 'none');
    }

}

function Print_Msgs_Suporte() {

    Msg_Nao_Lida = 0;

    var all_lines   = "";
    var arr_headers = Get_Suporte_Msgs_Headers();

    if (arr_headers.length == 0) {
        $("#support_msgs").html(Tab_Lang [222]);
        return;
    }

    for (var i=0; i < arr_headers.length; i++) {
        var arr     = arr_headers[i].split('~~~');
        var id_msg  = arr[0];
        var subject = arr[1];
        var who     = arr[2];
        var data    = arr[3];
        var lida    = arr[4];
        var status  = arr[5];
        all_lines = all_lines + Print_Msgs_Suporte_Line(id_msg, subject, who, data, lida, status);
        if (lida == 0) {
            Msg_Nao_Lida = id_msg;
        }
    }

    $("#support_msgs").html(all_lines);

    if (Msg_Nao_Lida > 0) {
        $("#alert_msg").css('display', 'block');
    } else {
        $("#alert_msg").css('display', 'none');
    }

}

function Print_Msgs_Suporte_Line(id_msg, subject, who, data, lida, status) {

    var dt_incl = Formata_Data(data);

    if (status == '0') {
        var status_descr = 'Open';
    } else {
        var status_descr = 'Closed';
    }

    if (lida == '0') {
        subject = '<b>' + subject + '</b>';
    }

    return  '<div onclick="But_Show_Msg_Suporte(' + id_msg + ' );" class="support_resumo">' +
            '<div class="support_resumo_data">' +
            '<div style="float: right;">' +  dt_incl +
            '</div>' +
            '</div>' +
            '<div class="support_resumo_subject">' +  subject +
            '</div>' +
            '<div class="support_resumo_status">' +
            'Status: ' + status_descr +
            '</div>' +
            '</div>';

}


function Print_One_Msg_Suporte(downloaded_msg) {

    var all_lines = "";

    var arr = downloaded_msg.split("|||");

    var arr_head = arr[0].split('~~~');

    var id_msg      = arr_head[0];
    var seq         = arr_head[1];
    var subject     = arr_head[2];
    var who         = arr_head[3];
    var texto_msg   = arr_head[4];
    var dt_open     = arr_head[5];
    var status      = arr_head[6];

    if (status == "0") {
        var status_descr = "Open";
    } else {
        var status_descr = "Closed";
    }

    $("#sup_msg_titulo").html(subject);
    $("#sup_msg_status").html(status_descr);
    $("#sup_msg_data").html(Formata_Data(dt_open));

    all_lines   = all_lines + Print_One_Msg_Suporte_Line(who, Formata_Data(dt_open), texto_msg);

    for (var i = 1; i < arr.length - 1; i++) {
        var arr_talk    = arr[i].split('~~~');
        var who         = arr_talk[3];
        var texto_msg   = arr_talk[4];
        var dt_open     = arr_talk[5];
        all_lines       = all_lines + Print_One_Msg_Suporte_Line(who, Formata_Data(dt_open), texto_msg);
    }

    $("#supp_msg_talk").html(all_lines);

    Clear_Form_Suporte();

    Hide_All_Sections();
    $("#support_home").css('display', 'none');
    $("#sec_support").css('display', 'block');
    $("#support_msg").css('display', 'block');

    Showing_One_Msg_Support = true;

}


function Print_One_Msg_Suporte_Line(who, data, texto) {

    if (who == "1") {
        var icon = '<img id="sup_chat_1_who" src="img/menu4_off.png" class="support_talk_icon1">';
    } else {
        var icon = '<img src="img/icon_03.png" class="support_talk_icon2">';
    }


    return  '<div class="support_talk_container">' +
            '<div id="sup_msg_data" class="support_talk_data">' + data + '</div>' +
            icon +
            '<div class="support_talk_texto">' + texto + '</div>' +
            '</div>' +
            '<div style="clear: both"></div>' +
            '<hr>';

}



function Print_Train_Records(option) {

    var records = localStorage.getItem('records');
    if (records === null || records === "") {
        var acertos_seq = 0;
        var acertos_rec = 0;
    } else {
        var arr         = records.split("~");
        var acertos_seq = arr[0];
        var acertos_rec = arr[1];
    }

    if (option == 'start' || option == 'errou') {
        acertos_seq = 0;
    }

    if (option == 'acertou') {
        acertos_seq++;
        if (acertos_seq > acertos_rec) {
            acertos_rec = acertos_seq;
        }
    }

    localStorage.setItem('records', acertos_seq + "~" + acertos_rec + "~");

    $("#board_acertos").html(acertos_seq);
    $("#board_record").html(acertos_rec);

}



function Print_Trial_Menu_But() {

    if (IS_FREE) {
        $("#but_trial_menu").css ('display', 'block');
    } else {
        $("#but_trial_menu").css ('display', 'none');
    }

}



function Print_Who_Plays_Icon() {

    var arr = Game.fen().split(" ");
    var turn = arr[1];
    if (turn == "w") {
        $("#header_play_who").css("color", "#ffffff");
        $("#engine_turn").css("color", "#ffffff");
    } else {
        $("#header_play_who").css("color", "#737373");
        $("#engine_turn").css("color", "#737373");
    }

}

function Random(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);

}



function Reprint_Current_Config() {

    if (Conf_Sound == 1) {
        var but = HTML_BUTTON_ON;
    } else {
        var but = HTML_BUTTON_OFF;
    }

    $("#conf_sound").html(but);

    $("#conf_lang").val(Conf_Language);
    $('#board_time_teacher').val(Conf_Time_Teacher);
    $('#chances_exerc').val(Conf_Show_Solution);

    $('#board_time_per_exerc').val(Conf_Time_per_Exerc);
    $('#color_train').val(Conf_Theme_Train);
    $('#color_play').val(Conf_Theme_Play);
    $('#color_analise').val(Conf_Theme_Analise);

    Set_Theme(Conf_Theme_Train, 1);
    Set_Theme(Conf_Theme_Play, 2);
    Set_Theme(Conf_Theme_Analise, 3);

}


function Reset_Navbar() {

    $('#btn_nav_games_play_back').css('display', 'none');
    $('#btn_nav_games_engine_back').css('display', 'none');
    $('#btn_nav_train_engine_back').css('display', 'none');
    $('#btn_nav_train_play_back').css('display', 'none');

    $('#btn_nav_games_play').css('display', 'block');
    $('#btn_nav_games_engine').css('display', 'block');
    $('#btn_nav_train_engine').css('display', 'block');
    $('#btn_nav_train_play').css('display', 'block');

}

function Resize_Sections() {

    $("#board").css ('width', CEL_WIDTH + 'px');

    Board_Width     = parseInt($("#board").width());
    Square_Width    = (Board_Width) / 8;

    $("#sec_board_area").css ('width', CEL_WIDTH + 'px');
    $("#sec_home").css       ('width', CEL_WIDTH + 'px');

    $("#ok_img").css  ('top', (CEL_WIDTH / 2) - (CEL_WIDTH / 3 / 2) + 114 + 'px');
    $("#ok_img").css  ('left', (CEL_WIDTH / 2) - (CEL_WIDTH / 3 / 2) + 'px');
    $("#ok_img").css  ('width', CEL_WIDTH / 3 + 'px');

    $("#err_img").css  ('top', (CEL_WIDTH / 2) - (CEL_WIDTH / 3 / 2) + 114 + 'px');
    $("#err_img").css  ('left', (CEL_WIDTH / 2) - (CEL_WIDTH / 3 / 2) + 'px');
    $("#err_img").css  ('width', CEL_WIDTH / 3 + 'px');


}

function Save_Done(id_card, nivel, next_exerc) {

    var agora = Get_Agora();

    if (nivel == 6) {
        nivel = 1;
        agora = "0000-00-00 00:00:00";
    }

    localStorage.setItem('card_' + id_card, id_card + "~" + nivel + "~" + next_exerc + "~" + agora + "~");
    Cloud_Change = true;

}


function Save_Done_Nivel(id_card, nivel, next_exerc) {

    if (IS_FREE && !Checa_Se_Card_Eh_Free(TAB_CARDS[id_card], id_card)) {
        return;
    }

    var agora = Get_Agora();
    localStorage.setItem('card_' + id_card + '_n' + nivel, next_exerc + "~" + agora + "~");
    Cloud_Change = true;

}


function Set_Board_Header(opt) {

    $("#board_header_games").css("display", "none");
    $("#board_header_play").css("display", "none");
    $("#board_header_engine").css("display", "none");
    $("#board_header_train").css("display", "none");

    if (opt == 'games') {
        $("#board_header_games").css("display", "block");
    }

    if (opt == 'play') {
        $("#board_header_play").css("display", "block");
    }

    if (opt == 'engine') {
        $("#board_header_engine").css("display", "block");
    }

    if (opt == 'train') {
        $("#board_header_train").css("display", "block");
    }

}


function Set_Board_Status(num_line) {

    var status = "on";

    if (Lines_Off_Check(num_line)) {
        status = "off";
    }

    if (Lines_Off_Temp_Check(num_line)) {
        if (status == "on") {
            status = "off";
        } else {
            status = "on";
        }
    }

    if (status == "on") {
        But_Board_Status_ON();
    } else {
        But_Board_Status_OFF();
    }

}

function Set_Conf_Lang() {

    Set_Lang_Selected();

}


function Set_Cron() {

    Timer_Section       = setInterval(Create_New_Section, INTERVAL_NEW_SECTION);
    Timer_Clicks        = setInterval(Send_Clicks, INTERVAL_SEND_TRACKING);
    Timer_Cloud         = setInterval(Send_Cloud, INTERVAL_SEND_CLOUD, false);
    Timer_Suporte       = setInterval(Check_New_Messages, INTERVAL_MSG_SUPORTE);

}


function Set_Flag_Modal(lang) {

    $("#flag_" + lang).css('filter', 'opacity(100%)');

    if (lang == "ENG") {
        $("#lang_selected").html('ENGLISH');
    }

    if (lang == "SPN") {
        $("#lang_selected").html('ESPAÑOL');
    }

    if (lang == "GER") {
        $("#lang_selected").html('DEUTSCH');
    }

    if (lang == "FRA") {
        $("#lang_selected").html('FRANÇAIS');
    }

    if (lang == "POR") {
        $("#lang_selected").html('PORTUGUÊS');
    }

    if (lang == "ITA") {
        $("#lang_selected").html('ITALIANO');
    }

}




function Set_Navbar(tipo) {

    if (tipo == "default") {
        $("#navbar").css('display', 'block');
        $("#navbar_board_train").css('display', 'none');
        $("#navbar_board_games").css('display', 'none');
    }

    if (tipo == "train") {
        $("#navbar").css('display', 'none');
        $("#navbar_board_train").css('display', 'block');
        $("#navbar_board_games").css('display', 'none');
    }

    if (tipo == "games") {
        $("#navbar").css('display', 'none');
        $("#navbar_board_train").css('display', 'none');
        $("#navbar_board_games").css('display', 'block');
    }

}

function Set_New_Board(color) {

    if (color == "b") {
        var orientation = "black";
    } else {
        var orientation = "white";
    }

    var config = {
        orientation:    orientation,
        showErrors:     'alert',
        draggable:      false,
        moveSpeed:      'fast',
        snapbackSpeed:  'fast',
        snapSpeed:      'fast',
        trashSpeed:     'fast',
        position:       'start',
        onDragStart:    onDragStart,
        onDrop:         onDrop,
        onSnapEnd:      onSnapEnd,
        dropOffBoard:   'snapback',
        showNotation:   true
    }

    Board   = ChessBoard('board', config);
    Game    = new Chess(START_POSITION);

}


function Set_Theme(tema, opt) {

    if (tema == 'default_gradiente')          {
        Set_Theme_Colors("#f0d9b5", "#f1dab7", "#dca578", "#b98767");
        if (opt == 1) {
            $("#color_train_1").css('background', '#f0d9b5');
            $("#color_train_2").css('background', '#dca578');
            Conf_Theme_Train = 'default_gradiente';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#f0d9b5');
            $("#color_play_2").css('background', '#dca578');
            Conf_Theme_Play = 'default_gradiente';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#f0d9b5');
            $("#color_analise_2").css('background', '#dca578');
            Conf_Theme_Analise = 'default_gradiente';
        }
        return "highlight_blue";
    }

    if (tema == 'wood')          {
        Set_Theme_Colors("#f0d9b5", "#F2DFC0", "#b58863", "#BC9371");
        if (opt == 1) {
            $("#color_train_1").css('background', '#f0d9b5');
            $("#color_train_2").css('background', '#b58863');
            Conf_Theme_Train = 'wood';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#f0d9b5');
            $("#color_play_2").css('background', '#b58863');
            Conf_Theme_Play = 'wood';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#f0d9b5');
            $("#color_analise_2").css('background', '#b58863');
            Conf_Theme_Analise = 'wood';
        }
        return "highlight_blue";
    }

    if (tema == 'army')             {
        Set_Theme_Colors("#A7BEAE", "#A7BEAE", "#5c7c64", "#5c7c64");
        if (opt == 1) {
            $("#color_train_1").css('background', '#A7BEAE');
            $("#color_train_2").css('background', '#5c7c64');
            Conf_Theme_Train = 'army';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#A7BEAE');
            $("#color_play_2").css('background', '#5c7c64');
            Conf_Theme_Play = 'army';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#A7BEAE');
            $("#color_analise_2").css('background', '#5c7c64');
            Conf_Theme_Analise = 'army';
        }
        return "highlight_yellow";
    }

    if (tema == 'cinza_claro')      {
        Set_Theme_Colors("#EEEEEE", "#F2F2F2", "#CCCCCC", "#D9D9D9");
        if (opt == 1) {
            $("#color_train_1").css('background', '#EEEEEE');
            $("#color_train_2").css('background', '#CCCCCC');
            Conf_Theme_Train = 'cinza_claro';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#EEEEEE');
            $("#color_play_2").css('background', '#CCCCCC');
            Conf_Theme_Play = 'cinza_claro';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#EEEEEE');
            $("#color_analise_2").css('background', '#CCCCCC');
            Conf_Theme_Analise = 'cinza_claro';
        }
        return "highlight_orange";
    }

    if (tema == 'cinza_escuro')     {
        Set_Theme_Colors("#DBDBDB", "#E0E0E0", "#999999", "#A1A1A1");
        if (opt == 1) {
            $("#color_train_1").css('background', '#DBDBDB');
            $("#color_train_2").css('background', '#999999');
            Conf_Theme_Train = 'cinza_escuro';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#DBDBDB');
            $("#color_play_2").css('background', '#999999');
            Conf_Theme_Play = 'cinza_escuro';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#DBDBDB');
            $("#color_analise_2").css('background', '#999999');
            Conf_Theme_Analise = 'cinza_escuro';
        }
        return "highlight_orange";
    }

    if (tema == 'coffee')           {
        Set_Theme_Colors("#ffd79e", "#FFE1B8", "#C3782C", "#D28537");
        if (opt == 1) {
            $("#color_train_1").css('background', '#ffd79e');
            $("#color_train_2").css('background', '#C3782C');
            Conf_Theme_Train = 'coffee';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#ffd79e');
            $("#color_play_2").css('background', '#C3782C');
            Conf_Theme_Play = 'coffee';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#ffd79e');
            $("#color_analise_2").css('background', '#C3782C');
            Conf_Theme_Analise = 'coffee';
        }
        return "highlight_pink";
    }

    if (tema == 'dark_blue')        {
        Set_Theme_Colors("#c0cbd5", "#CBD4DC", "#4470a6", "#5582B9");
        if (opt == 1) {
            $("#color_train_1").css('background', '#c0cbd5');
            $("#color_train_2").css('background', '#4470a6');
            Conf_Theme_Train = 'dark_blue';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#c0cbd5');
            $("#color_play_2").css('background', '#4470a6');
            Conf_Theme_Play = 'dark_blue';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#c0cbd5');
            $("#color_analise_2").css('background', '#4470a6');
            Conf_Theme_Analise = 'dark_blue';
        }
        return "highlight_orange";
    }

    if (tema == 'dark_green')       {
        Set_Theme_Colors("#C7FFE3", "#DBFFED", "#00A352", "#00B259");
        if (opt == 1) {
            $("#color_train_1").css('background', '#C7FFE3');
            $("#color_train_2").css('background', '#00A352');
            Conf_Theme_Train = 'dark_green';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#C7FFE3');
            $("#color_play_2").css('background', '#00A352');
            Conf_Theme_Play = 'dark_green';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#C7FFE3');
            $("#color_analise_2").css('background', '#00A352');
            Conf_Theme_Analise = 'dark_green';
        }
        return "highlight_yellow";
    }

    if (tema == 'green')            {
        Set_Theme_Colors("#EFEFB8", "#F5F5D1", "#88A61C", "#96B71F");
        if (opt == 1) {
            $("#color_train_1").css('background', '#EFEFB8');
            $("#color_train_2").css('background', '#88A61C');
            Conf_Theme_Train = 'green';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#EFEFB8');
            $("#color_play_2").css('background', '#88A61C');
            Conf_Theme_Play = 'green';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#EFEFB8');
            $("#color_analise_2").css('background', '#88A61C');
            Conf_Theme_Analise = 'green';
        }
        return "highlight_blue";
    }

    if (tema == 'light_blue')       {
        Set_Theme_Colors("#dce2e5", "#E5E9EB", "#87a0ab", "#96ACB6");
        if (opt == 1) {
            $("#color_train_1").css('background', '#dce2e5');
            $("#color_train_2").css('background', '#87a0ab');
            Conf_Theme_Train = 'light_blue';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#dce2e5');
            $("#color_play_2").css('background', '#87a0ab');
            Conf_Theme_Play = 'light_blue';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#dce2e5');
            $("#color_analise_2").css('background', '#87a0ab');
            Conf_Theme_Analise = 'light_blue';
        }
        return "highlight_pink";
    }

    if (tema == 'maroon')           {
        Set_Theme_Colors("#D9B581", "#DDBC8D", "#8A6242", "#9B6F4B");
        if (opt == 1) {
            $("#color_train_1").css('background', '#D9B581');
            $("#color_train_2").css('background', '#8A6242');
            Conf_Theme_Train = 'maroon';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#D9B581');
            $("#color_play_2").css('background', '#8A6242');
            Conf_Theme_Play = 'maroon';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#D9B581');
            $("#color_analise_2").css('background', '#8A6242');
            Conf_Theme_Analise = 'maroon';
        }
        return "highlight_white";
    }

    if (tema == 'ocre')             {
        Set_Theme_Colors("#EAAE9F", "#EEBCB0", "#D35636", "#DC7960");
        if (opt == 1) {
            $("#color_train_1").css('background', '#EAAE9F');
            $("#color_train_2").css('background', '#D35636');
            Conf_Theme_Train = 'ocre';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#EAAE9F');
            $("#color_play_2").css('background', '#D35636');
            Conf_Theme_Play = 'ocre';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#EAAE9F');
            $("#color_analise_2").css('background', '#D35636');
            Conf_Theme_Analise = 'ocre';
        }
        return "highlight_teal";
    }

    if (tema == 'olive')            {
        Set_Theme_Colors("#fcffdf", "#FDFFF0", "#78ab6d", "#88B57D");
        if (opt == 1) {
            $("#color_train_1").css('background', '#fcffdf');
            $("#color_train_2").css('background', '#78ab6d');
            Conf_Theme_Train = 'olive';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#fcffdf');
            $("#color_play_2").css('background', '#78ab6d');
            Conf_Theme_Play = 'olive';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#fcffdf');
            $("#color_analise_2").css('background', '#78ab6d');
            Conf_Theme_Analise = 'olive';
        }
        return "highlight_pink";
    }

    if (tema == 'orange')           {
        Set_Theme_Colors("#FFE7C2", "#FFEBCC", "#FFA114", "#FFB13D");
        if (opt == 1) {
            $("#color_train_1").css('background', '#FFE7C2');
            $("#color_train_2").css('background', '#FFA114');
            Conf_Theme_Train = 'orange';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#FFE7C2');
            $("#color_play_2").css('background', '#FFA114');
            Conf_Theme_Play = 'orange';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#FFE7C2');
            $("#color_analise_2").css('background', '#FFA114');
            Conf_Theme_Analise = 'orange';
        }
        return "highlight_blue";
    }

    if (tema == 'pink')             {
        Set_Theme_Colors("#FFCCE5", "#FFDBED", "#FF80BF", "#FF94C9");
        if (opt == 1) {
            $("#color_train_1").css('background', '#FFCCE5');
            $("#color_train_2").css('background', '#FF80BF');
            Conf_Theme_Train = 'pink';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#FFCCE5');
            $("#color_play_2").css('background', '#FF80BF');
            Conf_Theme_Play = 'pink';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#FFCCE5');
            $("#color_analise_2").css('background', '#FF80BF');
            Conf_Theme_Analise = 'pink';
        }
        return "highlight_teal";
    }

    if (tema == 'purple')           {
        Set_Theme_Colors("#F1DBFF", "#f5e6ff", "#D600D6", "#E000E0");
        if (opt == 1) {
            $("#color_train_1").css('background', '#F1DBFF');
            $("#color_train_2").css('background', '#D600D6');
            Conf_Theme_Train = 'purple';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#F1DBFF');
            $("#color_play_2").css('background', '#D600D6');
            Conf_Theme_Play = 'purple';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#F1DBFF');
            $("#color_analise_2").css('background', '#D600D6');
            Conf_Theme_Analise = 'purple';
        }
        return "highlight_green";
    }

    if (tema == 'teal')             {
        Set_Theme_Colors("#e1e5e7", "#e1e5e7", "#0e8c9e", "#0e8c9e");
        if (opt == 1) {
            $("#color_train_1").css('background', '#e1e5e7');
            $("#color_train_2").css('background', '#0e8c9e');
            Conf_Theme_Train = 'teal';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#e1e5e7');
            $("#color_play_2").css('background', '#0e8c9e');
            Conf_Theme_Play = 'teal';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#e1e5e7');
            $("#color_analise_2").css('background', '#0e8c9e');
            Conf_Theme_Analise = 'teal';
        }
        return "highlight_pink";
    }

    if (tema == 'violet')           {
        Set_Theme_Colors("#F8CEF8", "#FADBFA", "#EE82EE", "#F198F1");
        if (opt == 1) {
            $("#color_train_1").css('background', '#F8CEF8');
            $("#color_train_2").css('background', '#EE82EE');
            Conf_Theme_Train = 'violet';
        }
        if (opt == 2) {
            $("#color_play_1").css('background', '#F8CEF8');
            $("#color_play_2").css('background', '#EE82EE');
            Conf_Theme_Play = 'violet';
        }
        if (opt == 3) {
            $("#color_analise_1").css('background', '#F8CEF8');
            $("#color_analise_2").css('background', '#EE82EE');
            Conf_Theme_Analise = 'violet';
        }
        return "highlight_yellow";
    }

}


function Set_Theme_Colors (white_from, white_to, black_from, black_to) {

    $("head").append('<style></style>');
    var element = $("head").children(':last');
    element.html('.white-1e1d7{background-image: linear-gradient(' + white_from + ', ' + white_to + ')}');
    $("head").append('<style></style>');
    var element = $("head").children(':last');
    element.html('.black-3c85d{background-image: linear-gradient(' + black_from + ', ' + black_to + ')}');

}


function Show_Acesso_Limitado(tab_cards_sel, id_card, ind_line, nivel) {

    if (IS_FREE && !Checa_Se_Card_Eh_Free(tab_cards_sel, id_card)) {
        if (ind_line > 4 || nivel > 1 && ind_line > 2) {
            Show_Msg_Acesso_Limitado();
            return true;
        }
    }

    return false;

}


function Show_Modal_Parabens_Nivel(nivel) {

    if (nivel == 1) {
        var sel_img = IMG_CONGRAT_NIVEL_1;
    }

    if (nivel == 2) {
        var sel_img = IMG_CONGRAT_NIVEL_2;
    }

    if (nivel == 3) {
        var sel_img = IMG_CONGRAT_NIVEL_3;
    }

    if (nivel == 4) {
        var sel_img = IMG_CONGRAT_NIVEL_4;
    }

    if (nivel == 5) {
        var sel_img = IMG_CONGRAT_NIVEL_5;
    }

    Show_Msg(Tab_Lang[9], '<center>' + sel_img + '<br>' + Tab_Lang[7] + '</center>');

    Store_Click(CLICK_SHOW_PARABENS, "");

}


function Show_Msg(titulo, txt_msg) {

    $("#mod_msg_title").html(titulo);
    $("#mod_msg_body").html(txt_msg);
    $("#show_modal_msgs").click();

}


function Show_Msg_Acesso_Limitado() {

    $("#modal_msg_button_OK").css('display', 'none');
    $("#modal_msg_buttons_train_buy").css('display', 'block');

    var trial  = localStorage.getItem('trial_30d');
    if (trial !== null && trial != "") {
        $("#but_trial").css('display', 'none');
        Show_Msg(Tab_Lang_150[64], Tab_Lang_150[66]);
    } else {
        Show_Msg(Tab_Lang_150[64], Tab_Lang_150[65]);
    }

    Store_Click(CLICK_SHOW_ACESSO_LIMIT, "");

}


function Show_OK_Img(conf_sound) {

    $("#ok_img").css('display', 'block');
    setTimeout(Hide_Ok_Img, 1500);

    if (conf_sound == "1") {
        SOUND_OK.playclip();
    }

}


function Sort_Obj_By_Property(property) {

    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }

}


function Store_Click(cod_click, param) {

    var agora = Get_Agora_Short();

    var old = localStorage.getItem('clicks');
    if (old === null) {
        localStorage.setItem('clicks', cod_click + '-' + param + '-' + agora + ',');
    } else {
        localStorage.setItem('clicks', old + cod_click + '-' + param + '-' + agora + ',');
    }

}


function Stripped_San(move) {

    if (move === undefined) {
        return;
    }

    move = move.replace('x', '');

    return move.replace(/=/,'').replace(/[+#]?[?!]*$/,'');

}


function Validade_Cupom() {

    var coupon_code = document.getElementById("cupom_desc").value;

    var vars = ["check_cupom", coupon_code.toUpperCase()];
    Ajax_Connect(vars);

}


function Validate_Email(email) {

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);

}


function Volta_Lance() {

    if (USING_MODE == 'games') {
        var time1 = 20;
        var time2 = 80;
    } else {
        var time1 = 200;
        var time2 = 800;
    }

    setTimeout(function() {
        Game.undo();
    }, time1);

    setTimeout(function() {
        Board.position(Game.fen());
    }, time2);

}


function Zerar_Card_Confirm() {

    localStorage.setItem('card_' + Last_Card_Selected, Last_Card_Selected + '~1~0~0000-00-00 00:00:00~');
    Cloud_Change = true;

    But_Menu_Clicked(3);

    Store_Click(CLICK_ZERAR_CONFIRM, "");

}


function Zerar_Card_Nivel(id_card) {

    var xis = localStorage.getItem('card_' + id_card);
    var arr = xis.split("~");

    var id      = arr[0];
    var nivel   = arr[1];
    var next    = 0;
    var data    = arr[3];

    if (nivel == 1) {
        data = "0000-00-00 00:00:00";
    }

    localStorage.setItem('card_' + id_card, id + '~' + nivel + '~' + next + '~' + data + '~');
    Cloud_Change = true;

}


function Zip_Lines(str_lines) {

    var new_str = "";
    var arr     = str_lines.split("-");

    for (var i=0; i < arr.length; i++) {
        if (!Lines_Off_Check(arr[i])) {
            new_str = new_str + arr[i] + "-";
        }
    }

    return new_str.substring(0, new_str.length - 1);

}





var Clock_Class = function() {

    var Mode    = DESLIGADO;

    function Get_Time_Spent() {

        var time_spent  = Clock_Fim - Clock_Ini;
        var time_secs   = parseInt(time_spent / 1000);
        return time_secs;

    }

    function On(mode) {

        Mode        = mode;
        Clock_Ini   = Date.now();

        if (Mode == TEMPORIZADOR) {
            Update_Temporizador();
            Timer_Clock = setInterval(Update_Temporizador, 1000);
        } else {
            Update_Cronometro();
            Timer_Clock = setInterval(Update_Cronometro, 1000);
        }

    }

    function Off() {

        Clock_Fim = Date.now();
        clearInterval(Timer_Clock);

    }

    function Print_Clock(time_to_print) {

        var minutes = 0;
        var seconds = 0;

        minutes = (time_to_print / 60) | 0;
        seconds = (time_to_print % 60) | 0;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $("#clock").html(minutes + ":" + seconds);

    }

    return {

        Get_Time_Spent: function() {
            return Get_Time_Spent();
        },

        On: function(mode) {
            return On(mode);
        },

        Off: function() {
            return Off();
        },

        Print_Clock: function(time_to_print) {
            return Print_Clock(time_to_print);
        }

    }

    function Update_Cronometro() {

        var time_to_print = (((Date.now() - Clock_Ini) / 1000) | 0);

        if (time_to_print == TIME_LIMIT) {
            Off();
            $("#clock").html('<span style="color: #CC0000">00:00</span>');
        } else {
            Print_Clock(time_to_print);
        }

    }

    function Update_Temporizador() {

        var time_to_print = Conf_Time_per_Exerc - (((Date.now() - Clock_Ini) / 1000) | 0);

        if (time_to_print == 0) {
            Train.User_Errou();
            setTimeout(Train.Start_After_Error, 800);
            Off();
            $("#clock").html('<span style="color: #CC0000">00:00</span>');
        } else {
            Print_Clock(time_to_print);
        }

    }

}



var Feedback_Class = function() {

    function Survey_Save() {

        var form_best1	    = document.getElementById("form_best1").value;
        var form_best2	    = document.getElementById("form_best2").value;
        var form_best3	    = document.getElementById("form_best3").value;
        var form_worst1	    = document.getElementById("form_worst1").value;
        var form_worst2	    = document.getElementById("form_worst2").value;
        var form_worst3	    = document.getElementById("form_worst3").value;
        var form_comments	= document.getElementById("form_comments").value;

        if (Consiste_Survey(form_best1, form_best2, form_best3, form_worst1, form_worst2, form_worst3, form_comments)) {
            var vars = ["survey", form_best1, form_best2, form_best3, form_worst1, form_worst2, form_worst3, form_comments];
            Ajax_Connect(vars);
        }

        Store_Click(CLICK_SEND_FEEDBACK, "");

    }



    function Handle_Retorno_Survey(result) {

        var arr = result.split("~");

        if (arr[0].trim() == "OK") {
            Show_Account_Section();
            Show_Msg(Tab_Lang[65], Tab_Lang[66]);
        } else {
            alert(Tab_Lang [244]);
        }

    }

    return {
        Survey_Save: function() {
            return Survey_Save();
        },
        Handle_Retorno_Survey: function(result) {
            return Handle_Retorno_Survey(result);
        }
    }

}
