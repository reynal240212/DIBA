<!-- resources/views/login.blade.php -->
@extends('layouts.app') 
{{-- Por ejemplo, si usas un layout llamado "app.blade.php" --}}

@section('content')
<div class="login-container">
    <div class="card shadow-sm p-4" style="max-width: 400px; width: 100%;">
      <div class="text-center mb-3">
        <img src="{{ asset('ESCUDO.png') }}" alt="Logo DIBA FBC" class="img-fluid" style="max-width: 100px;">
        <p class="text-muted fst-italic">Fuerza y Lealtad</p>
      </div>
      <h2 class="h4 text-center mb-4">Inicia Sesión</h2>
      <!-- Formulario de inicio de sesión -->
      <form action="{{ route('login.post') }}" method="POST">
        @csrf
        <div class="mb-3">
          <label for="email" class="form-label">Correo electrónico</label>
          <input type="email" class="form-control" id="email" name="email" placeholder="correo@ejemplo.com" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input type="password" class="form-control" id="password" name="password" placeholder="Contraseña" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
      </form>

      <div class="mt-3 text-center">
        <small class="text-muted">O inicia sesión con:</small>
      </div>
      <div class="d-flex justify-content-center mt-2">
        <a href="{{ route('google.login') }}" class="btn btn-danger me-2" title="Google">
          <i class="fa-brands fa-google"></i>
        </a>
        <a href="{{ route('facebook.login') }}" class="btn btn-primary me-2" title="Facebook">
          <i class="fa-brands fa-facebook-f"></i>
        </a>
        <a href="{{ route('apple.login') }}" class="btn btn-dark" title="Apple">
          <i class="fa-brands fa-apple"></i>
        </a>
      </div>
    </div>
</div>
@endsection
