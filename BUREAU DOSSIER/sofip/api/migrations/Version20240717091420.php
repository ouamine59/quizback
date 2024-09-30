<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240717091420 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE disposer (id INT AUTO_INCREMENT NOT NULL, produit_id INT NOT NULL, chose_option_id INT NOT NULL, INDEX IDX_C8BA5910F347EFB (produit_id), INDEX IDX_C8BA591069120F73 (chose_option_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE horaire (id INT AUTO_INCREMENT NOT NULL, horaire VARCHAR(5) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE horaire_ouverture (id INT AUTO_INCREMENT NOT NULL, jour_ouverture_id INT NOT NULL, horaire_id INT NOT NULL, INDEX IDX_D97D2495ACEA083B (jour_ouverture_id), INDEX IDX_D97D249558C54515 (horaire_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE jour_ouverture (id INT AUTO_INCREMENT NOT NULL, restaurant_id INT NOT NULL, jour VARCHAR(15) NOT NULL, INDEX IDX_5125E908B1E7706E (restaurant_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `option` (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, type_option TINYINT(1) NOT NULL, type_chose TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produit (id INT AUTO_INCREMENT NOT NULL, categorie_id INT NOT NULL, restaurant_id INT NOT NULL, nom VARCHAR(100) NOT NULL, description VARCHAR(255) NOT NULL, prix DOUBLE PRECISION NOT NULL, image VARCHAR(255) DEFAULT NULL, mis_en_avant TINYINT(1) NOT NULL, have_option TINYINT(1) NOT NULL, INDEX IDX_29A5EC27BCF5E72D (categorie_id), INDEX IDX_29A5EC27B1E7706E (restaurant_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE reservation (id INT AUTO_INCREMENT NOT NULL, jour_id INT NOT NULL, horaire_id INT NOT NULL, restaurant_id INT NOT NULL, nombre_de_guest INT NOT NULL, email VARCHAR(255) NOT NULL, date DATETIME NOT NULL, INDEX IDX_42C84955220C6AD0 (jour_id), INDEX IDX_42C8495558C54515 (horaire_id), INDEX IDX_42C84955B1E7706E (restaurant_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE restaurant (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, adresse VARCHAR(255) NOT NULL, ville VARCHAR(100) NOT NULL, nombre_de_place INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(100) NOT NULL, role VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE disposer ADD CONSTRAINT FK_C8BA5910F347EFB FOREIGN KEY (produit_id) REFERENCES produit (id)');
        $this->addSql('ALTER TABLE disposer ADD CONSTRAINT FK_C8BA591069120F73 FOREIGN KEY (chose_option_id) REFERENCES `option` (id)');
        $this->addSql('ALTER TABLE horaire_ouverture ADD CONSTRAINT FK_D97D2495ACEA083B FOREIGN KEY (jour_ouverture_id) REFERENCES jour_ouverture (id)');
        $this->addSql('ALTER TABLE horaire_ouverture ADD CONSTRAINT FK_D97D249558C54515 FOREIGN KEY (horaire_id) REFERENCES horaire (id)');
        $this->addSql('ALTER TABLE jour_ouverture ADD CONSTRAINT FK_5125E908B1E7706E FOREIGN KEY (restaurant_id) REFERENCES restaurant (id)');
        $this->addSql('ALTER TABLE produit ADD CONSTRAINT FK_29A5EC27BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id)');
        $this->addSql('ALTER TABLE produit ADD CONSTRAINT FK_29A5EC27B1E7706E FOREIGN KEY (restaurant_id) REFERENCES restaurant (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955220C6AD0 FOREIGN KEY (jour_id) REFERENCES jour_ouverture (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C8495558C54515 FOREIGN KEY (horaire_id) REFERENCES horaire (id)');
        $this->addSql('ALTER TABLE reservation ADD CONSTRAINT FK_42C84955B1E7706E FOREIGN KEY (restaurant_id) REFERENCES restaurant (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE disposer DROP FOREIGN KEY FK_C8BA5910F347EFB');
        $this->addSql('ALTER TABLE disposer DROP FOREIGN KEY FK_C8BA591069120F73');
        $this->addSql('ALTER TABLE horaire_ouverture DROP FOREIGN KEY FK_D97D2495ACEA083B');
        $this->addSql('ALTER TABLE horaire_ouverture DROP FOREIGN KEY FK_D97D249558C54515');
        $this->addSql('ALTER TABLE jour_ouverture DROP FOREIGN KEY FK_5125E908B1E7706E');
        $this->addSql('ALTER TABLE produit DROP FOREIGN KEY FK_29A5EC27BCF5E72D');
        $this->addSql('ALTER TABLE produit DROP FOREIGN KEY FK_29A5EC27B1E7706E');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955220C6AD0');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C8495558C54515');
        $this->addSql('ALTER TABLE reservation DROP FOREIGN KEY FK_42C84955B1E7706E');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE disposer');
        $this->addSql('DROP TABLE horaire');
        $this->addSql('DROP TABLE horaire_ouverture');
        $this->addSql('DROP TABLE jour_ouverture');
        $this->addSql('DROP TABLE `option`');
        $this->addSql('DROP TABLE produit');
        $this->addSql('DROP TABLE reservation');
        $this->addSql('DROP TABLE restaurant');
        $this->addSql('DROP TABLE user');
    }
}
