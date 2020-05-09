using System.Collections.Generic;
using jmdb_data;
using jmdb_data.Model;
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

        public MovieController(ILogger<Movie> logger, JMDBContext jMDBContext)
        {
            _logger = logger;
            _jMDBContext=jMDBContext;
        }
        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return _jMDBContext.Movies;
        }
        
    }
}