using Microsoft.EntityFrameworkCore;
using jmdb_data.Model;

namespace jmdb_data
{
    public class JMDBContext:DbContext
    {
       public JMDBContext(DbContextOptions options):base(options)
       {
           
       } 

       public DbSet<Movie> Movies{get;set;}
    }
}