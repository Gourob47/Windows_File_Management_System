/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

// Route.get('/', async ({ view }) => {
//   return view.render('welcome')
// })

Route.post('/register','UsersController.registerUser')
Route.post('/login','UsersController.loginUser')
Route.post('/logout','UsersController.logoutUser')

Route.post('/foldercreate','FoldersController.store')
Route.get('/getall/:key','FoldersController.get')
Route.post('/filecreate','FilesController.store')
Route.post('/folderedit','FoldersController.edit')
Route.post('/folderdelete','FoldersController.delete')
Route.get('/getfile/:key','FilesController.get')

Route.post('/create/products','ProductsController.store').middleware(['auth','admin'])
Route.post('/create/category','CategoriesController.store').middleware(['auth','admin'])
Route.get('/productviews/:id','ProductsController.get')
Route.get('/productviews/:category/:id','ProductsController.details')
Route.get('/categoryviews','ProductsController.showCategory')
Route.get('/productfilter','ProductsController.filter')
Route.post('/cart/:id','CartsController.store').middleware('auth')
Route.get('/cart','CartsController.getCart').middleware('auth')
Route.post('/deletecart','CartsController.deleteCart').middleware('auth')
Route.post('/order','OrdersController.store').middleware('auth')
Route.get('/orderdetails','OrdersController.getOrder').middleware('auth')


