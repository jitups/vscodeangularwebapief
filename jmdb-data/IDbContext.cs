using System;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using jmdb_data.Model;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace jmdb_data
{
    public interface IDbContext : IDisposable
    {
        DbSet<TEntity> Set<TEntity>() where TEntity : class, IEntity;

        Task<int> SaveChangesAsync();
    }

}
