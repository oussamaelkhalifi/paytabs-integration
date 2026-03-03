import "@testing-library/jest-native/extend-expect";
import "react-native-gesture-handler/jestSetup";
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";
import fetchMock from "jest-fetch-mock";

// Mock AsyncStorage
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

// Mock Secure Store
jest.mock("expo-secure-store", () => ({
  getItemAsync: jest.fn(),
  setItemAsync: jest.fn(),
  deleteItemAsync: jest.fn(),
}));

// Mock navigation
jest.mock("@react-navigation/native", () => {
  return {
    ...jest.requireActual("@react-navigation/native"),
    useNavigation: () => ({
      navigate: jest.fn(),
      reset: jest.fn(),
    }),
  };
});

// Enable fetch mocking
fetchMock.enableMocks();

// Silence the warning: Animated: `useNativeDriver` is not supported
jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
