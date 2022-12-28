chrome.runtime.onInstalled.addListener((details) => {
	if (details.reason === 'install') {
		chrome.tabs.create({ url: 'onboarding.html' });
	}
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	chrome.cookies.get(
		{ url: tabs[0].url, name: '__Secure-next-auth.session-token' },
		function (sessionTokenCookie) {
			chrome.cookies.get({ url: tabs[0].url, name: 'cf_clearance' }, function (cfClearanceCookie) {
				var sessionToken = sessionTokenCookie.value;
				var cfClearance = cfClearanceCookie.value;
				var userAgent = navigator.userAgent;

				var finalOutput = `CF_CLEARANCE=${cfClearance}\r\n\r\nSESSION_TOKEN=${sessionToken}\r\n\r\nUSER_AGENT="${userAgent}"\r\n`;

				var copyCfClearanceButton = document.createElement('button');
				copyCfClearanceButton.innerHTML = 'Copy CF Clearance';
				copyCfClearanceButton.addEventListener('click', function () {
					navigator.clipboard.writeText(cfClearance);
					displayCopyMessage(this);
				});
				document.body.appendChild(copyCfClearanceButton);

				var copySessionTokenButton = document.createElement('button');
				copySessionTokenButton.innerHTML = 'Copy Session Token';
				copySessionTokenButton.addEventListener('click', function () {
					navigator.clipboard.writeText(sessionToken);
					displayCopyMessage(this);
				});
				document.body.appendChild(copySessionTokenButton);

				var copyUserAgentButton = document.createElement('button');
				copyUserAgentButton.innerHTML = 'Copy User Agent';
				copyUserAgentButton.addEventListener('click', function () {
					navigator.clipboard.writeText(userAgent);
					displayCopyMessage(this);
				});
				document.body.appendChild(copyUserAgentButton);

				var seperator = document.createElement('hr');
				document.body.appendChild(seperator);

				var copyAllButton = document.createElement('button');
				copyAllButton.innerHTML = 'Copy All';
				copyAllButton.addEventListener('click', function () {
					navigator.clipboard.writeText(finalOutput);
					displayCopyMessage(this);
				});
				document.body.appendChild(copyAllButton);

				var seperator = document.createElement('hr');
				document.body.appendChild(seperator);

				var downloadLink = document.createElement('a');

				downloadLink.innerHTML =
					'<img src="download-light.png" style="width: 20px; height: 20px; margin-right: 5px; vertical-align: middle;" /> .env-all';
				downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(finalOutput);
				downloadLink.download = '.env-all';
				downloadLink.addEventListener('click', function (e) {
					e.preventDefault();
					download('.env-all', finalOutput);
				});
				document.body.appendChild(downloadLink);

				function displayCopyMessage(button) {
					button.originalText = button.innerHTML;

					button.innerHTML = 'Copied!';
					button.style.backgroundColor = '#3e8e41';

					setTimeout(function () {
						button.innerHTML = button.originalText;
						button.style.backgroundColor = '#2196f3';
					}, 3000);
				}

				function download(filename, text) {
					var element = document.createElement('a');
					element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
					element.setAttribute('download', filename);

					element.style.display = 'none';
					document.body.appendChild(element);

					element.click();

					document.body.removeChild(element);
				}
			});
		},
	);
});
