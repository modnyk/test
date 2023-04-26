// ..................................................................... class_account.js

"use strict";






function Ajusta_Time_Teach_Old_Versions() {

    if (Conf_Time_Teacher == 750)     { Conf_Time_Teacher = 900; }
    if (Conf_Time_Teacher == 1000)    { Conf_Time_Teacher = 900; }
    if (Conf_Time_Teacher == 2000)    { Conf_Time_Teacher = 1500; }
    if (Conf_Time_Teacher == 3000)    { Conf_Time_Teacher = 2500; }
    if (Conf_Time_Teacher == 3500)    { Conf_Time_Teacher = 2500; }
    if (Conf_Time_Teacher > 3500)     { Conf_Time_Teacher = 5000; }

    Update_Config();

}



function Get_User_Category() {

    var vars = ["get_user_category"];
    Ajax_Connect(vars);

}



function Inicializa_New_User() {

    localStorage.setItem('id_app', ID_App);
    localStorage.setItem('version', VERSION);

}



function Load_Config() {

    var config          = localStorage.getItem('config');
    var arr             = config.split("~");
    Conf_Language       = arr[0];
    Conf_Sound          = arr[1];
    Conf_Time_Teacher   = arr[2];
    Conf_Time_Games     = arr[3];
    Conf_Show_Solution  = arr[4];
    Conf_Time_per_Exerc = arr[5];
    Conf_Theme_Train    = arr[6];
    Conf_Theme_Play     = arr[7];
    Conf_Theme_Analise  = arr[8];

    if (config.length < 20) {
        Conf_Time_per_Exerc = DEFAULT_TIME_PER_EXERC;
        Conf_Theme_Train    = DEFAULT_THEME_TRAIN;
        Conf_Theme_Play     = DEFAULT_THEME_PLAY;
        Conf_Theme_Analise  = DEFAULT_THEME_ANALISE;
    }

    if (arr[0] === undefined || arr[0] == '') {
        Conf_Language = DEFAULT_LANGUAGE;
    } else {
        Conf_Language = arr[0];
    }

    if (arr[1] === undefined || arr[1] == '') {
        Conf_Sound = DEFAULT_SOUND;
    } else {
        Conf_Sound = arr[1];
    }

    if (arr[2] === undefined || arr[2] == '') {
        Conf_Time_Teacher = DEFAULT_TIME_TEACHER;
    } else {
        Conf_Time_Teacher = arr[2];
    }

    if (arr[3] === undefined || arr[3] == '') {
        Conf_Time_Games = DEFAULT_TIME_GAMES;
    } else {
        Conf_Time_Games = arr[3];
    }

    if (arr[4] === undefined || arr[4] == '') {
        Conf_Show_Solution = DEFAULT_SHOW_SOLUTION;
    } else {
        Conf_Show_Solution = arr[4];
    }

    if (arr[5] === undefined || arr[5] == '') {
        Conf_Time_per_Exerc = DEFAULT_TIME_PER_EXERC;
    } else {
        Conf_Time_per_Exerc = arr[5];
    }

    if (arr[6] === undefined || arr[6] == '') {
        Conf_Theme_Train = DEFAULT_THEME_TRAIN;
    } else {
        Conf_Theme_Train = arr[6];
    }

    if (arr[7] === undefined || arr[7] == '') {
        Conf_Theme_Play = DEFAULT_THEME_PLAY;
    } else {
        Conf_Theme_Play = arr[7];
    }

    if (arr[8] === undefined || arr[8] == '') {
        Conf_Theme_Analise = DEFAULT_THEME_ANALISE;
    } else {
        Conf_Theme_Analise = arr[8];
    }

    if (Conf_Show_Solution == 0) {        // corrigindo bug na versão 1.5.06
        Conf_Show_Solution = 99;
    }

    Ajusta_Time_Teach_Old_Versions();

    Update_Config();

}


function Set_Conf_Default() {

    Conf_Language       = DEFAULT_LANGUAGE;
    Conf_Sound          = DEFAULT_SOUND;
    Conf_Time_Teacher   = DEFAULT_TIME_TEACHER;
    Conf_Time_Games     = DEFAULT_TIME_GAMES;
    Conf_Show_Solution  = DEFAULT_SHOW_SOLUTION;
    Conf_Time_per_Exerc = DEFAULT_TIME_PER_EXERC;
    Conf_Theme_Train    = DEFAULT_THEME_TRAIN;
    Conf_Theme_Play     = DEFAULT_THEME_PLAY;
    Conf_Theme_Analise  = DEFAULT_THEME_ANALISE;

    Update_Vars();
    Update_Config();

}


function Set_ID_App() {

    ID_App = localStorage.getItem('id_app');

    if (ID_App === null) {
        Is_First_Access = true;
        $("#show_modal_lang_sel").click();
        Create_Local_Storage_Cards();
        ID_App = Create_Id();
        Upload_ID_App();
        Create_Perfil_User();
        Set_Conf_Default();
        localStorage.setItem('num_disp', 0);
    } else {
        Set_Tipo_User();
        Get_User_Category();
        localStorage.setItem('version', VERSION);
        Load_Config();
        Set_Conf_Lang();
        Print_Dados_Pessoais();
        var num_disp = localStorage.getItem('num_disp');
        if (num_disp === null) {
            localStorage.setItem('num_disp', 0);
        }
    }

}





function Update_Config() {

    var old_config = localStorage.getItem('config');
    var new_config = Conf_Language + '~' + Conf_Sound + '~' + Conf_Time_Teacher + '~' + Conf_Time_Games + '~' + Conf_Show_Solution + '~' + Conf_Time_per_Exerc + '~' + Conf_Theme_Train + '~' + Conf_Theme_Play + '~' + Conf_Theme_Analise + '~';
    Reprint_Current_Config();

    if (new_config != old_config) {
        localStorage.setItem('config', new_config);
        Cloud_Change = true;
    }

}


function Upload_ID_App() {

    var vars    = ["new_user", CEL_WIDTH, CEL_APPVERSION, CEL_LANGUAGE];
    Ajax_Connect(vars);

}

