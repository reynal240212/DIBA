using Supabase;
using Supabase.Gotrue;
using System.Threading.Tasks;

public class SupabaseService
{
    private readonly Client _supabaseClient;

    public SupabaseService()
    {
        var options = new SupabaseOptions { AutoConnectRealtime = true };
        _supabaseClient = new Client("https://nwxdshisfyenkylgqxgz.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53eGRzaGlzZnllbmt5bGdxeGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwNTQzMDgsImV4cCI6MjA1NDYzMDMwOH0.QoIiNo5pFA1_MVfE2ugLgyz4HeET-WhA0C_sNOkWv9g", options);
    }

    public async Task<Session> Login(string email, string password)
    {
        var session = await _supabaseClient.Auth.SignIn(email, password);
        return session;
    }

    public async Task<User> GetUser()
    {
        return await _supabaseClient.Auth.GetUser();
    }
}

