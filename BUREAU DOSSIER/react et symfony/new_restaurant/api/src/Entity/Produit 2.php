<?php

namespace App\Entity;

use App\Repository\ProduitRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert ;
#[ApiResource(
    normalizationContext:['groups' => ['products:read']],
    denormalizationContext:['groups' => ['products:write']],
    operations:[
        new Get(
            paginationEnabled:true,
            uriTemplate: '/products/listing',
            name:'app_products_listing',
            read:false
        ),       
    ]
)
]
#[ORM\Entity(repositoryClass: ProduitRepository::class)]
class Produit
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['products:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Groups(['products:read','products:write'])]
    #[Assert\Regex('^[A-Za-z 0-9]{2,100}$')]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    #[Groups(['products:read','products:write'])]
    #[Assert\Regex('^[A-Za-z 0-9]{0,255}$')]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups(['products:read','products:write'])]
    #[Assert\Regex('^[0-9,.]{1,5}$')]
    private ?float $prix = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['products:read','products:write'])]
    #[Assert\Regex('^[A-Za-z 0-9-_%&]{2,50}$')]
    private ?string $image = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['products:read','products:write'])]
    private ?Categorie $categorie = null;

    #[ORM\Column]
    #[Groups(['products:read','products:write'])]
    #[Assert\Regex('^[0-1]{1}$')]
    private ?bool $misEnAvant = null;

    #[ORM\Column]
    #[Groups(['products:read','products:write'])]
    #[Assert\Regex('^[0-1]{1}$')]
    private ?bool $haveOption = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['products:read','products:write'])]
    private ?Restaurant $restaurant = null;

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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): static
    {
        $this->prix = $prix;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): static
    {
        $this->image = $image;

        return $this;
    }

    public function getCategorie(): ?Categorie
    {
        return $this->categorie;
    }

    public function setCategorie(?Categorie $categorie): static
    {
        $this->categorie = $categorie;

        return $this;
    }

    public function isMisEnAvant(): ?bool
    {
        return $this->misEnAvant;
    }

    public function setMisEnAvant(bool $misEnAvant): static
    {
        $this->misEnAvant = $misEnAvant;

        return $this;
    }

    public function isHaveOption(): ?bool
    {
        return $this->haveOption;
    }

    public function setHaveOption(bool $haveOption): static
    {
        $this->haveOption = $haveOption;

        return $this;
    }

    public function getRestaurant(): ?Restaurant
    {
        return $this->restaurant;
    }

    public function setRestaurant(?Restaurant $restaurant): static
    {
        $this->restaurant = $restaurant;

        return $this;
    }
}
