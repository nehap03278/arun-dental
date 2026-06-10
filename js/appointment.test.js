/**
 * @file appointment.test.js
 * Unit tests for the validation logic in appointment.js.
 * These tests use Jest/Vitest syntax.
 */

// Replicating logic from appointment.js for unit testing purposes.
// In a production environment, consider using ES Modules (export/import) to avoid duplication.
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPhone = (phone) => /^(\+91|0)?[6-9]\d{9}$/.test(phone.replace(/\s/g, ''));

describe('Appointment Form Validation Logic', () => {
  
  describe('Email Validation (isValidEmail)', () => {
    test('should return true for valid email formats', () => {
      expect(isValidEmail('dr.arun@skydental.in')).toBe(true);
      expect(isValidEmail('patient123@gmail.com')).toBe(true);
      expect(isValidEmail('info@hospital.org.in')).toBe(true);
    });

    test('should return false for missing @ symbol', () => {
      expect(isValidEmail('skydental.in')).toBe(false);
    });

    test('should return false for missing domain part', () => {
      expect(isValidEmail('arun@')).toBe(false);
    });

    test('should return false for missing TLD', () => {
      expect(isValidEmail('arun@gmail')).toBe(false);
    });

    test('should return false if email contains spaces', () => {
      expect(isValidEmail('arun @gmail.com')).toBe(false);
    });
  });

  describe('Phone Validation (isValidPhone)', () => {
    test('should return true for standard 10-digit Indian numbers', () => {
      expect(isValidPhone('9876543210')).toBe(true);
      expect(isValidPhone('8765432109')).toBe(true);
      expect(isValidPhone('7654321098')).toBe(true);
      expect(isValidPhone('6543210987')).toBe(true);
    });

    test('should return true for numbers with +91 or 0 prefix', () => {
      expect(isValidPhone('+919876543210')).toBe(true);
      expect(isValidPhone('09876543210')).toBe(true);
    });

    test('should handle spaces gracefully by stripping them before validation', () => {
      expect(isValidPhone('+91 98765 43210')).toBe(true);
    });

    test('should return false for numbers starting with invalid digits (e.g., 1-5)', () => {
      expect(isValidPhone('5876543210')).toBe(false);
      expect(isValidPhone('1234567890')).toBe(false);
    });
  });
});