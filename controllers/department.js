const { Department, Course } = require("../models");

const all_depts = async (req, res) => {
  const depts = await Department.findAll({
    include: { model: Course, as: "courses" },
  }).catch((err) => res.send(err));

  res.render("base", { depts: depts });
};

const dept_create = async (req, res) => {
  await Department.create({
    name: req.body.name,
  }).catch((err) => res.send(err));
  return res.redirect("/departments");
};

const dept_update = async (req, res) => {
  const id = req.params.id;

  const dept = await Department.findOne({ where: { id } }).catch((err) =>
    res.send(err)
  );

  dept.name = req.body.name;

  await dept.save();

  res.redirect("/");
};

const dept_delete = async (req, res) => {
  const id = req.params.id;

  await Department.destroy({ where: { id } }).catch((err) => res.send(err));

  res.redirect("/");
};

module.exports = {
  all_depts,
  dept_create,
  dept_update,
  dept_delete,
};
