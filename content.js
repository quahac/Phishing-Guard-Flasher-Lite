// Ask background if the site is trusted when page loads
browser.runtime.sendMessage({ action: "checkTrust", url: window.location.href });

// Listen for messages from background script
browser.runtime.onMessage.addListener(async (message) => {
  if (message.action === "flashGreen") {
    const settings = await browser.storage.local.get([
      "flashColor", "flashCount", "flashDelay", "flashText"
    ]);

    flashGreenOverlay(
      settings.flashCount || 3,
      settings.flashDelay || 500,
      settings.flashColor || "limegreen",
      settings.flashText || "Marked as trusted by you"
    );
  } else if (message.action === "enabled") {
    showStatusLabel("TRUSTED");
  } else if (message.action === "disabled") {
    showStatusLabel("DISABLED");
  }
});

// Flash a bar with custom text and color
function flashGreenOverlay(times = 3, delay = 1000, color = "limegreen", text = "Marked as trusted by you") {
  const bar = document.createElement("div");
  bar.style.position = "fixed";
  bar.style.top = "0";
  bar.style.left = "0";
  bar.style.width = "100%";
  bar.style.height = "30px";
  bar.style.background = color;
  bar.style.zIndex = "999999";
  bar.style.display = "flex";
  bar.style.alignItems = "center";
  bar.style.justifyContent = "center";
  bar.style.fontSize = "16px";
  bar.style.fontWeight = "bold";
  bar.style.fontFamily = "sans-serif";
  bar.style.color = "white";
  bar.textContent = text;
  document.body.appendChild(bar);

  let count = 0;
  const flash = setInterval(() => {
    bar.style.display = bar.style.display === "none" ? "flex" : "none";
    count++;
    if (count >= times * 2) {
      clearInterval(flash);
      bar.remove();
    }
  }, delay);
}

// Show a status label (e.g. TRUSTED or DISABLED)
function showStatusLabel(status) {
  const label = document.createElement("div");
  label.innerText = status.toUpperCase();
  label.style.position = "fixed";
  label.style.top = "10px";
  label.style.left = "50%";
  label.style.transform = "translateX(-50%)";
  label.style.backgroundColor = "limegreen";
  label.style.color = "white";
  label.style.padding = "5px 15px";
  label.style.fontSize = "18px";
  label.style.fontFamily = "sans-serif";
  label.style.zIndex = "999999";
  label.style.border = "2px solid green";
  label.style.borderRadius = "6px";
  label.style.boxShadow = "0 0 5px green";
  document.body.appendChild(label);

  setTimeout(() => label.remove(), 1500);
}
