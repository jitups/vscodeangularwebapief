namespace jmdb_data.Model
{
    public class Movie:IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public int Rating { get; set; }
    }
}