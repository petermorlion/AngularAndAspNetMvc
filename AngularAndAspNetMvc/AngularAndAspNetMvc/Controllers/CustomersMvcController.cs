using AngularAndAspNetMvc.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularAndAspNetMvc.Controllers
{
    public class CustomersMvcController : Controller
    {
        //
        // GET: /CustomersMvc/
        public ActionResult Index()
        {
            var names = new CustomersRepository().GetNames();
            return View(names);
        }
	}
}