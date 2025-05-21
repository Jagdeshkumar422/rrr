const Image = require('../models/Image');
const cloudinary = require('../config/cloudinary');

exports.uploadImages = async (req, res) => {
  try {
    const uploadedUrls = [];

    const uploadPromises = req.files.map((file) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: 'image' }, async (err, result) => {
          if (err) return reject(err);
          const newImage = new Image({ url: result.secure_url });
          await newImage.save();
          uploadedUrls.push(newImage);
          resolve();
        }).end(file.buffer);
      });
    });

    await Promise.all(uploadPromises);
    res.status(200).json(uploadedUrls);
  } catch (err) {
    res.status(500).json({ message: 'Upload failed', error: err.message });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({ message: 'Fetching images failed', error: err.message });
  }
};


exports.deleteImage = async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ message: 'Image not found' });

    // Delete from Cloudinary
    const publicId = image.publicId;
    if (publicId) {
      await cloudinary.uploader.destroy(publicId);
    }

    // Delete from MongoDB
    await image.deleteOne();
    res.status(200).json({ message: 'Image deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};