const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const roleRoutes = require('./routes/roleRoutes');
const departmentRoutes = require('./routes/departmentsRoute');
const userRoutes = require('./routes/userRoute');
const galleryRoutes = require('./routes/galleryRoutes');
const unitRoutes = require('./routes/unitRoutes');
const ItemCategoryRoutes = require('./routes/ItemCategoryRoute');
const ItemRoutes = require('./routes/itemRoutes');
const RecipeExpertRoutes = require('./routes/recipeExpertRoutes');
const BranchRoutes = require('./routes/branchRoutes');
const BrandRoutes = require('./routes/brandRoute');
const CurrencyRoutes = require('./routes/currenxyRoute');
const MenuItemRoutes = require('./routes/MenuItem');
const TaxRoutes = require('./routes/tax');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb+srv://admin:admin@cluster0.gpyfrmg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Root route to check API
app.get('/', (req, res) => {
  res.json("API run successfully");
});

// Role routes
app.use('/api/roles', roleRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/users', userRoutes);
app.use('/api/gallery', galleryRoutes);
app.use('/api/units', unitRoutes);
app.use('/api/item-categories', ItemCategoryRoutes);
app.use('/api/items', ItemRoutes); 
app.use('/api/recipe-experts', RecipeExpertRoutes); 
app.use('/api/branch', BranchRoutes); 
app.use('/api/brand', BrandRoutes); 
app.use('/api/currency', CurrencyRoutes);
app.use('/api/menu', MenuItemRoutes) 
app.use('/api/tax', TaxRoutes) 

// Start server
const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
