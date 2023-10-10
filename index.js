let debloatScript = "";
let disableTelemetryScript = "";
let enableOldStartMenuScript = "";
let enableOldStartMenu11Script = "";
let disableWindowsUpdateScript = "";
let disableCortanaScript = "";

function debloatScriptChecked() {
    let debloatCheckboxVar = document.getElementById("debloatCheckbox");
    debloatScript = debloatCheckboxVar.checked ? `[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager]\n"SilentInstalledAppsEnabled"=dword:00000000\n"ContentDeliveryAllowed"=dword:00000000\n"OemPreInstalledAppsEnabled"=dword:00000000\n"PreInstalledAppsEnabled"=dword:00000000\n"PreInstalledAppsEverEnabled"=dword:00000000\n"SubscribedContent-310093Enabled"=dword:00000000\n"SubscribedContent-338387Enabled"=dword:00000000\n"SubscribedContent-338388Enabled"=dword:00000000\n"SubscribedContent-338389Enabled"=dword:00000000\n"SubscribedContent-353696Enabled"=dword:00000000\n"SubscribedContentEnabled"=dword:00000000\n"SystemPaneSuggestionsEnabled"=dword:00000000\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Policies\\Explorer]\n"AllowOnlineTips"=dword:00000000` : "";
    console.log(debloatScript);
    debloatCheckboxVar.checked ? alert("Be aware that, as of now, this function only removes the uninstallable apps.") : null;
}

function disableTelemetryScriptChecked() {
    let disableTelemetryCheckboxVar = document.getElementById("disableTelemetryCheckbox");
    disableTelemetryScript = disableTelemetryCheckboxVar.checked ? `[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection]\n"AllowTelemetry"=dword:00000000\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\InputPersonalization]\n"AllowInputPersonalization"=dword:00000000\n"RestrictImplicitTextCollection"=dword:00000001\n"RestrictImplicitInkCollection"=dword:00000001\n"RestrictImplicitSpeechCollection"=dword:00000001\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\AppCompat]\n"AITEnable"=dword:00000000\n"DisableUAR"=dword:00000001\n"DisableInventory"=dword:00000001\n"DisablePCA"=dword:00000001\n\n[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]\n"Start_TrackProgs"=dword:00000000\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Edge]\n"DoNotCollectData"=dword:00000001\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Office\\16.0\\Common\\Telemetry]\n"DisableTelemetry"=dword:00000001\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\SQMClient\\Windows]\n"CEIPEnable"=dword:00000000` : "";
    console.log(disableTelemetryScript);
}

function enableOldStartMenuScriptChecked() {
    let enableOldStartMenuCheckboxVar = document.getElementById("enableOldStartMenuCheckbox");
    enableOldStartMenuScript = enableOldStartMenuCheckboxVar.checked ? `[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]\n"TaskbarSmallIcons"=dword:00000001\n\n[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]\n"TaskbarGlomLevel"=dword:00000001\n\n[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]\n"TaskbarGlomming"=dword:00000000` : "";
    console.log(enableOldStartMenuScript);
}

function enableOldStartMenu11ScriptChecked() {
    let enableOldStartMenu11CheckboxVar = document.getElementById("enableOldStartMenu11Checkbox");
    enableOldStartMenu11Script = enableOldStartMenu11CheckboxVar.checked ? `[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]\n"TaskbarSi"=dword:00000000\n\n[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]\n"MMTaskbarEnabled"=dword:00000001` : "";
    console.log(enableOldStartMenu11Script);
}

function disableWindowsUpdateScriptChecked() {
    let disableWindowsUpdateCheckboxVar = document.getElementById("disableWindowsUpdateCheckbox");
    disableWindowsUpdateScript = disableWindowsUpdateCheckboxVar.checked ? `[HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WindowsUpdate\\Auto Update]\n"AUOptions"=dword:00000001\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU]\n"NoAutoUpdate"=dword:00000001` : "";
    console.log(disableWindowsUpdateScript);
}

function disableCortanaScriptChecked() {
    let disableCortanaCheckboxVar = document.getElementById("disableCortanaCheckbox");
    disableCortanaScript = disableCortanaCheckboxVar.checked ? `[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Search]\n"BingSearchEnabled"=dword:00000000\n"CortanaConsent"=dword:00000000\n"AllowSearchToUseLocation"=dword:00000000\n\n[HKEY_CURRENT_USER\\SOFTWARE\\Policies\\Microsoft\\Windows\\Explorer]\n"DisableSearchBoxSuggestions"=dword:00000001\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search]\n"AllowCortana"=dword:00000000\n"AllowCortanaAboveLock"=dword:00000000\n"AllowCortanaInEducation"=dword:00000000\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows Search]\n"AllowCortana"=dword:00000000\n\n[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\InputPersonalization]\n"RestrictImplicitTextCollection"=dword:00000001\n"RestrictImplicitInkCollection"=dword:00000001\n"RestrictImplicitSpeechCollection"=dword:00000001` : "";
    console.log(disableCortanaScript);
}

function downloadFunction() {
    completeScript = `Windows Registry Editor Version 5.00\n\n` + debloatScript + "\n\n" + disableTelemetryScript + "\n\n" + enableOldStartMenuScript + "\n\n" + enableOldStartMenu11Script + "\n\n" + disableWindowsUpdateScript + "\n\n" + disableCortanaScript;
    console.log(completeScript);

    var blob = new Blob([completeScript], { type: 'text/plain' });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "customized_win.reg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
