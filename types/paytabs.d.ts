/**
 * Type declarations for @paytabs/react-native-paytabs
 */

declare module '@paytabs/react-native-paytabs' {
  export class PaymentSDKBillingDetails {
    constructor(
      name?: string,
      email?: string,
      phone?: string,
      addressLine?: string,
      city?: string,
      state?: string,
      countryCode?: string,
      zip?: string,
    );
    name?: string;
    email?: string;
    phone?: string;
    addressLine?: string;
    city?: string;
    state?: string;
    countryCode?: string;
    zip?: string;
  }

  export class PaymentSDKShippingDetails {
    constructor(
      name?: string,
      email?: string,
      phone?: string,
      addressLine?: string,
      city?: string,
      state?: string,
      countryCode?: string,
      zip?: string,
    );
    name?: string;
    email?: string;
    phone?: string;
    addressLine?: string;
    city?: string;
    state?: string;
    countryCode?: string;
    zip?: string;
  }

  export class PaymentSDKConfiguration {
    profileID?: string;
    serverKey?: string;
    clientKey?: string;
    cartID?: string;
    cartDescription?: string;
    merchantName?: string;
    merchantCountryCode?: string;
    currency?: string;
    amount?: number;
    screenTitle?: string;
    billingDetails?: PaymentSDKBillingDetails;
    shippingDetails?: PaymentSDKShippingDetails;
    showBillingInfo?: boolean;
    showShippingInfo?: boolean;
    forceShippingInfo?: boolean;
    expiryTime?: number;
    tokeniseType?: string;
    tokenFormat?: string;
    token?: string;
    transactionReference?: string;
    transactionType?: string;
    merchantIdentifier?: string;
    simplifyApplePayValidation?: boolean;
    paymentNetworks?: string[];
    samsungToken?: string;
    alternativePaymentMethods?: string[];
    theme?: PaymentSDKTheme;
    hideCardScanner?: boolean;
    cardDiscounts?: PaymentSDKCardDiscount[];
    cardApproval?: PaymentSDKCardApproval;
    languageCode?: string;
  }

  export class PaymentSDKTheme {
    backgroundColor?: string;
    primaryColor?: string;
    secondaryColor?: string;
    strokeColor?: string;
    buttonColor?: string;
    buttonFontColor?: string;
    titleFontColor?: string;
    secondaryFontColor?: string;
    merchantLogo?: any;
  }

  export class PaymentSDKSavedCardInfo {
    constructor(cardMask?: string, cardType?: string);
    cardMask?: string;
    cardType?: string;
  }

  export class PaymentSDKCardDiscount {
    discountCards?: string[];
    discountValue?: number;
    discountTitle?: string;
    isPercentage?: boolean;
  }

  export class PaymentSDKCardApproval {
    constructor(
      validationUrl?: string,
      binLength?: number,
      blockIfNoResponse?: boolean,
    );
    validationUrl?: string;
    binLength?: number;
    blockIfNoResponse?: boolean;
  }

  export const PaymentSDKConstants: {
    TokeniseType: {
      none: string;
      merchantMandatory: string;
      userMandatory: string;
      userOptional: string;
      userOptionalDefaultOn: string;
    };
    TokeniseFormat: {
      none: string;
      hex32: string;
      alphaNum20: string;
      digit22: string;
      digit16: string;
      alphaNum32: string;
    };
    TransactionType: {
      sale: string;
      authorize: string;
    };
    AlternativePaymentMethod: {
      unionPay: string;
      stcPay: string;
      valu: string;
      meezaQR: string;
      omannet: string;
      knetCredit: string;
      knetDebit: string;
      fawry: string;
      aman: string;
      urpay: string;
      souhoola: string;
      tabby: string;
      tru: string;
      tamara: string;
      forsa: string;
    };
  };

  export const PaymentSDKNetworks: {
    AMEX: string;
    CARTESBANCAIRES: string;
    CHINAUP: string;
    DISCOVER: string;
    EFTPOS: string;
    ELECTRON: string;
    ELO: string;
    IDCREDIT: string;
    INTERAC: string;
    JCB: string;
    MADA: string;
    MAESTRO: string;
    MASTERCARD: string;
    PRIVATELABEL: string;
    QUICPAY: string;
    SUICA: string;
    VISA: string;
    VPAY: string;
  };
  interface PaymentResult {
    PaymentDetails?: {
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
    };
    Event?: string;
  }

  export const RNPaymentSDKLibrary: {
    startCardPayment(configuration: string): Promise<PaymentResult>;
    startTokenizedCardPayment(
      configuration: string,
      token: string,
      transactionReference: string,
    ): Promise<PaymentResult>;
    start3DSecureTokenizedCardPayment(
      configuration: string,
      cardInfo: string,
      token: string,
    ): Promise<PaymentResult>;
    startPaymentWithSavedCards(
      configuration: string,
      support3Ds: boolean,
    ): Promise<PaymentResult>;
    startApplePayPayment(configuration: string): Promise<PaymentResult>;
    startAlternativePaymentMethod(
      configuration: string,
    ): Promise<PaymentResult>;
    cancelPayment(): void;
  };
}
