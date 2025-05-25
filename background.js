browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message.action === "checkTrust") {
    let stored = await browser.storage.local.get("enabledSites");
    let sites = stored.enabledSites || [];
    let url = new URL(message.url);
    if (sites.includes(url.hostname)) {
      browser.tabs.sendMessage(sender.tab.id, { action: "flashGreen" });
    }
  }
});


browser.browserAction.onClicked.addListener(async (tab) => {
  let stored = await browser.storage.local.get("enabledSites");
  let sites = stored.enabledSites || [];
  let url = new URL(tab.url);
  let hostname = url.hostname;
  let action;

  if (sites.includes(hostname)) {
    sites = sites.filter(site => site !== hostname);
    console.log("❌ Removed trusted site:", hostname);
    action = "disabled";
  } else {
    sites.push(hostname);
    console.log("✅ Added trusted site:", hostname);
    action = "enabled";
  }

  await browser.storage.local.set({ enabledSites: sites });

  // Notify the active tab of the new state:
  browser.tabs.sendMessage(tab.id, { action: action });
});
