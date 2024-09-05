import { setupWorker } from 'msw';
import { handlers } from './Handlers';

export const service = setupWorker(...handlers);
