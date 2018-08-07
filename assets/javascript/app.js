// Initialize Firebase
var config = {
    apiKey: "AIzaSyC09rPawb4tcwpgujd1DJyOlcvrmNI3CrA",
    authDomain: "myawesomeproject-e427a.firebaseapp.com",
    databaseURL: "https://myawesomeproject-e427a.firebaseio.com",
    projectId: "myawesomeproject-e427a",
    storageBucket: "myawesomeproject-e427a.appspot.com",
    messagingSenderId: "658929948133"
};
firebase.initializeApp(config);

var database = firebase.database();

database.ref().on("child_added", function(snapshot) {
    var sv = snapshot.val();
    console.log(sv);
});


$("#submit").click(function() {
    var formName = $("#form-name").val();
    var formRole = $("#form-role").val();
    var formStartDate = $("#form-start-date").val();
    var formMonthlyRate = $("#form-monthly-rate").val();

    console.log(formName, formRole, formStartDate, formMonthlyRate);

    database.ref().push({
        name: formName,
        role: formRole,
        startDate: formStartDate,
        monthlyRate: formMonthlyRate
    });
});