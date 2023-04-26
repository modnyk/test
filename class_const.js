// ....................................................................... class_const.js

"use strict";

const VERSION                       = "1.8.13";
const VERSION_DATE_ENG              = "Jun/20/2022";
const VERSION_DATE_POR              = "20/Junho/2022";
const VERSION_DATE_SPN              = "20/Junio/2022";
const VERSION_DATE_ITA              = "20/Giugno/2022";
const VERSION_DATE_FRA              = "20/Juin/2022";
const VERSION_DATE_GER              = "20/Juni/2022";

const SUB_DIR                       = "1.8";

const DEFAULT_LANGUAGE              = "ENG";
const DEFAULT_TIME_TEACHER          = 1500;
const DEFAULT_TIME_GAMES            = 0;
const DEFAULT_TIME_PER_EXERC        = 90;
const DEFAULT_SHOW_SOLUTION         = 2;
const DEFAULT_THEME_TRAIN           = 'wood';
const DEFAULT_THEME_PLAY            = 'olive';
const DEFAULT_THEME_ANALISE         = 'teal';
const DEFAULT_SOUND                 = 1;

const SHOW_REINFORCE_AFTER          = 10;

const INTERVAL_NEW_SECTION          = 5 * (60 * 1000);
const INTERVAL_MSG_SUPORTE          = 1 * (95 * 1000);
const INTERVAL_SEND_CLOUD           = 1 * (7 * 1000);
const INTERVAL_SEND_TRACKING        = 1 * (33 * 1000);

const CEL_APPVERSION                = navigator.appVersion;
const CEL_LANGUAGE                  = navigator.language;
const CEL_WIDTH                     = $(window).width();


const AUDIO_TYPES = {
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
}

const BREAKLINE                 = '<div class="breakline"></div>';

const HTML_BUTTON_ON            = '<button type="button" class="btn btn-dark config_but_som">ON</button>';
const HTML_BUTTON_OFF           = '<button type="button" class="btn btn-dark config_but_som">OFF</button>';

const IMG_CONGRAT_NIVEL_1       = '<img src="img/congr_n1.png" class="img_congr_nivel">';
const IMG_CONGRAT_NIVEL_2       = '<img src="img/congr_n2.png" class="img_congr_nivel">';
const IMG_CONGRAT_NIVEL_3       = '<img src="img/congr_n3.png" class="img_congr_nivel">';
const IMG_CONGRAT_NIVEL_4       = '<img src="img/congr_n4.png" class="img_congr_nivel">';
const IMG_CONGRAT_NIVEL_5       = '<img src="img/congr_n5.png" class="img_congr_nivel">';


const CLICK_BOARD_BACK              = 'BCK';
const CLICK_BOARD_FORW              = 'FWD';
const CLICK_BOARD_PROX              = 'PRX';
const CLICK_BOARD_STATUS            = 'BST';

const CLICK_BUT_NIVEL_SELEC         = 'NVL';
const CLICK_CARD_TREINAR            = 'TRN';
const CLICK_CARD_IMG                = 'IMG';
const CLICK_CONF_CHANCES            = 'CHC';
const CLICK_CONF_DEFAULT            = 'DFL';
const CLICK_CONF_FLAG               = 'CFL';
const CLICK_CONF_LANG               = 'LNG';
const CLICK_CONF_SOUND              = 'SOM';
const CLICK_CONF_TIME_TEACHER       = 'TIM';
const CLICK_CONF_TIME_PER_EXERC     = 'TPE';

const CLICK_GAME_STAR               = 'STR';
const CLICK_HOME_CARD               = 'CRD';
const CLICK_ICON_CONF               = 'CNF';
const CLICK_ICON_FAV                = 'FAV';
const CLICK_ICON_FAV_DEL            = 'FVD';
const CLICK_ICON_HELP               = 'HLP';
const CLICK_INFO_ICON               = 'INF';
const CLICK_LINE_STATUS             = 'LST';
const CLICK_MENU_BVINDAS            = 'BVN';
const CLICK_MENU_SUPORTE            = 'SUP';
const CLICK_NAV_MENU                = 'NAV';
const CLICK_SEL_COLOR               = 'COL';
const CLICK_SET_ALL_ON              = 'AON';
const CLICK_SET_ALL_OFF             = 'AOF';
const CLICK_SETA_BAR                = 'BAR';
const CLICK_SHOW_ACESSO_LIMIT       = 'LIM';
const CLICK_SHOW_FEEDBACK           = 'FBK';
const CLICK_SHOW_HELP               = 'SHL';
const CLICK_SHOW_LINE               = 'SLN';
const CLICK_SHOW_MODAL_HOME         = 'MOD';
const CLICK_SHOW_REINFORCE          = 'RNF';
const CLICK_SUPORTE_FROM_HOME       = 'SFH'; 
const CLICK_SKIP_TEACH              = 'SKP';
const CLICK_TRAIN_NIVEL             = 'TNV';
const CLICK_USER_ACERTOU            = 'ACT';
const CLICK_USER_ERROU              = 'ERR';
const CLICK_VIEW_GAME               = 'VWG';
const CLICK_ZERAR_CARD              = 'ZER';

const CLICK_30D_AVAL                = 'AVL';
const CLICK_ALERT_ICON              = 'ALR';
const CLICK_HEADER_BACK_BOARD       = 'HBK';
const CLICK_BUY_NOW                 = 'BUY';
const CLICK_CARD_GAMES              = 'GAM';
const CLICK_CANCELA_MERGE           = 'CAM';
const CLICK_CONFIRMA_MERGE          = 'CFM';
const CLICK_CREATE_ACCOUNT          = 'ACC';
const CLICK_GAME_AVAL               = 'GAV';
const CLICK_GAMES_SORT              = 'SRT';
const CLICK_ICON_CLOSE              = 'CLS';
const CLICK_SEND_FEEDBACK           = 'SFB';
const CLICK_SHOW_PARABENS           = 'PRB';
const CLICK_POPUP_NOEXERCS          = 'NOO';
const CLICK_POPUP_NVL_COMEC         = 'NCM';
const CLICK_ZERAR_CONFIRM           = 'ZCF';

const CLICK_BUT_BACK_LINES          = 'BLN';
const CLICK_BUT_BACK_TO_GAMES       = 'BTG';
const CLICK_BUT_BACK_TO_TRAIN       = 'BTT';
const CLICK_BUT_BOARD_HELP          = 'BHL';
const CLICK_BUT_BOARD_STATUS_LINES  = 'BSL';
const CLICK_BUT_BOARD_STATUS_TRAIN  = 'STT';
const CLICK_BUT_CONT_TRAIN_NIVEL    = 'CTN';
const CLICK_BUT_ENGINE_BACK         = 'EBK';
const CLICK_BUT_ENGINE_FF           = 'EFF';
const CLICK_BUT_ENGINE_GAMES        = 'EGM';
const CLICK_BUT_ENGINE_RESUME       = 'ERS';
const CLICK_BUT_ENGINE_TRAIN        = 'ETR';
const CLICK_BUT_FLIP_BOARD          = 'FLP';
const CLICK_BUT_FORCE_RECOVER       = 'FRC';
const CLICK_BUT_FORWARD_LINES       = 'FFL';
const CLICK_BUT_GAME_STAR_OK        = 'GST';
const CLICK_BUT_INICIA_EVAL         = 'EVL';
const CLICK_BUT_LINES               = 'LNH';
const CLICK_MORE_REVIEWS            = 'RVW';
const CLICK_BUT_PLAY_PLAY           = 'PPP'; 
const CLICK_BUT_PLAY_BACK           = 'PBK';
const CLICK_BUT_PLAY_FORWARD        = 'PFF';
const CLICK_BUT_PLAY_RESUME         = 'PRS';
const CLICK_BUT_RECOVER             = 'RCV';
const CLICK_BUT_RECOVER_SEND        = 'RCS';
const CLICK_SHOW_MSG_SUPORTE        = 'MSP';
const CLICK_BUT_SINCRONIZAR         = 'SYN';
const CLICK_BUT_SINC_CONFIRM        = 'SYC';
const CLICK_BUT_SINC_SEND           = 'SYS';
const CLICK_START_NIVEL_NOVO        = 'NNV';
const CLICK_SURVEY_SEND             = 'FBS';
const CLICK_BUT_TREINAR_BACK        = 'TBK';
const CLICK_BUT_TREINAR_FF          = 'TFF';
const CLICK_COMBO_CONF_COLOR        = 'CCL';
const CLICK_COMBO_CONF_COLOR_SQ     = 'CCS';
const CLICK_CARD_GAMES_FAV          = 'GFV';
const CLICK_GENERAL_CONCEPTS        = 'GNC';


const SOUND_CLICK               = Build_Sound("aud/move.wav");
const SOUND_INVALID             = Build_Sound("aud/bleep.mp3");
const SOUND_OK                  = Build_Sound("aud/bell.mp3");
const SOUND_WRONG               = Build_Sound("aud/wrong.wav");

const NOW                       = new Date(Date.now());
const DIA                       = Pad(NOW.getDate(), 2);
const MES                       = Pad(NOW.getMonth() + 1, 2);
const ANO                       = NOW.getFullYear();
const HORA                      = Pad(NOW.getHours(), 2);
const MIN                       = Pad(NOW.getMinutes(), 2);
const SEG                       = Pad(NOW.getSeconds(), 2);

const HOJE                      = ANO + "-" + MES + "-" + DIA;
const AGORA                     = HORA + ":" + MIN + ":" + SEG;

const COLUMNS         	        = "abcdefgh";
const COLUMNS_FLIP    	        = "hgfedcba";
const ROWS            	        = "87654321";
const ROWS_FLIP       	        = "12345678";
const START_POSITION            = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const COLOR = {
    black:			"#000000",
    blue:			"#0099CC",
    grey:			"#CCCCCC",
    green:			"#168E22",
    light_grey:		"#CCCCCC",
    orange:			"#FF6600",
    pink:			"#FF00FF",
    purple:			"#800080",
    red:			"#FF0000",
    teal:			"#008080",
    violet:			"#9933FF",
    wine:			"#CC0000",
    white:			"#FFFFFF",
    yellow:			"#EBEB00"
}

