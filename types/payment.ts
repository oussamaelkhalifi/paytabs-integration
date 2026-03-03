/**
 * Payment types for PayTabs integration
 */

export interface PaymentBillingDetails {
  name: string;
  email: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  countryCode: string;
  zip: string;
}

export interface PaymentShippingDetails {
  name: string;
  email: string;
  phone: string;
  addressLine: string;
  city: string;
  state: string;
  countryCode: string;
  zip: string;
}

export interface PaymentConfig {
  profileID: string;
  serverKey?: string;
  clientKey: string;
  cartID: string;
  cartDescription: string;
  merchantName: string;
  merchantCountryCode: string;
  currency: string;
  amount: number;
  screenTitle?: string;
  billingDetails: PaymentBillingDetails;
  shippingDetails?: PaymentShippingDetails;
  showBillingInfo?: boolean;
  showShippingInfo?: boolean;
  forceShippingInfo?: boolean;
  expiryTime?: number;
}

// Exact gateway response shape (as returned)
export interface PaymentGatewayResponse {
  PaymentDetails: {
    billingDetails: PaymentBillingDetails;
    cartAmount: string;
    cartCurrency: string;
    cartDescription: string;
    cartID: string;
    merchantId: number;
    paymentInfo: {
      cardScheme: string;
      cardType: string;
      expiryMonth?: number;
      expiryYear?: number;
      paymentDescription?: string;
      payment_method?: string;
      [key: string]: any;
    };
    paymentResult: {
      responseCode: string;
      responseMessage: string;
      responseStatus: string;
      transactionTime: string;
      [key: string]: any;
    };
    profileId: number;
    serviceId: number;
    token: string;
    trace: string;
    tranCurrency: string;
    tranTotal: string;
    transactionReference: string;
    transactionType: string;
    [key: string]: any;
  };
}

export type PaymentGatewayDetails = PaymentGatewayResponse['PaymentDetails'];

export type PaymentStatus =
  | 'idle'
  | 'processing'
  | 'success'
  | 'failed'
  | 'cancelled';

export interface PaymentItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  quantity?: number;
}

export interface PaymentDetails {
  paymentResult?: {
    responseStatus: string;
    responseCode: string;
    responseMessage: string;
    transactionTime: string;
    acquirerMessage: string;
    acquirerRRN: string;
  };
  cartAmount: string;
  cartCurrency: string;
  cartDescription: string;
  transactionReference?: string;
  cartID?: string;
  token?: string;
  paymentInfo?: {
    cardType: string;
    cardScheme: string;
    paymentDescription: string;
  };
  billingDetails?: any;
  shippingDetails?: any;
}

export interface PaymentResponse {
  status: string;
  details?: PaymentDetails;
  error?: string;
}
