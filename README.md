# Phishing Guard Flasher Lite

**A lightweight Firefox Android extension that visually confirms trusted sites with a customizable flashing banner.**

> ⚠️ **Note:** This extension is **only compatible with Firefox on Android**. It does **not work on Apple devices** (iOS) due to platform limitations.

> 🔹 This is the **Lite version**. A full-featured cross-platform version (supporting Firefox, Chrome, and Edge on desktop) is coming soon. Stay tuned for the link!

## 🌐 Overview

Phishing Guard Flasher Lite helps users visually mark websites they trust. With a simple tap on the extension icon, a site is added or removed from your trusted list. Once marked, the extension flashes a colored banner with a message of your choice every time you visit the site.

This tool is designed to give quick visual feedback and help users stay aware of trusted environments, especially useful when navigating between similar-looking or high-risk domains.

## 🚀 Features

- ✅ **Tap-to-trust**: Add or remove the current site as trusted with one click.
- 🌈 **Custom flashing banner**: Configure color, text, number of flashes, and speed.
- 🔐 **Local storage**: Trusted sites and user preferences are stored locally.
- 🧩 **Lightweight**: Built for Firefox on Android, optimized for performance.

## 📸 What It Looks Like

### How to Enable a Trusted Website

Click the extension icon to mark a website as **trusted**.

<img src="https://github.com/user-attachments/assets/d0df4e95-b485-41bb-ba0d-82f938b95596" width="30%" />

---

### Trusted Site Banner

When visiting a trusted site, you’ll see a flashing banner at the top of the page:

> **"Marked as trusted by you"**

<img src="https://github.com/user-attachments/assets/394037d3-25c1-4a03-a433-5720a9f57188" width="30%" />

This serves as a visual confirmation that you're on a trusted domain.

---

### Customization Options

You can customize how the banner looks — color, message, number of flashes, and delay — from the **Options** page.

<img src="https://github.com/user-attachments/assets/b470984d-c5f5-4d07-8657-dea8967983eb" width="70%" />



## 🛠️ Files Included

- `background.js`: Handles toggling of trusted sites and messaging content scripts.
- `content.js`: Injects and manages visual elements like flashing banners or status labels.
- `manifest.json`: Defines extension structure, permissions, and settings.
- `options.html` & `options.js`: UI and logic for user-customizable flash settings.

## 📋 Permissions

- `tabs`: To get the current tab's URL and interact with it.
- `storage`: To save trusted site lists and user preferences.
- `activeTab`: To send messages to the currently active page.

## ⚙️ How to Use

1. **Install the extension** from [Mozilla Add-ons](https://addons.mozilla.org/en-US/android/addon/phishing-guard-flasher-lite/).
2. **Tap the extension icon** on any site to mark it as trusted or untrusted.
3. **Visit Options** to set your preferred banner color, message, speed, and frequency.
4. When you revisit the site, the banner will flash to confirm your trust.

## 📦 Development & Installation on Android

To test or install this extension manually on **Firefox for Android**, follow these steps:

1. **Clone or download** this repository.
2. Go to [addons.mozilla.org](https://addons.mozilla.org/) and **register / log in**.
3. Zip the extension files and **submit as a private add-on** for yourself.
4. Once Mozilla reviews and **signs the add-on**, download the `.xpi` file.
5. **Transfer the signed `.xpi` file** to your Android device.
6. On your Android device, **install [Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix)**.
7. Open Firefox Nightly and go to **Settings > About Firefox Nightly**.
8. Tap the **Firefox logo 5 times** to enable advanced settings.
9. Go back to **Settings > Advanced** and choose **"Install Add-on from file"**.
10. **Select your `.xpi` file** and it will be installed in Firefox Nightly.

> ⚠️ You must use **Firefox Nightly on Android** to install custom extensions from file. This does not work on stable or beta versions of Firefox for Android.


---

📌 **Coming Soon:**  
A full cross-browser desktop version for **Firefox, Chrome, and Edge** with domain rules and enhanced features. Link will be added here when available.

---

Feel free to submit issues or feature requests in the GitHub Issues tab.

