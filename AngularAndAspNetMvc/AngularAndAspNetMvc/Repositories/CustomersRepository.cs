using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularAndAspNetMvc.Repositories
{
    public class CustomersRepository
    {
        public IEnumerable<string> GetNames()
        {
            return new[]
            {
                "Bruce Dickinson",
                "Dave Murray",
                "Adrian Smith",
                "Janick Gers",
                "Steve Harris",
                "Nicko McBrain",
                "Eddie"
            };
        }
    }
}