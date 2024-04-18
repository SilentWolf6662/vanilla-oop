namespace API.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string? NavText { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? ImageSrc { get; set; }
        public string? Status { get; set; }
        public string? RepositoryLink { get; set; }
        public string? LiveLink { get; set; }

        // Navigation property for the many-to-many relationship
        public ICollection<ProjectTechnology>? ProjectTechnologies { get; set; }
    }
}
