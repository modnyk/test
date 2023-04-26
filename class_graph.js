// ....................................................................... class_graph.js

"use strict";


function Canvas_Clicked(event) {

    if (USING_MODE == "train" && Is_User_Turn && ENGINE_MODE == "") {
        Canvas_Clicked_Go_Ahead(event);
    }

    if (ENGINE_MODE == "analyse") {
        Canvas_Clicked_Go_Ahead(event);
    }

    if (ENGINE_MODE == "play" && Is_User_Turn) {
        Canvas_Clicked_Go_Ahead(event);
    }



}

function Canvas_Clicked_Go_Ahead(event) {

    var arr     = Get_Col_Row(event);
    var square  = Get_Square(arr[0], arr[1]);

    Highlight_Square(square);

    if (Clic_From == "") {
        Clic_From = square;
    	Highlight_Square(square);
        return;
    }

    Clic_To = square;
    var piece_promoted = 'q';       // always promote to a queen

    var ret = Make_User_Move(Clic_From, Clic_To, piece_promoted);

    if (ret == 'invalid') {
        Clic_To 	= "";
        Clic_From 	= "";
        setTimeout(Clear_Layer, 300);
        return;
    }

    if (ENGINE_MODE == 'play' || ENGINE_MODE == 'analyse') {
        Make_Engine_Move();
        Print_Who_Plays_Icon();
    } else {
        if (USING_MODE == 'train') {
            Train.Ve_Se_Acertou();
            setTimeout(Clear_Layer, 300);
        }
    }

    Clic_To 	= "";
    Clic_From 	= "";

}


function Make_Engine_Move() {

    Is_User_Turn = false;

    $("#engine_hint").html("-");

    var moves   = '';
    var history = Game.history({verbose: true});
    for(var i = 0; i < history.length; ++i) {
        var move = history[i];
        moves += ' ' + move.from + move.to + (move.promotion ? move.promotion : '');
    }

    STOCKFISH.postMessage('position startpos moves' + moves);
    STOCKFISH.postMessage('go movetime ' + ENGINE_TIME);

}


function Make_User_Move(sq_from, sq_to, piece_promoted) {

    Clear_Layer();

    var move = Game.move({
        from: Clic_From,
        to: Clic_To,
        promotion: 'q'
    })

    if (move === null) {
        Play_Sound("invalid");
        Clic_From   = "";
        Clic_To     = "";
        setTimeout(Clear_Layer, 300);
        return 'invalid';
    }

    Play_Sound("click");
    Board.move(Clic_From + '-' + Clic_To);
    Board.position(Game.fen());

}



function Highlight_Square(square) {

    $board.find('.square-' + square).addClass(Highlight_Class);

}

function Get_Square(col, row) {

    if (Board.orientation() == "white") {
        return COLUMNS[col] + ROWS[row];
    } else {
        return COLUMNS_FLIP[col] + ROWS_FLIP[row];
    }

}



function Get_Col_Row(event) {

    var header  = $("#board_header_train").css("height");

    if (ENGINE_MODE == "analyse") {
        var header  = $("#board_header_engine").css("height");
    }

    if (ENGINE_MODE == "play") {
        var header  = $("#board_header_play").css("height");
    }

    var ajuste  = header.replace('px', '');
    var ajuste  = parseInt(ajuste);
    var scroll  = window.scrollY;
    ajuste      = ajuste - scroll;

    var col     = parseInt((event.clientX - 2)  / Square_Width);
    var row     = parseInt((event.clientY - ajuste) / Square_Width);

    return [col, row];

}


function Clear_Layer() {

    var tab = ['a8', 'a7', 'a6', 'a5', 'a4', 'a3', 'a2', 'a1',
               'b8', 'b7', 'b6', 'b5', 'b4', 'b3', 'b2', 'b1',
               'c8', 'c7', 'c6', 'c5', 'c4', 'c3', 'c2', 'c1',
               'd8', 'd7', 'd6', 'd5', 'd4', 'd3', 'd2', 'd1',
               'e8', 'e7', 'e6', 'e5', 'e4', 'e3', 'e2', 'e1',
               'f8', 'f7', 'f6', 'f5', 'f4', 'f3', 'f2', 'f1',
               'g8', 'g7', 'g6', 'g5', 'g4', 'g3', 'g2', 'g1',
               'h8', 'h7', 'h6', 'h5', 'h4', 'h3', 'h2', 'h1'];

    for (var i=0; i < 64; i++) {
        $board.find('.square-' + tab[i]).removeClass(Highlight_Class);
    }

}
