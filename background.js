// Copy the session token cookie to the clipboard
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	chrome.cookies.get({ url: tabs[0].url, name: '__Secure-next-auth.session-token' }, (cookie) => {
		var area = document.createElement('textarea');
		area.style.position = 'absolute';
		area.style.border = '0';
		area.style.padding = '0';
		area.style.margin = '0';
		area.style.height = '1px';
		area.style.top = '-10px';
		area.innerText = cookie.value;
		document.body.appendChild(area, document.body.firstChild);
		area.focus();
		area.select();
		document.execCommand('copy');
		document.body.removeChild(area);
	});
});
