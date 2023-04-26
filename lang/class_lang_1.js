// ....................................................................... class_lang_1.js

"use strict";



/* ********************************* INCLUIR NO HELP

    if (Show_Alert_To_Sync) {
        Show_Msg("Alerta de Backup e Sincronização", "O Backup automático foi interrompido porque no momento você está sem acesso a Internet. <br><br>Assim que você estiver Online, o sistema voltará a sincronizar automaticamente.");
    }

*/

var Tab_Help            = [];
var Tab_Lang            = [];
var Tab_Lang_150        = [];
var Tab_Lang_151        = [];
var Tab_Lang_Promo      = [];
var Popups              = []; 

function Set_Lang_Selected() {

    if (Conf_Language == "POR") {
        Set_Lang_POR();
        Set_LG_Vars_To_POR();
    }
    if (Conf_Language == "ENG") {
        Set_Lang_ENG();
        Set_LG_Vars_To_ENG();
    }
    if (Conf_Language == "SPN") {
        Set_Lang_SPN();
        Set_LG_Vars_To_SPN();
    }
    if (Conf_Language == "FRA") {
        Set_Lang_FRA();
        Set_LG_Vars_To_FRA();
    }
    if (Conf_Language == "GER") {
        Set_Lang_GER();
        Set_LG_Vars_To_GER();
    }
    if (Conf_Language == "ITA") {
        Set_Lang_ITA();
        Set_LG_Vars_To_ITA();
    }

    Update_Vars();
    Carrega_Lang_To_HTML_IDs();
    Update_Config();

}


function Update_Vars() {

    Tab_Class_Open = ["", Tab_Lang[16], Tab_Lang[17], Tab_Lang[18], Tab_Lang[19], Tab_Lang[20]];

    $("#menu_tipo").html(Class_Open + ". " + Tab_Class_Open[Class_Open]);

    $("#lg_001").html(Tab_Lang[1]);
    $("#lg_002").html(Tab_Lang[2]);
    $("#lg_003").html(Tab_Lang[3]);
    $("#lg_004").html(Tab_Lang[4]);
    $("#lg_005").html(Tab_Lang[5]);
    $("#lg_006").html(Tab_Lang[6]);
    $("#lg_007").html(Tab_Lang[7]);
    $("#lg_008").html(Tab_Lang[8]);
    $("#lg_009").html(Tab_Lang[9]);
    $("#lg_010").html(Tab_Lang[10]);
    $("#lg_011").html(Tab_Lang[11]);
    $("#lg_012").html(Tab_Lang[12]);
    $("#lg_013").html(Tab_Lang[13]);
    $("#lg_014").html(Tab_Lang[14]);
    $("#lg_015").html(Tab_Lang[15]);
    $("#lg_016").html(Tab_Lang[16]);
    $("#lg_017").html(Tab_Lang[17]);
    $("#lg_018").html(Tab_Lang[18]);
    $("#lg_019").html(Tab_Lang[19]);
    $("#lg_020").html(Tab_Lang[20]);
    $("#lg_021").html(Tab_Lang[21]);
    $("#lg_022").html(Tab_Lang[22]);
    $("#lg_023").html(Tab_Lang[23]);
    $("#lg_024").html(Tab_Lang[24]);
    $("#lg_025").html(Tab_Lang[25]);
    $("#lg_026").html(Tab_Lang[26]);
    $("#lg_027").html(Tab_Lang[27]);
    $("#lg_028").html(Tab_Lang[28]);
    $("#lg_029").html(Tab_Lang[29]);
    $("#lg_030").html(Tab_Lang[30]);
    $("#lg_031").html(Tab_Lang[31]);
    $("#lg_032").html(Tab_Lang[32]);
    $("#lg_033").html(Tab_Lang[33]);
    $("#lg_034").html(Tab_Lang[34]);
    $("#lg_035").html(Tab_Lang[35]);
    $("#lg_036").html(Tab_Lang[36]);
    $("#lg_037").html(Tab_Lang[37]);
    $("#lg_038").html(Tab_Lang[38]);
    $("#lg_039").html(Tab_Lang[39]);
    $("#lg_040").html(Tab_Lang[40]);
    $("#lg_041").html(Tab_Lang[41]);
    $("#lg_042").html(Tab_Lang[42]);
    $("#lg_043").html(Tab_Lang[43]);
    $("#lg_044").html(Tab_Lang[44]);
    $("#lg_045").html(Tab_Lang[45]);
    $("#lg_046").html(Tab_Lang[46]);
    $("#lg_047").html(Tab_Lang[47]);
    $("#lg_048").html(Tab_Lang[48]);
    $("#lg_049").html(Tab_Lang[49]);
    $("#lg_050").html(Tab_Lang[50]);
    $("#lg_051").html(Tab_Lang[51]);
    $("#lg_052").html(Tab_Lang[52]);
    $("#lg_053").html(Tab_Lang[53]);
    $("#lg_054").html(Tab_Lang[54]);
    $("#lg_055").html(Tab_Lang[55]);
    $("#lg_056").html(Tab_Lang[56]);
    $("#lg_057").html(Tab_Lang[57]);
    $("#lg_058").html(Tab_Lang[58]);
    $("#lg_059").html(Tab_Lang[59]);
    $("#lg_060").html(Tab_Lang[60]);
    $("#lg_061").html(Tab_Lang[61]);
    $("#lg_062").html(Tab_Lang[62]);
    $("#lg_063").html(Tab_Lang[63]);
    $("#lg_064").html(Tab_Lang[64]);
    $("#lg_065").html(Tab_Lang[65]);
    $("#lg_066").html(Tab_Lang[66]);
    $("#lg_067").html(Tab_Lang[67]);
    $("#lg_068").html(Tab_Lang[68]);
    $("#lg_069").html(Tab_Lang[69]);
    $("#lg_070").html(Tab_Lang[70]);


    $("#lg_080").html(Tab_Lang[80]);
    $("#lg_081").html(Tab_Lang[81]);
    $("#lg_082").html(Tab_Lang[82]);
    $("#lg_083").html(Tab_Lang[83]);
    $("#lg_084").html(Tab_Lang[84]);
    $("#lg_085").html(Tab_Lang[85]);
    $("#lg_086").html(Tab_Lang[86]);
    $("#lg_087").html(Tab_Lang[87]);
    $("#lg_088").html(Tab_Lang[88]);
    $("#lg_089").html(Tab_Lang[89]);

    $("#lg_090").html(Tab_Lang[90]);
    $("#lg_091").html(Tab_Lang[91]);
    $("#lg_100").html(Tab_Lang[100]);
    $("#lg_101").html(Tab_Lang[101]);
    $("#lg_102").html(Tab_Lang[102]);
    $("#lg_103").html(Tab_Lang[103]);
    $("#lg_104").html(Tab_Lang[104]);
    $("#lg_105").html(Tab_Lang[105]);
    $("#lg_106").html(Tab_Lang[106]);
    $("#lg_107").html(Tab_Lang[107]);
    $("#lg_108").html(Tab_Lang[108]);
    $("#lg_109").html(Tab_Lang[109]);

    $("#lg_110").html(Tab_Lang[110]);
    $("#lg_111").html(Tab_Lang[111]);
    $("#lg_112").html(Tab_Lang[112]);
    $("#lg_113").html(Tab_Lang[113]);
    $("#lg_114").html(Tab_Lang[114]);
    $("#lg_115").html(Tab_Lang[115]);
    $("#lg_116").html(Tab_Lang[116]);
    $("#lg_117").html(Tab_Lang[117]);
    $("#lg_118").html(Tab_Lang[118]);
    $("#lg_119").html(Tab_Lang[119]);

    $("#lg_120").html(Tab_Lang[120]);
    $("#lg_121").html(Tab_Lang[121]);
    $("#lg_122").html(Tab_Lang[122]);
    $("#lg_123").html(Tab_Lang[123]);
    $("#lg_124").html(Tab_Lang[124]);
    $("#lg_125").html(Tab_Lang[125]);
    $("#lg_126").html(Tab_Lang[126]);
    $("#lg_127").html(Tab_Lang[127]);
    $("#lg_128").html(Tab_Lang[128]);
    $("#lg_129").html(Tab_Lang[129]);

    $("#lg_130").html(Tab_Lang[130]);
    $("#lg_131").html(Tab_Lang[131]);
    $("#lg_132").html(Tab_Lang[132]);
    $("#lg_133").html(Tab_Lang[133]);
    $("#lg_134").html(Tab_Lang[134]);
    $("#lg_135").html(Tab_Lang[135]);
    $("#lg_136").html(Tab_Lang[136]);
    $("#lg_137").html(Tab_Lang[137]);
    $("#lg_138").html(Tab_Lang[138]);
    $("#lg_139").html(Tab_Lang[139]);

    $("#lg_140").html(Tab_Lang[140]);
    $("#lg_141").html(Tab_Lang[141]);
    $("#lg_142").html(Tab_Lang[142]);
    $("#lg_143").html(Tab_Lang[143]);
    $("#lg_144").html(Tab_Lang[144]);
    $("#lg_145").html(Tab_Lang[145]);
    $("#lg_146").html(Tab_Lang[146]);
    $("#lg_147").html(Tab_Lang[147]);
    $("#lg_148").html(Tab_Lang[148]);
    $("#lg_149").html(Tab_Lang[149]);

    $("#lg_150").html(Tab_Lang[150]);
    $("#lg_151").html(Tab_Lang[151]);
    $("#lg_152").html(Tab_Lang[152]);
    $("#lg_153").html(Tab_Lang[153]);
    $("#lg_154").html(Tab_Lang[154]);
    $("#lg_155").html(Tab_Lang[155]);
    $("#lg_156").html(Tab_Lang[156]);
    $("#lg_157").html(Tab_Lang[157]);
    $("#lg_158").html(Tab_Lang[158]);
    $("#lg_159").html(Tab_Lang[159]);

    $("#lg_160").html(Tab_Lang[160]);
    $("#lg_161").html(Tab_Lang[161]);
    $("#lg_162").html(Tab_Lang[162]);
    $("#lg_163").html(Tab_Lang[163]);
    $("#lg_164").html(Tab_Lang[164]);
    $("#lg_165").html(Tab_Lang[165]);
    $("#lg_166").html(Tab_Lang[166]);
    $("#lg_167").html(Tab_Lang[167]);
    $("#lg_168").html(Tab_Lang[168]);
    $("#lg_169").html(Tab_Lang[169]);

    $("#lg_170").html(Tab_Lang[170]);
    $("#lg_171").html(Tab_Lang[171]);
    $("#lg_172").html(Tab_Lang[172]);
    $("#lg_173").html(Tab_Lang[173]);
    $("#lg_174").html(Tab_Lang[174]);
    $("#lg_175").html(Tab_Lang[175]);
    $("#lg_176").html(Tab_Lang[176]);
    $("#lg_177").html(Tab_Lang[177]);
    $("#lg_178").html(Tab_Lang[178]);
    $("#lg_179").html(Tab_Lang[179]);

    $("#lg_180").html(Tab_Lang[180]);
    $("#lg_181").html(Tab_Lang[181]);
    $("#lg_182").html(Tab_Lang[182]);
    $("#lg_183").html(Tab_Lang[183]);
    $("#lg_184").html(Tab_Lang[184]);
    $("#lg_185").html(Tab_Lang[185]);
    $("#lg_186").html(Tab_Lang[186]);
    $("#lg_187").html(Tab_Lang[187]);
    $("#lg_188").html(Tab_Lang[188]);
    $("#lg_189").html(Tab_Lang[189]);

    $("#lg_190").html(Tab_Lang[190]);
    $("#lg_191").html(Tab_Lang[191]);
    $("#lg_192").html(Tab_Lang[192]);
    $("#lg_193").html(Tab_Lang[193]);
    $("#lg_194").html(Tab_Lang[194]);
    $("#lg_195").html(Tab_Lang[195]);
    $("#lg_196").html(Tab_Lang[196]);
    $("#lg_197").html(Tab_Lang[197]);
    $("#lg_198").html(Tab_Lang[198]);
    $("#lg_199").html(Tab_Lang[199]);

    $("#lg_200").html(Tab_Lang[200]);
    $("#lg_201").html(Tab_Lang[201]);
    $("#lg_202").html(Tab_Lang[202]);
    $("#lg_203").html(Tab_Lang[203]);
    $("#lg_204").html(Tab_Lang[204]);
    $("#lg_205").html(Tab_Lang[205]);
    $("#lg_206").html(Tab_Lang[206]);
    $("#lg_207").html(Tab_Lang[207]);
    $("#lg_208").html(Tab_Lang[208]);
    $("#lg_209").html(Tab_Lang[209]);

    $("#lg_210").html(Tab_Lang[210]);
    $("#lg_211").html(Tab_Lang[211]);
    $("#lg_212").html(Tab_Lang[212]);
    $("#lg_213").html(Tab_Lang[213]);
    $("#lg_214").html(Tab_Lang[214]);
    $("#lg_215").html(Tab_Lang[215]);
    $("#lg_216").html(Tab_Lang[216]);
    $("#lg_217").html(Tab_Lang[217]);
    $("#lg_218").html(Tab_Lang[218]);
    $("#lg_219").html(Tab_Lang[219]);

    $("#lg_220").html(Tab_Lang[220]);
    $("#lg_221").html(Tab_Lang[221]);
    $("#lg_222").html(Tab_Lang[222]);
    $("#lg_223").html(Tab_Lang[223]);
    $("#lg_224").html(Tab_Lang[224]);
    $("#lg_225").html(Tab_Lang[225]);
    $("#lg_226").html(Tab_Lang[226]);
    $("#lg_227").html(Tab_Lang[227]);
    $("#lg_228").html(Tab_Lang[228]);
    $("#lg_229").html(Tab_Lang[229]);

    $("#lg_230").html(Tab_Lang[230]);
    $("#lg_231").html(Tab_Lang[231]);
    $("#lg_232").html(Tab_Lang[232]);
    $("#lg_233").html(Tab_Lang[233]);
    $("#lg_234").html(Tab_Lang[234]);
    $("#lg_235").html(Tab_Lang[235]);
    $("#lg_236").html(Tab_Lang[236]);
    $("#lg_237").html(Tab_Lang[237]);
    $("#lg_238").html(Tab_Lang[238]);
    $("#lg_239").html(Tab_Lang[239]);

    $("#lg_240").html(Tab_Lang[240]);
    $("#lg_241").html(Tab_Lang[241]);
    $("#lg_242").html(Tab_Lang[242]);
    $("#lg_243").html(Tab_Lang[243]);
    $("#lg_244").html(Tab_Lang[244]);
    $("#lg_245").html(Tab_Lang[245]);
    $("#lg_246").html(Tab_Lang[246]);
    $("#lg_247").html(Tab_Lang[247]);
    $("#lg_248").html(Tab_Lang[248]);
    $("#lg_249").html(Tab_Lang[249]);

    $("#lg_250").html(Tab_Lang[250]);
    $("#lg_251").html(Tab_Lang[251]);
    $("#lg_252").html(Tab_Lang[252]);
    $("#lg_253").html(Tab_Lang[253]);
    $("#lg_254").html(Tab_Lang[254]);
    $("#lg_255").html(Tab_Lang[255]);
    $("#lg_256").html(Tab_Lang[256]);
    $("#lg_257").html(Tab_Lang[257]);
    $("#lg_258").html(Tab_Lang[258]);
    $("#lg_259").html(Tab_Lang[259]);

    $("#lg_260").html(Tab_Lang[260]);
    $("#lg_261").html(Tab_Lang[261]);
    $("#lg_262").html(Tab_Lang[262]);
    $("#lg_263").html(Tab_Lang[263]);
    $("#lg_264").html(Tab_Lang[264]);
    $("#lg_265").html(Tab_Lang[265]);
    $("#lg_266").html(Tab_Lang[266]);
    $("#lg_267").html(Tab_Lang[267]);
    $("#lg_268").html(Tab_Lang[268]);
    $("#lg_269").html(Tab_Lang[269]);

    $("#lg_270").html(Tab_Lang[270]);
    $("#lg_271").html(Tab_Lang[271]);
    $("#lg_272").html(Tab_Lang[272]);
    $("#lg_273").html(Tab_Lang[273]);
    $("#lg_274").html(Tab_Lang[274]);
    $("#lg_275").html(Tab_Lang[275]);
    $("#lg_276").html(Tab_Lang[276]);
    $("#lg_277").html(Tab_Lang[277]);
    $("#lg_278").html(Tab_Lang[278]);
    $("#lg_279").html(Tab_Lang[279]);

    $("#lg_280").html(Tab_Lang[280]);
    $("#lg_281").html(Tab_Lang[281]);
    $("#lg_282").html(Tab_Lang[282]);
    $("#lg_283").html(Tab_Lang[283]);
    $("#lg_284").html(Tab_Lang[284]);
    $("#lg_285").html(Tab_Lang[285]);
    $("#lg_286").html(Tab_Lang[286]);
    $("#lg_287").html(Tab_Lang[287]);
    $("#lg_288").html(Tab_Lang[288]);
    $("#lg_289").html(Tab_Lang[289]);

    $("#lg_290").html(Tab_Lang[290]);
    $("#lg_291").html(Tab_Lang[291]);
    $("#lg_292").html(Tab_Lang[292]);
    $("#lg_293").html(Tab_Lang[293]);
    $("#lg_294").html(Tab_Lang[294]);
    $("#lg_295").html(Tab_Lang[295]);
    $("#lg_296").html(Tab_Lang[296]);
    $("#lg_297").html(Tab_Lang[297]);
    $("#lg_298").html(Tab_Lang[298]);
    $("#lg_299").html(Tab_Lang[299]);

    $("#lg_300").html(Tab_Lang[300]);
    $("#lg_301").html(Tab_Lang[301]);
    $("#lg_302").html(Tab_Lang[302]);
    $("#lg_303").html(Tab_Lang[303]);
    $("#lg_304").html(Tab_Lang[304]);
    $("#lg_305").html(Tab_Lang[305]);
    $("#lg_306").html(Tab_Lang[306]);
    $("#lg_307").html(Tab_Lang[307]);
    $("#lg_308").html(Tab_Lang[308]);
    $("#lg_309").html(Tab_Lang[309]);

    $("#lg_310").html(Tab_Lang[310]);
    $("#lg_311").html(Tab_Lang[311]);
    $("#lg_312").html(Tab_Lang[312]);
    $("#lg_313").html(Tab_Lang[313]);
    $("#lg_314").html(Tab_Lang[314]);
    $("#lg_315").html(Tab_Lang[315]);
    $("#lg_316").html(Tab_Lang[316]);
    $("#lg_317").html(Tab_Lang[317]);
    $("#lg_318").html(Tab_Lang[318]);
    $("#lg_319").html(Tab_Lang[319]);

    $("#lg_320").html(Tab_Lang[320]);
    $("#lg_321").html(Tab_Lang[321]);
    $("#lg_322").html(Tab_Lang[322]);
    $("#lg_323").html(Tab_Lang[323]);
    $("#lg_324").html(Tab_Lang[324]);
    $("#lg_325").html(Tab_Lang[325]);
    $("#lg_326").html(Tab_Lang[326]);
    $("#lg_327").html(Tab_Lang[327]);
    $("#lg_328").html(Tab_Lang[328]);
    $("#lg_329").html(Tab_Lang[329]);

    $("#lg_330").html(Tab_Lang[330]);
    $("#lg_331").html(Tab_Lang[331]);
    $("#lg_332").html(Tab_Lang[332]);
    $("#lg_333").html(Tab_Lang[333]);
    $("#lg_334").html(Tab_Lang[334]);
    $("#lg_335").html(Tab_Lang[335]);
    $("#lg_336").html(Tab_Lang[336]);
    $("#lg_337").html(Tab_Lang[337]);
    $("#lg_338").html(Tab_Lang[338]);
    $("#lg_339").html(Tab_Lang[339]);

    $("#lg_340").html(Tab_Lang[340]);
    $("#lg_341").html(Tab_Lang[341]);
    $("#lg_342").html(Tab_Lang[342]);
    $("#lg_343").html(Tab_Lang[343]);
    $("#lg_344").html(Tab_Lang[344]);
    $("#lg_345").html(Tab_Lang[345]);
    $("#lg_346").html(Tab_Lang[346]);
    $("#lg_347").html(Tab_Lang[347]);
    $("#lg_348").html(Tab_Lang[348]);
    $("#lg_349").html(Tab_Lang[349]);

    $("#lg_350").html(Tab_Lang[350]);
    $("#lg_351").html(Tab_Lang[351]);
    $("#lg_352").html(Tab_Lang[352]);
    $("#lg_353").html(Tab_Lang[353]);
    $("#lg_354").html(Tab_Lang[354]);
    $("#lg_355").html(Tab_Lang[355]);
    $("#lg_356").html(Tab_Lang[356]);
    $("#lg_357").html(Tab_Lang[357]);
    $("#lg_358").html(Tab_Lang[358]);
    $("#lg_359").html(Tab_Lang[359]);

    $("#lg_360").html(Tab_Lang[360]);
    $("#lg_361").html(Tab_Lang[361]);
    $("#lg_362").html(Tab_Lang[362]);
    $("#lg_363").html(Tab_Lang[363]);
    $("#lg_364").html(Tab_Lang[364]);
    $("#lg_365").html(Tab_Lang[365]);
    $("#lg_366").html(Tab_Lang[366]);
    $("#lg_367").html(Tab_Lang[367]);
    $("#lg_368").html(Tab_Lang[368]);
    $("#lg_369").html(Tab_Lang[369]);

    $("#lgx_001").html(Tab_Lang_150[1]);
    $("#lgx_002").html(Tab_Lang_150[2]);
    $("#lgx_003").html(Tab_Lang_150[3]);
    $("#lgx_004").html(Tab_Lang_150[4]);
    $("#lgx_005").html(Tab_Lang_150[5]);
    $("#lgx_006").html(Tab_Lang_150[6]);
    $("#lgx_007").html(Tab_Lang_150[7]);
    $("#lgx_008").html(Tab_Lang_150[8]);
    $("#lgx_009").html(Tab_Lang_150[9]);
    $("#lgx_010").html(Tab_Lang_150[10]);

    $("#lgx_011").html(Tab_Lang_150[11]);
    $("#lgx_012").html(Tab_Lang_150[12]);
    $("#lgx_013").html(Tab_Lang_150[13]);
    $("#lgx_014").html(Tab_Lang_150[14]);
    $("#lgx_015").html(Tab_Lang_150[15]);
    $("#lgx_016").html(Tab_Lang_150[16]);
    $("#lgx_017").html(Tab_Lang_150[17]);
    $("#lgx_018").html(Tab_Lang_150[18]);
    $("#lgx_019").html(Tab_Lang_150[19]);
    $("#lgx_020").html(Tab_Lang_150[20]);

    $("#lgx_021").html(Tab_Lang_150[21]);
    $("#lgx_022").html(Tab_Lang_150[22]);
    $("#lgx_023").html(Tab_Lang_150[23]);
    $("#lgx_024").html(Tab_Lang_150[24]);
    $("#lgx_025").html(Tab_Lang_150[25]);
    $("#lgx_026").html(Tab_Lang_150[26]);
    $("#lgx_027").html(Tab_Lang_150[27]);
    $("#lgx_028").html(Tab_Lang_150[28]);
    $("#lgx_029").html(Tab_Lang_150[29]);
    $("#lgx_030").html(Tab_Lang_150[30]);

    $("#lgx_031").html(Tab_Lang_150[31]);
    $("#lgx_032").html(Tab_Lang_150[32]);
    $("#lgx_033").html(Tab_Lang_150[33]);
    $("#lgx_034").html(Tab_Lang_150[34]);
    $("#lgx_035").html(Tab_Lang_150[35]);
    $("#lgx_036").html(Tab_Lang_150[36]);
    $("#lgx_037").html(Tab_Lang_150[37]);
    $("#lgx_038").html(Tab_Lang_150[38]);
    $("#lgx_039").html(Tab_Lang_150[39]);
    $("#lgx_040").html(Tab_Lang_150[40]);

    $("#lgx_041").html(Tab_Lang_150[41]);
    $("#lgx_042").html(Tab_Lang_150[42]);
    $("#lgx_043").html(Tab_Lang_150[43]);
    $("#lgx_044").html(Tab_Lang_150[44]);
    $("#lgx_045").html(Tab_Lang_150[45]);
    $("#lgx_046").html(Tab_Lang_150[46]);
    $("#lgx_047").html(Tab_Lang_150[47]);
    $("#lgx_048").html(Tab_Lang_150[48]);
    $("#lgx_049").html(Tab_Lang_150[49]);
    $("#lgx_050").html(Tab_Lang_150[50]);

    $("#lgx_051").html(Tab_Lang_150[51]);
    $("#lgx_052").html(Tab_Lang_150[52]);
    $("#lgx_053").html(Tab_Lang_150[53]);
    $("#lgx_054").html(Tab_Lang_150[54]);
    $("#lgx_055").html(Tab_Lang_150[55]);
    $("#lgx_056").html(Tab_Lang_150[56]);
    $("#lgx_057").html(Tab_Lang_150[57]);
    $("#lgx_058").html(Tab_Lang_150[58]);
    $("#lgx_059").html(Tab_Lang_150[59]);
    $("#lgx_060").html(Tab_Lang_150[60]);

    $("#lgx_061").html(Tab_Lang_150[61]);
    $("#lgx_062").html(Tab_Lang_150[62]);
    $("#lgx_063").html(Tab_Lang_150[63]);
    $("#lgx_064").html(Tab_Lang_150[64]);
    $("#lgx_065").html(Tab_Lang_150[65]);
    $("#lgx_066").html(Tab_Lang_150[66]);
    $("#lgx_067").html(Tab_Lang_150[67]);
    $("#lgx_068").html(Tab_Lang_150[68]);
    $("#lgx_069").html(Tab_Lang_150[69]);
    $("#lgx_070").html(Tab_Lang_150[70]);

    $("#lgx_071").html(Tab_Lang_150[71]);
    $("#lgx_072").html(Tab_Lang_150[72]);
    $("#lgx_073").html(Tab_Lang_150[73]);
    $("#lgx_074").html(Tab_Lang_150[74]);
    $("#lgx_075").html(Tab_Lang_150[75]);
    $("#lgx_076").html(Tab_Lang_150[76]);
    $("#lgx_077").html(Tab_Lang_150[77]);
    $("#lgx_078").html(Tab_Lang_150[78]);
    $("#lgx_079").html(Tab_Lang_150[79]);
    $("#lgx_080").html(Tab_Lang_150[80]);

    $("#lgx_081").html(Tab_Lang_150[81]);
    $("#lgx_082").html(Tab_Lang_150[82]);
    $("#lgx_083").html(Tab_Lang_150[83]);
    $("#lgx_084").html(Tab_Lang_150[84]);
    $("#lgx_085").html(Tab_Lang_150[85]);
    $("#lgx_086").html(Tab_Lang_150[86]);
    $("#lgx_087").html(Tab_Lang_150[87]);
    $("#lgx_088").html(Tab_Lang_150[88]);
    $("#lgx_089").html(Tab_Lang_150[89]);
    $("#lgx_090").html(Tab_Lang_150[90]);

    $("#lgx_091").html(Tab_Lang_150[91]);
    $("#lgx_092").html(Tab_Lang_150[92]);
    $("#lgx_093").html(Tab_Lang_150[93]);
    $("#lgx_094").html(Tab_Lang_150[94]);
    $("#lgx_095").html(Tab_Lang_150[95]);
    $("#lgx_096").html(Tab_Lang_150[96]);
    $("#lgx_097").html(Tab_Lang_150[97]);
    $("#lgx_098").html(Tab_Lang_150[98]);
    $("#lgx_099").html(Tab_Lang_150[99]);
    $("#lgx_100").html(Tab_Lang_150[100]);

    $("#lgx_101").html(Tab_Lang_150[101]);
    $("#lgx_102").html(Tab_Lang_150[102]);
    $("#lgx_103").html(Tab_Lang_150[103]);
    $("#lgx_104").html(Tab_Lang_150[104]);
    $("#lgx_105").html(Tab_Lang_150[105]);
    $("#lgx_106").html(Tab_Lang_150[106]);
    $("#lgx_107").html(Tab_Lang_150[107]);
    $("#lgx_108").html(Tab_Lang_150[108]);
    $("#lgx_109").html(Tab_Lang_150[109]);
    $("#lgx_110").html(Tab_Lang_150[110]);

    $("#lgx_111").html(Tab_Lang_150[111]);
    $("#lgx_112").html(Tab_Lang_150[112]);
    $("#lgx_113").html(Tab_Lang_150[113]);
    $("#lgx_114").html(Tab_Lang_150[114]);
    $("#lgx_115").html(Tab_Lang_150[115]);
    $("#lgx_116").html(Tab_Lang_150[116]);
    $("#lgx_117").html(Tab_Lang_150[117]);
    $("#lgx_118").html(Tab_Lang_150[118]);
    $("#lgx_119").html(Tab_Lang_150[119]);
    $("#lgx_120").html(Tab_Lang_150[120]);

    $("#lgx_121").html(Tab_Lang_150[121]);
    $("#lgx_122").html(Tab_Lang_150[122]);
    $("#lgx_123").html(Tab_Lang_150[123]);
    $("#lgx_124").html(Tab_Lang_150[124]);
    $("#lgx_125").html(Tab_Lang_150[125]);
    $("#lgx_126").html(Tab_Lang_150[126]);
    $("#lgx_127").html(Tab_Lang_150[127]);
    $("#lgx_128").html(Tab_Lang_150[128]);
    $("#lgx_129").html(Tab_Lang_150[129]);
    $("#lgx_130").html(Tab_Lang_150[130]);

    $("#lgx_131").html(Tab_Lang_150[131]);
    $("#lgx_132").html(Tab_Lang_150[132]);
    $("#lgx_133").html(Tab_Lang_150[133]);
    $("#lgx_134").html(Tab_Lang_150[134]);
    $("#lgx_135").html(Tab_Lang_150[135]);
    $("#lgx_136").html(Tab_Lang_150[136]);
    $("#lgx_137").html(Tab_Lang_150[137]);
    $("#lgx_138").html(Tab_Lang_150[138]);
    $("#lgx_139").html(Tab_Lang_150[139]);
    $("#lgx_140").html(Tab_Lang_150[140]);

    $("#lgx_141").html(Tab_Lang_150[141]);
    $("#lgx_142").html(Tab_Lang_150[142]);
    $("#lgx_143").html(Tab_Lang_150[143]);
    $("#lgx_144").html(Tab_Lang_150[144]);
    $("#lgx_145").html(Tab_Lang_150[145]);
    $("#lgx_146").html(Tab_Lang_150[146]);
    $("#lgx_147").html(Tab_Lang_150[147]);
    $("#lgx_148").html(Tab_Lang_150[148]);
    $("#lgx_149").html(Tab_Lang_150[149]);
    $("#lgx_150").html(Tab_Lang_150[150]);

    $("#lgw_001").html(Tab_Lang_151[1]);
    $("#lgw_002").html(Tab_Lang_151[2]);
    $("#lgw_003").html(Tab_Lang_151[3]);
    $("#lgw_004").html(Tab_Lang_151[4]);
    $("#lgw_005").html(Tab_Lang_151[5]);
    $("#lgw_006").html(Tab_Lang_151[6]);
    $("#lgw_007").html(Tab_Lang_151[7]);
    $("#lgw_008").html(Tab_Lang_151[8]);
    $("#lgw_009").html(Tab_Lang_151[9]);
    $("#lgw_010").html(Tab_Lang_151[10]);

    $("#lgw_011").html(Tab_Lang_151[11]);
    $("#lgw_012").html(Tab_Lang_151[12]);
    $("#lgw_013").html(Tab_Lang_151[13]);
    $("#lgw_014").html(Tab_Lang_151[14]);
    $("#lgw_015").html(Tab_Lang_151[15]);
    $("#lgw_016").html(Tab_Lang_151[16]);
    $("#lgw_017").html(Tab_Lang_151[17]);
    $("#lgw_018").html(Tab_Lang_151[18]);
    $("#lgw_019").html(Tab_Lang_151[19]);
    $("#lgw_020").html(Tab_Lang_151[20]);

    $("#lgw_021").html(Tab_Lang_151[21]);
    $("#lgw_022").html(Tab_Lang_151[22]);
    $("#lgw_023").html(Tab_Lang_151[23]);
    $("#lgw_024").html(Tab_Lang_151[24]);
    $("#lgw_025").html(Tab_Lang_151[25]);
    $("#lgw_026").html(Tab_Lang_151[26]);
    $("#lgw_027").html(Tab_Lang_151[27]);
    $("#lgw_028").html(Tab_Lang_151[28]);
    $("#lgw_029").html(Tab_Lang_151[29]);
    $("#lgw_030").html(Tab_Lang_151[30]);

    $("#lgw_031").html(Tab_Lang_151[31]);
    $("#lgw_032").html(Tab_Lang_151[32]);
    $("#lgw_033").html(Tab_Lang_151[33]);
    $("#lgw_034").html(Tab_Lang_151[34]);
    $("#lgw_035").html(Tab_Lang_151[35]);
    $("#lgw_036").html(Tab_Lang_151[36]);
    $("#lgw_037").html(Tab_Lang_151[37]);
    $("#lgw_038").html(Tab_Lang_151[38]);
    $("#lgw_039").html(Tab_Lang_151[39]);
    $("#lgw_040").html(Tab_Lang_151[40]);

    $("#lgw_041").html(Tab_Lang_151[41]);
    $("#lgw_042").html(Tab_Lang_151[42]);
    $("#lgw_043").html(Tab_Lang_151[43]);
    $("#lgw_044").html(Tab_Lang_151[44]);
    $("#lgw_045").html(Tab_Lang_151[45]);
    $("#lgw_046").html(Tab_Lang_151[46]);
    $("#lgw_047").html(Tab_Lang_151[47]);
    $("#lgw_048").html(Tab_Lang_151[48]);
    $("#lgw_049").html(Tab_Lang_151[49]);
    $("#lgw_050").html(Tab_Lang_151[50]);

    $("#lgw_051").html(Tab_Lang_151[51]);
    $("#lgw_052").html(Tab_Lang_151[52]);
    $("#lgw_053").html(Tab_Lang_151[53]);
    $("#lgw_054").html(Tab_Lang_151[54]);
    $("#lgw_055").html(Tab_Lang_151[55]);
    $("#lgw_056").html(Tab_Lang_151[56]);
    $("#lgw_057").html(Tab_Lang_151[57]);
    $("#lgw_058").html(Tab_Lang_151[58]);
    $("#lgw_059").html(Tab_Lang_151[59]);
    $("#lgw_060").html(Tab_Lang_151[60]);


    var tab_source = [1, 2, 3, 4];
    var tab_posics = [34, 35, 36, 37];
    $('#user_tempo').empty();
    $('#user_tempo').append('<option value="0"></option>');
    for (var i=0; i < tab_source.length; i++) {
        $('#user_tempo').append('<option value="' + tab_source[i] + '">' + Tab_Lang[tab_posics[i]] + '</option>');
    }

    var tab_source = [1, 2, 3, 4, 9];
    var tab_posics = [41, 42, 43, 44, 45];
    $('#user_source').empty();
    $('#user_source').append('<option value="0"></option>');
    for (var i=0; i < tab_source.length; i++) {
        $('#user_source').append('<option value="' + tab_source[i] + '">' + Tab_Lang[tab_posics[i]] + '</option>');
    }

    $('#user_sexo').empty();
    $('#user_sexo').append('<option value="0" disabled="disabled" selected></option>');
    $('#user_sexo').append('<option value="M">' + Tab_Lang[30] + '</option>');
    $('#user_sexo').append('<option value="F">' + Tab_Lang[31] + '</option>');

    $('#board_time_teacher').empty();
    $('#board_time_teacher').append('<option value="900">' + Tab_Lang_150[44] + '</option>');
    $('#board_time_teacher').append('<option value="1500">' + Tab_Lang_150[45] + '</option>');
    $('#board_time_teacher').append('<option value="2500">' + Tab_Lang_150[46] + '</option>');
    $('#board_time_teacher').append('<option value="5000">' + Tab_Lang_150[47] + '</option>');

    $('#chances_exerc').empty();
    $('#chances_exerc').append('<option value="1">' + Tab_Lang_150[49] + '</option>');
    $('#chances_exerc').append('<option value="2">' + Tab_Lang_150[50] + '</option>');
    $('#chances_exerc').append('<option value="3">' + Tab_Lang_150[51] + '</option>');
    $('#chances_exerc').append('<option value="99">' + Tab_Lang_150[52] + '</option>');

}




function Set_Lang_POR() {

    Tab_Lang[1]     = 'IMPORTANTE';
    Tab_Lang[2]     = 'Essa é uma <b>versão Beta</b>, estamos fazendo experimentos para a construção desse produto.';
    Tab_Lang[3]     = 'Algumas características podem ser <b>desativadas sem aviso prévio</b>.';
    Tab_Lang[4]     = 'Seu histórico de treinamento poderá ser perdido durante o período de testes.';
    Tab_Lang[5]     = 'Uso <span style="color: #0099FF; font-weight: bold;">100% gratuito</span> até <span style="color: #0099FF; font-weight: bold;">31/07/21</span>, podendo ser prorrogado mediante cadastramento e envio de feedback.';
    Tab_Lang[6]     = 'Eu concordo';
    Tab_Lang[7]     = 'Você concluiu esse nível!';
    Tab_Lang[8]     = 'Você concluiu esse card!';
    Tab_Lang[9]     = 'Parabéns!';
    Tab_Lang[10]    = 'CONFIGURAÇÕES';
    Tab_Lang[11]    = 'Som:';
    Tab_Lang[12]    = 'Idioma:';
    Tab_Lang[13]    = 'Cancelar';
    Tab_Lang[14]    = 'Salvar';
    Tab_Lang[15]    = 'Selecione uma cor';
    Tab_Lang[16]    = 'Aberturas abertas';
    Tab_Lang[17]    = 'Aberturas semi-abertas';
    Tab_Lang[18]    = 'Aberturas fechadas';
    Tab_Lang[19]    = 'Aberturas semi-fechadas';
    Tab_Lang[20]    = 'Aberturas de flanco';
    Tab_Lang[21]    = 'Próximos lançamentos';
    Tab_Lang[22]    = 'Próxima';
    Tab_Lang[23]    = 'Teoria de Aberturas';
    Tab_Lang[24]    = 'Favoritas';
    Tab_Lang[25]    = 'Minha Conta';
    Tab_Lang[26]    = 'Nome';
    Tab_Lang[27]    = 'E-mail';
    Tab_Lang[28]    = 'País:';
    Tab_Lang[29]    = 'Sexo';
    Tab_Lang[30]    = 'Masculino';
    Tab_Lang[31]    = 'Feminino';
    Tab_Lang[32]    = 'Data de nascimento';
    Tab_Lang[33]    = 'Há quanto tempo joga Xadrez?';
    Tab_Lang[34]    = 'Menos de 3 meses';
    Tab_Lang[35]    = 'De 3 meses a 1 ano';
    Tab_Lang[36]    = 'Entre 1 e 5 anos';
    Tab_Lang[37]    = 'Mais de 5 anos';
    Tab_Lang[38]    = 'Qual o seu rating?';
    Tab_Lang[39]    = 'Não sei / Não tenho';
    Tab_Lang[40]    = 'Como descobriu nosso App?';
    Tab_Lang[41]    = 'Indicação de amigo';
    Tab_Lang[42]    = 'Redes sociais';
    Tab_Lang[43]    = 'Anúncio';
    Tab_Lang[44]    = 'Apple Store/Google Play';
    Tab_Lang[45]    = 'Outros';
    Tab_Lang[46]    = 'Especificar: (opcional)';
    Tab_Lang[47]    = 'Enviar';
    Tab_Lang[48]    = 'Ajuda';
    Tab_Lang[49]    = 'REPORTAR ERRO';

    Tab_Lang[50]    = 'DICA IMPORTANTE';
    Tab_Lang[51]    = 'Repita mentalmente o <b>nome das peças</b>, na medida que os lances forem sendo mostrados. Ex: Peão, Peão, Cavalo, Bispo...<br><br>Se ainda assim estiver difícil, repita o nome das peças <b>em voz alta</b>.';

    Tab_Lang[52]    = '-----';
    Tab_Lang[53]    = '-----';
    Tab_Lang[54]    = '-----';
    Tab_Lang[55]    = '-----';
    Tab_Lang[56]    = '-----';
    Tab_Lang[57]    = '-----';
    Tab_Lang[58]    = '-----';
    Tab_Lang[59]    = '-----';
    Tab_Lang[60]    = '-----';
    Tab_Lang[61]    = '-----';
    Tab_Lang[62]    = 'Mensagem de Erro';
    Tab_Lang[63]    = 'Houve uma falha na hora de fazer o seu Cadastro. Por favor, tente novamente. Se o erro persistir, contate nosso suporte.';
    Tab_Lang[64]    = 'Falha ao acessar o servidor';
    Tab_Lang[65]    = 'Obrigado';
    Tab_Lang[66]    = 'Obrigado por nos ajudar a fazer um produto cada vez melhor!';

    Tab_Lang[80]    = 'Envie-nos a sua opinião sobre esse app e ganhe <b>+ 15 dias de acesso Grátis</b>!';
    Tab_Lang[81]    = 'Que nota você daria para cada um dos tópicos abaixo?';
    Tab_Lang[82]    = 'Design';
    Tab_Lang[83]    = 'Facilidade';
    Tab_Lang[84]    = 'Método';
    Tab_Lang[85]    = 'Aberturas';
    Tab_Lang[86]    = 'Partidas';
    Tab_Lang[87]    = 'Teoria';
    Tab_Lang[88]    = 'Quais as 3 coisas que você mais gostou em nosso app?';
    Tab_Lang[89]    = 'Quais as 3 coisas que você menos gostou em nosso app?';
    Tab_Lang[90]    = 'Comentários adicionais:';
    Tab_Lang[91]    = 'Enviar';

    Tab_Lang[92]    = 'linha';
    Tab_Lang[93]    = 'linhas';

    Tab_Lang[100]   = 'O seu cadastro foi efetuado com sucesso!';
    Tab_Lang[101]   = '';
    Tab_Lang[102]   = 'Enviamos um email para @user_email';
    Tab_Lang[103]   = 'Para confirmar a sua conta, por favor, acesse a sua caixa de emails e clique no botão <b>VERIFY</b>';
    Tab_Lang[104]   = 'Se você não recebeu nosso email, por favor verifique a sua caixa de Spam';
    Tab_Lang[105]   = 'Se precisar de ajuda, <span onclick="Show_Suporte_Section();" style="color: #0066FF;">clique aqui.</span>';
    Tab_Lang[106]   = 'Em construção';
    Tab_Lang[107]   = 'Obrigado pelos seus comentários';

    Tab_Lang[108]   = 'Sobre esse App';
    Tab_Lang[109]   = 'Essa é uma <b>versão Beta</b>, estamos fazendo experimentos para a construção desse produto. Novas características irão sendo incorporadas gradativamente a cada nova versão, que deverá ser lançada a cada duas semanas.';
    Tab_Lang[110]   = 'Nossa metodologia de treinamento é baseada na memorização das posições principais de cada abertura, das linhas mais jogadas pelos maiores jogadores do mundo, durante os últimos 50 anos.';
    Tab_Lang[111]   = 'O aplicativo abrange um total de mais de 8 mil linhas, divididas em aproximadamente 120 cards (48 disponíveis na versão atual).';
    Tab_Lang[112]   = 'Cada card contém entre 20 a 150 linhas, que deverão ser treinadas progressivamente do nível 1 ao 5, sempre na mesma sequência.';
    Tab_Lang[113]   = 'No nível 1, você deverá repetir os primeiros 4 lances de cada linha.';
    Tab_Lang[114]   = 'Na medida que cada nível vai sendo completado, acrescenta-se dois lances, aumentando dessa forma gradativamente a dificuldade de cada exercício. No nível 5 vocè deverá repetir até 12 lances.';
    Tab_Lang[115]   = 'Esse sistema de treinamento já foi testado com sucesso em grupos pequenos, em um outro app experimental.';
    Tab_Lang[116]   = 'Garantimos a utilização gratuita desse aplicativo até o dia 31 de julho de 2021.';
    Tab_Lang[117]   = 'Opcionalmente você poderá estender esse período em até 60 dias, mediante cadastramento e nos enviando o seu feedback com críticas e sugestões.';
    Tab_Lang[118]   = 'Sugestões e críticas, bem como correções das traduções serão sempre bem-vindas e também poderão ser feitas pelo email: <b>support@promasterchess.com</b>';
    Tab_Lang[119]   = 'Quem Somos';
    Tab_Lang[120]   = 'Somos uma pequena equipe de entusiastas do Xadrez, estudandes de neurociência, profissionais de TI and especialistas em design gráfico, que nos últimos dois anos tem trabalhado para desenvolver um método eficiente para treinar aberturas de uma forma intuitiva e com resultados rápidos, especialmente para aquele grupo de jogadores que não dispõem de muito tempo para estudar.';
    Tab_Lang[121]   = 'Disclaimer';
    Tab_Lang[122]   = 'Essa é uma versão Beta, estamos fazendo experimentos para a construção desse produto.';
    Tab_Lang[123]   = 'Algumas características podem ser desativadas sem aviso prévio.';
    Tab_Lang[124]   = 'Seu histórico de treinamento poderá ser perdido durante o período de testes.';
    Tab_Lang[125]   = 'Uso 100% gratuito até 31/07/21, podendo ser prorrogado mediante cadastramento e envio de feedback.';

    Tab_Lang [130] = 'Card Reset';
    Tab_Lang [131] = 'Essa operação apagará todo o histórico de treinamento desse card.';
    Tab_Lang [132] = 'Você tem certeza que quer zerar esse card?';
    Tab_Lang [133] = 'Cancelar';
    Tab_Lang [134] = 'Confirmar';
    Tab_Lang [135] = 'Cancelar';
    Tab_Lang [136] = 'Sim';
    Tab_Lang [137] = 'Cancelar';
    Tab_Lang [138] = 'Sim';
    Tab_Lang [139] = 'BOAS-VINDAS';

    Tab_Lang [140] = 'O Jeito Mais Fácil e Divertido de Evoluir no Xadrez';
    Tab_Lang [141] = 'O aplicativo <b>Chess Openings Pró-Master</b> contém tudo o que você precisa para entender e dominar o intrincado mundo das Aberturas do Xadrez.';
    Tab_Lang [142] = 'Você <b>escolhe a abertura</b> que quer estudar e o sistema vai te mostrando as principais linhas.';
    Tab_Lang [143] = 'Tudo o que você precisa fazer é <b>repetir os lances que o computador fizer';
    Tab_Lang [144] = 'No nível 1 são apenas <b>os primeiros 4 movimentos</b> de cada lado. Concluído esse nível, o grau de dificuldade vai aumentando gradativamente para 6, 8, 10 e até 12 lances.';
    Tab_Lang [145] = 'Com esse método, além de melhorar o seu jogo na abertura, você vai registrar em seu inconsciente <b>uma enorme quantidade de padrões de jogadas</b>, que passarão a ser acessados intuitivamente nas suas próximas partidas.';
    Tab_Lang [146] = 'Treine 15 dias, durante 15 minutos por dia e veja a <b>diferença dos resultados</b>, comparando com qualquer outro tipo de treinamento!';
    Tab_Lang [147] = 'Começar Agora';
    Tab_Lang [148] = 'Boas-Vindas';
    Tab_Lang [149] = 'Configurações';

    Tab_Lang [150] = 'Suporte';
    Tab_Lang [151] = '1. GENERAL CONCEPTS';
    Tab_Lang [152] = '2. EXERCÍCIOS POR NIVEL';
    Tab_Lang [153] = '4 lances';
    Tab_Lang [154] = '6 lances';
    Tab_Lang [155] = '8 lances';
    Tab_Lang [156] = '10 lances';
    Tab_Lang [157] = '12 lances';
    Tab_Lang [158] = '3. ECO';
    Tab_Lang [159] = '4. PARTIDAS';

    Tab_Lang [160] = 'Zerar esse Card';
    Tab_Lang [161] = 'FAVORITOS';
    Tab_Lang [162] = 'MINHA CONTA';
    Tab_Lang [163] = 'Version:';
    Tab_Lang [164] = 'DADOS PESSOAIS';
    Tab_Lang [165] = 'Crie a sua conta agora e ganhe mais 15 dias de acesso Grátis!';
    Tab_Lang [166] = 'Demora menos de 1 minuto!';
    Tab_Lang [167] = 'Criar conta';
    Tab_Lang [168] = 'ASSINATURA';
    Tab_Lang [169] = 'Validade:';

    Tab_Lang [170] = 'Histórico';
    Tab_Lang [171] = 'Renovar';
    Tab_Lang [172] = 'FEEDBACKS';
    Tab_Lang [173] = 'Thank you! :)';
    Tab_Lang [174] = 'Último feedback:';
    Tab_Lang [175] = 'Novo Feedback';
    Tab_Lang [176] = 'FEEDBACK';
    Tab_Lang [177] = 'Envie-nos a sua opinião sobre esse app e ganhe + <span style="color: #F038A3">15 dias Grátis!</span>';
    Tab_Lang [178] = 'CRIAR CONTA';
    Tab_Lang [179] = 'Crie a sua conta agora e ganhe + <span style="color: #F038A3">15 dias Grátis</span>';

    Tab_Lang [180] = 'Algo estava errado! Seu pedido não pode ser concluído. Por favor, entre em contato com nosso Suporte para solucionar este problema.';
    Tab_Lang [181] = '';
    Tab_Lang [182] = '';
    Tab_Lang [183] = '';
    Tab_Lang [184] = '';
    Tab_Lang [185] = '';
    Tab_Lang [186] = '';
    Tab_Lang [187] = '';
    Tab_Lang [188] = '';
    Tab_Lang [189] = '';

    Tab_Lang [190] = '';
    Tab_Lang [191] = ''
    Tab_Lang [193] = '';
    Tab_Lang [194] = '';
    Tab_Lang [195] = 'SUPORTE';
    Tab_Lang [196] = 'Esse canal serve para você rapidamente reportar <b>eventuais problemas</b> do aplicativo, bem como enviar suas <b>dúvidas</b>, <b>críticas</b> e <b>sugestões</b>.';
    Tab_Lang [197] = 'Mensagens anteriores';
    Tab_Lang [198] = 'Envie sua mensagem';
    Tab_Lang [199] = 'Enviar';

    Tab_Lang [200] = 'CONFIGURAÇÕES';
    Tab_Lang [201] = '';
    Tab_Lang [202] = '';
    Tab_Lang [203] = 'Reportar Erro';
    Tab_Lang [204] = 'Esse exercício está errado?';
    Tab_Lang [205] = 'Obrigado!';
    Tab_Lang [206] = 'TREINAR';
    Tab_Lang [207] = 'Criar conta';
    Tab_Lang [208] = 'SHOPPING';
    Tab_Lang [209] = '';

    Tab_Lang [210] = '';
    Tab_Lang [211] = '';
    Tab_Lang [212] = 'As negras levaram xeque-mate';
    Tab_Lang [213] = 'As negras abandonam';
    Tab_Lang [214] = 'As brancas levaram xeque-mate';
    Tab_Lang [215] = 'As brancas abandonam';
    Tab_Lang [216] = 'Empate por afogamento';
    Tab_Lang [217] = 'Empate por repetição';
    Tab_Lang [218] = 'Empate por material insuficiente';
    Tab_Lang [219] = 'Empate pela regra dos 50 lances';

    Tab_Lang [220] = 'Empate de comum acordo';
    Tab_Lang [221] = 'Use as setas para começar';
    Tab_Lang [222] = 'Você ainda não tem mensagens.';
    Tab_Lang [223] = 'RESERVADO';
    Tab_Lang [224] = 'Avaliação de Partida';
    Tab_Lang [225] = 'Incremento Gradativo de Dificuldade';
    Tab_Lang [226] = 'Os exercícios de cada card são divididos em 5 níveis:<li>Nível 1 = Os primeiros 4 lances</li><li>Nível 2 = Os primeiros 6 lances</li><li>Nível 3 = Os primeiros 8 lances</li><li>Nível 4 = Os primeiros 10 lances</li><li>Nível 5 = Os primeiros 12 lances</li><br>É necessário completar um nível antes de passar para o próximo.';
    Tab_Lang [227] = 'Facilidade para Localizar as Aberturas';
    Tab_Lang [228] = 'A ECO (Encyclopaedia of Chess Openings) é uma coleção de livros que descreve todas as aberturas de xadrez conhecidas usando um sistema padrão de codificação internacional.<br><br>Cada ECO descreve de forma resumida as melhores linhas e variantes de cada abertura.<br><br>Cada card pode conter um ou mais desse códigos.';
    Tab_Lang [229] = 'Aprenda com os melhores GM´s do Mundo.';

    Tab_Lang [230] = 'Cada card contém de 20 a 30 partidas que podem ser estudadas como referência.<br><br>Ao reproduzir uma partida você capta as ideias estratégicas e táticas mais comuns à abertura que está estudando.<br><br>Quanto mais vezes você assistir uma partida, melhor será o seu feeling para esse tipo de posição.<br><br>Assista cada uma das partidas várias vezes para poder compreendê-la bem.<br><br>Ao reproduzir as partidas, tente antecipar os lances do lado vencedor. Quanto mais fizer isso, mais rapidamente o seu jogo evoluirá.';
    Tab_Lang [231] = 'Sua opinião é muito importante para nós';
    Tab_Lang [232] = 'Você poderá se comunicar conosco em <b>Inglês</b>, <b>Português</b>, <b>Espanhol</b> e <b>Alemão.</b><br><br>Faremos o possível para responder todas as mensagens em até <b>24 horas</b>.';
    Tab_Lang [233] = '';
    Tab_Lang [234] = '';
    Tab_Lang [235] = '';
    Tab_Lang [236] = '';
    Tab_Lang [237] = '';
    Tab_Lang [238] = '';
    Tab_Lang [239] = '';

    Tab_Lang [240] = 'Tá gostando de nosso app?';
    Tab_Lang [241] = 'Enviar Opinião';
    Tab_Lang [242] = 'Create Account';
    Tab_Lang [243] = 'Send Feedback';
    Tab_Lang [244] = 'Conexão com o servidor indisponível. Por favor, verifique sua conexão com a Internet.';
    Tab_Lang [245] = 'Treinar';
    Tab_Lang [246] = 'Partidas';
    Tab_Lang [247] = 'Você ainda não tem nenhum Card favorito.';
    Tab_Lang [248] = 'Esse exercício contém erros e será pulado.';
    Tab_Lang [249] = '';

    Tab_Lang [250] = 'há alguns segundos';
    Tab_Lang [251] = 'há';
    Tab_Lang [252] = 'minuto';
    Tab_Lang [253] = 'minutos';
    Tab_Lang [254] = 'hora';
    Tab_Lang [255] = 'horas';
    Tab_Lang [256] = 'dia';
    Tab_Lang [257] = 'dias';
    Tab_Lang [258] = 'semana';
    Tab_Lang [259] = 'semanas';

    Tab_Lang [260] = 'Compra efetuada com sucesso';
    Tab_Lang [261] = 'Obrigado, sua compra foi bem-sucedida.<br><br>Graças ao seu apoio, poderemos continuar trabalhando para que você tenha um produto cada vez melhor!';
    Tab_Lang [262] = 'Olha esse app para treinar Xadrez:';
    Tab_Lang [263] = 'Seu período de teste gratuito tem @ dias restantes.';
    Tab_Lang [264] = 'Acesso temporariamente suspenso';
    Tab_Lang [265] = 'Para renovar seu acesso aos exercícios, visite nossa Loja.';
    Tab_Lang [266] = 'Crie uma conta e envie-nos seus comentários para estender seu período de teste gratuito.';
    Tab_Lang [267] = 'Comprar agora';
    Tab_Lang [268] = 'Avaliar';
    Tab_Lang [269] = 'PROMOÇÃO DE LANÇAMENTO';

    Tab_Lang [270] = '30% OFF!';
    Tab_Lang [271] = 'Válido até: 15 de setembro de 2021';
    Tab_Lang [272] = 'PLANOS DE ASSINATURAS';
    Tab_Lang [273] = 'Get it NOW!';
    Tab_Lang [274] = 'O período de assinatura contratado será acrescentado ao seu período restante de utilização gratuita, se houver.';
    Tab_Lang [275] = 'Nenhum custo adicional para as novas versões e novos conteúdos durante o período contratado!';
    Tab_Lang [276] = 'Acesso instantâneo!';
    Tab_Lang [277] = 'Todos os planos garantem 100% de acesso a futuras versões durante o período contratado!';
    Tab_Lang [278] = '';
    Tab_Lang [279] = '';

    Tab_Lang [300] = 'Alguns princípios gerais';
    Tab_Lang [301] = '1. Desenvolva rapidamente todas as peças ';
    Tab_Lang [302] = 'O objetivo principal na abertura é desenvolver as peças e fazer o roque o mais rápido possível.';
    Tab_Lang [303] = 'A abertura é concluída quando um ou ambos os jogadores têm suas torres conectadas.';
    Tab_Lang [304] = 'O jogador que terminar primeiro o desenvolvimento ganha a iniciativa.';
    Tab_Lang [305] = '2. Desenvolva os cavalos antes dos bispos';

    Tab_Lang [306] = 'Embora os Bispos possam controlar várias casas de sua posição original, se não houver peões obstruindo seu caminho, os Cavalos dominam apenas as casas vizinhas e demoram mais para chegar ao campo do oponente, porque são peças menos móveis.';
    Tab_Lang [307] = '3. Não mova a mesma peça duas vezes durante a abertura ';
    Tab_Lang [308] = 'Tente colocar suas peças na melhor posição possível no primeiro movimento.';
    Tab_Lang [309] = 'É uma perda de tempo mover a mesma peça mais de uma vez durante a abertura e pode custar-lhe a iniciativa no jogo.';
    Tab_Lang [310] = '4. Não faça movimentos de peões desnecessários durante a abertura ';
    Tab_Lang [311] = 'Os movimentos do peão devem ser restringidos durante a abertura, porque o tempo envolvido nesses movimentos pode ser aplicado para desenvolver outra peça.';
    Tab_Lang [312] = 'Geralmente, o movimento de peões é adequado quando tem a finalidade de ocupar o centro ou abrir diagonais para a dama e os bispos.';

    Tab_Lang [313] = '5. Não dê xeques desnecessários';
    Tab_Lang [314] = 'Xeque desnecessário é aquele que pode ser facilmente defendido pelo adversário.';
    Tab_Lang [315] = 'Durante a abertura a maioria dos xeques pode ser defendida com lances que favorecem o desenvolvimento.';
    Tab_Lang [316] = '6. Não abra a posição se você estiver atrasado em desenvolvimento';
    Tab_Lang [317] = 'Uma posição aberta sempre favorece o bando com mais peças em jogo e, portanto, só deve ser provocada por quem está com vantagem em desenvolvimento.';
    Tab_Lang [318] = '7. Na abertura coloque a Dama atrás da sua própria linha de peões';
    Tab_Lang [319] = 'Por ser uma peça muito poderosa , a dama também é uma peça muito vulnerável e alvo constante de ataque adversário.';
    Tab_Lang [320] = 'Por isso, durante a abertura é conveniente colocá-la atrás de um peão , preferivelmente na segunda fila, liberando a primeira fila para o desenvolvimento das torres.';
    Tab_Lang [321] = '8. Nunca troque peça desenvolvida por peça não desenvolvida';
    Tab_Lang [322] = 'Em geral é um péssimo negócio trocar uma peça bem colocada por uma peça mal colocada.';
    Tab_Lang [323] = 'Quando você troca uma peça desenvolvida por uma peça não desenvolvida adversária, você perde o tempo consumido por aquela peça e a mesma coisa é válida se você trocar uma peça que se moveu várias vezes, por uma do adversário que moveu-se apenas uma vez.';
    Tab_Lang [324] = '9. Faça o roque o mais rápido possível';
    Tab_Lang [325] = 'A segurança do rei é um dos mais importantes fatores durante a abertura e o meio-jogo.';
    Tab_Lang [326] = 'O rei no centro, principalmente em posições abertas, estará sempre vulnerável a ataques do adversário.';
    Tab_Lang [327] = 'Rocar significa colocar o seu rei confortavelmente atrás de uma barreira de peões e permitir o desenvolvimento de uma torre que rapidamente poderá ocupar uma coluna aberta ou semi-aberta.';
    Tab_Lang [328] = '10. O roque pequeno é mais seguro do que o roque grande';
    Tab_Lang [329] = 'Além de mais rápido (você só precisa mover duas peças), o roque pequeno deixa o rei mais longe do centro e mais seguro atrás de uma fileira de peões protegidos.';
    Tab_Lang [330] = 'No entanto, fazer o roque na ala oposta ao do adversário, pode ser muito interessante para criar mais chances de ataque.';
    Tab_Lang [331] = '11. Tente impedir o roque do seu adversário';
    Tab_Lang [332] = 'Se o seu adversário está demorando muito para rocar, tente prolongar ainda mais a sua estadia no centro.';
    Tab_Lang [333] = 'Uma das maneiras mais usuais de se fazer isso é controlar uma das casas de passagem do rei (normalmente f1 ou f8, no caso do roque pequeno).';
    Tab_Lang [334] = 'Manter o rei adversário no centro, na maioria das vezes, vale o sacrifício de um peão.';
    Tab_Lang [335] = '12. Domine o maior território possível';
    Tab_Lang [336] = 'Aquele que possui vantagem de espaço dispõe de maior mobilidade para suas peças e, portanto, mais flexibilidade em transferir suas peças de uma ala para a outra.';
    Tab_Lang [337] = 'Enquanto que, aquele que está numa posição restringida, tem dificuldade de manobrar suas peças , o que pode ser fatal se elas forem requeridas para a defesa do rei.';
    Tab_Lang [338] = '13. Avance peões para ganhar espaço';
    Tab_Lang [339] = 'Embora o avanço de peões seja o principal recurso para restringir a posição inimiga, essa regra deve ser observada com cuidado, pois quanto mais distante os peões estiverem da sua base se tornam mais difíceis de serem defendidos.';
    Tab_Lang [340] = 'Além do mais, cada avanço de peão cria fraquezas em suas adjacências , que podem vir a ser ocupadas por peças inimigas.';
    Tab_Lang [341] = '14. Coloque os seus peões no centro';
    Tab_Lang [342] = 'O centro no tabuleiro de xadrez é formado pelas casas e4 , e5 , d4 , d5. As casas do chamado centro expandido também incluem as casas compostas pelo quadrado c3 , c6 , f3 e f6.';
    Tab_Lang [343] = 'Os peões são as melhores unidades para a criação do centro porque, diferentemente das peças, eles não são vulneráveis ao ataque dos peões inimigos.';
    Tab_Lang [344] = '15. Mantenha suas peças o mais próximo possível do centro';
    Tab_Lang [345] = 'Uma peça no centro controla mais casas do que em qualquer outra parte do tabuleiro. Enquanto um cavalo colocado no centro pode se mover para oito casas, um cavalo situado em um dos cantos tem apenas duas opções de movimento.';
    Tab_Lang [346] = 'O controle do centro também é importante porque é através dele que as peças se movimentam de um lado para o outro do tabuleiro e, se as suas peças conseguem se movimentar mais rapidamente do que as peças do seu adversário, então você terá mais chances de criar um ataque bem-sucedido.';
    Tab_Lang [347] = '16. Nas trocas de peões tente aproximá-los ao máximo do centro';
    Tab_Lang [348] = 'Como os peões centrais são mais importantes que os peões laterais, sempre que o seu adversário capturar uma de suas peças e você tiver a possibilidade de retomar a peça inimiga com dois peões diferentes, é aconselhável que se tome com o peão que, após a retomada, ficará mais próximo do centro.';
    Tab_Lang [349] = '17. Controle o centro antes de Atacar';
    Tab_Lang [350] = 'Os ataques bem-sucedidos nas alas dependem em grande parte do controle do centro. Portanto, antes de iniciar qualquer ataque pelos flancos preocupe-se em manter um centro forte e estável.';
    Tab_Lang [351] = '18. As torres devem ocupar rapidamente as colunas abertas ou semi-abertas';
    Tab_Lang [352] = 'Durante a abertura, as torres são as últimas peças a serem desenvolvidas. Elas são efetivas quando ocupam uma coluna aberta ou semi-aberta.';
    Tab_Lang [353] = 'Geralmente, as casas ideais para se colocarem as torres são e1, d1 e c1 (e8, d8 e c8 para as pretas), porque nessas posições elas conseguem exercer pressão no centro e ao mesmo tempo defender a retaguarda.';
    Tab_Lang [354] = 'Contudo, uma torre pode ser ainda uma defesa eficiente quando colocada na segunda fila, enquanto continua operando agressivamente na coluna.';
    Tab_Lang [355] = '19. Pense na defesa primeiro';
    Tab_Lang [356] = 'O princípio mais importante no xadrez é a segurança. A cada lance do adversário, pare e pergunte a você mesmo:';
    Tab_Lang [357] = '- O que esse lance está ameaçando?';
    Tab_Lang [358] = '- Quais as intenções do meu adversário?';
    Tab_Lang [359] = '- O que eu faria se estivesse no lugar dele?';
    Tab_Lang [360] = '20. Considerações finais';
    Tab_Lang [361] = 'O xadrez não é uma ciência exata e os conselhos e conceitos apresentados aqui não são aplicados em 100% dos casos e não devem ser seguidos cegamente.';
    Tab_Lang [362] = 'Uma das grandes diferenças entre um grande mestre e um amador é saber quando violar ou não os princípios estratégicos básicos.';
    Tab_Lang [363] = 'Em geral, quando dizemos: Evite avançar os peões que protegem o rei, queremos dizer: Evite avançar os peões que protegem o rei, a menos que você tenha um bom motivo para fazê-lo.';


    Tab_Lang [364] = 'Botões úteis';
    Tab_Lang [365] = 'Mostra a barra reguladora do tempo';
    Tab_Lang [366] = 'Repete o último exercício';
    Tab_Lang [367] = 'Pula os lances do computador';
    Tab_Lang [368] = 'Envia relatório informando que o exercício está errado';


    // ------------------------------------------------------------------------------------ Versão 1.5.0


    Tab_Lang_150[1]     = 'Possibilidade de navegar pelos exercícios de cada nível (LINES)';
    Tab_Lang_150[2]     = 'Possibilidade de excluir habilitar (ON) ou desabilitar (OFF) os exercícios de cada Card';
    Tab_Lang_150[3]     = 'Treinar um nível selecionado';
    Tab_Lang_150[4]     = 'Conceitos estratégicos nos 50 Cards mais utilizados';
    Tab_Lang_150[5]     = '9 Cards 100% gratuitos independente do tempo de utilização';
    Tab_Lang_150[6]     = 'O sistema de compra não é mais por assinatura, mas um pagamento único';
    Tab_Lang_150[7]     = 'Treino começado';
    Tab_Lang_150[8]     = 'Você tem um treino nesse nível já começado.';
    Tab_Lang_150[9]     = 'Novo';
    Tab_Lang_150[10]    = 'Continuar';

    Tab_Lang_150[11]     = 'PREFERÊNCIAS';
    Tab_Lang_150[12]     = 'Rápido';
    Tab_Lang_150[13]     = 'Normal';
    Tab_Lang_150[14]     = 'Lento';
    Tab_Lang_150[15]     = 'Muito lento';
    Tab_Lang_150[16]     = 'Tempo por movimento:';
    Tab_Lang_150[17]     = 'Depois de 1 erro';
    Tab_Lang_150[18]     = 'Depois de 2 erros';
    Tab_Lang_150[19]     = 'Depois de 3 erros';
    Tab_Lang_150[20]     = 'Nunca';

    Tab_Lang_150[21]     = 'Mostrar solução:';
    Tab_Lang_150[22]     = 'Padrão';
    Tab_Lang_150[23]     = 'Fechar';
    Tab_Lang_150[24]     = 'Nosso método';
    Tab_Lang_150[25]     = 'Como treinar';
    Tab_Lang_150[26]     = 'Monte o seu treinamento';
    Tab_Lang_150[27]     = 'Partidas';
    Tab_Lang_150[28]     = 'Teoria de aberturas';
    Tab_Lang_150[29]     = 'Favoritos';
    Tab_Lang_150[30]     = 'Cadastro';

    Tab_Lang_150[31]     = 'Grátis x Premium';
    Tab_Lang_150[32]     = 'Melhorias previstas';
    Tab_Lang_150[33]     = 'LINHAS';
    Tab_Lang_150[34]     = 'PARTIDAS';
    Tab_Lang_150[35]     = 'LINHAS';
    Tab_Lang_150[36]     = 'Treinar nível';
    Tab_Lang_150[37]     = 'Todos ON';
    Tab_Lang_150[38]     = 'PARTIDAS';
    Tab_Lang_150[39]     = 'E-mail:';
    Tab_Lang_150[40]     = 'Idade:';

    Tab_Lang_150[41]     = 'País:';
    Tab_Lang_150[42]     = 'Seu ID:';
    Tab_Lang_150[43]     = 'LOJA';
    Tab_Lang_150[44]     = 'Rápido';
    Tab_Lang_150[45]     = 'Normal';
    Tab_Lang_150[46]     = 'Lento';
    Tab_Lang_150[47]     = 'Muito lento';
    Tab_Lang_150[48]     = 'Tempo por movimento:';
    Tab_Lang_150[49]     = 'Depois de 1 erro';
    Tab_Lang_150[50]     = 'Depois de 2 erros';

    Tab_Lang_150[51]     = 'Depois de 3 erros';
    Tab_Lang_150[52]     = 'Nunca';
    Tab_Lang_150[53]     = 'Mostrar solução:';
    Tab_Lang_150[54]     = 'Som:';
    Tab_Lang_150[55]     = 'Padrão';
    Tab_Lang_150[56]     = 'Nome';
    Tab_Lang_150[57]     = 'Como podemos melhorar?';
    Tab_Lang_150[58]     = 'Envie-nos suas críticas e sugestões e tenha um produto cada vez melhor.';
    Tab_Lang_150[59]     = 'Crie a sua conta para manter uma cópia de segurança automática do seu histórico de treinamento em nossos servidores.';
    Tab_Lang_150[60]     = 'É Grátis!';

    Tab_Lang_150[61]     = 'Reenvio de Email';
    Tab_Lang_150[62]     = 'Um email foi enviado para';
    Tab_Lang_150[63]     = 'Por favor,  verifique a sua caixa de e-mails ou na pasta SPAM.';
    Tab_Lang_150[64]     = 'Acesso limitado';
    Tab_Lang_150[65]     = 'Na versão gratuita o número de exercícios e partidas é limitado aos Cards que estão cinza.<br><br>Aproveite nossa tarifa de preços reduzidos para adquirir a versão Premium e libere imediatamente o acesso completo a todos os Cards.<br><br>Se você tem dúvidas se deve ou não adquirir a versão Premium, faça um teste durante 7 dias grátis!';
    Tab_Lang_150[66]     = 'Na versão gratuita o número de exercícios e partidas é limitado aos Cards que estão cinza.<br><br>Aproveite nossa tarifa de preços reduzidos para adquirir a versão Premium e libere imediatamente o acesso completo a todos os Cards.';
    Tab_Lang_150[67]     = 'Nenhum exercício habilitado';
    Tab_Lang_150[68]     = 'Todos os exercícios dessa série foram desabilitados (OFF).<br>Clique em LINHAS e depois em TODOS ON para voltar à série padrão.';
    Tab_Lang_150[69]     = 'Importante';
    Tab_Lang_150[70]     = 'Você pode habilitar (ON) ou desabilitar (OFF) os exercícios que quer estudar.';

    Tab_Lang_150[71]     = 'Os exercícios desabilitados (OFF) não aparecerão nos próximos treinamentos.';
    Tab_Lang_150[72]     = 'Se quiser voltar ao padrão inicial, clique no botão LINHAS do card correspondente.';
    Tab_Lang_150[73]     = 'Envie-nos a sua opinião sobre esse app e ajude-nos a fazer um produto cada vez melhor.';
    Tab_Lang_150[74]     = 'Segundo nosso banco de dados você já fez utilizou o período de avaliação gratuita. Se essa informação não estiver correta, por favor, envie uma mensagem para o nosso suporte.';
    Tab_Lang_150[75]     = 'Monte o seu treinamento';
    Tab_Lang_150[76]     = 'Use os botões rosa (1 a 5) para selecionar os exercícios de um nível correspondente.<br><br>Clique no botão ON/OFF para selecionar as linhas que deseja treinar.<br><br>Para ver um exercício ou navegar pelos exercícios do nível selecionado basta clicar no botão <img src="img/but_go3.png" style="width: 24px;"><br><br>Os exercícios desligados (OFF) deixarão de aparecer no treinamento normal.';
    Tab_Lang_150[77]     = 'Use as setas para começar';
    Tab_Lang_150[78]     = 'Seu período de avaliação termina em:';
    Tab_Lang_150[79]     = 'Dias';
    Tab_Lang_150[80]     = 'Hrs';

    Tab_Lang_150[81]     = 'Mins';
    Tab_Lang_150[82]     = 'Segs';
    Tab_Lang_150[83]     = 'Não exibir essa mensagem novamente';
    Tab_Lang_150[84]     = '7 dias GRÁTIS';
    Tab_Lang_150[85]     = 'Versão Premium';
    Tab_Lang_150[86]     = 'Versão Premium';
    Tab_Lang_150[87]     = 'Mensagem de confirmação';
    Tab_Lang_150[88]     = 'Você desabilitou (OFF) um ou mais exercícios do treinamento atual.<br><br>Clique em CONFIRMAR se quiser que os exercícios desabilitados não apareçam nos próximos treinamentos desse Card.<br><br>Ao clicar em CONFIRMAR, o nível de treinamento mais recente desse Card será reiniciado.';
    Tab_Lang_150[89]     = 'Cancelar';
    Tab_Lang_150[90]     = 'Confirmar';

    Tab_Lang_150[91]     = '';
    Tab_Lang_150[92]     = '';
    Tab_Lang_150[93]     = '';
    Tab_Lang_150[94]     = '';
    Tab_Lang_150[95]     = '';
    Tab_Lang_150[96]     = '';
    Tab_Lang_150[97]     = '';
    Tab_Lang_150[98]     = '';
    Tab_Lang_150[99]     = '';
    Tab_Lang_150[100]    = '';

    Tab_Lang_150[101]    = 'License Key:';
    Tab_Lang_150[102]    = 'Novidades para as próximas versões:';
    Tab_Lang_150[103]    = 'Pesquisar aberturas';
    Tab_Lang_150[104]    = 'Utilizar a mesma conta para vários dispositivos';
    Tab_Lang_150[105]    = 'Complementação do conceitos gerais de estratégia de cada abertura';
    Tab_Lang_150[106]    = 'Configurar cores do tabuleiro';
    Tab_Lang_150[107]    = 'O método mais rápido e eficiente para evoluir no Xadrez!';
    Tab_Lang_150[108]    = '<span style="font-weight: bold; color: #43321e;">8.079 linhas</span> das aberturas mais jogadas nos últimos 50 anos';
    Tab_Lang_150[109]    = '<span style="font-weight: bold; color: #43321e;">4.500 partidas</span> dos maiores jogadores do mundo (clássicas e modernas)';
    Tab_Lang_150[110]    = 'Menos esforço, maior tempo de retenção';

    Tab_Lang_150[111]    = 'Desenvolva a sua  <span style="font-weight: bold; color: #43321e;">intuição</span>';
    Tab_Lang_150[112]    = 'Jogue mais rapidamente';
    Tab_Lang_150[113]    = 'Melhore a sua capacidade de cálculo';
    Tab_Lang_150[114]    = 'Melhore a sua <span style="font-weight: bold; color: #43321e;">concentração</span>';
    Tab_Lang_150[115]    = 'Comece a <span style="font-weight: bold; color: #43321e;">ganhar mais partidas</span>';
    Tab_Lang_150[116]    = 'Resultados melhores e mais rápidos do que qualquer outro método';
    Tab_Lang_150[117]    = 'Preço normal:';
    Tab_Lang_150[118]    = 'Hoje:';
    Tab_Lang_150[119]    = 'Essa promoção expira em:';
    Tab_Lang_150[120]    = 'Dias';

    Tab_Lang_150[121]    = 'Hrs';
    Tab_Lang_150[122]    = 'Mins';
    Tab_Lang_150[123]    = 'Segs';
    Tab_Lang_150[124]    = 'Adquira agora a versão <b>Premium</b> por apenas:';
    Tab_Lang_150[125]    = 'XADREZ';
    Tab_Lang_150[126]    = 'A melhor ginástica para o seu cérebro';
    Tab_Lang_150[127]    = 'Adquirindo essa versão você terá:';
    Tab_Lang_150[128]    = 'Acesso completo por tempo indefinido';
    Tab_Lang_150[129]    = 'Atualizações gratuitas';
    Tab_Lang_150[130]    = 'Suporte preferencial';

    Tab_Lang_150[131]    = 'Acesso instantâneo';
    Tab_Lang_150[132]    = 'Feedback';
    Tab_Lang_150[133]    = 'linhas';
    Tab_Lang_150[134]    = 'Nivel';
    Tab_Lang_150[135]    = 'Lances';
    Tab_Lang_150[136]    = '';
    Tab_Lang_150[137]    = '';
    Tab_Lang_150[138]    = '';
    Tab_Lang_150[139]    = '';
    Tab_Lang_150[140]    = '';

    Tab_Lang_150[141]    = '';
    Tab_Lang_150[142]    = '';
    Tab_Lang_150[143]    = '';
    Tab_Lang_150[144]    = '';
    Tab_Lang_150[145]    = '';
    Tab_Lang_150[146]    = '';
    Tab_Lang_150[147]    = '';
    Tab_Lang_150[148]    = '';
    Tab_Lang_150[149]    = '';
    Tab_Lang_150[150]    = '';


    // ------------------------------------------------------------------------------------ Versão 1.5.1

    Tab_Lang_151[1]     = 'Sincronizando...';
    Tab_Lang_151[2]     = 'Testar 7 Dias Grátis';
    Tab_Lang_151[3]     = 'Recuperar conta';
    Tab_Lang_151[4]     = 'Sincronizar contas';
    Tab_Lang_151[5]     = 'Sair';
    Tab_Lang_151[6]     = 'Recuperar conta';
    Tab_Lang_151[7]     = 'Sincronizar contas';
    Tab_Lang_151[8]     = 'RECUPERAR CONTA';
    Tab_Lang_151[9]     = 'A recuperação de conta permite que você transfira os dados de sua conta para esse dispositivo.';
    Tab_Lang_151[10]    = 'Para realizar essa transferência você só precisa do ID da sua conta no outro dispositivo (onde você criou a conta). O ID aparece na parte inferior da seção onde estão os dados da sua conta.';

    Tab_Lang_151[11]     = 'Se você não sabe o número do seu ID, perdeu o celular etc... Envie uma mensagem para o nosso suporte com o seu email,';
    Tab_Lang_151[12]     = 'clicando aqui';
    Tab_Lang_151[13]     = 'IMPORTANTE! Todos os dados desse dispositivo serão apagados e substituídos pela conta que você indicar.';
    Tab_Lang_151[14]     = 'Iniciar Recuperação';
    Tab_Lang_151[15]     = 'SINCRONIZAR CONTAS';
    Tab_Lang_151[16]     = 'Digite o código de confirmação de 4 dígitos enviado para o e-mail:';
    Tab_Lang_151[17]     = 'Sincronizar';
    Tab_Lang_151[18]     = 'Se você <b>não recebeu</b> o nosso e-mail com o código de confirmação, por favor verifique a sua caixa de Spam.';
    Tab_Lang_151[19]     = 'Para <b>reenviar</b> o código';
    Tab_Lang_151[20]     = 'Se precisar de <b>ajuda</b>, envie uma mensagem para nosso Suporte';

    Tab_Lang_151[21]     = 'clicando aqui.';
    Tab_Lang_151[22]     = 'Agora você pode utilizar a mesma conta em vários dispositivos.';
    Tab_Lang_151[23]     = 'Para sincronizar as contas você precisa:';
    Tab_Lang_151[24]     = 'Fazer o cadastro no dispositivo que você quer sincronizar.';
    Tab_Lang_151[25]     = 'Digitar nos campos abaixo o ID do dispositivo que você quer sincronizar.';
    Tab_Lang_151[26]     = 'Na tela seguinte, digitar o código de confirmação que enviaremos para o seu email.';
    Tab_Lang_151[27]     = 'Sincronizar';
    Tab_Lang_151[28]     = 'clique aqui.';
    Tab_Lang_151[29]     = '';
    Tab_Lang_151[30]     = '';

    Tab_Lang_151[31]     = 'ID inválido, por favor reinicie o aplicativo.';
    Tab_Lang_151[32]     = 'Código inválido';
    Tab_Lang_151[33]     = 'ID App inválido';
    Tab_Lang_151[34]     = 'Você precisa fazer o cadastro no dispositivo que quer sincronizar.';
    Tab_Lang_151[35]     = 'Código reenviado para o email';
    Tab_Lang_151[36]     = 'ID App não encontrado. Por favor, digite novamente';
    Tab_Lang_151[37]     = 'Erro ao preencher o formulário';
    Tab_Lang_151[38]     = '';
    Tab_Lang_151[39]     = '';
    Tab_Lang_151[40]     = '';

    Tab_Lang_151[41]     = 'Conflito de Sincronização';
    Tab_Lang_151[42]     = 'Existe uma atualização de um outro dispositivo com data mais recente.';
    Tab_Lang_151[43]     = 'Qual você quer manter?';
    Tab_Lang_151[44]     = 'Manter as atualizações feitas no outro dispositivo';
    Tab_Lang_151[45]     = 'Manter as atualizações feitas nesse dispositivo';
    Tab_Lang_151[46]     = 'Ganhe um desconto agora!';
    Tab_Lang_151[47]     = 'Por favor, digite o código do Cupom:';
    Tab_Lang_151[48]     = 'Validate Cupom';
    Tab_Lang_151[49]     = 'Este dispositivo:';
    Tab_Lang_151[50]     = 'Tem cupom de desconto?';

    Tab_Lang_151[51]     = 'Código de cupom inválido';
    Tab_Lang_151[52]     = '(Principal)';
    Tab_Lang_151[53]     = '';
    Tab_Lang_151[54]     = '';
    Tab_Lang_151[55]     = '';
    Tab_Lang_151[56]     = '';
    Tab_Lang_151[57]     = '';
    Tab_Lang_151[58]     = '';
    Tab_Lang_151[59]     = '';
    Tab_Lang_151[60]     = '';

}




function Set_Lang_ENG() {

    Tab_Lang[1]     = 'DISCLAIMER';
    Tab_Lang[2]     = 'This is a <b> Beta version </b>, we are doing experiments to build this product.';
    Tab_Lang[3]     = 'Some features can be deactivated <b>without notice</b>.';
    Tab_Lang[4]     = 'Your training history may be lost during the testing period.';
    Tab_Lang[5]     = 'Usage <span style="color: #0099FF; font-weight: bold;">100% free</span> until <span style="color: #0099FF; font-weight: bold;">07/31/21</span>, which can be extended by registering and sending feedback.';
    Tab_Lang[6]     = 'I agree';
    Tab_Lang[7]     = 'You have completed that level!';
    Tab_Lang[8]     = 'You have completed this card!';
    Tab_Lang[9]     = 'Congratulations!';
    Tab_Lang[10]    = 'CONFIGURATIONS';
    Tab_Lang[11]    = 'Sound:';
    Tab_Lang[12]    = 'Language:';
    Tab_Lang[13]    = 'Cancel';
    Tab_Lang[14]    = 'Save';
    Tab_Lang[15]    = 'Select a color';
    Tab_Lang[16]    = 'Open openings';
    Tab_Lang[17]    = 'Semi-open openings';
    Tab_Lang[18]    = 'Closed openings';
    Tab_Lang[19]    = 'Semi-closed openings';
    Tab_Lang[20]    = 'Flank openings';
    Tab_Lang[21]    = 'Upcoming releases';
    Tab_Lang[22]    = 'Next';
    Tab_Lang[23]    = 'Openings Theory';
    Tab_Lang[24]    = 'Favorites';
    Tab_Lang[25]    = 'My Account';
    Tab_Lang[26]    = 'Name';
    Tab_Lang[27]    = 'E-mail';
    Tab_Lang[28]    = 'Country:';
    Tab_Lang[29]    = 'Gender';
    Tab_Lang[30]    = 'Male';
    Tab_Lang[31]    = 'Female';
    Tab_Lang[32]    = 'Date of birth';
    Tab_Lang[33]    = 'How long have you been playing Chess?';
    Tab_Lang[34]    = 'Less than 3 months';
    Tab_Lang[35]    = 'From 3 months to 1 year';
    Tab_Lang[36]    = 'Between 1 and 5 years';
    Tab_Lang[37]    = 'More than 5 years';
    Tab_Lang[38]    = 'What is your rating?';
    Tab_Lang[39]    = 'I don´t know / I don´t have';
    Tab_Lang[40]    = 'How did you discover our App?';
    Tab_Lang[41]    = 'Friend';
    Tab_Lang[42]    = 'Social networks';
    Tab_Lang[43]    = 'Ads';
    Tab_Lang[44]    = 'Apple Store/Google Play';
    Tab_Lang[45]    = 'Others';
    Tab_Lang[46]    = 'To specify: (optional)';
    Tab_Lang[47]    = 'Send';
    Tab_Lang[48]    = 'Help';
    Tab_Lang[49]    = 'REPORT ERROR';
    Tab_Lang[50]    = 'IMPORTANT TIP';
    Tab_Lang[51]    = 'Repeat the <b>name of the pieces</b>, in your mind as the moves are shown. Ex: Pawn, Pawn, Knight, Bishop...<br><br> If it is still difficult, repeat the name of the pieces <b>aloud</b>.';

    Tab_Lang[52]    = '-----';
    Tab_Lang[53]    = '-----';
    Tab_Lang[54]    = '-----';
    Tab_Lang[55]    = '-----';
    Tab_Lang[56]    = '-----';
    Tab_Lang[57]    = '-----';
    Tab_Lang[58]    = '-----';
    Tab_Lang[59]    = '-----';
    Tab_Lang[60]    = '-----';
    Tab_Lang[61]    = '-----';

    Tab_Lang[62]    = 'Error message';
    Tab_Lang[63]    = 'There was a failure when making your registration. Please try again. If the error persists, contact our support.';
    Tab_Lang[64]    = 'Failed to access the server';
    Tab_Lang[65]    = 'Obrigado';
    Tab_Lang[66]    = 'Obrigado por nos ajudar a fazer um produto cada vez melhor!';

    Tab_Lang[80]    = 'Send us your opinion about this app and get <b> + 15 days free access</b>!';
    Tab_Lang[81]    = 'How would you rate each of the topics below?';
    Tab_Lang[82]    = 'Design';
    Tab_Lang[83]    = 'Ease of use';
    Tab_Lang[84]    = 'Method';
    Tab_Lang[85]    = 'Openings';
    Tab_Lang[86]    = 'Games';
    Tab_Lang[87]    = 'Theory';
    Tab_Lang[88]    = 'What are the 3 things you liked most about our app?';
    Tab_Lang[89]    = 'Which 3 things did you like least about our app?';
    Tab_Lang[90]    = 'Additional comments:';
    Tab_Lang[91]    = 'Send';

    Tab_Lang[92]    = 'line';
    Tab_Lang[93]    = 'lines';

    Tab_Lang[100]   = 'Your registration was successful!';
    Tab_Lang[101]   = '';
    Tab_Lang[102]   = 'We sent an email to @user_email';
    Tab_Lang[103]   = 'To confirm your account, please access your mailbox and click on the <b>VERIFY</b> button.';
    Tab_Lang[104]   = 'If you have not received our email, please check your Spam box';
    Tab_Lang[105]   = 'If you need help, <span onclick="Show_Suporte_Section();" style="color: #0066FF;">click here.</span>';
    Tab_Lang[106]   = 'Under construction';
    Tab_Lang[107]   = 'Thank you for your feedback';

    Tab_Lang [108] = 'About this App';
    Tab_Lang [109] = 'This is a <b> Beta version </b>, we are doing experiments to build this product. New features will be gradually incorporated with each new version, which should be released every two weeks. ';
    Tab_Lang [110] = 'Our training methodology is based on memorizing the main positions of each opening, the lines most played by the biggest players in the world, during the last 50 years.';
    Tab_Lang [111] = 'The application covers a total of more than 8 thousand lines, divided into approximately 120 cards (48 available in the current version).';
    Tab_Lang [112] = 'Each card contains between 20 and 150 lines, which must be progressively trained from level 1 to 5, always in the same sequence.';
    Tab_Lang [113] = 'At level 1, you must repeat the first 4 moves of each line.';
    Tab_Lang [114] = 'As each level is completed, two moves are added, thereby gradually increasing the difficulty of each exercise. At level 5, you must repeat up to 12 moves. ';
    Tab_Lang [115] = 'This training system has already been successfully tested in small groups, in another experimental app.';
    Tab_Lang [116] = 'We guarantee the free use of this application until July 31, 2021.';
    Tab_Lang [117] = 'Optionally, you can extend this period up to 60 days, upon registration and sending us your feedback with criticisms and suggestions.';
    Tab_Lang [118] = 'Suggestions and criticisms, as well as corrections to translations, are always welcome and can also be made by email: <b> support@promasterchess.com </b>';
    Tab_Lang [119] = 'About Us';
    Tab_Lang [120] = 'We are a small team of Chess enthusiasts, neuroscience students, IT professionals and graphic design specialists, who for the past two years have been working to develop an efficient method to train openings in an intuitive way and with results quick, especially for that group of players who don´t have a lot of time to study. ';
    Tab_Lang [121] = 'Disclaimer';
    Tab_Lang [122] = 'This is a Beta version, we are doing experiments to build this product.';
    Tab_Lang [123] = 'Some features may be disabled without notice.';
    Tab_Lang [124] = 'Your training history may be lost during the testing period.';
    Tab_Lang [125] = '100% free use until 07/31/21, which can be extended by registering and sending feedback.';

    Tab_Lang [130] = 'Card Reset';
    Tab_Lang [131] = 'This operation will erase all training history for this card.';
    Tab_Lang [132] = 'Are you sure you want to reset this card?';
    Tab_Lang [133] = 'Cancel';
    Tab_Lang [134] = 'Confirm';
    Tab_Lang [135] = 'Cancel';
    Tab_Lang [136] = 'Yes';
    Tab_Lang [137] = 'Cancel';
    Tab_Lang [138] = 'Yes';
    Tab_Lang [139] = 'WELCOME';

    Tab_Lang [140] = 'The Easiest and Most Fun Way to Improve Your Chess';
    Tab_Lang [141] = 'The <b>Chess Openings Pró-Master</b> app contains everything you need to understand and master the intricate world of Chess Openings.';
    Tab_Lang [142] = 'You <b>choose the opening</b> you want to study and the system will show you the main lines.';
    Tab_Lang [143] = 'All you have to do is <b>repeat the moves the computer makes</b>.';
    Tab_Lang [144] = 'At level 1 there are only <b>first 4 moves</b> on each side. Once this level is completed, the level of difficulty gradually increases to 6, 8, 10 and even 12 moves.';
    Tab_Lang [145] = 'With this method, in addition to improving your opening game, you will register in your unconscious <b>a huge amount of play patterns</b>, which will be intuitively accessed in your next games.';
    Tab_Lang [146] = 'Train 15 days for 15 minutes a day and see the <b>difference in results</b> compared to any other type of training!';
    Tab_Lang [147] = 'Start Now';
    Tab_Lang [148] = 'Welcome';
    Tab_Lang [149] = 'Settings';

    Tab_Lang [150] = 'Support';
    Tab_Lang [151] = '1. GENERAL CONCEPTS';
    Tab_Lang [152] = '2. EXERCISES BY LEVEL';
    Tab_Lang [153] = '4 moves';
    Tab_Lang [154] = '6 moves';
    Tab_Lang [155] = '8 moves';
    Tab_Lang [156] = '10 moves';
    Tab_Lang [157] = '12 moves';
    Tab_Lang [158] = '3. ECO';
    Tab_Lang [159] = '4. GAMES';

    Tab_Lang [160] = 'Reset this Card';
    Tab_Lang [161] = 'FAVORITES';
    Tab_Lang [162] = 'MY ACCOUNT';
    Tab_Lang [163] = 'Version:';
    Tab_Lang [164] = 'PERSONAL DATA';
    Tab_Lang [165] = 'Create your account now and get another 15 days of Free access!';
    Tab_Lang [166] = 'It takes less than 1 minute!';
    Tab_Lang [167] = 'Create account';
    Tab_Lang [168] = 'SUBSCRIPTION';
    Tab_Lang [169] = 'Validity:';

    Tab_Lang [170] = 'History';
    Tab_Lang [171] = 'Renew';
    Tab_Lang [172] = 'FEEDBACKS';
    Tab_Lang [173] = 'Thank you! :)';
    Tab_Lang [174] = 'Last feedback:';
    Tab_Lang [175] = 'New Feedback';
    Tab_Lang [176] = 'FEEDBACK';
    Tab_Lang [177] = 'Send us your opinion about this app and get + <span style="color: #F038A3">15 days Free!</span>';
    Tab_Lang [178] = 'CREATE ACCOUNT';
    Tab_Lang [179] = 'Create your account now and get + <span style="color: #F038A3">15 Days Free</span>';

    Tab_Lang [180] = 'Something was wrong! Your order cannot be completed. Please, contact our Support to solve this problem.';
    Tab_Lang [181] = '';
    Tab_Lang [182] = '';
    Tab_Lang [183] = '';
    Tab_Lang [184] = '';
    Tab_Lang [185] = '';
    Tab_Lang [186] = '';
    Tab_Lang [187] = '';
    Tab_Lang [188] = '';
    Tab_Lang [189] = '';

    Tab_Lang [190] = '';
    Tab_Lang [191] = ''
    Tab_Lang [193] = '';
    Tab_Lang [194] = '';
    Tab_Lang [195] = 'SUPPORT';
    Tab_Lang [196] = 'This channel is for you to quickly report <b>problems</b> with the application, as well as send your <b>questions</b>, <b>reviews</b> and <b> suggestions</b>.';
    Tab_Lang [197] = 'Previous messages';
    Tab_Lang [198] = 'Send your message';
    Tab_Lang [199] = 'Submit';

    Tab_Lang [200] = 'SETTINGS';
    Tab_Lang [201] = 'Reserve with 30% Discount';
    Tab_Lang [202] = 'Confirm reserve?';
    Tab_Lang [203] = 'Report Error';
    Tab_Lang [204] = 'Is this exercise wrong?';
    Tab_Lang [205] = 'Thank you!';
    Tab_Lang [206] = 'TRAIN';
    Tab_Lang [207] = 'Create account';
    Tab_Lang [208] = 'SHOPPING';
    Tab_Lang [209] = '';

    Tab_Lang [210] = 'Reserve OK';
    Tab_Lang [211] = 'Your booking was successful, thank you!';
    Tab_Lang [212] = 'Black is checkmated';
    Tab_Lang [213] = 'Black resigned';
    Tab_Lang [214] = 'White is checkmated';
    Tab_Lang [215] = 'White resigned';
    Tab_Lang [216] = 'Draw';
    Tab_Lang [217] = 'Draw by repetition';
    Tab_Lang [218] = 'Draw for insufficient material';
    Tab_Lang [219] = 'Draw by 50 move rule';

    Tab_Lang [220] = 'Draw by mutual agreement';
    Tab_Lang [221] = 'Use arrow key to start';
    Tab_Lang [222] = 'You have no messages yet.';
    Tab_Lang [223] = 'RESERVED';
    Tab_Lang [224] = 'Game Rating';
    Tab_Lang [225] = 'Gradual Difficulty Increment';
    Tab_Lang [226] = 'The exercises for each card are divided into 5 levels:<li>Level 1 = First 4 moves</li><li>Level 2 = First 6 moves</li><li>Level 3 = First 8 moves</li><li>Level 4 = First 10 moves</li><li>Level 5 = First 12 moves</li><br>You must complete a level before moving on to next.';
    Tab_Lang [227] = 'Facility to Find Openings';
    Tab_Lang [228] = 'The ECO (Encyclopaedia of Chess Openings) is a collection of books that describe all known chess openings using an international standard coding system.<br><br>Each ECO briefly describes the best lines and variants of each opening.<br><br>Each card may contain one or more of these codes.';
    Tab_Lang [229] = 'Learn from the best GMs in the world.';

    Tab_Lang [230] = 'Each card contains 20 to 30 games that can be studied for reference.<br><br>By observing a game you learn the most common strategic and tactical ideas for the opening you are studying.<br><br>The more times you watch a game, the better your feeling for this type of position will be.<br><br>Watch each game several times to understand it well.<br><br>When playing the games, try to anticipate the winning side´s moves. The more you do this, the faster your game will improve.';
    Tab_Lang [231] = 'Your opinion is very important to us';
    Tab_Lang [232] = 'You can communicate with us in <b>English</b>, <b>Portuguese</b>, <b>Spanish</b> and <b>German.</b><br><br>We will endeavor to reply to all messages within <b>24 hours</b>.';
    Tab_Lang [233] = '';
    Tab_Lang [234] = '';
    Tab_Lang [235] = '';
    Tab_Lang [236] = '';
    Tab_Lang [237] = '';
    Tab_Lang [238] = '';
    Tab_Lang [239] = '';

    Tab_Lang [240] = 'Are you enjoying our app?';
    Tab_Lang [241] = 'Submit Opinion';
    Tab_Lang [242] = 'Create Account';
    Tab_Lang [243] = 'Send Feedback';
    Tab_Lang [244] = 'Connection to server unavailable. Please check your internet connection.';
    Tab_Lang [245] = 'Train';
    Tab_Lang [246] = 'Games';
    Tab_Lang [247] = 'You don´t have any favorite cards.';
    Tab_Lang [248] = 'This exercise contains errors and will be skipped.';
    Tab_Lang [249] = '';

    Tab_Lang [250] = 'a few seconds ago';
    Tab_Lang [251] = '';
    Tab_Lang [252] = 'minute ago';
    Tab_Lang [253] = 'minutes ago';
    Tab_Lang [254] = 'hour ago';
    Tab_Lang [255] = 'hours ago';
    Tab_Lang [256] = 'day ago';
    Tab_Lang [257] = 'days ago';
    Tab_Lang [258] = 'week ago';
    Tab_Lang [259] = 'weeks ago';

    Tab_Lang [260] = 'Purchase successful';
    Tab_Lang [261] = 'Thank you, your purchase was successful.<br><br>Thanks to your support, we can keep working so that you have a better product!';
    Tab_Lang [262] = 'Look this app to training Chess:';
    Tab_Lang [263] = 'Your free trial period has @ days remaining.';
    Tab_Lang [264] = 'Access temporarily suspended';
    Tab_Lang [265] = 'To renew your access to exercises, please visit our Store.';
    Tab_Lang [266] = 'Create an account and send us your feedback to extend your free trial period.';
    Tab_Lang [267] = 'Buy Now';
    Tab_Lang [268] = 'Evaluate';
    Tab_Lang [269] = 'LAUNCHING PROMOTION';

    Tab_Lang [270] = '30% OFF!';
    Tab_Lang [271] = 'Valid until: September 15, 2021';
    Tab_Lang [272] = 'SUBSCRIPTION PLANS';
    Tab_Lang [273] = 'Get it NOW!';
    Tab_Lang [274] = 'The contracted subscription period will be added to your remaining free usage period, if any.';
    Tab_Lang [275] = 'No additional cost for new versions and new content during the contract period!';
    Tab_Lang [276] = 'Instant Access!';
    Tab_Lang [277] = 'All plans guarantee 100% access to future versions during the contract period!';
    Tab_Lang [278] = '';
    Tab_Lang [279] = '';

    Tab_Lang [300] = 'Some general principles';
    Tab_Lang [301] = '1. Rapidly Develop All Pieces';
    Tab_Lang [302] = 'The main goal of the opening is to develop pieces and reach castling as quick as possible.';
    Tab_Lang [303] = 'Opening is complete when one or both players have their Rooks connected.';
    Tab_Lang [304] = 'The player, who finishes the development first, gains the initiative.';
    Tab_Lang [305] = '2. Develop Knights before Bishops';

    Tab_Lang [306] = 'While Bishops can control several squares from their original position, if there are no pawns obstructing their way, Knights dominate only their neighbour squares and take longer to reach the opponent’s field, because they are less mobile pieces.';
    Tab_Lang [307] = '3. Don’t move the same piece twice during opening';
    Tab_Lang [308] = 'Try to place your pieces at the best possible position at the first move.';
    Tab_Lang [309] = 'It is a waste of time to move the same piece more than once during opening and it may cost you the initiative in the game.';
    Tab_Lang [310] = '4. Don’t make unnecessary pawns moves during opening';
    Tab_Lang [311] = 'Pawn moves should be restricted during opening, because the time involved in these moves could be applied to develop another piece.';
    Tab_Lang [312] = 'Generally, moving pawns is suitable when the player aims to open diagonals for the Queen or Bishops or occupy the center.';

    Tab_Lang [313] = '5. Don’t check if not necessary';
    Tab_Lang [314] = 'A check that can easily be defended by the opponent is unnecessary.';
    Tab_Lang [315] = 'Most of the checks during opening can easily be defended by moves that favor development.';
    Tab_Lang [316] = '6. Do not open the position if you are late in development';
    Tab_Lang [317] = 'An open position always favors the flock with more pieces in play and, therefore, should only be provoked by those with a developing advantage.';
    Tab_Lang [318] = '7. Place the Queen behind the line of friendly pawns during opening';
    Tab_Lang [319] = 'Since the Queen is a very powerful piece, it is also very vulnerable to the opponent’s constant attacks.';

    Tab_Lang [320] = 'Therefore, it’s convenient to place it behind a pawn, preferably on the second rank so that the first one is free for Rook development.';
    Tab_Lang [321] = '8. Avoid trading a developed piece for a not developed one';
    Tab_Lang [322] = 'Generally it’s a bad deal to trade a well-positioned piece for a bad-positioned one.';
    Tab_Lang [323] = 'When you trade one of your developed pieces for one of your opponent’s not developed ones, you waste time. The same is true if you trade a piece that has moved a lot for one that your opponent moved only once.';
    Tab_Lang [324] = '9. Castle as quickly as possible';
    Tab_Lang [325] = 'The King’s safety is one of the most important things to care about during opening and middlegame.';
    Tab_Lang [326] = 'The King in the center will always be very vulnerable to the opponent’s attacks, especially in open positions.';

    Tab_Lang [327] = 'Castling means placing your King comfortably behind a pawn blockade and allowing development of one of your Rooks. Then, the Rook may rapidly occupy an open or half-open file.';
    Tab_Lang [328] = '10. Kingside castling is safer than Queenside castling';
    Tab_Lang [329] = 'Kingside castling places the King away from the center and safer behind a rank of protected pawns; furthermore it’s a quicker move than Queenside castling since only two pieces have to be moved before.';
    Tab_Lang [330] = 'On the other hand, castling on the opponent’s opposite side may be very interesting to create more attacking opportunities.';
    Tab_Lang [331] = '11. Try to prevent the opponent from castling';
    Tab_Lang [332] = 'If your opponent is waiting too long to castle, try to keep the enemy King even longer in the center.';
    Tab_Lang [333] = 'One of the most common ways to do so is to control one of the squares serving as passage for the King (usually f1 or f8, when Kingside castling).';

    Tab_Lang [334] = 'Most of the times it’s worthwhile to sacrifice a pawn in order to keep the King in the center.';
    Tab_Lang [335] = '12. Dominate as much territory as possible';
    Tab_Lang [336] = 'The player, who has an advantage in space, enables greater mobility to friendly pieces and can, therefore, transfer pieces from one side to the other with more flexibility.';
    Tab_Lang [337] = 'On the other hand, the player in a more restricted position finds it difficult to maneuver pieces, which might be fatal if they are requested to defend the King.';
    Tab_Lang [338] = '13. Advance pawns in order to conquer space';
    Tab_Lang [339] = 'Although advancing pawns is the main resource to restrict the opponent’s position, this rule should be considered carefully because the farther the pawns are from base position the harder it is to defend them.';
    Tab_Lang [340] = 'Furthermore, each position advanced by a pawn creates weakness at its adjacent squares, which may be occupied by enemy pieces.';

    Tab_Lang [341] = '14. Place your pawns in the center';
    Tab_Lang [342] = 'The center of the chessboard consists of e4, e5, d4 and d5. The expanded center is also includes the squares that form the c3, c6, f3 and f6 rectangle.';
    Tab_Lang [343] = 'Pawns are the best units to create the center because, differently from pieces, they are not vulnerable to the attack of enemy pawns.';
    Tab_Lang [344] = '15. Keep your pieces as close as possible to the center';
    Tab_Lang [345] = 'In the center, a piece controls more squares than anywhere eles on the board. The Knight, for instance, may move to 8 different squares from the center while it has only 2 options when placed in corners.';
    Tab_Lang [346] = 'The control of the center is also important because it enables pieces to move rapidly from one side of the board to the order and if your pieces move faster than the ones of your opponent, you have greater chances to create a successful attack.';
    Tab_Lang [347] = '16. When trading pawns, try to get yours close to the center';

    Tab_Lang [348] = 'If two of your pawns can retake the opponent’s piece that previously captured one of your pieces, it is recommended to move the pawn that, at the end, will be closest to the center, since central pawns are more important than lateral ones.';
    Tab_Lang [349] = '17. Control the Center Before Attacking';
    Tab_Lang [350] = 'Successful attacks on the wings depend mostly on center control. Therefore, concern yourself with a strong and stable center before starting any lateral attack.';
    Tab_Lang [351] = '18. Rooks should quickly occupy open or semi-open columns';
    Tab_Lang [352] = 'During the opening, the rooks are the last pieces to be developed. They are effective when they occupy an open or semi-open column.';
    Tab_Lang [353] = 'Generally, the ideal houses for placing the rooks are e1, d1 and c1 (e8, d8 and c8 for black), because in these positions they are able to exert pressure in the center and at the same time defend the rear.';
    Tab_Lang [354] = 'However, a Rook can still be an effective defense when placed in the second row, while still operating aggressively on the spine.';

    Tab_Lang [355] = '19. Think Defense First';
    Tab_Lang [356] = 'The most important principle in chess is security. At each opponent´s move, stop and ask yourself:';
    Tab_Lang [357] = 'What this move is threatening?';
    Tab_Lang [358] = 'What are my opponent´s intentions?';
    Tab_Lang [359] = 'What would I do if I were in his place?';
    Tab_Lang [360] = '20. Final Considerations';
    Tab_Lang [361] = 'Chess is not an exact science and the advice and concepts presented here are not applied in 100% of the cases and should not be followed blindly.';
    Tab_Lang [362] = 'One of the great differences between a grandmaster and an amateur is knowing when to violate basic strategic principles or not.';
    Tab_Lang [363] = 'In general, when we say: Avoid advancing the pawns that protect the king, we mean: Avoid advancing the pawns that protect the king, unless you have a good reason to do so.';

    Tab_Lang [364] = 'Useful Buttons';
    Tab_Lang [365] = 'Show the time slider';
    Tab_Lang [366] = 'Repeat last exercise';
    Tab_Lang [367] = 'Skip computer moves';
    Tab_Lang [368] = 'Send report saying exercise is wrong';

    Tab_Lang_150[1] = 'Ability to browse the exercises of each level (LINES)';
    Tab_Lang_150[2] = 'Possibility to exclude enable (ON) or disable (OFF) the exercises of each Card';
    Tab_Lang_150[3] = 'Train a selected level';
    Tab_Lang_150[4] = 'Strategic Concepts on the 50 Most Used Cards';
    Tab_Lang_150[5] = '9 Cards 100% free regardless of usage time';
    Tab_Lang_150[6] = 'The purchase system is no longer by subscription, but a one-time payment';
    Tab_Lang_150[7] = 'Training started';
    Tab_Lang_150[8] = 'You have a training at this level already started.';
    Tab_Lang_150[9] = 'New';
    Tab_Lang_150[10] = 'Continue';

    Tab_Lang_150[11] = 'PREFERENCES';
    Tab_Lang_150[12] = 'Quick';
    Tab_Lang_150[13] = 'Normal';
    Tab_Lang_150[14] = 'Slow';
    Tab_Lang_150[15] = 'Too slow';
    Tab_Lang_150[16] = 'Time per move:';
    Tab_Lang_150[17] = 'After 1 error';
    Tab_Lang_150[18] = 'After 2 errors';
    Tab_Lang_150[19] = 'After 3 errors';
    Tab_Lang_150[20] = 'Never';

    Tab_Lang_150[21] = 'Show solution:';
    Tab_Lang_150[22] = 'Default';
    Tab_Lang_150[23] = 'Close';
    Tab_Lang_150[24] = 'Our method';
    Tab_Lang_150[25] = 'How to train';
    Tab_Lang_150[26] = 'Set up your training';
    Tab_Lang_150[27] = 'Games';
    Tab_Lang_150[28] = 'Open Theory';
    Tab_Lang_150[29] = 'Favorites';
    Tab_Lang_150[30] = 'Registration';

    Tab_Lang_150[31] = 'Free x Premium';
    Tab_Lang_150[32] = 'Expected improvements';
    Tab_Lang_150[33] = 'LINES';
    Tab_Lang_150[34] = 'GAMES';
    Tab_Lang_150[35] = 'LINES';
    Tab_Lang_150[36] = 'Train level';
    Tab_Lang_150[37] = 'All ON';
    Tab_Lang_150[38] = 'GAMES';
    Tab_Lang_150[39] = 'Email:';
    Tab_Lang_150[40] = 'Age:';

    Tab_Lang_150[41] = 'Country:';
    Tab_Lang_150[42] = 'Your ID:';
    Tab_Lang_150[43] = 'STORE';
    Tab_Lang_150[44] = 'Quick';
    Tab_Lang_150[45] = 'Normal';
    Tab_Lang_150[46] = 'Slow';
    Tab_Lang_150[47] = 'Too slow';
    Tab_Lang_150[48] = 'Time per move:';
    Tab_Lang_150[49] = 'After 1 error';
    Tab_Lang_150[50] = 'After 2 errors';

    Tab_Lang_150[51] = 'After 3 errors';
    Tab_Lang_150[52] = 'Never';
    Tab_Lang_150[53] = 'Show solution:';
    Tab_Lang_150[54] = 'Sound:';
    Tab_Lang_150[55] = 'Default';
    Tab_Lang_150[56] = 'Name';
    Tab_Lang_150[57] = 'How can we improve?';
    Tab_Lang_150[58] = 'Send us your criticisms and suggestions and get an even better product.';
    Tab_Lang_150[59] = 'Create your account to keep an automatic backup of your training history on our servers.';
    Tab_Lang_150[60] = 'It´s Free!';

    Tab_Lang_150[61] = 'Resend Email';
    Tab_Lang_150[62] = 'An email has been sent to';
    Tab_Lang_150[63] = 'Please check your email inbox or SPAM folder.';
    Tab_Lang_150[64] = 'Limited access';
    Tab_Lang_150[65] = 'In the free version the number of exercises and games is limited to Cards that are gray.<br><br>Take advantage of our reduced price rate to purchase the Premium version and immediately get full access to all Cards .<br><br>If you are unsure whether or not to purchase the Premium version, take a 7-day free trial!';
    Tab_Lang_150[66] = 'In the free version the number of exercises and games is limited to Cards that are gray.<br><br>Take advantage of our reduced price rate to purchase the Premium version and immediately get full access to all Cards .';
    Tab_Lang_150[67] = 'No exercises enabled';
    Tab_Lang_150[68] = 'All exercises in this series have been disabled (OFF).<br>Click on LINES and then ALL ON to return to default series.';
    Tab_Lang_150[69] = 'Important';
    Tab_Lang_150[70] = 'You can enable (ON) or disable (OFF) the exercises you want to study.';

    Tab_Lang_150[71] = 'Disabled lines (OFF) will not appear in future training.';
    Tab_Lang_150[72] = 'If you want to return to the initial pattern, click on the LINES button of the corresponding card.';
    Tab_Lang_150[73] = 'Send us your opinion about this app and help us make a better product.';
    Tab_Lang_150[74] = 'According to our database you have already used the free trial period. If this information is not correct, please send a message to our support.';
    Tab_Lang_150[75] = 'Set up your training';
    Tab_Lang_150[76] = 'Use the pink buttons (1 to 5) to select exercises of a corresponding level.<br><br>Click the ON/OFF button to select the lines you want to train.<br><br> To view a line or browse the lines for the selected level, just click on the <img src="img/but_go3.png" style="width: 24px;"><br><br>Exercises turned OFF will no longer appear in normal training.';
    Tab_Lang_150[77] = 'Use arrow keys to start';
    Tab_Lang_150[78] = 'Your trial period ends in:';
    Tab_Lang_150[79] = 'Days';
    Tab_Lang_150[80] = 'Hrs';

    Tab_Lang_150[81] = 'Mins';
    Tab_Lang_150[82] = 'Secs';
    Tab_Lang_150[83] = 'Don´t show this message again';
    Tab_Lang_150[84] = '7 days FREE';
    Tab_Lang_150[85] = 'Premium Version';
    Tab_Lang_150[86] = 'Premium Version';
    Tab_Lang_150[87] = 'Confirmation Message';
    Tab_Lang_150[88] = 'You have disabled (OFF) one or more exercises in the current training.<br><br>Click on CONFIRM if you want the disabled exercises not to appear in future trainings for this Card.<br><br>By clicking in CONFIRM, the most recent training level for that Card will be reset.';
    Tab_Lang_150[89] = 'Cancel';
    Tab_Lang_150[90] = 'Confirm';

    Tab_Lang_150[91] = '';
    Tab_Lang_150[92] = '';
    Tab_Lang_150[93] = '';
    Tab_Lang_150[94] = '';
    Tab_Lang_150[95] = '';
    Tab_Lang_150[96] = '';
    Tab_Lang_150[97] = '';
    Tab_Lang_150[98] = '';
    Tab_Lang_150[99] = '';
    Tab_Lang_150[100] = '';

    Tab_Lang_150[101] = 'License Key:';
    Tab_Lang_150[102] = 'News for upcoming versions:';
    Tab_Lang_150[103] = 'Search for openings';
    Tab_Lang_150[104] = 'Use same account for multiple devices';
    Tab_Lang_150[105] = 'Complement of general strategy concepts for each opening';
    Tab_Lang_150[106] = 'Set board colors';
    Tab_Lang_150[107] = 'The fastest and most efficient method to progress in Chess!';
    Tab_Lang_150[108] = '<span style="font-weight: bold; color: #43321e;">8,079 lines</span> of the most played openings in the last 50 years';
    Tab_Lang_150[109] = '<span style="font-weight: bold; color: #43321e;">4,500 games</span> of the greatest players in the world (classic and modern)';
    Tab_Lang_150[110] = 'Less effort, longer retention time';

    Tab_Lang_150[111] = 'Develop your <span style="font-weight: bold; color: #43321e;">intuition</span>';
    Tab_Lang_150[112] = 'Play faster';
    Tab_Lang_150[113] = 'Improve your calculation ability';
    Tab_Lang_150[114] = 'Improve your <span style="font-weight: bold; color: #43321e;">concentration</span>';
    Tab_Lang_150[115] = 'Start <span style="font-weight: bold; color: #43321e;">win more games</span>';
    Tab_Lang_150[116] = 'Better and faster results than any other method';
    Tab_Lang_150[117] = 'Normal price:';
    Tab_Lang_150[118] = 'Today:';
    Tab_Lang_150[119] = 'This promotion expires on:';
    Tab_Lang_150[120] = 'Days';

    Tab_Lang_150[121] = 'Hrs';
    Tab_Lang_150[122] = 'Mins';
    Tab_Lang_150[123] = 'Secs';
    Tab_Lang_150[124] = 'Get your Premium version now for just:';
    Tab_Lang_150[125] = 'CHESS';
    Tab_Lang_150[126] = 'The best exercise for your brain';
    Tab_Lang_150[127] = 'By purchasing this version you will get:';
    Tab_Lang_150[128] = 'Full access indefinitely';
    Tab_Lang_150[129] = 'Free updates';
    Tab_Lang_150[130] = 'Preferred Support';

    Tab_Lang_150[131] = 'Instant Access';
    Tab_Lang_150[132] = 'Feedback';
    Tab_Lang_150[133] = 'lines';
    Tab_Lang_150[134] = 'Level';
    Tab_Lang_150[135] = 'Moves';
    Tab_Lang_150[136] = '';
    Tab_Lang_150[137] = '';
    Tab_Lang_150[138] = '';
    Tab_Lang_150[139] = '';
    Tab_Lang_150[140] = '';

    Tab_Lang_150[141] = '';
    Tab_Lang_150[142] = '';
    Tab_Lang_150[143] = '';
    Tab_Lang_150[144] = '';
    Tab_Lang_150[145] = '';
    Tab_Lang_150[146] = '';
    Tab_Lang_150[147] = '';
    Tab_Lang_150[148] = '';
    Tab_Lang_150[149] = '';
    Tab_Lang_150[150] = '';

    Tab_Lang_151[1] = 'Synchronizing...';
    Tab_Lang_151[2] = 'Free 7-days trial';
    Tab_Lang_151[3] = 'Recover Account';
    Tab_Lang_151[4] = 'Sync accounts';
    Tab_Lang_151[5] = 'Logout';
    Tab_Lang_151[6] = 'Recover Account';
    Tab_Lang_151[7] = 'Sync accounts';
    Tab_Lang_151[8] = 'RECOVER ACCOUNT';
    Tab_Lang_151[9] = 'Account recovery allows you to transfer your account data to this device.';
    Tab_Lang_151[10] = 'To perform this transfer you only need your account ID on the other device (where you created the account). The ID appears at the bottom of the section where your account details are.';

    Tab_Lang_151[11] = 'If you don´t know your ID number, lost your mobile etc... Send a message to our support with your email,';
    Tab_Lang_151[12] = 'by clicking here';
    Tab_Lang_151[13] = 'IMPORTANT! All data from that device will be erased and replaced by the account you indicate.';
    Tab_Lang_151[14] = 'Start Recovery';
    Tab_Lang_151[15] = 'SYNCHRONIZE ACCOUNTS';
    Tab_Lang_151[16] = 'Enter the 4-digit confirmation code sent to the email:';
    Tab_Lang_151[17] = 'Synchronize';
    Tab_Lang_151[18] = 'If you <b>haven´t</b> received our confirmation code email, please check your Spam inbox.';
    Tab_Lang_151[19] = 'To <b>re-send</b> the code';
    Tab_Lang_151[20] = 'If you need <b>help</b>, send a message to our support';

    Tab_Lang_151[21] = 'by clicking here.';
    Tab_Lang_151[22] = 'Now you can use the same account on multiple devices.';
    Tab_Lang_151[23] = 'To sync accounts you need:';
    Tab_Lang_151[24] = 'Sign up on the device you want to sync.';
    Tab_Lang_151[25] = 'Enter the ID of the device you want to sync in the fields below.';
    Tab_Lang_151[26] = 'On the next screen, enter the confirmation code that we will send to your email.';
    Tab_Lang_151[27] = 'Synchronize';
    Tab_Lang_151[28] = 'click here.';
    Tab_Lang_151[29] = '';
    Tab_Lang_151[30] = '';

    Tab_Lang_151[31] = 'Invalid ID, please restart application.';
    Tab_Lang_151[32] = 'Invalid code';
    Tab_Lang_151[33] = 'Invalid App ID';
    Tab_Lang_151[34] = 'You need to register on the device you want to sync.';
    Tab_Lang_151[35] = 'Code resent to email';
    Tab_Lang_151[36] = 'App ID not found. Please re-enter';
    Tab_Lang_151[37] = 'Error filling form';
    Tab_Lang_151[38] = '';
    Tab_Lang_151[39] = '';
    Tab_Lang_151[40] = '';

    Tab_Lang_151[41] = 'Synchronization Conflict';
    Tab_Lang_151[42] = 'There is an update from another device with a more recent date.';
    Tab_Lang_151[43] = 'Which do you want to keep?';
    Tab_Lang_151[44] = 'Keep updates made on the other device';
    Tab_Lang_151[45] = 'Keep updates made to this device';
    Tab_Lang_151[46] = 'Get a discount now!';
    Tab_Lang_151[47] = 'Please enter the Coupon code:';
    Tab_Lang_151[48] = 'Validate Coupon';
    Tab_Lang_151[49] = 'This device:';
    Tab_Lang_151[50] = 'Do you have a discount coupon?';

    Tab_Lang_151[51] = 'Invalid coupon code';
    Tab_Lang_151[52] = '(Main)';


}



function Set_Lang_SPN() {

    Tab_Lang[1]     = 'IMPORTANTE';
    Tab_Lang[2]     = 'Esta es una <b> versión Beta </b>, estamos haciendo experimentos para crear este producto.';
    Tab_Lang[3]     = 'Algunas funciones se pueden <b> desactivar sin previo aviso </b>.';
    Tab_Lang[4]     = 'Su historial de entrenamiento puede perderse durante el período de prueba.';
    Tab_Lang[5]     = 'Uso <span style="color: #0099FF; font-weight: bold;">100% gratuito</span> hasta <span style="color: #0099FF; font-weight: bold;">31/07/21</span>, se puede ampliar registrándose y enviando comentarios.';
    Tab_Lang[6]     = 'Estoy de acuerdo';
    Tab_Lang[7]     = 'Has completado este nivel!';
    Tab_Lang[8]     = 'Has completado este card!';
    Tab_Lang[9]     = '¡Felicidades! ';
    Tab_Lang[10]    = 'AJUSTES';
    Tab_Lang[11]    = 'Sonido:';
    Tab_Lang[12]    = 'Idioma:';
    Tab_Lang[13]    = 'Cancelar';
    Tab_Lang[14]    = 'Guardar';
    Tab_Lang[15]    = 'Selecciona un color';
    Tab_Lang[16]    = 'Aperturas abiertas';
    Tab_Lang[17]    = 'Aperturas semi-abiertas';
    Tab_Lang[18]    = 'Aperturas cerradas';
    Tab_Lang[19]    = 'Aperturas semi-cerradas';
    Tab_Lang[20]    = 'Aperturas de flanco';
    Tab_Lang[21]    = 'Próximos lanzamientos';
    Tab_Lang[22]    = 'Próxima';
    Tab_Lang[23]    = 'Teoría de las aperturas';
    Tab_Lang[24]    = 'Favoritos';
    Tab_Lang[25]    = 'Mi cuenta';
    Tab_Lang[26]    = 'Nombre';
    Tab_Lang[27]    = 'E-mail';
    Tab_Lang[28]    = 'País:';
    Tab_Lang[29]    = 'Género';
    Tab_Lang[30]    = 'Hombre';
    Tab_Lang[31]    = 'Mujer';
    Tab_Lang[32]    = 'Fecha de nacimiento';
    Tab_Lang[33]    = '¿Cuánto tiempo llevas jugando al ajedrez?';
    Tab_Lang[34]    = 'Menos de 3 meses';
    Tab_Lang[35]    = 'De 3 meses hasta 1 año';
    Tab_Lang[36]    = 'Entre 1 y 5 años';
    Tab_Lang[37]    = 'Más de 5 años';
    Tab_Lang[38]    = 'Cual es tu calificación?';
    Tab_Lang[39]    = 'No sé / No tengo';
    Tab_Lang[40]    = '¿Cómo descubrió nuestra aplicación?';
    Tab_Lang[41]    = 'Indicación de amigo';
    Tab_Lang[42]    = 'Redes sociales';
    Tab_Lang[43]    = 'Anuncio';
    Tab_Lang[44]    = 'Apple Store/Google Play';
    Tab_Lang[45]    = 'Otros';
    Tab_Lang[46]    = 'Especificar: (opcional)';
    Tab_Lang[47]    = 'Enviar';
    Tab_Lang[48]    = 'Ayuda';
    Tab_Lang[49]    = 'INFORME DE ERROR';
    Tab_Lang[50]    = 'CONSEJO IMPORTANTE';
    Tab_Lang[51]    = 'Repite mentalmente el <b> nombre de las piezas.</b>, mientras se muestran los movimientos. Peón, Peón, Caballo, Alfil...<br><br>Si aún le resulta difícil, repita el nombre de las piezas <b> en voz alta</b>.';

    Tab_Lang[52]    = '-----';
    Tab_Lang[53]    = '-----';
    Tab_Lang[54]    = '-----';
    Tab_Lang[55]    = '-----';
    Tab_Lang[56]    = '-----';
    Tab_Lang[57]    = '-----';
    Tab_Lang[58]    = '-----';
    Tab_Lang[59]    = '-----';
    Tab_Lang[60]    = '-----';
    Tab_Lang[61]    = '-----';

    Tab_Lang[62]    = 'Mensaje de error';
    Tab_Lang[63]    = 'Hubo un error al realizar su registro. Inténtalo de nuevo. Si el error persiste, comuníquese con nuestro soporte.';
    Tab_Lang[64]    = 'No se pudo acceder al servidor';
    Tab_Lang[65]    = 'Gracias';
    Tab_Lang[66]    = '¡Gracias por ayudarnos a hacer un mejor producto!';

    Tab_Lang[80]    = '¡Envíanos tu opinión sobre esta aplicación y obtén <b> + 15 días de acceso gratuito </b>!';
    Tab_Lang[81]    = '¿Cómo calificaría cada uno de los temas a continuación?';
    Tab_Lang[82]    = 'Colores';
    Tab_Lang[83]    = 'Design';
    Tab_Lang[84]    = 'Logo';
    Tab_Lang[85]    = 'Facilidad de uso';
    Tab_Lang[86]    = 'Aperturas';
    Tab_Lang[87]    = 'Método';

    Tab_Lang[82]    = 'Design';
    Tab_Lang[83]    = 'Ease of use';
    Tab_Lang[84]    = 'Method';
    Tab_Lang[85]    = 'Openings';
    Tab_Lang[86]    = 'Games';
    Tab_Lang[87]    = 'Theory';


    Tab_Lang[88]    = '¿Cuáles son las 3 cosas que más te gustaron de nuestra aplicación?';
    Tab_Lang[89]    = '¿Qué 3 cosas te gustaron menos de nuestra aplicación?';
    Tab_Lang[90]    = 'Comentarios adicionales:';
    Tab_Lang[91]    = 'Enviar';

    Tab_Lang[92]    = 'line';
    Tab_Lang[93]    = 'lines';

    Tab_Lang[100]   = '¡Su registro fue exitoso!';
    Tab_Lang[101]   = '';
    Tab_Lang[102]   = 'Enviamos un correo electrónico a @user_email';
    Tab_Lang[103]   = 'Para confirmar su cuenta, acceda a su buzón y haga clic en el botón <b> VERIFICAR </b>';
    Tab_Lang[104]   = 'Si no ha recibido nuestro correo electrónico, marque su casilla de correo no deseado';
    Tab_Lang[105]   = 'Si necesita ayuda, <span onclick="Show_Suporte_Section();" style="color: #0066FF;">Haga clic aquí.</span>';
    Tab_Lang[106]   = 'En construcción';
    Tab_Lang[107]   = 'Gracias por sus comentarios';

    Tab_Lang [108] = 'Acerca de esta aplicación';
    Tab_Lang [109] = 'Esta es una <b> versión Beta </b>, estamos haciendo experimentos para construir este producto. Las nuevas funciones se incorporarán gradualmente con cada nueva versión, que debería lanzarse cada dos semanas. ';
    Tab_Lang [110] = 'Nuestra metodología de entrenamiento se basa en memorizar las principales posiciones de cada apertura, las líneas más jugadas por los jugadores más importantes del mundo, durante los últimos 50 años.';
    Tab_Lang [111] = 'La aplicación cubre un total de más de 8 mil líneas, divididas en aproximadamente 120 tarjetas (48 disponibles en la versión actual).';
    Tab_Lang [112] = 'Cada tarjeta contiene entre 20 y 150 líneas, que deben ser entrenadas progresivamente desde el nivel 1 al 5, siempre en la misma secuencia.';
    Tab_Lang [113] = 'En el nivel 1, debes repetir los primeros 4 movimientos de cada línea.';
    Tab_Lang [114] = 'A medida que se completa cada nivel, se agregan dos movimientos, lo que aumenta gradualmente la dificultad de cada ejercicio. En el nivel 5, debes repetir hasta 12 movimientos. ';
    Tab_Lang [115] = 'Este sistema de entrenamiento ya ha sido probado con éxito en grupos pequeños, en otra aplicación experimental.';
    Tab_Lang [116] = 'Garantizamos el uso gratuito de esta aplicación hasta el 31 de julio de 2021.';
    Tab_Lang [117] = 'Opcionalmente, puede extender este período hasta 60 días, al registrarse y enviarnos sus comentarios con críticas y sugerencias.';
    Tab_Lang [118] = 'Las sugerencias y críticas, así como las correcciones en las traducciones, son siempre bienvenidas y también se pueden enviar por correo electrónico: <b> support@promasterchess.com </b>';
    Tab_Lang [119] = 'Quiénes somos';
    Tab_Lang [120] = 'Somos un pequeño equipo de entusiastas del Ajedrez, estudiantes de neurociencia, profesionales de TI y especialistas en diseño gráfico, que durante los últimos dos años hemos estado trabajando para desarrollar un método eficiente para entrenar aperturas de una manera intuitiva y con resultados rápidos, sobre todo para ese grupo de jugadores que no dispone de mucho tiempo para estudiar. ';
    Tab_Lang [121] = 'Descargo de responsabilidad';
    Tab_Lang [122] = 'Esta es una versión Beta, estamos haciendo experimentos para construir este producto.';
    Tab_Lang [123] = 'Algunas funciones pueden estar deshabilitadas sin previo aviso.';
    Tab_Lang [124] = 'Su historial de entrenamiento puede perderse durante el período de prueba.';
    Tab_Lang [125] = 'Use 100% gratis hasta el 31/07/21, que puede extenderse registrándose y enviando comentarios.';


    Tab_Lang [130] = 'Reinicio de tarjeta';
    Tab_Lang [131] = 'Esta operación borrará todo el historial de entrenamiento de esta tarjeta.';
    Tab_Lang [132] = '¿Está seguro de que desea restablecer esta tarjeta?';
    Tab_Lang [133] = 'Cancelar';
    Tab_Lang [134] = 'Confirmar';
    Tab_Lang [135] = 'Cancelar';
    Tab_Lang [136] = 'Sí';
    Tab_Lang [137] = 'Cancelar';
    Tab_Lang [138] = 'Sí';
    Tab_Lang [139] = 'BIENVENIDO';

    Tab_Lang [140] = 'La forma más fácil y divertida de evolucionar en el ajedrez';
    Tab_Lang [141] = 'La aplicación <b> Chess Openings Pro-Master </b> contiene todo lo que necesitas para comprender y dominar el intrincado mundo de Chess Openings.';
    Tab_Lang [142] = 'Usted <b> elige la apertura </b> que desea estudiar y el sistema le mostrará las líneas principales.';
    Tab_Lang [143] = 'Todo lo que tienes que hacer es <b> repetir los movimientos que hace la computadora';
    Tab_Lang [144] = 'En el nivel 1 solo hay <b> primeros 4 movimientos </b> en cada lado. Una vez completado este nivel, el nivel de dificultad aumenta gradualmente a 6, 8, 10 e incluso 12 movimientos. ';
    Tab_Lang [145] = 'Con este método, además de mejorar tu juego de apertura, registrarás en tu inconsciente <b> una gran cantidad de patrones de juego </b>, a los que accederás intuitivamente en tus próximos partidos.';
    Tab_Lang [146] = '¡Entrene 15 días durante 15 minutos al día y vea la <b> diferencia en los resultados </b> en comparación con cualquier otro tipo de entrenamiento!';
    Tab_Lang [147] = 'Empezar ahora';
    Tab_Lang [148] = 'Bienvenido';
    Tab_Lang [149] = 'Configuración';

    Tab_Lang [150] = 'Soporte';
    Tab_Lang [151] = '1. CONCEPTOS GENERALES';
    Tab_Lang [152] = '2. EJERCICIOS POR NIVEL ';
    Tab_Lang [153] = '4 movimientos';
    Tab_Lang [154] = '6 movimientos';
    Tab_Lang [155] = '8 movimientos';
    Tab_Lang [156] = '10 movimientos ';
    Tab_Lang [157] = '12 movimientos ';
    Tab_Lang [158] = '3. ECO ';
    Tab_Lang [159] = '4. PARTIDOS';

    Tab_Lang [160] = 'Restablecer esta tarjeta';
    Tab_Lang [161] = 'FAVORITOS';
    Tab_Lang [162] = 'MI CUENTA';
    Tab_Lang [163] = 'Versión:';
    Tab_Lang [164] = 'DATOS PERSONALES';
    Tab_Lang [165] = '¡Cree su cuenta ahora y obtenga otros 15 días de acceso gratuito!';
    Tab_Lang [166] = '¡Tarda menos de 1 minuto!';
    Tab_Lang [167] = 'Crear cuenta';
    Tab_Lang [168] = 'FIRMA';
    Tab_Lang [169] = 'Validez:';

    Tab_Lang [170] = 'History';
    Tab_Lang [171] = 'Renovar';
    Tab_Lang [172] = 'COMENTARIOS';
    Tab_Lang [173] = '¡Gracias! :) ';
    Tab_Lang [174] = 'Último comentario:';
    Tab_Lang [175] = 'Comentarios nuevos';
    Tab_Lang [176] = 'COMENTARIOS';
    Tab_Lang [177] = 'Envíenos su opinión sobre esta aplicación y obtenga + <span style = "color: # F038A3"> ¡15 días gratis! </span>';
    Tab_Lang [178] = 'CREAR CUENTA';
    Tab_Lang [179] = 'Cree su cuenta ahora y obtenga + <span style = "color: # F038A3"> 15 días gratis </span>';

    Tab_Lang [180] = '¡Algo estaba mal! Su pedido no se puede completar. Por favor, contacte con nuestro Soporte para solucionar este problema.';
    Tab_Lang [181] = '';
    Tab_Lang [182] = '';
    Tab_Lang [183] = '';
    Tab_Lang [184] = '';
    Tab_Lang [185] = '';
    Tab_Lang [186] = '';
    Tab_Lang [187] = '';
    Tab_Lang [188] = '';
    Tab_Lang [189] = '';

    Tab_Lang [190] = '';
    Tab_Lang [191] = ''
    Tab_Lang [193] = '';
    Tab_Lang [194] = '';
    Tab_Lang [195] = 'SOPORTE';
    Tab_Lang [196] = 'Este canal es para que informe rápidamente <b> problemas </b> con la aplicación, así como para enviar sus <b> preguntas </b>, <b> reseñas </b> y <b> sugerencias </b>. ';
    Tab_Lang [197] = 'Publicaciones anteriores';
    Tab_Lang [198] = 'Envíe su mensaje';
    Tab_Lang [199] = 'Enviar';

    Tab_Lang [200] = 'AJUSTES';
    Tab_Lang [201] = 'Reserva con 30% de descuento';
    Tab_Lang [202] = '¿Confirmar reserva?';
    Tab_Lang [203] = 'Informar error';
    Tab_Lang [204] = '¿Este ejercicio es incorrecto?';
    Tab_Lang [205] = '¡Gracias!';
    Tab_Lang [206] = 'ENTRENAR';
    Tab_Lang [207] = 'Crear cuenta';
    Tab_Lang [208] = 'COMPRAS';
    Tab_Lang [209] = '';

    Tab_Lang [210] = 'Reserva OK';
    Tab_Lang [211] = '¡Su reserva fue exitosa, gracias!';
    Tab_Lang [212] = 'Las negras consiguieron jaque mate';
    Tab_Lang [213] = 'Las negras se rindieran';
    Tab_Lang [214] = 'Las blancas consiguieron jaque mate';
    Tab_Lang [215] = 'Las blancas se rindieran';
    Tab_Lang [216] = 'Corbata ahogada';
    Tab_Lang [217] = 'Empate por repetición';
    Tab_Lang [218] = 'Empate por material insuficiente';
    Tab_Lang [219] = 'Regla de empate por 50 movimientos';

    Tab_Lang [220] = 'Empate de mutuo acuerdo';
    Tab_Lang [221] = 'Empecemos';
    Tab_Lang [222] = 'Aún no tienes mensajes.';
    Tab_Lang [223] = 'RESERVADO';
    Tab_Lang [224] = 'Calificación de coincidencia';
    Tab_Lang [225] = 'Incremento de dificultad gradual';
    Tab_Lang [226] = 'Los ejercicios para cada tarjeta se dividen en 5 niveles: <li> Nivel 1 = Primeros 4 movimientos </li> <li> Nivel 2 = Primeros 6 movimientos </li> <li> Nivel 3 = Primero 8 movimientos </li> <li> Nivel 4 = Primeros 10 movimientos </li> <li> Nivel 5 = Primeros 12 movimientos </li> <br> Debes completar un nivel antes de pasar al siguiente. ';
    Tab_Lang [227] = 'Facilidad para encontrar vacantes';
    Tab_Lang [228] = 'La ECO (Enciclopedia de aperturas de ajedrez) es una colección de libros que describen todas las aperturas de ajedrez conocidas utilizando un sistema de codificación estándar internacional. <br> <br> Cada ECO describe brevemente las mejores líneas y variantes de cada apertura. . <br> <br> Cada tarjeta puede contener uno o más de estos códigos. ';
    Tab_Lang [229] = 'Aprende de los mejores GM del mundo';

    Tab_Lang [230] = 'Cada tarjeta contiene de 20 a 30 partidos que se pueden estudiar como referencia. <br> <br> Al jugar un partido, captura las ideas estratégicas y tácticas más comunes para la apertura que está estudiando. <br> <br> Cuantas más veces veas un partido, mejores serán tus sensaciones para este tipo de posición. <br> <br> Mira cada partido varias veces para entenderlo bien. <br> <br> Al jugar los partidos , intente anticipar las ofertas del bando ganador. Cuanto más hagas esto, más rápido evolucionará tu juego. ';
    Tab_Lang [231] = 'Su opinión es muy importante para nosotros';
    Tab_Lang [232] = 'Puede comunicarse con nosotros en <b> inglés </b>, <b> portugués </b>, <b> español </b> y <b> alemán. </b> <br> <br> Nos esforzaremos por responder a todos los mensajes dentro de <b> 24 horas </b>. ';
    Tab_Lang [233] = '';
    Tab_Lang [234] = '';
    Tab_Lang [235] = '';
    Tab_Lang [236] = '';
    Tab_Lang [237] = '';
    Tab_Lang [238] = '';
    Tab_Lang [239] = '';

    Tab_Lang [240] = '¿Estás disfrutando de nuestra aplicación?';
    Tab_Lang [241] = 'Enviar opinión';
    Tab_Lang [242] = 'Crear cuenta';
    Tab_Lang [243] = 'Enviar comentarios';
    Tab_Lang [244] = 'Conexión al servidor no disponible. Por favor revise su conexion a internet.';
    Tab_Lang [245] = 'Entrenar';
    Tab_Lang [246] = 'Partidas';
    Tab_Lang [247] = 'Aún no tienes cards favoritos.';
    Tab_Lang [248] = 'Este ejercicio contiene errores y se omitirá.';
    Tab_Lang [249] = '';

    Tab_Lang [250] = 'hace unos segundos';
    Tab_Lang [251] = 'hace';
    Tab_Lang [252] = 'minuto';
    Tab_Lang [253] = 'minutos';
    Tab_Lang [254] = 'hora';
    Tab_Lang [255] = 'horas';
    Tab_Lang [256] = 'día';
    Tab_Lang [257] = 'días';
    Tab_Lang [258] = 'semana';
    Tab_Lang [259] = 'semanas';

    Tab_Lang [260] = 'Compra exitosa';
    Tab_Lang [261] = 'Gracias, su compra fue exitosa. <br> <br> ¡Gracias a su apoyo, podemos seguir trabajando para que tenga un mejor producto!';
    Tab_Lang [262] = 'Mira esta aplicación para entrenar Ajedrez:';
    Tab_Lang [263] = 'Su período de prueba gratuito tiene @ días restantes.';
    Tab_Lang [264] = 'Acceso suspendido temporalmente';
    Tab_Lang [265] = 'Para renovar su acceso a los ejercicios, visite nuestra Store.';
    Tab_Lang [266] = 'Cree una cuenta y envíenos sus comentarios para extender su período de prueba gratuito.';
    Tab_Lang [267] = 'Comprar ahora';
    Tab_Lang [268] = 'Evaluar';
    Tab_Lang [269] = 'PROMOCIÓN DE LANZAMIENTO';

    Tab_Lang [270] = '¡30% DE DESCUENTO!';
    Tab_Lang [271] = 'Válido hasta: 15 de septiembre de 2021';
    Tab_Lang [272] = 'PLANES DE SUSCRIPCIÓN';
    Tab_Lang [273] = '¡Consíguelo AHORA!';
    Tab_Lang [274] = 'El período de suscripción contratado se agregará a su período de uso gratuito restante, si corresponde.';
    Tab_Lang [275] = '¡Sin costo adicional para nuevas versiones y contenido nuevo durante el período del contrato!';
    Tab_Lang [276] = '¡Acceso instantáneo!';
    Tab_Lang [277] = '¡Todos los planes garantizan el 100% de acceso a futuras versiones durante el período del contrato!';
    Tab_Lang [278] = '';
    Tab_Lang [279] = '';

    Tab_Lang [300] = 'Algunos principios generales';
    Tab_Lang [301] = '1. Desarrolle Rápidamente Todas las Piezas';
    Tab_Lang [302] = 'La apertura es la fase de la partida cuyo principal objetivo es desarrollar las piezas y enrocar lo más rápidamente posible.';
    Tab_Lang [303] = 'La apertura estará completa cuando uno o ambos jugadores hayan conectado sus torres.';
    Tab_Lang [304] = 'El jugador que termine primero su desarrollo ganará la iniciativa.';
    Tab_Lang [305] = '2. Desarrolle los Caballos Antes que los Alfiles';
    Tab_Lang [306] = 'Mientras los alfiles logran controlar varias casas desde sus posiciones originales, si no hay peones que obstruyan su paso, los caballos, por ser piezas de menor movilidad, dominan sólo las casillas vecinas y demoran más para llegar al campo adversario.';
    Tab_Lang [307] = '3. No Mueva Dos Veces la Misma Pieza Durante la Apertura';
    Tab_Lang [308] = 'A cada jugada, trate de poner sus piezas en la mejor posición posible.';
    Tab_Lang [309] = 'Mover la misma pieza más de una vez durante la apertura es una pérdida de tiempo y puede significar la pérdida de la iniciativa.';
    Tab_Lang [310] = '4. No Haga Movimentos Innecesarios de Peones en la Apertura';
    Tab_Lang [311] = 'Durante la apertura tienen que reducirse al mínimo los movimientos de peones. El tiempo gastado con esos movimientos podría ser usado para desarrollar una pieza.';
    Tab_Lang [312] = 'El movimiento de peones es adecuado – generalmente -  cuando tiene la finalidad de ocupar el centro o de abrir diagonales para la dama y los alfiles.';
    Tab_Lang [313] = '5. No Dé Jaques Innecesarios';
    Tab_Lang [314] = 'Un jaque innecesario es el que puede ser defendido fácilmente por el adversario.';
    Tab_Lang [315] = 'Durante la apertura, la mayoría de los jaques pueden ser defendidos con jugadas que favorecen el desarrollo.';
    Tab_Lang [316] = '6. No Abra la Posición si Está Retrasado en  Desarrollo';
    Tab_Lang [317] = 'Una posición abierta siempre favorece al bando que tiene más piezas en juego y, por lo tanto, sólo debe ser provocada por quien tiene ventaja en desarrollo.';
    Tab_Lang [318] = '7. En la Apertura Coloque la Dama Atrás de su Propia Línea de Peones';
    Tab_Lang [319] = 'Por ser una pieza muy poderosa, la dama también es una pieza muy vulnerable y objeto constante de ataque enemigo.';
    Tab_Lang [320] = 'Por eso es conveniente – durante la apertura – colocarla preferentemente en la segunda línea,  detrás de un peón, dejando libre la primera línea para el desarrollo de las torres.';
    Tab_Lang [321] = '8. Nunca Cambie una Pieza Desarrollada por una Pieza no Desarrollada';
    Tab_Lang [322] = 'En general es un pésimo negocio cambiar una pieza bien colocada por una pieza mal colocada.';
    Tab_Lang [323] = 'Cuando uno cambia una pieza desarrollada por otra del adversario no desarrollada, uno pierde el tiempo consumido por aquella pieza; lo mismo ocurre cuando uno cambia una pieza movida varias veces por una del adversario que fue movida una sola vez.';
    Tab_Lang [324] = '9. Enroque lo más Rápido Posible';
    Tab_Lang [325] = 'La seguridad del rey es uno de los factores más importantes durante la apertura y el medio juego.';
    Tab_Lang [326] = 'En el centro del tablero, principalmente en posiciones abiertas, el rey estará siempre vulnerable a ataques del adversario. ';
    Tab_Lang [327] = 'Enrocar significa colocar el rey en una posición cómoda detrás de una barrera de peones y - al mismo tiempo - permitir el desarrollo de una torre, la que rápidamente podrá ocupar una columna abierta o semiaberta.';
    Tab_Lang [328] = '10. El Enroque en Corto es más Seguro que el Enroque en largo';
    Tab_Lang [329] = 'Además de ser más rápido (sólo es necesario desarrollar dos piezas para hacerlo), el enroque en corto deja al rey más lejos del centro y más seguro, detrás de una barrera de peones que lo protege.';
    Tab_Lang [330] = 'Sin embargo, enrocar en el ala opuesta al enroque del adversario puede ser muy interesante para crear más chances de ataque.';
    Tab_Lang [331] = '11. Trate de Impedir el Enroque del Adversario';
    Tab_Lang [332] = 'Si su adversario está demorándose mucho para enrocar, trate de prolongarle todavía más la estadia en el centro.';
    Tab_Lang [333] = 'Una de las maneras más usuales de hacer esto es controlar una de las casillas por las que tiene que pasar el rey (normalmente f1 o f8, en el caso del enroque en corto).';
    Tab_Lang [334] = 'Mantener al rey adversario en el centro vale, la mayor parte de las veces, el sacrifício de un peón.';
    Tab_Lang [335] = '12. Domine el Mayor Territorio Posible';
    Tab_Lang [336] = 'El que tiene ventaja de espacio dispone de mayor movilidad para sus piezas y, por lo tanto, mayor flexibilidad para trasladar sus piezas de un flanco al otro.';
    Tab_Lang [337] = 'Por el contrario, el que está en una posición restringida tiene dificuldates para maniobrar sus piezas, lo que puede ser fatal si se las requiere para la defensa del rey.';
    Tab_Lang [338] = '13. Avance sus Peones para Ganar Espacio';
    Tab_Lang [339] = 'A pesar de que el avance de peones es el principal recurso para restringir la posición enemiga, esta regla debe ser observada con cuidado, pues cuanto más lejos estén los peones de su base, más difícil resultará defenderlos.';
    Tab_Lang [340] = 'Además, cada avance de peón crea debilidades en las casillas adyacentes, que pueden venir a ser ocupadas por piezas enemigas.';
    Tab_Lang [341] = '14. Coloque  sus Peones en el Centro';
    Tab_Lang [342] = 'El centro del tablero de ajedrez está formado por las casillas e4, e5, d4, d5. El llamado centro grande incluye las casillas comprendidas en el cuadrado con vértices en c3, c6, f3 y f6.';
    Tab_Lang [343] = 'Los peones son las mejores fuerzas para la creación del centro porque, al contrario de las piezas, no son susceptibles al ataque de los peones enemigos.';
    Tab_Lang [344] = '15. Mantenga sus Piezas lo más Cerca Posible del Centro';
    Tab_Lang [345] = 'Una pieza en el centro controla más casillas que en cualquier otra parte del tablero. Mientras un caballo en el centro puede controlar ocho casillas, otro ubicado en una de las esquinas del tablero tiene sólo dos movimientos posibles.';
    Tab_Lang [346] = 'El control del centro también es importante porque es a través de éste que las piezas se trasladan de un lado al otro del tablero. Si sus piezas logran trasladarse más rápido que las de su adversario, usted tendrá más chances de lograr un ataque exitoso.';
    Tab_Lang [347] = '16. En los Cambios de Peones, Trate al Máximo de Acercarlos al Centro';
    Tab_Lang [348] = 'Como los peones centrales son más importantes que los laterales, siempre que su oponente capture una pieza suya y usted tenga la posibilidad de retomar la pieza enemiga con dos peones diferentes, es aconsejable que tome con el peón que esté más alejado del centro.';
    Tab_Lang [349] = '17. Controle el Centro Antes de Atacar';
    Tab_Lang [350] = 'Ataques exitosos en los flancos dependen en gran parte del control del centro. Por lo tanto, antes de empezar un ataque a un flanco, preocúpese en mantener un centro fuerte y estable.';
    Tab_Lang [351] = '18. Las Torres Deben Ocupar Rápidamente las Columnas Abiertas o Semiabertas';
    Tab_Lang [352] = 'Durante la apertura, las torres son las últimas piezas que se desarrollan. Son efectivas cuando ocupan una columna abierta o semiabierta.';
    Tab_Lang [353] = 'Generalmente, las casillas ideales para poner las torres son e1, d1 y c1 (e8, d8 y c8 de las negras), porque desde estas casillas las torres logran ejercer presión en el centro y al mismo tiempo defender la retaguardia.';
    Tab_Lang [354] = 'Sin embargo, una torre puede ser una defensa eficiente aun en la segunda fila, al mismo tiempo que sigue operando agresivamente en la columna.';
    Tab_Lang [355] = '19. Piense primero en la defensa';
    Tab_Lang [356] = 'El principio más importante del ajedrez es la seguridad. En el movimiento de cada oponente, deténgase y pregúntese:';
    Tab_Lang [357] = '- ¿Qué amenaza esta oferta?';
    Tab_Lang [358] = '- ¿Cuáles son las intenciones de mi oponente?';
    Tab_Lang [359] = '- ¿Qué haría yo si estuviera en su lugar?';
    Tab_Lang [360] = '20. Consideraciones finales';
    Tab_Lang [361] = 'El ajedrez no es una ciencia exacta y los consejos y conceptos presentados aquí no son aplicados en 100% de los casos y no deben ser seguidos a ciegas. ';
    Tab_Lang [362] = 'Una de las grandes diferencias entre un gran maestro  y un aficionado reside en saber cuándo se deben o no violar los princípios estratégicos básicos.';
    Tab_Lang [363] = 'En general, cuando decimos: Evite avanzar los peones que protegen el rey, significa: Evite avanzar los peones que protegen el rey, a menos que usted tenga una buena razón para hacerlo.';

    Tab_Lang [364] = 'Botones útiles';
    Tab_Lang [365] = 'Mostrar el control deslizante de tiempo';
    Tab_Lang [366] = 'Repetir el último ejercicio';
    Tab_Lang [367] = 'Omitir movimientos de computadora';
    Tab_Lang [368] = 'Enviar informe diciendo que el ejercicio es incorrecto';

    Tab_Lang_150 [1] = 'Posibilidad de navegar por los ejercicios de cada nivel (LÍNEAS)';
    Tab_Lang_150 [2] = 'Posibilidad de excluir habilitar (ON) o deshabilitar (OFF) los ejercicios de cada Tarjeta';
    Tab_Lang_150 [3] = 'Entrenar un nivel seleccionado';
    Tab_Lang_150 [4] = 'Conceptos estratégicos sobre las 50 cartas más utilizadas';
    Tab_Lang_150 [5] = '9 tarjetas 100% gratis independientemente del tiempo de uso';
    Tab_Lang_150 [6] = 'El sistema de compra ya no es por suscripción, sino un pago único';
    Tab_Lang_150 [7] = 'Entrenamiento iniciado';
    Tab_Lang_150 [8] = 'Ya ha comenzado un entrenamiento en este nivel.';
    Tab_Lang_150 [9] = 'Nuevo';
    Tab_Lang_150 [10] = 'Continuar';

    Tab_Lang_150 [11] = 'PREFERENCIAS';
    Tab_Lang_150 [12] = 'Rápido';
    Tab_Lang_150 [13] = 'Normal';
    Tab_Lang_150 [14] = 'Lento';
    Tab_Lang_150 [15] = 'Demasiado lento';
    Tab_Lang_150 [16] = 'Tiempo por movimiento:';
    Tab_Lang_150 [17] = 'Después de 1 error';
    Tab_Lang_150 [18] = 'Después de 2 errores';
    Tab_Lang_150 [19] = 'Después de 3 errores';
    Tab_Lang_150 [20] = 'Nunca';

    Tab_Lang_150 [21] = 'Mostrar solución:';
    Tab_Lang_150 [22] = 'Predeterminado';
    Tab_Lang_150 [23] = 'Cerrar';
    Tab_Lang_150 [24] = 'Nuestro método';
    Tab_Lang_150 [25] = 'Cómo entrenar';
    Tab_Lang_150 [26] = 'Configure su entrenamiento';
    Tab_Lang_150 [27] = 'Coincidencias';
    Tab_Lang_150 [28] = 'Teoría abierta';
    Tab_Lang_150 [29] = 'Favoritos';
    Tab_Lang_150 [30] = 'Registro';

    Tab_Lang_150 [31] = 'Versión gratuita x Versión Premium';
    Tab_Lang_150 [32] = 'Mejoras esperadas';
    Tab_Lang_150 [33] = 'LÍNEAS';
    Tab_Lang_150 [34] = 'PARTIDOS';
    Tab_Lang_150 [35] = 'LÍNEAS';
    Tab_Lang_150 [36] = 'Entrenar';
    Tab_Lang_150 [37] = 'Todo ON';
    Tab_Lang_150 [38] = 'PARTIDOS';
    Tab_Lang_150 [39] = 'Correo electrónico:';
    Tab_Lang_150 [40] = 'Edad:';

    Tab_Lang_150 [41] = 'País:';
    Tab_Lang_150 [42] = 'Su ID:';
    Tab_Lang_150 [43] = 'TIENDA';
    Tab_Lang_150 [44] = 'Rápido';
    Tab_Lang_150 [45] = 'Normal';
    Tab_Lang_150 [46] = 'Lento';
    Tab_Lang_150 [47] = 'Demasiado lento';
    Tab_Lang_150 [48] = 'Tiempo por movimiento:';
    Tab_Lang_150 [49] = 'Después de 1 error';
    Tab_Lang_150 [50] = 'Después de 2 errores';

    Tab_Lang_150 [51] = 'Después de 3 errores';
    Tab_Lang_150 [52] = 'Nunca';
    Tab_Lang_150 [53] = 'Mostrar solución:';
    Tab_Lang_150 [54] = 'Sonido:';
    Tab_Lang_150 [55] = 'Predeterminado';
    Tab_Lang_150 [56] = 'Nombre';
    Tab_Lang_150 [57] = '¿Cómo podemos mejorar?';
    Tab_Lang_150 [58] = 'Envíenos sus críticas y sugerencias y obtenga un producto aún mejor.';
    Tab_Lang_150 [59] = 'Cree su cuenta para mantener una copia de seguridad automática de su historial de entrenamiento en nuestros servidores.';
    Tab_Lang_150 [60] = '¡Es gratis!';

    Tab_Lang_150 [61] = 'Reenviar correo electrónico';
    Tab_Lang_150 [62] = 'Se ha enviado un correo electrónico a';
    Tab_Lang_150 [63] = 'Por favor revise su bandeja de entrada de correo electrónico o carpeta de SPAM.';
    Tab_Lang_150 [64] = 'Acceso limitado';
    Tab_Lang_150 [65] = 'En la versión gratuita, el número de ejercicios y partidos está limitado a las Cartas que son grises. <br> <br> Aprovecha nuestra tarifa de precio reducido para comprar la versión Premium y obtener inmediatamente acceso completo a todas las Cartas. . <br> <br> ¡Si no está seguro de comprar o no la versión Premium, pruebe con una prueba gratuita de 7 días! ';
    Tab_Lang_150 [66] = 'En la versión gratuita, el número de ejercicios y partidos se limita a las Cartas que son grises. <br> <br> Aprovecha nuestra tarifa de precio reducido para comprar la versión Premium y obtener acceso completo de inmediato a todas las Cartas. . ';
    Tab_Lang_150 [67] = 'No hay ejercicios habilitados';
    Tab_Lang_150 [68] = 'Todos los ejercicios de esta serie se han desactivado (APAGADO). <br> Haga clic en LÍNEAS y luego en TODO ENCENDIDO para volver a la serie predeterminada.';
    Tab_Lang_150 [69] = 'Importante';
    Tab_Lang_150 [70] = 'Puede habilitar (ON) o deshabilitar (OFF) los ejercicios que desea estudiar.';

    Tab_Lang_150 [71] = 'Los ejercicios desactivados (OFF) no aparecerán en futuros entrenamientos.';
    Tab_Lang_150 [72] = 'Si desea volver al patrón inicial, haga clic en el botón LÍNEAS de la tarjeta correspondiente.';
    Tab_Lang_150 [73] = 'Envíenos su opinión sobre esta aplicación y ayúdenos a hacer un mejor producto.';
    Tab_Lang_150 [74] = 'Según nuestra base de datos, ya ha utilizado el período de prueba gratuito. Si esta información no es correcta, envíe un mensaje a nuestro soporte. ';
    Tab_Lang_150 [75] = 'Configure su entrenamiento';
    Tab_Lang_150 [76] = 'Use los botones rosas (1 a 5) para seleccionar ejercicios de un nivel correspondiente. <br> <br> Haga clic en el botón ON / OFF para seleccionar las líneas que desea entrenar. <br> <br> Para ver un entrenamiento o explorar los entrenamientos para el nivel seleccionado, simplemente haga clic en el botón <img src= "img/but_go3.png" style ="width: 24px;"> <br> <br> Ejercicios ya no aparecerá. en entrenamiento normal. ';
    Tab_Lang_150 [77] = 'Use las teclas de flecha para comenzar';
    Tab_Lang_150 [78] = 'Su período de prueba finaliza en:';
    Tab_Lang_150 [79] = 'Días';
    Tab_Lang_150 [80] = 'Horas';

    Tab_Lang_150 [81] = 'Minutos';
    Tab_Lang_150 [82] = 'Segundos';
    Tab_Lang_150 [83] = 'No volver a mostrar este mensaje';
    Tab_Lang_150 [84] = '7 días GRATIS';
    Tab_Lang_150 [85] = 'Versión Premium';
    Tab_Lang_150 [86] = 'Compra ahora';
    Tab_Lang_150 [87] = 'Mensaje de confirmación';
    Tab_Lang_150 [88] = 'Ha desactivado (OFF) uno o más ejercicios en el entrenamiento actual. <br> <br> Haga clic en CONFIRMAR si desea que los ejercicios desactivados no aparezcan en entrenamientos futuros para esta Tarjeta. <br> <br> Al hacer clic en CONFIRMAR, se restablecerá el nivel de entrenamiento más reciente para esa Tarjeta. ';
    Tab_Lang_150 [89] = 'Cancelar';
    Tab_Lang_150 [90] = 'Confirmar';

    Tab_Lang_150 [91] = '';
    Tab_Lang_150 [92] = '';
    Tab_Lang_150 [93] = '';
    Tab_Lang_150 [94] = '';
    Tab_Lang_150 [95] = '';
    Tab_Lang_150 [96] = '';
    Tab_Lang_150 [97] = '';
    Tab_Lang_150 [98] = '';
    Tab_Lang_150 [99] = '';
    Tab_Lang_150 [100] = '';

    Tab_Lang_150 [101] = 'Clave de licencia:';
    Tab_Lang_150 [102] = 'Novedades de las próximas versiones:';
    Tab_Lang_150 [103] = 'Buscar vacantes';
    Tab_Lang_150 [104] = 'Usar la misma cuenta para varios dispositivos';
    Tab_Lang_150 [105] = 'Complemento de conceptos estratégicos generales para cada apertura';
    Tab_Lang_150 [106] = 'Establecer colores de tablero';
    Tab_Lang_150 [107] = '¡El método más rápido y eficiente para evolucionar en Ajedrez!';
    Tab_Lang_150 [108] = '<span style = "font-weight: bold; color: #43321e;"> 8.079 líneas </span> de las aperturas más jugadas en los últimos 50 años';
    Tab_Lang_150 [109] = '<span style = "font-weight: bold; color: #43321e;"> 4.500 partidos </span> de los mejores jugadores del mundo (clásicos y modernos)';
    Tab_Lang_150 [110] = 'Menos esfuerzo, mayor tiempo de retención';

    Tab_Lang_150 [111] = 'Desarrolle su <span style = "font-weight: bold; color: #43321e;"> intuición </span>';
    Tab_Lang_150 [112] = 'Juega más rápido';
    Tab_Lang_150 [113] = 'Mejore su capacidad de cálculo';
    Tab_Lang_150 [114] = 'Mejora tu <span style = "font-weight: bold; color: #43321e;"> concentración </span>';
    Tab_Lang_150 [115] = 'Empezar <span style = "font-weight: bold; color: #43321e;"> ganar más partidos </span>';
    Tab_Lang_150 [116] = 'Resultados mejores y más rápidos que cualquier otro método';
    Tab_Lang_150 [117] = 'Precio normal:';
    Tab_Lang_150 [118] = 'Hoy:';
    Tab_Lang_150 [119] = 'Esta promoción vence el:';
    Tab_Lang_150 [120] = 'Días';

    Tab_Lang_150 [121] = 'Horas';
    Tab_Lang_150 [122] = 'Minutos';
    Tab_Lang_150 [123] = 'Segs';
    Tab_Lang_150 [124] = 'Obtenga su versión completa ahora por solo:';
    Tab_Lang_150 [125] = 'AJEDREZ';
    Tab_Lang_150 [126] = 'El mejor ejercicio para tu cerebro';
    Tab_Lang_150 [127] = 'Al comprar esta versión, obtendrá:';
    Tab_Lang_150 [128] = 'Acceso completo indefinidamente';
    Tab_Lang_150 [129] = 'Actualizaciones gratuitas';
    Tab_Lang_150 [130] = 'Soporte preferido';

    Tab_Lang_150 [131] = 'Acceso instantáneo';
    Tab_Lang_150 [132] = 'Comentarios';
    Tab_Lang_150 [133] = 'líneas';
    Tab_Lang_150 [134] = 'Nivel';
    Tab_Lang_150 [135] = 'Ofertas';
    Tab_Lang_150 [136] = '';
    Tab_Lang_150 [137] = '';
    Tab_Lang_150 [138] = '';
    Tab_Lang_150 [139] = '';
    Tab_Lang_150 [140] = '';

    Tab_Lang_150 [141] = '';
    Tab_Lang_150 [142] = '';
    Tab_Lang_150 [143] = '';
    Tab_Lang_150 [144] = '';
    Tab_Lang_150 [145] = '';
    Tab_Lang_150 [146] = '';
    Tab_Lang_150 [147] = '';
    Tab_Lang_150 [148] = '';
    Tab_Lang_150 [149] = '';
    Tab_Lang_150 [150] = '';

    Tab_Lang_151 [1] = 'Sincronizando ...';
    Tab_Lang_151 [2] = 'Free 7-days trial';
    Tab_Lang_151 [3] = 'Recuperar cuenta';
    Tab_Lang_151 [4] = 'Sincronizar cuentas';
    Tab_Lang_151 [5] = 'Cerrar sesión';
    Tab_Lang_151 [6] = 'Recuperar cuenta';
    Tab_Lang_151 [7] = 'Sincronizar cuentas';
    Tab_Lang_151 [8] = 'RECUPERAR CUENTA';
    Tab_Lang_151 [9] = 'La recuperación de la cuenta le permite transferir los datos de su cuenta a este dispositivo.';
    Tab_Lang_151 [10] = 'Para realizar esta transferencia, solo necesita su ID de cuenta en el otro dispositivo (donde creó la cuenta). El ID aparece en la parte inferior de la sección donde están los detalles de su cuenta. ';

    Tab_Lang_151 [11] = 'Si no sabe su número de identificación, perdió su teléfono móvil, etc. Envíe un mensaje a nuestro soporte con su correo electrónico,';
    Tab_Lang_151 [12] = 'haciendo clic aquí';
    Tab_Lang_151 [13] = '¡IMPORTANTE! Todos los datos de ese dispositivo serán borrados y reemplazados por la cuenta que indique. ';
    Tab_Lang_151 [14] = 'Iniciar recuperación';
    Tab_Lang_151 [15] = 'SINCRONIZAR CUENTAS';
    Tab_Lang_151 [16] = 'Ingrese el código de confirmación de 4 dígitos enviado al correo electrónico:';
    Tab_Lang_151 [17] = 'Sincronizar';
    Tab_Lang_151 [18] = 'Si <b> no </b> ha recibido nuestro correo electrónico con el código de confirmación, verifique su bandeja de entrada de correo no deseado.';
    Tab_Lang_151 [19] = 'Para <b> reenviar </b> el código';
    Tab_Lang_151 [20] = 'Si necesita <b> ayuda </b>, envíe un mensaje a nuestro soporte';

    Tab_Lang_151 [21] = 'haciendo clic aquí.';
    Tab_Lang_151 [22] = 'Ahora puede usar la misma cuenta en varios dispositivos.';
    Tab_Lang_151 [23] = 'Para sincronizar cuentas necesitas:';
    Tab_Lang_151 [24] = 'Regístrese en el dispositivo que desea sincronizar';
    Tab_Lang_151 [25] = 'Ingrese la ID del dispositivo que desea sincronizar en los campos a continuación.';
    Tab_Lang_151 [26] = 'En la siguiente pantalla, ingrese el código de confirmación que le enviaremos a su correo electrónico.';
    Tab_Lang_151 [27] = 'Sincronizar';
    Tab_Lang_151 [28] = 'haga clic aquí.';
    Tab_Lang_151 [29] = '';
    Tab_Lang_151 [30] = '';

    Tab_Lang_151 [31] = 'ID no válida, reinicie la aplicación.';
    Tab_Lang_151 [32] = 'Código no válido';
    Tab_Lang_151 [33] = 'ID de aplicación no válido';
    Tab_Lang_151 [34] = 'Debe registrarse en el dispositivo que desea sincronizar.';
    Tab_Lang_151 [35] = 'Código reenviado al correo electrónico';
    Tab_Lang_151 [36] = 'No se encontró la ID de la aplicación. Vuelva a ingresar ';
    Tab_Lang_151 [37] = 'Error al completar el formulario';
    Tab_Lang_151 [38] = '';
    Tab_Lang_151 [39] = '';
    Tab_Lang_151 [40] = '';

    Tab_Lang_151[41] = 'Conflicto de sincronización';
    Tab_Lang_151[42] = 'Hay una actualización de otro dispositivo con una fecha más reciente.';
    Tab_Lang_151[43] = '¿Cuál quieres conservar?';
    Tab_Lang_151[44] = 'Mantener las actualizaciones realizadas en el otro dispositivo';
    Tab_Lang_151[45] = 'Mantener las actualizaciones realizadas en este dispositivo';
    Tab_Lang_151[46] = '¡Consigue un descuento ahora!';
    Tab_Lang_151[47] = 'Ingrese el código del cupón:';
    Tab_Lang_151[48] = 'Validar cupón';
    Tab_Lang_151[49] = 'Este dispositivo:';
    Tab_Lang_151[50] = '¿Tiene un cupón de descuento?';

    Tab_Lang_151[51] = 'Código de cupón no válido';
    Tab_Lang_151[52] = '(Principal)';

}





function Set_Lang_FRA() {

    Tab_Lang[1]     = 'IMPORTANT';
    Tab_Lang[2]     = 'Ceci est une <b> version bêta </b>, nous faisons des tests pour créer ce produit.';
    Tab_Lang[3]     = 'Certaines fonctionnalités peuvent être désactivées <b> sans préavis</b>.';
    Tab_Lang[4]     = 'Votre historique d´entraînement peut être perdu pendant la période de test.';
    Tab_Lang[5]     = 'Utilisation <span style="color: #0099FF; font-weight: bold;">100% gratuit</span> jusqu`à <span style="color: #0099FF; font-weight: bold;">31/07/21</span>, peut être prolongé en s`inscrivant et en envoyant des commentaires.';
    Tab_Lang[6]     = 'Je suis d´accord';
    Tab_Lang[7]     = 'Vous avez terminé ce niveau!';
    Tab_Lang[8]     = 'Vous avez rempli cette carte!';
    Tab_Lang[9]     = 'Toutes nos félicitations! ';
    Tab_Lang[10]    = 'LES PARAMÈTRES';
    Tab_Lang[11]    = 'Son:';
    Tab_Lang[12]    = 'Langue:';
    Tab_Lang[13]    = 'Annuler';
    Tab_Lang[14]    = 'Enregistrer';
    Tab_Lang[15]    = 'Choisissez une couleur';
    Tab_Lang[16]    = 'Ouvertures ouvertes';
    Tab_Lang[17]    = 'Ouvertures semi-ouvertes';
    Tab_Lang[18]    = 'Ouvertures fermées';
    Tab_Lang[19]    = 'Ouvertures semi-fermées';
    Tab_Lang[20]    = 'Ouvertures de flanc';
    Tab_Lang[21]    = 'Prochaines sorties';
    Tab_Lang[22]    = 'Suivant';
    Tab_Lang[23]    = 'Théorie des ouvertures';
    Tab_Lang[24]    = 'Favoris';
    Tab_Lang[25]    = 'Mon compte';
    Tab_Lang[26]    = 'Nom';
    Tab_Lang[27]    = 'E-mail';
    Tab_Lang[28]    = 'Pays';
    Tab_Lang[29]    = 'Genre';
    Tab_Lang[30]    = 'Masculin';
    Tab_Lang[31]    = 'Feminin';
    Tab_Lang[32]    = 'Date de naissance';
    Tab_Lang[33]    = 'Depuis combien de temps jouez-vous aux échecs?';
    Tab_Lang[34]    = 'Moins de 3 mois';
    Tab_Lang[35]    = 'De 3 mois à 1 an';
    Tab_Lang[36]    = 'Entre 1 et 5 ans';
    Tab_Lang[37]    = 'Plus de 5 ans';
    Tab_Lang[38]    = 'Quelle est votre rating?';
    Tab_Lang[39]    = 'je ne sais pas / je n´ai pas';
    Tab_Lang[40]    = 'Comment avez-vous découvert notre application?';
    Tab_Lang[41]    = 'Indication d´ami';
    Tab_Lang[42]    = 'Réseaux sociaux';
    Tab_Lang[43]    = 'Annonce';
    Tab_Lang[44]    = 'Apple Store/Google Play';
    Tab_Lang[45]    = 'Autres';
    Tab_Lang[46]    = 'Spécifier: (optionnel)';
    Tab_Lang[47]    = 'Soumettre';

    Tab_Lang[48]    = 'Aider';
    Tab_Lang[49]    = 'SIGNALER UNE ERREUR';

    Tab_Lang[50]    = 'CONSEIL IMPORTANT';
    Tab_Lang[51]    = 'Répétez mentalement le <b> nom des pièces</b>, à mesure que les coups sont affichées. Ex: Pion, Pion, Chevalier, Fois ... <br> <br> Si c´est encore difficile, répétez le nom des pièces <b> à haute voix </b>.';

    Tab_Lang[52]    = '-----';
    Tab_Lang[53]    = '-----';
    Tab_Lang[54]    = '-----';
    Tab_Lang[55]    = '-----';
    Tab_Lang[56]    = '-----';
    Tab_Lang[57]    = '-----';
    Tab_Lang[58]    = '-----';
    Tab_Lang[59]    = '-----';
    Tab_Lang[60]    = '-----';
    Tab_Lang[61]    = '-----';

    Tab_Lang[62]    = 'Message d´erreur';
    Tab_Lang[63]    = 'Il y a eu un échec lors de votre inscription. Veuillez réessayer. Si l´erreur persiste, contactez notre support.';
    Tab_Lang[64]    = 'Impossible d´accéder au serveur';
    Tab_Lang[65]    = 'Merci';
    Tab_Lang[66]    = 'Merci de nous aider à fabriquer un meilleur produit!';

    Tab_Lang[80]    = 'Envoyez-nous votre avis sur cette application et obtenez <b> + 15 jours d´accès gratuit </b>!';
    Tab_Lang[81]    = 'Comment évalueriez-vous chacun des sujets ci-dessous?';
    Tab_Lang[82]    = 'Couleurs';
    Tab_Lang[83]    = 'Design';
    Tab_Lang[84]    = 'Logo';
    Tab_Lang[85]    = 'Facilité d´utilisation';
    Tab_Lang[86]    = 'Ouvertures';
    Tab_Lang[87]    = 'Méthode';

    Tab_Lang[82]    = 'Design';
    Tab_Lang[83]    = 'Ease of use';
    Tab_Lang[84]    = 'Method';
    Tab_Lang[85]    = 'Openings';
    Tab_Lang[86]    = 'Games';
    Tab_Lang[87]    = 'Theory';

    Tab_Lang[88]    = 'Quelles sont les 3 choses que vous avez le plus appréciées dans notre application?';
    Tab_Lang[89]    = 'Quelles sont les 3 choses que vous avez le moins aimées dans notre application?';
    Tab_Lang[90]    = 'Commentaires supplémentaires:';
    Tab_Lang[91]    = 'Soumettre';

    Tab_Lang[92]    = 'line';
    Tab_Lang[93]    = 'lines';

    Tab_Lang[100]  = 'Votre inscription a réussi!';
    Tab_Lang[101]  = '';
    Tab_Lang[102]  = 'Nous avons envoyé un e-mail à @user_email';
    Tab_Lang[103]  = 'Pour confirmer votre compte, veuillez accéder à votre boîte mail et cliquer sur le bouton <b> VERIFIER </b>';
    Tab_Lang[104]  = 'Si vous n´avez pas reçu notre e-mail, veuillez cocher votre boîte de courrier indésirable';
    Tab_Lang[105]  = 'Si vous avez besoin d´aide, <span onclick="Show_Suporte_Section();" style="color: #0066FF;">Cliquez ici.</span>';
    Tab_Lang[106]  = 'En construction';
    Tab_Lang[107]  = 'Merci pour vos commentaires';

    Tab_Lang [108] = 'À propos de cette application';
    Tab_Lang [109] = 'Ceci est une <b> version bêta </b>, nous faisons des expériences pour créer ce produit. De nouvelles fonctionnalités seront progressivement intégrées à chaque nouvelle version, qui devrait être publiée toutes les deux semaines. ';
    Tab_Lang [110] = 'Notre méthodologie de formation est basée sur la mémorisation des positions principales de chaque ouverture, les lignes les plus jouées par les plus grands joueurs du monde, au cours des 50 dernières années.';
    Tab_Lang [111] = 'L´application couvre un total de plus de 8 mille lignes, réparties en environ 120 cartes (48 disponibles dans la version actuelle).';
    Tab_Lang [112] = 'Chaque carte contient entre 20 et 150 lignes, qui doivent être progressivement entraînées du niveau 1 au 5, toujours dans le même ordre.';
    Tab_Lang [113] = 'Au niveau 1, vous devez répéter les 4 premiers coups de chaque ligne.';
    Tab_Lang [114] = 'Au fur et à mesure que chaque niveau est terminé, deux mouvements sont ajoutés, augmentant ainsi progressivement la difficulté de chaque exercice. Au niveau 5, vous devez répéter jusqu´à 12 coups. ';
    Tab_Lang [115] = 'Ce système de formation a déjà été testé avec succès en petits groupes, dans une autre application expérimentale.';
    Tab_Lang [116] = 'Nous garantissons l´utilisation gratuite de cette application jusqu´au 31 juillet 2021.';
    Tab_Lang [117] = 'En option, vous pouvez prolonger cette période jusqu´à 60 jours, après inscription et en nous envoyant vos commentaires avec des critiques et des suggestions. ';
    Tab_Lang [118] = 'Les suggestions et critiques, ainsi que les corrections de traductions, sont toujours les bienvenues et peuvent également être faites par e-mail: <b> support@promasterchess.com </b>';
    Tab_Lang [119] = 'Qui nous sommes';
    Tab_Lang [120] = 'Nous sommes une petite équipe de passionnés d´échecs, d´étudiants en neurosciences, de professionnels de l´informatique et de spécialistes de la conception graphique, qui travaillons depuis deux ans pour développer une méthode efficace pour former les ouvertures de manière intuitive et avec des résultats rapides , en particulier pour ce groupe de joueurs qui n’ont pas beaucoup de temps pour étudier.';
    Tab_Lang [121] = 'Clause de non-responsabilité';
    Tab_Lang [122] = 'Ceci est une version bêta, nous faisons des expériences pour créer ce produit.';
    Tab_Lang [123] = 'Certaines fonctionnalités peuvent être désactivées sans préavis.';
    Tab_Lang [124] = 'Votre historique d´entraînement peut être perdu pendant la période de test.';
    Tab_Lang [125] = 'Utilisation 100% gratuite jusqu´au 31/07/21, qui peut être étendue en vous inscrivant et en envoyant des commentaires.';

    Tab_Lang [130] = 'Réinitialisation de la carte';
    Tab_Lang [131] = 'Cette opération effacera tout l´historique d´entraînement de cette carte.';
    Tab_Lang [132] = 'Êtes-vous sûr de vouloir réinitialiser cette carte ?';
    Tab_Lang [133] = 'Annuler';
    Tab_Lang [134] = 'Confirmer';
    Tab_Lang [135] = 'Annuler';
    Tab_Lang [136] = 'Oui';
    Tab_Lang [137] = 'Annuler';
    Tab_Lang [138] = 'Oui';
    Tab_Lang [139] = 'BIENVENUE';

    Tab_Lang [140] = 'La façon la plus simple et amusante d´évoluer aux échecs';
    Tab_Lang [141] = 'L´application <b>Chess Openings Pro-Master</b> contient tout ce dont vous avez besoin pour comprendre et maîtriser le monde complexe des ouvertures.';
    Tab_Lang [142] = '<b>Choisissez l´ouverture</b> que vous souhaitez étudier et le système vous montrera les grandes lignes.';
    Tab_Lang [143] = 'Tout ce que vous avez à faire est de répéter les mouvements effectués par l´ordinateur';
    Tab_Lang [144] = 'Au niveau 1, il n´y a que les <b>4 premiers coups</b> de chaque côté. Une fois ce niveau terminé, le niveau de difficulté augmente progressivement jusqu´à 6, 8, 10 et même 12 coups.';
    Tab_Lang [145] = 'Avec cette méthode, en plus d´améliorer votre jeu d´ouverture, vous assimilerez dans votre inconscient <b>une énorme quantité de schémas de jeu</b>, auxquels vous accéderez intuitivement lors de vos prochains matchs.';
    Tab_Lang [146] = 'Entraînez-vous 15 minutes par jour et constatez la <b>différence de résultats</b> par rapport à tout autre type d´entraînement!' ;
    Tab_Lang [147] = 'Démarrer maintenant';
    Tab_Lang [148] = 'Bienvenue';
    Tab_Lang [149] = 'Paramètres';

    Tab_Lang [150] = 'Support';
    Tab_Lang [151] = '1. CONCEPTS GÉNÉRAUX';
    Tab_Lang [152] = '2. EXERCICES PAR NIVEAU' ;
    Tab_Lang [153] = '4 coups';
    Tab_Lang [154] = '6 coups';
    Tab_Lang [155] = '8 coups';
    Tab_Lang [156] = '10 coups';
    Tab_Lang [157] = '12 coups';
    Tab_Lang [158] = '3. ECO';
    Tab_Lang [159] = '4. ALLUMETTES';

    Tab_Lang [160] = 'Réinitialiser cette carte';
    Tab_Lang [161] = 'FAVORIS';
    Tab_Lang [162] = 'MON COMPTE';
    Tab_Lang [163] = 'Version :';
    Tab_Lang [164] = 'DONNÉES PERSONNELLES';
    Tab_Lang [165] = 'Créez votre compte maintenant et obtenez 15 jours supplémentaires d´accès gratuit !';
    Tab_Lang [166] = 'Cela prend moins d´1 minute !';
    Tab_Lang [167] = 'Créer un compte';
    Tab_Lang [168] = 'SUBSCRIPTION';
    Tab_Lang [169] = 'Validité :';

    Tab_Lang [170] = 'History';
    Tab_Lang [171] = 'Renouveler';
    Tab_Lang [172] = 'RÉTROACTION';
    Tab_Lang [173] = 'Merci ! :)';
    Tab_Lang [174] = 'Dernier retour :';
    Tab_Lang [175] = 'Nouveau commentaire';
    Tab_Lang [176] = 'RÉTROACTION';
    Tab_Lang [177] = 'Envoyez-nous votre avis sur cette application et obtenez + <span style="color: #F038A3">15 jours gratuits !</span>';
    Tab_Lang [178] = 'CRÉER UN COMPTE';
    Tab_Lang [179] = 'Créez votre compte maintenant et obtenez + <span style="color: #F038A3">15 jours gratuits</span>';

    Tab_Lang [180] = 'Quelque chose n´allait pas! Votre commande ne peut pas être complétée. Veuillez contacter notre support pour résoudre ce problème.';
    Tab_Lang [181] = '';
    Tab_Lang [182] = '';
    Tab_Lang [183] = '';
    Tab_Lang [184] = '';
    Tab_Lang [185] = '';
    Tab_Lang [186] = '';
    Tab_Lang [187] = '';
    Tab_Lang [188] = '';
    Tab_Lang [189] = '';

    Tab_Lang [190] = '';
    Tab_Lang [191] = ''
    Tab_Lang [193] = '';
    Tab_Lang [194] = '';
    Tab_Lang [195] = 'SOUTIEN';
    Tab_Lang [196] = 'Ce canal est pour vous de signaler rapidement les <b>problèmes</b> avec l´application, ainsi que d´envoyer vos <b>questions</b>, <b>avis</b> et <b> suggestions</b>.';
    Tab_Lang [197] = 'Messages précédents';
    Tab_Lang [198] = 'Envoyer votre message';
    Tab_Lang [199] = 'Soumettre';

    Tab_Lang [200] = 'PARAMETRES';
    Tab_Lang [201] = 'Réservation avec 30% de réduction';
    Tab_Lang [202] = 'Confirmer la réservation ?';
    Tab_Lang [203] = 'Rapport d´erreur';
    Tab_Lang [204] = 'Cet exercice est-il faux ?';
    Tab_Lang [205] = 'Merci !';
    Tab_Lang [206] = 'ENTRAINER';
    Tab_Lang [207] = 'Créer un compte';
    Tab_Lang [208] = 'SHOPPING';
    Tab_Lang [209] = '';

    Tab_Lang [210] = 'Réservation OK';
    Tab_Lang [211] = 'Votre réservation a réussi, merci !';
    Tab_Lang [212] = 'Les noirs ont échec et mat';
    Tab_Lang [213] = 'Les filles noires partent';
    Tab_Lang [214] = 'Les blancs ont échec et mat';
    Tab_Lang [215] = 'Feuilles blanches';
    Tab_Lang [216] = 'Noyau de noyade';
    Tab_Lang [217] = 'Liaison par répétition';
    Tab_Lang [218] = 'Cravate pour matériel insuffisant';
    Tab_Lang [219] = 'Règle d´égalité par 50 coups';

    Tab_Lang [220] = 'Liaison d´un commun accord';
    Tab_Lang [221] = 'Commençons';
    Tab_Lang [222] = 'Vous n´avez pas encore de messages.';
    Tab_Lang [223] = 'RÉSERVÉ';
    Tab_Lang [224] = 'Note de correspondance' ;
    Tab_Lang [225] = 'Incrément graduel de difficulté';
    Tab_Lang [226] = 'Les exercices pour chaque carte sont divisés en 5 niveaux :<li>Niveau 1 = 4 premiers coups</li><li>Niveau 2 = 6 premiers coups</li><li>Niveau 3 = premier 8 coups</li><li>Niveau 4 = 10 premiers coups</li><li>Niveau 5 = 12 premiers coups</li><br>Vous devez terminer un niveau avant de passer au suivant.';
    Tab_Lang [227] = 'Facilité pour trouver des ouvertures';
    Tab_Lang [228] = 'L´ECO (Encyclopaedia of Chess Openings) est une collection de livres qui décrivent toutes les ouvertures d´échecs connues en utilisant un système de codage standard international.<br><br>Chaque ECO décrit brièvement les meilleures lignes et variantes de chaque ouverture. .<br><br>Chaque carte peut contenir un ou plusieurs de ces codes.';
    Tab_Lang [229] = 'Apprenez des meilleurs MJ du monde.';

    Tab_Lang [230] = 'Chaque carte contient 20 à 30 matchs qui peuvent être étudiés pour référence.<br><br>En jouant un match, vous capturez les idées stratégiques et tactiques les plus courantes pour l´ouverture que vous étudiez.<br><br>Plus vous regardez un match, meilleur sera votre sentiment pour ce type de poste.<br><br>Regardez chaque match plusieurs fois pour bien le comprendre.<br><br>Lorsque vous jouez les matchs , essayez d´anticiper les offres de la partie gagnante. Plus vous le ferez, plus votre jeu évoluera rapidement.';
    Tab_Lang [231] = 'Votre avis est très important pour nous';
    Tab_Lang [232] = 'Vous pouvez communiquer avec nous en <b>anglais</b>, <b>portugais</b>, <b>espagnol</b> et <b>allemand.</b><br><br>Nous nous efforcerons de répondre à tous les messages dans les <b>24 heures</b>.';
    Tab_Lang [233] = '';
    Tab_Lang [234] = '';
    Tab_Lang [235] = '';
    Tab_Lang [236] = '';
    Tab_Lang [237] = '';
    Tab_Lang [238] = '';
    Tab_Lang [239] = '';

    Tab_Lang [240] = 'Appréciez-vous notre application?';
    Tab_Lang [241] = 'Envoyer une opinion';
    Tab_Lang [242] = 'Créer un compte';
    Tab_Lang [243] = 'Envoyer des commentaires';
    Tab_Lang [244] = 'Connexion au serveur non disponible. S´il vous plait, vérifiez votre connexion internet.';
    Tab_Lang [245] = 'Entraînement';
    Tab_Lang [246] = 'Games';
    Tab_Lang [247] = 'Vous n´avez pas encore de cartes favorites.';
    Tab_Lang [248] = 'Cet exercice contient des erreurs et sera ignoré.';
    Tab_Lang [249] = '';

    Tab_Lang [250] = 'il y a quelques secondes';
    Tab_Lang [251] = 'il y a';
    Tab_Lang [252] = 'minute';
    Tab_Lang [253] = 'minutes';
    Tab_Lang [254] = 'heures';
    Tab_Lang [255] = 'heures';
    Tab_Lang [256] = 'jour';
    Tab_Lang [257] = 'jours';
    Tab_Lang [258] = 'semaine';
    Tab_Lang [259] = 'semaines';

    Tab_Lang [260] = 'Achat réussi';
    Tab_Lang [261] = 'Merci, votre achat a été un succès.<br><br>Grâce à votre soutien, nous pouvons continuer à travailler pour que vous ayez un meilleur produit!';
    Tab_Lang [262] = 'Regardez cette application pour vous entraîner aux échecs:';
    Tab_Lang [263] = 'Il reste @ jours à votre période d´essai gratuite.';
    Tab_Lang [264] = 'Accès temporairement suspendu';
    Tab_Lang [265] = 'Pour renouveler votre accès aux exercices, veuillez visiter notre Boutique.';
    Tab_Lang [266] = 'Créez un compte et envoyez-nous vos commentaires pour prolonger votre période d´essai gratuite.';
    Tab_Lang [267] = 'Acheter maintenant';
    Tab_Lang [268] = 'Évaluer';
    Tab_Lang [269] = 'LANCEMENT DE LA PROMOTION';

    Tab_Lang [270] = '30% de réduction!' ;
    Tab_Lang [271] = 'Valable jusqu´au : 15 septembre 2021';
    Tab_Lang [272] = 'ABONNEMENT';
    Tab_Lang [273] = 'Obtenez-le MAINTENANT!';
    Tab_Lang [274] = 'La période d´abonnement contractée sera ajoutée à votre période d´utilisation gratuite restante, le cas échéant.';
    Tab_Lang [275] = 'Aucun coût supplémentaire pour les nouvelles versions et les nouveaux contenus pendant la durée du contrat!';
    Tab_Lang [276] = 'Accès instantané!';
    Tab_Lang [277] = 'Tous les plans garantissent un accès à 100% aux futures versions pendant la durée du contrat!';
    Tab_Lang [278] = '';
    Tab_Lang [279] = '';

    Tab_Lang [300] = 'Quelques principes généraux';
    Tab_Lang [301] = '1. Développe rapidement toutes tes pièces';
    Tab_Lang [302] = 'Le but principal à l´ouverture est de développer tes pièces et d´atteindre le roque le plus rapidement possible.';
    Tab_Lang [303] = 'L´ouverture est terminée quand un ou les deux joueurs ont leurs tours connectées.';
    Tab_Lang [304] = 'Le joueur, qui termine le développement en premier, gagne l´initiative.';
    Tab_Lang [305] = '2. Développe les cavaliers avant les fous';

    Tab_Lang [306] = 'Alors que les fous peuvent contrôler plusieurs cases depuis leur position d´origine, s´il n´y a pas de pions obstruant leur chemin, les cavaliers contrôlent uniquement les cases voisines et mettent plus de temps à atteindre le camp de l´adversaire, car ce sont des pièces moins mobiles.';
    Tab_Lang [307] = '3. Ne déplace pas la même pièce deux fois lors de l’ouverture';
    Tab_Lang [308] = 'Essaye de placer tes pièces dans la meilleure position possible au premier coup.';
    Tab_Lang [309] = 'C´est une perte de temps de déplacer la même pièce plus d´une fois lors de l´ouverture et cela peut te coûter l´initiative dans le jeu.';
    Tab_Lang [310] = '4. Ne fais pas de mouvements de pions inutiles lors de l’ouverture';
    Tab_Lang [311] = 'Limite les mouvements de pions lors de l’ouverture, car le temps nécessaire à ces mouvements pourrait être appliqué à développer d’autres pièces.';
    Tab_Lang [312] = 'En général, déplacer des pions convient lorsque le joueur vise à ouvrir des diagonales pour la dame ou les fous ou encore à occuper le centre.';

    Tab_Lang [313] = '5. Ne fais pas d’échec au roi si ce n’est pas nécessaire';
    Tab_Lang [314] = 'Un échec qui peut être facilement défendu par l´adversaire n´est pas nécessaire.';
    Tab_Lang [315] = 'La plupart des échecs effectués durant l´ouverture peuvent être facilement défendus par des coups qui favorisent le développement.';
    Tab_Lang [316] = '6. N´ouvre pas la position si tu as un retard de développement';
    Tab_Lang [317] = 'Une position ouverte favorise toujours le camp avec le plus de pièces en jeu et, par conséquent, ne doit être provoquée que par ceux qui ont un avantage de développement.';
    Tab_Lang [318] = '7. Place la dame derrière ta ligne de pions lors de l´ouverture';
    Tab_Lang [319] = 'La dame étant une pièce très puissante, elle est également très vulnérable aux attaques constantes de l’adversaire.';

    Tab_Lang [320] = 'Par conséquent, il est pratique de la placer derrière un pion, de préférence au deuxième rang afin que le premier soit libre pour le développement des tours.';
    Tab_Lang [321] = '8. Évite d´échanger une pièce développée contre une pièce non développée';
    Tab_Lang [322] = 'En général, c’est une mauvaise idée d’échanger une pièce bien positionnée contre une pièce mal positionnée.';
    Tab_Lang [323] = 'Lorsque tu échanges une de tes pièces développées contre une pièce adverse non développée, tu perds un temps précieux. Il en va de même si tu échanges une pièce déplacée plusieurs fois contre une pièce que ton adversaire n´a déplacé qu´une seule fois.';
    Tab_Lang [324] = '9. Roque le plus rapidement possible';
    Tab_Lang [325] = 'La sécurité du roi est une priorité absolue lors de l’ouverture et du milieu de partie.';
    Tab_Lang [326] = 'Le roi au centre sera toujours très vulnérable aux attaques de l’adversaire, en particulier dans les positions ouvertes.';

    Tab_Lang [327] = 'Roquer signifie placer confortablement votre roi derrière un bloc de pions et permettre le développement de l´une de tes tours. La tour pourra ensuite occuper une colonne ouverte ou semi-ouverte.';
    Tab_Lang [328] = '10. Le petit roque est plus sûr que le grand roque';
    Tab_Lang [329] = 'Le petit roque place le roi loin du centre et plus en sécurité derrière une ligne de pions protégés; en outre, c’est un mouvement plus rapide que le grand roque car il n’y a que deux pièces à déplacer avant de pouvoir l’effectuer.';
    Tab_Lang [330] = 'D´autre part, roquer du côté opposé de l´adversaire peut être très intéressant pour créer plus d´opportunités d´attaque.';
    Tab_Lang [331] = '11. Essaye d´empêcher l´adversaire de roquer';
    Tab_Lang [332] = 'Si ton adversaire attend trop longtemps pour roquer, essaye de garder le roi adverse encore plus longtemps au centre.';
    Tab_Lang [333] = 'Une des manières les plus courantes de le faire est de contrôler une des cases servant de passage pour le roi (généralement f1 ou f8, lors du petit roque).';

    Tab_Lang [334] = 'La plupart du temps, il vaut la peine de sacrifier un pion pour conserver le roi adverse au centre.';
    Tab_Lang [335] = '12. Prends le plus d’espace possible';
    Tab_Lang [336] = 'Le joueur, qui a un avantage dans l´espace, offre plus de mobilité à ses pièces et peut, par conséquent, les faire transiter d´un côté à l´autre de l’échiquier avec plus de flexibilité.';
    Tab_Lang [337] = 'En revanche, le joueur dans une position plus restreinte a du mal à manœuvrer ses pièces, ce qui peut être fatal s´il est amené à défendre son roi.';
    Tab_Lang [338] = '13. Avance les pions pour prendre l´espace';
    Tab_Lang [339] = 'Bien que l´avancement des pions soit la principale ressource pour restreindre la position de l´adversaire, cette règle doit être considérée attentivement car plus les pions sont éloignés de la position de base, plus il est difficile de les défendre.';
    Tab_Lang [340] = 'De plus, chaque position avancée par un pion crée une faiblesse sur ses cases adjacentes, qui peuvent être occupées par des pièces adverses.';

    Tab_Lang [341] = '14. Place tes pions au centre';
    Tab_Lang [342] = 'Le centre de l´échiquier se compose de e4, e5, d4 et d5. Le centre étendu comprend également les cases qui forment le carré c3, c6, f3 et f6.';
    Tab_Lang [343] = 'Les pions sont les meilleures unités pour tenir le centre car, contrairement aux pièces, ils ne sont pas vulnérables aux attaques d’autres pions.';
    Tab_Lang [344] = '15. Garde tes pièces aussi près que possible du centre';
    Tab_Lang [345] = 'Au centre, une pièce contrôle plus de cases que partout ailleurs sur le plateau. Le cavalier, par exemple, peut se déplacer vers 8 cases différentes depuis le centre alors qu´il n´a que 2 options lorsqu´il est placé dans les coins.';
    Tab_Lang [346] = 'Le contrôle du centre est également important car il permet aux pièces de passer rapidement d´un côté du plateau à l´autre et si tes pièces se déplacent plus vite que celles de ton adversaire, tu as plus de chances de réussir ton attaque.';
    Tab_Lang [347] = '16. Lors d’échanges  de pions, essaye de rapprocher les tiens du centre';

    Tab_Lang [348] = 'Si deux de tes pions peuvent reprendre la pièce de l´adversaire qui avait précédemment capturé l´une de tes pièces, il est recommandé de déplacer le pion qui, à la fin, sera le plus proche du centre, car les pions centraux sont plus importants que ceux des ailes.';
    Tab_Lang [349] = '17. Contrôle le centre avant d´attaquer';
    Tab_Lang [350] = 'Les attaques réussies sur les ailes dépendent principalement du contrôle central. Par conséquent, assure un centre solide et stable avant de commencer toute attaque latérale.';
    Tab_Lang [351] = '18. Les tours doivent rapidement occuper des colonnes ouvertes ou semi-ouvertes';
    Tab_Lang [352] = 'Lors de l´ouverture, les tours sont les dernières pièces à être développées.Elles sont efficaces lorsqu´elles occupent une colonne ouverte ou semi-ouverte.';
    Tab_Lang [353] = 'Généralement, les cases idéales pour placer les tours sont e1, d1 et c1 (e8, d8 et c8 pour les noirs), car dans ces positions, elles sont capables d´exercer une pression au centre mais aussi de défendre.';
    Tab_Lang [354] = 'A noter qu´une tour peut toujours défendre efficacement lorsqu´elle est placée sur la deuxième rangée, tout en agissant de manière agressive sur les colonnes faibles.';

    Tab_Lang [355] = '19. Pense d´abord à la défense';
    Tab_Lang [356] = 'Le concept le plus important aux échecs est la sécurité. Au coup de chaque adversaire, arrête toi et demande toi:';
    Tab_Lang [357] = 'Qu´est-ce que ce coup menace?';
    Tab_Lang [358] = 'Quelles sont les intentions de mon adversaire?';
    Tab_Lang [359] = 'Que ferais-je si j´étais à sa place?';
    Tab_Lang [360] = '20. Considérations finales';
    Tab_Lang [361] = 'Les échecs ne sont pas une science exacte et les conseils et concepts présentés ici ne sont pas applicables dans 100% des cas et ne doivent pas être suivis aveuglément.';
    Tab_Lang [362] = 'Une des grandes différences entre un grand maître et un amateur est la capacité à savoir quand violer les principes stratégiques.';
    Tab_Lang [363] = 'En règle générale, quand on dit: « Évite de pousser les pions qui protègent le roi » on dit en réalité « Évite de pousser les pions qui protègent le roi A MOINS QU’IL Y AIT UNE BONNE RAISON DE LE FAIRE».';

    Tab_Lang [364] = 'Boutons utiles';
    Tab_Lang [365] = 'Afficher le curseur temporel';
    Tab_Lang [366] = 'Répéter le dernier exercice';
    Tab_Lang [367] = 'Ignorer les mouvements de l´ordinateur';
    Tab_Lang [368] = 'Envoyer un rapport indiquant que l´exercice est incorrect';


    Tab_Lang_150[1] = 'Possibilité de parcourir les exercices de chaque niveau (LIGNES)';
    Tab_Lang_150[2] = 'Possibilité d´exclure activer (ON) ou désactiver (OFF) les exercices de chaque Card';
    Tab_Lang_150[3] = 'Former un niveau sélectionné';
    Tab_Lang_150[4] = 'Concepts stratégiques sur les 50 cartes les plus utilisées';
    Tab_Lang_150[5] = '9 Cartes 100% gratuites quelle que soit la durée d´utilisation';
    Tab_Lang_150[6] = 'Le système d´achat n´est plus par abonnement, mais par paiement unique';
    Tab_Lang_150[7] = 'Formation commencée';
    Tab_Lang_150[8] = 'Vous avez déjà commencé une formation à ce niveau.';
    Tab_Lang_150[9] = 'Nouveau';
    Tab_Lang_150[10] = 'Continuer';

    Tab_Lang_150[11] = 'PREFERENCES';
    Tab_Lang_150[12] = 'Rapide';
    Tab_Lang_150[13] = 'Normal';
    Tab_Lang_150[14] = 'Lent';
    Tab_Lang_150[15] = 'Trop lent';
    Tab_Lang_150[16] = 'Temps par coup :';
    Tab_Lang_150[17] = 'Après 1 erreur';
    Tab_Lang_150[18] = 'Après 2 erreurs';
    Tab_Lang_150[19] = 'Après 3 erreurs';
    Tab_Lang_150[20] = 'Jamais';

    Tab_Lang_150[21] = 'Afficher la solution :';
    Tab_Lang_150[22] = 'Par défaut';
    Tab_Lang_150[23] = 'Fermer';
    Tab_Lang_150[24] = 'Notre méthode';
    Tab_Lang_150[25] = 'Comment s´entraîner';
    Tab_Lang_150[26] = 'Configurez votre formation';
    Tab_Lang_150[27] = 'Correspondances';
    Tab_Lang_150[28] = 'Théorie ouverte';
    Tab_Lang_150[29] = 'Favoris';
    Tab_Lang_150[30] = 'Enregistrement';

    Tab_Lang_150[31] = 'Gratuite x Premium';
    Tab_Lang_150[32] = 'Améliorations attendues';
    Tab_Lang_150[33] = 'LIGNES';
    Tab_Lang_150[34] = 'GAMES';
    Tab_Lang_150[35] = 'LIGNES';
    Tab_Lang_150[36] = 'Niveau d´entraînement';
    Tab_Lang_150[37] = 'Tout activé';
    Tab_Lang_150[38] = 'CORRECTIONS';
    Tab_Lang_150[39] = 'Email :';
    Tab_Lang_150[40] = 'Âge :';

    Tab_Lang_150[41] = 'Pays :';
    Tab_Lang_150[42] = 'Votre ID :';
    Tab_Lang_150[43] = 'ACHETER';
    Tab_Lang_150[44] = 'Rapide';
    Tab_Lang_150[45] = 'Normal';
    Tab_Lang_150[46] = 'Lent';
    Tab_Lang_150[47] = 'Trop lent';
    Tab_Lang_150[48] = 'Temps par coup :';
    Tab_Lang_150[49] = 'Après 1 erreur';
    Tab_Lang_150[50] = 'Après 2 erreurs';

    Tab_Lang_150[51] = 'Après 3 erreurs';
    Tab_Lang_150[52] = 'Jamais';
    Tab_Lang_150[53] = 'Afficher la solution :';
    Tab_Lang_150[54] = 'Son :';
    Tab_Lang_150[55] = 'Par défaut';
    Tab_Lang_150[56] = 'Nom';
    Tab_Lang_150[57] = 'Comment pouvons-nous nous améliorer ?';
    Tab_Lang_150[58] = 'Envoyez-nous vos critiques et suggestions et obtenez un produit encore meilleur.';
    Tab_Lang_150[59] = 'Créez votre compte pour conserver une sauvegarde automatique de votre historique de formation sur nos serveurs.';
    Tab_Lang_150[60] = 'C´est gratuit!';

    Tab_Lang_150[61] = 'Renvoyer l´e-mail';
    Tab_Lang_150[62] = 'Un e-mail a été envoyé à';
    Tab_Lang_150[63] = 'Veuillez vérifier votre boîte de réception ou votre dossier SPAM.';
    Tab_Lang_150[64] = 'Accès limité';
    Tab_Lang_150[65] = 'Dans la version gratuite, le nombre d´exercices et de matchs est limité aux cartes grises.<br><br>Profitez de notre tarif réduit pour acheter la version Premium et obtenez immédiatement un accès complet à toutes les cartes.<br><br>Si vous n´êtes pas sûr d´acheter ou non la version Premium, essayez un essai gratuit de 7 jours!';
    Tab_Lang_150[66] = 'Dans la version gratuite, le nombre d´exercices et de matchs est limité aux cartes grises.<br><br>Profitez de notre tarif réduit pour acheter la version Premium et obtenez immédiatement un accès complet à toutes les cartes .';
    Tab_Lang_150[67] = 'Aucun exercice activé';
    Tab_Lang_150[68] = 'Tous les exercices de cette série ont été désactivés (OFF).<br>Cliquez sur LIGNES puis ALL ON pour revenir à la série par défaut.';
    Tab_Lang_150[69] = 'Important';
    Tab_Lang_150[70] = 'Vous pouvez activer (ON) ou désactiver (OFF) les exercices que vous souhaitez étudier.';

    Tab_Lang_150[71] = 'Les exercices désactivés (OFF) n´apparaîtront pas dans les futurs entraînements.';
    Tab_Lang_150[72] = 'Si vous souhaitez revenir au motif initial, cliquez sur le bouton LIGNES de la carte correspondante.';
    Tab_Lang_150[73] = 'Envoyez-nous votre avis sur cette application et aidez-nous à créer un meilleur produit.';
    Tab_Lang_150[74] = 'Selon notre base de données, vous avez déjà utilisé la période d´essai gratuite. Si ces informations ne sont pas correctes, veuillez envoyer un message à notre support.';
    Tab_Lang_150[75] = 'Configurez votre formation';
    Tab_Lang_150[76] = 'Utilisez les boutons roses (1 à 5) pour sélectionner les exercices d´un niveau correspondant.<br><br>Cliquez sur le bouton ON/OFF pour sélectionner les lignes que vous souhaitez entraîner.<br><br> Pour afficher un entraînement ou parcourir les entraînements du niveau sélectionné, cliquez simplement sur le bouton <img src="img/but_go3.png" style="width: 24px;"><br><br>Les exercices désactivés n´apparaîtront plus dans l´entraînement normal.';
    Tab_Lang_150[77] = 'Utilisez les touches fléchées pour démarrer';
    Tab_Lang_150[78] = 'Votre période d´essai se termine dans:';
    Tab_Lang_150[79] = 'Jours';
    Tab_Lang_150[80] = 'Hrs';

    Tab_Lang_150[81] = 'Min.';
    Tab_Lang_150[82] = 'Secs';
    Tab_Lang_150[83] = 'Ne plus afficher ce message';
    Tab_Lang_150[84] = '7 jours GRATUITS';
    Tab_Lang_150[85] = 'Version Premium';
    Tab_Lang_150[86] = 'Version Premium';
    Tab_Lang_150[87] = 'Message de confirmation';
    Tab_Lang_150[88] = 'Vous avez désactivé (OFF) un ou plusieurs exercices dans l´entraînement en cours.<br><br>Cliquez sur CONFIRMER si vous souhaitez que les exercices désactivés n´apparaissent pas dans les futurs entraînements pour cette carte.<br><br>En cliquant sur CONFIRMER, le niveau de formation le plus récent pour cette carte sera réinitialisé.';
    Tab_Lang_150[89] = 'Annuler';
    Tab_Lang_150[90] = 'Confirmer';

    Tab_Lang_150[91] = '';
    Tab_Lang_150[92] = '';
    Tab_Lang_150[93] = '';
    Tab_Lang_150[94] = '';
    Tab_Lang_150[95] = '';
    Tab_Lang_150[96] = '';
    Tab_Lang_150[97] = '';
    Tab_Lang_150[98] = '';
    Tab_Lang_150[99] = '';
    Tab_Lang_150[100] = '';

    Tab_Lang_150[101] = 'Clé de licence:';
    Tab_Lang_150[102] = 'Nouvelles des versions à venir:';
    Tab_Lang_150[103] = 'Rechercher des ouvertures';
    Tab_Lang_150[104] = 'Utiliser le même compte pour plusieurs appareils';
    Tab_Lang_150[105] = 'Complément de concepts stratégiques généraux pour chaque ouverture';
    Tab_Lang_150[106] = 'Définir les couleurs du tableau';
    Tab_Lang_150[107] = 'La méthode la plus rapide et la plus efficace pour évoluer aux échecs !';
    Tab_Lang_150[108] = '<span style="font-weight: bold; color: #43321e;">8 079 lignes</span> des ouvertures les plus jouées au cours des 50 dernières années' ;
    Tab_Lang_150[109] = '<span style="font-weight: bold; color: #43321e;">4 500 games</span> des plus grands joueurs du monde (classique et moderne)' ;
    Tab_Lang_150[110] = 'Moins d´effort, temps de rétention plus long';

    Tab_Lang_150[111] = 'Développez votre <span style="font-weight: bold; color: #43321e;">intuition</span>';
    Tab_Lang_150[112] = 'Jouer plus vite';
    Tab_Lang_150[113] = 'Améliorez votre capacité de calcul';
    Tab_Lang_150[114] = 'Améliorez votre <span style="font-weight: bold; color: #43321e;">concentration</span>';
    Tab_Lang_150[115] = 'Commencer <span style="font-weight: bold; color: #43321e;">gagner plus de games</span>';
    Tab_Lang_150[116] = 'Des résultats meilleurs et plus rapides que toute autre méthode';
    Tab_Lang_150[117] = 'Prix normal:';
    Tab_Lang_150[118] = 'Aujourd´hui:';
    Tab_Lang_150[119] = 'Cette promotion expire le:';
    Tab_Lang_150[120] = 'Jours';

    Tab_Lang_150[121] = 'Hrs';
    Tab_Lang_150[122] = 'Min';
    Tab_Lang_150[123] = 'Segs';
    Tab_Lang_150[124] = 'Obtenez votre version Premium maintenant pour seulement:';
    Tab_Lang_150[125] = 'Échecs';
    Tab_Lang_150[126] = 'La meilleure salle de sport pour votre cerveau';
    Tab_Lang_150[127] = 'En achetant cette version vous obtiendrez:';
    Tab_Lang_150[128] = 'Accès complet indéfiniment';
    Tab_Lang_150[129] = 'Mises à jour gratuites';
    Tab_Lang_150[130] = 'Support préféré';

    Tab_Lang_150[131] = 'Accès instantané';
    Tab_Lang_150[132] = 'Commentaires';
    Tab_Lang_150[133] = 'lignes';
    Tab_Lang_150[134] = 'Niveau';
    Tab_Lang_150[135] = 'Enchères';
    Tab_Lang_150[136] = '';
    Tab_Lang_150[137] = '';
    Tab_Lang_150[138] = '';
    Tab_Lang_150[139] = '';
    Tab_Lang_150[140] = '';

    Tab_Lang_150[141] = '';
    Tab_Lang_150[142] = '';
    Tab_Lang_150[143] = '';
    Tab_Lang_150[144] = '';
    Tab_Lang_150[145] = '';
    Tab_Lang_150[146] = '';
    Tab_Lang_150[147] = '';
    Tab_Lang_150[148] = '';
    Tab_Lang_150[149] = '';
    Tab_Lang_150[150] = '';

    Tab_Lang_151[1] = 'Synchronisation...';
    Tab_Lang_151[2] = 'Free 7-days trial';
    Tab_Lang_151[3] = 'Récupérer le compte';
    Tab_Lang_151[4] = 'Synchroniser les comptes';
    Tab_Lang_151[5] = 'Déconnexion';
    Tab_Lang_151[6] = 'Récupérer le compte';
    Tab_Lang_151[7] = 'Synchroniser les comptes';
    Tab_Lang_151[8] = 'RÉCUPÉRER LE COMPTE';
    Tab_Lang_151[9] = 'La récupération de compte vous permet de transférer les données de votre compte vers cet appareil.';
    Tab_Lang_151[10] = 'Pour effectuer ce transfert, vous n´avez besoin que de votre identifiant de compte sur l´autre appareil (où vous avez créé le compte). L´ID apparaît au bas de la section où se trouvent les détails de votre compte.';

    Tab_Lang_151[11] = 'Si vous ne connaissez pas votre numéro d´identification, avez perdu votre mobile etc... Envoyez un message à notre support avec votre email,';
    Tab_Lang_151[12] = 'en cliquant ici';
    Tab_Lang_151[13] = 'IMPORTANT! Toutes les données de cet appareil seront effacées et remplacées par le compte que vous indiquez.';
    Tab_Lang_151[14] = 'Démarrer la récupération';
    Tab_Lang_151[15] = 'SYNCHRONISER LES COMPTES';
    Tab_Lang_151[16] = 'Entrez le code de confirmation à 4 chiffres envoyé à l´email :';
    Tab_Lang_151[17] = 'Synchroniser';
    Tab_Lang_151[18] = 'Si vous <b>n´avez pas</b> reçu notre e-mail de code de confirmation, veuillez vérifier votre boîte de réception de spam.';
    Tab_Lang_151[19] = 'Pour <b>renvoyer</b> le code';
    Tab_Lang_151[20] = 'Si vous avez besoin d´<b>aide</b>, envoyez un message à notre support';

    Tab_Lang_151[21] = 'en cliquant ici.';
    Tab_Lang_151[22] = 'Vous pouvez désormais utiliser le même compte sur plusieurs appareils.';
    Tab_Lang_151[23] = 'Pour synchroniser les comptes, vous avez besoin de :';
    Tab_Lang_151[24] = 'Inscrivez-vous sur l´appareil que vous souhaitez synchroniser.';
    Tab_Lang_151[25] = 'Entrez l´ID de l´appareil que vous souhaitez synchroniser dans les champs ci-dessous.';
    Tab_Lang_151[26] = 'Sur l´écran suivant, entrez le code de confirmation que nous vous enverrons par e-mail.';
    Tab_Lang_151[27] = 'Synchroniser';
    Tab_Lang_151[28] = 'cliquez ici.';
    Tab_Lang_151[29] = '';
    Tab_Lang_151[30] = '';

    Tab_Lang_151[31] = 'ID invalide, veuillez redémarrer l´application.';
    Tab_Lang_151[32] = 'Code invalide';
    Tab_Lang_151[33] = 'ID d´application non valide' ;
    Tab_Lang_151[34] = 'Vous devez vous enregistrer sur l´appareil que vous souhaitez synchroniser.';
    Tab_Lang_151[35] = 'Code renvoyé à l´e-mail';
    Tab_Lang_151[36] = 'ID d´application introuvable. Veuillez entrer à nouveau';
    Tab_Lang_151[37] = 'Erreur de remplissage du formulaire';
    Tab_Lang_151[38] = '';
    Tab_Lang_151[39] = '';
    Tab_Lang_151[40] = '';

    Tab_Lang_151[41] = 'Conflit de synchronisation';
    Tab_Lang_151[42] = 'Il y a une mise à jour depuis un autre appareil avec une date plus récente.';
    Tab_Lang_151[43] = 'Lequel voulez-vous conserver?';
    Tab_Lang_151[44] = 'Conserver les mises à jour effectuées sur l´autre appareil';
    Tab_Lang_151[45] = 'Conserver les mises à jour apportées à cet appareil';
    Tab_Lang_151[46] = 'Obtenez une remise maintenant!';
    Tab_Lang_151[47] = 'Veuillez saisir le code du coupon:';
    Tab_Lang_151[48] = 'Valider le coupon';
    Tab_Lang_151[49] = 'Cet appareil:';
    Tab_Lang_151[50] = 'Avez-vous un coupon de réduction?';

    Tab_Lang_151[51] = 'Code promo invalide';
    Tab_Lang_151[52] = '(Principal)';

}



function Set_Lang_ITA() {

    Tab_Lang[1]    = 'IMPORTANTE';
    Tab_Lang[2]    = 'Questa è una <b> versione Beta </b>, stiamo facendo esperimenti per realizzare questo prodotto.';
    Tab_Lang[3]    = 'Alcune funzioni possono essere <b> disattivate senza preavviso </b>.';
    Tab_Lang[4]    = 'La cronologia dell´allenamento potrebbe andare persa durante il periodo di prova.';
    Tab_Lang[5]    = 'Utilizzo <span style = "color: # 0099FF; font-weight: bold;"> 100% gratuito </span> fino al <span style = "color: # 0099FF; font-weight: bold;"> 31/7/21 </span>, che può essere esteso registrandosi e inviando feedback.';
    Tab_Lang[6]    = 'Sono d´accordo';
    Tab_Lang[7]    = 'Hai completato questo livello!';
    Tab_Lang[8]    = 'Hai completato questa carta!';
    Tab_Lang[9]    = 'Congratulazioni! ';
    Tab_Lang[10]   = 'IMPOSTAZIONI';
    Tab_Lang[11]   = 'Suono:';
    Tab_Lang[12]   = 'Linguaggio:';
    Tab_Lang[13]   = 'Annulla';
    Tab_Lang[14]   = 'Salva';
    Tab_Lang[15]   = 'Seleziona un colore';
    Tab_Lang[16]   = 'Aperture aperte';
    Tab_Lang[17]   = 'Aperture semi-aperte';
    Tab_Lang[18]   = 'Aperture chiuse';
    Tab_Lang[19]   = 'Aperture semi-chiuse';
    Tab_Lang[20]   = 'Aperture sui fianchi';
    Tab_Lang[21]   = 'Prossime versioni';
    Tab_Lang[22]   = 'Il prossimo';
    Tab_Lang[23]   = 'Teoria delle aperture';
    Tab_Lang[24]   = 'Preferiti';

    Tab_Lang[25]   = 'Mio profilo';
    Tab_Lang[26]   = 'Nome';
    Tab_Lang[27]   = 'E-mail';
    Tab_Lang[28]   = 'Paese:';
    Tab_Lang[29]   = 'Genere';
    Tab_Lang[30]   = 'Maschio';
    Tab_Lang[31]   = 'Femminile';
    Tab_Lang[32]   = 'Data di nascita';
    Tab_Lang[33]   = 'Da quanto tempo giochi a scacchi?';
    Tab_Lang[34]   = 'Meno di 3 mesi';
    Tab_Lang[35]   = 'Da 3 mesi a 1 anno';
    Tab_Lang[36]   = 'Tra 1 e 5 anni';
    Tab_Lang[37]   = 'Più di 5 anni';
    Tab_Lang[38]   = 'Qual è il tuo rating?';
    Tab_Lang[39]   = 'Non lo so / Non ho';
    Tab_Lang[40]   = 'Come hai scoperto la nostra App?';
    Tab_Lang[41]   = 'Indicazione di amico';
    Tab_Lang[42]   = 'Social networks';
    Tab_Lang[43]   = 'Annuncio';
    Tab_Lang[44]   = 'Apple Store/Google Play';
    Tab_Lang[45]   = 'Altri';
    Tab_Lang[46]   = 'Specificare: (opzionale)';
    Tab_Lang[47]   = 'Invia';

    Tab_Lang[48]   = 'Aiuto';
    Tab_Lang[49]   = 'SEGNALA ERRORE';

    Tab_Lang[50]   = 'SUGGERIMENTO IMPORTANTE';
    Tab_Lang[51]   = 'Ripeti il ​​<b> nome dei pezzi </b> nella tua mente mentre vengono mostrate le offerte. Es: Pedone, Pedone, Cavaliere, Vescovo ... <br> <br> Se è ancora difficile, ripeti il ​​nome dei pezzi <b> ad alta voce </b>';

    Tab_Lang[52]    = '-----';
    Tab_Lang[53]    = '-----';
    Tab_Lang[54]    = '-----';
    Tab_Lang[55]    = '-----';
    Tab_Lang[56]    = '-----';
    Tab_Lang[57]    = '-----';
    Tab_Lang[58]    = '-----';
    Tab_Lang[59]    = '-----';
    Tab_Lang[60]    = '-----';
    Tab_Lang[61]    = '-----';

    Tab_Lang[62]   = 'Messaggio di errore';
    Tab_Lang[63]   = 'Si è verificato un errore durante la registrazione. Per favore riprova. Se l´errore persiste, contatta il nostro supporto.';
    Tab_Lang[64]   = 'Impossibile accedere al server';
    Tab_Lang[65]   = 'Grazie';
    Tab_Lang[66]   = 'Grazie per averci aiutato a realizzare un prodotto migliore!';

    Tab_Lang[80]   = 'Inviaci la tua opinione su questa app e ottieni <b> + 15 giorni di accesso gratuito </b>!';
    Tab_Lang[81]   = 'Come valuteresti ciascuno degli argomenti seguenti?';
    Tab_Lang[82]   = 'Colori';
    Tab_Lang[83]   = 'Design';
    Tab_Lang[84]   = 'Logo';
    Tab_Lang[85]   = 'Facilità di utilizzo';
    Tab_Lang[86]   = 'Aperture';
    Tab_Lang[87]   = 'Metodo';

    Tab_Lang[82]   = 'Design';
    Tab_Lang[83]   = 'Ease of use';
    Tab_Lang[84]   = 'Method';
    Tab_Lang[85]   = 'Openings';
    Tab_Lang[86]   = 'Games';
    Tab_Lang[87]   = 'Theory';

    Tab_Lang[88]   = 'Quali sono le 3 cose che fai di più come nella nostra app?';
    Tab_Lang[89]   = 'Quali sono le 3 cose che ti piacciono meno della nostra app?';
    Tab_Lang[90]   = 'Commenti aggiuntivi:';
    Tab_Lang[91]   = 'Invia';

    Tab_Lang[92]   = 'line';
    Tab_Lang[93]   = 'lines';

    Tab_Lang[100]  = 'La tua registrazione è andata a buon fine!';
    Tab_Lang[101]  = '';
    Tab_Lang[102]  = 'Abbiamo inviato un´e-mail a @user_email';
    Tab_Lang[103]  = 'Per confermare il tuo account, accedi alla tua casella di posta e fai clic sul pulsante <b> VERIFICA </b>';
    Tab_Lang[104]  = 'Se non hai ricevuto la nostra email, controlla la tua casella di spam';
    Tab_Lang[105]  = 'Se hai bisogno di aiuto, <span onclick="Show_Suporte_Section();" style="color: #0066FF;">Clicca qui.</span>';
    Tab_Lang[106]  = 'In costruzione';
    Tab_Lang[107]  = 'Grazie per il tuo feedback';

    Tab_Lang [108] = 'Informazioni su questa app';
    Tab_Lang [109] = 'Questa è una <b> versione Beta </b>, stiamo facendo esperimenti per costruire questo prodotto. Nuove funzionalità verranno gradualmente incorporate con ogni nuova versione, che dovrebbe essere rilasciata ogni due settimane. ';
    Tab_Lang [110] = 'La nostra metodologia di allenamento si basa sulla memorizzazione delle principali posizioni di ogni apertura, le battute più giocate dai più grandi giocatori del mondo, negli ultimi 50 anni.';
    Tab_Lang [111] = 'L´applicazione copre un totale di oltre 8mila linee, suddivise in circa 120 carte (48 disponibili nella versione attuale).';
    Tab_Lang [112] = 'Ogni carta contiene da 20 a 150 linee, che devono essere addestrate progressivamente dal livello 1 a 5, sempre nella stessa sequenza.';
    Tab_Lang [113] = 'Al livello 1, devi ripetere le prime 4 mosse di ogni riga.';
    Tab_Lang [114] = 'Quando ogni livello viene completato, vengono aggiunte due mosse, aumentando così gradualmente la difficoltà di ogni esercizio. Al livello 5, devi ripetere fino a 12 mosse. ';
    Tab_Lang [115] = 'Questo sistema di allenamento è già stato testato con successo in piccoli gruppi, in un´altra app sperimentale.';
    Tab_Lang [116] = 'Garantiamo l´uso gratuito di questa applicazione fino al 31 luglio 2021.';
    Tab_Lang [117] = 'Facoltativamente, puoi estendere questo periodo fino a 60 giorni, previa registrazione e inviandoci il tuo feedback con critiche e suggerimenti.';
    Tab_Lang [118] = 'Suggerimenti e critiche, così come correzioni alle traduzioni, sono sempre ben accetti e possono essere effettuati anche tramite e-mail: <b> support@promasterchess.com </b>';
    Tab_Lang [119] = 'Chi Siamo';
    Tab_Lang [120] = 'Siamo un piccolo team di appassionati di scacchi, studenti di neuroscienze, professionisti IT e specialisti in graphic design, che negli ultimi due anni hanno lavorato per sviluppare un metodo efficiente per addestrare le aperture in modo intuitivo e con risultati rapidi, soprattutto per quel gruppo di giocatori che non hanno molto tempo per studiare. ';
    Tab_Lang [121] = 'Disclaimer';
    Tab_Lang [122] = 'Questa è una versione Beta, stiamo facendo esperimenti per costruire questo prodotto.';
    Tab_Lang [123] = 'Alcune funzionalità potrebbero essere disabilitate senza preavviso.';
    Tab_Lang [124] = 'La tua cronologia di allenamento potrebbe andare persa durante il periodo di prova.';
    Tab_Lang [125] = 'Usa il 100% gratis fino al 31/07/21, prorogabile registrandoti e inviando feedback.';


    Tab_Lang [130] = 'Ripristino scheda';
    Tab_Lang [131] = 'Questa operazione cancellerà tutta la cronologia di allenamento per questa scheda.';
    Tab_Lang [132] = 'Sei sicuro di voler resettare questa carta?';
    Tab_Lang [133] = 'Annulla';
    Tab_Lang [134] = 'Conferma';
    Tab_Lang [135] = 'Annulla';
    Tab_Lang [136] = 'Sì';
    Tab_Lang [137] = 'Annulla';
    Tab_Lang [138] = 'Sì';
    Tab_Lang [139] = 'BENVENUTO';

    Tab_Lang [140] = 'Il modo più semplice e divertente per evolvere negli scacchi';
    Tab_Lang [141] = 'L´applicazione <b>Chess Openings Pro-Master</b> contiene tutto il necessario per comprendere e padroneggiare l´intricato mondo delle Chess Openings.';
    Tab_Lang [142] = 'Tu <b>scegli l´apertura</b> che vuoi studiare e il sistema ti mostrerà le linee principali.';
    Tab_Lang [143] = 'Tutto quello che devi fare è <b>ripetere le mosse che fa il computer';
    Tab_Lang [144] = 'Al livello 1 ci sono solo le <b>prime 4 mosse</b> per lato. Una volta completato questo livello, il livello di difficoltà aumenta gradualmente a 6, 8, 10 e persino 12 mosse.';
    Tab_Lang [145] = 'Con questo metodo, oltre a migliorare la tua partita di apertura, registrerai nel tuo inconscio <b>una quantità enorme di schemi di gioco</b>, a cui potrai accedere intuitivamente nelle tue prossime partite.';
    Tab_Lang [146] = 'Allena 15 giorni per 15 minuti al giorno e vedi la <b>differenza nei risultati</b> rispetto a qualsiasi altro tipo di allenamento!';
    Tab_Lang [147] = 'Inizia ora';
    Tab_Lang [148] = 'Benvenuto';
    Tab_Lang [149] = 'Impostazioni';

    Tab_Lang [150] = 'Supporto';
    Tab_Lang [151] = '1. CONCETTI GENERALI';
    Tab_Lang [152] = '2. ESERCIZI PER LIVELLO';
    Tab_Lang [153] = '4 mosse';
    Tab_Lang [154] = '6 mosse';
    Tab_Lang [155] = '8 mosse';
    Tab_Lang [156] = '10 mosse';
    Tab_Lang [157] = '12 mosse';
    Tab_Lang [158] = '3. ECO';
    Tab_Lang [159] = '4. PARTITE';

    Tab_Lang [160] = 'Reimposta questa carta';
    Tab_Lang [161] = 'PREFERITI';
    Tab_Lang [162] = 'IL MIO ACCOUNT';
    Tab_Lang [163] = 'Versione:';
    Tab_Lang [164] = 'DATI PERSONALI';
    Tab_Lang [165] = 'Crea il tuo account ora e ottieni altri 15 giorni di accesso gratuito!';
    Tab_Lang [166] = 'Ci vuole meno di 1 minuto!';
    Tab_Lang [167] = 'Crea account';
    Tab_Lang [168] = 'FIRMA';
    Tab_Lang [169] = 'Validità:';

    Tab_Lang [170] = 'History';
    Tab_Lang [171] = 'Rinnova';
    Tab_Lang [172] = 'FEEDBACK';
    Tab_Lang [173] = 'Grazie! :)';
    Tab_Lang [174] = 'Ultimo feedback:';
    Tab_Lang [175] = 'Nuovo feedback';
    Tab_Lang [176] = 'RISPOSTE';
    Tab_Lang [177] = 'Inviaci la tua opinione su questa app e ricevi + <span style="color: #F038A3">15 giorni gratis!</span>';
    Tab_Lang [178] = 'CREA ACCOUNT';
    Tab_Lang [179] = 'Crea il tuo account ora e ricevi + <span style="color: #F038A3">15 giorni gratis</span>';

    Tab_Lang [180] = 'C´era qualcosa di sbagliato! Il tuo ordine non può essere completato. Per favore, contatta il nostro supporto per risolvere questo problema.';
    Tab_Lang [181] = '';
    Tab_Lang [182] = '';
    Tab_Lang [183] = '';
    Tab_Lang [184] = '';
    Tab_Lang [185] = '';
    Tab_Lang [186] = '';
    Tab_Lang [187] = '';
    Tab_Lang [188] = '';
    Tab_Lang [189] = '';

    Tab_Lang [190] = '';
    Tab_Lang [191] = ''
    Tab_Lang [193] = '';
    Tab_Lang [194] = '';
    Tab_Lang [195] = 'SUPPORTO';
    Tab_Lang [196] = 'Questo canale ti consente di segnalare rapidamente <b>problemi</b> con l´applicazione, nonché di inviare <b>domande</b>, <b>recensioni</b> e <b> suggerimenti</b>.';
    Tab_Lang [197] = 'Post precedenti';
    Tab_Lang [198] = 'Invia il tuo messaggio';
    Tab_Lang [199] = 'Invia';

    Tab_Lang [200] = 'IMPOSTAZIONI';
    Tab_Lang [201] = 'Prenota con il 30% di sconto';
    Tab_Lang [202] = 'Confermare la prenotazione?';
    Tab_Lang [203] = 'Segnala errore';
    Tab_Lang [204] = 'Questo esercizio è sbagliato?';
    Tab_Lang [205] = 'Grazie!';
    Tab_Lang [206] = 'TRENO';
    Tab_Lang [207] = 'Crea account';
    Tab_Lang [208] = 'ACQUISTI';
    Tab_Lang [209] = '';

    Tab_Lang [210] = 'Prenotazione OK';
    Tab_Lang [211] = 'La tua prenotazione è andata a buon fine, grazie!';
    Tab_Lang [212] = 'Il nero ha scacco matto';
    Tab_Lang [213] = 'Le ragazze nere se ne vanno';
    Tab_Lang [214] = 'Bianco ha scacco matto';
    Tab_Lang [215] = 'Foglie bianche';
    Tab_Lang [216] = 'Affoga cravatta';
    Tab_Lang [217] = 'Pareggia per ripetizione';
    Tab_Lang [218] = 'Pari per materiale insufficiente';
    Tab_Lang [219] = 'Regola pari per 50 mosse';

    Tab_Lang [220] = 'Pareggiamento di comune accordo';
    Tab_Lang [221] = 'Cominciamo';
    Tab_Lang [222] = 'Non hai ancora messaggi.';
    Tab_Lang [223] = 'RISERVATO';
    Tab_Lang [224] = 'Valutazione partita';
    Tab_Lang [225] = 'Aumento graduale della difficoltà';
    Tab_Lang [226] = 'Gli esercizi per ogni carta sono divisi in 5 livelli:<li>Livello 1 = Prime 4 mosse</li><li>Livello 2 = Prime 6 mosse</li><li>Livello 3 = Prime 8 mosse</li><li>Livello 4 = Prime 10 mosse</li><li>Livello 5 = Prime 12 mosse</li><br>Devi completare un livello prima di passare a quello successivo.';
    Tab_Lang [227] = 'Struttura per trovare aperture';
    Tab_Lang [228] = 'L´ECO (Encyclopaedia of Chess Openings) è una raccolta di libri che descrivono tutte le aperture conosciute degli scacchi utilizzando un sistema di codifica standard internazionale.<br><br>Ogni ECO descrive brevemente le migliori linee e varianti di ogni apertura .<br><br>Ogni carta può contenere uno o più di questi codici.';
    Tab_Lang [229] = 'Impara dai migliori GM del mondo.';

    Tab_Lang [230] = 'Ogni scheda contiene da 20 a 30 partite che possono essere studiate come riferimento.<br><br>Giocando una partita acquisisci le idee strategiche e tattiche più comuni per l´apertura che stai studiando.<br><br>Più volte guardi una partita, migliore sarà la tua sensazione per questo tipo di posizione.<br><br>Guarda ogni partita più volte per capirla bene.<br><br>Quando giochi le partite , prova ad anticipare le offerte della parte vincente. Più lo fai, più velocemente si evolverà il tuo gioco.';
    Tab_Lang [231] = 'La tua opinione è molto importante per noi';
    Tab_Lang [232] = 'Puoi comunicare con noi in <b>inglese</b>, <b>portoghese</b>, <b>spagnolo</b> e <b>tedesco.</b><br><br>Ci impegneremo a rispondere a tutti i messaggi entro <b>24 ore</b>.';
    Tab_Lang [233] = '';
    Tab_Lang [234] = '';
    Tab_Lang [235] = '';
    Tab_Lang [236] = '';
    Tab_Lang [237] = '';
    Tab_Lang [238] = '';
    Tab_Lang [239] = '';

    Tab_Lang [240] = 'Ti piace la nostra app?';
    Tab_Lang [241] = 'Invia parere';
    Tab_Lang [242] = 'Crea account';
    Tab_Lang [243] = 'Invia feedback';
    Tab_Lang [244] = 'Connessione al server non disponibile. Per favore controlla la tua connessione Internet.';
    Tab_Lang [245] = 'Treno';
    Tab_Lang [246] = 'Games';
    Tab_Lang [247] = 'Non hai ancora nessuna carta preferita.';
    Tab_Lang [248] = 'Questo esercizio contiene errori e verrà saltato.';
    Tab_Lang [249] = '';

    Tab_Lang [250] = 'qualche secondo fa';
    Tab_Lang [251] = '';
    Tab_Lang [252] = 'minuto fa';
    Tab_Lang [253] = 'minuti fa';
    Tab_Lang [254] = 'ore fa';
    Tab_Lang [255] = 'ore fa';
    Tab_Lang [256] = 'giorno fa';
    Tab_Lang [257] = 'giorni fa';
    Tab_Lang [258] = 'settimana fa';
    Tab_Lang [259] = 'settimane fa';

    Tab_Lang [260] = 'Acquisto riuscito';
    Tab_Lang [261] = 'Grazie, il tuo acquisto è andato a buon fine.<br><br>Grazie al tuo supporto, possiamo continuare a lavorare per offrirti un prodotto migliore!';
    Tab_Lang [262] = 'Cerca questa app per allenare gli scacchi:';
    Tab_Lang [263] = 'Il tuo periodo di prova gratuito ha @ giorni rimanenti.';
    Tab_Lang [264] = 'Accesso temporaneamente sospeso';
    Tab_Lang [265] = 'Per rinnovare l´accesso agli esercizi, visita il nostro Store.';
    Tab_Lang [266] = 'Crea un account e inviaci il tuo feedback per estendere il periodo di prova gratuito.';
    Tab_Lang [267] = 'Acquista ora';
    Tab_Lang [268] = 'Valuta';
    Tab_Lang [269] = 'PROMOZIONE LANCIO';

    Tab_Lang [270] = '30% DI SCONTO!';
    Tab_Lang [271] = 'Valido fino al: 15 settembre 2021';
    Tab_Lang [272] = 'PIANI DI ABBONAMENTO';
    Tab_Lang [273] = 'Prendilo ORA!';
    Tab_Lang [274] = 'Il periodo di abbonamento contrattato verrà aggiunto al periodo di utilizzo gratuito rimanente, se presente.';
    Tab_Lang [275] = 'Nessun costo aggiuntivo per nuove versioni e nuovi contenuti durante il periodo contrattuale!';
    Tab_Lang [276] = 'Accesso istantaneo!';
    Tab_Lang [277] = 'Tutti i piani garantiscono il 100% di accesso alle versioni future durante il periodo contrattuale!';
    Tab_Lang [278] = '';
    Tab_Lang [279] = '';

    Tab_Lang [300] = 'Alcuni principi generali';
    Tab_Lang [301] = '1. Sviluppa rapidamente tutti i pezzi ';
    Tab_Lang [302] = 'L´obiettivo principale in apertura è sviluppare pezzi e raggiungere l´arrocco il più velocemente possibile.';
    Tab_Lang [303] = 'L´apertura è completa quando uno o entrambi i giocatori hanno le loro rocce collegate.';
    Tab_Lang [304] = 'Il giocatore, che termina per primo lo sviluppo, ottiene l´iniziativa.';
    Tab_Lang [305] = '2. Sviluppa i cavalieri prima dei vescovi';

    Tab_Lang [306] = 'Mentre gli Alfieri possono controllare diverse caselle dalla loro posizione originale, se non ci sono pedine che ostacolano la loro strada, i Cavalieri dominano solo le loro caselle vicine e impiegano più tempo per raggiungere il campo dell´avversario, perché sono pezzi meno mobili.';
    Tab_Lang [307] = '3. Non muovere lo stesso pezzo due volte durante l´apertura ';
    Tab_Lang [308] = 'Prova a posizionare i tuoi pezzi nella migliore posizione possibile alla prima mossa.';
    Tab_Lang [309] = 'È una perdita di tempo spostare lo stesso pezzo più di una volta durante l´apertura e potrebbe costarti l´iniziativa nel gioco.';
    Tab_Lang [310] = '4. Non fare mosse inutili di pedoni durante l´apertura ';
    Tab_Lang [311] = 'Le mosse dei pedoni dovrebbero essere limitate durante l´apertura, perché il tempo impiegato in queste mosse potrebbe essere applicato per sviluppare un altro pezzo.';
    Tab_Lang [312] = 'Generalmente, il movimento dei pedoni è adatto quando il giocatore mira ad aprire diagonali per la Regina o gli Alfieri o per occupare il centro.';

    Tab_Lang [313] = '5. Non controllare se non è necessario';
    Tab_Lang [314] = 'Un controllo che può essere facilmente difeso dall´avversario non è necessario.';
    Tab_Lang [315] = 'La maggior parte dei controlli durante l´apertura possono essere facilmente difesi da mosse che favoriscono lo sviluppo.';
    Tab_Lang [316] = '6. Non aprire la posizione se sei in ritardo nello sviluppo ';
    Tab_Lang [317] = 'Una posizione aperta favorisce sempre il gregge con più pezzi in gioco e, quindi, dovrebbe essere provocata solo da chi ha un vantaggio in sviluppo.';
    Tab_Lang [318] = '7. Posiziona la regina dietro la linea delle pedine amiche durante l´apertura ';
    Tab_Lang [319] = 'Poiché la regina è un pezzo molto potente, è anche molto vulnerabile ai continui attacchi dell´avversario.';

    Tab_Lang [320] = 'Pertanto, è conveniente posizionarlo dietro un pedone, preferibilmente sulla seconda traversa in modo che il primo sia gratuito per lo sviluppo di Rook.';
    Tab_Lang [321] = '8. Evita di scambiare un pezzo sviluppato per uno non sviluppato ';
    Tab_Lang [322] = 'Generalmente è un cattivo affare scambiare un pezzo ben posizionato con uno mal posizionato.';
    Tab_Lang [323] = 'Quando scambi uno dei tuoi pezzi sviluppati con uno di quelli non sviluppati del tuo avversario, perdi tempo. Lo stesso vale se scambi un pezzo che si è mosso molto con uno che il tuo avversario ha mosso una sola volta. ';
    Tab_Lang [324] = '9. Castello il più rapidamente possibile ';
    Tab_Lang [325] = 'La sicurezza del Re è una delle cose più importanti di cui preoccuparsi durante l´inizio e la metà del gioco.';
    Tab_Lang [326] = 'Il Re al centro sarà sempre molto vulnerabile agli attacchi dell´avversario, specialmente nelle posizioni aperte.';

    Tab_Lang [327] = 'Arrocco significa posizionare comodamente il tuo Re dietro un blocco di pedoni e consentire lo sviluppo di una delle tue Torri. Quindi, la Torre può occupare rapidamente un file aperto o semiaperto. ';
    Tab_Lang [328] = '10. L´arrocco di Kingside è più sicuro di quello di Queenside';
    Tab_Lang [329] = 'L´arrocco di Kingside pone il Re lontano dal centro e più al sicuro dietro una fila di pedoni protetti; inoltre è una mossa più rapida rispetto all´arrocco di Queenside poiché solo due pezzi devono essere spostati prima. ';
    Tab_Lang [330] = 'D´altra parte, l´arrocco sul lato opposto dell´avversario può essere molto interessante per creare più opportunità di attacco.';
    Tab_Lang [331] = '11. Cerca di impedire all´avversario di arroccare ';
    Tab_Lang [332] = 'Se il tuo avversario sta aspettando troppo a lungo per arroccare, cerca di tenere il Re nemico ancora più a lungo al centro.';
    Tab_Lang [333] = 'Uno dei modi più comuni per farlo è controllare una delle caselle che servono da passaggio per il Re (di solito f1 o f8, quando si arrocca sul lato del Re).';

    Tab_Lang [334] = 'La maggior parte delle volte vale la pena sacrificare un pedone per mantenere il Re al centro.';
    Tab_Lang [335] = '12. Domina più territorio possibile ';
    Tab_Lang [336] = 'Il giocatore, che ha un vantaggio nello spazio, consente una maggiore mobilità ai pezzi amici e può, quindi, trasferire i pezzi da una parte all´altra con maggiore flessibilità.';
    Tab_Lang [337] = 'D´altra parte, il giocatore in una posizione più ristretta ha difficoltà a manovrare i pezzi, il che potrebbe essere fatale se gli viene richiesto di difendere il Re.';
    Tab_Lang [338] = '13. Avanzare le pedine per conquistare lo spazio ';
    Tab_Lang [339] = 'Sebbene l´avanzamento dei pedoni sia la risorsa principale per limitare la posizione dell´avversario, questa regola dovrebbe essere considerata attentamente perché più i pedoni sono lontani dalla posizione base più è difficile difenderli.';

    Tab_Lang [340] = 'Inoltre, ogni posizione avanzata da un pedone crea debolezza nelle caselle adiacenti, che possono essere occupate da pezzi nemici.';

    Tab_Lang [341] = '14. Metti le tue pedine al centro ';
    Tab_Lang [342] = 'Il centro della scacchiera è composto da e4, e5, d4 e d5. Il centro espanso include anche i quadrati che formano il rettangolo c3, c6, f3 e f6. ';
    Tab_Lang [343] = 'I pedoni sono le migliori unità per creare il centro perché, a differenza dei pezzi, non sono vulnerabili agli attacchi dei pedoni nemici.';
    Tab_Lang [344] = '15. Tieni i tuoi pezzi il più vicino possibile al centro ';
    Tab_Lang [345] = 'Al centro, un pezzo controlla più quadrati di qualsiasi altro posto sul tabellone. Il Cavaliere, ad esempio, può spostarsi in 8 caselle diverse dal centro mentre ha solo 2 opzioni quando è posizionato negli angoli. ';
    Tab_Lang [346] = 'Il controllo del centro è importante anche perché consente ai pezzi di muoversi rapidamente da un lato del tabellone all´ordine e se i tuoi pezzi si muovono più velocemente di quelli del tuo avversario, hai maggiori possibilità di creare un attacco riuscito. ';
    Tab_Lang [347] = '16. Quando scambi le pedine, cerca di avvicinare le tue al centro ';

    Tab_Lang [348] = 'Se due dei tuoi pedoni possono riprendere il pezzo dell´avversario che ha precedentemente catturato uno dei tuoi pezzi, si consiglia di muovere il pedone che, alla fine, sarà più vicino al centro, poiché i pedoni centrali sono più importanti rispetto a quelli laterali. ';
    Tab_Lang [349] = '17. Controlla il centro prima di attaccare ';
    Tab_Lang [350] = 'Il successo degli attacchi sulle fasce dipende principalmente dal controllo del centro. Preoccupati quindi di un centro forte e stabile prima di iniziare qualsiasi attacco laterale. ';
    Tab_Lang [351] = '18. Le torri dovrebbero occupare rapidamente colonne aperte o semiaperte';
    Tab_Lang [352] = 'Durante l´apertura, le torri sono gli ultimi pezzi da sviluppare. Sono efficaci quando occupano una colonna aperta o semiaperta. ';
    Tab_Lang [353] = 'Generalmente, le case ideali per posizionare le torri sono e1, d1 e c1 (e8, d8 e c8 per il nero), perché in queste posizioni sono in grado di esercitare pressione al centro e allo stesso tempo difendere la parte posteriore. ';
    Tab_Lang [354] = 'Tuttavia, una torretta può ancora essere una difesa efficace quando viene posizionata in seconda fila, pur continuando ad operare in modo aggressivo sulla colonna vertebrale.';

    Tab_Lang [355] = '19. Pensa prima alla difesa ';
    Tab_Lang [356] = 'Il principio più importante negli scacchi è la sicurezza. Ad ogni mossa dell´avversario, fermati e chiediti: ';
    Tab_Lang [357] = 'Cosa minaccia questa mossa?';
    Tab_Lang [358] = 'Quali sono le intenzioni del mio avversario?';
    Tab_Lang [359] = 'Cosa farei se fossi al suo posto?';
    Tab_Lang [360] = '20. Considerazioni finali ';
    Tab_Lang [361] = 'Gli scacchi non sono una scienza esatta e i consigli ei concetti qui presentati non sono applicati nel 100% dei casi e non dovrebbero essere seguiti ciecamente.';
    Tab_Lang [362] = 'Una delle grandi differenze tra un gran maestro e un dilettante è sapere quando violare o meno i principi strategici di base.';
    Tab_Lang [363] = 'In generale, quando diciamo: Evita di far avanzare i pedoni che proteggono il re, intendiamo: Evita di far avanzare i pedoni che proteggono il re, a meno che tu non abbia una buona ragione per farlo.';

    Tab_Lang [364] = 'Pulsanti utili';
    Tab_Lang [365] = 'Mostra il dispositivo di scorrimento temporale';
    Tab_Lang [366] = 'Ripeti ultimo esercizio';
    Tab_Lang [367] = 'Salta le mosse del computer';
    Tab_Lang [368] = 'Invia rapporto dicendo che l´esercizio è sbagliato';

    Tab_Lang_150[1] = 'Possibilità di sfogliare gli esercizi di ogni livello (LINEE)';
    Tab_Lang_150[2] = 'Possibilità di escludere abilitare (ON) o disabilitare (OFF) gli esercizi di ogni Card';
    Tab_Lang_150[3] = 'Allena un livello selezionato';
    Tab_Lang_150[4] = 'Concetti strategici sulle 50 carte più usate';
    Tab_Lang_150[5] = '9 carte gratuite al 100% indipendentemente dal tempo di utilizzo';
    Tab_Lang_150[6] = 'Il sistema di acquisto non è più ad abbonamento, ma a pagamento una tantum';
    Tab_Lang_150[7] = 'Allenamento iniziato';
    Tab_Lang_150[8] = 'Hai già iniziato un corso di formazione a questo livello.';
    Tab_Lang_150[9] = 'Nuovo';
    Tab_Lang_150[10] = 'Continua';

    Tab_Lang_150[11] = 'PREFERENZE';
    Tab_Lang_150[12] = 'Veloce';
    Tab_Lang_150[13] = 'Normale';
    Tab_Lang_150[14] = 'Lento';
    Tab_Lang_150[15] = 'Troppo lento';
    Tab_Lang_150[16] = 'Tempo per mossa:';
    Tab_Lang_150[17] = 'Dopo 1 errore';
    Tab_Lang_150[18] = 'Dopo 2 errori';
    Tab_Lang_150[19] = 'Dopo 3 errori';
    Tab_Lang_150[20] = 'Mai';

    Tab_Lang_150[21] = 'Mostra soluzione:';
    Tab_Lang_150[22] = 'Predefinito';
    Tab_Lang_150[23] = 'Chiudi';
    Tab_Lang_150[24] = 'Il nostro metodo';
    Tab_Lang_150[25] = 'Come allenarsi';
    Tab_Lang_150[26] = 'Imposta il tuo allenamento';
    Tab_Lang_150[27] = 'Partite';
    Tab_Lang_150[28] = 'Teoria aperta';
    Tab_Lang_150[29] = 'Preferiti';
    Tab_Lang_150[30] = 'Registrazione';

    Tab_Lang_150[31] = 'Gratuita x Premium';
    Tab_Lang_150[32] = 'Miglioramenti previsti';
    Tab_Lang_150[33] = 'LINEE';
    Tab_Lang_150[34] = 'GAMES';
    Tab_Lang_150[35] = 'LINEE';
    Tab_Lang_150[36] = 'Livello treno';
    Tab_Lang_150[37] = 'Tutto ON';
    Tab_Lang_150[38] = 'GAMES';
    Tab_Lang_150[39] = 'E-mail:';
    Tab_Lang_150[40] = 'Età:';

    Tab_Lang_150[41] = 'Paese:';
    Tab_Lang_150[42] = 'Il tuo ID:';
    Tab_Lang_150[43] = 'NEGOZIO';
    Tab_Lang_150[44] = 'Veloce';
    Tab_Lang_150[45] = 'Normale';
    Tab_Lang_150[46] = 'Lento';
    Tab_Lang_150[47] = 'Troppo lento';
    Tab_Lang_150[48] = 'Tempo per mossa:';
    Tab_Lang_150[49] = 'Dopo 1 errore';
    Tab_Lang_150[50] = 'Dopo 2 errori';

    Tab_Lang_150[51] = 'Dopo 3 errori';
    Tab_Lang_150[52] = 'Mai';
    Tab_Lang_150[53] = 'Mostra soluzione:';
    Tab_Lang_150[54] = 'Suono:';
    Tab_Lang_150[55] = 'Predefinito';
    Tab_Lang_150[56] = 'Nome';
    Tab_Lang_150[57] = 'Come possiamo migliorare?';
    Tab_Lang_150[58] = 'Inviaci le tue critiche e suggerimenti e ottieni un prodotto ancora migliore.';
    Tab_Lang_150[59] = 'Crea il tuo account per mantenere un backup automatico della cronologia dei tuoi allenamenti sui nostri server.';
    Tab_Lang_150[60] = 'È gratis!';

    Tab_Lang_150[61] = 'Invia di nuovo e-mail';
    Tab_Lang_150[62] = 'Un email è stata inviata a';
    Tab_Lang_150[63] = 'Controlla la tua casella di posta in arrivo o la cartella SPAM.';
    Tab_Lang_150[64] = 'Accesso limitato';
    Tab_Lang_150[65] = 'Nella versione gratuita il numero di esercizi e partite è limitato alle carte grigie.<br><br>Approfitta della nostra tariffa ridotta per acquistare la versione Premium e ottenere immediatamente l´accesso completo a tutte le carte .<br><br>Se non sei sicuro se acquistare o meno la versione Premium, prova una prova gratuita di 7 giorni!';
    Tab_Lang_150[66] = 'Nella versione gratuita il numero di esercizi e partite è limitato alle carte grigie.<br><br>Approfitta della nostra tariffa ridotta per acquistare la versione Premium e ottenere immediatamente l´accesso completo a tutte le carte .';
    Tab_Lang_150[67] = 'Nessun esercizio abilitato';
    Tab_Lang_150[68] = 'Tutti gli esercizi di questa serie sono stati disabilitati (OFF).<br>Clicca su LINEE e poi su TUTTI ON per tornare alla serie predefinita.';
    Tab_Lang_150[69] = 'Importante';
    Tab_Lang_150[70] = 'Puoi abilitare (ON) o disabilitare (OFF) gli esercizi che vuoi studiare.';

    Tab_Lang_150[71] = 'Gli esercizi disabilitati (OFF) non appariranno negli allenamenti futuri.';
    Tab_Lang_150[72] = 'Se vuoi tornare allo schema iniziale, clicca sul pulsante LINEE della scheda corrispondente.';
    Tab_Lang_150[73] = 'Inviaci la tua opinione su questa app e aiutaci a realizzare un prodotto migliore.';
    Tab_Lang_150[74] = 'Secondo il nostro database hai già utilizzato il periodo di prova gratuito. Se queste informazioni non sono corrette, invia un messaggio al nostro supporto.';
    Tab_Lang_150[75] = 'Imposta il tuo allenamento';
    Tab_Lang_150[76] = 'Utilizza i pulsanti rosa (da 1 a 5) per selezionare gli esercizi di un livello corrispondente.<br><br>Fai clic sul pulsante ON/OFF per selezionare le linee che desideri allenare.<br><br> Per visualizzare un allenamento o sfogliare gli allenamenti per il livello selezionato, fai clic sul pulsante <img src="img/but_go3.png" style="width: 24px;"><br><br>Gli esercizi disattivati ​​non appariranno più nell´allenamento normale.';
    Tab_Lang_150[77] = 'Usa i tasti freccia per iniziare';
    Tab_Lang_150[78] = 'Il tuo periodo di prova termina tra:';
    Tab_Lang_150[79] = 'Giorni';
    Tab_Lang_150[80] = 'Ore';

    Tab_Lang_150[81] = 'Minuti';
    Tab_Lang_150[82] = 'Secondi';
    Tab_Lang_150[83] = 'Non mostrare più questo messaggio';
    Tab_Lang_150[84] = '7 giorni GRATIS';
    Tab_Lang_150[85] = 'Versione Premium';
    Tab_Lang_150[86] = 'Versione Premium';
    Tab_Lang_150[87] = 'Messaggio di conferma';
    Tab_Lang_150[88] = 'Hai disabilitato (OFF) uno o più esercizi nell´allenamento corrente.<br><br>Fai clic su CONFERMA se desideri che gli esercizi disabilitati non vengano visualizzati negli allenamenti futuri per questa scheda.<br><br>Cliccando su CONFERMA, verrà ripristinato il livello di allenamento più recente per quella Carta.';
    Tab_Lang_150[89] = 'Annulla';
    Tab_Lang_150[90] = 'Conferma';

    Tab_Lang_150[91] = '';
    Tab_Lang_150[92] = '';
    Tab_Lang_150[93] = '';
    Tab_Lang_150[94] = '';
    Tab_Lang_150[95] = '';
    Tab_Lang_150[96] = '';
    Tab_Lang_150[97] = '';
    Tab_Lang_150[98] = '';
    Tab_Lang_150[99] = '';
    Tab_Lang_150[100] = '';

    Tab_Lang_150[101] = 'Chiave di licenza:';
    Tab_Lang_150[102] = 'Notizie per le prossime versioni:';
    Tab_Lang_150[103] = 'Cerca aperture';
    Tab_Lang_150[104] = 'Utilizza lo stesso account per più dispositivi';
    Tab_Lang_150[105] = 'Complemento di concetti generali di strategia per ogni apertura';
    Tab_Lang_150[106] = 'Imposta i colori del tabellone';
    Tab_Lang_150[107] = 'Il metodo più veloce ed efficiente per evolvere negli scacchi!';
    Tab_Lang_150[108] = '<span style="font-weight: bold; color: #43321e;">8.079 righe</span> delle aperture più giocate negli ultimi 50 anni';
    Tab_Lang_150[109] = '<span style="font-weight: bold; color: #43321e;">4500 partite</span> dei più grandi giocatori del mondo (classici e moderni)';
    Tab_Lang_150[110] = 'Meno sforzo, tempo di conservazione più lungo';

    Tab_Lang_150[111] = 'Sviluppa la tua <span style="font-weight: bold; color: #43321e;">intuizione</span>';
    Tab_Lang_150[112] = 'Gioca più velocemente';
    Tab_Lang_150[113] = 'Migliora la tua capacità di calcolo';
    Tab_Lang_150[114] = 'Migliora la tua <span style="font-weight: bold; color: #43321e;">concentrazione</span>';
    Tab_Lang_150[115] = 'Inizia <span style="font-weight: bold; color: #43321e;">vinci più partite</span>';
    Tab_Lang_150[116] = 'Risultati migliori e più veloci di qualsiasi altro metodo';
    Tab_Lang_150[117] = 'Prezzo normale:';
    Tab_Lang_150[118] = 'Oggi:';
    Tab_Lang_150[119] = 'Questa promozione scade il:';
    Tab_Lang_150[120] = 'Giorni';

    Tab_Lang_150[121] = 'Ore';
    Tab_Lang_150[122] = 'Minuti';
    Tab_Lang_150[123] = 'Secondi';
    Tab_Lang_150[124] = 'Ottieni la tua versione Premium ora solo per:';
    Tab_Lang_150[125] = 'Scacchi';
    Tab_Lang_150[126] = 'Il migliore esercizio per tuo cervello';
    Tab_Lang_150[127] = 'Acquistando questa versione avrai:';
    Tab_Lang_150[128] = 'Accesso completo a tempo indeterminato';
    Tab_Lang_150[129] = 'Aggiornamenti gratuiti';
    Tab_Lang_150[130] = 'Assistenza preferita';

    Tab_Lang_150[131] = 'Accesso istantaneo';
    Tab_Lang_150[132] = 'Commento';
    Tab_Lang_150[133] = 'linee';
    Tab_Lang_150[134] = 'Livello';
    Tab_Lang_150[135] = 'Offerte';
    Tab_Lang_150[136] = '';
    Tab_Lang_150[137] = '';
    Tab_Lang_150[138] = '';
    Tab_Lang_150[139] = '';
    Tab_Lang_150[140] = '';

    Tab_Lang_150[141] = '';
    Tab_Lang_150[142] = '';
    Tab_Lang_150[143] = '';
    Tab_Lang_150[144] = '';
    Tab_Lang_150[145] = '';
    Tab_Lang_150[146] = '';
    Tab_Lang_150[147] = '';
    Tab_Lang_150[148] = '';
    Tab_Lang_150[149] = '';
    Tab_Lang_150[150] = '';

    Tab_Lang_151[1] = 'Sincronizzazione...';
    Tab_Lang_151[2] = 'Free 7-days trial';
    Tab_Lang_151[3] = 'Recupera Account';
    Tab_Lang_151[4] = 'Sincronizza account';
    Tab_Lang_151[5] = 'Esci';
    Tab_Lang_151[6] = 'Recupera Account';
    Tab_Lang_151[7] = 'Sincronizza account';
    Tab_Lang_151[8] = 'RECUPERA ACCOUNT';
    Tab_Lang_151[9] = 'Il ripristino dell´account ti consente di trasferire i dati del tuo account su questo dispositivo.';
    Tab_Lang_151[10] = 'Per eseguire questo trasferimento hai solo bisogno del tuo ID account sull´altro dispositivo (dove hai creato l´account). L´ID appare in fondo alla sezione dove si trovano i dettagli del tuo account.';

    Tab_Lang_151[11] = 'Se non conosci il tuo numero ID, hai perso il cellulare ecc... Invia un messaggio al nostro supporto con la tua email,';
    Tab_Lang_151[12] = 'facendo clic qui';
    Tab_Lang_151[13] = 'IMPORTANTE! Tutti i dati di quel dispositivo verranno cancellati e sostituiti dall´account che indichi.';
    Tab_Lang_151[14] = 'Avvia ripristino';
    Tab_Lang_151[15] = 'SINCRONIZZA ACCOUNT';
    Tab_Lang_151[16] = 'Inserisci il codice di conferma a 4 cifre inviato all´email:';
    Tab_Lang_151[17] = 'Sincronizza';
    Tab_Lang_151[18] = 'Se <b>non hai</b> ricevuto il nostro codice di conferma e-mail, controlla la tua casella di posta indesiderata.';
    Tab_Lang_151[19] = 'Per <b>inviare nuovamente</b> il codice';
    Tab_Lang_151[20] = 'Se hai bisogno di <b>aiuto</b>, invia un messaggio al nostro supporto';

    Tab_Lang_151[21] = 'facendo clic qui.';
    Tab_Lang_151[22] = 'Ora puoi utilizzare lo stesso account su più dispositivi.';
    Tab_Lang_151[23] = 'Per sincronizzare gli account è necessario:';
    Tab_Lang_151[24] = 'Registrati sul dispositivo che desideri sincronizzare.';
    Tab_Lang_151[25] = 'Inserisci l´ID del dispositivo che vuoi sincronizzare nei campi sottostanti.';
    Tab_Lang_151[26] = 'Nella schermata successiva, inserisci il codice di conferma che invieremo alla tua email.';
    Tab_Lang_151[27] = 'Sincronizza';
    Tab_Lang_151[28] = 'clicca qui.';
    Tab_Lang_151[29] = '';
    Tab_Lang_151[30] = '';

    Tab_Lang_151[31] = 'ID non valido, riavvia l´applicazione.';
    Tab_Lang_151[32] = 'Codice non valido';
    Tab_Lang_151[33] = 'ID app non valido';
    Tab_Lang_151[34] = 'Devi registrarti sul dispositivo che vuoi sincronizzare.';
    Tab_Lang_151[35] = 'Codice reinviato a email';
    Tab_Lang_151[36] = 'ID app non trovato. Per favore reinserisci';
    Tab_Lang_151[37] = 'Errore durante la compilazione del modulo';
    Tab_Lang_151[38] = '';
    Tab_Lang_151[39] = '';
    Tab_Lang_151[40] = '';

    Tab_Lang_151[41] = 'Conflitto di sincronizzazione';
    Tab_Lang_151[42] = 'C´è un aggiornamento da un altro dispositivo con una data più recente.';
    Tab_Lang_151[43] = 'Quale vuoi conservare?';
    Tab_Lang_151[44] = 'Mantieni gli aggiornamenti effettuati sull´altro dispositivo';
    Tab_Lang_151[45] = 'Mantieni gli aggiornamenti effettuati su questo dispositivo';
    Tab_Lang_151[46] = 'Ottieni uno sconto ora!';
    Tab_Lang_151[47] = 'Inserisci il codice coupon:';
    Tab_Lang_151[48] = 'Convalida coupon';
    Tab_Lang_151[49] = 'Questo dispositivo:';
    Tab_Lang_151[50] = 'Hai un buono sconto?';

    Tab_Lang_151[51] = 'Codice coupon non valido';
    Tab_Lang_151[52] = '(Principale)';

}



function Set_Lang_GER() {

    Tab_Lang[1]     = 'DISCLAIMER';
    Tab_Lang[2]     = 'Dies ist eine <b>Beta-Version</b>. Wir führen Experimente durch, um dieses Produkt zu erstellen.';
    Tab_Lang[3]     = 'Einige Funktionen können <b> ohne vorherige Ankündigung </b> deaktiviert werden.';
    Tab_Lang[4]     = 'Ihre Trainingshistorie kann während des Testzeitraums verloren gehen.';
    Tab_Lang[5]     = 'Verwendung <span style = "color: #0099FF; font-weight: bold;"> 100% kostenlos </span> bis <span style = "color: #0099FF; font-weight: bold;"> 31.07.21 </span>, das durch Registrieren und Senden von Feedback erweitert werden kann.';
    Tab_Lang[6]     = 'Genau';
    Tab_Lang[7]     = 'Du hast dieses Level abgeschlossen!';
    Tab_Lang[8]     = 'Du hast diese Karte ausgefüllt!';
    Tab_Lang[9]     = 'Herzliche Glückwünsche!';
    Tab_Lang[10]    = 'DIE EINSTELLUNGEN';
    Tab_Lang[11]    = 'Sound:';
    Tab_Lang[12]    = 'Sprache:';
    Tab_Lang[13]    = 'Stornieren';
    Tab_Lang[14]    = 'Speichern';
    Tab_Lang[15]    = 'Wählen Sie eine Farbe';
    Tab_Lang[16]    = 'Offene Eröffnungen';
    Tab_Lang[17]    = 'Halboffene Eröffnungen';
    Tab_Lang[18]    = 'Geschlossene Eröffnungen';
    Tab_Lang[19]    = 'Halbgeschlossene Eröffnungen';
    Tab_Lang[20]    = 'Flankeneröffnungen';
    Tab_Lang[21]    = 'Kommende Veröffentlichungen';
    Tab_Lang[22]    = 'Nächster';
    Tab_Lang[23]    = 'Eröffnungstheorie';
    Tab_Lang[24]    = 'Favoriten';
    Tab_Lang[25]    = 'Mein Konto';
    Tab_Lang[26]    = 'Name';
    Tab_Lang[27]    = 'E-mail';
    Tab_Lang[28]    = 'Land:';
    Tab_Lang[29]    = 'Geschlecht';
    Tab_Lang[30]    = 'Männlich';
    Tab_Lang[31]    = 'Feminin';
    Tab_Lang[32]    = 'Geburtsdatum';
    Tab_Lang[33]    = 'Wie lange spielst du schon Schach?';
    Tab_Lang[34]    = 'Weniger als 3 Monate';
    Tab_Lang[35]    = 'Von 3 Monaten bis 1 Jahr';
    Tab_Lang[36]    = 'Zwischen 1 und 5 Jahren';
    Tab_Lang[37]    = 'Mehr als 5 Jahre';
    Tab_Lang[38]    = 'Was ist dein Rating?';
    Tab_Lang[39]    = 'Ich weiß es nicht / ich habe es nicht';
    Tab_Lang[40]    = 'Wie haben Sie unsere App entdeckt?';
    Tab_Lang[41]    = 'Freundschaftsangabe';
    Tab_Lang[42]    = 'Soziale Netzwerke';
    Tab_Lang[43]    = 'Ankündigung';
    Tab_Lang[44]    = 'Apple Store/Google Play';
    Tab_Lang[45]    = 'Andere';
    Tab_Lang[46]    = 'Spezifizieren: (Optional)';
    Tab_Lang[47]    = 'Einreichen';
    Tab_Lang[48]    = 'Hilfe';
    Tab_Lang[49]    = 'FEHLER MELDEN';
    Tab_Lang[50]    = 'WICHTIGER TIPP';
    Tab_Lang[51]    = 'Wiederholen Sie den <b> Namen der Teile </b> in Ihrem Kopf, während die Züge angezeigt werden. Beispiel: Bauer, Bauer, Springer, Läufer ... <br> <br> Wenn es immer noch schwierig ist, wiederholen Sie den Namen der Stücke <b> laut </b>.';
    Tab_Lang[52]    = '-----';
    Tab_Lang[53]    = '-----';
    Tab_Lang[54]    = '-----';
    Tab_Lang[55]    = '-----';
    Tab_Lang[56]    = '-----';
    Tab_Lang[57]    = '-----';
    Tab_Lang[58]    = '-----';
    Tab_Lang[59]    = '-----';
    Tab_Lang[60]    = '-----';
    Tab_Lang[61]    = '-----';
    Tab_Lang[62]    = 'Fehlermeldung';
    Tab_Lang[63]    = 'Bei der Registrierung ist ein Fehler aufgetreten. Bitte versuche es erneut. Wenn der Fehler weiterhin besteht, wenden Sie sich an unseren Support.';
    Tab_Lang[64]    = 'Zugriff auf den Server fehlgeschlagen';
    Tab_Lang[65]    = 'Herzlichen Dank';
    Tab_Lang[66]    = 'Vielen Dank, dass Sie uns dabei helfen, ein besseres Produkt zu entwickeln!';

    Tab_Lang[80]    = 'Senden Sie uns Ihre Meinung zu dieser App und erhalten Sie <b> + 15 Tage freien Zugang </b>!';
    Tab_Lang[81]    = 'Wie würden Sie jedes der folgenden Themen bewerten?';
    Tab_Lang[82]    = 'Farben';
    Tab_Lang[83]    = 'Design';
    Tab_Lang[84]    = 'Logo';
    Tab_Lang[85]    = 'Benutzerfreundlichkeit';
    Tab_Lang[86]    = 'Öffnungen';
    Tab_Lang[87]    = 'Methode';
    Tab_Lang[82]    = 'Design';
    Tab_Lang[83]    = 'Ease of use';
    Tab_Lang[84]    = 'Method';
    Tab_Lang[85]    = 'Openings';
    Tab_Lang[86]    = 'Games';
    Tab_Lang[87]    = 'Theory';
    Tab_Lang[88]    = 'Was hat Ihnen an unserer App am besten gefallen?';
    Tab_Lang[89]    = 'Was sind die 3 Dinge, die Ihnen in unserer App am wenigsten gefallen?';
    Tab_Lang[90]    = 'Zusätzliche Kommentare:';
    Tab_Lang[91]    = 'Einreichen';
    Tab_Lang[92]    = 'line';
    Tab_Lang[93]    = 'lines';

    Tab_Lang[100]   = 'Ihre Registrierung war erfolgreich!';
    Tab_Lang[101]   = '';
    Tab_Lang[102]   = 'Wir haben eine email an @user_email gesendet';
    Tab_Lang[103]   = 'Um Ihr Konto zu bestätigen, greifen Sie bitte auf Ihre Mailbox zu und klicken Sie auf die Schaltfläche <b> VERIFY </b>';
    Tab_Lang[104]   = 'Wenn Sie unsere email nicht erhalten haben, suchen Sie bitte Ihr Spam-Kontrollkästchen an';
    Tab_Lang[105]   = 'Wenn Sie Hilfe benötigen, <span onclick="Show_Suporte_Section();" style="color: #0066FF;">Klicke hier.</span>';
    Tab_Lang[106]   = 'Im Aufbau';
    Tab_Lang[107]   = 'Vielen Dank für Ihr Feedback';
    Tab_Lang [108] = 'Über diese App';
    Tab_Lang [109] = 'Dies ist eine <b> Beta-Version </b>. Wir führen Experimente durch, um dieses Produkt zu erstellen. Mit jeder neuen Version, die alle zwei Wochen veröffentlicht werden soll, werden nach und nach neue Funktionen integriert. ';
    Tab_Lang [110] = 'Unsere Trainingsmethode basiert auf dem Auswendiglernen der Hauptpositionen jeder Eröffnung, der Linien, die in den letzten 50 Jahren von den größten Spielern der Welt am häufigsten gespielt wurden.';
    Tab_Lang [111] = 'Die Anwendung umfasst insgesamt mehr als 8.000 Zeilen, die in ungefähr 120 Karten unterteilt sind (48 in der aktuellen Version verfügbar).';
    Tab_Lang [112] = 'Jede Karte enthält zwischen 20 und 150 Zeilen, die schrittweise von Stufe 1 bis 5 trainiert werden müssen, immer in derselben Reihenfolge.';
    Tab_Lang [113] = 'Auf Stufe 1 müssen Sie die ersten 4 Züge jeder Zeile wiederholen.';
    Tab_Lang [114] = 'Nach Abschluss jedes Levels werden zwei Züge hinzugefügt, wodurch sich die Schwierigkeit jeder Übung allmählich erhöht. Auf Stufe 5 müssen Sie bis zu 12 Züge wiederholen. ';
    Tab_Lang [115] = 'Dieses Trainingssystem wurde bereits in kleinen Gruppen in einer anderen experimentellen App erfolgreich getestet.';
    Tab_Lang [116] = 'Wir garantieren die kostenlose Nutzung dieser Anwendung bis zum 31. Juli 2021.';
    Tab_Lang [117] = 'Optional können Sie diesen Zeitraum bis zu 60 Tage verlängern, wenn Sie sich registrieren und uns Ihr Feedback mit Kritik und Vorschlägen senden.';
    Tab_Lang [118] = 'Vorschläge und Kritik sowie Korrekturen an Übersetzungen sind immer willkommen und können auch per E-Mail erfolgen: <b> support@promasterchess.com </b>';
    Tab_Lang [119] = 'Wer wir sind';
    Tab_Lang [120] = 'Wir sind ein kleines Team von Schachbegeisterten, Neurowissenschaftlern, IT-Fachleuten und Grafikdesign-Spezialisten, die seit zwei Jahren daran arbeiten, eine effiziente Methode zu entwickeln, um Eröffnungen auf intuitive Weise und mit schnellen Ergebnissen zu trainieren , besonders für diese Gruppe von Spielern, die nicht viel Zeit zum Lernen haben. ';
    Tab_Lang [121] = 'Haftungsausschluss';
    Tab_Lang [122] = 'Dies ist eine Beta-Version, wir führen Experimente durch, um dieses Produkt zu erstellen.';
    Tab_Lang [123] = 'Einige Funktionen können ohne vorherige Ankündigung deaktiviert werden.';
    Tab_Lang [124] = 'Ihre Trainingshistorie kann während des Testzeitraums verloren gehen.';
    Tab_Lang [125] = 'Bis zum 31.07.21 100% kostenlos verwenden, was durch Registrieren und Senden von Feedback erweitert werden kann.';

    Tab_Lang [130] = 'Karten-Reset';
    Tab_Lang [131] = 'Dieser Vorgang löscht den gesamten Trainingsverlauf für diese Karte.';
    Tab_Lang [132] = 'Möchten Sie diese Karte wirklich zurücksetzen?';
    Tab_Lang [133] = 'Abbrechen';
    Tab_Lang [134] = 'Bestätigen';
    Tab_Lang [135] = 'Abbrechen';
    Tab_Lang [136] = 'Ja';
    Tab_Lang [137] = 'Abbrechen';
    Tab_Lang [138] = 'Ja';
    Tab_Lang [139] = 'WILLKOMMEN';

    Tab_Lang [140] = 'Der einfachste und unterhaltsamste Weg, sich im Schach weiterzuentwickeln';
    Tab_Lang [141] = 'Die App <b>Chess Openings Pro-Master</b> enthält alles, was Sie brauchen, um die komplizierte Welt der Chess Openings zu verstehen und zu meistern.';
    Tab_Lang [142] = 'Sie <b>wählen die Öffnung</b>, die Sie studieren möchten und das System zeigt Ihnen die Hauptlinien.';
    Tab_Lang [143] = 'Alles was du tun musst ist <b>die Bewegungen des Computers zu wiederholen';
    Tab_Lang [144] = 'Auf Level 1 gibt es nur die <b>ersten 4 Züge</b> auf jeder Seite. Sobald dieses Level abgeschlossen ist, erhöht sich der Schwierigkeitsgrad allmählich auf 6, 8, 10 und sogar 12 Züge.';
    Tab_Lang [145] = 'Mit dieser Methode werden Sie nicht nur Ihr Eröffnungsspiel verbessern, sondern auch in Ihrem Unbewussten <b>eine riesige Menge an Spielmustern</b> registrieren, auf die Sie in Ihren nächsten Spielen intuitiv zugreifen können.';
    Tab_Lang [146] = 'Trainieren Sie 15 Tage für 15 Minuten pro Tag und sehen Sie den <b>Unterschied in den Ergebnissen</b> im Vergleich zu jeder anderen Trainingsart!';
    Tab_Lang [147] = 'Jetzt starten';
    Tab_Lang [148] = 'Willkommen';
    Tab_Lang [149] = 'Einstellungen';

    Tab_Lang [150] = 'Unterstützung';
    Tab_Lang [151] = '1. ALLGEMEINE KONZEPTE';
    Tab_Lang [152] = '2. ÜBUNGEN NACH NIVEAU';
    Tab_Lang [153] = '4 Züge';
    Tab_Lang [154] = '6 Züge';
    Tab_Lang [155] = '8 Züge';
    Tab_Lang [156] = '10 Züge';
    Tab_Lang [157] = '12 Züge';
    Tab_Lang [158] = '3. ECO';
    Tab_Lang [159] = '4. GAMES';

    Tab_Lang [160] = 'Diese Karte zurücksetzen';
    Tab_Lang [161] = 'FAVORITEN';
    Tab_Lang [162] = 'MEIN KONTO';
    Tab_Lang [163] = 'Version:';
    Tab_Lang [164] = 'PERSÖNLICHE DATEN';
    Tab_Lang [165] = 'Erstellen Sie jetzt Ihr Konto und erhalten Sie weitere 15 Tage kostenlosen Zugang!';
    Tab_Lang [166] = 'Es dauert weniger als 1 Minute!';
    Tab_Lang [167] = 'Konto erstellen';
    Tab_Lang [168] = 'UNTERSCHRIFT';
    Tab_Lang [169] = 'Gültigkeit:';

    Tab_Lang [170] = 'History';
    Tab_Lang [171] = 'Erneuern';
    Tab_Lang [172] = 'FEEDBACKS';
    Tab_Lang [173] = 'Danke! :)';
    Tab_Lang [174] = 'Letzte Rückmeldung:';
    Tab_Lang [175] = 'Neues Feedback';
    Tab_Lang [176] = 'FEEDBACK';
    Tab_Lang [177] = 'Senden Sie uns Ihre Meinung zu dieser App und Sie erhalten + <span style="color: #F038A3">15 Tage kostenlos!</span>';
    Tab_Lang [178] = 'KONTO ERSTELLEN';
    Tab_Lang [179] = 'Erstelle jetzt dein Konto und erhalte + <span style="color: #F038A3">15 Frei Tage</span>';

    Tab_Lang [180] = 'Etwas war falsch! Ihre Bestellung kann nicht abgeschlossen werden. Bitte kontaktieren Sie unseren Support, um dieses Problem zu lösen.';
    Tab_Lang [181] = '';
    Tab_Lang [182] = '';
    Tab_Lang [183] = '';
    Tab_Lang [184] = '';
    Tab_Lang [185] = '';
    Tab_Lang [186] = '';
    Tab_Lang [187] = '';
    Tab_Lang [188] = '';
    Tab_Lang [189] = '';

    Tab_Lang [190] = '';
    Tab_Lang [191] = ''
    Tab_Lang [193] = '';
    Tab_Lang [194] = '';
    Tab_Lang [195] = 'UNTERSTÜTZUNG';
    Tab_Lang [196] = 'Dieser Kanal ist für Sie, um schnell <b>Probleme</b> mit der Anwendung zu melden sowie Ihre <b>Fragen</b>, <b>Bewertungen</b> und <b> Vorschläge</b> zu senden.';
    Tab_Lang [197] = 'Vorherige Beiträge';
    Tab_Lang [198] = 'Nachricht senden';
    Tab_Lang [199] = 'Senden';

    Tab_Lang [200] = 'EINSTELLUNGEN';
    Tab_Lang [201] = 'Buchung mit 30% Rabatt';
    Tab_Lang [202] = 'Buchung bestätigen?';
    Tab_Lang [203] = 'Fehler melden';
    Tab_Lang [204] = 'Ist diese Übung falsch?';
    Tab_Lang [205] = 'Danke!';
    Tab_Lang [206] = 'TRAINIEREN';
    Tab_Lang [207] = 'Konto erstellen';
    Tab_Lang [208] = 'EINKAUFEN';
    Tab_Lang [209] = '';

    Tab_Lang [210] = 'Buchung OK';
    Tab_Lang [211] = 'Ihre Buchung war erfolgreich, danke!';
    Tab_Lang [212] = 'Schwarz hat Schachmatt';
    Tab_Lang [213] = 'Schwarze Mädchen gehen';
    Tab_Lang [214] = 'Weiß hat Schachmatt';
    Tab_Lang [215] = 'Weiße Blätter';
    Tab_Lang [216] = 'Ertrinkende Krawatte';
    Tab_Lang [217] = 'Gleichstand durch Wiederholung';
    Tab_Lang [218] = 'Krawatte wegen unzureichendem Material';
    Tab_Lang [219] = 'Unentschieden nach 50-Zug-Regel';

    Tab_Lang [220] = 'Unentschieden einvernehmlich';
    Tab_Lang [221] = 'Lasst uns beginnen';
    Tab_Lang [222] = 'Sie haben noch keine Nachrichten.';
    Tab_Lang [223] = 'RESERVIERT';
    Tab_Lang [224] = 'Spielbewertung';
    Tab_Lang [225] = 'Allmählicher Schwierigkeitsgrad';
    Tab_Lang [226] = 'Die Übungen für jede Karte sind in 5 Stufen unterteilt:<li>Stufe 1 = Erste 4 Züge</li><li>Stufe 2 = Erste 6 Züge</li><li>Stufe 3 = Erste 8 Züge</li><li>Stufe 4 = Die ersten 10 Züge</li><li>Stufe 5 = Die ersten 12 Züge</li><br>Sie müssen eine Stufe abschließen, bevor Sie mit der nächsten fortfahren können.';
    Tab_Lang [227] = 'Möglichkeit zum Finden von Öffnungen';
    Tab_Lang [228] = 'Die ECO (Encyclopaedia of Chess Openings) ist eine Sammlung von Büchern, die alle bekannten Schacheröffnungen unter Verwendung eines internationalen Standardcodierungssystems beschreiben.<br><br>Jede ECO beschreibt kurz die besten Linien und Varianten jeder Eröffnung .<br><br>Jede Karte kann einen oder mehrere dieser Codes enthalten.';
    Tab_Lang [229] = 'Lerne von den besten GMs der Welt.';

    Tab_Lang [230] = 'Jede Karte enthält 20 bis 30 games, die als Referenz studiert werden können.<br><br>Indem Sie ein Match spielen, erfassen Sie die gängigsten strategischen und taktischen Ideen für die Eröffnung, die Sie studieren.<br><br>Je öfter Sie sich ein Spiel ansehen, desto besser wird Ihr Gefühl für diese Art von Position sein.<br><br>Schauen Sie sich jedes Spiel mehrmals an, um es gut zu verstehen.<br><br>Wenn Sie die Spiele spielen , versuchen, die Gebote der Gewinnerseite zu antizipieren. Je öfter Sie dies tun, desto schneller entwickelt sich Ihr Spiel.';
    Tab_Lang [231] = 'Ihre Meinung ist uns sehr wichtig';
    Tab_Lang [232] = 'Sie können mit uns auf <b>Englisch</b>, <b>Portugiesisch</b>, <b>Spanisch</b> und <b>Deutsch kommunizieren.</b><br><br>Wir bemühen uns, alle Nachrichten innerhalb von <b>24 Stunden</b> zu beantworten.';
    Tab_Lang [233] = '';
    Tab_Lang [234] = '';
    Tab_Lang [235] = '';
    Tab_Lang [236] = '';
    Tab_Lang [237] = '';
    Tab_Lang [238] = '';
    Tab_Lang [239] = '';

    Tab_Lang [240] = 'Gefällen Sie unsere App?';
    Tab_Lang [241] = 'Meinung einreichen';
    Tab_Lang [242] = 'Konto erstellen';
    Tab_Lang [243] = 'Feedback senden';
    Tab_Lang [244] = 'Verbindung zum Server nicht verfügbar. Bitte überprüfe deine Internetverbindung.';
    Tab_Lang [245] = 'Trainieren';
    Tab_Lang [246] = 'Games';
    Tab_Lang [247] = 'Du hast noch keine Lieblingskarten.';
    Tab_Lang [248] = 'Diese Übung enthält Fehler und wird übersprungen.';
    Tab_Lang [249] = '';

    Tab_Lang [250] = 'Vor einigen Sekunden';
    Tab_Lang [251] = 'Vor';
    Tab_Lang [252] = 'Minute';
    Tab_Lang [253] = 'Minuten';
    Tab_Lang [254] = 'Stunde';
    Tab_Lang [255] = 'Stunden';
    Tab_Lang [256] = 'Tag';
    Tab_Lang [257] = 'Tage';
    Tab_Lang [258] = 'Woche';
    Tab_Lang [259] = 'Wochen';

    Tab_Lang [260] = 'Kauf erfolgreich';
    Tab_Lang [261] = 'Vielen Dank, Ihr Kauf war erfolgreich.<br><br>Dank Ihrer Unterstützung können wir weiter daran arbeiten, dass Sie ein besseres Produkt haben!';
    Tab_Lang [262] = 'Schauen Sie sich diese App an, um Schach zu trainieren:';
    Tab_Lang [263] = 'Ihre kostenlose Testphase hat noch @ Tage.';
    Tab_Lang [264] = 'Zugriff vorübergehend ausgesetzt';
    Tab_Lang [265] = 'Um deinen Zugang zu den Übungen zu erneuern, besuche bitte unseren Store.';
    Tab_Lang [266] = 'Erstellen Sie ein Konto und senden Sie uns Ihr Feedback, um Ihre kostenlose Testphase zu verlängern.';
    Tab_Lang [267] = 'Jetzt kaufen';
    Tab_Lang [268] = 'Auswerten';
    Tab_Lang [269] = 'EINFÜHRUNG DER PROMOTION';

    Tab_Lang [270] = '30% RABATT!';
    Tab_Lang [271] = 'Gültig bis: 15. September 2021';
    Tab_Lang [272] = 'ABONNEMENTPLÄNE';
    Tab_Lang [273] = 'JETZT holen!';
    Tab_Lang [274] = 'Der vertraglich vereinbarte Abonnementzeitraum wird gegebenenfalls zu Ihrem verbleibenden kostenlosen Nutzungszeitraum hinzugefügt.';
    Tab_Lang [275] = 'Keine zusätzlichen Kosten für neue Versionen und neue Inhalte während der Vertragslaufzeit!';
    Tab_Lang [276] = 'Sofortiger Zugriff!';
    Tab_Lang [277] = 'Alle Pläne garantieren während der Vertragslaufzeit 100% Zugriff auf zukünftige Versionen!';
    Tab_Lang [278] = '';
    Tab_Lang [279] = '';

    // ------------------------------------------------ TEORIA

    Tab_Lang [300] = 'Einige allgemeine Prinzipien';
    Tab_Lang [301] = '1. Entwickle schnell alle Figuren';
    Tab_Lang [302] = 'Das Hauptziel beim Öffnen ist es, Stücke zu entwickeln und die Rochade so schnell wie möglich zu erreichen.';
    Tab_Lang [303] = 'Das Öffnen ist abgeschlossen, wenn einer oder beide Spieler ihre Türme ​​verbunden haben.';
    Tab_Lang [304] = 'Der Spieler, der die Entwicklung zuerst beendet, erhält die Initiative.';
    Tab_Lang [305] = '2. Springer vor Läufer entwickeln';

    Tab_Lang [306] = 'Während Läufer mehrere Felder von ihrer ursprünglichen Position aus kontrollieren können, dominieren Springer nur die Felder ihrer Nachbarn und brauchen länger, um das Feld des Gegners zu erreichen, da sie weniger bewegliche Teile sind.';
    Tab_Lang [307] = '3. Bewegen Sie dasselbe Stück beim Öffnen nicht zweimal.'
    Tab_Lang [308] = 'Versuchen Sie, Ihre Figuren beim ersten Zug an der bestmöglichen Position zu platzieren.';
    Tab_Lang [309] = 'Es ist Zeitverschwendung, dasselbe Stück während des Öffnens mehr als einmal zu bewegen, und es kann Sie die Initiative im Spiel kosten.';
    Tab_Lang [310] = '4. Mach beim Öffnen keine unnötigen Bauernbewegungen. ';
    Tab_Lang [311] = 'Bauernbewegungen sollten während des Öffnens eingeschränkt werden, da die Zeit, die für diese Bewegungen benötigt wird, verwendet werden könnte, um ein weiteres Stück zu entwickeln.';
    Tab_Lang [312] = 'Im Allgemeinen ist das Bewegen von Bauern geeignet, wenn der Spieler Diagonalen für die Königin oder die Läufer öffnen oder die Mitte besetzen möchte.';

    Tab_Lang [313] = '5. Keine Schach, ob dies nicht erforderlich ist. ';
    Tab_Lang [314] = 'Ein Schach, der vom Gegner leicht verteidigt werden kann, ist nicht erforderlich.';
    Tab_Lang [315] = 'Die meisten Schecks während des Öffnens können leicht durch Bewegungen verteidigt werden, die die Entwicklung begünstigen.';
    Tab_Lang [316] = '6. Öffnen Sie die Position nicht, wenn Sie sich zu spät in der Entwicklung befinden. ';
    Tab_Lang [317] = 'Eine offene Position begünstigt die Herde immer mit mehr Stücken im Spiel und sollte daher nur von denen mit einem sich entwickelnden Vorteil provoziert werden.';
    Tab_Lang [318] = '7. Stelle die Königin beim Öffnen hinter die Reihe der freundlichen Bauern. ';
    Tab_Lang [319] = 'Da die Königin ein sehr mächtiges Stück ist, ist sie auch sehr anfällig für die ständigen Angriffe des Gegners.';

    Tab_Lang [320] = 'Daher ist es zweckmäßig, ihn hinter einem Bauern zu platzieren, vorzugsweise auf dem zweiten Rang, damit der erste für die Turmentwicklung frei ist.';
    Tab_Lang [321] = '8. Vermeiden Sie es, ein entwickeltes Stück gegen ein nicht entwickeltes zu tauschen.'
    Tab_Lang [322] = 'Im Allgemeinen ist es ein schlechtes Geschäft, ein gut positioniertes Stück gegen ein schlecht positioniertes zu tauschen.';
    Tab_Lang [323] = 'Wenn Sie eines Ihrer entwickelten Figuren gegen eines der nicht entwickelten Ihres Gegners eintauschen, verschwenden Sie Zeit. Das gleiche gilt, wenn Sie ein Stück, das sich viel bewegt hat, gegen ein Stück tauschen, das Ihr Gegner nur einmal bewegt hat. ';
    Tab_Lang [324] = '9. Schloss so schnell wie möglich ';
    Tab_Lang [325] = 'Die Sicherheit des Königs ist eines der wichtigsten Dinge, die während des Eröffnungs- und Mittelspiels beachtet werden müssen.';
    Tab_Lang [326] = 'Der König in der Mitte ist immer sehr anfällig für Angriffe des Gegners, insbesondere in offenen Positionen.';

    Tab_Lang [327] = 'Rochade  bedeutet, dass Sie Ihren König bequem hinter eine Bauernblockade stellen und die Entwicklung eines Ihrer Türme ermöglichen. Dann kann der Turm schnell eine offene oder halboffene Datei belegen. ';
    Tab_Lang [328] = '10. Kingside Rochade ist sicherer als Queenside Rochade';
    Tab_Lang [329] = 'Kingside Rochade  platziert den König von der Mitte entfernt und sicherer hinter einer Reihe geschützter Bauern; Außerdem ist es ein schnellerer Zug als das Schlössern in Queenside, da vorher nur zwei Teile bewegt werden müssen. ';
    Tab_Lang [330] = 'Andererseits kann es sehr interessant sein, auf der Gegenseite des Gegners zu spielen, um mehr Angriffsmöglichkeiten zu schaffen.';
    Tab_Lang [331] = '11. Versuchen Sie, den Gegner daran zu hindern, eine Rochade zu bauen.'
    Tab_Lang [332] = 'Wenn Ihr Gegner zu lange auf die Burg wartet, versuchen Sie, den feindlichen König noch länger in der Mitte zu halten.';
    Tab_Lang [333] = 'Eine der häufigsten Möglichkeiten, dies zu tun, besteht darin, eines der Felder zu kontrollieren, die als Durchgang für den König dienen (normalerweise f1 oder f8, wenn Kingside Rochade).';

    Tab_Lang [334] = 'Meistens lohnt es sich, einen Bauern zu opfern, um den König in der Mitte zu halten.';
    Tab_Lang [335] = '12. Beherrsche so viel Territorium wie möglich ';
    Tab_Lang [336] = 'Der Spieler, der einen Vorteil im Weltraum hat, ermöglicht eine größere Mobilität für freundliche Figuren und kann daher Figuren mit größerer Flexibilität von einer Seite auf die andere übertragen.';
    Tab_Lang [337] = 'Andererseits fällt es dem Spieler in einer eingeschränkteren Position schwer, Figuren zu manövrieren, was tödlich sein kann, wenn er aufgefordert wird, den König zu verteidigen.';
    Tab_Lang [338] = '13. Bauern vorrücken, um den Weltraum zu erobern ';
    Tab_Lang [339] = 'Obwohl das Vorrücken von Bauern die wichtigste Ressource ist, um die Position des Gegners einzuschränken, sollte diese Regel sorgfältig abgewogen werden, da es umso schwieriger ist, sie zu verteidigen, je weiter die Bauern von der Basisposition entfernt sind.';

    Tab_Lang [340] = 'Außerdem erzeugt jede Position, die ein Bauer vorschiebt, Schwäche auf den angrenzenden Feldern, die von feindlichen Stücken besetzt sein können.';

    Tab_Lang [341] = '14. Platziere deine Bauern in der Mitte';
    Tab_Lang [342] = 'Die Mitte des Schachbretts besteht aus e4, e5, d4 und d5. Das erweiterte Zentrum enthält auch die Quadrate, die das Rechteck c3, c6, f3 und f6 bilden. ';
    Tab_Lang [343] = 'Bauern sind die besten Einheiten, um das Zentrum zu erstellen, da sie anders als Figuren nicht anfällig für den Angriff feindlicher Bauern sind.';
    Tab_Lang [344] = '15. Halten Sie Ihre Stücke so nah wie möglich an der Mitte ';
    Tab_Lang [345] = 'In der Mitte kontrolliert ein Stück mehr Quadrate als irgendwo anders auf dem Brett. Der Springer kann sich beispielsweise von der Mitte aus auf 8 verschiedene Felder bewegen, während er in Ecken nur 2 Optionen hat. ';
    Tab_Lang [346] = 'Die Kontrolle über das Zentrum ist ebenfalls wichtig, da sich die Figuren schnell von einer Seite des Bretts in die Reihenfolge bewegen können. Wenn sich Ihre Teile schneller als die Ihres Gegners bewegen, haben Sie größere Chancen, eine zu erstellen erfolgreicher Angriff. ';
    Tab_Lang [347] = '16. Versuchen Sie beim Handel mit Bauern, Ihre in die Nähe des Zentrums zu bringen. ';

    Tab_Lang [348] = 'Wenn zwei Ihrer Bauern die gegnerische Figur zurückerobern können, die zuvor eine Ihrer Figuren erobert hat, wird empfohlen, den Bauern zu bewegen, der am Ende der Mitte am nächsten liegt, da zentrale Bauern wichtiger sind als seitliche. ';
    Tab_Lang [349] = '17. Kontrolliere das Zentrum vor dem Angriff ';
    Tab_Lang [350] = 'Erfolgreiche Angriffe auf die Flügel hängen hauptsächlich von der Kontrolle des Zentrums ab. Sorgen Sie sich daher vor Beginn eines seitlichen Angriffs um ein starkes und stabiles Zentrum. ';
    Tab_Lang [351] = '18. Türme sollten schnell offene oder halboffene Säulen besetzen.'
    Tab_Lang [352] = 'Während der Eröffnung sind die Türme die letzten Figuren, die entwickelt werden. Sie sind wirksam, wenn sie eine offene oder halboffene Säule besetzen.';
    Tab_Lang [353] = 'Im Allgemeinen sind die idealen Häuser für die Platzierung der Türme e1, d1 und c1 (e8, d8 und c8 für Schwarz), da sie in diesen Positionen Druck in der Mitte ausüben und gleichzeitig verteidigen können es gibt.';
    Tab_Lang [354] = 'Ein Turm kann jedoch immer noch eine wirksame Verteidigung sein, wenn er in der zweiten Reihe platziert wird, während er immer noch aggressiv auf der Wirbelsäule arbeitet.';

    Tab_Lang [355] = '19. Denken Sie zuerst an Verteidigung';
    Tab_Lang [356] = 'Das wichtigste Prinzip im Schach ist die Sicherheit. Halten Sie bei jedem Zug des Gegners an und fragen Sie sich: ';
    Tab_Lang [357] = 'Was bedroht dieser Schritt?';
    Tab_Lang [358] = 'Was sind die Absichten meines Gegners?';
    Tab_Lang [359] = 'Was würde ich tun, wenn ich an seiner Stelle wäre?';
    Tab_Lang [360] = '20. Schlussbetrachtungen';
    Tab_Lang [361] = 'Schach ist keine exakte Wissenschaft und die hier vorgestellten Ratschläge und Konzepte werden in 100% der Fälle nicht angewendet und sollten nicht blind befolgt werden.';
    Tab_Lang [362] = 'Einer der großen Unterschiede zwischen einem Großmeister und einem Amateur besteht darin, zu wissen, wann man gegen strategische Grundprinzipien verstößt oder nicht.';
    Tab_Lang [363] = 'Wenn wir sagen: Vermeiden Sie im Allgemeinen das Vorrücken der Bauern, die den König schützen, meinen wir: Vermeiden Sie das Vorrücken der Bauern, die den König schützen, es sei denn, Sie haben einen guten Grund dazu.';

    Tab_Lang [364] = 'Nützliche Schaltflächen';
    Tab_Lang [365] = 'Zeitschieberegler anzeigen';
    Tab_Lang [366] = 'Letzte Übung wiederholen';
    Tab_Lang [367] = 'Computerbewegungen überspringen';
    Tab_Lang [368] = 'Bericht senden, dass die Übung falsch ist';

    Tab_Lang_150[1] = 'Möglichkeit, die Übungen jedes Levels (LINES) zu durchsuchen';
    Tab_Lang_150[2] = 'Möglichkeit, die Übungen jeder Karte zu aktivieren (ON) oder zu deaktivieren (OFF)';
    Tab_Lang_150[3] = 'Ausgewähltes Level trainieren';
    Tab_Lang_150[4] = 'Strategische Konzepte zu den 50 am häufigsten verwendeten Karten';
    Tab_Lang_150[5] = '9 Karten 100% kostenlos, unabhängig von der Nutzungszeit';
    Tab_Lang_150[6] = 'Das Kaufsystem ist kein Abonnement mehr, sondern eine einmalige Zahlung';
    Tab_Lang_150[7] = 'Training gestartet';
    Tab_Lang_150[8] = 'Sie haben bereits eine Ausbildung auf diesem Niveau begonnen.';
    Tab_Lang_150[9] = 'Neu';
    Tab_Lang_150[10] = 'Weiter';

    Tab_Lang_150[11] = 'PREFERENCES';
    Tab_Lang_150[12] = 'Schnell';
    Tab_Lang_150[13] = 'Normal';
    Tab_Lang_150[14] = 'Langsam';
    Tab_Lang_150[15] = 'Sehr langsam';
    Tab_Lang_150[16] = 'Zeit pro Zug:';
    Tab_Lang_150[17] = 'Nach 1 Fehler';
    Tab_Lang_150[18] = 'Nach 2 Fehlern';
    Tab_Lang_150[19] = 'Nach 3 Fehlern';
    Tab_Lang_150[20] = 'Nie';

    Tab_Lang_150[21] = 'Lösung anzeigen:';
    Tab_Lang_150[22] = 'Standard';
    Tab_Lang_150[23] = 'Schließen';
    Tab_Lang_150[24] = 'Unsere Methode';
    Tab_Lang_150[25] = 'Wie man trainiert';
    Tab_Lang_150[26] = 'Einrichten Ihres Trainings';
    Tab_Lang_150[27] = 'Übereinstimmungen';
    Tab_Lang_150[28] = 'Offene Theorie';
    Tab_Lang_150[29] = 'Favoriten';
    Tab_Lang_150[30] = 'Registrierung';

    Tab_Lang_150[31] = 'Kostenlose x Premium';
    Tab_Lang_150[32] = 'Erwartete Verbesserungen';
    Tab_Lang_150[33] = 'LINIEN';
    Tab_Lang_150[34] = 'GAMES';
    Tab_Lang_150[35] = 'LINIEN';
    Tab_Lang_150[36] = 'Zuglevel';
    Tab_Lang_150[37] = 'Alles EIN';
    Tab_Lang_150[38] = 'GAMES';
    Tab_Lang_150[39] = 'E-Mail:';
    Tab_Lang_150[40] = 'Alter:';

    Tab_Lang_150[41] = 'Land:';
    Tab_Lang_150[42] = 'Ihre ID:';
    Tab_Lang_150[43] = 'SHOP';
    Tab_Lang_150[44] = 'Schnell';
    Tab_Lang_150[45] = 'Normal';
    Tab_Lang_150[46] = 'Langsam';
    Tab_Lang_150[47] = 'Zu langsam';
    Tab_Lang_150[48] = 'Zeit pro Zug:';
    Tab_Lang_150[49] = 'Nach 1 Fehler';
    Tab_Lang_150[50] = 'Nach 2 Fehlern';

    Tab_Lang_150[51] = 'Nach 3 Fehlern';
    Tab_Lang_150[52] = 'Nie';
    Tab_Lang_150[53] = 'Lösung anzeigen:';
    Tab_Lang_150[54] = 'Ton:';
    Tab_Lang_150[55] = 'Standard';
    Tab_Lang_150[56] = 'Name';
    Tab_Lang_150[57] = 'Wie können wir uns verbessern?';
    Tab_Lang_150[58] = 'Senden Sie uns Ihre Kritik und Vorschläge und erhalten Sie ein noch besseres Produkt.';
    Tab_Lang_150[59] = 'Erstelle dein Konto, um ein automatisches Backup deines Trainingsverlaufs auf unseren Servern zu behalten.';
    Tab_Lang_150[60] = 'Es ist kostenlos!';

    Tab_Lang_150[61] = 'E-Mail erneut senden';
    Tab_Lang_150[62] = 'Eine E-Mail wurde gesendet an';
    Tab_Lang_150[63] = 'Bitte überprüfen Sie Ihren E-Mail-Posteingang oder Ihren SPAM-Ordner.';
    Tab_Lang_150[64] = 'Eingeschränkter Zugriff';
    Tab_Lang_150[65] = 'In der kostenlosen Version ist die Anzahl der Übungen und Spiele auf graue Karten beschränkt.<br><br>Nutzen Sie unseren reduzierten Preis für den Kauf der Premium-Version und erhalten Sie sofort vollen Zugriff auf alle Karten .<br><br>Wenn Sie sich nicht sicher sind, ob Sie die Premium-Version kaufen sollen oder nicht, probieren Sie eine kostenlose 7-Tage-Testversion aus!';
    Tab_Lang_150[66] = 'In der kostenlosen Version ist die Anzahl der Übungen und Spiele auf graue Karten beschränkt.<br><br>Nutzen Sie unseren reduzierten Preis für den Kauf der Premium-Version und erhalten Sie sofort vollen Zugriff auf alle Karten .';
    Tab_Lang_150[67] = 'Keine Übungen aktiviert';
    Tab_Lang_150[68] = 'Alle Übungen in dieser Serie wurden deaktiviert (OFF).<br>Klicken Sie auf LINES und dann auf ALL ON, um zur Standardserie zurückzukehren.';
    Tab_Lang_150[69] = 'Wichtig';
    Tab_Lang_150[70] = 'Sie können die Übungen, die Sie lernen möchten, aktivieren (ON) oder deaktivieren (OFF).';

    Tab_Lang_150[71] = 'Deaktivierte Übungen (OFF) werden in zukünftigen Trainings nicht angezeigt.';
    Tab_Lang_150[72] = 'Wenn Sie zum Anfangsmuster zurückkehren möchten, klicken Sie auf die Schaltfläche LINES der entsprechenden Karte.';
    Tab_Lang_150[73] = 'Senden Sie uns Ihre Meinung zu dieser App und helfen Sie uns, ein besseres Produkt zu entwickeln.';
    Tab_Lang_150[74] = 'Laut unserer Datenbank haben Sie die kostenlose Testphase bereits genutzt. Sollten diese Angaben nicht korrekt sein, senden Sie bitte eine Nachricht an unseren Support.';
    Tab_Lang_150[75] = 'Einrichten Ihres Trainings';
    Tab_Lang_150[76] = 'Benutze die rosa Tasten (1 bis 5), um Übungen eines entsprechenden Niveaus auszuwählen.<br><br>Klicke auf die EIN/AUS-Taste, um die Linien auszuwählen, die du trainieren möchtest.<br><br> Um ein Workout anzuzeigen oder die Übungen für das ausgewählte Level zu durchsuchen, klicken Sie einfach auf die Schaltfläche <img src="img/but_go3.png" style="width: 24px;"><br><br>Ausgeschaltete Übungen werden im normalen Training nicht mehr angezeigt.';
    Tab_Lang_150[77] = 'Benutze die Pfeiltasten zum Starten';
    Tab_Lang_150[78] = 'Ihre Testphase endet in:';
    Tab_Lang_150[79] = 'Tage';
    Tab_Lang_150[80] = 'Std';

    Tab_Lang_150[81] = 'Minuten';
    Tab_Lang_150[82] = 'Sekunden';
    Tab_Lang_150[83] = 'Diese Nachricht nicht mehr anzeigen';
    Tab_Lang_150[84] = '7 Tage KOSTENLOS';
    Tab_Lang_150[85] = 'Premium-Version';
    Tab_Lang_150[86] = 'Premium-Version';
    Tab_Lang_150[87] = 'Bestätigungsnachricht';
    Tab_Lang_150[88] = 'Du hast ein oder mehrere Übungen im aktuellen Workout deaktiviert (OFF).<br><br>Klicke auf BESTÄTIGEN, wenn du möchtest, dass die deaktivierten Übungen in zukünftigen Übungen für diese Karte nicht mehr angezeigt werden.<br><br>Wenn Sie auf BESTÄTIGEN klicken, wird die letzte Trainingsstufe für diese Karte zurückgesetzt.';
    Tab_Lang_150[89] = 'Abbrechen';
    Tab_Lang_150[90] = 'Bestätigen';

    Tab_Lang_150[91] = '';
    Tab_Lang_150[92] = '';
    Tab_Lang_150[93] = '';
    Tab_Lang_150[94] = '';
    Tab_Lang_150[95] = '';
    Tab_Lang_150[96] = '';
    Tab_Lang_150[97] = '';
    Tab_Lang_150[98] = '';
    Tab_Lang_150[99] = '';
    Tab_Lang_150[100] = '';

    Tab_Lang_150[101] = 'Lizenzschlüssel:';
    Tab_Lang_150[102] = 'Neuigkeiten für kommende Versionen:';
    Tab_Lang_150[103] = 'Nach Öffnungen suchen';
    Tab_Lang_150[104] = 'Gleiches Konto für mehrere Geräte verwenden';
    Tab_Lang_150[105] = 'Ergänzung allgemeiner Strategiekonzepte für jede Eröffnung';
    Tab_Lang_150[106] = 'Boardfarben setzen';
    Tab_Lang_150[107] = 'Die schnellste und effizienteste Methode, sich im Schach weiterzuentwickeln!';
    Tab_Lang_150[108] = '<span style="font-weight: bold; color: #43321e;">8.079 Zeilen</span> der meistgespielten Eröffnungen der letzten 50 Jahre';
    Tab_Lang_150[109] = '<span style="font-weight: bold; color: #43321e;">4.500 Games</span> der besten Spieler der Welt (klassisch und modern)';
    Tab_Lang_150[110] = 'Weniger Aufwand, längere Verweildauer';

    Tab_Lang_150[111] = 'Entwickeln Sie Ihre <span style="font-weight: bold; color: #43321e;">Intuition</span>';
    Tab_Lang_150[112] = 'Schneller spielen';
    Tab_Lang_150[113] = 'Verbessere deine Rechenfähigkeiten';
    Tab_Lang_150[114] = 'Verbessern Sie Ihre <span style="font-weight: bold; color: #43321e;">Konzentration</span>';
    Tab_Lang_150[115] = 'Starten Sie <span style="font-weight: bold; color: #43321e;">mehr Spiele gewinnen</span>';
    Tab_Lang_150[116] = 'Bessere und schnellere Ergebnisse als jede andere Methode';
    Tab_Lang_150[117] = 'Normaler Preis:';
    Tab_Lang_150[118] = 'Heute:';
    Tab_Lang_150[119] = 'Diese Aktion läuft ab am:';
    Tab_Lang_150[120] = 'Tage';

    Tab_Lang_150[121] = 'Std';
    Tab_Lang_150[122] = 'Minuten';
    Tab_Lang_150[123] = 'Segs';
    Tab_Lang_150[124] = 'Holen Sie sich jetzt Ihre Premium version für nur:';
    Tab_Lang_150[125] = 'SCHACH';
    Tab_Lang_150[126] = 'Das beste Fitness für Ihr Gehirn';
    Tab_Lang_150[127] = 'Wenn Sie diese Version kaufen, erhalten Sie:';
    Tab_Lang_150[128] = 'Vollzugriff auf unbestimmte Zeit';
    Tab_Lang_150[129] = 'Kostenlose Updates';
    Tab_Lang_150[130] = 'Bevorzugter Support';

    Tab_Lang_150[131] = 'Sofortiger Zugriff';
    Tab_Lang_150[132] = 'Rückmeldung';
    Tab_Lang_150[133] = 'Zeilen';
    Tab_Lang_150[134] = 'Stufe';
    Tab_Lang_150[135] = 'Gebote';
    Tab_Lang_150[136] = '';
    Tab_Lang_150[137] = '';
    Tab_Lang_150[138] = '';
    Tab_Lang_150[139] = '';
    Tab_Lang_150[140] = '';

    Tab_Lang_150[141] = '';
    Tab_Lang_150[142] = '';
    Tab_Lang_150[143] = '';
    Tab_Lang_150[144] = '';
    Tab_Lang_150[145] = '';
    Tab_Lang_150[146] = '';
    Tab_Lang_150[147] = '';
    Tab_Lang_150[148] = '';
    Tab_Lang_150[149] = '';
    Tab_Lang_150[150] = '';

    Tab_Lang_151[1] = 'Synchronisieren...';
    Tab_Lang_151[2] = 'Free 7-days trial';
    Tab_Lang_151[3] = 'Konto wiederherstellen';
    Tab_Lang_151[4] = 'Konten synchronisieren';
    Tab_Lang_151[5] = 'Abmelden';
    Tab_Lang_151[6] = 'Konto wiederherstellen';
    Tab_Lang_151[7] = 'Konten synchronisieren';
    Tab_Lang_151[8] = 'KONTO WIEDERHERSTELLEN';
    Tab_Lang_151[9] = 'Mit der Kontowiederherstellung können Sie Ihre Kontodaten auf dieses Gerät übertragen.';
    Tab_Lang_151[10] = 'Um diese Überweisung durchzuführen, benötigen Sie nur Ihre Konto-ID auf dem anderen Gerät (auf dem Sie das Konto erstellt haben). Die ID wird unten im Abschnitt mit Ihren Kontodaten angezeigt.';

    Tab_Lang_151[11] = 'Wenn Sie Ihre ID-Nummer nicht kennen, Ihr Handy verloren haben usw... Senden Sie eine Nachricht mit Ihrer E-Mail an unseren Support.';
    Tab_Lang_151[12] = 'indem Sie hier klicken';
    Tab_Lang_151[13] = 'WICHTIG! Alle Daten von diesem Gerät werden gelöscht und durch das von Ihnen angegebene Konto ersetzt.';
    Tab_Lang_151[14] = 'Wiederherstellung starten';
    Tab_Lang_151[15] = 'KONTEN SYNCHRONISIEREN';
    Tab_Lang_151[16] = 'Geben Sie den 4-stelligen Bestätigungscode ein, der an die E-Mail gesendet wurde:';
    Tab_Lang_151[17] = 'Synchronisieren';
    Tab_Lang_151[18] = 'Wenn Sie unsere E-Mail mit dem Bestätigungscode <b>nicht</b> erhalten haben, überprüfen Sie bitte Ihren Spam-Posteingang.';
    Tab_Lang_151[19] = 'Um den Code <b>erneut zu senden</b>';
    Tab_Lang_151[20] = 'Wenn Sie <b>Hilfe</b> benötigen, senden Sie eine Nachricht an unseren Support';

    Tab_Lang_151[21] = 'indem Sie hier klicken.';
    Tab_Lang_151[22] = 'Jetzt können Sie dasselbe Konto auf mehreren Geräten verwenden.';
    Tab_Lang_151[23] = 'Um Konten zu synchronisieren benötigen Sie:';
    Tab_Lang_151[24] = 'Melden Sie sich auf dem Gerät an, das Sie synchronisieren möchten.';
    Tab_Lang_151[25] = 'Geben Sie die ID des zu synchronisierenden Geräts in die Felder unten ein.';
    Tab_Lang_151[26] = 'Geben Sie auf dem nächsten Bildschirm den Bestätigungscode ein, den wir an Ihre E-Mail senden.';
    Tab_Lang_151[27] = 'Synchronisieren';
    Tab_Lang_151[28] = 'hier klicken.';
    Tab_Lang_151[29] = '';
    Tab_Lang_151[30] = '';

    Tab_Lang_151[31] = 'Ungültige ID, bitte Anwendung neu starten.';
    Tab_Lang_151[32] = 'Ungültiger Code';
    Tab_Lang_151[33] = 'Ungültige App-ID';
    Tab_Lang_151[34] = 'Sie müssen sich auf dem Gerät registrieren, das Sie synchronisieren möchten.';
    Tab_Lang_151[35] = 'Code erneut an E-Mail gesendet';
    Tab_Lang_151[36] = 'App-ID nicht gefunden. Bitte erneut eingeben';
    Tab_Lang_151[37] = 'Fehler beim Ausfüllen des Formulars';
    Tab_Lang_151[38] = '';
    Tab_Lang_151[39] = '';
    Tab_Lang_151[40] = '';

    Tab_Lang_151[41] = 'Synchronisierungskonflikt';
    Tab_Lang_151[42] = 'Es gibt ein Update von einem anderen Gerät mit einem neueren Datum.';
    Tab_Lang_151[43] = 'Was möchten Sie behalten?';
    Tab_Lang_151[44] = 'Aktualisierungen auf dem anderen Gerät beibehalten';
    Tab_Lang_151[45] = 'An diesem Gerät vorgenommene Aktualisierungen beibehalten';
    Tab_Lang_151[46] = 'Jetzt Rabatt sichern!';
    Tab_Lang_151[47] = 'Bitte geben Sie den Gutscheincode ein:';
    Tab_Lang_151[48] = 'Gutschein validieren';
    Tab_Lang_151[49] = 'Dieses Gerät:';
    Tab_Lang_151[50] = 'Haben Sie einen Rabattgutschein?';

    Tab_Lang_151[51] = 'Ungültiger Gutscheincode';
    Tab_Lang_151[52] = '(Haupt)';

}

