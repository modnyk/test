
"use strict";


function Inicializa_Store() {

    if (!window.store) {
        alert("Store not available");
        return;
    }

    store.verbosity = store.INFO;

    store.register({
        id:    'open_00',
        alias: 'open_00',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'open_10',
        alias: 'open_10',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'open_15',
        alias: 'open_15',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'open_20',
        alias: 'open_20',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'open_25',
        alias: 'open_25',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'open_30',
        alias: 'open_30',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'open_35',
        alias: 'open_35',
        type:   store.CONSUMABLE
    });

    store.register({
        id:    'open_40',
        alias: 'open_40',
        type:   store.CONSUMABLE
    });

    store.error(function(error) {
        alert ('ERROR ' + error.code + ': ' + error.message);
    });

    store.when('open_00').updated(Refresh_Price);
    store.when('open_00').approved(function(p) { p.verify(); });
    store.when('open_00').verified(Compra_Concluida);

    store.when('open_10').updated(Refresh_Price);
    store.when('open_10').approved(function(p) { p.verify(); });
    store.when('open_10').verified(Compra_Concluida);

    store.when('open_15').updated(Refresh_Price);
    store.when('open_15').approved(function(p) { p.verify(); });
    store.when('open_15').verified(Compra_Concluida);

    store.when('open_20').updated(Refresh_Price);
    store.when('open_20').approved(function(p) { p.verify(); });
    store.when('open_20').verified(Compra_Concluida);

    store.when('open_25').updated(Refresh_Price);
    store.when('open_25').approved(function(p) { p.verify(); });
    store.when('open_25').verified(Compra_Concluida);

    store.when('open_30').updated(Refresh_Price);
    store.when('open_30').approved(function(p) { p.verify(); });
    store.when('open_30').verified(Compra_Concluida);

    store.when('open_35').updated(Refresh_Price);
    store.when('open_35').approved(function(p) { p.verify(); });
    store.when('open_35').verified(Compra_Concluida);

    store.when('open_40').updated(Refresh_Price);
    store.when('open_40').approved(function(p) { p.verify(); });
    store.when('open_40').verified(Compra_Concluida);

    store.refresh();

}



function Refresh_Price(product) {

    if (product.id == 'open_00') {
        Price.open_00 = product.price;
    }

    if (product.id == 'open_10') {
        Price.open_10 = product.price;
    }

    if (product.id == 'open_15') {
        Price.open_15 = product.price;
    }

    if (product.id == 'open_20') {
        Price.open_20 = product.price;
    }

    if (product.id == 'open_25') {
        Price.open_25 = product.price;
    }

    if (product.id == 'open_30') {
        Price.open_30 = product.price;
    }

    if (product.id == 'open_35') {
        Price.open_35 = product.price;
    }

    if (product.id == 'open_40') {
        Price.open_40 = product.price;
    }

    $("#price_p0_top").html(Price.open_00);
    $("#price_p0_bottom").html(Price.open_00);

}


function Compra_Concluida(p) {

    if (p.state == "approved") {
        if (p.transaction.id.indexOf("GPA.") >= 0) {
            var vars = ["sales", p.id, p.price, p.currency, p.transaction.id, p.transaction.type];
            Ajax_Connect(vars);
            p.finish();
        } else {
            alert(Tab_Lang [180]);
        }
    }

}



function Call_Store_Billing() {

    if (Current_Promo == 0) {
        store.order("open_00");
    }

    if (Current_Promo == 10) {
        store.order("open_10");
    }

    if (Current_Promo == 15) {
        store.order("open_15");
    }

    if (Current_Promo == 20) {
        store.order("open_20");
    }

    if (Current_Promo == 25) {
        store.order("open_25");
    }

    if (Current_Promo == 30) {
        store.order("open_30");
    }

    if (Current_Promo == 35) {
        store.order("open_35");
    }

    if (Current_Promo == 40) {
        store.order("open_40");
    }

    Store_Click(CLICK_BUY_NOW, Current_Promo);

}


function Update_Price_After_Cupom(desc) {

    /* ******************************* REFAZER

    if (desc == 10) {
        Current_Promo = 4;
        $("#price_p0_top").html(Price.full_p4);
        $("#price_p0_bottom").html(Price.full_p4);
    }

    if (desc == 20) {
        Current_Promo = 3;
        $("#price_p0_top").html(Price.full_p3);
        $("#price_p0_bottom").html(Price.full_p4);
    }

    if (desc == 30) {
        Current_Promo = 2;
        $("#price_p0_top").html(Price.full_p2);
        $("#price_p0_bottom").html(Price.full_p4);
    }

    if (desc == 40) {
        Current_Promo = 1;
        $("#price_p0_top").html(Price.full_p1);
        $("#price_p0_bottom").html(Price.full_p4);
    }

    if (desc == 50) {
        Current_Promo = 5;
        $("#price_p0_top").html(Price.full_p5);
        $("#price_p0_bottom").html(Price.full_p4);
    }

    *****************************************/

}
