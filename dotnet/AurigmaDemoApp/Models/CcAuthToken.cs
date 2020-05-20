using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AurigmaDemoApp.Models
{
    public class CcAuthToken
    {
        public string TokenId { get; set; }

        public string UserId { get; set; }

        public DateTime ExpireTime { get; set; }

        public int OriginalSeconds { get; set; }

        public bool UpdateOnCall { get; set; }

        public string UserData { get; set; }
    }
}
