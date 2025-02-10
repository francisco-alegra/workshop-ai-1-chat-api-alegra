# Workshop AI - Chat con IA y API de Alegra

Este proyecto es el resultado del taller de AI, en el que se integra un Chat basado en LLM (con soporte para Deepseek y OpenAI) y la API de Alegra. A continuación se detalla el paso a paso para configurar y levantar el proyecto.

---

## 1️⃣ Setup Previo

### a) Instalar Deepseek localmente

- Sigue el tutorial:  
  [Cómo instalar DEEPSEEK en Windows - DeepSeek R1 gratis en tu PC](https://www.youtube.com/watch?v=OlZsAX4gTpg)

### b) Configuración del proyecto de Frontend (Vue 3)

1. Luego de clonado este repositorio navegar a el:
   ```bash
   cd reports-ai-chat
   ```
2. **Autenticación (solo si es la primera vez):**
   - Genera un token de Git siguiendo esta guía:  
     [Generar token de Git](https://www.loom.com/share/bd1f758b96ed45ebb9c75352bbbf3446)
   - Ejecuta el siguiente comando en la terminal:
     ```bash
     npm login --scope=@alegradev --registry=https://npm.pkg.github.com/
     ```
     Ingresa tu usuario y el token generado.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Si la página sale en blanco y en consola ves errores relacionados con \`process\`, crea un archivo \`.env\` a partir de \`.env.example\`.

### c) Verificar que Deepseek esté funcionando

Realiza la siguiente petición (por ejemplo, usando Postman o desde la terminal):

```bash
curl --location 'http://localhost:11434/v1/chat/completions' \
--header 'Content-Type: application/json' \
--data '{
"model": "deepseek-r1:1.5b",
"messages": [
{
"role": "system",
"content": "You are a helpful assistant."
},
{
"role": "user",
"content": "Hello"
}
]
}'
```

Si recibes una respuesta, Deepseek está corriendo correctamente.

---

## 2️⃣ Levantando el Proyecto Completo

### a) Levantar el Backend

1. Abre una terminal y navega a la carpeta \`backend\`:
   ```bash
   cd backend
   npm run dev
   ```
   Esto iniciará el servidor Express en el puerto **3001** (p.ej., \`http://localhost:3001\`).

### b) Levantar el Frontend

1. Abre otra terminal, navega a la raíz del proyecto clonado (\`reports-ai-chat\`) y ejecuta:
   ```bash
   npm install
   npm run dev
   ```
2. Abre tu navegador y accede a la URL proporcionada (p.ej., \`http://dev.alegra.com:1026\`).

---

## Consideraciones Finales

- **Deepseek:** Asegúrate de que Deepseek esté corriendo localmente antes de iniciar el backend.
- **API Keys:** La API key en \`.env\` es válida solo durante el workshop. Para seguir experimentando, solicita una nueva.
- **Autenticación:** Si es la primera vez que ejecutas un microfront de Alegra, sigue los pasos de autenticación para NPM (login con token).

---

¡Listo! 🚀`
