using AurigmaDemoApp.Models;
using RestSharp;
using System;
using System.Collections.Generic;
using System.IO;
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

        public async Task<IEnumerable<DesignDto>> GetDesigns()
        {
            var baseUrl = _settings.Url + "api/ProductTemplates/Designs/";

            _client = new RestClient(baseUrl + "?ext=true");
            _client.AddDefaultHeader("X-CustomersCanvasAPIKey", _settings.ApiKey);

            var request = new RestRequest(Method.GET);
            var response = await _client.ExecuteAsync<IEnumerable<CanvasDesignModel>>(request);

            return response.StatusCode != System.Net.HttpStatusCode.OK || response.ErrorException != null
                ? null
                : response.Data
                    .Where(x => x.Ext.ToLower() == "psd")
                    .Select(x => x.Id)
                    .Select(x => new DesignDto()
                    {
                        Id = Path.IsPathRooted(x) ? Path.GetFileName(x) : x,
                        Preview = baseUrl + x + "?width=400&height=400"
                    });
        }

        public async Task<IEnumerable<DesignDto>> GetStates(string userId)
        {
            var baseUrl = _settings.Url + $"api/users/{userId}/states";

            _client = new RestClient(baseUrl);
            _client.AddDefaultHeader("X-CustomersCanvasAPIKey", _settings.ApiKey);

            var request = new RestRequest(Method.GET);
            var response = await _client.ExecuteAsync<IEnumerable<CanvasState>>(request);

            if (response.StatusCode != System.Net.HttpStatusCode.OK || response.ErrorException != null)
            {
                return null;
            }

            var result = new List<DesignDto>();
            var states = response.Data.Select(x => x.StateId);
            baseUrl = _settings.Url + "api/Preview/GeneratePreview";
            var client = new RestClient(baseUrl);
            client.AddDefaultHeader("X-CustomersCanvasAPIKey", _settings.ApiKey);
            foreach (var state in states)
            {
                var preview = await GetPreviewForState(client, userId, state);
                result.Add(new DesignDto()
                {
                    Id = state,
                    Preview = preview
                });
            }

            return result;
        }

        public async Task<string> GenerateToken(string userId)
        {
            int tokenLifeTime = 3600;
            string updateOnCall = "True";
            var baseUrl = _settings.Url +
                          $"api/auth/users/{userId}/tokens?seconds={tokenLifeTime}&updateOnCall={updateOnCall}";

            _client = new RestClient(baseUrl);
            _client.AddDefaultHeader("X-CustomersCanvasAPIKey", _settings.ApiKey);

            var request = new RestRequest(Method.POST);
            var response = await _client.ExecuteAsync<CcAuthToken>(request);

            return response.StatusCode != System.Net.HttpStatusCode.OK || response.ErrorException != null
                ? null
                : response.Data.TokenId;
        }

        private async Task<string> GetPreviewForState(RestClient client, string userId, string stateId)
        {
            var data = new
            {
                productDefinitions = new string[] {stateId},
                userId = userId
            };

            var request = new RestRequest(Method.POST);
            request.AddParameter("application/json", Newtonsoft.Json.JsonConvert.SerializeObject(data),
                ParameterType.RequestBody);
            var response = await client.ExecuteAsync<List<List<List<string>>>>(request);

            return response.StatusCode != System.Net.HttpStatusCode.OK || response.ErrorException != null
                ? null
                : response.Data[0][0][0];
        }
    }
}