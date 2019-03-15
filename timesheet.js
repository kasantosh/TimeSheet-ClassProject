var eName;
var eRole;
var eDate;
var eRate;
var config = {
  apiKey: "AIzaSyAehSLazwmVquQ0QKDrzrv5YLY6ykGXt2s",
  authDomain: "kasantosh38.firebaseapp.com",
  databaseURL: "https://kasantosh38.firebaseio.com",
  projectId: "kasantosh38",
  storageBucket: "kasantosh38.appspot.com",
  messagingSenderId: "495098660774"
};
firebase.initializeApp(config);
var database = firebase.database();

$(document).ready(function() {
  //listener for submit
  $("#submit").on("click", function(e) {
    e.preventDefault();
    getInfo();
    writetoDatabase();
  });
});
function getInfo() {
  eName = $("#eName")
    .val()
    .trim();
  eRole = $("#eRole")
    .val()
    .trim();
  eDate = $("#eDate").val();
  eRate = $("#eRate").val();

  console.log(eName, eRole, eDate, eRate);
}

function writetoDatabase() {
  database.ref().push({
    ename: eName,
    erole: eRole,
    edate: eDate,
    erate: eRate,
    dateadded: firebase.database.ServerValue.TIMESTAMP
  });
}

database.ref().on("child_added", function(snapshot) {
  console.table(snapshot.val());
  var eName = snapshot.val().ename;
  var eRole = snapshot.val().erole;
  var eDate = snapshot.val().edate;
  var eRate = snapshot.val().erate;
  var row = $("<tr>");
  var tdname = $("<td>").append(eName);
  var tdrole = $("<td>").append(eRole);
  var tddate = $("<td>").append(eDate);
  var tdrate = $("<td>").append(eRate);
  row
    .append(tdname)
    .append(tdrole)
    .append(tddate)
    .append(tdrate);
  $("#tableDisplay").append(row);
});
