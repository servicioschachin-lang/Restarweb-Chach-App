/* Configuración de la aplicación */
export const CONFIG = {
  CREAWEB_URL: 'https://web.chach.app',
  WHATSAPP_SUPPORT: '50232533214', // Cambiar por el número de WhatsApp de soporte
  DOMINIO_DEFAULT:'empresagt.com',
  DOMINIO:['empresagt.com','chach.app','chachin.dev'],
  LIMITE_HTML: 900000,
  STORE_KEY: 'creaweb_estado_v1',
  RESERVADOS: ['www', 'admin', 'mail', 'correo', 'ftp', 'api', 'app', 'panel', 'creaweb', 'soporte', 'ayuda', 'test'],
  TEMPLATES: [
    { nombre: 'Plantilla 01', url: 'plantillas/01-glassmorphism-landing.html' },
    { nombre: 'Plantilla 02', url: 'plantillas/index(1).html' },
    { nombre: 'Plantilla 03', url: 'plantillas/04-neumorphism-multipage.html' },
    { nombre: 'Plantilla 04', url: 'plantillas/index(2).html' },
    { nombre: 'Plantilla 05', url: 'plantillas/09-minimalism-landing.html' },
    { nombre: 'Plantilla 06', url: 'plantillas/08-brutalism-multipage.html' },
    { nombre: 'Plantilla 07', url: 'plantillas/index(4).html' },
    { nombre: 'Plantilla 08', url: 'plantillas/index-10.html' },
    { nombre: 'Plantilla 09', url: 'plantillas/05-claymorphism-landing.html' },
    { nombre: 'Plantilla 10', url: 'plantillas/index(6).html' },
    { nombre: 'Plantilla 11', url: 'plantillas/07-brutalism-landing.html' },
    { nombre: 'Plantilla 12', url: 'plantillas/02-glassmorphism-multipage.html' },
    { nombre: 'Plantilla 13', url: 'plantillas/index(7).html' },
    { nombre: 'Plantilla 14', url: 'plantillas/03-neumorphism-landing.html' },
    { nombre: 'Plantilla 15', url: 'plantillas/index(8).html' },
    { nombre: 'Plantilla 16', url: 'plantillas/10-minimalism-multipage.html' },
    { nombre: 'Plantilla 17', url: 'plantillas/06-claymorphism-multipage.html' },
    { nombre: 'Plantilla 18', url: 'plantillas/index(10).html' },
  ]
};

export const SOCIAL_PATTERNS = /(facebook\.com|fb\.com|instagram\.com|tiktok\.com|wa\.me|whatsapp\.com|twitter\.com|x\.com|youtube\.com|youtu\.be|linkedin\.com|t\.me|telegram)/i;

export const SOCIAL_NAMES = [
  [/facebook|fb\.com/i, 'Facebook'],
  [/instagram/i, 'Instagram'],
  [/tiktok/i, 'TikTok'],
  [/wa\.me|whatsapp/i, 'WhatsApp'],
  [/twitter|x\.com/i, 'X / Twitter'],
  [/youtube|youtu\.be/i, 'YouTube'],
  [/linkedin/i, 'LinkedIn'],
  [/t\.me|telegram/i, 'Telegram']
];
