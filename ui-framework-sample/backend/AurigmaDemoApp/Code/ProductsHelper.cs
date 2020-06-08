using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AurigmaDemoApp.Code
{
    public static class ProductsHelper
    {
        private static string ConfigsDirectory = @"App_Data\products";
        public static IEnumerable<string> GetProductConfigsList()
        {
            var files = Directory.EnumerateFiles(ConfigsDirectory, "*.json")
                .Select(x => x.Replace(ConfigsDirectory + "\\", "").Replace(".json", ""));
            return files;
        }

        public static async Task<string> GetProductConfig(string filename)
        {
            var path = Path.Combine(ConfigsDirectory, filename + ".json");
            if (File.Exists(path))
            {
                return await File.ReadAllTextAsync(path);
            }
            else
            {
                return "";
            }
        }
    }
}
