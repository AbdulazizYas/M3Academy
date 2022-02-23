const { Folder, Course, File } = require("../models");

const folder_view = async (req, res) => {
  const id = req.params.id;
  const folder = await Folder.findOne({
    where: { id },
    include: [
      { model: File, as: "files" },
      { model: Folder, as: "folders" },
    ],
  }).catch((err) => res.send(err));

  res.render("base", { folder });
};

const folder_create = async (req, res) => {
  const id = req.body.id;

  if (req.body.parent === "course") {
    const course = await Course.findOne({ where: { id } }).catch((err) =>
      res.send(err)
    );

    await course
      .createFolder({ name: req.body.name })
      .catch((err) => res.send(err));

    res.redirect("/courses/" + id);
  } else {
    const folder = await Folder.findOne({ where: { id } }).catch((err) =>
      res.send(err)
    );

    await folder
      .createFolder({ name: req.body.name })
      .catch((err) => res.send(err));

    res.redirect("/folders/" + id);
  }
};

const folder_update = async (req, res) => {
  const id = req.params.id;

  const folder = await Folder.findOne({ where: { id } }).catch((err) =>
    res.send(err)
  );

  folder.name = req.body.name;

  await folder.save();

  res.redirect("/folders/" + id);
};

const folder_delete = async (req, res) => {
  const id = req.params.id;

  await Folder.destroy({ where: { id } }).catch((err) => res.send(err));

  res.redirect("/");
};

module.exports = {
  folder_view,
  folder_create,
  folder_update,
  folder_delete,
};
