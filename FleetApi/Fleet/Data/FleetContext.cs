using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Fleet.Models;

namespace Fleet.Data
{
    public class FleetContext : DbContext
    {
        public FleetContext (DbContextOptions<FleetContext> options)
            : base(options)
        {
        }

        public DbSet<Fleet.Models.Driver> Driver { get; set; } = default!;
    }
}
