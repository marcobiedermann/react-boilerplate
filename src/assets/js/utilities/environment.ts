const environment = import.meta.env.MODE;
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

export { environment, isDevelopment, isProduction };
