using AurigmaDemoApp.Models;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AurigmaDemoApp.Code
{
    public class CustomersCanvasApiClient
    {
        private IRestClient _client;
        private readonly CustomersCanvasSettings _settings;

        public CustomersCanvasApiClient(CustomersCanvasSettings settings)
        {
            _settings = settings;
        }

        public async Task<string> GenerateToken(string userId)
        {
            int tokenLifeTime = 3600;
            string updateOnCall = "True";
            var baseUrl = _settings.Url + $"api/auth/users/{userId}/tokens?seconds={tokenLifeTime}&updateOnCall={updateOnCall}";

            _client = new RestClient(baseUrl);
            _client.AddDefaultHeader("X-CustomersCanvasAPIKey", _settings.ApiKey);

            var request = new RestRequest(Method.POST);
            var response = await _client.ExecuteAsync<CcAuthToken>(request);

            if (response.StatusCode != System.Net.HttpStatusCode.OK || response.ErrorException != null)
            {
                return null;
            }
            else
            {
                return response.Data.TokenId;
            }
        }
    }
}
