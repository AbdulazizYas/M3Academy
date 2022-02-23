const { Course, Department, File, Folder } = require("../models");

const course_view = async (req, res) => {
  const id = req.params.id;
  const course = await Course.findOne({
    where: { id },
    include: [
      { model: File, as: "files" },
      { model: Folder, as: "folders" },
    ],
  }).catch((err) => res.send(err));

  res.render("base", { course });
};

const course_create = async (req, res) => {
  const deptId = req.body.deptId;

  const dept = await Department.findOne({ where: { id: deptId } }).catch(
    (err) => res.send(err)
  );

  await dept
    .createCourse({ name: req.body.name })
    .catch((err) => res.send(err));

  res.redirect("/departments");
};

const course_update = async (req, res) => {
  const id = req.params.id;

  const course = await Course.findOne({ where: { id } }).catch((err) =>
    res.send(err)
  );

  course.name = req.body.name;

  await course.save();

  res.redirect("/");
};

const course_delete = async (req, res) => {
  const id = req.params.id;

  await Course.destroy({ where: { id } }).catch((err) => res.send(err));

  res.redirect("/");
};

module.exports = {
  course_view,
  course_create,
  course_update,
  course_delete,
};
