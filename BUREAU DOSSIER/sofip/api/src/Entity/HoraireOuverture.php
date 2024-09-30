<?php

namespace App\Entity;

use App\Repository\HoraireOuvertureRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: HoraireOuvertureRepository::class)]
class HoraireOuverture
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?JourOuverture $jourOuverture = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Horaire $horaire = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getJourOuverture(): ?JourOuverture
    {
        return $this->jourOuverture;
    }

    public function setJourOuverture(?JourOuverture $jourOuverture): static
    {
        $this->jourOuverture = $jourOuverture;

        return $this;
    }

    public function getHoraire(): ?Horaire
    {
        return $this->horaire;
    }

    public function setHoraire(?Horaire $horaire): static
    {
        $this->horaire = $horaire;

        return $this;
    }
}
