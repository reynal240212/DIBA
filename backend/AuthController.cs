using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    private readonly SupabaseService _supabaseService;

    public AuthController(SupabaseService supabaseService)
    {
        _supabaseService = supabaseService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var session = await _supabaseService.Login(request.Email, request.Password);
        if (session == null)
        {
            return Unauthorized("Credenciales incorrectas");
        }

        // Guardar token en cookie
        Response.Cookies.Append("jwt", session.AccessToken, new CookieOptions
        {
            HttpOnly = true,
            Secure = true,
            SameSite = SameSiteMode.Strict
        });

        return Ok(new { message = "Login exitoso" });
    }

    [HttpGet("user")]
    public async Task<IActionResult> GetUser()
    {
        var user = await _supabaseService.GetUser();
        if (user == null)
        {
            return Unauthorized();
        }

        return Ok(user);
    }
}

public class LoginRequest
{
    public string Email { get; set; }
    public string Password { get; set; }
}
