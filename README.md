# Calculadora con IA oculta

Aplicación adaptable a PC y celular. La calculadora funciona en el navegador; el chat se abre manteniendo pulsado el botón **0** durante 1 segundo.

## 1. Requisitos
- Node.js 20 o superior
- Una clave de API de OpenAI con acceso y facturación configurados

## 2. Instalar
Abrí una terminal en esta carpeta y ejecutá:

```bash
npm install
```

## 3. Configurar la clave (Windows)
En PowerShell, ejecutá lo siguiente reemplazando el texto de ejemplo por tu clave:

```powershell
$env:OPENAI_API_KEY="TU_CLAVE_DE_API"
npm start
```

La variable solo queda configurada en esa ventana de PowerShell. Para otra sesión, volvé a configurarla. No pegues la clave en `index.html`, no la compartas ni subas el proyecto con la clave.

Opcionalmente podés elegir otro modelo disponible en tu cuenta:

```powershell
$env:OPENAI_MODEL="gpt-5.5"
```

## 4. Abrir
Visitá http://localhost:3000 en tu navegador. Para probar desde el celular, ambos dispositivos deben estar en la misma red Wi-Fi; iniciá el servidor en la PC y abrí en el celular la dirección local de la PC con `:3000` al final. Puede ser necesario permitir Node.js en el firewall de Windows para la red privada.

## Importante
- Abrir `index.html` con doble clic permite usar la calculadora, pero la IA necesita que el servidor esté ejecutándose.
- El acceso oculto es una interacción de interfaz, no un sistema de seguridad. No guardamos conversaciones en una base de datos.
- Las llamadas a la API pueden tener costo según el modelo y la cuenta. Controlá el uso en tu panel de API.
- Para publicar la aplicación en Internet, desplegá el servidor en un hosting con HTTPS y guardá la clave como variable de entorno. No publiques el servidor sin controles de abuso/rate limits.
