# Script para refrescar las variables de entorno PATH en PowerShell
# Ejecuta este script con: .\refresh-path.ps1

Write-Host "Refrescando variables de entorno..." -ForegroundColor Cyan

# Actualizar PATH en la sesión actual
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")

Write-Host "`nVerificando instalación..." -ForegroundColor Cyan

# Verificar Node.js
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js no encontrado" -ForegroundColor Red
}

# Verificar npm
try {
    $npmVersion = npm --version
    Write-Host "✓ npm: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ npm no encontrado" -ForegroundColor Red
}

Write-Host "`n¡Listo! Ahora puedes usar npm y node." -ForegroundColor Green
Write-Host "`nPrueba ejecutando: npm --version" -ForegroundColor Yellow

