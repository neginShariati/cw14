const API_URL = 'https://62b397444f851f87f45d24a3.mockapi.io';

$(document).ready(function(){
    const list = $("table tbody");
    function getData(){
        $.ajax({url: `${API_URL}/toDoList`}).done(function(users){
            $.each(users , function(index , user){
                list.append(`<tr><td>${user.list}</td><tr>`)
            });
        });
    }
    $("#btn-addItem").click(function(){
        let inputValue = $("input").val();
        $.ajax({
            url: `${API_URL}/toDoList`,
            type: 'POST',
            data: JSON.stringify({ list: inputValue}),
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                list.append(`<tr><td>${data.list}</td><tr>`)
            },
          });
        console.log(inputValue);
    });
    getData();
});



