namespace API.Models
{
    using Microsoft.EntityFrameworkCore;

    public class ProjectDBContext : DbContext
    {
        public DbSet<Contact> Contact { get; set; }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Technology> Technologies { get; set; }
        public DbSet<ProjectTechnology> ProjectTechnologies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //#warning To protect potentially sensitive information in your connection string
                optionsBuilder.UseMySql("Server=127.0.0.1;Port=3306;Database=silentprojectdatabase;User Id=silentprojects;Password=quMIpo6itoj11A4e1EH4ne2AD5TojO;", new MySqlServerVersion(new Version(8, 0, 21)));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProjectTechnology>()
                .HasKey(pt => new { pt.ProjectId, pt.TechnologyId });

            modelBuilder.Entity<ProjectTechnology>()
                .HasOne(pt => pt.Project)
                .WithMany(p => p.ProjectTechnologies)
                .HasForeignKey(pt => pt.ProjectId);

            modelBuilder.Entity<ProjectTechnology>()
                .HasOne(pt => pt.Technology)
                .WithMany(t => t.ProjectTechnologies)
                .HasForeignKey(pt => pt.TechnologyId);
        }
    }
}
