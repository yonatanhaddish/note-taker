const express= require('express');

const app= express();
const PORT= process.env.PORT || 3000;
const apiRoutes= require('./routes/apiRoute/apiRoute');
const htmlRoutes= require('./routes/htmlRoute/htmlRoute');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});