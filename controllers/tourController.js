const tourModel = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    const tours = await tourModel.find();

    res.status(200).json({
      status: 'success',
      requestedAt: req.requestTime,
      results: tours.length,
      data: {
        tours
      }
    });
  } catch (err) {
    res.status(200).json({
      status: 'fail',
      message: 'no content found '
    });
  }
};

exports.getTour = async (req, res) => {
  try {
    const id = req.params.id * 1;

    const tour = await tourModel.findById(id);

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (error) {
    res.status(200).json({
      status: 'fail',
      message: 'no content found '
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    const newTour = await tourModel.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      err
    });
  }
};

exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null
  });
};
