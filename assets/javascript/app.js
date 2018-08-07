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
    
    var timeEmployed = moment().diff(sv.startDate, "months");
    console.log("child added", timeEmployed);    

    /**
     * <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
    </tr> 
    */
    
    var trEl = $("<tr>");

    var nameEl = $("<td>").text(sv.name);
    var roleEl = $("<td>").text(sv.role);
    var startDateEl = $("<td>").text(sv.startDate);
    var timeEmployedEl = $("<td>").text(timeEmployed + " months");
    var monthlyRateEl = $("<td>").text(sv.monthlyRate);

    // Add table entries here
    trEl
        .append(nameEl)
        .append(roleEl)
        .append(startDateEl)
        .append(timeEmployedEl)
        .append(monthlyRateEl);

    $("#table-body").append(trEl);
});


$("#submit").click(function() {
    var formName = $("#form-name").val().trim();
    var formRole = $("#form-role").val().trim();
    var formStartDate = $("#form-start-date").val().trim();
    var formMonthlyRate = $("#form-monthly-rate").val().trim();

    console.log(formName, formRole, formStartDate, formMonthlyRate);

    database.ref().push({
        name: formName,
        role: formRole,
        startDate: formStartDate,
        monthlyRate: formMonthlyRate
    });

    $("#form-name").val("");
    $("#form-role").val("");
    $("#form-start-date").val("");
    $("#form-monthly-rate").val("");
});