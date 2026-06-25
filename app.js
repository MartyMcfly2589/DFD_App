
const roster=[
{badge:101,name:'Smith'},
{badge:102,name:'Jones'},
{badge:103,name:'Brown'}
];

const apparatus=[
{num:301,name:'Engine 301'},
{num:302,name:'Rescue 302'},
{num:303,name:'Tanker 303'}
];

const events=['Page','En Route','On Scene','To Hospital','With Paramedics','At Hospital','Clear','At Station'];

document.addEventListener('DOMContentLoaded',()=>{
 document.getElementById('callId').value='26'+String(Math.floor(Math.random()*900)+100);
 document.getElementById('callDate').value=new Date().toISOString().split('T')[0];

 roster.forEach(r=>{
   reportWriter.innerHTML += `<option value="${r.badge}">${r.name}</option>`;
   personnelTable.querySelector('tbody').innerHTML += `
   <tr>
   <td>${r.name}</td>
   <td><input type="checkbox"></td>
   <td><input type="checkbox"></td>
   </tr>`;
 });

 apparatus.forEach(a=>{
   document.getElementById('apparatus').innerHTML +=
   `<label><input type="checkbox" value="${a.num}"> ${a.name}</label><br>`;
 });

 events.forEach(e=>{
   document.getElementById('times').innerHTML +=
   `<label>${e}</label><input type="time"><br>`;
 });
});

function saveReport(){
 alert('Placeholder save. Connect to Apps Script Web App endpoint.');
}
