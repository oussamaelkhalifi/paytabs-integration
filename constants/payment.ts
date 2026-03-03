export const PAYTABS_CONFIG = {
  MERCHANT_NAME: 'NestPro',
  MERCHANT_COUNTRY_CODE: 'MA', // ISO alpha 2 country code
  DEFAULT_CURRENCY: 'MAD',
  SCREEN_TITLE: 'Complete Payment',
  EXPIRY_TIME: 120, // 2 minutes timeout
};

export const PAYMENT_MESSAGES = {
  PROCESSING: 'Processing your payment...',
  SUCCESS_TITLE: 'Payment Successful!',
  SUCCESS_MESSAGE: 'Your transaction has been completed successfully.',
  FAILED_TITLE: 'Payment Failed',
  FAILED_MESSAGE: 'We could not process your payment. Please try again.',
  CANCELLED_TITLE: 'Payment Cancelled',
  CANCELLED_MESSAGE: 'You have cancelled the payment.',
  ERROR_TITLE: 'Error',
  GENERIC_ERROR: 'An unexpected error occurred. Please try again.',
};

export const PAYMENT_BUTTON_TEXT = {
  PAY_NOW: 'Pay Now',
  TRY_AGAIN: 'Try Again',
  CANCEL: 'Cancel',
  CLOSE: 'Close',
  BACK_TO_HOME: 'Back to Home',
  VIEW_DETAILS: 'View Details',
};
