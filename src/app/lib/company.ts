/** Zentrale Unternehmens- und Kontaktdaten – Garden Time */

export const COMPANY = {
  name: 'Gardentime Facility Service GmbH',
  nameShort: 'Garden Time',
  slogan: 'Frankfurt & Umgebung',

  // Adresse
  street: 'Melchiorstraße 3-5',
  zip: '65929',
  city: 'Frankfurt am Main',
  country: 'Deutschland',
  get addressFull() {
    return `${this.street}, ${this.zip} ${this.city}`;
  },

  // Kontakt
  phonePretty: '069 30 03 80 13',
  phoneTel: 'tel:+496930038013',
  mobilePretty: '0172 700 21 21',
  mobileTel: 'tel:+491727002121',
  email: 'info@gardentime-frankfurt.de',
  emailJobs: 'bewerbung@gardentime-frankfurt.de',
  website1: 'www.gardentime-frankfurt.de',
  website2: 'www.gardentime-frankfurt.com',

  // Handelsregister
  registergericht: 'Amtsgericht Bad Homburg',
  registernummer: 'HRB 16403',

  // Geschäftsführung
  geschaeftsfuehrer: 'Mert Kilic, Timur Can Savas',

  // Steuer
  ustIdNr: 'DE329112946',
  steuernummer: '04023401820',
};
