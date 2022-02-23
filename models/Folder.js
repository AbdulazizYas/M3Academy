module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define("Folder", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Folder.associate = (models) => {
    Folder.hasMany(models.File, {
      foreignKey: "folderId",
      as: "files",
      onDelete: "CASCADE",
    });

    Folder.hasMany(models.Folder, {
      foreignKey: "folderId",
      as: "folders",
      onDelete: "CASCADE",
    });

    Folder.belongsTo(models.Course, {
      foreignKey: "courseId",
      as: "course",
      onDelete: "CASCADE",
    });

    Folder.belongsTo(models.Folder, {
      foreignKey: "folderId",
      as: "folder",
      onDelete: "CASCADE",
    });
  };
  return Folder;
};
