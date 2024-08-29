import { model, Schema } from "mongoose";

const infoSchema = new Schema({
  summary: { type: String },
  skillName: { type: String },
  skillDetails: { type: String },
  skillPic: [String],
  projectName: { type: String },
  projectDetails: { type: String },
  projectPic: [String],
});

export const Info = model("Info", infoSchema);
