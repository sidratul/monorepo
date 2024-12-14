import { NextFunction, Request, Response } from "express";

export async function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (res.headersSent) {
    return next(err);
  }

  res.status(500)
  res.render('error', { error: err })
}