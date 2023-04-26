// ...................................................................... class_games.js

"use strict";

var Cur_Game = {
    id_game:    0,
    white:      "Nobody",
    black:      "Nobody",
    place:      "Nowhere",
    date:       "1200 dC",
    result:     "0-0",
    moves:      "~",
    ind_half:   0,
    tot_halfs:  0,
    orientation: 'w'
}


function Get_Final_Msg() {

    if (Cur_Game.result == "1-0") {
        if (Game.in_checkmate()) {
            return Tab_Lang [212];
        } else {
            return Tab_Lang [213];
        }
    }

    if (Cur_Game.result == "0-1") {
        if (Game.in_checkmate()) {
            return Tab_Lang [214];
        } else {
            return Tab_Lang [215];
        }
    }

    if (Game.in_stalemate()) {
        return Tab_Lang [216];
    }

    if (Game.in_threefold_repetition()) {
        return Tab_Lang [217];
    }

    if (Game.insufficient_material()) {
        return Tab_Lang [218];
    }

    if (Game.in_draw()) {
        return Tab_Lang [219];
    }

    return Tab_Lang [220];

}


function Show_Games_Ini() {

    Game    = new Chess();
    Board.position(Game.fen());
    Cur_Game.ind_half = 0;

    $("#header_game_moves").html(Tab_Lang [221]);

    Update_Games_Buttons();

}


function Show_Games_Back() {

    if (Cur_Game.ind_half == 1) {
        Show_Games_Ini();
        return;
    }

    if (Cur_Game.ind_half > 0) {
        Cur_Game.ind_half--;
        Volta_Lance();
        var arr = Cur_Game.moves.split("~");
        Update_Games_Moves(arr[Cur_Game.ind_half - 1], Cur_Game.ind_half - 1);
    }

    Update_Games_Buttons();

}

function Show_Games_Next() {

    Teacher_Next_Move2();
    Update_Games_Buttons();

}

function Show_Games_Posic_Final() {

    if (IS_FREE && !Checa_Se_Card_Eh_Free(TAB_CARDS[Last_Card_Selected], Last_Card_Selected)) {
        Show_Msg_Acesso_Limitado();
        return;
    }

    var arr = Cur_Game.moves.split("~");

    for (var i= Cur_Game.ind_half; i < Cur_Game.tot_halfs; i++) {
        var ret = Get_Long_Notation(arr[Cur_Game.ind_half]);
        var xis = ret[0].split("-");
        Game.move({ from: xis[0], to: xis[1], promotion: xis[2] });
        Cur_Game.ind_half++;
    }

    Board.position(Game.fen());
    Update_Games_Moves_Final();
    Update_Games_Buttons();

}


function Go_To_Watching_Position(ind) {

    Print_Game_Header(Cur_Game);
    Set_New_Board("w");
    Show_Board_Game();

    var arr = Cur_Game.moves.split("~");

    for (var i= 0; i < ind; i++) {
        var ret = Get_Long_Notation(arr[i]);
        var xis = ret[0].split("-");
        Game.move({ from: xis[0], to: xis[1], promotion: xis[2] });
    }

    $("#header_game_moves").html(arr[i - 1]);

    Board.position(Game.fen());
    Update_Games_Buttons();

}

function Start_New_Game(id_game) {

    USING_MODE  = "games";
    ENGINE_MODE = "";

    Games_Moves_Counter     = 0;

    Cur_Game.id_game        = id_game;
    Cur_Game.white          = Tab_Games[id_game].white;
    Cur_Game.black          = Tab_Games[id_game].black;
    Cur_Game.place          = Tab_Games[id_game].place;
    Cur_Game.date           = Tab_Games[id_game].date;
    Cur_Game.result         = Tab_Games[id_game].result;
    Cur_Game.moves          = Tab_Games[id_game].moves;
    Cur_Game.tot_halfs      = Get_Tot_Halfs_Games(Cur_Game.moves);
    Cur_Game.ind_half       = 0;
    Cur_Game.orientation    = 'w';

    Print_Game_Header(Cur_Game);
    $("#header_game_moves").html(Tab_Lang_150[77]);

    Set_New_Board("w");

    Show_Board_Game();

    Update_Games_Buttons();

}


function Teacher_Next_Move2() {

    var arr2 = Cur_Game.moves.split("~");

    if (Cur_Game.ind_half >= Cur_Game.tot_halfs) {
        Update_Games_Moves_Final();
        return;
    }

    Games_Moves_Counter++;
    if (IS_FREE && !Checa_Se_Card_Eh_Free(TAB_CARDS[Last_Card_Selected], Last_Card_Selected)) {
        if (Games_Moves_Counter > 12) {
            Show_Msg_Acesso_Limitado();
            return;
        }
    }

    Update_Games_Moves(arr2[Cur_Game.ind_half], Cur_Game.ind_half);

    var ret = Get_Long_Notation(arr2[Cur_Game.ind_half]);

    var arr = ret[0].split("-");
    Game.move({ from: arr[0], to: arr[1], promotion: arr[2] });
    Play_Sound("computer");
    Board.position(Game.fen());
    Cur_Game.ind_half++;

}



function Update_Games_Moves(move, ind_half) {

    ind_half++;
    var num_move = parseInt(ind_half / 2);

    if (ind_half % 2 == 0) {
        num_move = num_move + ". ... ";
    } else {
        num_move++;
        num_move = num_move + ". ";
    }

    move = Stripped_San(move);

    if (num_move == 0 || move == undefined) {
        $("#header_game_moves").html(Tab_Lang [221]);
        $("#board_header_play_sub").html(Tab_Lang [221]);
    } else {
        $("#header_game_moves").html(num_move + Get_Figurine_Label(move, 20));
        $("#board_header_play_sub").html(num_move + Get_Figurine_Label(move, 20));
    }

}



function Update_Games_Moves_Final() {

    var texto = Get_Final_Msg();
    $("#header_game_moves").html(texto);

}


function Update_Games_Stars(id_game, num_stars) {

    var local = localStorage.getItem('game_' + id_game);

    if (local === null) {
        localStorage.setItem('game_' + id_game, '0~' + num_stars + '~');
    } else {
        var arr = local.split("~");
        localStorage.setItem('game_' + id_game, arr[0] + '~' + num_stars + '~');
    }

}


function Update_Games_Views(id_game) {

    var local = localStorage.getItem('game_' + id_game);

    if (local === null) {
        localStorage.setItem('game_' + id_game, '1~0~');
    } else {
        var arr     = local.split("~");
        var views   = parseInt(arr[0]) + 1;
        localStorage.setItem('game_' + id_game, views + '~' + arr[1] + '~');
    }

}


function Update_Games_Buttons() {

    if (Cur_Game.ind_half == 0) {
        $("#but_games_start").attr('src', 'img/but_board_start_off.png');
        $("#but_games_back").attr('src', 'img/but_board_back_off.png');
        $("#but_games_forward").attr('src', 'img/but_board_forward_on.png');
        $("#but_games_final").attr('src', 'img/but_board_end_on.png');
        return;
    }

    if (Cur_Game.ind_half < Cur_Game.tot_halfs) {
        $("#but_games_start").attr('src', 'img/but_board_start_on.png');
        $("#but_games_back").attr('src', 'img/but_board_back_on.png');
        $("#but_games_forward").attr('src', 'img/but_board_forward_on.png');
        $("#but_games_final").attr('src', 'img/but_board_end_on.png');
        return;
    }

    $("#but_games_start").attr('src', 'img/but_board_start_on.png');
    $("#but_games_back").attr('src', 'img/but_board_back_on.png');
    $("#but_games_forward").attr('src', 'img/but_board_forward_off.png');
    $("#but_games_final").attr('src', 'img/but_board_end_off.png');

}
