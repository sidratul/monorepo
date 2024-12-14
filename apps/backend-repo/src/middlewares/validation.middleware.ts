import { NextFunction, Request, Response } from "express";
import { z } from "zod";

export function validate(schema: z.ZodTypeAny ){
  return async function(req: Request, res: Response, next: NextFunction) {
    const {success, error} = await schema.safeParse(req.body);
    if (success) {
      next();
      return;
    }

    const issue = error.issues[0];
    res.statusCode = 400;
    
    // TODO: format error messages so its easier to handle
    // https://zod.dev/ERROR_HANDLING
    res.json({
      message: `${issue.path[0]} ${issue.message}`,
    });
  }
}