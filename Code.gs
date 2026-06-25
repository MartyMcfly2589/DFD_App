
function doGet(e){
  return ContentService.createTextOutput('API Online');
}

function getRoster(){
  return SpreadsheetApp.getActive().getSheetByName('Roster')
    .getDataRange().getValues();
}

function getApparatus(){
  return SpreadsheetApp.getActive().getSheetByName('Apparatus')
    .getDataRange().getValues();
}

function saveReport(payload){
  const calls=SpreadsheetApp.getActive().getSheetByName('Calls');
  calls.appendRow([
    payload.callId,
    payload.date,
    payload.callType,
    payload.address,
    payload.reportWriter,
    payload.narrative
  ]);
  return {success:true};
}
