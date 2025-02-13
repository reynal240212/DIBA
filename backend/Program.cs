using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Agregar autenticación con JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "https://nwxdshisfyenkylgqxgz.supabase.co",
            ValidAudience = "https://nwxdshisfyenkylgqxgz.supabase.co",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eGRzaGlzZnllbmt5bGdxeGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNTQzMDgsImV4cCI6MjA1NDYzMDMwOH0.QoIiNo5pFA1_MVfE2ugLgyz4HeET-WhA0C_sNOkWv9g"))
        };
    });

builder.Services.AddAuthorization();
builder.Services.AddSingleton<SupabaseService>();

var app = builder.Build();

app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/", () => "API en ejecución");

app.Run();
