gdjs.GCode = {};
gdjs.GCode.localVariables = [];


gdjs.GCode.eventsList0 = function(runtimeScene) {

};

gdjs.GCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.GCode.eventsList0(runtimeScene);

return;

}

gdjs['GCode'] = gdjs.GCode;
