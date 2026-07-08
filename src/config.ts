// Contatos e links da campanha.
// TODO: substituir pelos dados reais antes de publicar.
export const WHATSAPP_NUMBER = "5561900000000";
export const INSTAGRAM_URL = "https://instagram.com/gizasoares_";
export const EMAIL = "contato@gizasoares.com.br";
// Link externo de doação (plataforma de financiamento de campanha).
// Enquanto não existir, os botões de apoio levam ao WhatsApp.
export const DONATION_URL = "";

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
