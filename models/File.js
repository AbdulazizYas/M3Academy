module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define("File", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  File.associate = (models) => {
    File.belongsTo(models.Course, {
      foreignKey: "courseId",
      as: "course",
      onDelete: "CASCADE",
    });

    File.belongsTo(models.Folder, {
      foreignKey: "folderId",
      as: "folder",
      onDelete: "CASCADE",
    });
  };
  return File;
};
