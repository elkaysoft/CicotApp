using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CicotApp.Web.Controllers
{
    public class AdminController : Controller
    {
        public IActionResult dashboard()
        {
            return View();
        }

        public IActionResult courses()
        {
            return View();
        }

        public IActionResult CourseUpload()
        {
            return View();
        }

        public IActionResult AddStudent()
        {
            return View();
        }

        public IActionResult StudentListings()
        {
            return View();
        }

        public IActionResult ResultMgmt()
        {
            return View();
        }

    }
}
