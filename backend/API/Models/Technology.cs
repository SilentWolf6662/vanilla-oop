namespace API.Models
{
    public class Technology
    {
        public int Id { get; set; }
        public string? Name { get; set; }

        // Navigation property for the many-to-many relationship
        public ICollection<ProjectTechnology>? ProjectTechnologies { get; set; }
    }
}
