# Copy ChatGPT Session Token

This is a simple Chrome extension that allows you to copy your ChatGPT Session Token (`__Secure-next-auth.session-token`) with just one click!

## Features:

- Copy your ChatGPT Session Token with just one click.
- No need to use Dev Tools or search for cookies.
- Save time and make your ChatGPT experience more efficient.
- Great for developers who need to access their session tokens quickly.

Try it out today and see how much easier it is to copy your ChatGPT Session Token with this handy extension!

If you like it, please show some love by sharing it and giving it a ⭐!

---

### 👉️ Are you hiring? 👀

If you're hiring, please reach out!

<a href="https://linkedin.com/in/itsbrianroach" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>

<br>

My areas of expertise include:

- DevOps, Infrastructure Automation, Agile Project Management
- Strategy Development, Technology Integration, Performance Optimization
- Google Cloud, Firebase, Cloud Functions, BigQuery, Data Studio
- AWS (SES/Lambda/API Gateway)
- Node.js, React, Typescript, Python
- SQL, Google Clasp, Vercel, Tailwind


<br>

![Copy Token gif](copy-token.gif)

## How to Install

**From the Chrome Web Store:**

- [Copy ChatGPT Session Token - Chrome Web Store](https://chrome.google.com/webstore/detail/copy-chatgpt-session-toke/nnkcnhbioochcaoeofflcljhhpceoknl)

1. Open Chrome on your computer and navigate to the extension's page on the Chrome Web Store.
2. Click on the "Add to Chrome" button to install the extension.
3. Once the extension is installed, click on the extension icon in the top-right corner of your Chrome browser.
4. The extension will automatically copy your ChatGPT Session Token to your clipboard.
5. You can then paste the token into any text field or use it in your code.

**Install Locally:**

1.  Download the code on GitHub.
2.  Unzip the downloaded file.
3.  In case of Google Chrome, open the Extensions page (chrome://extensions/).
4.  Turn on Developer mode by clicking the toggle switch in the top right corner of the page.
5.  Click the `Load unpacked` button and select the directory where you unzipped the extension files.
6.  Copy ChatGPT Session Token extension should be installed and ready to go!
    <br>



## Usage

1. Navigate to the ChatGPT website.
2. Click on the extension icon in your Chrome toolbar.
3. The extension will copy your session token to your clipboard.
4. Save the token as `SESSION_TOKEN` in your project's `.env` file.
5. Have fun!

## Extension Permissions

- The `"permissions"` property grants the extension access to the following:

  - `activeTab:` Allows the extension to access information on the current active tab.
  - `cookies:` Allows the extension to read and write cookies.
  - `clipboardWrite:` Allows the extension to write to the clipboard.

- The `"host_permissions"` property grants the extension access to the following:
  - `https://*.openai.com/*:` Allows the extension to access pages within the openai.com domain.

<br>

In summary, the extension is only able to access the information on the current active tab, as well as read and write to the clipboard on pages within the openai.com domain.

**It is NOT able to access any information on pages that are not on the openai.com domain.**

Read more here [chrome.tabs - Chrome Developers](https://developer.chrome.com/docs/extensions/reference/tabs/)

<br>

## Icon

<p align="center">
  <img src="icons/icon256x256.png" alt="Copy ChatGPT Session Token icon" />
  <br>
  The extension icon was created using DALL-E-2.
</p>

## License

This extension is licensed under the MIT License. See the [LICENSE](https://github.com/itsbrex/Copy-ChatGPT-Session-Token/blob/master/LICENSE) file for more information.
