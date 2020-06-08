using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AurigmaDemoApp.Models;
using Microsoft.EntityFrameworkCore;

namespace AurigmaDemoApp.Data
{
    public static class ProjectsRepository
    {
        public static async Task<Project> Update(Project project)
        {
            using (var db = new AppDbContext())
            {
                var existingProject = await db.Projects.AsNoTracking().Where(x => x.Id == project.Id && x.UserId == project.UserId)
                    .FirstOrDefaultAsync();
                if (existingProject != null)
                {
                    db.Projects.Update(project);
                    await db.SaveChangesAsync();
                }
                else
                {
                    await db.Projects.AddAsync(project);
                    await db.SaveChangesAsync();
                }

                return project;
            }
        }

        public static async Task<Project> Save(Project project)
        {
            using (var db = new AppDbContext())
            {
                await db.Projects.AddAsync(project);
                await db.SaveChangesAsync();

                return project;
            }
        }

        public static async Task<Project> Get(string userId, long id)
        {
            using (var db = new AppDbContext())
            {
                var project = await db.Projects.AsNoTracking().Where(x => x.Id == id && x.UserId == userId)
                    .FirstOrDefaultAsync();

                return project;
            }
        }

        public static async Task<List<Project>> GetAllForUser(string userId)
        {
            using (var db = new AppDbContext())
            {
                var projects = await db.Projects.AsNoTracking().Where(x => x.UserId == userId).ToListAsync();
                return projects;
            }
        }
    }
}
