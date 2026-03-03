import { PAYTABS_CONFIG } from '@/constants/payment';
import {
  PaymentBillingDetails,
  PaymentConfig,
  PaymentResponse,
  PaymentShippingDetails,
} from '@/types/payment';

import {
  PaymentResult,
  PaymentSDKBillingDetails,
  PaymentSDKConfiguration,
  PaymentSDKShippingDetails,
  RNPaymentSDKLibrary,
} from '@paytabs/react-native-paytabs';
import { useCallback, useState } from 'react';

export const usePayment = () => {
  const [paymentResult, setPaymentResult] = useState<PaymentResponse>({
    status: 'idle',
    error: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const createBillingDetails = (
    details: PaymentBillingDetails,
  ): PaymentSDKBillingDetails => {
    return new PaymentSDKBillingDetails(
      details.name,
      details.email,
      details.phone,
      details.addressLine,
      details.city,
      details.state,
      details.countryCode,
      details.zip,
    );
  };

  const createShippingDetails = (
    details: PaymentShippingDetails,
  ): PaymentSDKShippingDetails => {
    return new PaymentSDKShippingDetails(
      details.name,
      details.email,
      details.phone,
      details.addressLine,
      details.city,
      details.state,
      details.countryCode,
      details.zip,
    );
  };

  const createConfiguration = (
    config: PaymentConfig,
  ): PaymentSDKConfiguration => {
    const configuration = new PaymentSDKConfiguration();
    configuration.profileID = config.profileID;
    configuration.serverKey = config.serverKey;
    configuration.clientKey = config.clientKey;
    configuration.cartID = config.cartID;
    configuration.cartDescription = config.cartDescription;
    configuration.currency = config.currency || PAYTABS_CONFIG.DEFAULT_CURRENCY;
    configuration.amount = config.amount;
    configuration.merchantName =
      config.merchantName || PAYTABS_CONFIG.MERCHANT_NAME;
    configuration.merchantCountryCode =
      config.merchantCountryCode || PAYTABS_CONFIG.MERCHANT_COUNTRY_CODE;
    configuration.transactionType = 'sale';
    configuration.screenTitle =
      config.screenTitle || PAYTABS_CONFIG.SCREEN_TITLE;
    configuration.languageCode = 'fr';
    configuration.billingDetails = createBillingDetails(config.billingDetails);
    if (config.shippingDetails) {
      configuration.shippingDetails = createShippingDetails(
        config.shippingDetails,
      );
    }

    configuration.showBillingInfo = config.showBillingInfo ?? true;
    configuration.showShippingInfo = config.showShippingInfo ?? false;
    configuration.forceShippingInfo = config.forceShippingInfo ?? false;
    return configuration;
  };

  const startCardPayment = async (
    config: PaymentConfig,
  ): Promise<PaymentResult> => {
    setIsLoading(true);
    try {
      const configuration = createConfiguration(config);
      const response = await RNPaymentSDKLibrary.startCardPayment(
        JSON.stringify(configuration),
      );
      setPaymentResult({
        status:
          response?.PaymentDetails?.paymentResult?.responseStatus || 'failed',
        details: response?.PaymentDetails,
        error: '',
      });
      return response;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Payment failed';
      setPaymentResult({
        status: 'failed',
        error: errorMessage,
      });
      return null as any;
    } finally {
      setIsLoading(false);
    }
  };

  const cancelPayment = useCallback(() => {
    RNPaymentSDKLibrary.cancelPayment();
    setIsLoading(false);
  }, []);

  const resetPayment = () => {
    setIsLoading(false);
    setPaymentResult({
      status: 'idle',
      error: '',
    });
  };

  return {
    paymentResult,
    isLoading,
    startCardPayment,
    cancelPayment,
    resetPayment,
  };
};
