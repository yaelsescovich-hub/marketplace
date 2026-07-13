// ================================================================
//  CONFIGURACIÓN DE LA TIENDA (tus datos)
//  Este archivo lo editas UNA sola vez.
//  Cuando te pasen un index.html nuevo, ESTE archivo NO se toca:
//  tus datos quedan intactos.
// ================================================================

window.CONFIG = {
  // Nombre de la tienda (aparece arriba y en la pestaña del navegador)
  marca: "Vitrina Privada",
  titulo: "Buenas oportunidades, para todos los gustos",
  subtitulo: "Marketplace privado de ropa y zapatillas nuevas y casi nuevas, muebles, electrodomésticos y artículos deportivos. Todo en excelente estado y a precios que valen la pena. Stock limitado: lo que ves, es lo que hay. Aprovecha antes que vuele.",

  // Comuna de retiro
  comuna: "Lo Barnechea",

  // ⚠️ CAMBIA ESTO por tu número real de WhatsApp.
  // Formato: 56 + número, sin + ni espacios. Ej: 56912345678
  whatsapp: "56912345678",

  // Datos de transferencia que ve el comprador
  datosTransferencia: `Nombre: Yael Sescovich
RUT: 16.094.743-8
Banco: Bice
Tipo de cuenta: Corriente
N° de cuenta: 16749281
Correo: yaelsescovich@gmail.com`,

  // Pago con tarjeta (tu función de Supabase). NO la cambies, ya está funcionando.
  checkoutUrl: "https://bgoetvepmyfpolowgwnr.supabase.co/functions/v1/quick-task",

  // Descuento automático por cantidad (sobre el total). Se aplica el tramo más alto que alcance.
  descuentosPorCantidad: [
    { min: 3, porcentaje: 5 },
    { min: 5, porcentaje: 10 },
    { min: 10, porcentaje: 20 }
  ],

  // Ofertas: el comprador propone precio y tú aceptas/rechazas por WhatsApp.
  // Bajo este % de descuento la oferta se rechaza sola.
  permitirOfertas: true,
  ofertaMaxDescuento: 20
};
