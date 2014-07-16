using AngularAndAspNetMvc.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace AngularAndAspNetMvc.Controllers
{
    public class RestController : ApiController
    {
        // GET api/rest
        public IEnumerable<string> Get()
        {
            return new CustomersRepository().GetNames();
        }

        // GET api/rest/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/rest
        public void Post([FromBody]string value)
        {
        }

        // PUT api/rest/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/rest/5
        public void Delete(int id)
        {
        }
    }
}
