import mongoose, { Document, Model } from "mongoose";
import { IUrl } from "../types/url.types";

type UrlDocument = IUrl & Document;

const urlSchema = new mongoose.Schema<UrlDocument>(
    {
        url: {
            type: String,
            required: true
        },
        fakeUrl: {
            type: String,
            required: true,
            unique: true
        },
        ads: {
            type: Boolean,
            required: false
        },
        expiresAt: {
            type: Date,
            required: false
        },
        disabled: {
            type: Boolean,
            required: false
        },
    }
)

export const Url: Model<UrlDocument> = mongoose.model(
    "Url",
    urlSchema
)