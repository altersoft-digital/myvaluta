function openpopup(popup) {
    document.querySelector('.bg-overlay').style.display = 'grid';
    document.querySelector(popup).style.display = 'grid';
    document.querySelector('body').style.overflowY = 'hidden';
}

function closepopup(popup) {
    document.querySelector('.bg-overlay').style.display = 'none';
    document.querySelector(popup).style.display = 'none';
    document.querySelector('body').style.overflowY = 'unset';
}
/*  SHARE BUTTON POPUP SCRIPT */
function sharepopup(popup){
    document.querySelector(popup).style.display = 'block';
    document.querySelector('.bg-overlay').style.display ='block';
    document.querySelector('.bg-overlay').style.background = 'none';
}
// Select element with box class, assign to box variable
// const share = document.querySelector(".share-popup")
// document.addEventListener("click", function(event) {
//   if (event.target.closest(".share-popup") && !event.target) return
//   share.style.display = 'none';
// })

/*
ესეც არის ერთი ვარიანთი შეარის სექციის მართვისთვის
let isVisible = true;
document.querySelector('#shareA').addEventListener('click', function(){
	let div = document.querySelector('.share-popup');
  if (isVisible){
  	div.classList.add('hidden');
    isVisible = false;
  } else {
  	div.classList.remove('hidden');
    isVisible = true;
  }
});
*/

// checkbox hovers

function myFunction(x, b, c, _this) {
    if (_this.checked) {
        document.querySelector(x).style.backgroundColor = '#5B9279';
        document.querySelector(b).style.color = '#ffffff';
        document.querySelector(c).style.color = '#ffffff';
    } else  {
        document.querySelector(x).style.backgroundColor = '#F4F5F4';
        document.querySelector(b).style.color = '#263E33';
        document.querySelector(c).style.color = '#65756E';
    }
  }


// bank exchange rate scrolldown & scroll up menu

function scrollDown(table){
    document.querySelector(table).style.display = 'block';
    document.querySelector('.bank-arrow-down').style.display = 'none';
    document.querySelector('.bank-arrow-up').style.display ='block';
    document.querySelector('.divider').style.display = 'block';
}
function scrollUp(table){
    document.querySelector(table).style.display = 'none';
    document.querySelector('.bank-arrow-down').style.display = 'block';
    document.querySelector('.bank-arrow-up').style.display ='none';
    document.querySelector('.divider').style.display = 'none';
}