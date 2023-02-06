import User from '../models/User.js';
import catchAsync from '../utils/catchAsync.js';

export const getUser = catchAsync(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json(user);
});
