using Microsoft.EntityFrameworkCore;
using jmdb_data.Model;
using System.Threading.Tasks;

namespace jmdb_data
{
    public class JMDBContext : DbContext, IDbContext
    {
        public JMDBContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Movie> Movies { get; set; }

        public virtual new DbSet<TEntity> Set<TEntity>() where TEntity : class, IEntity
        {
            return this.Set<TEntity>();
        }

        public Task<int> SaveChangesAsync()
        {
            return base.SaveChangesAsync();
        }
    }
}