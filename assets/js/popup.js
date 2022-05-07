function openpopup(popup) {
    document.querySelector('.bg-overlay').style.display = 'grid';
    document.querySelector(popup).style.display = 'grid';
}

function closepopup(popup) {
    document.querySelector('.bg-overlay').style.display = 'none';
    document.querySelector(popup).style.display = 'none';
}