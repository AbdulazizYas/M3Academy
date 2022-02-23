module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define("Department", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });

  Department.associate = (models) => {
    Department.hasMany(models.Course, {
      foreignKey: "departmentId",
      as: "courses",
      onDelete: "CASCADE",
    });
  };
  return Department;
};
