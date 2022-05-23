function openpopup(popup) {
    document.querySelector('.bg-overlay').style.display = 'grid';
    document.querySelector(popup).style.display = 'grid';
    document.querySelector('body').style.overflowY = 'hidden';
    document.querySelector('.bg-overlay').style.background = 'rgba(14, 12, 19, 0.85)';
}

function closepopup(popup) {
    document.querySelector('.bg-overlay').style.display = 'none';
    document.querySelector(popup).style.display = 'none';
    document.querySelector('body').style.overflowY = 'unset';
}
/*  SHARE BUTTON POPUP SCRIPT */
function sharepopup(popup) {
    document.querySelector(popup).style.display = 'block';
    document.querySelector('.bg-overlay').style.display = 'block';
    document.querySelector('.bg-overlay').style.background = 'none';
}
// checkbox hovers
function myFunction(x, b, c, _this) {
    if (_this.checked) {
        document.querySelector(x).style.backgroundColor = '#00A8E8';
        document.querySelector(b).style.color = '#ffffff';
        document.querySelector(c).style.color = '#ffffff';
    } else {
        document.querySelector(x).style.backgroundColor = '#F4F5F4';
        document.querySelector(b).style.color = '#263E33';
        document.querySelector(c).style.color = '#65756E';
    }
}


// bank exchange rate scrolldown & scroll up menu

function scrollDown(table, arrowdown, arrowup) {
    document.querySelector(table).style.display = 'table';
    document.querySelector(arrowdown).style.display = 'none';
    document.querySelector(arrowup).style.display = 'block';
}

function scrollUp(table, arrowdown, arrowup) {
    document.querySelector(table).style.display = 'none';
    document.querySelector(arrowdown).style.display = 'block';
    document.querySelector(arrowup).style.display = 'none';
}

// view more banks and kiosk options 
function viewMore1() {
    var count;
    for (count = 1; count < 6; count++) {
        document.getElementById('row-' + count + '').style.display = 'block';
    }
};

function viewMore2() {
    var count;
    for (count = 1; count < 6; count++) {
        document.getElementById('row-' + count + '').style.display = 'block';
    }
};