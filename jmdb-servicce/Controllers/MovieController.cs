using System.Collections.Generic;
using System.Threading.Tasks;
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
        private readonly IRepository<Movie> _movieRepository;

        public MovieController(ILogger<Movie> logger, IRepository<Movie> movieRepository)
        {
            _logger = logger;
            _movieRepository = movieRepository;
        }
        
        [HttpGet]
        public async Task<IEnumerable<Movie>> Get()
        {
            return await _movieRepository.GetAll();
        }

        [HttpPost]
        public async Task<Movie> Post(Movie movie)
        {
            return await _movieRepository.Add(movie);
        }

        [HttpPut]
        public async Task<Movie> Put(Movie movie)
        {
            return await _movieRepository.Update(movie);
        }
        
    }
}