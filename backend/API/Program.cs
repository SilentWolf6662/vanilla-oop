
namespace API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string allowSpecificOrigins = "_allowSpecificOrigins";
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

            // Adding Cors (Cross-Origin Resource Sharing) policy
            builder.Services.AddCors(options =>
            {
                options.AddPolicy(name: allowSpecificOrigins, policy => { policy.WithOrigins("http://localhost:5233", "http://localhost:5173", "http://localhost:7054", "http://localhost").AllowAnyHeader().AllowAnyMethod(); });
            });

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            WebApplication app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseCors(allowSpecificOrigins); // Add Cors policy

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
