// ..................................................................... class_engine.js

"use strict";

const ENGINE_TIME = 3200;

var last_score = 0;
var STOCKFISH = new Worker("" || 'js/stockfish.js');

Reset_Stockfish();

function Reset_Stockfish() {

    STOCKFISH.postMessage('uci');
    STOCKFISH.postMessage('ucinewgame');
    STOCKFISH.postMessage('isready');

}


STOCKFISH.onmessage = function(event) {

    if (ENGINE_MODE == 'play') {
        User_Is_Playing(event);
        return;
    }

 	var line = event.data;
    var aval = "";

    if (line == 'info depth 0 score mate 0') {
        $("#engine_hint").html(LG_ENGINE_XEQUE_MATE);
    }

    var match = line.match(/^info .*\bdepth (\d+) .*\bnps (\d+)/);
    if (match) {
        var arr = event.data.split(" ");
        if (arr[17] == "pv") {
            $("#engine_hint").html(arr[18].substr(0, 2) + "-" + arr[18].substr(2, 2));
        } else {
            $("#engine_hint").html(arr[17].substr(0, 2) + "-" + arr[17].substr(2, 2));
        }

    }

    if(match = line.match(/^info .*\bscore (\w+) (-?\d+)/)) {

        var color = $("#engine_turn").css('color');
        if (color == 'rgb(255, 255, 255)') {
            var turn = "w";
        } else {
            var turn = "b";
        }

        if (turn == 'w') {
            last_score = (parseInt(match[2]) / 100.0).toFixed(2);
        } else {
            last_score = ((parseInt(match[2]) / 100.0).toFixed(2)) * -1;
        }

        var score = parseInt(match[2]) * (turn == 'w' ? 1 : -1);
        if (match[1] == 'cp') {
            var score_to_display = (score / 100.0).toFixed(2);
        } else if(match[1] == 'mate') {
            var score_to_display = '#' + score;
            last_score = score_to_display;
        }

        if(match = line.match(/\b(upper|lower)bound\b/)) {
            score_to_display = ((match[1] == 'upper') == (turn == 'w') ? '<= ' : '>= ') + score_to_display
        }

        $("#engine_score").html(last_score);

    }

	var match = line.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbk])?/);
	if (match) {

        $("#engine_hint").html(match[1] + "-" + match[2]);     //  match[3] = promoted

        var last_score_str = last_score.toString();

        if (last_score_str.includes("#")) {
            $("#engine_score").html(last_score);
            return;
        }

        if (last_score > 0) {
            if (last_score < 0.5) {
                aval = '<img src="img/score_0a0.png" width="97" height="20">';
            } else {
                if (last_score < 0.9) {
                    aval = '<img src="img/score_1a0.png" width="97" height="20">';
                }  else {
                    if (last_score < 1.7) {
                        aval = '<img src="img/score_2a0.png" width="97" height="20">';
                    } else {
                        aval = '<img src="img/score_3a0.png" width="97" height="20">';
                    }
                }
            }

        } else {

            if (last_score > -0.5) {
                aval = '<img src="img/score_0a0.png" width="97" height="20">';
            } else {
                if (last_score > -0.9) {
                    aval = '<img src="img/score_0a1.png" width="97" height="20">';
                }  else {
                    if (last_score > -1.7) {
                        aval = '<img src="img/score_0a2.png" width="97" height="20">';
                    } else {
                        aval = '<img src="img/score_0a3.png" width="97" height="20">';
                    }
                }
            }
        }

        $("#engine_score").html(last_score);

	}

}


function Engine_Play() {

    STOCKFISH.postMessage('position fen ' + Game.fen());
    STOCKFISH.postMessage('go movetime ' + ENGINE_TIME);

}


function Flip_Engine() {

    var user_color = Train.Swap_User_Color();

}

function Flip_Playing() {

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

}

function Start_Play_Current_Position() {

    if (USING_MODE == "train") {
        var user_color = Train.Get_User_Color();
    } else {
        var user_color  = Board.orientation();
        user_color      = user_color.substring(0, 1);
    }

    var arr = Game.fen().split(" ");
    var turn = arr[1];
    if (turn != user_color) {
        $("#msg_short_texto").html(LG_MSG_INICIAL_PLAY_MODO + '<br><br>' + LG_PLAY_ENGINE_START);
        $("#show_modal_short_msg").click();
        Engine_Play();
    } else {
        $("#msg_short_texto").html(LG_MSG_INICIAL_PLAY_MODO + '<br><br>' + LG_PLAY_USER_START);
        $("#show_modal_short_msg").click();
        //Is_User_Turn    = true;
    }

    Print_Who_Plays_Icon();
    Print_Header_Players(user_color);

}


function User_Is_Playing(event) {

    var line = event.data;

    var match = line.match(/^bestmove ([a-h][1-8])([a-h][1-8])([qrbk])?/);

    if (line == 'info depth 0 score mate 0') {
        $("#engine_hint").html(LG_ENGINE_XEQUE_MATE);
    }

    if (match) {
        var move = Game.move({
            from: match[1],
            to: match[2],
            promotion: match[3]      // always promote to a queen
        })
        Board.position(Game.fen());
    }

    Print_Who_Plays_Icon();

    var game_hist   = Game.history();
    var tot_halfs   = game_hist.length;
    var last_move   = game_hist[tot_halfs - 1]

    Update_Games_Moves(last_move, tot_halfs - 1);

    if (Game.in_checkmate()) {
        $("#msg_short_texto").html(LG_GAMEOVER_XEQUE_MATE);
        $("#show_modal_short_msg").click();
        return;
    }

    if (Game.in_stalemate()) {
        $("#msg_short_texto").html(LG_GAMEOVER_STALEMATE);
        $("#show_modal_short_msg").click();
        return;
    }

    if (Game.in_threefold_repetition()) {
        $("#msg_short_texto").html(LG_GAMEOVER_THREEFOLD);
        $("#show_modal_short_msg").click();
        return;
    }

    if (Game.insufficient_material()) {
        $("#msg_short_texto").html(LG_GAMEOVER_MATERIAL);
        $("#show_modal_short_msg").click();
        return;
    }

    if (Game.in_draw()) {
        $("#msg_short_texto").html(LG_GAMEOVER_DRAW);
        $("#show_modal_short_msg").click();
        return;
    }

    Is_User_Turn = true;

}


/*
function Voltar_Lance_Clicked() {

    Game.undo();
    Board.position(Game.fen());

    Print_Who_Plays_Icon();

    var game_hist   = Game.history();
    var tot_halfs   = game_hist.length;
    var last_move   = game_hist[tot_halfs - 1]

    Update_Games_Moves(last_move, tot_halfs - 1);

}

*/