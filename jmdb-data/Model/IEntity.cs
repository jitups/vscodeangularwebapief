using System;

namespace jmdb_data.Model
{
    public interface IEntity
    {
        int Id { get; set; }
        DateTime LastUpdateDate { get; set; }
    }
}