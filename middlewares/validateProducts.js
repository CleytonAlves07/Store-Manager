const validateName = (req, res, next) => { 
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
};

// const validateName = (req, res) => { 
//   const { name } = req.body;
//   if (!name) {
//     res.status(400).json({ message: '"name" is required' });
//   } else if (name < 5) {
//     return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
//   }
// };

module.exports = {
  validateName,
};