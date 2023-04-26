// .............................................................................. main.js

"use strict";

var Current_Promo = 0;

var Price = {

    open_00:  "offline", //       "R$ 69,90",               // Current_Promo = 0
    open_10:  "offline", //       "R$ 62,90",               // Current_Promo = 1 - promo_1
    open_15:  "offline", //       "R$ 59,45",               // Current_Promo = 2 - promo_2
    open_20:  "offline", //       "R$ 55,90",               // Current_Promo = 3 - promo_3
    open_25:  "offline", //       "R$ 52,45",               // Current_Promo = 4 - promo_4
    open_30:  "offline", //       "R$ 48,90",               // Current_Promo = 5 - promo_5
    open_35:  "offline", //       "R$ 45,45",               // Current_Promo = 6 - promo_6
    open_40:  "offline"  //       "R$ 41,90"                // Current_Promo = 7 - promo_7

}

var Promo_Timer = {
    days:           0,
    hours:          0,
    mins:           0,
    secs:           0
}

var Trial_Timer = {
    days:           0,
    hours:          0,
    mins:           0,
    secs:           0
}

var IS_PREMIUM              = true;
var IS_TRIAL                = false;
var IS_FREE                 = false;

var USING_MODE              = '';    // train, games
var TRAINING_MODE           = '';    // padrao, lines, nivel
var ENGINE_MODE             = '';    // play, analyse




var Is_First_Access         = false;

var Board_Width             = 0;
var Class_Open              = 1;
var Clic_From               = "";
var Clic_To                 = "";
var Cloud_Change            = false;
var Cloud_Not_Saved         = false;

var Conf_Language           = "ENG";
var Conf_Sound              = 0;
var Conf_Time_Teacher       = 0;
var Conf_Time_Games         = 0;
var Conf_Show_Solution      = 0;
var Conf_Time_per_Exerc     = 0;
var Conf_Theme_Train        = "wood";
var Conf_Theme_Play         = "wood";
var Conf_Theme_Analise      = "wood";

var Timer_Teacher           = "";
var Is_User_Turn            = false;
var Is_Redoing              = false;
var Is_Repeting             = false;
var Is_Selected_Exerc       = false;

var Games_Moves_Counter     = 0;
var ID_Acesso               = 0;
var ID_App                  = "";
var ID_App_to_Sync          = "";
var Ind_Sort                = 0;
var Ind_Boards_01           = 1;
var Ind_Boards_14           = 1;
var Ind_Boards_15           = 1;
var Ind_Boards_16           = 1;
var Last_Home_Modal         = "";
var Menu_Clicked_Source     = "";
var Modal_Msgs_Tipo         = "";
var Msg_Nao_Lida            = 0;
var Square_Width            = 0;

var Timer_Promo             = "";
var Timer_Trial             = "";
var Tipo_User               = "free";

var CARDS_FREE              = [];

var Tab_Class_Open          = [];

var Tab_Moves_Buffer        = [];

var Timer_Section           = "";
var Timer_Clicks            = "";
var Timer_Cloud             = "";
var Timer_Suporte           = "";

var Last_Card_Selected      = 0;
var Last_Nivel_Selected     = 0;
var Last_Color_Selected     = "w";

var Last_Line_Num_Line_Selected = 0;
var Last_Line_Posic_Selected    = 0;

var Showed_Conf_From_Train      = false;
var Showed_Conf_From_Menu       = false;
var Showing_One_Msg_Support     = false;
var Showing_Suporte_From_Home   = false;

var $board              = $('#board');
$("#layer").css('width', CEL_WIDTH + "px");
$("#layer").css('height',  CEL_WIDTH + "px");

var my_canvas           = document.getElementById("layer");
var Layer               = my_canvas.getContext("2d");

var Board               = ""; // ChessBoard('board', Board_Conf);
var Game                = ""; // new Chess();

CARDS_FREE[1]           = [91, 83, 85, 86, 87];
CARDS_FREE[2]           = [48, 49, 74];
CARDS_FREE[3]           = [103, 104, 111];
CARDS_FREE[4]           = [32, 120, 142];
CARDS_FREE[5]           = [6, 19];

var Highlight_Class     = "highlight";

var DESLIGADO       = 0;
var CRONOMETRO      = 1;
var TEMPORIZADOR    = 2;
var TIME_LIMIT      = 900;

var Timer_Clock     = 0;

var Clock_Ini       = 0;
var Clock_Fim       = 0;

// não pode alterar de lugar as duas linhas abaixo
document.addEventListener ("deviceready", onDeviceReady, false);
document.addEventListener ("backbutton", onBackKeyDown, false);


document.addEventListener("deviceready", onDeviceReady, true);


function onDeviceReady () {
    Inicializa_Store();
}

function onBackKeyDown() {
    /* Nothing to do; */
}


$('#modal_sel_colors').on('hidden.bs.modal', function (e) {

    USING_MODE  = 'train';
    ENGINE_MODE = '';

    if (TRAINING_MODE == 'padrao') {
        Train.Init(Last_Card_Selected, Last_Color_Selected);
    }
    if (TRAINING_MODE == 'lines') {
        Train.Init(Last_Card_Selected, Last_Color_Selected);
    }
    if (TRAINING_MODE == 'nivel') {
        if (Checa_Se_Tem_Nivel_Comecado(Last_Card_Selected, Last_Nivel_Selected)) {
            Show_Popup_Tem_Nivel_Comecado();
        } else {
            Train.Init(Last_Card_Selected, Last_Color_Selected);
        }
    }

    Store_Click(CLICK_SEL_COLOR, Last_Color_Selected);

})


$('#modal_info').on('hidden.bs.modal', function (e) {

    var param = $("#modal_info_param").text();

    if (param == 'how_to_train') {
        Train_Show_Modal_Sel_Colors('9999');
    }

    if (param == 'browser_lines') {
        But_Lines_Clicked('9999');
    }

})

$('#modal_msgs').on('hidden.bs.modal', function (e) {

    if (Modal_Msgs_Tipo == "fim_do_nivel") {
        Show_Level_Section();
    }

    if (Modal_Msgs_Tipo == "on_off") {
        Turn_Line_On_Off_Board_Check_Box();
    }

    $("#modal_msg_buttons_train_buy").css('display', 'none');
    $("#modal_msg_button_OK").css('display', 'block');

    Modal_Msgs_Tipo = "";

})


$('#modal_lang_sel').on('hidden.bs.modal', function (e) {

    Set_Conf_Lang();
    Show_Welcome();

})

$('#modal_sync_alert').on('hidden.bs.modal', function (e) {

    Set_Cron();

})


var Feedback    = new Feedback_Class();
var Clock       = new Clock_Class();
var Train       = new Train_Class();

$(document).ready(function() {

    Set_ID_App();
    Resize_Sections();
    Set_Cron();
    Set_Conf_Lang();
    Populate_Combos();

    But_Menu_Clicked(3);         // incluir print do Logo na abertura (tipo Splash)
    Print_Cards_Favoritos();
    Print_Id_App(ID_App);
    Print_App_Version();
    Create_New_Section();

    Refresh_Price("open_00");

    if (!Is_First_Access) {
        Get_Popup();
        Set_Timer_Trial();
        Handle_Lines_Off_Temp();
        Check_New_Messages();
    }

    setTimeout(function() {
        Print_Msgs_Suporte();
        Print_Dados_Pessoais();
        Set_Promotion();
        Print_Area_Shopping();
        Print_Trial_Menu_But();
    }, 1500);

    Checa_Last_Cloud();


    /* *********************************************** usar para testes ******

    Show_Popup_Home("quote")
    Show_Popup_Home("feedback")

    setTimeout(Show_Popup_Home, 3000, "feedback");

    $('#show_modal_short_msg').click();
    $('#show_modal_sync_alert').click();
    $('#show_modal_lang_sel').click();
    $('#show_modal_merge').click();
    $('#show_modal_nivel').click();
    $('#show_modal_eval').click();

    */

});




