import '@testing-library/jest-dom';
import { service } from './Browser';

beforeAll(() => service.start());
afterAll(() => service.stop());
