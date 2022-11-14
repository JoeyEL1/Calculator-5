const dataForServer = {};
let arrayDataForDom = [];


$(document).ready(onReady);

function onReady() {

    $('.js-btn-math').on('click', findingOperator);
    $('.js-btn-submit').on('click', submitEquation);
    $('.js-btn-clear').on('click', clearInputs);

    getData();
}

function getData() {
    $.ajax({
        type:'GET',
        url: '/math',
    }).then((response) => {
        arrayDataForDom = response.array;
        console.log(arrayDataForDom);
         render(response);
    }); 
}

function findingOperator() {
    const mathOperator = $(this).data('math');
    dataForServer.mathOperator = mathOperator;
};

function submitEquation(){
    const numberOne = parseInt($(".js-first-math-input").val());
    const numberTwo = parseInt($(".js-second-math-input").val());
    dataForServer.numberOne = numberOne;
    dataForServer.numberTwo = numberTwo;

    postData();
}

function postData(){ 
    
    $.ajax({
        type:'POST',
        url: '/math',
        data: dataForServer
    }).then((response) => {
        console.log(response);
        getData();
    });
}

function clearInputs(){
    $(".js-first-math-input").val('');
    $(".js-second-math-input").val('');
}

function render(arrayDataForDom) {
    $('#js-container').empty();
    $('.js-total-container').text(`${data.total}`);
    for (let data of arrayDataForDom) {
    $('.js-container').append(`
       <div>
           ${data.numberOne}
           ${data.operator}
           ${data.numberTwo}
           =
           ${data.total}
       </div>`);
    }
}