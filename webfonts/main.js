// .............................................................................. main.js

"use strict";

var Notas       = [];
var Crono       = 0;
var Class_Open  = 1;

var Timer_Teacher   = "";
var Timer_Clock     = "";
var Timer_Game      = "";

var Acertos_Seguidos    = 0;
var Erros_Seguidos      = 0;
var Erros_Seguidos_Time = 0;

var Modal_Msgs_Tipo     = "";
var Menu_Clicked_Source = "";

var Exerc = {
    id_card:    0,
    ind_line:   0,
    eco:        "A00",
    nivel:      1,
    line:       0,
    color:      "w",
    halfs:      [],
    tot_halfs:  0,
    ind_half:   0,
    tot_erros:  0

};

var is_Repeting     = false;
var is_User_Turn    = false;
var Reserva_Clicked = 0;


$('#modal_msgs').on('hidden.bs.modal', function (e) {
    if (Modal_Msgs_Tipo == "reinforce") {
        Modal_Msgs_Tipo = "";
        Start_After_Error();
    }
})

$('#modal_sel_colors').on('hidden.bs.modal', function (e) {
    $("#show_modal_board_icons").click();
})

$('#modal_board_icons').on('hidden.bs.modal', function (e) {
    Start_Card();
})

$('#modal_lang_sel').on('hidden.bs.modal', function (e) {
    Set_Conf_Lang(CONF_LANG_DEFAULT);
    Show_Welcome();
    Create_Welcome_Support_Msg();
})


//document.addEventListener('deviceready', Inicializa_Store);

        document.addEventListener ("deviceready", onDeviceReady, false);

        //these functions runs when Cordova is ready
        function onDeviceReady () {
            alert ('Cordova is ready!');
        }


$(document).ready(function() {

    Set_ID_App();
    Resize_Sections();
    Set_Cron();
    Set_Conf_Lang(CONF_LANG);
    Set_Lang_Cards();
    Set_Emojis();
    Populate_Combos();
    Class_Open = 1;
    But_Menu_Clicked(3);
    Print_Cards_Favoritos();

    setTimeout(function() {
        Print_Msgs_Suporte();
        Print_Dados_Pessoais();
        Atualiza_Extrato();
        Print_Feedback();
        Print_Reserva_Shopping();
    }, 1500);

    Create_New_Section();

    Print_Alert();
    Inicializa_Store();

});





function Fim_do_Exerc() {

    clearInterval(Timer_Clock);
    clearInterval(Timer_Teacher);
    is_User_Turn    = false;

    setTimeout(Print_Emoji(EMOJI_ACERTOU), 100);

    Show_OK_Img();
    setTimeout(Hide_OK_Img, 1500);

    Exerc.ind_line++;
    Save_Done(Exerc.nivel, Exerc.id_card, Exerc.ind_line);

    $("#time_bar_area").css('display', 'none');
    $("#next_line_but").css('display', 'block');

    setTimeout(Print_Emoji, 3000, EMOJI_NEXT);

    Print_Cards(Class_Open);
    Print_Cards_Favoritos();

    $("#but_chat_board_clock").css('display', 'none');
    $("#but_chat_board_bolt").css('display', 'none');
    $("#but_chat_board_triangle").css('display', 'none');
    $("#but_chat_board_redo").css('display', 'block');

}



function Prior_Exerc() {

    Exerc.ind_line--;
    Exerc.ind_line--;
    Exerc.ind_half  = 0;
    Exerc.tot_erros = 0;

    Erros_Seguidos      = 0;
    Acertos_Seguidos    = 0;

    Set_New_Board(false);
    Show_Board_Treino();
    //Print_Header_Board(Exerc.id_card);

    setTimeout(Teacher_Begin, 100);
    $('input[type="range"]').val(CONF_TIME_TEACH);
    $("#icon_clock").css('display', 'block');

}


function Pular_Teacher() {

    Teacher_End();

}



function Redo_Exerc() {

    Exerc.ind_line--;
    Exerc.ind_half  = 0;
    Exerc.tot_erros = 0;

    Erros_Seguidos      = 0;
    Acertos_Seguidos    = 0;

    Set_New_Board(false);
    Show_Board_Treino();
    //Print_Header_Board(Exerc.id_card);

    setTimeout(Teacher_Begin, 100);
    $('input[type="range"]').val(CONF_TIME_TEACH);
    $("#icon_clock").css('display', 'block');

}


function Reset_Clock() {

    clearInterval(Timer_Clock);

    Crono       = 0;
    Timer_Clock = 0;
    Timer_Clock = setInterval(Print_Time_Bar, 1000);                 // ???????????????????????? Tem que ligar agora? ou depois, na hora que começa?
    Hide_Time_Bar();

}


function Start_After_Error() {

    Exerc.ind_half  = 0;
    Exerc.tot_erros = 0;

    Set_New_Board(false);
    Show_Board_Treino();

    is_Repeting = true;

    setTimeout(Teacher_Begin, 100);
    $("#icon_clock").css('display', 'block');

}


function Start_Card() {

    setTimeout(Start_New_Exerc, 500);            // Timeout ?????????????????

}


function Start_Next() {

    $("#next_line_but").css('display', 'none');
    Start_New_Exerc();

}


function Start_New_Exerc() {

    is_Repeting = false;

    var id_card     = Exerc.id_card;

    Exerc.ind_line  = Get_Done(id_card);
    Exerc.nivel     = Get_Exerc_Nivel(id_card);
    Exerc.line      = Get_Exerc_Line(id_card);
    Exerc.halfs     = Tab_Linhas[Exerc.line][1].split(",");
    Exerc.tot_halfs = Get_Tot_Halfs();
    Exerc.ind_half  = 0;
    Exerc.tot_erros = 0;

    Erros_Seguidos      = 0;
    Acertos_Seguidos    = 0;

    Set_New_Board(false);
    Show_Board_Treino();
    Print_Header_Board(id_card);

    setTimeout(Teacher_Begin, 100);
    $('input[type="range"]').val(CONF_TIME_TEACH);
    $("#icon_clock").css('display', 'block');

}


function Teacher_Begin() {

    if (is_Repeting) {
        $("#but_chat_board_redo").css('display', 'none');
        $("#but_chat_board_clock").css('display', 'none');
        $("#but_chat_board_triangle").css('display', 'none');
        $("#but_chat_board_bolt").css('display', 'block');
    } else {
        $("#but_chat_board_redo").css('display', 'none');
        $("#but_chat_board_triangle").css('display', 'none');
        $("#but_chat_board_bolt").css('display', 'none');
        $("#but_chat_board_clock").css('display', 'block');
    }

    setTimeout(Print_Emoji, 10, EMOJI_TEACH);
    Teacher_Next_Move();
    Timer_Teacher = setInterval(Teacher_Next_Move, CONF_TIME_TEACH);

}


function Teacher_End() {

    Disable_Time_Bar();
    setTimeout(Print_Emoji, 100, EMOJI_REPEAT);

    is_User_Turn    = true;
    Exerc.ind_half  = 0;
    Set_New_Board(true);
    Crono           = 0;
    Reset_Clock();

    if (Exerc.color == "b") {
        Teacher_Next_Move();
    }

    $("#but_chat_board_redo").css('display', 'none');
    $("#but_chat_board_clock").css('display', 'none');
    $("#but_chat_board_bolt").css('display', 'none');
    $("#but_chat_board_triangle").css('display', 'block');

    $("#conf_time_bar").css('display', 'none');

}


function Teacher_Next_Move() {

    if (Exerc.ind_half >= Exerc.tot_halfs) {
        Teacher_End();
        return;
    }

    var ret = Get_Long_Notation(Exerc.halfs[Exerc.ind_half]);

    if (ret == "err") {
        alert(Tab_Lang [248]);
        Send_Treino_Report_Error('A');
        Fim_do_Exerc();
    } else {
        var arr = ret.split("-");
        Game.move({ from: arr[0], to: arr[1] });
        Play_Sound("computer");
        Board.position(Game.fen());
        Exerc.ind_half++;
    }

}



function Teacher_Plays() {

    Make_Move(Exerc.halfs[Exerc.ind_half]);
    Exerc.ind_half++;

    if (Exerc.ind_half >= Exerc.tot_halfs) {
        Fim_do_Exerc();
    }

}



function User_Acertou() {

    Exerc.ind_half++;

    if (Exerc.ind_half >= Exerc.tot_halfs) {
        Fim_do_Exerc();
    } else {
        Teacher_Plays();
    }

}


function User_Errou() {

    Erros_Seguidos++;

    clearInterval(Timer_Clock);
    clearInterval(Timer_Teacher);

    Show_ERR_Img();
    setTimeout(Hide_ERR_Img, 1000);

    setTimeout(Print_Emoji, 10, EMOJI_ERROU);
    Hide_Time_Bar();

    setTimeout(User_Errou_Refazer, 200);

}


function User_Errou_Refazer() {

    if (Erros_Seguidos > 1) {
        Modal_Msgs_Tipo = "reinforce";
        Show_Modal_Reinforce();
    } else {
        setTimeout(Start_After_Error, 1500);
    }

}



function Ve_Se_Acertou() {

    var game_hist   = Game.history();
    var tot_halfs   = game_hist.length;
    var last_move   = game_hist[tot_halfs - 1]

    Reset_Clock();

    if (Stripped_San(last_move) == Exerc.halfs[Exerc.ind_half]) {
        User_Acertou();
    } else {
        User_Errou();
    }

}




// ===================================================================================================== store


function Inicializa_Store() {

    alert('Inicializando store');

    if (!window.store) {
        alert("Store not available");
        return;
    }

    store.verbosity = store.INFO;

    alert('Store OK');

    store.register({
        id:    'sub_01m_p0',
        alias: 'sub_01m_p0',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_01m_p1',
        alias: 'sub_01m_p1',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_01m_p2',
        alias: 'sub_01m_p2',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_03m_p0',
        alias: 'sub_03m_p0',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_03m_p1',
        alias: 'sub_03m_p1',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_03m_p2',
        alias: 'sub_03m_p2',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_06m_p0',
        alias: 'sub_06m_p0',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_06m_p1',
        alias: 'sub_06m_p1',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_06m_p2',
        alias: 'sub_06m_p2',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_12m_p0',
        alias: 'sub_12m_p0',
        type:   store.CONSUMABLE
    });


    store.register({
        id:    'sub_12m_p1',
        alias: 'sub_12m_p1',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_12m_p2',
        alias: 'sub_12m_p2',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_24m_p0',
        alias: 'sub_24m_p0',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_24m_p1',
        alias: 'sub_24m_p1',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'sub_24m_p2',
        alias: 'sub_24m_p2',
        type:   store.CONSUMABLE
    });

    store.error(function(error) {
        $("#info").html('ERROR ' + error.code + ': ' + error.message);
    });

    store.when('sub_01m_p0').updated(Refresh_Price);
    store.when('sub_01m_p0').approved(function(p) { p.verify(); });
    store.when('sub_01m_p0').verified(Compra_Concluida);

    store.when('sub_01m_p1').updated(Refresh_Price);
    store.when('sub_01m_p1').approved(function(p) { p.verify(); });
    store.when('sub_01m_p1').verified(Compra_Concluida);

    store.when('sub_01m_p2').updated(Refresh_Price);
    store.when('sub_01m_p2').approved(function(p) { p.verify(); });
    store.when('sub_01m_p2').verified(Compra_Concluida);

    store.when('sub_03m_p0').updated(Refresh_Price);
    store.when('sub_03m_p0').approved(function(p) { p.verify(); });
    store.when('sub_03m_p0').verified(Compra_Concluida);

    store.when('sub_03m_p1').updated(Refresh_Price);
    store.when('sub_03m_p1').approved(function(p) { p.verify(); });
    store.when('sub_03m_p1').verified(Compra_Concluida);

    store.when('sub_03m_p2').updated(Refresh_Price);
    store.when('sub_03m_p2').approved(function(p) { p.verify(); });
    store.when('sub_03m_p2').verified(Compra_Concluida);

    store.when('sub_06m_p0').updated(Refresh_Price);
    store.when('sub_06m_p0').approved(function(p) { p.verify(); });
    store.when('sub_06m_p0').verified(Compra_Concluida);

    store.when('sub_06m_p1').updated(Refresh_Price);
    store.when('sub_06m_p1').approved(function(p) { p.verify(); });
    store.when('sub_06m_p1').verified(Compra_Concluida);

    store.when('sub_06m_p2').updated(Refresh_Price);
    store.when('sub_06m_p2').approved(function(p) { p.verify(); });
    store.when('sub_06m_p2').verified(Compra_Concluida);

    store.when('sub_12m_p0').updated(Refresh_Price);
    store.when('sub_12m_p0').approved(function(p) { p.verify(); });
    store.when('sub_12m_p0').verified(Compra_Concluida);

    store.when('sub_12m_p1').updated(Refresh_Price);
    store.when('sub_12m_p1').approved(function(p) { p.verify(); });
    store.when('sub_12m_p1').verified(Compra_Concluida);

    store.when('sub_12m_p2').updated(Refresh_Price);
    store.when('sub_12m_p2').approved(function(p) { p.verify(); });
    store.when('sub_12m_p2').verified(Compra_Concluida);

    store.when('sub_24m_p0').updated(Refresh_Price);
    store.when('sub_24m_p0').approved(function(p) { p.verify(); });
    store.when('sub_24m_p0').verified(Compra_Concluida);

    store.when('sub_24m_p1').updated(Refresh_Price);
    store.when('sub_24m_p1').approved(function(p) { p.verify(); });
    store.when('sub_24m_p1').verified(Compra_Concluida);

    store.when('sub_24m_p2').updated(Refresh_Price);
    store.when('sub_24m_p2').approved(function(p) { p.verify(); });
    store.when('sub_24m_p2').verified(Compra_Concluida);

    store.refresh();
}



function Refresh_Price(product) {

    //console.log(product.price);
    $("#price_" + product.id).html(product.price);

}


function Compra_Concluida(p) {

    alert("Compra OK");

    console.log(p);

/*
    if (BUYING == 'mte_02') { id_mod = '102'; }

    if (id_mod != 0) {
        AJAX.Download_Mod(id_mod, "C");
    }
*/

    p.finish();

}




function Call_Store_Billing(id_prod) {

    alert("Call Store Billing - Not implemented");

    store.order("sub_01m_p2");

/*

    var id_mod = MOD_TO_DOWNLOAD;

    BUYING = "";

    if (id_mod == '102') { BUYING = 'mte_02'; }


    if (BUYING != "") {
        store.order(BUYING);
    } else {
        AJAX.Download_Mod(id_mod, "C");
    }

*/

}


