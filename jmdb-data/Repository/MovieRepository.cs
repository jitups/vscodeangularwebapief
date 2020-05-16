using jmdb_data.Model;

namespace jmdb_data.Repository
{
    public class MovieRepository:EfCoreRepository<Movie,JMDBContext>
    {
        public MovieRepository(JMDBContext context):base(context)
        {
            
        }   
    }
}