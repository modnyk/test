// ..................................................................... class_engine.js

"use strict";


var Train_Class = function() {

    var Erros_Seguidos      = 0;
    var Erros_Acumulados    = 0;

    var Exerc = {
        id_card:        0,
        ind_line:       0,
        eco:            "A00",
        nivel:          1,
        num_line:       0,
        color:          "w",
        halfs:          [],
        tot_halfs:      0,
        ind_half:       0,
        tot_erros:      0,
        who:            "w"
    }

    var Tab_Cards_Cur = {
        nivel_1:        "",
        nivel_2:        "",
        nivel_3:        "",
        nivel_4:        "",
        nivel_5:        "",
        tot_1:          0,
        tot_2:          0,
        tot_3:          0,
        tot_4:          0,
        tot_5:          0
    }

    function Init(id_card, color) {

        Is_Redoing          = false;
        Is_Repeting         = false;
        Is_Selected_Exerc   = false;
        Is_User_Turn        = false;

        if (TRAINING_MODE == "lines") {
            Is_Selected_Exerc   = true;
            Tab_Cards_Cur       = TAB_CARDS[id_card];
        } else {
            Tab_Cards_Cur       = Carrega_Tab_Cards_Cur(TAB_CARDS[id_card]);
        }

        Exerc.id_card       = id_card;
        Exerc.color         = color;

        Start_New_Exerc();

        Print_Train_Records('start');

    }


    function Start_New_Exerc() {

        Reset_Navbar();
        Clear_Layer();
        Reset_Stockfish();

        if (TRAINING_MODE == "padrao" && !Is_Selected_Exerc) {
            Exerc.nivel     = Get_Done_Nivel(Exerc.id_card);
            Exerc.ind_line  = Get_Last_Done_Exerc(Exerc.id_card);
        }

        if (TRAINING_MODE == "nivel" && !Is_Selected_Exerc) {
            Exerc.nivel     = Last_Nivel_Selected;
            Exerc.ind_line  = Get_Last_Done_Exerc_Nivel(Exerc.id_card, Exerc.nivel);
        }

        if (TRAINING_MODE == "lines") {
            Exerc.nivel     = Last_Nivel_Selected;
            Exerc.ind_line  = Last_Line_Posic_Selected;
        }

        Exerc.num_line      = Get_Exerc_Num_Line(Tab_Cards_Cur, Exerc.nivel, Exerc.ind_line);
        Exerc.eco           = Tab_Linhas[Exerc.num_line][0];
        Exerc.halfs         = Tab_Linhas[Exerc.num_line][1].split(",");
        Exerc.tot_halfs     = Get_Tot_Halfs(Exerc.halfs, Exerc.nivel);
        Exerc.ind_half      = 0;
        Exerc.tot_erros     = 0;

        if (Nenhum_Exerc_Disponivel(Exerc.nivel, Tab_Cards_Cur)) {
            Show_Popup_No_Exercs();
            return;
        }

        Erros_Seguidos = 0;

        if (Show_Acesso_Limitado(TAB_CARDS[Exerc.id_card], Exerc.id_card, Exerc.ind_line, Exerc.nivel)) {
            return;
        }

        Highlight_Class = Set_Theme(Conf_Theme_Train, 0);

        Set_New_Board(Exerc.color);
        Show_Board_Treino();
        Print_Header_Board(Exerc.nivel, Exerc.ind_line);

        Set_Board_Status(Exerc.num_line);

        Board_Buttons_Update('teaching', Exerc.id_card, Exerc.nivel, Exerc.ind_line, Exerc.num_line);
        Teacher_Begin();

    }


    function Ve_Se_Acertou() {

        var game_hist   = Game.history();
        var tot_halfs   = game_hist.length;
        var last_move   = game_hist[tot_halfs - 1]

        clearInterval(Timer_Teacher);

        if (Stripped_San(last_move) == Exerc.halfs[Exerc.ind_half]) {
            User_Acertou();
        } else {
            User_Errou();
        }

    }

    function Flip() {

        if (Exerc.color == 'w') {
            Board.orientation('black');
            Exerc.color = 'b';
        } else {
            Board.orientation('white');
            Exerc.color = 'w';
        }

        clearInterval(Timer_Teacher);

        Is_Redoing          = false;
        Is_Repeting         = false;
        Is_Selected_Exerc   = false;
        Is_User_Turn        = false;

        Clock.Off();
        Clock.Print_Clock(Conf_Time_per_Exerc);

        Start_New_Exerc();

    }

    function Swap_User_Color() {
        
        if (Exerc.color == 'w') {
            Board.orientation('black');
            Exerc.color = 'b';
        } else {
            Board.orientation('white');
            Exerc.color = 'w';
        }

        return Exerc.color;
    }



    /************************************************************************************
     *                                                                        PUBLIC API
     ***********************************************************************************/

    return {

        Swap_User_Color: function() {
            return Swap_User_Color();
        },
        Get_User_Color: function() {
            return Exerc.color;
        },
        Flip: function() {
            return Flip();
        },
        Get_Id_Card: function() {
            return Exerc.id_card;
        },
        Get_Num_Line: function() {
            return Exerc.num_line;
        },
        Start_After_Error: function() {
            return Start_After_Error();
        },
        Ve_Se_Acertou: function() {
            Ve_Se_Acertou();
        },
        Init: function(id_card, color) {
            return Init(id_card, color);
        },
        Start_New_Exerc: function() {
            return Start_New_Exerc();
        },
        Teacher_The_End: function() {
            return Teacher_The_End();
        },
        But_Backward: function() {
            return But_Backward();
        },
        But_Forward: function() {
            return But_Forward();
        },
        Get_Tab_Cards_Cur: function() {
            return Tab_Cards_Cur;
        },
        User_Errou: function() {
            return User_Errou();
        }

    }

    /************************************************************************************
     *                                                                FUNÇÕES AUXILIARES
     ***********************************************************************************/


    function But_Backward() {

        clearInterval(Timer_Teacher);

        var arr = Get_Line_Backward(Exerc.id_card, Exerc.nivel, Exerc.ind_line);

        if (TRAINING_MODE == "lines") {
            Last_Nivel_Selected         = arr[0];
            Last_Line_Posic_Selected    = arr[1];
        } else {
            Exerc.nivel     = arr[0];
            Exerc.ind_line  = arr[1];
        }

        Is_Selected_Exerc = true;
        Start_New_Exerc();

    }

    function But_Forward() {

        clearInterval(Timer_Teacher);

        var arr = Get_Line_Forward(Exerc.id_card, Exerc.nivel, Exerc.ind_line);

        if (TRAINING_MODE == "lines") {
            Last_Nivel_Selected         = arr[0];
            Last_Line_Posic_Selected    = arr[1];
        } else {
            Exerc.nivel     = arr[0];
            Exerc.ind_line  = arr[1];
        }

        Is_Selected_Exerc = true;
        Start_New_Exerc();

    }

    function Fim_do_Exerc() {

        Show_OK_Img(Conf_Sound);

        if (!Is_Selected_Exerc) {
            Print_Train_Records('acertou');
        }

        clearInterval(Timer_Teacher);
        Clock.Off();

        Is_User_Turn    = false;
        Is_Repeting     = false;

        if (TRAINING_MODE == 'padrao') {
            Fim_do_Exerc_Train();
        }

        if (TRAINING_MODE == 'nivel') {
            Fim_do_Exerc_Nivel();
        }

        Board_Buttons_Update('waiting', Exerc.id_card, Exerc.nivel, Exerc.ind_line, Exerc.num_line);

    }

    function Fim_do_Exerc_Nivel() {

        if (!Is_Selected_Exerc) {
            Exerc.ind_line++;

            Save_Done_Nivel(Exerc.id_card, Exerc.nivel, Exerc.ind_line);
            if (Checa_Se_Completou_Nivel(Tab_Cards_Cur, Exerc.nivel, Exerc.ind_line)) {
                Modal_Msgs_Tipo = "fim_do_nivel";
                Show_Modal_Parabens_Nivel(Exerc.nivel);
                localStorage.removeItem('card_' + Exerc.id_card + '_n' + Exerc.nivel);
                Cloud_Change = true;
                //Board_Buttons_OFF();
            }
        }

    }


    function Fim_do_Exerc_Train() {

        if (!Is_Selected_Exerc) {
            Exerc.ind_line++;
            if (Checa_Se_Completou_Nivel(Tab_Cards_Cur, Exerc.nivel, Exerc.ind_line)) {
                Exerc.nivel++;
                Exerc.ind_line = 0;
                Save_Done(Exerc.id_card, Exerc.nivel, Exerc.ind_line);
                Show_Modal_Parabens_Nivel(Exerc.nivel - 1);
                Board_Buttons_OFF();
            } else {
                Save_Done(Exerc.id_card, Exerc.nivel, Exerc.ind_line);
            }
        }

    }


    function Make_Move(move) {

        var ret = Get_Long_Notation(move);

        if (ret[0] == "err") {
            Game.move(move, { sloppy: true });
        } else {
            var arr = ret[0].split("-");
            if (arr[2] != "" && arr[2] !== undefined) {
                Game.move({ from: arr[0], to: arr[1], promotion: arr[2] });
            } else {
                Game.move({ from: arr[0], to: arr[1] });
            }
            Play_Sound("computer");
            Board.position(Game.fen());
        }

    }

    function Print_Header_Board(nivel, done) {

        var meta    = Get_Tot_Lines(Tab_Cards_Cur, nivel);
        var eco     = Tab_Linhas[Exerc.num_line][0];

        if (!Is_Redoing) {
            done++;
        }

        Print_Header_Training(Exerc.id_card, Tab_Eco, eco, done, meta, Exerc.nivel);

    }

    function Teacher_Begin() {

        clearInterval(Timer_Teacher);
        Clock.Off();
        Clock.Print_Clock(Conf_Time_per_Exerc);

        Teacher_Next_Move();
        Timer_Teacher = setInterval(Teacher_Next_Move, Conf_Time_Teacher);

    }

    function Teacher_Next_Move() {

        if (Exerc.ind_half >= Exerc.tot_halfs) {
            Teacher_The_End();
            return;
        }

        var ret = Get_Long_Notation(Exerc.halfs[Exerc.ind_half]);

        if (ret[0] == "err") {
            //alert(Tab_Lang [248]);                          /**** REVER NAS FUTURAS VERSÕES *****/
            //Send_Treino_Report_Error('A');
            Fim_do_Exerc();
        } else {
            Exerc.halfs[Exerc.ind_half] = ret[1];     // armazena o lance "correto" (Ne2) para comparar depois se o usuário acertou
            var arr = ret[0].split("-");
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
            Store_Click(CLICK_USER_ACERTOU, "");
        }

    }

    function Teacher_The_End() {

        Is_User_Turn    = true;
        Exerc.ind_half  = 0;

        clearInterval(Timer_Teacher);
        Set_New_Board(Exerc.color);

        if (Exerc.color == "b") {
            Teacher_Next_Move();
        }

        Board_Buttons_Update('solving', Exerc.id_card, Exerc.nivel, Exerc.ind_line, Exerc.num_line);

        Clock.On(TEMPORIZADOR);

    }


    function User_Acertou() {

        Exerc.ind_half++;

        if (Exerc.ind_half >= Exerc.tot_halfs) {
            Fim_do_Exerc();
            Store_Click(CLICK_USER_ACERTOU, "");
        } else {
            setTimeout(Teacher_Plays, 750);
        }

    }


    function User_Errou() {

        clearInterval(Timer_Teacher);
        Show_ERR_Img();

        if (!Is_Selected_Exerc) {
            Print_Train_Records('errou');
        }

        Erros_Seguidos++;
        Erros_Acumulados++;

        if (Erros_Acumulados == SHOW_REINFORCE_AFTER) {
            Show_Modal_Reinforce();
            Erros_Acumulados = 0;
            Volta_Lance();
        } else {
            if (Erros_Seguidos < Conf_Show_Solution) {
                Volta_Lance();
            } else {
                setTimeout(Start_After_Error, 800);
            }
        }

        Store_Click(CLICK_USER_ERROU, "");

    }


    function Start_After_Error() {

        Is_Repeting = true;
        Clock.Off();

        Start_New_Exerc();

    }

}



/************************************************************************************
*                                                              FUNÇÕES INDEPENDENTES
*************************************************************************************/

function Board_Buttons_Update(action, id_card, nivel, ind_line, num_line) {

    Board_Buttons_OFF();
    Set_Board_Status(num_line);

    var last_done_exerc  = Get_Last_Done_Exerc(id_card);
    var last_done_nivel  = Get_Done_Nivel(id_card);

    if (TRAINING_MODE == 'padrao') {
        if (Is_Selected_Exerc) {
            if (action == 'teaching') {
                if (ind_line > 0 || nivel > 1) {
                    But_Board_Left_ON();
                }
                if (Is_Repeting) {
                    But_Board_Skip_ON();
                } else {
                    But_Board_Next_ON();
                }
                if (last_done_nivel == parseInt(nivel)) {
                    if (ind_line < last_done_exerc - 1) {
                        But_Board_Right_ON();
                    }
                } else {
                    But_Board_Right_ON();
                }
            }
            if (action == 'solving') {
                if (ind_line > 0 || nivel > 1) {
                    But_Board_Left_ON();
                }
                But_Board_Next_ON();
                if (last_done_nivel == parseInt(nivel)) {
                    if (ind_line < last_done_exerc - 1) {
                        But_Board_Right_ON();
                    }
                } else {
                    But_Board_Right_ON();
                }
            }
            if (action == 'waiting') {
                if (ind_line > 0 || nivel > 1) {
                    But_Board_Left_ON();
                }
                But_Board_Next_ON();
                if (last_done_nivel == parseInt(nivel)) {
                    if (ind_line < last_done_exerc - 1) {
                        But_Board_Right_ON();
                    }
                } else {
                    But_Board_Right_ON();
                }
            }
        } else {
            if (action == 'teaching') {
                if (last_done_exerc > 0 || last_done_nivel > 1) {
                    But_Board_Left_ON();
                }
                if (Is_Repeting) {
                    But_Board_Skip_ON();
                }
            }
            if (action == 'solving') {
                if (last_done_exerc > 0 || last_done_nivel > 1) {
                    But_Board_Left_ON();
                }
            }
            if (action == 'waiting') {
                if (last_done_exerc > 0 || last_done_nivel > 1) {
                    But_Board_Left_ON();
                }
                But_Board_Next_ON();
            }
        }
    }

    if (TRAINING_MODE == 'nivel') {
        if (Is_Selected_Exerc) {
            if (action == 'teaching') {
                if (ind_line > 0 || nivel > 1) {
                    But_Board_Left_ON();
                }
                if (Is_Repeting) {
                    But_Board_Skip_ON();
                } else {
                    But_Board_Next_ON();
                }
                if (last_done_nivel == parseInt(nivel)) {
                    if (ind_line < last_done_exerc - 1) {
                        But_Board_Right_ON();
                    }
                } else {
                    But_Board_Right_ON();
                }
            }
            if (action == 'solving') {
                if (ind_line > 0 || nivel > 1) {
                    But_Board_Left_ON();
                }
                But_Board_Next_ON();
                if (last_done_nivel == parseInt(nivel)) {
                    if (ind_line < last_done_exerc - 1) {
                        But_Board_Right_ON();
                    }
                } else {
                    But_Board_Right_ON();
                }
            }
            if (action == 'waiting') {
                if (ind_line > 0 || nivel > 1) {
                    But_Board_Left_ON();
                }
                But_Board_Next_ON();
                if (last_done_nivel == parseInt(nivel)) {
                    if (ind_line < last_done_exerc - 1) {
                        But_Board_Right_ON();
                    }
                } else {
                    But_Board_Right_ON();
                }
            }
        } else {
            if (action == 'teaching') {
                if (last_done_exerc > 0 || last_done_nivel > 1) {
                    But_Board_Left_ON();
                }
                if (Is_Repeting) {
                    But_Board_Skip_ON();
                }
            }
            if (action == 'solving') {
                if (last_done_exerc > 0 || last_done_nivel > 1) {
                    But_Board_Left_ON();
                }
            }
            if (action == 'waiting') {
                if (last_done_exerc > 0 || last_done_nivel > 1) {
                    But_Board_Left_ON();
                }
                But_Board_Next_ON();
            }
        }
    }

    if (TRAINING_MODE == 'lines') {
        if (ind_line > 0 || nivel > 1) {
            But_Board_Left_ON();
        }
        if (nivel < 5 || ind_line < TAB_CARDS[id_card].tot_5 - 1) {
            But_Board_Right_ON();
        }
    }


}



/************************************************************************************
*                                                              USADAS EM OUTROS LUGARES
*************************************************************************************/



function Get_Line_Backward(id_card, nivel, ind_line) {

    if (TRAINING_MODE == 'nivel') {
        return [nivel, ind_line - 1];
    }

    if (nivel == 1) {
        if (ind_line > 0) {
            return [nivel, ind_line - 1];
        }
        return [nivel, 0];
    }

    if (ind_line == 0) {
        nivel--;
        if (TRAINING_MODE == 'lines') {
            var meta = Get_Tot_Lines(TAB_CARDS[id_card], nivel);
            return [nivel, meta - 1];
        } else {
            var xis = Train.Get_Tab_Cards_Cur();
            var meta = Get_Tot_Lines(Train.Get_Tab_Cards_Cur(), nivel);
            return [nivel, meta - 1];
        }

    }

    return [nivel, ind_line - 1];

}



function Get_Line_Forward(id_card, nivel, ind_line) {

    if (TRAINING_MODE == 'nivel') {
        return [nivel, ind_line + 1];
    }

    if (TRAINING_MODE == 'lines') {
        var meta = Get_Tot_Lines(TAB_CARDS[id_card], nivel);
    } else {
        var meta = Get_Tot_Lines(Train.Get_Tab_Cards_Cur(), nivel);
    }

    if (ind_line == meta - 1) {
        if (nivel < 5) {
            nivel++;
            return [nivel, 0];
        }
        return [nivel, ind_line];
    }

    return [nivel, ind_line + 1];

}


function Show_Modal_Reinforce() {

    Modal_Msgs_Tipo = "reinforce";
    Show_Msg(Tab_Lang[50], Tab_Lang[51]);

}

