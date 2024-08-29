import { Schema ,model} from "mongoose";

export const tokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    isValid: {
      type: Boolean,
      default: true,
    },
    agent: {
      type: String,
    },
    expiredAt: { type: String },
  },
  { timestamps: true }
);

export const Token=model('Token',tokenSchema);