using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Senai_Spmedgroups_Web_Api.Domains
{
    public partial class SpmedContext : DbContext
    {
        public SpmedContext()
        {
        }

        public SpmedContext(DbContextOptions<SpmedContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Agendamentos> Agendamentos { get; set; }
        public virtual DbSet<Clinicas> Clinicas { get; set; }
        public virtual DbSet<Especialidades> Especialidades { get; set; }
        public virtual DbSet<Medicos> Medicos { get; set; }
        public virtual DbSet<Pacientes> Pacientes { get; set; }
        public virtual DbSet<Situacao> Situacao { get; set; }
        public virtual DbSet<Usuarios> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=.\\SqlExpress;Initial Catalog=SENAI_SPRINT1_PROJETO_FINAL;user id=sa;password=132");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agendamentos>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.DtAgendamento)
                    .HasColumnName("DT_Agendamento")
                    .HasColumnType("date");

                entity.Property(e => e.IdMedico).HasColumnName("ID_Medico");

                entity.Property(e => e.IdPaciente).HasColumnName("ID_Paciente");

                entity.Property(e => e.IdSituacao).HasColumnName("ID_Situacao");

                entity.HasOne(d => d.IdMedicoNavigation)
                    .WithMany(p => p.Agendamentos)
                    .HasForeignKey(d => d.IdMedico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Agendamen__ID_Me__2FCF1A8A");

                entity.HasOne(d => d.IdPacienteNavigation)
                    .WithMany(p => p.Agendamentos)
                    .HasForeignKey(d => d.IdPaciente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Agendamen__ID_Pa__2EDAF651");

                entity.HasOne(d => d.IdSituacaoNavigation)
                    .WithMany(p => p.Agendamentos)
                    .HasForeignKey(d => d.IdSituacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Agendamen__ID_Si__30C33EC3");
            });

            modelBuilder.Entity<Clinicas>(entity =>
            {
                entity.HasIndex(e => e.Cnpj)
                    .HasName("UQ__Clinicas__AA57D6B4A36DE9C3")
                    .IsUnique();

                entity.HasIndex(e => e.NomeFantasia)
                    .HasName("UQ__Clinicas__A1456661FDD3FFE3")
                    .IsUnique();

                entity.HasIndex(e => e.RazaoSocial)
                    .HasName("UQ__Clinicas__B0E5930EE8CDFF0A")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Cnpj)
                    .IsRequired()
                    .HasColumnName("CNPJ")
                    .HasMaxLength(14)
                    .IsUnicode(false);

                entity.Property(e => e.Endereço)
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.NomeFantasia)
                    .IsRequired()
                    .HasColumnName("Nome_Fantasia")
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.RazaoSocial)
                    .IsRequired()
                    .HasColumnName("Razao_Social")
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Especialidades>(entity =>
            {
                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Especial__7D8FE3B26B45EF03")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Medicos>(entity =>
            {
                entity.HasIndex(e => e.Crm)
                    .HasName("UQ__Medicos__C1F887FF9CE0199B")
                    .IsUnique();

                entity.HasIndex(e => e.IdUsuario)
                    .HasName("UQ__Medicos__DE4431C4DB77160E")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Crm).HasColumnName("CRM");

                entity.Property(e => e.IdEspecialidade).HasColumnName("ID_Especialidade");

                entity.Property(e => e.IdUsuario).HasColumnName("ID_Usuario");

                entity.HasOne(d => d.IdEspecialidadeNavigation)
                    .WithMany(p => p.Medicos)
                    .HasForeignKey(d => d.IdEspecialidade)
                    .HasConstraintName("FK__Medicos__ID_Espe__5EBF139D");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithOne(p => p.Medicos)
                    .HasForeignKey<Medicos>(d => d.IdUsuario)
                    .HasConstraintName("FK__Medicos__ID_Usua__5DCAEF64");
            });

            modelBuilder.Entity<Pacientes>(entity =>
            {
                entity.HasIndex(e => e.Cpf)
                    .HasName("UQ__Paciente__C1F89731093ED445")
                    .IsUnique();

                entity.HasIndex(e => e.IdUsuario)
                    .HasName("UQ__Paciente__DE4431C4EA42EEAC")
                    .IsUnique();

                entity.HasIndex(e => e.Rg)
                    .HasName("UQ__Paciente__321537C89FA36F92")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Cpf)
                    .IsRequired()
                    .HasColumnName("CPF")
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.Property(e => e.DtNascimento)
                    .HasColumnName("DT_Nascimento")
                    .HasColumnType("datetime");

                entity.Property(e => e.Endereço)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IdUsuario).HasColumnName("ID_Usuario");

                entity.Property(e => e.Rg)
                    .IsRequired()
                    .HasColumnName("RG")
                    .HasMaxLength(11)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithOne(p => p.Pacientes)
                    .HasForeignKey<Pacientes>(d => d.IdUsuario)
                    .HasConstraintName("FK__Pacientes__ID_Us__6EF57B66");
            });

            modelBuilder.Entity<Situacao>(entity =>
            {
                entity.HasIndex(e => e.Nome)
                    .HasName("UQ__Situacao__7D8FE3B2EE1DD0B3")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuarios>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.IdClinica).HasColumnName("ID_Clinica");

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false);

                entity.Property(e => e.TipoUsuario).HasColumnName("Tipo_Usuario");

                entity.HasOne(d => d.IdClinicaNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdClinica)
                    .HasConstraintName("FK__Usuarios__ID_Cli__59063A47");
            });
        }
    }
}
