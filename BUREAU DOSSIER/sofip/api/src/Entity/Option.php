<?php

namespace App\Entity;

use App\Repository\OptionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OptionRepository::class)]
#[ORM\Table(name: '`option`')]
class Option
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    private ?string $nom = null;

    #[ORM\Column]
    private ?bool $typeOption = null;

    #[ORM\Column]
    private ?bool $typeChose = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function isTypeOption(): ?bool
    {
        return $this->typeOption;
    }

    public function setTypeOption(bool $typeOption): static
    {
        $this->typeOption = $typeOption;

        return $this;
    }

    public function isTypeChose(): ?bool
    {
        return $this->typeChose;
    }

    public function setTypeChose(bool $typeChose): static
    {
        $this->typeChose = $typeChose;

        return $this;
    }
}
