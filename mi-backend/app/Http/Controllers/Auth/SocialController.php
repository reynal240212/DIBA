<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;  // Asegúrate de tener un modelo User
use Illuminate\Support\Facades\Auth;

class SocialController extends Controller
{
    /**
     * Redirecciona al usuario al proveedor (Google).
     */
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    /**
     * Maneja la respuesta (callback) de Google.
     */
    public function handleGoogleCallback()
    {
        try {
            // Obtenemos los datos del usuario desde Google
            $googleUser = Socialite::driver('google')->stateless()->user();
        } catch (\Exception $e) {
            // Si algo falla, redirigimos a login
            return redirect('/login');
        }

        // Verificar si el usuario ya existe o crearlo
        $user = User::updateOrCreate(
            ['email' => $googleUser->getEmail()],
            [
                'name'       => $googleUser->getName(),
                'google_id'  => $googleUser->getId(),
                // Otros campos que quieras guardar, por ejemplo:
                // 'avatar' => $googleUser->getAvatar(),
            ]
        );

        // Iniciar sesión en Laravel
        Auth::login($user, true);

        // Redirigir a la ruta que desees
        return redirect('/dashboard');
    }

    /**
     * Redirecciona al usuario al proveedor (Facebook).
     */
    public function redirectToFacebook()
    {
        return Socialite::driver('facebook')->redirect();
    }

    /**
     * Maneja la respuesta (callback) de Facebook.
     */
    public function handleFacebookCallback()
    {
        try {
            $facebookUser = Socialite::driver('facebook')->stateless()->user();
        } catch (\Exception $e) {
            return redirect('/login');
        }

        $user = User::updateOrCreate(
            ['email' => $facebookUser->getEmail()],
            [
                'name'        => $facebookUser->getName(),
                'facebook_id' => $facebookUser->getId(),
            ]
        );

        Auth::login($user, true);
        return redirect('/dashboard');
    }

    // Métodos similares para Apple, etc.
}

