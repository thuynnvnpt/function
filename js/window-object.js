var msg = '<h2> browser window</h2> <p>width: ' + window.innerWidth + '</p>';

msg += '<p> height :' + window.innerHeight + '</p>' ;

msg += '<h2>history</h2> <p>items: ' + window.history.length +'</p>';

msg += '<h2>screen</h2> <p> with: '+ window.screen.with + '</p>';

msg += '<p>height: ' +window.screen.height +'</p>';

var el = document.getElementById('info');

el.innerHTML = msg;
alert('current page: ' + window.location);
