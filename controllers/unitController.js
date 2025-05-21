const Unit = require('../models/Units');

exports.getUnit = async (req, res) => {
  try {
    const units = await Unit.find();
    res.status(200).json(units);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch units' });
  }
};

exports.addUnit = async (req, res) => {
  try {
    const newUnit = new Unit({ name: req.body.name });
    await newUnit.save();
    res.status(201).json(newUnit);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add unit' });
  }
};

exports.updateUnit = async (req, res) => {
  try {
    const updatedUnit = await Unit.findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true });
    res.status(200).json(updatedUnit);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update unit' });
  }
};

exports.deleteUnit = async (req, res) => {
  try {
    await Unit.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Unit deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete unit' });
  }
};
