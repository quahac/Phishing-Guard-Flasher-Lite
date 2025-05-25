document.addEventListener("DOMContentLoaded", async () => {
  const colorInput = document.getElementById("color");
  const countInput = document.getElementById("count");
  const delayInput = document.getElementById("delay");
  const textInput = document.getElementById("text");

  const settings = await browser.storage.local.get([
    "flashColor", "flashCount", "flashDelay", "flashText"
  ]);

  colorInput.value = settings.flashColor || "#32CD32";
  countInput.value = settings.flashCount || 3;
  delayInput.value = settings.flashDelay || 500;
  textInput.value = settings.flashText || "Marked as trusted by you";

  document.getElementById("save").addEventListener("click", () => {
    browser.storage.local.set({
      flashColor: colorInput.value,
      flashCount: parseInt(countInput.value),
      flashDelay: parseInt(delayInput.value),
      flashText: textInput.value
    });
    alert("Settings saved!");
  });

  document.getElementById("reset").addEventListener("click", () => {
    // Default values
    const defaults = {
      flashColor: "#32CD32",
      flashCount: 3,
      flashDelay: 500,
      flashText: "Marked as trusted by you"
    };

    colorInput.value = defaults.flashColor;
    countInput.value = defaults.flashCount;
    delayInput.value = defaults.flashDelay;
    textInput.value = defaults.flashText;

    browser.storage.local.set(defaults);
    alert("Settings reset to default.");
  });
});
