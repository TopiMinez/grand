gdjs.SCode = {};
gdjs.SCode.localVariables = [];
gdjs.SCode.GDOnScreenControlsButtonObjects1= [];
gdjs.SCode.GDOnScreenControlsButtonObjects2= [];
gdjs.SCode.GDOnScreenControlsButtonObjects3= [];
gdjs.SCode.GDLvl1CardObjects1= [];
gdjs.SCode.GDLvl1CardObjects2= [];
gdjs.SCode.GDLvl1CardObjects3= [];
gdjs.SCode.GDBtn1CardObjects1= [];
gdjs.SCode.GDBtn1CardObjects2= [];
gdjs.SCode.GDBtn1CardObjects3= [];
gdjs.SCode.GDHam1CardObjects1= [];
gdjs.SCode.GDHam1CardObjects2= [];
gdjs.SCode.GDHam1CardObjects3= [];
gdjs.SCode.GDPrc1CardObjects1= [];
gdjs.SCode.GDPrc1CardObjects2= [];
gdjs.SCode.GDPrc1CardObjects3= [];
gdjs.SCode.GDTxt1CardObjects1= [];
gdjs.SCode.GDTxt1CardObjects2= [];
gdjs.SCode.GDTxt1CardObjects3= [];
gdjs.SCode.GDInf1CardObjects1= [];
gdjs.SCode.GDInf1CardObjects2= [];
gdjs.SCode.GDInf1CardObjects3= [];
gdjs.SCode.GDOnScreenControlsButton2Objects1= [];
gdjs.SCode.GDOnScreenControlsButton2Objects2= [];
gdjs.SCode.GDOnScreenControlsButton2Objects3= [];
gdjs.SCode.GDBalObjects1= [];
gdjs.SCode.GDBalObjects2= [];
gdjs.SCode.GDBalObjects3= [];


gdjs.SCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inf1Card"), gdjs.SCode.GDInf1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl1Card"), gdjs.SCode.GDLvl1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Prc1Card"), gdjs.SCode.GDPrc1CardObjects2);
{for(var i = 0, len = gdjs.SCode.GDLvl1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDLvl1CardObjects2[i].getBehavior("Text").setText("Lvl 7: Max");
}
}{for(var i = 0, len = gdjs.SCode.GDPrc1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDPrc1CardObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.SCode.GDInf1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDInf1CardObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inf1Card"), gdjs.SCode.GDInf1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl1Card"), gdjs.SCode.GDLvl1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Prc1Card"), gdjs.SCode.GDPrc1CardObjects2);
{for(var i = 0, len = gdjs.SCode.GDLvl1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDLvl1CardObjects2[i].getBehavior("Text").setText("Lvl 6");
}
}{for(var i = 0, len = gdjs.SCode.GDPrc1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDPrc1CardObjects2[i].getBehavior("Text").setText("10К");
}
}{for(var i = 0, len = gdjs.SCode.GDInf1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDInf1CardObjects2[i].getBehavior("Text").setText("+5 в сек");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inf1Card"), gdjs.SCode.GDInf1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl1Card"), gdjs.SCode.GDLvl1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Prc1Card"), gdjs.SCode.GDPrc1CardObjects2);
{for(var i = 0, len = gdjs.SCode.GDLvl1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDLvl1CardObjects2[i].getBehavior("Text").setText("Lvl 5");
}
}{for(var i = 0, len = gdjs.SCode.GDPrc1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDPrc1CardObjects2[i].getBehavior("Text").setText("7800");
}
}{for(var i = 0, len = gdjs.SCode.GDInf1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDInf1CardObjects2[i].getBehavior("Text").setText("+5 в сек");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inf1Card"), gdjs.SCode.GDInf1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl1Card"), gdjs.SCode.GDLvl1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Prc1Card"), gdjs.SCode.GDPrc1CardObjects2);
{for(var i = 0, len = gdjs.SCode.GDLvl1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDLvl1CardObjects2[i].getBehavior("Text").setText("Lvl 4");
}
}{for(var i = 0, len = gdjs.SCode.GDPrc1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDPrc1CardObjects2[i].getBehavior("Text").setText("5600");
}
}{for(var i = 0, len = gdjs.SCode.GDInf1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDInf1CardObjects2[i].getBehavior("Text").setText("+3 в сек");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inf1Card"), gdjs.SCode.GDInf1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl1Card"), gdjs.SCode.GDLvl1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Prc1Card"), gdjs.SCode.GDPrc1CardObjects2);
{for(var i = 0, len = gdjs.SCode.GDLvl1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDLvl1CardObjects2[i].getBehavior("Text").setText("Lvl 3");
}
}{for(var i = 0, len = gdjs.SCode.GDPrc1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDPrc1CardObjects2[i].getBehavior("Text").setText("3500");
}
}{for(var i = 0, len = gdjs.SCode.GDInf1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDInf1CardObjects2[i].getBehavior("Text").setText("+3 в сек");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inf1Card"), gdjs.SCode.GDInf1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl1Card"), gdjs.SCode.GDLvl1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Prc1Card"), gdjs.SCode.GDPrc1CardObjects2);
{for(var i = 0, len = gdjs.SCode.GDLvl1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDLvl1CardObjects2[i].getBehavior("Text").setText("Lvl 2");
}
}{for(var i = 0, len = gdjs.SCode.GDPrc1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDPrc1CardObjects2[i].getBehavior("Text").setText("2300");
}
}{for(var i = 0, len = gdjs.SCode.GDInf1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDInf1CardObjects2[i].getBehavior("Text").setText("+2 в сек");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Inf1Card"), gdjs.SCode.GDInf1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Lvl1Card"), gdjs.SCode.GDLvl1CardObjects2);
gdjs.copyArray(runtimeScene.getObjects("Prc1Card"), gdjs.SCode.GDPrc1CardObjects2);
{for(var i = 0, len = gdjs.SCode.GDLvl1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDLvl1CardObjects2[i].getBehavior("Text").setText("Lvl 1");
}
}{for(var i = 0, len = gdjs.SCode.GDPrc1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDPrc1CardObjects2[i].getBehavior("Text").setText("1000");
}
}{for(var i = 0, len = gdjs.SCode.GDInf1CardObjects2.length ;i < len;++i) {
    gdjs.SCode.GDInf1CardObjects2[i].getBehavior("Text").setText("+2 в сек");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn1Card"), gdjs.SCode.GDBtn1CardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCode.GDBtn1CardObjects2.length;i<l;++i) {
    if ( gdjs.SCode.GDBtn1CardObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCode.GDBtn1CardObjects2[k] = gdjs.SCode.GDBtn1CardObjects2[i];
        ++k;
    }
}
gdjs.SCode.GDBtn1CardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 10000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(10000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(7);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "hamcard", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn1Card"), gdjs.SCode.GDBtn1CardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCode.GDBtn1CardObjects2.length;i<l;++i) {
    if ( gdjs.SCode.GDBtn1CardObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCode.GDBtn1CardObjects2[k] = gdjs.SCode.GDBtn1CardObjects2[i];
        ++k;
    }
}
gdjs.SCode.GDBtn1CardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 7800;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 5;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(7800);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(6);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "hamcard", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn1Card"), gdjs.SCode.GDBtn1CardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCode.GDBtn1CardObjects2.length;i<l;++i) {
    if ( gdjs.SCode.GDBtn1CardObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCode.GDBtn1CardObjects2[k] = gdjs.SCode.GDBtn1CardObjects2[i];
        ++k;
    }
}
gdjs.SCode.GDBtn1CardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 5600;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(5600);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(5);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "hamcard", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn1Card"), gdjs.SCode.GDBtn1CardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCode.GDBtn1CardObjects2.length;i<l;++i) {
    if ( gdjs.SCode.GDBtn1CardObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCode.GDBtn1CardObjects2[k] = gdjs.SCode.GDBtn1CardObjects2[i];
        ++k;
    }
}
gdjs.SCode.GDBtn1CardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 3500;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(3500);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(4);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "hamcard", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn1Card"), gdjs.SCode.GDBtn1CardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCode.GDBtn1CardObjects2.length;i<l;++i) {
    if ( gdjs.SCode.GDBtn1CardObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCode.GDBtn1CardObjects2[k] = gdjs.SCode.GDBtn1CardObjects2[i];
        ++k;
    }
}
gdjs.SCode.GDBtn1CardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 2300;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(2300);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "hamcard", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn1Card"), gdjs.SCode.GDBtn1CardObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCode.GDBtn1CardObjects2.length;i<l;++i) {
    if ( gdjs.SCode.GDBtn1CardObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCode.GDBtn1CardObjects2[k] = gdjs.SCode.GDBtn1CardObjects2[i];
        ++k;
    }
}
gdjs.SCode.GDBtn1CardObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 1000;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(1000);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "hamcard", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Btn1Card"), gdjs.SCode.GDBtn1CardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCode.GDBtn1CardObjects1.length;i<l;++i) {
    if ( gdjs.SCode.GDBtn1CardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCode.GDBtn1CardObjects1[k] = gdjs.SCode.GDBtn1CardObjects1[i];
        ++k;
    }
}
gdjs.SCode.GDBtn1CardObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 450;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).sub(450);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "hamcard", runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber());
}}

}


};gdjs.SCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 7;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "work") >= 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(21);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 6;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "work") >= 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(16);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 5;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "work") >= 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(11);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 4;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "work") >= 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(8);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 3;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "work") >= 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 2;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "work") >= 1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(3);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "work") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13298052);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}{gdjs.evtTools.storage.writeNumberInJSONFile("storage", "cash", runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11637100);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "work");
}}

}


};gdjs.SCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bal"), gdjs.SCode.GDBalObjects1);
{for(var i = 0, len = gdjs.SCode.GDBalObjects1.length ;i < len;++i) {
    gdjs.SCode.GDBalObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.SCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.SCode.GDOnScreenControlsButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.SCode.GDOnScreenControlsButtonObjects1[k] = gdjs.SCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.SCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "M", false);
}}

}


{


gdjs.SCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("storage", "hamcard", runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1));
}}

}


{


gdjs.SCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "w");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.clearJSONFile("storage");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "S", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "k");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(111);
}}

}


};

gdjs.SCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.SCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.SCode.GDOnScreenControlsButtonObjects3.length = 0;
gdjs.SCode.GDLvl1CardObjects1.length = 0;
gdjs.SCode.GDLvl1CardObjects2.length = 0;
gdjs.SCode.GDLvl1CardObjects3.length = 0;
gdjs.SCode.GDBtn1CardObjects1.length = 0;
gdjs.SCode.GDBtn1CardObjects2.length = 0;
gdjs.SCode.GDBtn1CardObjects3.length = 0;
gdjs.SCode.GDHam1CardObjects1.length = 0;
gdjs.SCode.GDHam1CardObjects2.length = 0;
gdjs.SCode.GDHam1CardObjects3.length = 0;
gdjs.SCode.GDPrc1CardObjects1.length = 0;
gdjs.SCode.GDPrc1CardObjects2.length = 0;
gdjs.SCode.GDPrc1CardObjects3.length = 0;
gdjs.SCode.GDTxt1CardObjects1.length = 0;
gdjs.SCode.GDTxt1CardObjects2.length = 0;
gdjs.SCode.GDTxt1CardObjects3.length = 0;
gdjs.SCode.GDInf1CardObjects1.length = 0;
gdjs.SCode.GDInf1CardObjects2.length = 0;
gdjs.SCode.GDInf1CardObjects3.length = 0;
gdjs.SCode.GDOnScreenControlsButton2Objects1.length = 0;
gdjs.SCode.GDOnScreenControlsButton2Objects2.length = 0;
gdjs.SCode.GDOnScreenControlsButton2Objects3.length = 0;
gdjs.SCode.GDBalObjects1.length = 0;
gdjs.SCode.GDBalObjects2.length = 0;
gdjs.SCode.GDBalObjects3.length = 0;

gdjs.SCode.eventsList2(runtimeScene);

return;

}

gdjs['SCode'] = gdjs.SCode;
