import { Request, Response } from "express";
import { Url } from "../models/url.model.js";
import { ERROR_MESSAGES, HTTP_STATUS } from "../lib/constants.js";

export const addUrl = async (req: Request, res: Response): Promise<void> => {
    const { url, title, fakeUrl, ads, disabled, expiresAt } = req.body;
     
    try {
        if (!url || !title) {
            res
                .status(HTTP_STATUS.BAD_REQUEST)
                .json({ message: ERROR_MESSAGES.REQUIRED_FIELDS });
            return;
        }

        const existingUrl = await Url.findOne({ title: title });
        if (existingUrl) {
            res
                .status(HTTP_STATUS.CONFLICT)
                .json({ message: ERROR_MESSAGES.URL_ALREADY_EXISTS });
            return;
        }

        const newUrl= new Url({
            url: url,
            title: title,
            fakeUrl: fakeUrl,
            ads: ads,
            disabled: disabled,
            expiresAt: expiresAt,
        });

        await newUrl.save();
        res.status(HTTP_STATUS.CREATED).json(newUrl);
    } catch (error) {
        const errorMessage =
        error instanceof Error
            ? error.message
            : ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: errorMessage });
    }
}

export const getUrls = async (
    _: Request,
    res: Response
): Promise<void> => {
  try {
    const urls = await Url.find({});
    res.status(HTTP_STATUS.OK).json(urls);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: errorMessage });
  }
};

export const getUrl = async (
    req: Request,
    res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const url = await Url.findById(id);

    if (!url) {
        res
            .status(HTTP_STATUS.BAD_REQUEST)
            .json({ message: ERROR_MESSAGES.NOT_FOUND });
        return;
    }

    res.status(HTTP_STATUS.OK).json(url);
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: errorMessage });
  }
};

export const updateUrl = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedUrl = await Url.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });

        if (!updatedUrl) {
            res
                .status(HTTP_STATUS.BAD_REQUEST)
                .json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
            return;
        }

        res.status(HTTP_STATUS.OK).json(updatedUrl);
    } catch (error) {
        const errorMessage =
        error instanceof Error
            ? error.message
            : ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: errorMessage });
    }
};

export const deleteUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        const deletedUrl = await Url.findByIdAndDelete(id);

        if (!deletedUrl) {
            res
                .status(HTTP_STATUS.BAD_REQUEST)
                .json({ message: ERROR_MESSAGES.INTERNAL_SERVER_ERROR });
            return;
        }

        const urls = await Url.find({});
        res.status(HTTP_STATUS.OK).json(urls);
    } catch (error) {
        const errorMessage =
        error instanceof Error
            ? error.message
            : ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: errorMessage });
    }
};

export const getUrlByFakeUrl = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { id } = req.params;

        const url = await Url.findOne({ fakeUrl: 'http://localhost:3001/r/' + id });

        if (!url) {
            res
                .status(HTTP_STATUS.BAD_REQUEST)
                .json({ message: ERROR_MESSAGES.NOT_FOUND });
            return;
        }

        res.status(HTTP_STATUS.OK).json(url);
    } catch (error) {
        const errorMessage =
            error instanceof Error
                ? error.message
                : ERROR_MESSAGES.INTERNAL_SERVER_ERROR;
        res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({ message: errorMessage });
    }
};
