let debloatScript = "";
let disableTelemetryScript = "";
let enableOldStartMenuScript = "";
let disableWindowsUpdateScript = "";
let disableCortanaScript = "";

function debloatScriptChecked() {
    let debloatCheckboxVar = document.getElementById("debloatCheckbox");
    debloatScript = debloatCheckboxVar.checked ? `Get-AppxPackage -AllUsers *Microsoft.BingWeather* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.Getstarted* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.Microsoft3DViewer* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.MicrosoftOfficeHub* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.MicrosoftSolitaireCollection* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.MixedReality.Portal* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.Office.OneNote* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.ScreenSketch* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.SkypeApp* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.WindowsCalculator* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *microsoft.windowscommunicationapps* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.WindowsFeedbackHub* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.WindowsSoundRecorder* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.XboxApp* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.ZuneMusic* | Remove-AppxPackage\nGet-AppxPackage -AllUsers *Microsoft.ZuneVideo* | Remove-AppxPackage\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SilentInstalledAppsEnabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name ContentDeliveryAllowed -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name OemPreInstalledAppsEnabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name PreInstalledAppsEnabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name PreInstalledAppsEverEnabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SilentInstalledAppsEnabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SubscribedContent-310093Enabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SubscribedContent-338387Enabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SubscribedContent-338388Enabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SubscribedContent-338389Enabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SubscribedContent-353696Enabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SubscribedContentEnabled -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager" -Name SystemPaneSuggestionsEnabled -Value 0` : "";
    console.log(debloatScript);
    debloatCheckboxVar.checked ? alert("Be aware that, as of now, this function only removes the uninstallable apps.") : null;
}

function disableTelemetryScriptChecked() {
    let disableTelemetryCheckboxVar = document.getElementById("disableTelemetryCheckbox");
    disableTelemetryScript = disableTelemetryCheckboxVar.checked ? `Set-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection" -Name "AllowTelemetry" -Value 0\n\nStop-Service -Name "DiagTrack" -Force\nSet-Service -Name "DiagTrack" -StartupType Disabled` : "";
    console.log(disableTelemetryScript);
    console.log('$isAdmin = ([Security.Principal.WindowsIdentity]::GetCurrent()).groups -match "S-1-5-32-544"\nif (-not $isAdmin) {\n\tStart-Process -FilePath PowerShell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File `"$($MyInvocation.MyCommand.Path)`"" -Verb RunAs\n\texit\n}');
}

function enableOldStartMenuScriptChecked() {
    let enableOldStartMenuCheckboxVar = document.getElementById("enableOldStartMenuCheckbox");
    enableOldStartMenuScript = enableOldStartMenuCheckboxVar.checked ? `$registryPath = "HKLM:\\SYSTEM\\CurrentControlSet\\Control\\FeatureManagement\\Overrides\\0\\2093230218"\n$userOrGroupName = "BUILTIN\\Users"\n$permissionLevel = "FullControl"\n$acl = Get-Acl -Path $registryPath\n$rule = New-Object System.Security.AccessControl.RegistryAccessRule("$userOrGroupName", $permissionLevel, "Allow")\n$acl.SetAccessRule($rule)\n\nSet-Acl -Path $registryPath -AclObject $acl\nSet-ItemProperty -Path $registryPath -Name "EnabledState" -Value 0` : "";
    console.log(enableOldStartMenuScript);
}

function disableWindowsUpdateScriptChecked() {
    let disableWindowsUpdateCheckboxVar = document.getElementById("disableWindowsUpdateCheckbox");
    disableWindowsUpdateScript = disableWindowsUpdateCheckboxVar.checked ? `Stop-Service -Name wuauserv -Force\nSet-Service -Name wuauserv -StartupType Disabled\nSet-ItemProperty -Path "HKLM:\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\WindowsUpdate\\Auto Update" -Name AUOptions -Value 1\nSet-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU" -Name NoAutoUpdate -Value 1\nGet-ScheduledTask -TaskPath "\\Microsoft\\Windows\\WindowsUpdate\\" | Disable-ScheduledTask\nGet-ScheduledTask -TaskPath "\\Microsoft\\Windows\\UpdateOrchestrator\\" | Disable-ScheduledTask` : "";
    console.log(disableWindowsUpdateScript);
}

function disableCortanaScriptChecked() {
    let disableCortanaCheckboxVar = document.getElementById("disableCortanaCheckbox");
    disableCortanaScript = disableCortanaCheckboxVar.checked ? `Set-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" -Name "BingSearchEnabled" -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" -Name "CortanaConsent" -Value 0\nSet-ItemProperty -Path "HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Search" -Name "AllowSearchToUseLocation" -Value 0\nSet-ItemProperty -Path "HKCU:\\SOFTWARE\\Policies\\Microsoft\\Windows\\Explorer" -Name "DisableSearchBoxSuggestions" -Value 1\nSet-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" -Name "AllowCortana" -Value 0\nSet-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows\\Windows Search" -Name "AllowCortanaAboveLock" -Value 0\nSet-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\Windows Search" -Name "AllowCortanaInEducation" -Value 01\nSet-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\InputPersonalization" -Name "RestrictImplicitTextCollection" -Value 1\nSet-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\InputPersonalization" -Name "RestrictImplicitInkCollection" -Value 1\nSet-ItemProperty -Path "HKLM:\\SOFTWARE\\Policies\\Microsoft\\InputPersonalization" -Name "RestrictImplicitSpeechCollection" -Value 1
    ` : "";
    console.log(disableCortanaScript);
}

function downloadFunction() {
    completeScript = `# Customized debloat script\n\n$isAdmin = ([Security.Principal.WindowsIdentity]::GetCurrent()).groups -match "S-1-5-32-544"\nif (-not $isAdmin) {\n\tStart-Process -FilePath PowerShell.exe -ArgumentList "-NoProfile -ExecutionPolicy Bypass -File \`"$($MyInvocation.MyCommand.Path)\`"" -Verb RunAs\n\texit\n}\n\n` + debloatScript + "\n\n" + disableTelemetryScript + "\n\n" + enableOldStartMenuScript + "\n\n" + disableWindowsUpdateScript + "\n\n" + disableCortanaScript;
    console.log(completeScript);

    var blob = new Blob([completeScript], { type: 'text/plain' });
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "customized_script.ps1";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
