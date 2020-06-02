using System;

namespace jmdb_data.Model
{
    public class Movie : IEntity
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public int Rating { get; set; }

        public string Description { get; set; }

        public DateTime LastUpdateDate { get; set; }
    }
}