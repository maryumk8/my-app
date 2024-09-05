import { rest } from 'msw';

export const handlers = [
  rest.get('', (req: any, res: any, ctx: any) => {
    return res(ctx.json());
  }),
];
