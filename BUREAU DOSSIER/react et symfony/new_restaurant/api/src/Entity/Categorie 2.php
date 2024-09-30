<?php

namespace App\Entity;

use App\Repository\CategorieRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert ;
#[ORM\Entity(repositoryClass: CategorieRepository::class)]
#[ApiResource(
    normalizationContext:['groups' => ['categories:read']],
    denormalizationContext:['groups' => ['categories:write']],
    operations:[
        new Get(
            paginationEnabled:true,
            uriTemplate: '/admin/categories/create/${categorie}',
            name:'app_admin_create_categorie',
            read:false
        ),
        new Get(
            paginationEnabled:true,
            uriTemplate: '/categories/listing',
            name:'app_listing_categorie',
            read:false
        ),
        new Get(
            paginationEnabled:true,
            uriTemplate: '/categories/detail/{id}',
            name:'app_detail_categorie',
            read:false
        ),
        new Get(
            paginationEnabled:true,
            uriTemplate: '/admin/categories/update/{id}/{category}',
            name:'app_admin_update_categorie',
            read:false
        ),
        new Get(
            paginationEnabled:true,
            uriTemplate: '/admin/categorie/delete/{id}',
            name:'app_admin_delete_categorie',
            read:false
        ),
    ]
)
]
class Categorie
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['categories:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    #[Groups(['categories:read','categories:write'])]
    //contraint du regex
    #[Assert\Regex('^[A-Za-z 0-9]{2,50}$')]
    private ?string $nom = null;

    #[ORM\Column]
    private ?bool $state = null;

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

    public function isState(): ?bool
    {
        return $this->state;
    }

    public function setState(bool $state): static
    {
        $this->state = $state;

        return $this;
    }
}
