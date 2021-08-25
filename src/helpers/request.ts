import { NextApiRequest, NextApiResponse } from 'next';
import { ValidationChain, validationResult } from 'express-validator';

import { TMethod, TMethodHandlerMap } from '../types';

export function handleRequest(methodHandlerMap: TMethodHandlerMap) {
    return async function requestHandler(
        req: NextApiRequest,
        res: NextApiResponse,
    ): Promise<void> {
        const method = req.method as TMethod;

        if (!methodHandlerMap.has(method)) {
            res.statusCode = 405;
            res.end();
            return;
        }

        const methodHandler = methodHandlerMap.get(method);

        try {
            await methodHandler!(req, res);
        } catch (errors) {
            if (typeof errors.array === 'function') {
                res.status(400).json({ errors: errors.array() });
                return;
            }

            res.status(500).json({});
        }
    };
}

export async function validate(
    req: NextApiRequest,
    validations: ValidationChain[],
): Promise<void> {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return;
    }

    throw errors;
}
