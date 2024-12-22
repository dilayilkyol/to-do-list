const inputDiv = document.querySelector('.inputDiv')
const input = document.querySelector('.input');
const button = document.querySelector('.button');
const contentDiv = document.querySelector('.contentDiv');


var calculate = 0;
button.addEventListener('click',go);

input.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        go();
    }
});

function go(){
    if(input.value != ""){
        calculate++;

        var para = document.createElement('p');

        var deleteButton = document.createElement('div');
        var finishButton = document.createElement('div');

        finishButton.classList.add('finishButton');
        deleteButton.classList.add('deleteButton');

        deleteButton.innerText = 'Delete';
        finishButton.innerText = 'Done';

        para.innerText = calculate + ') ' + input.value;
        contentDiv.appendChild(para);

        para.appendChild(deleteButton);
        para.appendChild(finishButton);

        input.value = "";

        deleteButton.addEventListener('click', function () {
            calculate--;
            contentDiv.removeChild(para);
          });

        finishButton.addEventListener('click', function(){
            classLpara.ist.toggle('deneme');
        });
      

}
}