using System.Collections.Generic;
using jmdb_data;
using jmdb_data.Model;
using jmdb_data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace jmdb_servicce.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController
    {
        private readonly ILogger<Movie> _logger;
        private readonly JMDBContext _jMDBContext;

        private readonly MovieRepository _movieRepository;

        public MovieController(ILogger<Movie> logger, JMDBContext jMDBContext)
        {
            _logger = logger;
            _jMDBContext = jMDBContext;
        }
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _jMDBContext.Movies;
        }

    }
}