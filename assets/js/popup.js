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
// checkbox hovers
function myFunction(x, b, c, _this) {
    if (_this.checked) {
        document.querySelector(x).style.backgroundColor = '#00A8E8';
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