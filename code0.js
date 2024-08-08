gdjs.GLCode = {};
gdjs.GLCode.localVariables = [];
gdjs.GLCode.GDGreenFlatBarObjects1= [];
gdjs.GLCode.GDGreenFlatBarObjects2= [];
gdjs.GLCode.GDGreenFlatBarObjects3= [];
gdjs.GLCode.GDNewTextObjects1= [];
gdjs.GLCode.GDNewTextObjects2= [];
gdjs.GLCode.GDNewTextObjects3= [];
gdjs.GLCode.GDNewText2Objects1= [];
gdjs.GLCode.GDNewText2Objects2= [];
gdjs.GLCode.GDNewText2Objects3= [];
gdjs.GLCode.GDBalObjects1= [];
gdjs.GLCode.GDBalObjects2= [];
gdjs.GLCode.GDBalObjects3= [];


gdjs.GLCode.asyncCallback13473564 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GLCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "M", false);
}gdjs.GLCode.localVariables.length = 0;
}
gdjs.GLCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GLCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GLCode.asyncCallback13473564(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GLCode.asyncCallback13477060 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GLCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("GreenFlatBar"), gdjs.GLCode.GDGreenFlatBarObjects2);

{for(var i = 0, len = gdjs.GLCode.GDGreenFlatBarObjects2.length ;i < len;++i) {
    gdjs.GLCode.GDGreenFlatBarObjects2[i].SetValue(100, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GLCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GLCode.localVariables.length = 0;
}
gdjs.GLCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GLCode.localVariables);
for (const obj of gdjs.GLCode.GDGreenFlatBarObjects1) asyncObjectsList.addObject("GreenFlatBar", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GLCode.asyncCallback13477060(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GLCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GreenFlatBar"), gdjs.GLCode.GDGreenFlatBarObjects1);
{for(var i = 0, len = gdjs.GLCode.GDGreenFlatBarObjects1.length ;i < len;++i) {
    gdjs.GLCode.GDGreenFlatBarObjects1[i].SetValue(12, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.GLCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.GLCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GLCode.GDGreenFlatBarObjects1.length = 0;
gdjs.GLCode.GDGreenFlatBarObjects2.length = 0;
gdjs.GLCode.GDGreenFlatBarObjects3.length = 0;
gdjs.GLCode.GDNewTextObjects1.length = 0;
gdjs.GLCode.GDNewTextObjects2.length = 0;
gdjs.GLCode.GDNewTextObjects3.length = 0;
gdjs.GLCode.GDNewText2Objects1.length = 0;
gdjs.GLCode.GDNewText2Objects2.length = 0;
gdjs.GLCode.GDNewText2Objects3.length = 0;
gdjs.GLCode.GDBalObjects1.length = 0;
gdjs.GLCode.GDBalObjects2.length = 0;
gdjs.GLCode.GDBalObjects3.length = 0;

gdjs.GLCode.eventsList2(runtimeScene);

return;

}

gdjs['GLCode'] = gdjs.GLCode;
