using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using jmdb_data.Model;

namespace jmdb_data.Repository
{
    public interface IRepository<T> where T: class,IEntity
    {
        Task<IEnumerable<T>> GetAll();
        Task<IEnumerable<T>> GetByCondition(Expression<Func<T, bool>> expression);
        Task<T> Get(int id);
        Task<T> Add(T entity);
        Task<T> Update(T entity);
        Task<T> Delete(int id);

    }
}