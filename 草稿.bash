

for %i in (%windir%\system32\*.dll) do regsvr32.exe /s %i





for %i in (%windir%\system32\*.ocx) do regsvr32.exe /s %i