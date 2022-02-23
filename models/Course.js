module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Course.associate = (models) => {
    Course.hasMany(models.File, {
      foreignKey: "courseId",
      as: "files",
      onDelete: "CASCADE",
    });

    Course.hasMany(models.Folder, {
      foreignKey: "courseId",
      as: "folders",
      onDelete: "CASCADE",
    });

    Course.belongsTo(models.Department, {
      foreignKey: "departmentId",
      as: "department",
      onDelete: "CASCADE",
    });
  };
  return Course;
};
