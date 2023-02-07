

$(document).ready(function () {
  $("#dashboardTable").DataTable({
    responsive: true,
      
    ajax: {
      url: "./assets/data/dashboard-data.json",
      dataSrc: "data",
    },

    columns: [
      { data: "Tracking ID" },
      { data: "Complaint From" },
      { data: "Complaint By" },
      { data: "Issued Date" },
      { data: "Area" },
      { data: "Deadline" },
      { data: "Status" },
      //   { "contentPadding": "10px" }
    ],
    // dom: 'Bfrtip',
    // buttons: [
    //     'copyHtm15',
    //     'excelHtm15',
    //     'csvHtm15',
    //     'pdfHtm15',
    // ],
  });
});
