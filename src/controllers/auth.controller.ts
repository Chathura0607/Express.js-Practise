import {Request, Response} from "express";
import * as authService from '../services/auth.service';

export const authenticateUser = (req: Request, res: Response) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).json({error: "Username and password are required"});
    }

    const authTokens = authService.authenticateUser(username, password);

    if (!authTokens) {
        return res.status(401).json({error: "Invalid credentials"});
    }

    res.json(authTokens);
};
