import { NextFunction, Request, Response } from "express";
import * as yup from "yup";

export function validate(schema: yup.ObjectSchema<yup.AnyObject> ){
  return async function(req: Request, res: Response, next: NextFunction) {
    
    try{
      await schema.validate(req.body, {
        strict: true,
      });
      next();
    } catch (error) {
      console.log("err", (error as Error).message);
      if (error instanceof yup.ValidationError) {
        res.statusCode = 400;
        res.json({
          message: error.errors[0],
        });
        return;
      }

      throw new Error('Error');
    }
  }
}