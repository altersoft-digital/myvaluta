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


