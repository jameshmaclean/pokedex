using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PokemonAPI.Controllers.Models;

namespace PokemonAPI.Data.Map
{
    public class PokemonMap : IEntityTypeConfiguration<PokemonModel>
    {
        public void Configure(EntityTypeBuilder<PokemonModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Name).IsRequired();
            builder.Property(x => x.Type).IsRequired();
            builder.Property(x => x.Description).IsRequired();

        }
    }
}