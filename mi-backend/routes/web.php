<?php
use App\Http\Controllers\Auth\SocialController;

// Ruta para redireccionar al proveedor
Route::get('https://https://diba-pi.vercel.app//auth/google/callback', [SocialController::class, 'redirectToGoogle'])->name('google.login');

// Ruta para manejar la respuesta del proveedor (callback)
Route::get('/auth/google/callback', [SocialController::class, 'handleGoogleCallback'])->name('google.callback');