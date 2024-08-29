import { asyncHandelar } from "../utils/asyncHandelar.js";
import { Info } from "../../db/information.js"; // Assuming the correct file name

export const projectAndSkill = asyncHandelar(async (req, res, next) => {
  const { summary, skillName, skillDetails, projectName, projectDetails } =
    req.body;

  // Get the filenames from the uploaded files
  const skillPic = req.files.skill
    ? req.files.skill.map((file) => `/${file.filename}`)
    : [];
  const projectPic = req.files.project
    ? req.files.project.map((file) => `/${file.filename}`)
    : [];

  const newSkill = {
    summary,
    skillName,
    skillDetails,
    skillPic: skillPic.length > 0 ? skillPic : null, // Save array of filenames
  };

  const newProject = {
    projectName,
    projectDetails,
    projectPic: projectPic.length > 0 ? projectPic : null, // Save array of filenames
  };

  const result = await Info.create({ ...newSkill, ...newProject });

  res
    .status(201)
    .json({ message: "Skill and Project created successfully", result });
});

export const getAll = asyncHandelar(async (req, res, next) => {
  const result = await Info.find();
  res
    .status(200)
    .json({ message: "All Skills and Projects fetched successfully", result });
});

////delete skill//
export const deleteSkill = asyncHandelar(async (req, res, next) => {
  const { id } = req.params;
  const skill = await Info.findById(id);
  if (!skill) {
    return res.status(404).json({ message: "Skill not found" });
  }
  skill.set("skillName", "", { strict: false });
  skill.set("skillDetails", "", { strict: false });
  skill.set("skillPic", null, { strict: false });

  await skill.save();

  res.json({
    message: "Skill removed successfully",
    data: skill,
  });
});

////delete project//
export const deleteProject = asyncHandelar(async (req, res, next) => {
  const { id } = req.params;
  const project = await Info.findById(id);
  if (!project) {
    return res.status(404).json({ message: "project not found" });
  }
  project.set("projectName", "", { strict: false });
  project.set("projectDetails", "", { strict: false });
  project.set("projectPic", null, { strict: false });

  await project.save();

  res.json({
    message: "project removed successfully",
    data: project,
  });
});

//edit project
export const edit_project = asyncHandelar(async (req, res, next) => {
  const { id } = req.params;
  const { projectName, projectDetails } = req.body;
  const projectPic = req.file ? `/${req.file.filename}` : null; // Handle single file upload

  const newProject = await Info.findByIdAndUpdate(
    id,
    {
      projectName,
      projectDetails,
      projectPic: projectPic || undefined, // Set projectPic if a file was uploaded
    },
    { new: true }
  );
  if (!newProject) {
    return res.status(404).json({ message: "Project not found" });
  }

  return res.json({ success: true, message: 'Project updated successfully', new_project: newProject });
});


//edit skill
export const edit_skill = asyncHandelar(async (req, res, next) => {
  const { id } = req.params;
  const { skillName, skillDetails } = req.body;
  const skillPic = req.file ? `/${req.file.filename}` : null; // Handle single file upload


  const newSkill = await Info.findByIdAndUpdate(
    id ,
    {
      skillName: skillName,
      skillDetails: skillDetails,
      skillPic: skillPic || undefined, // Set projectPic if a file was uploaded
    },
    { new: true }
  );
  if (!newSkill) {
    return res.status(404).json({ message: "skill not found" });
  }

  return res.json({success:true,message:'skill updated successfully',new_skill:newSkill})
});




export const getOneData = asyncHandelar(async (req, res, next) => {
  const { id } = req.params;
  const data = await Info.findById(id);

  if (!data) {
    return res.status(404).json({ message: "data not found" });
  }

  return res.json({success:true,message:'your data fetched successfully',new_skill:data})
});