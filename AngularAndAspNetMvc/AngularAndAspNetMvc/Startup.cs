using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularAndAspNetMvc.Startup))]
namespace AngularAndAspNetMvc
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
