import { NextFunction, Request, Response } from "express";
import { auth } from "../firebase/firebase.config";

export async function authGuard(req: Request, res: Response, next: NextFunction) {
  const appCheckToken = req.header("X-Firebase-AppCheck");

  if (!appCheckToken) {
    res.statusCode = 401;
    res.json({
      message: 'Unauthorized'
    });

    return;
  }
  try {
    const appCheckClaims = await auth.verifyIdToken(appCheckToken)
    res.locals.user = {
      id: appCheckClaims.user_id,
      email: appCheckClaims.email,
    };

    next();
  } catch (err) {
    res.statusCode = 401;
    res.json({
      message: 'Unauthorized'
    });
  }
}