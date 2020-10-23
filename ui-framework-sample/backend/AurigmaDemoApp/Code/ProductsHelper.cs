using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace AurigmaDemoApp.Code
{
    public static class ProductsHelper
    {
        private static string ConfigsDirectory = Path.Combine("App_Data", "products");
        public static IEnumerable<string> GetProductConfigsList(string rootDir)
        {
            var path = Path.Combine(rootDir, ConfigsDirectory);
            var files = Directory.EnumerateFiles(path, "*.json")
                .Select(x => x.Replace(path, "").Substring(1).Replace(".json", ""));
            return files;
        }

        public static async Task<string> GetProductConfig(string rootDir, string filename)
        {
            var path = Path.Combine(rootDir, ConfigsDirectory, filename + ".json");
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
