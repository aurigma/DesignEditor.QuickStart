using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AurigmaDemoApp.Models
{
    public class Project
    {
        public long Id { get; set; }

        public string ConfigId { get; set; }

        public string Snapshot { get; set; }

        public string Preview { get; set; }

        [Required]
        public string UserId { get; set; }
    }
}
