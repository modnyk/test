// ....................................................................... class_naveg.js

"use strict";



function But_Exit() {

    navigator.app.exitApp();

}


function Alert_Icon_Clicked() {

    Get_Suporte_One_Msg(Msg_Nao_Lida);

    Store_Click(CLICK_ALERT_ICON, "");

}



function But_Back_Board (origem) {

    Handle_Lines_Off_Temp();
    clearInterval(Timer_Teacher);

    /*
    if (origem == 'board') {
        Print_Card_Details(TAB_CARDS[id_card], id_card);
        Print_Card_Games();
        Hide_All_Sections();
        $("#sec_sel_card").css('display', 'block');
    }
    */

    if (origem == 'board_train') {
        Hide_All_Sections();
        if (TRAINING_MODE == 'padrao') {
            var id_card = Train.Get_Id_Card();
            Print_Card_Details(TAB_CARDS[id_card], id_card);
            $("#sec_sel_card").css('display', 'block');
        }
        if (TRAINING_MODE == 'lines' || TRAINING_MODE == 'nivel') {
            Show_Lines_Section();
        }
        TRAINING_MODE = "";
    }
    if (origem == 'sel_card') {
        Print_Card_Details(TAB_CARDS[Last_Card_Selected], Last_Card_Selected);
        Hide_All_Sections();
        $("#sec_sel_card").css('display', 'block');
    }
    if (origem == 'card') {
        But_Menu_Clicked(3);
    }
    if (origem == 'games_sec') {
        Show_Games_Section('');
    }

    Set_Navbar("default");

    Store_Click(CLICK_HEADER_BACK_BOARD, "");

}


function But_Back_Lines() {

    Train.But_Backward();

    Store_Click(CLICK_BUT_BACK_LINES, "");

}



function But_Back_To_Games() {

    var saved_ind = Cur_Game.ind_half;

    Reset_Navbar();
    Set_Board_Header('games');

    Start_New_Game(Cur_Game.id_game);
    Cur_Game.ind_half = saved_ind;
    Go_To_Watching_Position(Cur_Game.ind_half);

    Highlight_Class = Set_Theme(Conf_Theme_Train, 0);

    Store_Click(CLICK_BUT_BACK_TO_GAMES, "");

}

function But_Back_To_Train() {

    Reset_Stockfish();

    Reset_Navbar();
    Set_Board_Header('train');

    var actual = Board.orientation();

    if (actual == "white") {
        var user_color = "w";
    } else {
        var user_color = "b";
    }

    Highlight_Class = Set_Theme(Conf_Theme_Train, 0);

    Train.Init(Last_Card_Selected, user_color);

    Store_Click(CLICK_BUT_BACK_TO_TRAIN, "");

}


function But_Back_To_Using() {

    ENGINE_MODE = "";

    Reset_Stockfish();
    Reset_Navbar();

    if (USING_MODE == "train")  {
        But_Back_To_Using_Train();
    } else {
        But_Back_To_Using_Games();
    }

}



function But_Back_To_Using_Games() {

    var saved_ind = Cur_Game.ind_half;

    Reset_Navbar();
    Set_Board_Header('games');

    Start_New_Game(Cur_Game.id_game);
    Cur_Game.ind_half = saved_ind;
    Go_To_Watching_Position(Cur_Game.ind_half);

    Highlight_Class = Set_Theme(Conf_Theme_Train, 0);

    Store_Click(CLICK_BUT_BACK_TO_GAMES, "");

}


function But_Back_To_Using_Train() {

    Set_Board_Header('train');

    var actual = Board.orientation();

    if (actual == "white") {
        var user_color = "w";
    } else {
        var user_color = "b";
    }

    Highlight_Class = Set_Theme(Conf_Theme_Train, 0);

    Train.Init(Last_Card_Selected, user_color);

    Store_Click(CLICK_BUT_BACK_TO_TRAIN, "");

}

function But_Board_Help() {

    if (USING_MODE == "games") {
        $("#modal_board_help_with_status").css("display", "none");
        $("#modal_board_help_without_status").css("display", "block");
    } else {
        $("#modal_board_help_with_status").css("display", "block");
        $("#modal_board_help_without_status").css("display", "none");
    }

    $("#show_modal_board_help").click();

    Store_Click(CLICK_BUT_BOARD_HELP, "");

}



function But_Board_Status() {

    var num_line = Train.Get_Num_Line();

    if (TRAINING_MODE == "lines") {
        But_Board_Status_Lines(num_line);
    } else {
        But_Board_Status_Train(num_line);
    }

    Store_Click(CLICK_BOARD_STATUS, num_line);

}



function But_Board_Status_Lines(num_line) {

    if (Lines_Off_Check(num_line)) {
        Lines_Off_Delete(num_line);
        But_Board_Status_ON();
    } else {
        Lines_Off_Insert(num_line);
        But_Board_Status_OFF();
    }

    Store_Click(CLICK_BUT_BOARD_STATUS_LINES, num_line);

}


function But_Board_Status_Train(num_line) {

    if (Lines_Off_Check(num_line)) {
        if (Lines_Off_Temp_Check(num_line)) {
            Lines_Off_Temp_Delete(num_line);
        } else {
            Lines_Off_Temp_Insert(num_line);
        }
        But_Board_Status_ON();
    } else {
        if (Lines_Off_Temp_Check(num_line)) {
            Lines_Off_Temp_Delete(num_line);
            But_Board_Status_ON();
        } else {
            Lines_Off_Temp_Insert(num_line);
            But_Board_Status_OFF();
            Turn_Line_On_Off_Board_Msg();
        }
    }

    Store_Click(CLICK_BUT_BOARD_STATUS_TRAIN, num_line);

}


function But_Cancela_Merge() {

    localStorage.removeItem('lines_off_temp');

    Store_Click(CLICK_CANCELA_MERGE, "");

}



function But_Card_Clicked(id_card) {

    Last_Card_Selected = id_card;
    Print_Card_Details(TAB_CARDS[id_card], id_card);

    Hide_All_Sections();
    $("#sec_sel_card").css('display', 'block');

    Store_Click(CLICK_HOME_CARD, id_card);

}



function But_Confirma_Merge() {

    var id_card = Last_Card_Selected;

    Lines_Off_Merge();
    Zerar_Card_Nivel(id_card);
    But_Menu_Clicked(3);

    Store_Click(CLICK_CONFIRMA_MERGE, "");

}


function But_Continua_Train_Nivel() {

    Train.Init(Last_Card_Selected, Last_Color_Selected);

    Store_Click(CLICK_BUT_CONT_TRAIN_NIVEL, "");
}



function But_Default_Config() {

    Set_Conf_Default();

    Store_Click(CLICK_CONF_DEFAULT, "");

}



function But_Engine_Back() {

    var game_hist   = Game.history();
    var tot_halfs   = game_hist.length;

    if (tot_halfs == 0) {
        return;
    }

    var last_move   = game_hist[tot_halfs - 1]

    Tab_Moves_Buffer.push(last_move);

    Game.undo();
    Board.position(Game.fen());

    STOCKFISH.postMessage('position fen ' + Game.fen());
    STOCKFISH.postMessage('go movetime ' + ENGINE_TIME);

    $("#engine_hint").html('-');

    Print_Who_Plays_Icon();

    Print_Buts_Engine();

    Store_Click(CLICK_BUT_ENGINE_BACK, "");

}



function But_Engine_Forward() {

    var tot_halfs   = Tab_Moves_Buffer.length;

    if (tot_halfs == 0) {
        return;
    }

    var ret = Get_Long_Notation(Tab_Moves_Buffer[tot_halfs - 1]);

    var arr = ret[0].split("-");
    Game.move({ from: arr[0], to: arr[1], promotion: 'q' });   // always promote to a queen
    Board.position(Game.fen());

    STOCKFISH.postMessage('position fen ' + Game.fen());
    STOCKFISH.postMessage('go movetime ' + ENGINE_TIME);

    $("#engine_hint").html('-');

    Tab_Moves_Buffer.pop();
    Print_Who_Plays_Icon();

    Print_Buts_Engine();

    Store_Click(CLICK_BUT_ENGINE_FF, "");

}

function But_Engine_Games() {

    Show_Board_Engine();

    $("#btn_nav_games_engine").css("display", "none");
    $("#btn_nav_games_engine_back").css("display", "block");

    STOCKFISH.postMessage('position fen ' + Game.fen());
    STOCKFISH.postMessage('go movetime ' + ENGINE_TIME);

    var arr = Game.fen().split(" ");
    var turn = arr[1];
    if (turn == "w") {
        $("#engine_turn").css("color", "#ffffff");
    } else {
        $("#engine_turn").css("color", "#000000");
    }

    Store_Click(CLICK_BUT_ENGINE_GAMES, "");

}


function But_Analyse_Mode() {

    ENGINE_MODE = 'analyse';

    Reset_Stockfish();
    Clock.Off();

    Show_Board_Engine();

    $("#btn_nav_games_engine").css("display", "none");
    $("#btn_nav_games_engine_back").css("display", "block");

    $("#btn_nav_train_engine").css("display", "none");
    $("#btn_nav_train_engine_back").css("display", "block");

    STOCKFISH.postMessage('position fen ' + Game.fen());
    STOCKFISH.postMessage('go movetime ' + ENGINE_TIME);

    var arr = Game.fen().split(" ");
    var turn = arr[1];
    if (turn == "w") {
        $("#engine_turn").css("color", "#ffffff");
    } else {
        $("#engine_turn").css("color", "#000000");
    }

    Store_Click(CLICK_BUT_ENGINE_GAMES, "");

}

function But_Engine_Resume() {

    Show_Board_Engine();

    STOCKFISH.postMessage('position fen ' + Game.fen());
    STOCKFISH.postMessage('go movetime ' + ENGINE_TIME);

    var arr = Game.fen().split(" ");
    var turn = arr[1];
    if (turn == "w") {
        $("#engine_turn").css("color", "#ffffff");
    } else {
        $("#engine_turn").css("color", "#000000");
    }

    Print_Buts_Engine();

    Store_Click(CLICK_BUT_ENGINE_RESUME, "");

}


function But_Engine_Train() {

    clearInterval(Timer_Teacher);

    Show_Board_Engine();

    $("#btn_nav_train_engine").css("display", "none");
    $("#btn_nav_train_engine_back").css("display", "block");

    STOCKFISH.postMessage('position fen ' + Game.fen());
    STOCKFISH.postMessage('go movetime ' + ENGINE_TIME);

    var arr = Game.fen().split(" ");
    var turn = arr[1];
    if (turn == "w") {
        $("#engine_turn").css("color", "#ffffff");
    } else {
        $("#engine_turn").css("color", "#000000");
    }

    Tab_Moves_Buffer    = [];
    Print_Buts_Engine();

    Store_Click(CLICK_BUT_ENGINE_TRAIN, "");

}


function But_Flip_Board() {

    if (ENGINE_MODE == "play") {
        //Flip_Playing();
        if (Board.orientation() == "white") {
            Board.orientation('black');
        } else {
            Board.orientation('white');
        }
        var user_color  = Board.orientation();
        user_color      = user_color.substring(0, 1);

        var arr = Game.fen().split(" ");
        var turn = arr[1];
        if (turn != user_color) {
            Engine_Play();
            Is_User_Turn = false;
        } else {
            Is_User_Turn = true;
        }

        Print_Header_Players(user_color);

    } else {
        if (ENGINE_MODE == "analyse") {
            if (Board.orientation() == "white") {
                Board.orientation('black');
            } else {
                Board.orientation('white');
            }
        } else {
            if (USING_MODE == "train") {
                Train.Flip();
            } else {
                if (Board.orientation() == "white") {
                    Board.orientation('black');
                } else {
                    Board.orientation('white');
                }
            }

        }
    }

    Store_Click(CLICK_BUT_FLIP_BOARD, "");


}



function But_Force_Recover(opt) {

    if (opt == 1) {
        Send_Recover_To_Back(ID_App);
    } else {
        Send_Cloud(true);
    }

    Store_Click(CLICK_BUT_FORCE_RECOVER, "");

}


function But_Forward_Lines() {

    Train.But_Forward();

    Store_Click(CLICK_BUT_FORWARD_LINES, "");

}



function But_Game_Star_OK() {

    var id_game     = $("#modal_id_game").text();
    var num_stars   = $("#modal_avaliacao").text();

    Update_Games_Stars(id_game, num_stars);
    Print_Card_Games();

    Store_Click(CLICK_BUT_GAME_STAR_OK, "");

}


function But_Header_Close(target) {

    if (target == 'menu') {
        Show_Menu_Section();
    }

    if (target == 'home') {
        Show_Home_Section();
    }

    if (target == 'config') {
        if (Showed_Conf_From_Train) {
            if (ENGINE_MODE == 'play') {
                But_Play_Resume();
            } else {
                if (ENGINE_MODE == 'analyse') {
                    But_Engine_Resume();
                } else {
                    if (USING_MODE == 'games') {
                        Show_Board_Game();
                    } else {
                        Show_Board_Treino();
                        Train.Start_New_Exerc();
                    }
                }
            }
        } else {
            if (Showed_Conf_From_Menu) {
                Show_Menu_Section();
            } else {
                Show_Home_Section();
            }

        }
        Showed_Conf_From_Train  = false;
        Showed_Conf_From_Menu   = false;
    }

    if (target == 'suporte') {
        if (Showing_Suporte_From_Home) {
            Showing_Suporte_From_Home = false;
            Show_Home_Section();
        } else {
            if (Showing_One_Msg_Support) {
                Showing_One_Msg_Support = false;
                Show_Suporte_Section();
            } else {
                Show_Menu_Section();
            }
        }
    }


    Store_Click(CLICK_ICON_CLOSE, "");

}




function But_Help_Clicked() {

    Print_Msgs_Suporte();
    Show_Menu_Top();

    Store_Click(CLICK_ICON_HELP, "");

}


function But_Inicia_Eval() {

    Inicia_Avaliacao();

    Store_Click(CLICK_BUT_INICIA_EVAL, "");

}


function But_Lines_Clicked(id_card) {

    if (id_card == '9999') {
        id_card = Last_Card_Selected;

    }

    Print_Card_Lines(id_card, 1);
    Show_Lines_Section();

    Store_Click(CLICK_BUT_LINES, id_card);

}

function But_Menu_Clicked(num) {

    Set_Navbar("default");

    TRAINING_MODE       = "";

    Menu_Buttons_Switch(num);
    Hide_All_Sections();

    if (num == 1) {
        Show_Teoria_Section();
    }
    if (num == 2) {
        Print_Cards_Favoritos();
        Show_Favoritos_Section();
    }
    if (num == 3) {
        var tudo = Print_Cards_Home(Class_Open);
        $("#cards_area").html(tudo);

        Show_Home_Section();
    }
    if (num == 4) {
        Show_Account_Section();
    }
    if (num == 5) {
        Show_Shopping_Section();
    }

}

function But_Menu_Clicked_User(num) {


    Handle_Lines_Off_Temp();
    But_Menu_Clicked(num);

    Store_Click(CLICK_NAV_MENU, num);

}


function But_More_Reviews() {

    Print_More_Reviews();

    Store_Click(CLICK_MORE_REVIEWS, "");

}


function But_Nivel_Selec(nivel) {

    Last_Nivel_Selected = nivel;

    var tab_lances  = [0, 4, 6, 8, 10, 12];
    var tot_lines   = Get_Tot_Lines(TAB_CARDS[Last_Card_Selected], nivel);

    Desliga_Buttons_Rosa();

    $("#but_nivel_rosa_" + nivel).attr('src', 'img/but_rosa_n' + nivel + '.png');
    $("#label_nivel").html(nivel);
    $("#label_lances").html(tab_lances[nivel]);
    $("#label_tot_lines").html(tot_lines);

    setTimeout(Print_Card_Lines, 150, Last_Card_Selected, nivel);

}


function But_Nivel_Selec_User(nivel) {

    But_Nivel_Selec(nivel);

    Store_Click(CLICK_BUT_NIVEL_SELEC, nivel);

}


function But_Play_Back() {

    var game_hist   = Game.history();
    var tot_halfs   = game_hist.length;

    if (tot_halfs == 0) {
        return;
    }

    var last_move   = game_hist[tot_halfs - 1]

    Tab_Moves_Buffer.push(last_move);

    Game.undo();
    Board.position(Game.fen());

    Print_Who_Plays_Icon();

    Print_Buts_Play();

    Store_Click(CLICK_BUT_PLAY_BACK, "");

}

function But_Play_Clicked(source) {

    clearInterval(Timer_Teacher);

    Clock.Off();

    if (source == "training") {
        $("#btn_nav_train_play").css("display", "none");
        $("#btn_nav_train_play_back").css("display", "block");
    } else {
        $("#btn_nav_games_play").css("display", "none");
        $("#btn_nav_games_play_back").css("display", "block");
    }

    Show_Board_Play();

    Start_Play_Current_Position();

    Tab_Moves_Buffer = [];
    Print_Buts_Play();

    Store_Click(CLICK_BUT_PLAY_PLAY, source);

}


function But_Play_Forward() {

    var tot_halfs   = Tab_Moves_Buffer.length;

    if (tot_halfs == 0) {
        return;
    }

    var ret = Get_Long_Notation(Tab_Moves_Buffer[tot_halfs - 1]);

    var arr = ret[0].split("-");
    Game.move({ from: arr[0], to: arr[1], promotion: 'q' });   // always promote to a queen
    Board.position(Game.fen());

    Tab_Moves_Buffer.pop();
    Print_Who_Plays_Icon();

    Print_Buts_Play();

    Store_Click(CLICK_BUT_PLAY_FORWARD, "");

}



function But_Play_Mode() {

    clearInterval(Timer_Teacher);
    Clock.Off();

    Reset_Stockfish();

    ENGINE_MODE = 'play';

    $("#btn_nav_train_play").css("display", "none");
    $("#btn_nav_train_play_back").css("display", "block");

    $("#btn_nav_games_play").css("display", "none");
    $("#btn_nav_games_play_back").css("display", "block");

    Show_Board_Play();

    Start_Play_Current_Position();

    Tab_Moves_Buffer = [];
    Print_Buts_Play();

    Store_Click(CLICK_BUT_PLAY_PLAY, "");

}

function But_Play_Resume() {

    Show_Board_Play();
    Start_Play_Current_Position();
    Print_Buts_Play();

    Store_Click(CLICK_BUT_PLAY_RESUME, "");

}


function But_Recover() {

    Hide_All_Sections();
    $("#sec_recover").css('display', 'block');

    Store_Click(CLICK_BUT_RECOVER, "");

}

function But_Recover_Send() {

    if (Consiste_ID_APP('recover')) {
        var p1 = document.getElementById("rec_id_app_1").value;
        var p2 = document.getElementById("rec_id_app_2").value;
        var p3 = document.getElementById("rec_id_app_3").value;
        var p4 = document.getElementById("rec_id_app_4").value;
        Send_Recover_To_Back(p1 + p2 + p3 + p4, 0);
        localStorage.setItem('num_disp', 0);
    } else {
        alert(Tab_Lang_151[37]);
    }

    Store_Click(CLICK_BUT_RECOVER_SEND, "");

}



function But_Set_All_OFF() {

    var lines       = Get_String_Lines(TAB_CARDS[Last_Card_Selected], Last_Nivel_Selected);
    var tot_lines   = Get_Tot_Lines(TAB_CARDS[Last_Card_Selected], Last_Nivel_Selected);

    var arr = lines.split("-");
    for (var i=0; i < tot_lines; i++) {
        Lines_Off_Insert(arr[i]);
    }

    Print_Card_Lines(Last_Card_Selected, Last_Nivel_Selected);

    Store_Click(CLICK_SET_ALL_OFF, "");

}

function But_Set_All_ON() {

    var lines       = Get_String_Lines(TAB_CARDS[Last_Card_Selected], Last_Nivel_Selected);
    var tot_lines   = Get_Tot_Lines(TAB_CARDS[Last_Card_Selected], Last_Nivel_Selected);

    var arr = lines.split("-");
    for (var i=0; i < tot_lines; i++) {
        Lines_Off_Delete(arr[i]);
    }

    Print_Card_Lines(Last_Card_Selected, Last_Nivel_Selected);

    Store_Click(CLICK_SET_ALL_ON, "");

}




function But_Show_Msg_Suporte(id_msg) {

    Hide_All_Sections;
    $("#support_home").css('display', 'none');
    $("#sec_support").css('display', 'block');
    $("#support_msg").css('display', 'block');

    Get_Suporte_One_Msg(id_msg);

    Store_Click(CLICK_SHOW_MSG_SUPORTE, id_msg);

}


function But_Sincronizar() {

    Hide_All_Sections();

    $("#area_sync_confirm").css('display', 'none');
    $("#area_sync_main").css('display', 'block');

    $("#sec_sync").css('display', 'block');

    Store_Click(CLICK_BUT_SINCRONIZAR, "");

}



function But_Sincronizar_Confirm() {

    if (Consiste_Cod_Sync()) {
        var p1 = document.getElementById("cod_sync_1").value;
        var p2 = document.getElementById("cod_sync_2").value;
        var p3 = document.getElementById("cod_sync_3").value;
        var p4 = document.getElementById("cod_sync_4").value;
        Send_Cod_Sync_To_Confirm(p1 + p2 + p3 + p4);
    } else {
        alert(Tab_Lang_151[37]);
    }

    Store_Click(CLICK_BUT_SINC_CONFIRM, "");
}


function But_Sincronizar_Send() {

    if (Consiste_ID_APP('sync')) {
        var p1 = document.getElementById("sync_id_app_1").value;
        var p2 = document.getElementById("sync_id_app_2").value;
        var p3 = document.getElementById("sync_id_app_3").value;
        var p4 = document.getElementById("sync_id_app_4").value;
        ID_App_to_Sync = p1 + p2 + p3 + p4;
        Send_Id_App_To_Sync();
    } else {
        alert(Tab_Lang_151[37]);
    }

    Store_Click(CLICK_BUT_SINC_SEND, "");

}


function But_Skip() {

    Train.Teacher_The_End();
    But_Board_Next_OFF();

    Store_Click(CLICK_SKIP_TEACH, "");

}

function But_Start_Nivel_Novo() {

    localStorage.removeItem('card_' + Last_Card_Selected + '_n' + Last_Nivel_Selected);
    Train.Init(Last_Card_Selected, Last_Color_Selected);

    Store_Click(CLICK_START_NIVEL_NOVO, "");

}


function But_Survey_Save() {

    Feedback.Survey_Save();

    Store_Click(CLICK_SURVEY_SEND, "");

}



function But_Train_Nivel() {

    TRAINING_MODE = 'nivel';

    $("#show_modal_sel_colors").click();

    Store_Click(CLICK_TRAIN_NIVEL, Last_Nivel_Selected);

}

function But_Train_Nivel_From_Nivel(nivel) {

    Last_Nivel_Selected = nivel;
    But_Train_Nivel();

}

function But_Treinar_Backward() {

    Train.But_Backward();

    Store_Click(CLICK_BUT_TREINAR_BACK, "");

}



function But_Treinar_Forward() {

    Train.But_Forward();

    Store_Click(CLICK_BUT_TREINAR_FF, "");

}


function But_Treinar_Proxima() {

    clearInterval(Timer_Teacher);
    Is_Selected_Exerc   = false;
    Train.Start_New_Exerc();

    Store_Click(CLICK_BOARD_PROX, "");

}


function But_View_Game(id_game) {

    Start_New_Game(id_game);
    Update_Games_Views(id_game);

    Store_Click(CLICK_VIEW_GAME, id_game);

}



function But_Zerar_Card() {

    $("#show_modal_zerar").click();

    Store_Click(CLICK_ZERAR_CARD, Last_Card_Selected);

}


function Combo_Conf_Color(opt) {

    if (opt == 1) {
        var tema = $("#color_train :selected").val();
    }
    if (opt == 2) {
        var tema = $("#color_play :selected").val();
    }
    if (opt == 3) {
        var tema = $("#color_analise :selected").val();
    }

    Highlight_Class = Set_Theme(tema, opt);

    Update_Config();

    Store_Click(CLICK_COMBO_CONF_COLOR, opt);

}


function Combo_Conf_Color_Squares(opt) {

    if (opt == 1) {
        var tema = $("#color_train :selected").val();
        var new_tema = Get_Next_Tema(tema);
        $("#color_train").val(new_tema);
    }

    if (opt == 2) {
        var tema = $("#color_play :selected").val();
        var new_tema = Get_Next_Tema(tema);
        $("#color_play").val(new_tema);
    }

    if (opt == 3) {
        var tema = $("#color_analise :selected").val();
        var new_tema = Get_Next_Tema(tema);
        $("#color_analise").val(new_tema);
    }

    Highlight_Class = Set_Theme(new_tema, opt);

    Update_Config();

    Store_Click(CLICK_COMBO_CONF_COLOR_SQ, opt);

}




function Conf_Chances_Clicked(origem) {

    if (origem == 'modal') {
        Conf_Show_Solution = $("#chances_exerc_modal :selected").val();
    } else {
        Conf_Show_Solution = $("#chances_exerc :selected").val();
    }

    Update_Config();

    Store_Click(CLICK_CONF_CHANCES, Conf_Show_Solution);

}


function Conf_Lang_Clicked() {

    Conf_Language = $("#conf_lang :selected").val();
    Set_Lang_Selected();

    Print_App_Version();

    Store_Click(CLICK_CONF_LANG, Conf_Language);

}

function Conf_Sound_Clicked() {

    if (Conf_Sound == 0) {
        Conf_Sound = 1;
    } else {
        Conf_Sound = 0;
    }

    Update_Config();

    Store_Click(CLICK_CONF_SOUND, Conf_Sound);

}



function Conf_Time_Per_Exerc() {

    Conf_Time_per_Exerc = $("#board_time_per_exerc :selected").val();

    Update_Config();

    Store_Click(CLICK_CONF_TIME_PER_EXERC, Conf_Time_per_Exerc);

}


function Conf_Time_Teacher_Change() {

    Conf_Time_Teacher = $("#board_time_teacher :selected").val();

    Update_Config();

    Store_Click(CLICK_CONF_TIME_TEACHER, Conf_Time_Teacher);

}


function Cupom_Desconto() {

    $("#cupom_error").css('display', 'none');
    $("#show_modal_cupom").click();

}



function Game_Aval_Clicked(id_game) {

    Preenche_Modal_Aval_Game(Tab_Games[id_game], id_game);
    Show_Modal_Game_Stars();

    Store_Click(CLICK_GAME_AVAL, id_game);

}


function Game_Star_Clicked(nota) {

    for (var i=1; i <= 5; i++) {
        $("#game_star_" + i).css('color', '#cccccc');
    }

    for (var i=1; i <= nota; i++) {
        $("#game_star_" + i).css('color', '#FFCC00');
    }

    $("#modal_avaliacao").html(nota);

    Store_Click(CLICK_GAME_STAR, nota);


}





function Icon_Fav_Clicked(id_card) {

    if (id_card == '9999') {
        id_card = Last_Card_Selected;
    }

    if (!Esta_No_Favoritos(id_card)) {
        Inclui_Favoritos(id_card);
        $("#icon_fav").attr('src', 'img/but_fav_green.png');
        $("#icon_fav_lines").attr('src', 'img/but_fav_green.png');
        $("#icon_fav_" + id_card).attr('src', 'img/but_fav_green.png');
        Store_Click(CLICK_ICON_FAV, id_card);
    } else {
        Exclui_Favoritos(id_card);
        $("#icon_fav").attr('src', 'img/but_fav_off.png');
        $("#icon_fav_lines").attr('src', 'img/but_fav_off.png');
        $("#icon_fav_" + id_card).attr('src', 'img/but_fav_off.png');
        Store_Click(CLICK_ICON_FAV_DEL, id_card);
    }

}



function Modal_Flag_Clicked(lang) {

    Desabilita_Flags_Modal();
    Set_Flag_Modal(lang);

    Conf_Language = lang;

    Store_Click(CLICK_CONF_FLAG, Conf_Language);

}


function Seta_Bar_Clicked(direction) {

    if (direction == "esq") {
        Class_Open--;
        if (Class_Open < 1) {
            Class_Open = 5;
        }
    } else {
        Class_Open++;
        if (Class_Open > 5) {
            Class_Open = 1;
        }
    }

    $("#menu_tipo").html(Class_Open + ". " + Tab_Class_Open[Class_Open]);

    var tudo = Print_Cards_Home(Class_Open);
    $("#cards_area").html(tudo);

    Store_Click(CLICK_SETA_BAR, Class_Open);

}


function Show_Account_Section() {

    Hide_All_Sections();
    $("#sec_account").css('display', 'block');

}



function Show_Board_Engine() {

    Hide_All_Sections();

    Highlight_Class = Set_Theme(Conf_Theme_Analise, 0);

    $("#sec_board_area").css('display', 'block');

    Set_Board_Header('engine');

    $("#board_buttons_engine").css("display", "block");

    if (TRAINING_MODE == 'padrao' || TRAINING_MODE == 'lines' || TRAINING_MODE == 'nivel') {
        Set_Navbar("train");
    } else {
        Set_Navbar("games");
    }


}


function Show_Board_Game() {

    Hide_All_Sections();

    Set_Navbar("games");
    Set_Board_Header("games");

    $("#sec_board_area").css('display', 'block');

    $("#board_buttons_games").css("display", "block");


}

function Show_Board_Play() {

    Hide_All_Sections();

    Highlight_Class = Set_Theme(Conf_Theme_Play, 0);

    $("#sec_board_area").css('display', 'block');

    Set_Board_Header("play");

    $("#board_buttons_play").css("display", "block");

    if (TRAINING_MODE == 'padrao' || TRAINING_MODE == 'lines' || TRAINING_MODE == 'nivel') {
        Set_Navbar("train");
    } else {
        Set_Navbar("games");
    }

}

function Show_Board_Treino() {

    Hide_All_Sections();

    Set_Navbar("train");
    Set_Board_Header("train");

    $("#sec_board_area").css('display', 'block');

    if (TRAINING_MODE == "lines") {
        $("#board_buttons_lines").css("display", "block");
    } else {
        $("#board_buttons_train").css("display", "block");
    }

}


function Show_Card_Img() {

   $("#img_modal").attr('src', "cards/" + Pad(Last_Card_Selected, 5)  + ".jpg");
   $("#show_modal_card_img").click();

   Store_Click(CLICK_CARD_IMG, Last_Card_Selected);

}


function Show_Config() {

    Hide_All_Sections();
    $("#sec_config").css('display', 'block');

    Store_Click(CLICK_ICON_CONF, "");

}

function Show_Config_From_Menu() {

    Showed_Conf_From_Menu = true;
    Show_Config();

}

function Show_Config_From_Train() {

    clearInterval(Timer_Teacher);
    Showed_Conf_From_Train = true;
    Show_Config();

}




function Show_ERR_Img() {

    $("#err_img").css('display', 'block');

    if (Conf_Sound == "1") {
        SOUND_WRONG.playclip();
    }

    setTimeout(Hide_Err_Img, 1000);

}



function Show_Favoritos_Section() {

    Hide_All_Sections();
    $("#sec_favoritos").css('display', 'block');

}


function Show_Feedback() {

    Clear_Form_Feedback();
    Hide_All_Sections();
    $("#sec_feedback").css ('display', 'block');

    Store_Click(CLICK_SHOW_FEEDBACK, "");

}



function Show_Games_Section() {

    Print_Card_Games();
    Hide_All_Sections();
    $("#sec_games").css('display', 'block');

    Store_Click(CLICK_CARD_GAMES, "");

}


function Show_Games_Section_Fav(id_card) {

    Last_Card_Selected = id_card;

    Print_Card_Games();
    Menu_Buttons_Switch(3);

    Hide_All_Sections();
    $("#sec_games").css('display', 'block');

    Store_Click(CLICK_CARD_GAMES_FAV, "");

}

function Show_General_Concepts() {

    Print_General_Concepts(Tab_Concepts[Last_Card_Selected], Conf_Language, TAB_CARDS[Last_Card_Selected].name);
    $("#show_modal_concepts").click();

    Store_Click(CLICK_GENERAL_CONCEPTS, "");

}


function Show_Help(num) {

    $("#help_header").html(Get_Help_Header(num));

    var arr = Get_Help_Body(num);

    var ret = '<div class="help_subheader">' + arr[0] + '</div>';
    var ret = ret + '<div class="help_body">' + arr[1] + '</div>';

    if (arr[2] != "") {
        var ret = ret + '<div class="help_body">' + arr[2] + '</div>';
        if (arr[3] != "") {
            var ret = ret + '<div class="help_body">' + arr[3] + '</div>';
            if (arr[4] != "") {
                var ret = ret + '<div class="help_body">' + arr[4] + '</div>';
                if (arr[5] != "") {
                    var ret = ret + '<div class="help_body">' + arr[5] + '</div>';
                    if (arr[6] != "") {
                        var ret = ret + '<div class="help_body">' + arr[6] + '</div>';
                    }
                }
            }
        }
    }

    $("#help_detail").html(ret + '<br><br>');

    Hide_All_Sections();
    $("#sec_help_detail").css('display', 'block');

    Store_Click(CLICK_SHOW_HELP, num);

}


function Show_Home_Section() {

    Hide_All_Sections();
    $("#sec_home").css('display', 'block');
    Menu_Buttons_Switch(3);

}


function Show_Level_Section() {

    Hide_All_Sections();
    $("#sec_level").css('display', 'block');

}



function Show_Line(num_line, posic) {

    TRAINING_MODE = 'lines';

    $("#show_modal_sel_colors").click();

    Last_Line_Num_Line_Selected = num_line;
    Last_Line_Posic_Selected    = posic - 1;

    Store_Click(CLICK_SHOW_LINE, num_line);

}


function Show_Lines_Section() {

    Hide_All_Sections();
    $("#sec_lines").css('display', 'block');

    Menu_Buttons_Switch(3);
    But_Nivel_Selec(1);
    Desliga_Buttons_Rosa();

    $("#but_nivel_rosa_1").attr('src', 'img/but_rosa_n1.png');

}


function Show_Menu_Section() {

    Hide_All_Sections();
    $("#sec_menu").css('display', 'block');

    Store_Click(CLICK_MENU_SUPORTE, "");

}

function Show_Menu_Top() {

    Hide_All_Sections();
    $("#sec_help").css('display', 'block');

}


function Show_Modal_Eval() {

    $("#show_modal_eval").click();

}


function Show_Modal_Game_Stars() {

    $("#show_modal_game_stars").click();

}




function Show_Modal_Info(param) {

    Fill_Modal_Info(param);

    $("#modal_info_param").text(param);
    $("#show_modal_info").click();

    Store_Click(CLICK_INFO_ICON, param);

}



function Show_Modal_Parabens_Card() {

    Show_Msg(Tab_Lang[9], Tab_Lang[8]);

    Store_Click(CLICK_SHOW_PARABENS, "");

}


function Show_Popup_No_Exercs() {

    Show_Msg(Tab_Lang_150[67], Tab_Lang_150[68]);

    Store_Click(CLICK_POPUP_NOEXERCS, "");

}



function Show_Popup_Tem_Nivel_Comecado() {

    Hide_All_Sections();
    $("#show_modal_nivel").click();

    Store_Click(CLICK_POPUP_NVL_COMEC, "");

}

function Show_Shopping_Section() {

    Hide_All_Sections();
    $("#sec_shopping").css('display', 'block');

}


function Show_Suporte_From_Home() {

    Showing_Suporte_From_Home = true;

    Clear_Form_Suporte();

    Hide_All_Sections();
    $("#sec_support").css('display', 'block');
    $("#support_home").css('display', 'block');

    Store_Click(CLICK_SUPORTE_FROM_HOME, "");

}

function Show_Suporte_Section() {

    Clear_Form_Suporte();

    Hide_All_Sections();
    $("#sec_support").css('display', 'block');
    $("#support_home").css('display', 'block');

    Store_Click(CLICK_MENU_SUPORTE, "");

}


function Show_Teoria_Section() {

    Hide_All_Sections();
    $("#sec_teoria").css('display', 'block');

}


function Show_Welcome() {

    Menu_Clicked_Source = 'home';

    Hide_All_Sections();
    $("#sec_boas_vindas").css('display', 'block');

    Store_Click(CLICK_MENU_BVINDAS, "");

}


function Train_Show_Modal_Sel_Colors(id_card) {

    TRAINING_MODE = 'padrao';

    if (id_card != '9999') {
        Last_Card_Selected = id_card;
    }

    Menu_Buttons_Switch(3);

    $("#show_modal_sel_colors").click();

    Store_Click(CLICK_CARD_TREINAR, id_card);

}




function Turn_Line_Off(num_line) {

    if (Lines_Off_Check(num_line)) {
        if (Lines_Off_Temp_Check(num_line)) {
            Lines_Off_Temp_Delete(num_line);
        } else {
            Lines_Off_Temp_Insert(num_line);
        }
        Card_Line_ON(num_line);
    } else {
        if (Lines_Off_Temp_Check(num_line)) {
            Lines_Off_Temp_Delete(num_line);
            Card_Line_ON(num_line);
        } else {
            Lines_Off_Temp_Insert(num_line);
            Card_Line_OFF(num_line);
        }
    }

    var lines   = Get_String_Lines(TAB_CARDS[Last_Card_Selected], Last_Nivel_Selected);
    var tot_1   = Get_Tot_Lines(lines);
    var tot_2   = Get_Tot_Lines_Off_Temp(lines);

    $("#label_off").html(tot_1 + tot_2);

    Store_Click(CLICK_LINE_STATUS, num_line);

}


function Turn_Line_On_Off_Board_Msg() {

    var xis = localStorage.getItem('show_popup_help_on_off');

    if (xis === null) {
        Modal_Msgs_Tipo = "on_off";
        $("#box_modal_msg_area").css('display', 'block');
        Show_Msg(Tab_Lang_150[69], "<div style='text-align: left;'>" + Tab_Lang_150[70] + "<br><br>" + Tab_Lang_150[71] + "<br><br>" + Tab_Lang_150[72] + "</div");
    }

}


function Turn_Line_On_Off_Board_Check_Box() {

    if($("#box_modal_msg").is(':checked')) {
        localStorage.setItem('show_popup_help_on_off', false);
    }

}



function User_Color_Selected(color) {

    Last_Color_Selected = color;

}

