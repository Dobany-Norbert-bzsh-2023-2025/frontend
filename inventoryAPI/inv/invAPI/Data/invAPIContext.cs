using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using invAPI.Models;

namespace invAPI.Data
{
    public class invAPIContext : DbContext
    {
        public invAPIContext (DbContextOptions<invAPIContext> options)
            : base(options)
        {
        }

        public DbSet<invAPI.Models.Inventory> Inventory { get; set; } = default!;
    }
}
