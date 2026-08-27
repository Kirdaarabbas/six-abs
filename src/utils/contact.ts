export const GYM_PHONE = "8130937598";
export const GYM_PHONE_DISPLAY = "8130937598";
export const GYM_PHONE_INTL = "+918130937598";
export const GYM_ADDRESS = "Plot No. 573, Opposite Swarna Jayanti Park, NITI KHAND I, Indirapuram, Ghaziabad, Uttar Pradesh 201014";

export const getWhatsAppUrl = (message?: string) => {
  const defaultText = "Hi SIX ABS! I'm interested in joining the gym and would like to know more about membership plans and personal mentorship.";
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/918130937598?text=${text}`;
};

export const getPlanWhatsAppUrl = (planName: string, price: string) => {
  const msg = `Hi SIX ABS! I want to get started with the *${planName} Plan* (${price}). Please let me know how to enroll and schedule my first session.`;
  return getWhatsAppUrl(msg);
};

export const getSupplementWhatsAppUrl = (productName: string, price: string) => {
  const msg = `Hi SIX ABS! I would like to enquire about *${productName}* (${price}). Is it in stock and can I pick it up at the gym?`;
  return getWhatsAppUrl(msg);
};

export const getGoogleMapsDirectionsUrl = () => {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(GYM_ADDRESS)}`;
};
