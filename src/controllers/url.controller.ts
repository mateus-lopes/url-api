import { Request, Response } from "express";
import { ERROR_MESSAGES, HTTP_STATUS } from "../lib/constants.js";

export const addUrl = async (req: Request, res: Response): Promise<void> => {
    res
        .status(HTTP_STATUS.OK)
        .json({ message: "OK" });
    return;
}

export const getUrls = async (req: Request, res: Response): Promise<void> => {
    res
        .status(HTTP_STATUS.OK)
        .json({ message: "OK" });
    return;
}

export const getUrl = async (req: Request, res: Response): Promise<void> => {
    res
        .status(HTTP_STATUS.OK)
        .json({ message: "OK" });
    return;
}

export const updateUrl = async (req: Request, res: Response): Promise<void> => {
    res
        .status(HTTP_STATUS.OK)
        .json({ message: "OK" });
    return;
}

export const deleteUrl = async (req: Request, res: Response): Promise<void> => {
    res
        .status(HTTP_STATUS.OK)
        .json({ message: "OK" });
    return;
}



