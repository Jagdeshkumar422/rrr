const Departments = require('../models/departments');

exports.getDepartments = async (req, res) => {
  try {
    const departments = await Departments.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch roles' });
  }
};

exports.addDepartments = async (req, res) => {
  try {
    const newdepartment = new Departments({ name: req.body.name, location: req.body.location });
    await newdepartment.save();
    res.status(201).json(newdepartment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add role' });
  }
};

exports.updateDepartments = async (req, res) => {
  try {
    const updatedRole = await Departments.findByIdAndUpdate(req.params.id, { name: req.body.name,location: req.body.location }, { new: true });
    res.status(200).json(updatedRole);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update role' });
  }
};

exports.deleteDepartments = async (req, res) => {
  try {
    await Departments.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Role deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete role' });
  }
};
